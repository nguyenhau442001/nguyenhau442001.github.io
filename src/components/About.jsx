export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">
          <div>
            <div className="eyebrow">about</div>
            <h2 className="section-title">
              System-level engineering for software-defined cockpits.
            </h2>
            <div className="about__copy" style={{ marginTop: 24 }}>
              <p>
                I'm a software engineer with nearly four years of experience in
                Android Automotive (AAOS) head unit development, specializing in
                system-level debugging — HAL, system services, SELinux/secpol —
                OS version migration to a newer Android release (AIDL), and multi-OS
                integration across Android, QNX, and Linux on Qualcomm Snapdragon
                Cockpit platforms.
              </p>
              <p>
                I diagnose and resolve complex framework and native-layer issues
                on Qualcomm Snapdragon Cockpit SoCs in large-scale production
                environments, and stand up new hardware targets from board
                bring-up through stable release.
              </p>
              <p>
                Outside shipped platform work, I'm self-studying automotive
                communication protocols (CAN, LIN, Automotive Ethernet —
                SOME/IP, DoIP) and building a personal project that bridges CAN
                bus signals to the Android Vehicle HAL on the AAOS emulator.
              </p>
            </div>
          </div>

          <div className="about__meta">
            <div className="about__meta-row">
              <div className="about__meta-label">Based in</div>
              <div className="about__meta-value">Ho Chi Minh City, Vietnam</div>
            </div>
            <div className="about__meta-row">
              <div className="about__meta-label">Currently</div>
              <div className="about__meta-value">
                System Integration &amp; Triage Engineer @ Bosch Global Software
                Technologies
              </div>
            </div>
            <div className="about__meta-row">
              <div className="about__meta-label">Speaks</div>
              <div className="about__meta-value">
                Vietnamese (native), English (fluent), Chinese (basic)
              </div>
            </div>
            <div className="about__meta-row">
              <div className="about__meta-label">Education</div>
              <div className="about__meta-value">
                B.Eng Mechatronics — GPA 8.61/10
              </div>
            </div>
            <div className="about__meta-row">
              <div className="about__meta-label">Email</div>
              <div className="about__meta-value">
                <a href="mailto:haunguyenngoc442001@gmail.com">
                  haunguyenngoc442001@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
