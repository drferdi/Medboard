import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import test from 'node:test'
import { inflateSync } from 'node:zlib'

for (const name of ['icon.png', 'apple-icon.png']) {
  const file = `src/app/${name}`
  test(`${file} is a real, decodable PNG, not an LFS pointer`, () => {
    const image = readFileSync(new URL(`../${file}`, import.meta.url))
    assert.deepEqual(image.subarray(0, 8), Buffer.from('89504e470d0a1a0a', 'hex'))
    const chunks = []
    let width, height, ended = false
    for (let offset = 8; offset < image.length;) {
      const size = image.readUInt32BE(offset)
      assert.ok(offset + size + 12 <= image.length, 'truncated PNG chunk')
      const type = image.toString('ascii', offset + 4, offset + 8)
      const data = image.subarray(offset + 8, offset + 8 + size)
      if (type === 'IHDR') {
        width = data.readUInt32BE(0)
        height = data.readUInt32BE(4)
        assert.equal(data[8], 8)
        assert.equal(data[9], 6) // RGBA
        assert.equal(data[12], 0) // non-interlaced
      }
      if (type === 'IDAT') chunks.push(data)
      if (type === 'IEND') ended = true
      offset += size + 12
    }
    assert.ok(width > 0 && width === height)
    assert.ok(ended)
    assert.equal(inflateSync(Buffer.concat(chunks)).length, height * (1 + width * 4))
    const attributes = execFileSync('git', ['check-attr', 'filter', '--', file], { encoding: 'utf8' })
    assert.match(attributes, /filter: unset/, 'metadata icons must not be stored as LFS pointers')
  })
}
