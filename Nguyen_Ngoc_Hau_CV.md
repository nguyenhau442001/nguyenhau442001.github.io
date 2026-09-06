# NGUYEN NGOC HAU
**ANDROID AUTOMOTIVE SOFTWARE ENGINEER — Head Unit**

Ho Chi Minh City, Vietnam | 083-627-1715 | haunguyenngoc442001@gmail.com | linkedin.com/in/nguyenhau442001

---

## About Me

Software Engineer with nearly 4 years of experience in Android Automotive (AAOS) head unit development, specializing in system-level debugging (HAL, system services, SELinux/secpol), OS version migration (Android 16→17, AIDL), and multi-OS integration (Android / QNX / Linux) on Qualcomm Snapdragon Cockpit platforms.

Proven ability to diagnose and resolve complex framework and native-layer issues on Qualcomm Snapdragon SoCs (SA6150 / SA8255 / SA8295) in large-scale production environments, and to stand up new hardware targets from board bring-up through stable release.

---

## Technical Skills

| Category | Details |
|---|---|
| **Android Platform** | AOSP, AAOS, HAL, System Services, SELinux/secpol, AIDL migration (Android 16→17), Soong / Kati / Bazel build system |
| **Emulation & Virtual Dev** | Android Goldfish & Cuttlefish Emulators (AOSP 12–14), QEMU-based virtual targets |
| **Embedded / RTOS** | QNX Hypervisor, Multi-OS integration (Android/QNX/Linux), LCM/HAM, SMMU/IOMMU |
| **Programming Languages** | C++, Python (primary) \| Java, JavaScript (secondary), Bash scripting |
| **Embedded Stack** | STM32, MPU6050/9250, H-Bridge, LiDAR, UWB, UART, SPI, I2C, Servo & BLDC motor |
| **CI/CD & Build** | Jenkins, Docker, Yocto/Bitbake, Platform Integration, Integration & Unit Testing |
| **Source Code Management** | Git, Gerrit, Bitbucket |
| **AI-Assisted Development** | GitHub Copilot, Claude Code |
| **Project Management** | Jira, RTC |
| **Languages** | Vietnamese (native), English (fluent), Chinese (basic) |

---

## Work Experience

### BOSCH GLOBAL SOFTWARE TECHNOLOGIES — Dec 2022 – Present

**Qualcomm Cockpit Platform Acquisition Project (SA6150/SA8255/SA8295) | System Integration Engineer**
*(Beginning of August 2026 – End of August 2026)*

- Supported leadership as technical lead on a customer-acquisition proof-of-concept (POC) demonstrating Android 16→17 migration readiness and QNX Hypervisor integration on Qualcomm Snapdragon Cockpit platforms, to prove platform capability to prospective OEM clients.
- Debugged Android VM boot failures under QNX Hypervisor (LCM/HAM state machine stuck at INIT, FDT/mmap64 EPERM, secpol/SELinux ability grants), restoring stable boot on SA7255/SA8295 reference targets.
- Resolved Android 16→17 AIDL migration issues (AudioChannelLayout acnMask mismatches, java_sdk_library scope errors, D8/desugar synthetic-lambda version skew) causing SystemUI crashes.
- Applied slog2info differential (OK vs. NOK) root-cause methodology across SMMU/IOMMU, PCIe PIPE clock, and hypervisor-level services to isolate failures not visible through standard Android logging.
- Presented technical readiness findings to internal stakeholders in support of the platform acquisition proposal.

**Bosch Common Integration Platform | Head Unit — Triage Engineer**
*(Mar 2026 – Present)*

- Monitor and maintain Jenkins CI/CD pipelines, cutting build-failure downtime by 40%+ through faster detection and root-cause resolution across integration teams.
- Analyze and support resolution of critical system instabilities, including ADB unavailability and HMI crashes, across a multi-platform environment (QNX, Android, AUTOSAR).
- Collaborate with cross-functional teams to improve software reliability and stability in automotive head unit systems.
- Author root-cause triage reports and partner with developers and QA to accelerate issue resolution.

**Nissan & Mitsubishi AIVI | Head Unit — Android Automotive Engineer**
*(Dec 2022 – Feb 2026)*

*Android Platform Development*
- Extended the Android platform by integrating OEM frameworks (AAFW/AASP — Android Automotive Framework / Automotive Supported Packages) into mainline, enabling custom automotive features.
- Integrated Google Assistant Service (GAS) into production systems.
- Applied AOSP Security Patch Level (SPL) updates to maintain compliance and system stability.

*System Debugging & Quality*
- Diagnosed and resolved critical Android system issues (SELinux, native crashes), improving system stability across releases.
- Analyzed and fixed CTS/VTS/STS failures to maintain Android compatibility.
- Stabilized the system after major integration activities across numerous production releases.

*Hardware Bring-Up & Integration*
- Contributed to Android platform integration across Android 12 → Android 14 → Android 16 (Linux kernel 5.4) on Qualcomm SA8155, ensuring system stability throughout.
- Brought up BSP components (kernel, device tree, Wi-Fi, Bluetooth, Audio) on new embedded targets.
- Defined partition layout and configured build targets for new devices.

*CI/CD & Automation*
- Reduced CI/CD pipeline downtime by 40%+ by identifying and resolving root causes of Jenkins failures, improving build stability.
- Developed Python/Bash automation tools to accelerate debugging and integration workflows.
- Developed and validated features on the Android Goldfish (QEMU-based) and Cuttlefish (cloud-based) emulators across AOSP 12 through AOSP 14, enabling feature development ahead of hardware availability and minimizing schedule downtime.

*Acquisition-Related Tasks*
- Prepared and delivered client demos for OEMs, including Renault, presenting complex engineering topics clearly to non-technical stakeholders.
- Customized the SystemUI application per Nissan's requirements by adding dynamic overlays.

---

## Prior Experience

**Taste Robotics (tasterobotics.vn) | Robotics Engineer**
*(2022 – 2023)*

- Built embedded C++/Python software for real-time sensor integration and motion control on an autonomous mobile robot — early hands-on experience with low-level hardware/software integration later applied directly to Android BSP and HAL work.
- Designed modular software using a publisher/subscriber messaging architecture, foundational experience in inter-process communication design applicable to Android system services and AIDL.

---

## Mentoring

- Mentored 3–5 interns, freshers, and new joiners, providing technical guidance and project support.
- Conducted technical knowledge-sharing sessions to raise team expertise.

---

## Self-Directed Learning

- Self-studying automotive communication protocols (CAN, LIN, Automotive Ethernet — SOME/IP, DoIP) via SocketCAN, python-can, and structured coursework, to complement existing Android/AAOS system-level expertise.
- Building a personal project bridging CAN bus signals to Android Vehicle HAL (VHAL) on the AAOS emulator — connecting lower-layer vehicle networking with upper-layer Android framework knowledge.

---

## Education

**Bachelor of Mechatronics Engineering — University of Technology and Technology**
*(Aug 2019 – Dec 2023)*

- GPA: 8.61/10.
- Thesis: "Research and Development of a Service Robot for Restaurant Use" — designed a self-navigating service robot using ROS and MCU for autonomous food delivery; integrated a digital ordering system (iPad + Flutter app) for end-to-end order flow; built a web application for real-time order management and robot monitoring.

---

## Activities and Awards

- Top Performer Award — First Half of 2026, recognized for outstanding individual performance.
- High Five Award — recognition for outstanding team contribution (2025).
- Rockstar Rookie Award — honoring exceptional performance as a new engineer (2024).
- Code Rally 3 & 4 Participant (2023 & 2024).
- uRobot Hackathon — 2nd Prize, robotics innovation contest (2023).
- SMC Company Scholarship (2022).
- Academic Scholarship (2021 & 2022).
