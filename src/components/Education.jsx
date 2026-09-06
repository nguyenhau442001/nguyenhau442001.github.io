import { useState, useEffect } from "react";
import highFiveMe from "../assets/awards/HighFiveAward_me.jpg";
import highFiveTrophy from "../assets/awards/HighFiveAward_trophy.jpg";
import rockstarMe from "../assets/awards/RockstarRooke_me.jpg";
import rockstarCert from "../assets/awards/RockstarRookie_cert.jpg";
import uRobotPodium from "../assets/awards/uRobot_2nd_prize.jpg";
import uRobotTrophy from "../assets/awards/uRobot_trophy.jpg";

const SHOTS = [
  {
    src: highFiveMe,
    caption: "High Five Award — Nissan Integration Japan Team, BGSV Appreciation Night 2025",
  },
  {
    src: highFiveTrophy,
    caption: "High Five Award trophy — “WIN · LEAD”, BGSV Appreciation Night 2025",
  },
  {
    src: rockstarMe,
    caption: "Rockstar Rookie — BGSW Appreciation Night 2024, “Light of Pride”",
  },
  {
    src: rockstarCert,
    caption: "Rockstar Rookie — Certificate of Appreciation, Bosch Global Software Technologies",
  },
  {
    src: uRobotPodium,
    caption: "uRobot Hackathon — 1st Runner-up, BGSW Vietnam Hackathon 2023",
  },
  {
    src: uRobotTrophy,
    caption: "uRobot Hackathon trophy — 1st Runner-up, #uRobot 2023",
  },
];

export default function Education() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % SHOTS.length);
      if (e.key === "ArrowLeft")
        setActive((i) => (i - 1 + SHOTS.length) % SHOTS.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

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

        <div className="award-gallery">
          <div className="award-gallery__label">On stage</div>
          <div className="award-gallery__grid">
            {SHOTS.map((shot, i) => (
              <button
                type="button"
                className="award-shot"
                key={shot.src}
                onClick={() => setActive(i)}
                aria-label={`View photo: ${shot.caption}`}
              >
                <img src={shot.src} alt={shot.caption} loading="lazy" />
                <span className="award-shot__caption">{shot.caption}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {active !== null && (
        <div
          className="lightbox"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={SHOTS[active].caption}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img src={SHOTS[active].src} alt={SHOTS[active].caption} />
          <div className="lightbox__caption">{SHOTS[active].caption}</div>
        </div>
      )}
    </section>
  );
}
