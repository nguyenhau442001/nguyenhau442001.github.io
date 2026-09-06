export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">education</div>
          <h2 className="section-title">Education &amp; recognition</h2>
        </div>

        <div className="edu-card">
          <div className="edu-card__top">
            <span className="edu-card__school">
              University of Technology and Technology
            </span>
            <span className="edu-card__date">Aug 2019 — Dec 2023</span>
          </div>
          <div className="edu-card__degree">
            Bachelor of Mechatronics Engineering — GPA 8.61 / 10
          </div>
          <div className="edu-card__thesis">
            Thesis: "Research and Development of a Service Robot for
            Restaurant Use"
          </div>
          <ul>
            <li>
              Designed a self-navigating service robot using ROS and an MCU for
              autonomous food delivery.
            </li>
            <li>
              Integrated a digital ordering system (iPad + Flutter app) for
              end-to-end order flow.
            </li>
            <li>
              Built a web application for real-time order management and robot
              monitoring.
            </li>
          </ul>
        </div>

        <div className="recog__grid">
          <div className="recog-card">
            <div className="recog-card__title">Awards</div>
            <ul>
              <li>Top Performer Award — First Half of 2026</li>
              <li>High Five Award — outstanding team contribution (2025)</li>
              <li>Rockstar Rookie Award — exceptional new-engineer performance (2024)</li>
              <li>Code Rally 3 &amp; 4 Participant (2023 &amp; 2024)</li>
              <li>uRobot Hackathon — 2nd Prize (2023)</li>
              <li>SMC Company Scholarship (2022)</li>
              <li>Academic Scholarship (2021 &amp; 2022)</li>
            </ul>
          </div>
          <div className="recog-card">
            <div className="recog-card__title">Mentoring</div>
            <ul>
              <li>
                Mentored 3–5 interns, freshers, and new joiners with technical
                guidance and project support.
              </li>
              <li>
                Ran technical knowledge-sharing sessions to raise team-wide
                expertise.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
