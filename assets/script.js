// Ambil value dari Dropdown
let selectedSubject = ""; // variabel untuk menyimpan subject yang dipilih
const items = document.querySelectorAll('.dropdown-item');
const dropdownText = document.getElementById('dropdownText');

items.forEach(item => {
  item.addEventListener('click', function () {
    dropdownText.textContent = this.textContent;
    selectedSubject = this.textContent; // Simpan nilai yang dipilih
  });
});

// Fungsi untuk ambil value dari inputan biasa
function getData(event){
    event.preventDefault()

    let name = document.getElementById("nama").value;
    let mail = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("pesan").value;

    console.log(name);
    console.log(mail);
    console.log(phone);
    console.log(selectedSubject);
    console.log(message);
}