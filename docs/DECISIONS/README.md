# Keputusan Arsitektur — MedBoard

<!-- Architected and built by Drferdi. -->

Keputusan di bawah ini tercatat karena buktinya ada di repositori (kode, manifes, skrip,
atau dokumen yang sudah ada). Setiap butir menunjuk ke berkas buktinya. Belum ada berkas
ADR bernomor di direktori ini; keputusan baru dicatat di sini mengikuti format butir yang
sama: konteks, keputusan, bukti.

## D-01 — Server kustom sebagai entry point runtime

Kode menjalankan handler Next.js dan server Socket.IO dari `server.ts`; skrip produksi
adalah `start` (`tsx --conditions react-server server.ts`), bukan `next start` polos.
Bukti: `server.ts`, `package.json` (skrip `dev`, `start`), `docs/SETUP.md`.

## D-02 — Mesin diagnosis lawas dipensiunkan secara default

Route diagnosis lawas menjawab 503 kecuali variabel `LEGACY_CDSS_ENGINE_ENABLED`
diaktifkan; kontrak pensiun menunjuk MIRA melalui Assist sebagai sumber diferensial.
Bukti: `.env.example`, `README.md` (bagian decision-support boundary).

## D-03 — Jalur suara dinonaktifkan eksplisit selama re-baseline

Jalur voice chat/token/TTS menjawab 503; STT tetap terimplementasi melalui Groq Whisper
bila dikonfigurasi. Status tidak tersedia diekspos eksplisit, bukan disimulasikan.
Bukti: `README.md`, `.env.example` (`GROQ_API_KEY`).

## D-04 — Input CDSS bebas-PHI menurut desain tipe

`CDSSEngineInput` tidak memiliki field nama pasien atau identifier (keluhan, usia numerik,
jenis kelamin, tanda vital, penyakit kronis); audit CDSS hanya menyimpan ringkasan
numerik. Bukti: `docs/PRIVACY.md`, `SECURITY.md` (bagian PHI Protection).

## D-05 — Linker pnpm hoisted dan build eksplisit

`pnpm-workspace.yaml` memakai `nodeLinker: hoisted` dengan `allowBuilds` eksplisit;
kontrak standalone menolak symlink di pohon capsule. Prisma Client dibangkitkan lewat
langkah eksplisit (`prisma:generate`) sebelum build maupun install CI.
Bukti: `pnpm-workspace.yaml`, `package.json`, `project.contract.json`,
`.github/workflows/ci.yml`.

## D-06 — Dual license dengan syarat tertulis

`LICENSE` membagi Community (Apache 2.0, individu non-komersial) dan Enterprise
(proprietary, untuk fasilitas kesehatan/komersial) dengan tabel penentu dan syarat
Enterprise tertulis. Bukti: `LICENSE`, `docs/LICENSING.md`.

## D-07 — Baseline keamanan sebagai gerbang CI

Workflow `Dashboard Security Baseline` menjalankan `security:baseline`
(`test:auth-hardening` + `test:cdss:protected`) di PostgreSQL 16 dengan instalasi
non-interaktif dan migrasi Prisma. Bukti: `.github/workflows/ci.yml`, `package.json`.

## Hal yang belum dikonfirmasi

- Penyetuju dan tanggal tiap keputusan di atas: Belum dikonfirmasi.
- Lokasi arsip persetujuan Chief (Gate 5) untuk keputusan berdampak produksi:
  Belum dikonfirmasi.

---

<sub>Architected and built by Drferdi — 2026 · Sentra Healthcare Artificial Intelligence</sub>
