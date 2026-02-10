import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Team from './components/Team';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mottoText, setMottoText] = useState("");
  const fullMotto = `if (team.hasPassion()) { \n    create(); \n    innovate(); \n    deploy(); \n}`;
  const [showButtonUp, setShowButtonUp] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({});
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingElement = document.getElementById('typing');
    
    function type() {
      if (index < fullMotto.length) {
        setMottoText(fullMotto.slice(0, index + 1));
        index++;
        setTimeout(type, 150);
      } else {
        setTimeout(() => {
          setMottoText("");
          index = 0;
          setTimeout(type, 1000);
        }, 3000);
      }
    }

    const startTimeout = setTimeout(type, 2500);
    const heroTimeout = setTimeout(() => setHeroVisible(true), 1300);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(heroTimeout);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const contact = document.getElementById('contact');
      
      setShowButtonUp(scrollPos > 100);

      if (contact) {
        const contactTop = contact.offsetTop - 700;
        const contactBottom = contact.offsetTop + contact.offsetHeight;

        if (scrollPos > contactTop && scrollPos < contactBottom) {
          setButtonStyle({
            backgroundColor: '#363338',
            color: '#ffffff',
            border: '2px solid #363338'
          });
        } else {
          setButtonStyle({
            backgroundColor: 'rgba(67, 144, 89, 1)',
            color: '#363338',
            border: '2px solid rgba(67, 144, 89, 1)'
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      
      <button 
        className={`button_up ${showButtonUp ? 'show' : ''}`} 
        id="button_up"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={buttonStyle}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
        </svg>
      </button>

      <section id="about">
        <div 
          className="aboutMe" 
          id="aboutMe"
          style={{ 
            transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: heroVisible ? 1 : 0,
            transition: 'transform 1s ease-in-out, opacity 1s ease-in-out'
          }}
        >
          <div className="greet">
            <div>Somos </div>
            <div className="name">Trebol4Devop</div>
          </div>
          <p><b>Innovación • Código • Escalabilidad</b></p>
          <br />
          <p>
            Somos un equipo de estudiantes de la <b>Universidad de San Carlos de Guatemala (USAC)</b>. 
            Nos especializamos en arquitectura de software, automatización y soluciones escalables.
          </p>
          <br />
          <p>Buscamos crear herramientas Open Source y apoyar el desarrollo tecnológico.</p>
          
          <div className="frase">
            <p className="frase_">// team motto</p>
            <p id="typing" style={{ whiteSpace: 'pre-wrap' }}>{mottoText}</p>
            <span id="cursor">|</span>
          </div>
        </div>
      </section>

      <Team />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;