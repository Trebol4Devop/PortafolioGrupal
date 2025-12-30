document.addEventListener('DOMContentLoaded', () => {
    const showMoreButtons = [];
    const hiddenElements = [];
    const hiddenElements2 = [];

    // Ajustado a 10 elementos que pusimos en el HTML (puedes subirlo si agregas más iconos)
    for (let i = 1; i <= 10; i++) {
        showMoreButtons.push(document.getElementById(`showMore${i}`));
        hiddenElements.push(document.getElementById(`hiddenElement${i}`));
        hiddenElements2.push(document.getElementById(`hidden${i}`));
    }

    const closeElement = (element) => {
        if (!element) return;
        element.style.transition = 'left 0.5s ease';
        element.style.left = '0';
        
        setTimeout(() => {
            element.style.display = 'none';
            element.style.transition = '';
            element.style.left = '';
        }, 500);
    };

    hiddenElements2.forEach((button2, index) => {
        if (button2 && hiddenElements[index]) {
            button2.addEventListener('click', (e) => {
                e.stopPropagation();
                closeElement(hiddenElements[index]);
            });
        }
    });

    showMoreButtons.forEach((button, index) => {
        if (button && hiddenElements[index]) {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                // Cerrar otros
                hiddenElements.forEach((el, i) => {
                    if (i !== index && el.style.display === 'block') {
                         closeElement(el);
                    }
                });

                const element = hiddenElements[index];
                if (element.style.display === 'block') {
                    closeElement(element);
                } else {
                    element.style.display = 'block';
                    element.style.transition = 'none';
                    element.style.left = '0';

                    const container = element.offsetParent || document.body;
                    const elementHeight = element.offsetHeight;
                    const containerHeight = container.clientHeight;
                    let topPosition = button.offsetTop;

                    if (topPosition + elementHeight > containerHeight) {
                        topPosition = containerHeight - elementHeight - (containerHeight * 0.05);
                    }

                    element.style.top = `${topPosition}px`;

                    setTimeout(() => {
                        element.style.transition = 'left 0.5s ease';
                        element.style.left = '-65%';
                    }, 10);
                }
            });
        }
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', (event) => {
        hiddenElements.forEach((element, index) => {
            if (element && element.style.display === 'block') {
                const isClickInsideElement = element.contains(event.target);
                const isClickOnButton = showMoreButtons[index] && showMoreButtons[index].contains(event.target);
                if (!isClickInsideElement && !isClickOnButton) {
                    closeElement(element);
                }
            }
        });
    });

    // Header scroll effect
    let lastScrollY = window.scrollY;
    const header = document.getElementById('header');
    document.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            header.style.transform = 'translateY(-15vh)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollY = currentScrollY;
    });

    // Button UP & Header position
    const button_up = document.getElementById('button_up');
    const contact = document.getElementById('contact');

    document.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        if (scrollPos > 100) {
            button_up.style.opacity = '1';
        } else {
            button_up.style.opacity = '0';
        }

        if (scrollPos > 0) {
            header.style.position = 'fixed';
        } else {
            header.style.position = 'absolute';
        }

        if (contact) {
            const contactTop = contact.offsetTop - 700;
            const contactBottom = contact.offsetTop + contact.offsetHeight;

            if (scrollPos > contactTop && scrollPos < contactBottom) {
                button_up.style.backgroundColor = '#363338';
                button_up.style.color = '#363338';
                button_up.style.border = '2px solid #363338';
            } else {
                button_up.style.backgroundColor = 'rgba(67, 144, 89, 1)';
                button_up.style.color = '#363338';
                button_up.style.border = '2px solid rgba(67, 144, 89, 1)';
            }
        }
    });

    // Animación de entrada
    const i = document.getElementById('i');
    const down = document.getElementById('down');
    const aboutMe = document.getElementById('aboutMe');
    
    if (i && down && aboutMe) {
        setTimeout(() => {
            i.style.transform = 'translateY(0)';
            down.style.transform = 'translateY(0)';
        }, 300);
        // ...resto de animaciones de opacidad (igual al original)
        setTimeout(() => { i.style.opacity = 1; down.style.opacity = 1; }, 1100);
        setTimeout(() => { aboutMe.style.transform = 'translateY(0)'; aboutMe.style.opacity = 1; }, 1300);
    }

    // Menú móvil
    const menu = document.getElementById('menu');
    const menuNavegacion = document.getElementById('menuNavegacion');
    if (menu && menuNavegacion) {
        menu.addEventListener('click', (e) => {
            e.stopPropagation();
            menuNavegacion.style.display = (menuNavegacion.style.display === 'block') ? 'none' : 'block';
        });
        window.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !menuNavegacion.contains(e.target)) {
                menuNavegacion.style.display = 'none';
            }
        });
    }
});

// Animación de texto tipo máquina de escribir adaptada para el grupo
const text = `if (team.hasPassion()) { 
    create(); 
    innovate(); 
    deploy(); 
}`;
let index = 0;
function type() {
    const typingElement = document.getElementById('typing');
    if (!typingElement) return;
    
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 150); // Un poco más rápido
    } else {
        setTimeout(() => {
            typingElement.innerHTML = '';
            index = 0;
            setTimeout(type, 1000);
        }, 3000);
    }
}

// Animación del Dino (corrección de ancho de pantalla)
let text2 = "";
function checkScreenSize() {
    if (window.innerWidth < 768) {
        text2 = ".".repeat(30);
    } else if (window.innerWidth < 1024) {
        text2 = ".".repeat(35);
    } else {
        text2 = ".".repeat(148);
    }
}
window.addEventListener('resize', checkScreenSize);
checkScreenSize();

let index2 = 0;
function type2() {
    const runElement = document.getElementById('run');
    if (!runElement) return;

    if (index2 < text2.length) {
        runElement.innerHTML += text2.charAt(index2);
        index2++;
        setTimeout(type2, 100);
    } else {
        setTimeout(() => {
            runElement.innerHTML = '';
            index2 = 0;
            setTimeout(type2, 1000);
        }, 1000);
    }
}

window.onload = () => {
    setTimeout(type, 2500);
    setTimeout(type2, 1000);
};