# Lisensi — MedBoard

<!-- Architected and built by Drferdi. -->

Sumber otoritatif ketentuan lisensi adalah berkas `LICENSE` di root repositori. Ringkasan
di bawah ini mengikuti apa yang tertulis di berkas tersebut.

## Isi berkas LICENSE

`LICENSE` berjudul "MEDBOARD — DUAL LICENSE", pemegang hak cipta "Drferdi
(dr. Ferdi Iskandar)", 2024–2026, all rights reserved, dan membagi dua rezim:

**Bagian 1 — Community License (Apache 2.0).** Berlaku bila semua kondisi terpenuhi:
(a) individu klinisi, peneliti, atau mahasiswa; (b) penggunaan non-komersial (tanpa
pendapatan, penagihan klien, atau penjualan kembali); (c) tidak deploy atas nama
organisasi/fasilitas kesehatan; (d) tidak diintegrasikan ke produk atau layanan komersial.
Ketentuan Apache 2.0 mengacu ke https://www.apache.org/licenses/LICENSE-2.0 dan
didistribusikan "AS IS".

**Bagian 2 — Enterprise License (proprietary komersial).** Berlaku bila salah satu
terpenuhi: (a) deploy di/atas nama fasilitas kesehatan (klinik, rumah sakit, puskesmas,
organisasi kesehatan); (b) integrasi ke produk/layanan komersial; (c) penggunaan untuk
menghasilkan pendapatan langsung maupun tidak langsung; (d) vendor, integrator, atau
reseller. Penggunaan komersial membutuhkan Enterprise License Agreement tertulis dengan
Licensor; memuat batasan redistribusi, intelektual properti mesin analitik klinis,
disclaimer klinis, kewajiban kepatuhan UU PDP No. 27/2022, tanpa garansi, batas
tanggung jawab 12 bulan pembayaran, dan hukum Republik Indonesia.

Tabel penentu di `LICENSE`: dokter individu/praktik pribadi, mahasiswa, peneliti →
Community; deployment puskesmas/klinik, rumah sakit/sistem kesehatan, vendor, program
pemerintah (Dinkes, Kemenkes) → Enterprise. Kontak lisensi enterprise: Drferdi —
dr. Ferdi Iskandar, Sentra Artificial Intelligence, https://sentra-dfi.com.

## Konsistensi dengan berkas lain

- `README.md` menyatakan MedBoard dual-licensed menurut ketentuan di `LICENSE` dan
  meminta pembaca meninjau ketentuan sebelum reuse, redistribusi, deployment organisasi,
  atau operasi komersial — sejalan dengan `LICENSE`.
- `CONTRIBUTING.md` menyebut proyek dual-licensed (lihat `LICENSE`) milik
  dr. Ferdi Iskandar — sejalan dengan `LICENSE`.
- Catatan untuk pemilik: `package.json` memuat `"private": true` tetapi tidak memuat
  field `license`, sehingga tidak ada ekspresi lisensi machine-readable di manifes;
  satu-satunya pernyataan lisensi adalah berkas `LICENSE`.

## Hal yang belum dikonfirmasi

- Salinan teks lengkap Apache 2.0 di dalam repositori (dirujuk via URL):
  Belum dikonfirmasi.
- Status penandatanganan Enterprise License Agreement yang sudah ada:
  Belum dikonfirmasi.

---

<sub>Architected and built by Drferdi — 2026 · Sentra Healthcare Artificial Intelligence</sub>
