// Tanggal dan waktu Malam Tahun Baru
const tanggalTujuan = new Date('2025-01-01T00:00:00');

// Fungsi menghitung waktu
function hitungWaktu() {
 const waktuSekarang = new Date();
 const selisihWaktu = tanggalTujuan.getTime() - waktuSekarang.getTime();
 const hari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
 const jam = Math.floor((selisihWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const menit = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60));
 const detik = Math.floor((selisihWaktu % (1000 * 60)) / 1000);

 document.getElementById('hari').innerText = hari;
 document.getElementById('jam').innerText = jam;
 document.getElementById('menit').innerText = menit;
 document.getElementById('detik').innerText = detik;

 if (selisihWaktu <= 0) {
 // Munculkan kembang api dan kata-kata Tahun Baru
 document.getElementById('selamat-tahun-baru').innerHTML = 'Selamat Tahun Baru!';
 document.getElementById('selamat-tahun-baru').style.display = 'block';
 document.getElementById('kembang-api').style.display = 'block';
 kembangApi();
 clearInterval(interval);
 }
}

// Fungsi kembang api
function kembangApi() {
 const canvas = document.getElementById('kembang-api');
 const ctx = canvas.getContext('2d');
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 for (let i = 0; i < 100; i++) {
 const x = Math.random() * canvas.width;
 const y = Math.random() * canvas.height;
 const ukuran = Math.random() * 5;
 ctx.beginPath();
 ctx.arc(x, y, ukuran, 0, 2 * Math.PI);
 ctx.fillStyle = `hsl(${Math