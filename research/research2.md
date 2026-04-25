---
layout: default
title: null
permalink: /research/research2.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Experimental Research on PMT-Based Environmental Radiation Monitoring Systems</title>
  <link rel="stylesheet" href="research.css">
</head>
<body>
<div id="research-detail">
  <div class="content-card">
    <h1 class="page__title">
      Experimental Research on PMT-Based Environmental Radiation Monitoring Systems
    </h1>
    <p class="meta">
      Research Assistant/Project Lead · Sun Yat-sen University · Advisor: Prof. Jie Feng<br>
      Oct. 2024 – Present
    </p>

    <section class="research-body">
      <h2>Overview</h2>
      <p>
        This project develops a compact detection platform based on plastic scintillators coupled with Photomultiplier Tubes (PMTs). 
        The system is designed to register environmental background radiation under coincidence logic, enabling accurate detector calibration, 
        signal chain optimization, and baseline environmental monitoring across different operational conditions.
      </p>

      <h2>Experimental Setup</h2>
      <p>
        The monitoring platform employs vertically aligned scintillators coupled with PMTs, utilizing coincident signals to isolate target radiation events 
        from background noise. The electronic readout chain incorporates spectroscopy amplifiers, single-channel analyzers (SCAs), and a coincidence 
        logic unit that triggers a digital multi-channel analyzer (MCA) for precise spectral acquisition.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/monitoring-setup.png" alt="Setup diagram of the monitoring platform">
          <figcaption>Figure 1. Schematic of the environmental radiation monitoring system</figcaption>
        </figure>
        <figure>
          <img src="/images/monitoring-platform.png" alt="Experiment photo with electronics">
          <figcaption>Figure 2. Laboratory implementation including optoelectronic signal chains</figcaption>
        </figure>
      </div>

      <h2>Methodology</h2>
      <p>
        The energy deposition of background radiation in the plastic scintillators is modeled using standard energy-loss distributions. 
        In thin absorbers, the energy loss fluctuations are characterized by a Landau distribution. Python-based Monte Carlo simulations 
        were developed to reproduce these energy-loss spectra and predict baseline counting rates, providing a robust theoretical cross-check 
        against the experimental MCA data.
      </p>
      <p>
        To ensure signal integrity, the accidental coincidence rate was carefully evaluated and minimized using the resolving time of the coincidence unit. 
        System calibration was performed by mapping the analog-to-digital conversion channels of the MCA to known energy reference points, 
        ensuring high-fidelity spectral analysis.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/energy-loss-sim.png" alt="Simulated energy deposition">
          <figcaption>Figure 3. Simulated distribution of radiation energy deposition</figcaption>
        </figure>
        <figure>
          <img src="/images/mca-calibration.png" alt="MCA calibration spectrum">
          <figcaption>Figure 4. Validated MCA spectrum for system baseline calibration</figcaption>
        </figure>
      </div>

      <h2>My Contributions</h2>
      <ul>
      <li><strong>System Design:</strong> Designed and constructed an environmental monitoring platform using plastic scintillators and PMTs, integrated with digital MCAs for signal acquisition.</li>
      <li><strong>Experimental Corrections:</strong> Measured coincidence rates with stacked detectors, and developed a Python program combining Monte Carlo sampling with experimental data to determine effective detector length and correct raw measurements.</li>   
      <li><strong>Detector Optimization:</strong> Tuned PMT bias voltages and thresholds to enhance signal resolution, suppress electronic noise, and ensure stable baseline counting rates across different operational environments.</li>
      <li><strong>Theoretical Modeling:</strong> Built dedicated Python-based simulations to model detector energy-loss spectra and quantitatively predict system efficiency.</li>
      <li><strong>System Validation:</strong> Validated the system's baseline performance through spectral analysis, integrating signal processing chains into the theoretical framework of coincidence triggering logic.</li>
      </ul>

      <h2>Progress & Outlook</h2>
      <p>
        Initial efficiency studies confirmed the accurate alignment of the optoelectronic modules and validated the robustness of the coincidence logic. 
        Measurements taken across multiple environments demonstrated stable baseline characteristics, supporting the reliability of the signal processing chain. 
        Current efforts focus on refining signal-to-noise ratios and quantifying statistical uncertainties. Longer-term, the platform provides a solid 
        foundation for advanced electronic instrumentation and environmental sensing applications.
      </p>
    </section>
  </div>
</div>
</body>
</html>
