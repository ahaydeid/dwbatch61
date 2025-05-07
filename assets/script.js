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
    console.log(message);
}

// Update dong