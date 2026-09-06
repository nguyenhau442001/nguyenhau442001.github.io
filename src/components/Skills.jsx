const GROUPS = [
  {
    title: "Android Platform",
    tags: [
      "AOSP",
      "AAOS",
      "HAL",
      "System Services",
      "SELinux / secpol",
      "AIDL migration",
      "Soong / Kati / Bazel",
    ],
  },
  {
    title: "Emulation & Virtual Dev",
    tags: [
      "Goldfish Emulator",
      "Cuttlefish Emulator",
      "Multiple AOSP releases",
      "QEMU virtual targets",
    ],
  },
  {
    title: "Embedded / RTOS",
    tags: [
      "QNX Hypervisor",
      "Multi-OS (Android / QNX / Linux)",
      "LCM / HAM",
      "SMMU / IOMMU",
    ],
  },
  {
    title: "Programming Languages",
    tags: ["C++", "Python", "Java", "JavaScript", "Bash"],
  },
  {
    title: "Embedded Stack",
    tags: [
      "STM32",
      "MPU6050 / 9250",
      "H-Bridge",
      "LiDAR",
      "UWB",
      "UART",
      "SPI",
      "I2C",
      "Servo & BLDC Motors",
    ],
  },
  {
    title: "CI/CD & Build",
    tags: [
      "Jenkins",
      "Docker",
      "Yocto / Bitbake",
      "Platform Integration",
      "Integration & Unit Testing",
    ],
  },
  {
    title: "Source Code Management",
    tags: ["Git", "Gerrit", "Bitbucket"],
  },
  {
    title: "AI-Assisted Development",
    tags: ["GitHub Copilot", "Claude Code"],
  },
  {
    title: "Project Management",
    tags: ["Jira", "RTC"],
  },
  {
    title: "Spoken Languages",
    tags: ["Vietnamese — Native", "English — Fluent", "Chinese — Basic"],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: "var(--ink-deep)" }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">spec_sheet</div>
          <h2 className="section-title">Technical skills</h2>
          <p className="section-sub">
            The stack I reach for when a problem spans the Android framework,
            the native layer, and the hypervisor beneath it.
          </p>
        </div>

        <div className="skills__grid">
          {GROUPS.map((g) => (
            <div className="skill-card" key={g.title}>
              <div className="skill-card__title">{g.title}</div>
              <div className="skill-card__tags">
                {g.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
