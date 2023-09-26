function validate() {
    const type = document.getElementById('validationType').value;
    const value = document.getElementById('inputValue').value;
    
    let regex;
    
    switch (type) {
        case 'ip':
            regex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;
            break;
        case 'url':
            regex = /^(http|https|ftp):\/\/[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+|^\/\/[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+/;
            break;
        case 'email':
            regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            break;
        default:
            alert('Tipo de validación no reconocido');
            return;
    }
    
    if (regex.test(value)) {
        alert('El valor ingresado es válido.');
    } else {
        alert('El valor ingresado no es válido.');
    }
}
