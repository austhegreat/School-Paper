# 📐 Peperiksaan Akhir Tahun Matematik Tingkatan 4 (Kertas 1 / 1449/1)
### SPM Form 4 Mathematics Paper 1 — 40 Objective Questions CBT Quiz & Printable Exam Booklet

![SPM Mathematics](https://img.shields.io/badge/Kurikulum-KSSM%20SPM-blue)
![Tingkatan](https://img.shields.io/badge/Tingkatan-4%20(Form%204)-green)
![Kertas](https://img.shields.io/badge/Kertas-1449%2F1-orange)
![Format](https://img.shields.io/badge/Format-Dwibahasa%20(BM%20%26%20BI)-purple)
![Interactive Web](https://img.shields.io/badge/Online%20CBT-Interactive%20Quiz-emerald)

---

## 🌟 Ciri-Ciri Utama / Key Features

1. **📄 Kertas Peperiksaan Lengkap (Format PDF & Cetakan A4)**
   - Mengandungi **40 soalan objektif aneka pilihan (A, B, C, D)** standard SPM KSSM.
   - Dwibahasa (*Bilingual*): Bahasa Melayu & English.
   - Dilengkapi muka hadapan rasmi, senarai rumus matematik, rajah vektor berkualiti tinggi (SVG), borang jawapan OMR, dan skema jawapan terperinci dengan jalan kira langkah demi langkah.
   - Fail PDF: [`Kertas_1_Matematik_Tingkatan_4.pdf`](./Kertas_1_Matematik_Tingkatan_4.pdf).

2. **💻 Laman Web Kuiz Interaktif (Online CBT / Computer-Based Test)**
   - Murid boleh menjawab soalan secara langsung di pelayar web (*browser*).
   - **Pemasa Peperiksaan:** 1 jam 30 minit (90 minit) dengan amaran masa tamat.
   - **Peta Soalan (Navigator 1–40):** Memaparkan status soalan (belum dijawab, selesai dijawab, atau ditanda untuk semakan).
   - **Pemarkahan Automatik:** Menjana markah serta-merta sejurus butang hantar ditekan (Contoh: 36 / 40 &ndash; 90%).
   - **Gred SPM & Analisis Bab:** Memaparkan gred pencapaian (A+, A, B, C, dsb.) dan graf analisis prestasi bagi setiap 10 bab.
   - **Semakan Terperinci:** Menunjukkan pilihan murid vs jawapan sebenar serta jalan kerja lengkap bagi setiap soalan.
   - Boleh dihoskan secara percuma melalui **GitHub Pages**!

---

## 📚 Liputan Silibus KSSM Matematik Tingkatan 4

| Bab | Tajuk Bab (*Topic*) | No. Soalan |
|:---:|:---|:---:|
| **1** | Fungsi dan Persamaan Kuadratik dalam Satu Pemboleh Ubah | Q1 &ndash; Q4 |
| **2** | Asas Nombor (*Number Bases*) | Q5 &ndash; Q8 |
| **3** | Penaakulan Matematik (*Mathematical Reasoning*) | Q9 &ndash; Q12 |
| **4** | Operasi Set (*Operations on Sets*) | Q13 &ndash; Q16 |
| **5** | Rangkaian dalam Teori Graf (*Network in Graph Theory*) | Q17 &ndash; Q20 |
| **6** | Ketaksamaan Linear dalam Dua Pemboleh Ubah | Q21 &ndash; Q24 |
| **7** | Graf Gerakan (*Graphs of Motion*) | Q25 &ndash; Q28 |
| **8** | Sukatan Serakan Data Tak Terkumpul (*Measures of Dispersion*) | Q29 &ndash; Q32 |
| **9** | Kebarangkalian Peristiwa Bergabung (*Probability of Combined Events*) | Q33 &ndash; Q36 |
| **10** | Matematik Pengguna: Pengurusan Kewangan (*Financial Management*) | Q37 &ndash; Q40 |

---

## 🚀 Cara Menjalankan Laman Web Interaktif / How to Run

### Cara 1: Buka Terus Secara Tempatan (Local)
Cukup dengan dwiklik fail `index.html` pada komputer anda untuk membuka kuiz dalam pelayar web seperti Google Chrome, Microsoft Edge, atau Firefox. Tiada sebarang pemasangan perisian tambahan diperlukan!

### Cara 2: Hoskan di Render (Percuma & Automatik)
1. Buka [dashboard.render.com](https://dashboard.render.com/) dan log masuk dengan akaun GitHub anda.
2. Klik butang **New +** dan pilih:
   - **Static Site:** Sambungkan repo `austhegreat/School-Paper`, tetapkan *Publish Directory* kepada `.` (atau kosongkan build command), lalu klik **Create Static Site**.
   - *(Atau)* **Web Service:** Render akan mengesan `package.json` dan menjalankan `node server.js` secara automatik.
   - *(Atau)* **Blueprint:** Pilih repo `austhegreat/School-Paper` dan Render akan membaca `render.yaml` untuk deploy serta-merta!
3. Laman web anda akan aktif secara percuma dengan domain Render (cth: `https://school-paper.onrender.com`).

### Cara 3: Hoskan di GitHub Pages (Percuma & Boleh Diakses Semua Murid)
1. Pergi ke tab **Settings** repositori anda di GitHub.
2. Di menu kiri, klik **Pages**.
3. Di bawah bahagian **Build and deployment** > **Branch**, pilih `main` dan folder `/ (root)`, kemudian klik **Save**.
4. Laman web interaktif anda akan tersedia secara umum di:
   ```text
   https://austhegreat.github.io/School-Paper/
   ```

---

## 🔑 Kunci Jawapan Pantas (Answer Key)

```text
 1. A     2. A     3. B     4. B     5. C     6. C     7. B     8. B
 9. B    10. B    11. B    12. A    13. C    14. A    15. B    16. C
17. C    18. C    19. A    20. A    21. A    22. A    23. A    24. C
25. B    26. C    27. A    28. C    29. B    30. B    31. A    32. A
33. B    34. B    35. B    36. C    37. D    38. C    39. B    40. B
```

---

## 📄 Struktur Repositori / Repository Structure

```text
├── index.html                           # Laman web kuiz interaktif CBT (Online Quiz)
├── Kertas_1_Matematik_Tingkatan_4.pdf   # Buku soalan peperiksaan rasmi sedia cetak (18 muka surat)
├── Kertas_1_Matematik_Tingkatan_4.html  # Templat cetakan dokumen peperiksaan
├── build_exam_pdf.js                    # Skrip penjana PDF
├── generate_website.js                  # Skrip penjana laman web
└── README.md                            # Dokumentasi projek
```

Dilesenkan di bawah [MIT License](LICENSE) &bull; Disediakan untuk kegunaan guru dan murid di seluruh Malaysia.
