const members = [
    {
        name: "José Monzón",
        role: "Full Stack",
        desc: "Desarrollo integral de soluciones web y sistemas.",
        img: "https://github.com/0520Jose.png",
        github: "https://github.com/0520Jose",
        icon: "💻"
    },
    {
        name: "Diego Vásquez",
        role: "Frontend",
        desc: "Diseño de interfaces y experiencia de usuario.",
        img: "https://github.com/DiegVas.png",
        github: "https://github.com/DiegVas",
        icon: "🎨"
    },
    {
        name: "Carlos del Cid",
        role: "Backend",
        desc: "Lógica de servidor y gestión de datos.",
        img: "https://github.com/Carlosdelcid05.png",
        github: "https://github.com/Carlosdelcid05",
        icon: "🚀"
    },
    {
        name: "Ottoniel Vásquez",
        role: "DevOps",
        desc: "Infraestructura, automatización y despliegue.",
        img: "https://github.com/Farot3.png",
        github: "https://github.com/Farot3",
        icon: "⚙️"
    }
];

const Team = () => {
    return (
        <div className="projects" id="team">
            <h1>Nuestro Equipo</h1>
            <div className="project" style={{ justifyContent: "center", gap: "2%" }}>
                {members.map((member, index) => (
                    <div className="project1" key={index} style={{ height: "auto", minHeight: "60vh" }}>
                        <div className="line"></div>
                        <div className="img_proyect" style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
                            <img src={member.img} alt={member.name} style={{ width: "150px", borderRadius: "50%" }} />
                        </div>
                        <h2>{member.name}</h2>
                        <p style={{ textAlign: "center" }}>
                            {member.icon} <b>{member.role}</b><br />
                            {member.desc}
                        </p>
                        <div className="boton">
                            <a className="button2" href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;