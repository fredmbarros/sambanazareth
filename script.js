document.getElementById('my-button').addEventListener('click', function() {
    const email = "samba.nazareth.2024@gmail.com";
    navigator.clipboard.writeText(email).catch(function(error) {
        console.error('Error copying email: ', error);
    });
    this.style.backgroundImage = "url('assets/logo-Nazareth-VERAO.png')";
        document.getElementById('email-copied').style.display = 'block';
        document.getElementById('thanks').style.display = 'block';
});

