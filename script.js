document.getElementById('my-button').addEventListener('click', function() {
    const email = "samba.nazareth.2024@gmail.com";
    
    navigator.clipboard.writeText(email).catch(function(error) {
        console.error('Error copying email: ', error);
    });

    this.style.backgroundImage = "url('assets/logo-Nazareth-VERAO.png')";

    const emailCopied = document.getElementById('email-copied');
    const thankyou = document.getElementById('thanks');

    emailCopied.style.display = 'block';
    emailCopied.classList.add('show');

    thankyou.style.display = 'block';
    thankyou.classList.add('show');

    document.getElementById('protip').style.display = 'block';

    setTimeout(function() {
        emailCopied.classList.remove('show');
        thankyou.classList.remove('show');
        setTimeout(function() {
            emailCopied.style.display = 'none';
            thankyou.style.display = 'none';
        }, 1000);
    }, 1000);
});
