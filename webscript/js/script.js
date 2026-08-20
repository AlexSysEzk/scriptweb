document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CONTROLES DE LA VENTANA
    document.querySelector('.minimize').addEventListener('click', () => {
        window.history.back();
    });

    document.querySelector('.maximize').addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {});
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
        }
    });

    document.querySelector('.close').addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // 2. ANIMACIÓN DE CONSOLA INTELIGENTE
    const pathElement = document.getElementById('prompt-path');
    const typeWriterElement = document.getElementById('typewriter');
    
    // Si la página tiene el efecto typewriter, lo ejecutamos
    if (pathElement && typeWriterElement) {
        // Leemos los datos configurados en el HTML
        const command = typeWriterElement.getAttribute('data-command') || "cd .\\ActiveDirectory";
        const finalPath = pathElement.getAttribute('data-final') || "PS C:\\ActiveDirectory&gt;";
        let i = 0;

        function typeCommand() {
            if (i < command.length) {
                typeWriterElement.innerHTML += command.charAt(i);
                i++;
                setTimeout(typeCommand, 70);
            } else {
                setTimeout(() => {
                    typeWriterElement.innerHTML = ""; 
                    pathElement.innerHTML = finalPath; 
                }, 500);
            }
        }

        setTimeout(typeCommand, 500);
    }
});

// 3. FUNCIÓN PARA COPIAR CÓDIGO
window.copyCode = function(button) {
    // Busca el bloque de código que está justo al lado del botón
    const codeBlock = button.nextElementSibling.innerText;
    
    // Copia al portapapeles
    navigator.clipboard.writeText(codeBlock).then(() => {
        // Cambia el texto del botón temporalmente para dar feedback
        const originalText = button.innerHTML;
        button.innerHTML = "✅ ¡Copiado!";
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
};