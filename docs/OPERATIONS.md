# Operasional — MedBoard

<!-- Architected and built by Drferdi. -->

Dokumen ini merangkum fakta operasional yang tercatat di repositori. Prosedur langkah
demi langkah ada di `docs/DEPLOYMENT.md` dan runbook `docs/deploy-vps.md`; tidak diulang
di sini.

## Lingkungan

| Lingkungan | Fakta |
| --- | --- |
| Lokal | `pnpm run dev` (server kustom + Socket.IO); `start:local` memakai `next start` di `127.0.0.1:4344` untuk smoke kontrak (`project.contract.json`) |
| Produksi | VPS Biznet Gio, Ubuntu 24.04, URL `https://medboard.sentrahai.com` (`docs/DEPLOYMENT.md`, `docs/SETUP.md`) |
| Alur produksi | Internet → Caddy (HTTPS, WebSocket diteruskan) → `127.0.0.1:3000` (`server.ts`, service systemd `medboard`) → PostgreSQL lokal |

## Konfigurasi dan state di server

- Environment production dibaca dari `/etc/medboard/medboard.env` (systemd dan saat build);
  dokumentasi hanya menulis nama variabel, tidak pernah nilainya.
- Variabel wajib boot: `NODE_ENV`, `HOST`, `PORT`, `DATABASE_URL`,
  `CREW_ACCESS_SECRET`, `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY`, `TRUST_PROXY_HEADERS`,
  `NEXT_PUBLIC_BASE_URL` (`docs/DEPLOYMENT.md`).
- State runtime (`runtime/`, antrean bridge, pendaftaran, profil crew, PDF laporan)
  bertahan lewat symlink ke `/var/lib/medboard/runtime`; kode di `/opt/medboard/app`
  diganti setiap deploy (versi sebelumnya di `app.old`).
- Backup harian database dan `runtime/` di `/var/backups/medboard` via cron
  (`/etc/cron.d/medboard-backup`); rollback kode:
  `cd /opt/medboard && mv app app.bad && mv app.old app && systemctl restart medboard`,
  tanpa membatalkan migrasi database (`docs/deploy-vps.md`).

## Kesehatan dan observabilitas

- Health check setelah restart: `GET /api/health` (route `src/app/api/health`);
  smoke kontrak: HTTP `127.0.0.1:4344/` status `200`.
- Pemeriksaan pra-rilis: `pnpm run deploy:dry-run` (`scripts/deploy-dry-run.mjs`).
- Error tracking: Sentry dengan scrubbing PHI dan session replay dinonaktifkan
  (`SECURITY.md`, `docs/PRIVACY.md`); observabilitas LLM opsional via Langfuse.
- Fitur yang bergantung pada konfigurasi yang kosong akan terdegradasi eksplisit
  (503 / fallback manual), bukan disimulasikan (`README.md`).

## Hal yang belum dikonfirmasi

- Kontak jaga / eskalasi on-call (nama, kanal, waktu respons): Belum dikonfirmasi.
- Target SLO/SLA dan anggaran error: Belum dikonfirmasi.
- Prosedur rotasi secret produksi: Belum dikonfirmasi.
- Status live deployment saat ini: Belum dikonfirmasi — verifikasi health endpoint
  sebelum menganggap klaim deployment sebagai kondisi terkini.

---

<sub>Architected and built by Drferdi — 2026 · Sentra Healthcare Artificial Intelligence</sub>
