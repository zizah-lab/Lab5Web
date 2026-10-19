document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

function latihan2() {
  const namaPengguna = prompt("Masukkan nama Anda:", "");
  if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
  } else {
    alert("Nama belum diisi.");
  }
}
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", b !== 0 ? a % b : "Tidak dapat dibagi nol");
}
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
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}
const daftarMenu = document.querySelectorAll(".menu");
console.log("Jumlah menu:", daftarMenu.length);
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