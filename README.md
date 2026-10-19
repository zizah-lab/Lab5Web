# Lab5Web — Praktikum 5: JavaScript Dasar dan Manipulasi HTML

**Nama:** Azizah Rachmatania

**NIM:** 312510159

**Kelas:** I251B

**Mata Kuliah:** Pemrograman Web — Pertemuan 6

---

## 1. Tujuan Praktikum
1. Memahami sintaks dasar JavaScript dan cara menyisipkan JavaScript pada HTML.
2. Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
3. Menampilkan informasi melalui console, alert, prompt, dan elemen HTML.
4. Memanipulasi konten serta gaya elemen HTML menggunakan JavaScript.
5. Membuat interaksi sederhana pada form dan melakukan validasi input.
6. Mendokumentasikan pekerjaan praktikum beserta hasil pengujiannya.

## 2. Struktur Folder
```
lab5_javascript/
├── index.html      -> struktur halaman (tombol, form, checkbox)
├── script.js       -> seluruh logika JavaScript
├── README.md       -> laporan ini
└── Dokumentasi/    -> screenshot kode dan hasil
```

## 3. Cara Menjalankan
1. Unduh atau clone repository ini.
2. Buka `index.html` di browser (Chrome/Edge/Firefox).
3. Untuk melihat Console, tekan **F12** lalu pilih tab **Console**.
4. Klik tombol pada halaman untuk menjalankan tiap latihan.

## 4. Gambaran Umum: Bagaimana HTML dan JavaScript Terhubung
Praktikum ini memakai dua berkas yang bekerja bersama.

- **`index.html`** berisi elemen-elemen yang tampil di halaman, misalnya paragraf `<p id="pesan">`, tombol `<button>`, kolom isian `<input>`, dan checkbox. Setiap elemen yang perlu diubah oleh JavaScript diberi **`id`** atau **`class`** sebagai "alamat".
- **`script.js`** berisi kode JavaScript. Berkas ini dihubungkan lewat `<script src="script.js"></script>` yang diletakkan **di akhir `<body>`**, supaya semua elemen HTML sudah selesai dimuat sebelum JavaScript mencarinya.

Alur kerja secara umum:

1. Browser membaca `index.html` dari atas ke bawah dan menampilkan elemennya.
2. Di akhir halaman, browser memuat `script.js` dan menjalankan baris yang berada di luar function (misalnya Latihan 1).
3. Function lain (Latihan 2 dan seterusnya) **tidak langsung jalan**. Function itu menunggu dipanggil lewat atribut `onclick` pada tombol.
4. Saat pengguna klik tombol, function dijalankan. Function membaca masukan (dari `prompt` atau `input`), memprosesnya dengan logika `if`, `switch`, atau perhitungan, lalu menampilkan hasilnya lewat `alert`, `console.log`, atau mengubah isi elemen HTML.

Konsep DOM yang dipakai berulang kali:

| Kode | Fungsi |
|---|---|
| `document.getElementById("x")` | Memilih satu elemen berdasarkan `id` |
| `document.querySelectorAll(".x")` | Memilih semua elemen dengan `class` tertentu |
| `elemen.textContent = "..."` | Mengganti teks di dalam elemen |
| `elemen.value` | Membaca isi kolom `<input>` (selalu bertipe string) |
| `elemen.style.xxx = "..."` | Mengubah gaya CSS elemen |
| `elemen.addEventListener("change", fn)` | Menjalankan `fn` saat elemen berubah |

---

## 5. Latihan 1 — Menampilkan Output

**Tujuan:** mengenali cara menampilkan output di halaman dan di Console.

**Kode (`script.js`):**
```javascript
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");
```

**Penjelasan kode:**
- Baris 1: `getElementById("pesan")` mencari elemen `<p id="pesan">`. Properti `textContent` lalu mengganti teks "Konten awal." menjadi "Hello World". Hasilnya terlihat langsung di halaman.
- Baris 2: `console.log("Hello World")` menulis pesan ke Console browser. Pesan ini tidak tampil di halaman, hanya terlihat oleh developer.

**Alur program:** halaman dimuat → `script.js` dijalankan otomatis → teks paragraf berubah → pesan tercetak di Console.

**Penjelasan gambar:**

![Kode Latihan 1](Dokumentasi/1.%20kode-latihan1.png)  
*Gambar 1. Kode Latihan 1 di editor.* Gambar ini memperlihatkan dua baris kode di `script.js`: satu untuk mengubah isi halaman dan satu untuk mencetak ke Console.

![Hasil Latihan 1](Dokumentasi/2.%20hasil-kode-latihan1.png)  
*Gambar 2. Hasil Latihan 1 di browser.* Teks "Konten awal." sudah berubah menjadi "Hello World", dan pesan yang sama muncul di Console.

**Kesimpulan:** `textContent` mengubah tampilan yang dilihat pengguna, sedangkan `console.log` hanya untuk pengecekan oleh developer.

---

## 6. Latihan 2 — Alert dan Prompt

**Tujuan:** menerima masukan dengan `prompt()` dan menampilkan pesan dengan `alert()`.

**Kode:**
```javascript
function latihan2() {
  const namaPengguna = prompt("Masukkan nama Anda:", "");
  if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
  } else {
    alert("Nama belum diisi.");
  }
}
```

**Penjelasan kode:**
- `prompt(...)` menampilkan kotak isian. Hasilnya disimpan di `namaPengguna`.
- `namaPengguna && namaPengguna.trim() !== ""` memeriksa dua hal: nama tidak `null`/kosong, dan bukan hanya spasi (`trim()` membuang spasi di pinggir).
- Jika kondisi terpenuhi: `alert` menyapa pengguna dan teks halaman diganti dengan "Selamat datang, ...".
- Jika tidak: `alert("Nama belum diisi.")`.

**Alur program:** klik tombol **Nama** → `latihan2()` dipanggil → kotak prompt muncul → pengguna mengisi atau menutup → program memeriksa isinya → tampil alert yang sesuai.

**Penjelasan gambar:**

![Kode Latihan 2](Dokumentasi/3.%20kode-latihan2.png)  
*Gambar 3. Kode `latihan2()`.* Memperlihatkan function lengkap dengan percabangan `if–else`.

![Prompt Latihan 2](Dokumentasi/4.%20hasil-latihan2-prompt.png)  
*Gambar 4. Kotak prompt.* Setelah tombol diklik, browser menampilkan kotak isian bertuliskan "Masukkan nama Anda:".

![Alert Latihan 2](Dokumentasi/5.%20hasil-latihan2-alert..png)  
*Gambar 5. Alert sapaan.* Setelah nama diisi dan OK ditekan, muncul alert "Halo, (nama)!", dan teks di halaman ikut berubah.

![Kosong Latihan 2](Dokumentasi/5.%20hasil-latihan2-kosong.png)  
*Gambar 6. Alert "Nama belum diisi."* Muncul ketika input dikosongkan atau Cancel ditekan.

**Perilaku program yang dicatat:**

| Skenario | Nilai dari `prompt()` | Hasil |
|---|---|---|
| Nama diisi | string nama | Alert sapaan dan teks halaman berubah |
| Tekan Cancel | `null` | "Nama belum diisi." (dianggap *false*) |
| Dikosongkan, tekan OK | `""` (string kosong) | "Nama belum diisi." (dianggap *false*) |

---

## 7. Latihan 3 — Function dan Operasi Aritmetika

**Tujuan:** membuat function dengan parameter dan memakai operator aritmetika.

**Kode:**
```javascript
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", b !== 0 ? a % b : "Tidak dapat dibagi nol");
}
```
Tombol memanggil `operasiDasar(9, 4)`.

**Penjelasan kode:**
- `a` dan `b` adalah **parameter**, yaitu wadah untuk dua bilangan yang dikirim saat function dipanggil.
- Operator `+ - * /` dan `%` berturut-turut untuk tambah, kurang, kali, bagi, dan sisa bagi.
- `b !== 0 ? a / b : "..."` adalah **operator ternary**: jika `b` bukan nol, hitung `a / b`; jika nol, tampilkan pesan. Ini mencegah pembagian dengan nol.

**Hasil yang diharapkan untuk 9 dan 4:** penjumlahan 13, pengurangan 5, perkalian 36, pembagian 2.25, modulus 1.

**Alur program:** klik tombol → `operasiDasar(9, 4)` dipanggil → lima baris `console.log` dijalankan → hasil dibaca di Console.

**Penjelasan gambar:**

![Kode Latihan 3](Dokumentasi/6.%20kode-latihan3.png)  
*Gambar 7. Kode `operasiDasar`.* Memperlihatkan function dan lima operasi di dalamnya.

![Hasil Latihan 3](Dokumentasi/7.%20hasil-latihan3-console.png)  
*Gambar 8. Hasil di Console.* Lima baris hasil tercetak di Console setelah tombol diklik.

---

## 8. Latihan 4 — Seleksi Kondisi if–else

**Tujuan:** menentukan lulus atau belum berdasarkan nilai, sekaligus memvalidasi masukan.

**Kode:**
```javascript
function latihan4() {
  const inputNilai = prompt("Masukkan nilai (0–100):");
  const nilaiMahasiswa = Number(inputNilai);
  if (inputNilai === null || inputNilai.trim() === "" ||
      Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
  } else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
  } else {
    alert("Belum lulus");
  }
}
```

**Penjelasan kode:**
- `prompt()` selalu menghasilkan **string**, jadi nilai diubah ke angka dengan `Number(...)`.
- Kondisi pertama menolak masukan tidak valid: `null` (Cancel), kosong, bukan angka (`Number.isNaN`), di bawah 0, atau di atas 100. Operator `||` berarti "atau".
- `else if (nilaiMahasiswa >= 60)`: nilai 60 ke atas dinyatakan "Lulus".
- `else`: sisanya, yaitu 0–59, "Belum lulus".

**Alur program:** klik tombol **Nilai** → prompt → konversi ke angka → cek valid atau tidak → bila valid, cek lulus atau belum → tampil alert.

**Penjelasan gambar:**

![Kode Latihan 4](Dokumentasi/8.%20kode-latihan4.png)  
*Gambar 9. Kode `latihan4()`.* Memperlihatkan tiga cabang: tidak valid, lulus, dan belum lulus.

![Kode Latihan 4 (hasil)](Dokumentasi/9.%20kode-latihan4%20%28hasil%29.png)  
*Gambar 10. Tampilan kode dan hasil Latihan 4.*

![Input 75](Dokumentasi/10.%20hasil-latihan4-75.png)  
*Gambar 11. Input 75.* Pengguna mengisi 75 pada kotak prompt.

![Lulus](Dokumentasi/11.%20hasil-latihan4-lulus.png)  
*Gambar 12. Hasil input 75.* Muncul alert **"Lulus"** karena 75 ≥ 60.

![Input 40](Dokumentasi/12.%20hasil-latihan4-40.png)  
*Gambar 13. Input 40.* Pengguna mengisi 40 pada kotak prompt.

![Belum lulus](Dokumentasi/13.%20hasil-latihan4-belum.png)  
*Gambar 14. Hasil input 40.* Muncul alert **"Belum lulus"** karena 40 < 60.

![Input abc](Dokumentasi/14.%20hasil-latihan4-abc.png)  
*Gambar 15. Input `abc`.* Pengguna mengisi teks yang bukan angka.

![Invalid](Dokumentasi/15.%20hasil-latihan4-invalid.png)  
*Gambar 16. Hasil input `abc`.* `Number("abc")` menghasilkan `NaN`, sehingga muncul alert **"Input nilai tidak valid."**

---

## 9. Latihan 5 — Seleksi Kondisi switch

**Tujuan:** memilih satu tindakan dari beberapa kemungkinan nilai.

**Kode:**
```javascript
function latihan5() {
  const inputPilihan = prompt("Masukkan angka 1–5:");
  switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
  }
}
```

**Penjelasan kode:**
- `switch` membandingkan `inputPilihan` dengan tiap `case`. Karena `prompt` menghasilkan string, nilai yang dibandingkan juga string (`"1"`, bukan `1`).
- `break` menghentikan switch setelah satu case cocok, sehingga tidak "jatuh" ke case berikutnya.
- `default` dijalankan bila tidak ada case yang cocok.

**Alur program:** klik tombol **Angka** → prompt → `switch` mencocokkan nilai → alert sesuai angka atau pesan default.

**Penjelasan gambar:**

![Kode Latihan 5](Dokumentasi/16.%20kode-latihan5.png)  
*Gambar 17. Kode `latihan5()`.* Memperlihatkan lima `case` dan satu `default`.

![Input 3](Dokumentasi/17.%20hasil-latihan5-3.png)  
*Gambar 18. Input 3.* Pengguna mengisi angka 3.

![Hasil switch](Dokumentasi/18.%20hasil-latihan5-switch.png)  
*Gambar 19. Hasil input 3.* Muncul alert **"Bilangan tiga"**.

![Input 9](Dokumentasi/19.%20hasil-latihan5-9.png)  
*Gambar 20. Input 9.* Pengguna mengisi angka di luar rentang 1–5.

![Hasil default](Dokumentasi/20.%20hasil-latihan5-default.png)  
*Gambar 21. Hasil input 9.* Tidak ada case yang cocok, sehingga `default` berjalan dan muncul alert **"Pilihan tidak tersedia"**.

---

## 10. Latihan 6 — Form Bilangan Genap atau Ganjil

**Tujuan:** membaca masukan dari form HTML dan menampilkan hasil di halaman.

**Kode HTML:**
```html
<label for="bilangan">Masukkan bilangan bulat:</label><br>
<input type="number" id="bilangan" step="1"><br>
<button type="button" onclick="cekBilangan()">Periksa</button>
<p id="hasilBilangan"></p>
```

**Kode JavaScript:**
```javascript
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");
  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}
```

**Penjelasan kode:**
- `.value` mengambil isi kolom input, selalu berupa string, sehingga diubah dengan `Number()`.
- `Number.isInteger(angka)` memeriksa apakah angka bulat. Desimal seperti 2.5 ditolak.
- `angka % 2 === 0`: jika sisa bagi 2 adalah nol, bilangan genap; selain itu ganjil. Cara ini juga benar untuk bilangan negatif dan nol.
- Hasil ditulis ke `<p id="hasilBilangan">` lewat `textContent`.

**Alur program:** pengguna mengisi angka → klik **Periksa** → `cekBilangan()` membaca input → validasi → cek sisa bagi 2 → hasil tampil di halaman.

**Penjelasan gambar:**

![Kode Latihan 6](Dokumentasi/21.%20kode-latihan6.png)  
*Gambar 22. Kode Latihan 6.* Memperlihatkan form HTML dan function `cekBilangan()`.

![Genap](Dokumentasi/22.%20hasil-latihan6-genap.png)  
*Gambar 23. Hasil bilangan genap.* Contoh input bilangan genap menghasilkan teks "Bilangan genap".

![Ganjil](Dokumentasi/23.%20hasil-latihan6-ganjil.png)  
*Gambar 24. Hasil bilangan ganjil.* Contoh input bilangan ganjil menghasilkan teks "Bilangan ganjil".

![Invalid](Dokumentasi/24.%20hasil-latihan6-invalid.png)  
*Gambar 25. Hasil input tidak valid.* Input kosong atau desimal menghasilkan "Masukkan bilangan bulat yang valid."

---

## 11. Latihan 7 — Mengubah Warna Halaman

**Tujuan:** mengubah gaya CSS elemen dengan JavaScript memakai satu function berparameter.

**Kode HTML:**
```html
<button type="button" onclick="ubahWarnaLatar('lightgreen')">Latar Hijau</button>
<button type="button" onclick="ubahWarnaLatar('white')">Latar Putih</button>
<button type="button" onclick="ubahWarnaLatar('lightyellow')">Latar Kuning</button>
```

**Kode JavaScript:**
```javascript
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}
```

**Penjelasan kode:**
- Tiga tombol memanggil **function yang sama** tetapi dengan argumen warna berbeda. Inilah gunanya parameter: kode tidak perlu ditulis berulang tiga kali.
- `document.body.style.backgroundColor` adalah warna latar elemen `<body>`. Nilainya diganti dengan warna yang dikirim lewat parameter `warna`.

**Alur program:** klik tombol → function dipanggil dengan nama warna → warna latar halaman berubah.

**Penjelasan gambar:**

![Kode Latihan 7](Dokumentasi/25.%20kode-latihan7.png)  
*Gambar 26. Kode Latihan 7.* Tiga tombol dan satu function `ubahWarnaLatar(warna)`.

![Hijau](Dokumentasi/26.%20hasil-latihan7-hijau.png)  
*Gambar 27. Latar hijau.* Setelah tombol "Latar Hijau" diklik, latar halaman berubah menjadi hijau muda.

![Kuning](Dokumentasi/27.%20hasil-latihan7-kuning.png)  
*Gambar 28. Latar kuning.* Setelah tombol "Latar Kuning" diklik, latar halaman berubah menjadi kuning muda.

---

## 12. Latihan 8 — DOM dan Checkbox Menu Makanan

**Tujuan:** menghitung total harga otomatis ketika checkbox dicentang atau dilepas.

**Kode HTML:**
```html
<label><input type="checkbox" class="menu" value="5000"> Ayam Goreng => Rp5.000</label><br>
<label><input type="checkbox" class="menu" value="500"> Tempe => Rp500</label><br>
<label><input type="checkbox" class="menu" value="2500"> Telur Dadar => Rp2.500</label><br>
<p>Total: Rp<span id="total">0</span></p>
```

**Kode JavaScript:**
```javascript
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}
```

**Penjelasan kode:**
- Setiap checkbox diberi `class="menu"` dan atribut `value` berisi harganya.
- `querySelectorAll(".menu")` mengumpulkan semua checkbox ke dalam satu daftar `daftarMenu`.
- `forEach` + `addEventListener("change", hitungTotal)` memasang "pendengar" pada tiap checkbox, sehingga `hitungTotal` otomatis dipanggil setiap kali ada yang dicentang atau dilepas.
- `hitungTotal` mulai dari `total = 0`, lalu menjumlahkan `value` setiap checkbox yang `checked`. `Number(item.value)` mengubah string harga menjadi angka.
- `toLocaleString("id-ID")` memformat angka dengan pemisah ribuan titik, misalnya 7500 menjadi 7.500.

**Alur program:** pengguna centang atau lepas menu → event `change` terpicu → `hitungTotal()` menjumlahkan semua menu yang tercentang → angka pada `<span id="total">` diperbarui.

**Penjelasan gambar:**

![Kode Latihan 8](Dokumentasi/27.%20kode-latihan8.png)  
*Gambar 29. Kode Latihan 8.* Memperlihatkan daftar menu pada HTML serta kode penghitung total pada JavaScript.

![Total kosong](Dokumentasi/28.%20hasil-latihan8-kosong.png)  
*Gambar 30. Kondisi awal.* Belum ada menu yang dipilih, sehingga total bernilai Rp0.

![Total menu](Dokumentasi/29.%20hasil-latihan8-total.png)  
*Gambar 31. Setelah menu dipilih.* Total berubah otomatis sesuai jumlah harga menu yang tercentang, misalnya Tempe (500) + Telur Dadar (2.500) menghasilkan Rp3.000.

---

## 13. Mini Project — Kalkulator Nilai Mahasiswa

**Tujuan:** menggabungkan form, validasi, function, percabangan, dan penampilan hasil di halaman.

**Ketentuan perhitungan:**
- Nilai akhir = Tugas × 30% + UTS × 30% + UAS × 40%.
- Predikat: A (≥ 85), B (≥ 75), C (≥ 60), D (≥ 50), E (< 50).
- Status: Lulus jika nilai akhir ≥ 60, selain itu Belum lulus.

**Kode JavaScript:**
```javascript
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function nilaiValid(teks) {
  const n = Number(teks);
  return teks.trim() !== "" && !Number.isNaN(n) && n >= 0 && n <= 100;
}

function prosesNilai() {
  const t = document.getElementById("tugas").value;
  const u = document.getElementById("uts").value;
  const a = document.getElementById("uas").value;
  const hasil = document.getElementById("hasilNilai");

  if (!nilaiValid(t) || !nilaiValid(u) || !nilaiValid(a)) {
    hasil.textContent = "Semua nilai harus diisi dan berada pada rentang 0–100.";
    return;
  }
  const akhir = hitungNilaiAkhir(Number(t), Number(u), Number(a));
  hasil.innerHTML =
    "Nilai akhir: <b>" + akhir.toFixed(2) + "</b><br>" +
    "Predikat: <b>" + tentukanPredikat(akhir) + "</b><br>" +
    "Status: <b>" + (akhir >= 60 ? "Lulus" : "Belum lulus") + "</b>";
}
```

**Penjelasan function (pemisahan tugas):**

| Function | Tugas |
|---|---|
| `hitungNilaiAkhir` | Hanya menghitung nilai akhir dan mengembalikannya dengan `return` |
| `tentukanPredikat` | Hanya mengubah nilai akhir menjadi huruf A–E |
| `nilaiValid` | Hanya memeriksa satu masukan: tidak kosong, berupa angka, dalam rentang 0–100 |
| `prosesNilai` | Mengatur alur: ambil input → validasi → hitung → tampilkan hasil |

Dengan pemisahan ini, proses perhitungan terpisah dari tampilan hasil, sesuai ketentuan mini project.

**Alur program:** pengguna mengisi tiga nilai → klik **Hitung** → `prosesNilai()` membaca ketiga input → `nilaiValid` memeriksa satu per satu → jika ada yang tidak valid, tampil pesan kesalahan dan proses berhenti (`return`) → jika valid, nilai akhir dihitung, predikat ditentukan, dan hasil ditulis ke `<p id="hasilNilai">` dengan `innerHTML`. `toFixed(2)` membulatkan nilai akhir ke dua desimal.

**Penjelasan gambar:**

![Kode Mini Project](Dokumentasi/30.%20kode-miniproject.png)  
*Gambar 32. Kode Mini Project.* Memperlihatkan empat function dan form input pada HTML.

![Lulus](Dokumentasi/31.%20hasil-miniproject-lulus.png)  
*Gambar 33. Skenario lulus.* Masukan: Tugas (isi), UTS (isi), UAS (isi). Halaman menampilkan nilai akhir, predikat, dan status **Lulus** (nilai akhir ≥ 60).

![Belum lulus](Dokumentasi/32.hasil-miniproject-belum%20lulus.png)  
*Gambar 34. Skenario belum lulus.* Masukan: Tugas (isi), UTS (isi), UAS (isi). Halaman menampilkan nilai akhir, predikat, dan status **Belum lulus** (nilai akhir < 60).

---

## 14. Eksperimen Mandiri

**Tujuan:** mencoba perulangan `for`, function pengembali nilai, dan menyembunyikan elemen.

**Kode:**
```javascript
function cekGenap(angka) {
  return angka % 2 === 0;
}

function tabelPerkalian(n) {
  let teks = "";
  for (let i = 1; i <= 10; i++) {
    teks += n + " x " + i + " = " + (n * i) + "\n";
  }
  document.getElementById("tabelHasil").textContent = teks;
}

function toggleElemen() {
  const el = document.getElementById("tabelHasil");
  el.style.display = (el.style.display === "none") ? "block" : "none";
}
```

**Penjelasan kode:**
- `cekGenap(angka)` mengembalikan `true` jika sisa bagi 2 adalah nol, dan `false` jika tidak.
- `tabelPerkalian(n)`: perulangan `for` berjalan dari `i = 1` sampai `i = 10`. Tiap putaran menambahkan satu baris "7 x i = hasil" ke variabel `teks`. `\n` membuat baris baru. Setelah selesai, seluruh teks ditulis ke `<pre id="tabelHasil">`.
- `toggleElemen()`: jika elemen sedang disembunyikan (`display: none`) maka ditampilkan kembali (`block`), dan sebaliknya.

**Alur program:** klik tombol tabel → loop menyusun 10 baris → tabel tampil di halaman → klik tombol sembunyikan/tampilkan untuk mengubah keterlihatannya.

**Penjelasan gambar:**

![Kode Eksperimen](Dokumentasi/33.%20kode-eksperimen.png)  
*Gambar 35. Kode Eksperimen Mandiri.* Memperlihatkan function `cekGenap`, `tabelPerkalian`, dan `toggleElemen`.

![Tabel perkalian](Dokumentasi/34.%20hasil-eksperimen-tabel.png)  
*Gambar 36. Tabel perkalian 7.* Halaman menampilkan sepuluh baris, dari "7 x 1 = 7" sampai "7 x 10 = 70".

---

## 15. Tugas H.7 — Validasi Form

**Tujuan:** memastikan nama tidak kosong dan nilai berada pada rentang 0–100.

**Kode:**
```javascript
function validasiForm() {
  const nama = document.getElementById("namaForm").value.trim();
  const nilai = document.getElementById("nilaiForm").value;
  const hasil = document.getElementById("hasilValidasi");

  if (nama === "") {
    hasil.textContent = "Nama tidak boleh kosong.";
  } else if (!nilaiValid(nilai)) {
    hasil.textContent = "Nilai harus berupa angka 0–100.";
  } else {
    hasil.textContent = "Data valid: " + nama + " dengan nilai " + nilai + ".";
  }
}
```

**Penjelasan kode:**
- `nama` diambil dan dibersihkan dengan `trim()`, sehingga isian berupa spasi saja dianggap kosong.
- Pemeriksaan dilakukan berurutan: nama dulu, lalu nilai. Pemeriksaan nilai memakai ulang function `nilaiValid()` dari Mini Project, sehingga tidak perlu menulis ulang logika yang sama.
- Cabang terakhir `else` dijalankan hanya jika kedua pemeriksaan lolos.

**Alur program:** isi nama dan nilai → klik **Validasi** → cek nama → cek nilai → tampil pesan kesalahan atau pesan data valid.

**Penjelasan gambar:**

![Kode Validasi](Dokumentasi/35.%20kode-validasi.png)  
*Gambar 37. Kode `validasiForm()`.* Memperlihatkan tiga cabang pemeriksaan.

![Valid](Dokumentasi/36.%20hasil-validasi-valid.png)  
*Gambar 38. Data valid.* Nama terisi dan nilai di antara 0–100, sehingga muncul pesan "Data valid: (nama) dengan nilai (angka)."


## 17. Kesimpulan
(isi dengan kesimpulan singkat tentang apa yang dipelajari, misalnya bagaimana JavaScript mengubah isi halaman, membaca masukan, dan memvalidasinya)
