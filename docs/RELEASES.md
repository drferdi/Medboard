# Rilis — MedBoard

<!-- Architected and built by Drferdi. -->

## Versi saat ini

Versi menurut field `version` di `package.json` adalah `0.1.0`. `CHANGELOG.md` mengikuti
Keep a Changelog 1.1.0 dengan versi Semantic Versioning: rilis `[0.1.0] - 2026-10-07`
(rilis standalone pertama MedBoard, sebelumnya bernama IntelligenceBoard) dan bagian
`[Unreleased]` yang mencatat penambahan, perubahan, dan penghapusan sejak saat itu.

## Gerbang pra-rilis yang tercatat

- `pnpm run lint` — pemeriksaan TypeScript (`tsc --noEmit`).
- `pnpm test` — rangkaian test penuh (`scripts/test-suite.ts`).
- `pnpm run test:capsule` — test kontrak: suite utama plus `test:cdss:engine`,
  `test:news2`, dan `test:symphony:safety-gates` (`project.contract.json`).
- `pnpm run build` — `prisma generate` lalu `next build`.
- `pnpm run security:baseline` — `test:auth-hardening` + `test:cdss:protected`;
  dijalankan CI di workflow `Dashboard Security Baseline`.
- `pnpm run deploy:dry-run` — pemeriksaan build dan setelan wajib sebelum rilis.
- Pesan commit memakai Conventional Commits (`feat`, `fix`, `docs`, `test`,
  `refactor`, `chore`) dengan subjek imperatif (`CONTRIBUTING.md`).
- Template pull request mewajibkan checklist keselamatan klinis, checklist teknis,
  checklist dokumentasi, dan catatan deployment termasuk kebutuhan migrasi database.

## Persetujuan produksi

Production deployment membutuhkan Gate 5 — persetujuan Chief; merge ke branch produksi
tanpa persetujuan tersebut dilarang (`.github/PULL_REQUEST_TEMPLATE.md`). Prosedur
deploy, rollback (`app.old`), dan backup ada di `docs/deploy-vps.md`.

## Hal yang belum dikonfirmasi

- Jadwal/kadensi rilis: Belum dikonfirmasi.
- Penanda rilis (tag/artefak) dan kanal pengumuman: Belum dikonfirmasi.
- Penyetuju selain Chief: Belum dikonfirmasi.
- Kriteria rollback selain kegagalan/ketidakamanan health check: Belum dikonfirmasi.

---

<sub>Architected and built by Drferdi — 2026 · Sentra Healthcare Artificial Intelligence</sub>
