import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div>
          <div className="hero__location">
            <span className="dot"></span>
            Ho Chi Minh City, Vietnam — Local time GMT+7
          </div>
          <h1>Nguyen Ngoc Hau</h1>
          <p className="hero__role">
            Android Automotive Software Engineer — Head Unit
          </p>
          <p className="hero__thesis">
            Nearly four years building and debugging Android Automotive (AAOS)
            head units — HAL, system services, SELinux/secpol, OS version
            migration, and multi-OS integration across Android, QNX, and Linux
            on Qualcomm Snapdragon Cockpit platforms.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              Get in touch
            </a>
            <a
              className="btn btn--ghost"
              href="https://www.linkedin.com/in/nguyenhau442001/"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn ↗
            </a>
          </div>

          <div className="hero__stats">
            <div className="stat">
              <div className="stat__value">~4 yrs</div>
              <div className="stat__label">Android Automotive</div>
            </div>
            <div className="stat">
              <div className="stat__value">Snapdragon</div>
              <div className="stat__label">Cockpit Platforms</div>
            </div>
            <div className="stat">
              <div className="stat__value">3</div>
              <div className="stat__label">OS Stacks Integrated</div>
            </div>
          </div>
        </div>

        <div className="hero__radar-col">
          <div className="radar" aria-hidden="true">
            <svg
              className="radar__rings"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="100"
                cy="100"
                r="98"
                fill="none"
                stroke="rgba(255,255,255,0.10)"
              />
              <circle
                cx="100"
                cy="100"
                r="72"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
              />
              <circle
                cx="100"
                cy="100"
                r="46"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
              />
              <line
                x1="100"
                y1="2"
                x2="100"
                y2="198"
                stroke="rgba(255,255,255,0.06)"
              />
              <line
                x1="2"
                y1="100"
                x2="198"
                y2="100"
                stroke="rgba(255,255,255,0.06)"
              />
            </svg>
            <div className="radar__sweep"></div>
            <div className="radar__photo-ring">
              <img
                className="radar__photo"
                src={profile}
                alt="Portrait of Nguyen Ngoc Hau"
              />
            </div>

            <span className="radar__blip radar__blip--1">AAOS / HAL</span>
            <span className="radar__blip radar__blip--2">QNX Hypervisor</span>
            <span className="radar__blip radar__blip--3">SELinux / secpol</span>
            <span className="radar__blip radar__blip--4">Snapdragon Cockpit</span>
            <span className="radar__blip radar__blip--5">C++ / Python</span>
          </div>
        </div>
      </div>
    </section>
  );
}
