export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">experience</div>
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">
            Nearly four years debugging the gap between the Android framework
            and the silicon underneath — on shipped automotive head units and
            on customer-acquisition proofs of concept.
          </p>
        </div>

        <div className="timeline">
          {/* Bosch */}
          <div className="tl-company">
            <span className="tl-company__dot"></span>
            <div className="tl-company__header">
              <span className="tl-company__name">
                Bosch Global Software Technologies
              </span>
              <span className="tl-company__span">Dec 2022 — Present</span>
            </div>

            <div className="tl-role">
              <div className="tl-role__head">
                <span className="tl-role__title">
                  System Integration Engineer — Qualcomm Cockpit Platform
                  Acquisition POC
                </span>
                <span className="tl-role__date">Aug 2026</span>
              </div>
              <ul>
                <li>
                  Supported leadership as technical lead on a customer-acquisition
                  proof of concept demonstrating readiness to migrate to a newer
                  Android release and QNX Hypervisor integration on Qualcomm
                  Snapdragon Cockpit platforms, to prove platform capability to
                  prospective OEM clients.
                </li>
                <li>
                  Debugged Android VM boot failures under QNX Hypervisor (LCM/HAM
                  state machine stuck at INIT, FDT/mmap64 EPERM, secpol/SELinux
                  ability grants), restoring stable boot on reference targets.
                </li>
                <li>
                  Resolved AIDL migration issues (AudioChannelLayout mask
                  mismatches, java_sdk_library scope errors, D8/desugar
                  synthetic-lambda version skew) causing SystemUI crashes.
                </li>
                <li>
                  Applied slog2info differential (OK vs. NOK) root-cause
                  methodology across SMMU/IOMMU, PCIe PIPE clock, and
                  hypervisor-level services to isolate failures not visible
                  through standard Android logging.
                </li>
                <li>
                  Presented technical readiness findings to internal stakeholders
                  in support of the platform acquisition proposal.
                </li>
              </ul>
            </div>

            <div className="tl-role">
              <div className="tl-role__head">
                <span className="tl-role__title">
                  Triage Engineer — Bosch Common Integration Platform, Head Unit
                </span>
                <span className="tl-role__date">Mar 2026 — Present</span>
              </div>
              <ul>
                <li>
                  Monitor and maintain Jenkins CI/CD pipelines, cutting
                  build-failure downtime by 40%+ through faster detection and
                  root-cause resolution across integration teams.
                </li>
                <li>
                  Analyze and support resolution of critical system instabilities,
                  including ADB unavailability and HMI crashes, across a
                  multi-platform environment (QNX, Android, AUTOSAR).
                </li>
                <li>
                  Author root-cause triage reports and partner with developers
                  and QA to accelerate issue resolution.
                </li>
              </ul>
            </div>

            <div className="tl-role">
              <div className="tl-role__head">
                <span className="tl-role__title">
                  Android Automotive Engineer — Nissan &amp; Mitsubishi AIVI,
                  Head Unit
                </span>
                <span className="tl-role__date">Dec 2022 — Feb 2026</span>
              </div>
              <ul>
                <li>
                  Extended the Android platform by integrating OEM frameworks
                  (AAFW/AASP) into mainline, enabling custom automotive features,
                  and integrated Google Assistant Service (GAS) into production
                  systems.
                </li>
                <li>
                  Diagnosed and resolved critical Android system issues (SELinux,
                  native crashes) and fixed CTS/VTS/STS failures to maintain
                  Android compatibility across releases.
                </li>
                <li>
                  Contributed to Android platform integration across multiple
                  major Android releases on a Qualcomm Snapdragon Cockpit SoC,
                  bringing up BSP components (kernel, device tree, Wi-Fi,
                  Bluetooth, Audio) and defining partition layout for new targets.
                </li>
                <li>
                  Reduced CI/CD pipeline downtime by 40%+ by root-causing Jenkins
                  failures, and developed Python/Bash automation tools to
                  accelerate debugging and integration workflows.
                </li>
                <li>
                  Developed and validated features on the Android Goldfish
                  (QEMU-based) and Cuttlefish (cloud-based) emulators across
                  multiple AOSP releases, enabling feature development ahead of
                  hardware.
                </li>
                <li>
                  Prepared and delivered client demos for OEMs including Renault,
                  and customized SystemUI per Nissan's requirements with dynamic
                  overlays.
                </li>
              </ul>
            </div>
          </div>

          {/* Taste Robotics */}
          <div className="tl-company">
            <span className="tl-company__dot"></span>
            <div className="tl-company__header">
              <span className="tl-company__name">Taste Robotics</span>
              <span className="tl-company__span">2022 — 2023</span>
            </div>
            <div className="tl-role">
              <div className="tl-role__head">
                <span className="tl-role__title">Robotics Engineer</span>
              </div>
              <ul>
                <li>
                  Built embedded C++/Python software for real-time sensor
                  integration and motion control on an autonomous mobile robot —
                  early hands-on hardware/software integration later applied
                  directly to Android BSP and HAL work.
                </li>
                <li>
                  Designed modular software using a publisher/subscriber
                  messaging architecture — foundational IPC-design experience
                  applicable to Android system services and AIDL.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
