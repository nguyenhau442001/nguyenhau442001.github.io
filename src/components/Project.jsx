const TAGS = [
  "Android Vehicle HAL (VHAL)",
  "AAOS emulator",
  "SocketCAN",
  "python-can",
  "CAN / LIN",
  "Automotive Ethernet — SOME/IP, DoIP",
  "Vehicle networking ↔ Android framework",
];

export default function Project() {
  return (
    <section className="section" id="project" style={{ background: "var(--ink-deep)" }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">project</div>
          <h2 className="section-title">Self-directed project</h2>
        </div>

        <div className="flagship">
          <div>
            <span className="flagship__tag">Active build</span>
            <h3>CAN Bus → Android Vehicle HAL bridge on the AAOS emulator</h3>
            <span className="flagship__date">Ongoing</span>

            <ul>
              <li>
                Building a personal project that bridges CAN bus signals to the
                Android Vehicle HAL (VHAL) on the AAOS emulator — connecting
                lower-layer vehicle networking with upper-layer Android framework
                knowledge.
              </li>
              <li>
                Self-studying automotive communication protocols (CAN, LIN,
                Automotive Ethernet — SOME/IP, DoIP) via SocketCAN, python-can,
                and structured coursework.
              </li>
              <li>
                Complements existing Android / AAOS system-level expertise with
                the lower-layer networking side of a software-defined vehicle.
              </li>
            </ul>

            <div className="flagship__tags">
              {TAGS.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <svg
            className="flagship__map"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="6"
              y="6"
              width="188"
              height="188"
              rx="10"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
            />
            {Array.from({ length: 7 }).map((_, i) => (
              <line
                key={`v${i}`}
                x1={6 + (i + 1) * 23.5}
                y1="6"
                x2={6 + (i + 1) * 23.5}
                y2="194"
                stroke="rgba(255,255,255,0.06)"
              />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <line
                key={`h${i}`}
                x1="6"
                y1={6 + (i + 1) * 23.5}
                x2="194"
                y2={6 + (i + 1) * 23.5}
                stroke="rgba(255,255,255,0.06)"
              />
            ))}
            <path
              d="M 28 170 L 28 110 L 90 110 L 90 60 L 160 60 L 160 30"
              fill="none"
              stroke="var(--teal)"
              strokeWidth="2.5"
              strokeDasharray="6 5"
            />
            <circle cx="28" cy="170" r="6" fill="var(--muted)" />
            <rect
              x="153"
              y="23"
              width="14"
              height="14"
              rx="3"
              fill="var(--amber)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
