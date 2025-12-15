// ========== ALERT KHUSUS HALAMAN BERANDA ==========
if (document.body.id === "beranda") {
  alert('Selamat datang di website profil UMKM Hafis Collections!');
}

// Menampilkan informasi variabel di console
const namaUMKM = 'Hafis Collections';
console.log('Nama UMKM:', namaUMKM);

// Variabel jumlah produk 
let jumlahProduk = 10;
console.log('Jumlah produk awal:', jumlahProduk);

// Penambahan produk baru 
jumlahProduk += 9;
console.log('Setelah penambahan stok:', jumlahProduk);

// Penerapan jumlah produk berdasarkan jenis
let jeansCutbray = 7;
let jeansPensil = 8;
let jeansHighWaist = 4;
let totalProduk = jeansCutbray + jeansPensil + jeansHighWaist;
console.log('Jumlah produk jeans cutbray:', jeansCutbray);
console.log('Jumlah produk jeans pensil:', jeansPensil);
console.log('Jumlah produk jeans high waist:', jeansHighWaist)
console.log('Total semua produk saat ini:', totalProduk);

// 5 testimoni dari produk-produk Hafis Collections
if (document.body.id === "produk") {
        let ulasanProduk = [
          { nama: "Jeans Cutbray", rating: 5, komentar: "Nyaman banget dipakai, potongannya pas dan bahannya tebal!" },
          { nama: "Jeans Pensil", rating: 4, komentar: "Modelnya keren dan pas di badan, tapi agak ketat sedikit." },
          { nama: "Jeans Kulot", rating: 5, komentar: "Ringan dan stylish, cocok buat jalan santai." },
          { nama: "Jeans Slim Fit", rating: 4, komentar: "Potongannya rapi, fleksibel buat dipakai kerja." },
          { nama: "Jeans High Waist", rating: 3, komentar: "Desain oke, tapi bahan agak kaku sedikit." }
        ];

        let container = document.getElementById("testimoni-container");

        ulasanProduk.forEach(function(item) {
          let div = document.createElement("div");
          div.style.border = "1px solid #ccc";
          div.style.margin = "8px 0";
          div.style.padding = "10px";
          div.style.borderRadius = "8px";
          div.style.backgroundColor = "#f9f9f9";

          // Menampilkan nama produk
          let namaProduk = document.createElement("h3");
          namaProduk.textContent = item.nama;
          div.appendChild(namaProduk);

          // Menampilkan rating bintang
          let ratingText = document.createElement("p");
          let ratingSymbol = "";
          if (item.rating >= 4.5) {
            ratingSymbol = "★★★★★ Sangat Disarankan";
          } else if (item.rating >= 3.5) {
            ratingSymbol = "★★★★ Rekomendasi Bagus";
          } else {
            ratingSymbol = "★★★ Rekomendasi Biasa";
          }
          ratingText.innerHTML = "<b>Rating Produk:</b> " + ratingSymbol;
          div.appendChild(ratingText);

          // Menampilkan komentar pelanggan
          let komentar = document.createElement("p");
          komentar.textContent = '"' + item.komentar + '"';
          div.appendChild(komentar);

          container.appendChild(div);
        });
    }

// galeri.js (ES6 Module)

// ========== 1. Ambil semua elemen card ==========
const cards = document.querySelectorAll(".card");

// ========== 2. Fungsi untuk menampilkan nama produk ==========
const tampilNamaProduk = (card) => {
  // Destructuring untuk mengambil alt gambar
  const img = card.querySelector("img");
  const { alt } = img;

  // Cek apakah teks nama produk sudah ada (optional chaining)
  const existing = card.querySelector(".nama-produk");

  if (!existing) {
    // Tambahkan elemen nama produk
    const nama = document.createElement("p");
    nama.classList.add("nama-produk");
    nama.style.fontWeight = "bold";
    nama.style.color = "#0f2b47";
    nama.style.marginTop = "6px";

    // Template literal
    nama.textContent = `${alt}`;
    card.appendChild(nama);
  }
};

// ========== 3. Tambah efek hover dengan classList ==========
const tambahHover = (card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("hover-aktif");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("hover-aktif");
  });
};

// ========== 4. Pasang event pada semua card ==========
cards.forEach((card) => {
  // Klik gambar → tampilkan nama produk
  card.addEventListener("click", () => tampilNamaProduk(card));

  // Efek hover
  tambahHover(card);
});

// ========== 5. Export agar memenuhi konsep ES6 module ==========
export {};