function Skills() {
  const skills = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  return (
    <section id="skills" className="section skills-section">
      <p className="small-title">WHAT I KNOW</p>

      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <span>✦</span>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;