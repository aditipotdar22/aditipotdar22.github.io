import "./About.css";

function About() {
  const sections = [
    {
      number: "01",
      label: "CONTENT",
      title: "I make the web work behind the scenes.",
      description:
        "I’m a Web Content Publisher & Frontend Developer with nearly 4 years of experience in enterprise web content management, digital publishing, and frontend development.",
      text:
        "I manage and maintain large-scale websites for global clients, ensuring accurate, high-quality, and timely content delivery.",
      technologies: ["AEM", "Sitecore", "WordPress", "Workfront", "Wrike"],
      className: "about-card-one",
    },
    {
      number: "02",
      label: "CODE",
      title: "Then I started building what I was publishing.",
      description:
        "Beyond content management, I’m passionate about frontend development and UI engineering.",
      text:
        "I enjoy transforming ideas and designs into responsive, accessible, and user-friendly interfaces using modern frontend technologies.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "React",
      ],
      className: "about-card-two",
    },
    {
      number: "03",
      label: "WHAT'S NEXT",
      title: "Now I’m going beyond the interface.",
      description:
        "I’m currently expanding my expertise into backend development and learning how the different pieces of a web application connect.",
      text:
        "My current focus includes building a stronger understanding of backend architecture, APIs, databases, and server-side development.",
      technologies: ["Node.js", "MongoDB", "REST APIs"],
      className: "about-card-three",
    },
    {
      number: "04",
      label: "THE GOAL",
      title: "Content → Code → Full Stack.",
      description:
        "My goal is to combine my experience in enterprise web publishing and frontend development with backend technologies.",
      text:
        "I want to build scalable, accessible, and complete digital experiences from end to end.",
      technologies: [],
      className: "about-card-four",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-intro">
        <div className="about-intro-number">
          <span>01</span>
          <span className="about-line"></span>
          <span>ABOUT ME</span>
        </div>

        <h2>
          I work where
          <br />
          <span>content meets code.</span>
        </h2>

        <p>
          From enterprise content publishing to frontend development,
          my journey has always been about creating better digital
          experiences.
        </p>

        <div className="scroll-hint">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </div>

      <div className="about-stack">
        {sections.map((section) => (
          <article
            key={section.number}
            className={`about-card ${section.className}`}
          >
            <div className="about-card-inner">
              <div className="about-card-top">
                <span className="about-number">
                  / {section.number}
                </span>

                <span className="about-label">
                  {section.label}
                </span>
              </div>

              <div className="about-card-content">
                <div className="about-card-heading">
                  <span className="about-small-label">
                    {section.label}
                  </span>

                  <h3>{section.title}</h3>
                </div>

                <div className="about-card-description">
                  <p className="about-description">
                    {section.description}
                  </p>

                  <p className="about-text">
                    {section.text}
                  </p>
                </div>
              </div>

              {section.technologies.length > 0 && (
                <div className="about-tech">
                  {section.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              )}

              {section.number === "04" && (
                <div className="about-goal">
                  <span>BUILDING TOWARDS</span>
                  <div className="goal-arrow">↗</div>
                  <strong>FULL STACK</strong>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;