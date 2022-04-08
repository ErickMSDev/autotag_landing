function gotowhatsapp() {
    var name = document.getElementById("namec").value;
    var email = document.getElementById("emailc").value;
    var message = document.getElementById("message").value;

    var baseUrl = 'https://wa.me/19292381137';
    name = name !== '' ? "Nombre: " + name : '';
    email = email !== '' ? "Email: " + email : '';
    message = message !== '' ? "Mensaje: " + message : '';

    var arrParam = [];
    if(name !== '') arrParam.push(name);
    if(email !== '') arrParam.push(email);
    if(message !== '') arrParam.push(message);

    var param = name + email + message !== '' ? `?text=${arrParam.join('%0a')}` : '';

    var url = param !== '' ? baseUrl + param : baseUrl;

    document.getElementById("namec").value = '';
    document.getElementById("emailc").value = '';
    document.getElementById("message").value = '';

    window.open(url, '_blank').focus();
}

$('#ContactForm').on('submit', function () {
    gotowhatsapp()
    return false;
});