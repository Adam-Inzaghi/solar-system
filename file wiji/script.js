// Objek data untuk menyimpan fakta planet
const planetData = {
    sun: {
        nama: "Matahari",
        fakta: "Bintang pusat tata surya. Sumber energi dan gravitasi utama.",
        jenis: "Bintang"
    },
    mercury: {
        nama: "Merkurius",
        fakta: "Planet terkecil dan terdekat dengan Matahari. Suhu permukaannya memiliki perbedaan ekstrem: sangat panas di siang hari dan sangat dingin di malam hari.",
        jenis: "Kebumian"
    },
    venus: {
        nama: "Venus",
        fakta: "Planet terpanas di Tata Surya, bahkan lebih panas dari Merkurius, karena efek rumah kaca ekstrem yang disebabkan oleh atmosfernya yang tebal (terutama Karbon Dioksida). Venus berputar sangat lambat dan berlawanan arah dari sebagian besar planet.",
        jenis: "Kebumian"
    },
    earth: {
        nama: "Bumi",
        fakta: "Satu-satunya planet yang diketahui menopang kehidupan. Memiliki satu bulan.",
        jenis: "Kebumian"
    },
    mars: {
        nama: "Mars",
        fakta: "Planet Merah, memiliki Olympus Mons (gunung tertinggi) dan es air.",
        jenis: "Kebumian"
    },
    jupiter: {
        nama: "Jupiter",
        fakta: "Planet terbesar, Raksasa Gas, dengan Bintik Merah Besar (badai abadi).",
        jenis: "Raksasa Gas"
    },
    saturn: {
        nama: "Saturnus",
        fakta: "Terkenal karena sistem cincin esnya yang indah dan kompleks.",
        jenis: "Raksasa Gas"
    },
    uranus: {
        nama: "Uranus",
        fakta: "Raksasa Es yang berputar pada sisinya (sumbu rotasi miring).",
        jenis: "Raksasa Es"
    },
    neptune: {
        nama: "Neptunus",
        fakta: "Planet terjauh dan terdingin, Raksasa Es yang sangat berangin.",
        jenis: "Raksasa Es"
    }
};

// Fungsi untuk menampilkan detail planet
function showPlanetDetail(planetId) {
    const data = planetData[planetId];
    const detailPanel = document.getElementById('detail-panel');

    if (data) {
        detailPanel.innerHTML = `
            <h2>${data.nama}</h2>
            <p><strong>Jenis:</strong> ${data.jenis}</p>
            <p>${data.fakta}</p>
            <p class="note">Klik untuk memuat detail lain.</p>
        `;
    }
}

// Menambahkan Event Listener ke semua planet dan matahari
document.addEventListener('DOMContentLoaded', () => {
    const celestialBodies = document.querySelectorAll('.planet, .sun');

    celestialBodies.forEach(body => {
        const planetId = body.getAttribute('data-planet-id');
        
        // 1. Event pada saat kursor diarahkan (hover)
        body.addEventListener('mouseenter', () => {
            showPlanetDetail(planetId);
        });

        // 2. Event pada saat kursor menjauh (untuk mengosongkan panel jika diinginkan, namun kita biarkan tetap terisi)
        // body.addEventListener('mouseleave', () => { ... });

        // 3. Event Klik (untuk pengguna sentuh/mobile)
        body.addEventListener('click', () => {
            showPlanetDetail(planetId);
        });
    });
});