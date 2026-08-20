document.addEventListener('DOMContentLoaded', () => {
    // 1. Efecto Máquina de Escribir (Terminal)
    const textToType = "./Start-AD_Scripts.ps1";
    const typeWriterElement = document.getElementById('typewriter');
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            typeWriterElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Velocidad de tipeo
        }
    }

    // Iniciar el efecto después de medio segundo
    setTimeout(typeWriter, 500);

    // 2. Guiño en la consola real
    console.log("%c[+] Módulo ActiveDirectory cargado con éxito.", "color: #0078D4; font-weight: bold;");
});