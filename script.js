// Fungsi untuk memperbarui jam
function updateClock() {
    // Cari elemen dengan id 'datetime' di HTML
    const dateTimeElement = document.getElementById('datetime');

    // Buat objek Date untuk mendapatkan waktu saat ini
    const now = new Date();

    // Opsi untuk memformat tanggal dan waktu ke dalam format Indonesia
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    // Ubah konten elemen 'datetime' dengan tanggal dan waktu yang sudah diformat
    dateTimeElement.textContent = now.toLocaleDateString('id-ID', options);
}

// Atur agar fungsi updateClock() dijalankan setiap 1000 milidetik (1 detik)
setInterval(updateClock, 1000);

// Panggil fungsi ini juga saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', updateClock);