function validateFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Por favor, selecciona un archivo.');
        return;
    }
    
    const fileName = file.name;
    const regex = /\.(jpg|jpeg|png|gif)$/i;
    
    if (regex.test(fileName)) {
        alert('El archivo es válido.');
    } else {
        alert('El archivo no es válido. Por favor, sube un archivo de imagen (.jpg, .jpeg, .png, .gif).');
    }
}

document.getElementById('fileInput').addEventListener('change', validateFile);
