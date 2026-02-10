import { IoMailOutline, IoLogoGithub, IoLogoPaypal, IoCafeOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="contact-cont">
                <div className="contact-info">
                    <h1>Contacto y apoyo</h1>
                    <div className="icons">
                        <a href="mailto:trebol4devop@proton.me" target="_blank" rel="noopener noreferrer">
                            <IoMailOutline className="icon" />
                        </a>
                        <a href="https://github.com/trebol4devop" target="_blank" rel="noopener noreferrer">
                            <IoLogoGithub className="icon" />
                        </a>
                        <a href="https://www.paypal.me/TrebolDevop" target="_blank" rel="noopener noreferrer">
                            <IoLogoPaypal className="icon" />
                        </a>
                        <a href="https://buymeacoffee.com/trebol4devop" target="_blank" rel="noopener noreferrer">
                            <IoCafeOutline className="icon" />
                        </a>
                    </div>
                </div>
                <div className="contact-form">
                    <h1>Escríbenos</h1>
                    <form action="https://formspree.io/f/xbdjevkz" method="POST">
                        <label htmlFor="name">Nombre o Compañía<p> *</p></label>
                        <input type="text" name="name" placeholder="Tu nombre" required />
                        
                        <label htmlFor="email">Email<p> *</p></label>
                        <input type="email" name="email" placeholder="tucorreo@ejemplo.com" required />
                        
                        <label htmlFor="message">Mensaje<p> *</p></label>
                        <textarea name="message" placeholder="Cuéntanos en qué podemos colaborar" required></textarea>
                        
                        <button type="submit" className="button">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;