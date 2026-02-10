document.addEventListener('DOMContentLoaded', () => {
    const showMoreButtons = [];
    const hiddenElements = [];
    const hiddenElements2 = [];

    for (let i = 1; i <= 27; i++) {
        const btn = document.getElementById(`showMore${i}`);
        const element = document.getElementById(`hiddenElement${i}`);
        const closeBtn = document.getElementById(`hidden${i}`);
        
        if (btn && element && closeBtn) {
            showMoreButtons.push(btn);
            hiddenElements.push(element);
            hiddenElements2.push(closeBtn);
        }
    }

    const closeElement = (element) => {
        if (!element) return;
        
        if (window.innerWidth <= 768) {
            element.style.transition = 'opacity 0.5s ease';
            element.style.opacity = '0';
            setTimeout(() => {
                element.style.display = 'none';
                element.style.transition = '';
                element.style.opacity = '';
            }, 500);
        } else {
            element.style.transition = 'left 0.5s ease';
            element.style.left = '0';
            
            setTimeout(() => {
                element.style.display = 'none';
                element.style.transition = '';
                element.style.left = '';
            }, 500);
        }
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
                    
                    const container = element.offsetParent || document.body;
                    const elementHeight = element.offsetHeight;
                    const containerHeight = container.clientHeight;
                    let topPosition = button.offsetTop;

                    if (topPosition + elementHeight > containerHeight) {
                        topPosition = containerHeight - elementHeight - (containerHeight * 0.05);
                    }

                    element.style.top = `${topPosition}px`;

                    if (window.innerWidth <= 768) {
                        element.style.transition = 'none';
                        element.style.opacity = '0';
                        setTimeout(() => {
                            element.style.transition = 'opacity 0.5s ease';
                            element.style.opacity = '1';
                        }, 10);
                    } else {
                        element.style.transition = 'none';
                        element.style.left = '0';
                        setTimeout(() => {
                            element.style.transition = 'left 0.5s ease';
                            element.style.left = '-65%';
                        }, 10);
                    }
                }
            });
        }
    });

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

    const button_up = document.getElementById('button_up');
    const contact = document.getElementById('contact');

    document.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        if (scrollPos > 100) {
            button_up.classList.add('show');
        } else {
            button_up.classList.remove('show');
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

    if (button_up) {
        button_up.removeAttribute('onclick');
        button_up.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll(0, 1500);
        });
    }
    
    const aboutMe = document.getElementById('aboutMe');
    if (aboutMe) {
        setTimeout(() => { aboutMe.style.transform = 'translateY(0)'; aboutMe.style.opacity = 1; }, 1300);
    }

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

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    };

    const smoothScroll = (targetPosition, duration) => {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = window.innerHeight * 0.08;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
                smoothScroll(targetPosition, 1500);
            }
            if (menuNavegacion && menuNavegacion.style.display === 'block') {
                menuNavegacion.style.display = 'none';
            }
        });
    });
});

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
        setTimeout(type, 150);
    } else {
        setTimeout(() => {
            typingElement.innerHTML = '';
            index = 0;
            setTimeout(type, 1000);
        }, 3000);
    }
}

let text2 = "";

function checkScreenSize() {
    const container = document.getElementById('stack');
    if (!container) return;
    
    const style = window.getComputedStyle(container);
    const paddingLeft = parseFloat(style.paddingLeft);
    const paddingRight = parseFloat(style.paddingRight);
    
    const dinoWidth = 40; 
    const availableWidth = container.clientWidth - paddingLeft - paddingRight - dinoWidth;
    
    const charWidth = 8.15; 
    
    const count = Math.floor(availableWidth / charWidth);
    text2 = ".".repeat(Math.max(0, count));
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