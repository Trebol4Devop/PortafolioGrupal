import { useState, useEffect, useRef } from 'react';

const skills = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5", desc: "I have a medium level of proficiency in HTML5. And I'm currently learning more about it. I can create an organized structure for a website with HTML5." },
  { name: "CSS3", icon: "https://api.iconify.design/logos:css-3.svg", desc: "I have a medium level of proficiency in CSS3. And I'm currently learning more about it." },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript", desc: "I have a medium level of proficiency in JavaScript. And I'm currently learning more about it." },
  { name: "React", icon: "https://cdn.simpleicons.org/react", desc: "I have a basic level of proficiency in React. And I'm currently learning more about it." },
  { name: "Python", icon: "https://cdn.simpleicons.org/python", desc: "I have a medium level of proficiency in Python. And I'm currently learning more about it." },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github", desc: "I have a basic level of proficiency in GitHub. And I'm currently learning more about it." },
  { name: "Git", icon: "https://cdn.simpleicons.org/git", desc: "I have a basic level of proficiency in Git. And I'm currently learning more about it." },
  { name: "Java", icon: "https://api.iconify.design/logos:java.svg", desc: "I have a basic level of proficiency in Java. And I'm currently learning more about it." },
  { name: "Go", icon: "https://api.iconify.design/logos:go.svg", desc: "I have a basic level of proficiency in Go. And I'm currently learning more about it." },
  { name: "C", icon: "https://api.iconify.design/logos:c.svg", desc: "I have a basic level of proficiency in C. And I'm currently learning more about it." },
  { name: "C#", icon: "https://api.iconify.design/logos:c-sharp.svg", desc: "I have a basic level of proficiency in C#. And I'm currently learning more about it." },
  { name: "Dart", icon: "https://cdn.simpleicons.org/dart", desc: "I have a basic level of proficiency in Dart. And I'm currently learning more about it." },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux", desc: "I have a basic level of proficiency in Linux. And I'm currently learning more about it." },
  { name: "IoT", icon: "https://unpkg.com/ionicons@5.5.2/dist/svg/hardware-chip-outline.svg", desc: "I have a basic level of proficiency in Internet of Things. And I'm currently learning more about it." },
  { name: "AWS", icon: "https://api.iconify.design/logos:aws.svg", desc: "I have a basic level of proficiency in AWS. And I'm currently learning more about it." },
  { name: "Obsidian", icon: "https://cdn.simpleicons.org/obsidian", desc: "I have a basic level of proficiency in Obsidian. And I'm currently learning more about it." },
  { name: "ARM64", icon: "https://cdn.simpleicons.org/arm", desc: "I have a basic level of proficiency in ARM64 architecture. And I'm currently learning more about it." },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify", desc: "I have a basic level of proficiency in Netlify. And I'm currently learning more about it." }
];

const TechStack = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [renderIndex, setRenderIndex] = useState(null);
  const [dinoDots, setDinoDots] = useState("");
  const skillsContainerRef = useRef(null);

  const toggleSkill = (index, e) => {
    e.stopPropagation();
    
    if (activeIndex === index) {
      setActiveIndex(null);
      setTimeout(() => {
        setRenderIndex(null);
      }, 300);
    } else {
      if (activeIndex !== null) {
        setActiveIndex(null);
        setTimeout(() => {
          setRenderIndex(index);
          setTimeout(() => {
            setActiveIndex(index);
          }, 10);
        }, 300);
      } else {
        setRenderIndex(index);
        setTimeout(() => {
          setActiveIndex(index);
        }, 10);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeIndex !== null && skillsContainerRef.current && !skillsContainerRef.current.contains(event.target)) {
        setActiveIndex(null);
        setTimeout(() => {
          setRenderIndex(null);
        }, 300);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeIndex]);

  useEffect(() => {
    let text2 = "";
    const container = document.getElementById('stack');
    
    if (container) {
      const style = window.getComputedStyle(container);
      const paddingLeft = parseFloat(style.paddingLeft);
      const paddingRight = parseFloat(style.paddingRight);
      const availableWidth = container.clientWidth - paddingLeft - paddingRight - 40;
      const count = Math.floor(availableWidth / 8.15);
      text2 = ".".repeat(Math.max(0, count));
    }

    let index2 = 0;
    function type2() {
      if (index2 < text2.length) {
        setDinoDots(text2.slice(0, index2 + 1));
        index2++;
        setTimeout(type2, 100);
      } else {
        setTimeout(() => {
          setDinoDots("");
          index2 = 0;
          setTimeout(type2, 1000);
        }, 1000);
      }
    }
    
    const dinoTimeout = setTimeout(type2, 1000);
    return () => clearTimeout(dinoTimeout);
  }, []);

  return (
    <div className="skills" id="stack" ref={skillsContainerRef}>
      <h1>Tech Stack</h1>
      <div className="skill">
        {skills.map((skill, index) => {
          const isActive = activeIndex === index;
          const shouldRender = renderIndex === index;
          const isMobile = window.innerWidth <= 768;

          return (
            <div key={index} style={{ width: '30%', position: 'relative', marginBottom: '5%' }}>
              <button 
                type="button" 
                onClick={(e) => toggleSkill(index, e)} 
                style={{ width: '100%', background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <img src={skill.icon} className="icon-img" alt={skill.name} style={{ width: '70px', height: 'auto' }} />
                <p className="view">View more</p>
              </button>

              {shouldRender && (
                <div 
                  className="hiddenElement" 
                  style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute', 
                    top: '-20px', 
                    left: isMobile ? '5%' : '50%',
                    transform: isMobile 
                      ? `translateX(${isActive ? '0' : '100%'})` 
                      : `translateX(${isActive ? '-65%' : '100%'})`,
                    width: isMobile ? '90%' : '200%',
                    opacity: isActive ? 1 : 0,
                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                    backgroundColor: '#2592ffd5',
                    padding: '10%',
                    borderRadius: '10px',
                    zIndex: 10,
                    color: 'white',
                    pointerEvents: isActive ? 'auto' : 'none'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    type="button" 
                    onClick={() => {
                      setActiveIndex(null);
                      setTimeout(() => {
                        setRenderIndex(null);
                      }, 300);
                    }}
                    style={{ position: 'absolute', right: '10px', top: '10px', background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}
                  >
                    ✕
                  </button>
                  <h2>
                    <img src={skill.icon} alt={skill.name} style={{ width: '50px', display: 'block', margin: '0 auto 10px' }}/>
                    {skill.name}
                  </h2>
                  <p className="info">{skill.desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="run">
        <p id="run">{dinoDots}</p>
        <img src="/assets/images/dino.png" alt="Dino" id="dino" />
      </div>
    </div>
  );
};

export default TechStack;