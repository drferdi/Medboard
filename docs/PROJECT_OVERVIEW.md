# Gambaran Proyek — MedBoard

<!-- Architected and built by Drferdi. -->

MedBoard (`@the-abyss/medboard`, versi `0.1.0` menurut `package.json`) adalah kokpit
operasi klinis layanan primer: clinical smartboard yang menghubungkan alur kerja klinis,
integrasi EMR, koordinasi real-time, pelaporan, telemedicine, dan dukungan keputusan yang
dapat diaudit. Doktrin produk tercatat di `README.md`: teknologi memungkinkan, klinisi yang
memutuskan — diagnosis akhir, terapi, peresepan, rujukan, dan eskalasi darurat tetap menjadi
tanggung jawab klinisi berlisensi yang akuntabel.

## Identitas proyek

| Fakta | Nilai |
| --- | --- |
| ID produk (`project.contract.json`) | `healthcare/medboard` |
| Kelas risiko (`project.contract.json`) | R2 |
| Pemilik (`project.contract.json`) | Chief (dr. Ferdi Iskandar) |
| Runtime | Node.js 24, pnpm 11.21.0 (lihat `package.json`, `.nvmrc`) |
| Framework | Next.js 16.3.8, React 19.2.3, TypeScript 5.9.3 |
| Persistensi | PostgreSQL melalui Prisma Client 6.19.x + `adapter-pg` |
| Real-time | Socket.IO 4.8.3 (server dan client) |
| Server produksi | `server.ts` kustom (Next.js + Socket.IO), bukan `next start` polos |
| Lisensi | Dual license menurut `LICENSE` (lihat `docs/LICENSING.md`) |

## Lapisan sistem

`README.md` dan `ARCHITECTURE.md` memetakan tiga lapisan: permukaan klinis (EMR, ICD-X,
kalkulator, Sentrapedia, telemedicine, pelaporan), integrasi dan koordinasi (Socket.IO,
bridge ePuskesmas via Playwright, LiveKit, hook pesan/email, penyedia AI opsional), serta
keselamatan dan otoritas (otentikasi, pemeriksaan peran, jejak audit, pemeriksaan
keselamatan deterministik, perilaku status terdegradasi, gerbang verifikasi).

Batas decision-support berlaku: mesin diagnosis lawas MedBoard ada di source tetapi
dipensiunkan secara default dan menjawab 503 kecuali diaktifkan kembali secara sengaja;
jalur suara chat/token/TTS juga dinonaktifkan dengan perilaku 503 selama re-baseline.
Sumber kebenaran untuk status ini adalah kode route dan `README.md`, bukan sebaliknya.

## Dokumen yang sudah ada (tidak diulang di sini)

- Arsitektur: `ARCHITECTURE.md`, `docs/architecture.md`
- Pengembangan lokal: `docs/SETUP.md`
- Pengujian: `docs/testing.md`
- Penanganan data: `docs/PRIVACY.md`, `DATA_PRIVACY.md`
- Operasional: `docs/OPERATIONS.md`
- Rilis: `docs/RELEASES.md`
- Keputusan: `docs/DECISIONS/README.md`
- Kepemilikan: `docs/OWNERSHIP.md`
- Lisensi: `docs/LICENSING.md`

## Kontak dan hal yang belum dikonfirmasi

- Kontak operasional / penanggung jawab produksi: Belum dikonfirmasi.
- Target produksi yang didokumentasikan (`docs/DEPLOYMENT.md`): `medboard.sentrahai.com`;
  status live tidak disimpulkan dari teks — verifikasi ke health endpoint sebelum
  menganggap klaim deployment sebagai kondisi terkini.
- Konteks operasional yang didokumentasikan (`README.md`): UPTD Puskesmas PONED Balowerti,
  Kota Kediri; pernyataan ini tidak dengan sendirinya menetapkan sponsorship, sertifikasi,
  atau ketersediaan deployment.

---

<sub>Architected and built by Drferdi — 2026 · Sentra Healthcare Artificial Intelligence</sub>
