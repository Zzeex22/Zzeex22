let map;
let marker;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -6.200001, lng: 106.816666 }, // Koordinat Jakarta
        zoom: 10,
    });
}

function getLocation() {
    fetch('http://ip-api.com/json/')
        .then(response => response.json())
        .then(data => {
            const lat = data.lat;
            const lon = data.lon;
            const location = { lat: lat, lng: lon };

            if (marker) {
                marker.setMap(null); // Hapus marker sebelumnya
            }

            marker = new google.maps.Marker({
                position: location,
                map: map,
                title: "Lokasi Anda",
            });

            map.setCenter(location);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Gagal mendapatkan lokasi.');
        });
}

// Inisialisasi peta saat halaman dimuat
window.onload = initMap;