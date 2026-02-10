import { useState, useEffect } from 'react';
import { IoMenuOutline } from "react-icons/io5";

const Navbar = ({ smoothScroll }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [headerPosition, setHeaderPosition] = useState('absolute');
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            if (currentScrollY > 0) {
                setHeaderPosition('fixed');
            } else {
                setHeaderPosition('absolute');
            }

            setLastScrollY(currentScrollY);
        };

        const handleClickOutside = (e) => {
            if (isMenuOpen && !e.target.closest('.contMenu')) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleClickOutside);
        };
    }, [lastScrollY, isMenuOpen]);

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const target = document.querySelector(id);
        if (target) {
            const headerOffset = window.innerHeight * 0.08;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
            smoothScroll(targetPosition, 1500);
        }
    };

    return (
        <header 
            id="header" 
            style={{ 
                position: headerPosition,
                transform: showHeader ? 'translateY(0)' : 'translateY(-15vh)',
                transition: 'transform 0.75s ease-in-out'
            }}
        >
            <div className="contenedor_logo">
                <h1>Trebol4Devop</h1>
                <figure className="figure">
                    <img src="/assets/images/Logo Trébol Asociados_sinFondo.png" alt="Logo" />
                </figure>
            </div>
            
            <div className="contMenu">
                <button className="menu" id="menu" onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }}>
                    <IoMenuOutline className="icono-barras" />
                </button>
                <ul id="menuNavegacion" style={{ display: isMenuOpen ? 'block' : 'none' }}>
                    <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>Nosotros</a></li>
                    <li><a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>Equipo</a></li>
                    <li><a href="#stack" onClick={(e) => handleLinkClick(e, '#stack')}>Stack</a></li>
                    <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contacto</a></li>
                </ul>
            </div>
            
            <nav>
                <ul className="barraNavegacion">
                    <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>Nosotros</a></li>
                    <li><a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>Equipo</a></li>
                    <li><a href="#stack" onClick={(e) => handleLinkClick(e, '#stack')}>Stack</a></li>
                    <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;