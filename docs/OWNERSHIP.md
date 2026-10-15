# Kepemilikan — MedBoard

<!-- Architected and built by Drferdi. -->

## Pemilik

Pemilik proyek menurut `project.contract.json` adalah Chief (dr. Ferdi Iskandar).
`CONTRIBUTING.md` menyatakan proyek dimiliki oleh dr. Ferdi Iskandar dan kontribusi kode
berasal dari orang yang diundang pemilik. `.github/CODEOWNERS` menetapkan `* @drferdi`,
sehingga setiap perubahan membutuhkan review pemilik proyek.

## Tanggung jawab yang tercatat

- Perubahan logika klinis (`src/lib/cdss/**`, peringatan tanda vital, NEWS2, aturan
  trajektori dan resep) membutuhkan review pemilik sebelum merge (`CONTRIBUTING.md`).
- Perubahan database (`prisma/schema.prisma`, migrasi) dan kode sign-in/session
  membutuhkan persetujuan pemilik terlebih dahulu (`CONTRIBUTING.md`).
- Deployment produksi membutuhkan persetujuan Chief Gate 5; merge ke branch produksi
  tanpa persetujuan tersebut dilarang oleh template pull request
  (`.github/PULL_REQUEST_TEMPLATE.md`).
- Laporan kerentanan ditangani privat oleh pemilik proyek melalui
  https://ferdiiskandar.com, bukan melalui issue publik (`SECURITY.md`).
- Pertanyaan lisensi enterprise ditujukan ke Drferdi — dr. Ferdi Iskandar,
  Sentra Artificial Intelligence (`LICENSE`).

## Hal yang belum dikonfirmasi

- Pemilik cadangan / pelaksana tugas bila pemilik utama tidak tersedia:
  Belum dikonfirmasi.
- Kontak operasional harian (nama, kanal, jam jaga): Belum dikonfirmasi.
- Penyetuju rilis selain Chief: Belum dikonfirmasi.
- Alamat inbox privasi khusus (`DATA_PRIVACY.md` masih memakai placeholder
  `PRIVACY_CONTACT_EMAIL`): Belum dikonfirmasi.

---

<sub>Architected and built by Drferdi — 2026 · Sentra Healthcare Artificial Intelligence</sub>
