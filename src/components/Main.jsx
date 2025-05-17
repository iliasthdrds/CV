import React from "react";

export default function Main() {
  return (
    <main className="main">

      <div className="section-row">
        <span className="section-label"> Education </span>
        <div className="section-description">
          <div className="info-line">
            <div className="university-block">
              <span className="field">Department of Informatics and Telecommunications</span>
              <span className="university-name-location">
                <span className="university-name">University of Peloponnese</span>
                <span className="university-location">Tripoli, Greece</span>
              </span>
            </div>
          </div>
          <span className="field1">Bsc in Science and Technology of Telecommunications</span>
        </div>
        <span className="section-date">
           <img src="./date.png" alt="calendar" className="calendar-icon" />
          Sep 2009 - Jul 2023</span>
      </div>

       <div className="divider"></div>

       <div className="section-row">
        <span className="section-label"> Experience </span>
        <div className="section-description experience-description">
          <div className="job-date-row">
            <span className="job">Studying web development independently through platforms like Udemy and freeCodeCamp. Completing hands-on projects to deepen my understanding of both frontend and backend technologies.</span>
            <span className="section-date">
              <img src="./date.png" alt="calendar" className="calendar-icon" />
              Jan 2025 - Today
            </span>
          </div>
          <div className="job-date-row">
            <span className="job">I owned and managed my own business in the food service industry. This role involved overseeing daily operations, managing customer service, coordinating tasks, and handling financial and administrative responsibilities. Through this experience, I developed strong communication skills, effective time management, and organizational abilities, ensuring smooth business functioning and growth.
            <br />Additionally, I maintained an active interest in technology, applying digital tools to optimize business processes and improve efficiency.</span>
            <span className="section-date">
              <img src="/date.png" alt="calendar" className="calendar-icon" />
              Oct 2017 - Mar 2025
            </span>
          </div>
        </div>
      </div>

       <div className="divider"></div>

       <div className="section-row">
        <span className="section-label"> Skills & Tools </span>
        <div className="section-description skills-tools-section">
          
          <div className="skills-group">
            <div className="skills-title">Languages</div>
            <div className="skills-subgroup"><span className="skills-subtitle">FE related</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS/SCSS</span>
              
              <span className="skill-tag">JavaScript</span>
            </div>
            <div className="skills-subgroup"><span className="skills-subtitle">BE related</span>
              
              <span className="skill-tag">SQL</span>
            </div>
          </div>
          <div className="skills-group">
            <div className="skills-title">Technologies</div>
            <div className="skills-subgroup"><span className="skills-subtitle">UI related</span>
              <span className="skill-tag">Tailwind CSS</span>
              
            </div>
            <div className="skills-subgroup"><span className="skills-subtitle">FE related</span>
              <span className="skill-tag">React</span>
             
            </div>
            
          </div>
          <div className="skills-group">
            <div className="skills-title">Tools &amp; Softwares</div>
            <div className="skills-subgroup"><span className="skills-subtitle">Coder related</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Github</span>
              <span className="skill-tag">Vite</span>
              <span className="skill-tag">npm</span>
            </div>
            <div className="skills-subgroup"><span className="skills-subtitle">Ai tools</span>
              <span className="skill-tag">Copilot</span>
              <span className="skill-tag">ChatGPT</span>
              
            </div>
            <div className="skills-subgroup"><span className="skills-subtitle">Designer related</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Canva</span>
              <span className="skill-tag">Pixso</span>
            </div>
          </div>
        </div>
        <span className="section-date"></span>
       </div>

       <div className="divider"></div>

      <div className="section-row">
        <span className="section-label">Languages</span>
        <div className="section-description">
          <div className="language-item">
            <span className="language-name">Greek</span>
            <span className="language-level">Native</span>
          </div>
          <div className="language-item">
            <span className="language-name">English</span>
            <span className="language-level">Advanced</span>
          </div>
        </div>
        <span className="section-date"></span>
      </div>

      <div className="divider"></div>
     </main>
  );
}