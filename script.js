function togglePass(inputId, icon) {
    const input = document.getElementById(inputId);
    if (!input) return;

    if (input.type === "password") {
        input.type = "text";
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
        input.type = "password";
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    }
}

function handleLogin(event) {
    event.preventDefault();
    const nama = document.getElementById('input-nama').value.trim();
    const password = document.getElementById('input-password').value;

    if (nama && password) {
        alert(`Selamat datang, ${nama}! Login berhasil.`);
    }
}