---
layout: default
title: null
permalink: /research/research1.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cosmic-Ray Telescope and Neutron Signal Detection</title>
  <link rel="stylesheet" href="research.css">
  <!-- MathJax -->
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script>
</head>
<body>
  <div id="research-detail">
    <div class="content-card">
      <h1 class="page__title">
        Development of a SiPM-Based Cosmic-Ray Telescope and Neutron Detection System
      </h1>
      <p class="meta">
        Menglin Li · Sun Yat-sen University · Advisor: Prof. Jie Feng<br>
        October 2024 to now
      </p>
      
      <section class="research-body">
        <h2>Background</h2>
        <p>
          Cosmic rays, originating from outer space, interact with the Earth’s atmosphere and generate cascades of secondary particles. At sea level, a 
          significant fraction of these secondary cosmic rays consists of muons, which are highly penetrating charged particles capable of traversing dense 
          materials with minimal attenuation. This unique property makes muons valuable probes for experimental studies. To detect them, we employ plastic 
          scintillator detectors coupled with silicon photomultipliers (SiPMs), while complementary measurements of neutrons are performed with a helium-3 
          proportional counter. 
        </p>
        <p>
          The experimental platform centers on a cosmic ray telescope composed of two vertically aligned plastic scintillator detectors. Our project pursues two 
          primary objectives. First, by measuring muon count rates under varying conditions—such as different materials or detector positions—we aim to explore 
          the feasibility of muon imaging. Second, by analyzing the energy deposition of minimum ionizing particles (MIPs) in the scintillators and the 
          characteristic Landau distribution, we seek to establish a reliable calibration method for multi-channel detectors. Additionally, the He-3 neutron 
          detector is used to measure the expected proton–triton coincidence peak, thereby validating the platform as a testbed for energy calibration of 
          radiation detectors.
        </p>

        <h2>Experimental Setup</h2>
        <p>
        The telescope comprises two plastic scintillator paddles oriented vertically, separated by a fixed baseline so that through-going cosmic muons traverse 
        both detectors in succession.Each scintillator is optically coupled to a SiPM whose output is processed by a spectroscopy amplifier to produce a shaped 
        analog signal. The amplified outputs are then passed to single-channel analyzers (SCAs) to generate standardized logic pulses. A coincidence unit requires 
        simultaneous pulses from both scintillators to assert a valid muon trigger. The coincidence output is used as the gate signal to the digital multichannel 
        analyzer (MCA) for time-synchronous spectral acquisition.
        </p>
        <p>
        The He-3 tube is positioned coaxially between the two scintillators so that muons and neutrons interacting in the detector volume are recorded under 
        identical trigger conditions.When a muon traverses the He-3 gas, it deposits energy primarily via ionization; the MCA records the resulting pulse-height 
        spectrum, which exhibits the characteristic Landau distribution associated with minimum ionizing particles (MIPs). These muon-induced spectra serve as an 
        established reference for energy-response calibration.
        </p>
        <div class="figure-grid">
          <figure>
            <img src="/images/research1setup.png" alt="Setup diagram">
            <figcaption>Schematic diagram of the telescope system with scintillators and SiPMs.</figcaption>
          </figure>
          <figure>
            <img src="/images/research1platform.png" alt="Experiment photo">
            <figcaption>Laboratory setup including scintillator modules and readout electronics.</figcaption>
          </figure>
        </div>
        <p>
        Thermal and fast neutrons captured by the He-3 nucleus undergo the well-known reaction
        <span style="white-space:nowrap;">\(n + {}^{3}\mathrm{He} \rightarrow p + t + 764\ \mathrm{keV}\)</span>,
        producing a proton–triton (p–t) pair whose combined kinetic energy is deposited locally and recorded as a distinct feature (the p–t peak) in the MCA 
        spectrum. Observation of the p–t peak under the same gated acquisition conditions provides an independent spectral marker that validates the energy scale 
        derived from muon events.
        </p>
        <p>
        All detector signals are time-stamped and gated by the coincidence logic to suppress uncorrelated background. The physical arrangement (scintillator 
        baseline, He-3 tube position, and electronic gating) is chosen to maximize geometric acceptance for through-going muons while ensuring the He-3 counter is 
        fully within the trigger volume. The resulting configuration yields a robust platform for cross-referencing muon energy-deposition signatures and neutron 
        capture features for detector energy calibration and response characterization.
        </p>



        <h2>Methodology and Analysis</h2>
        <p>
          To quantify muon energy loss, we employed the <strong>Bethe–Bloch equation</strong>:
        </p>
        <p class="equation">
          \[
          -\frac{dE}{dx} = K z^2 \frac{Z}{A} \frac{1}{\beta^2} 
          \left[ \frac{1}{2}\ln\left(\frac{2 m_e c^2 \beta^2 \gamma^2 T_{\text{max}}}{I^2}\right) 
          - \beta^2 - \frac{\delta}{2} \right]
          \]
        </p>
        <p>
          Experimental spectra were fitted using the <em>Landau distribution</em> to extract 
          the Most Probable Value (MPV) of muon energy deposition. 
          Parallel <strong>Monte Carlo simulations</strong> in Python estimated the expected 
          muon flux at ground level, enabling direct comparison between theory and measurement.
        </p>

        <div class="figure-grid">
          <figure>
            <img src="images/muon_spectrum.png" alt="Muon spectrum">
            <figcaption>Measured muon energy-loss spectrum with Landau fit.</figcaption>
          </figure>
          <figure>
            <img src="images/neutron_peak.png" alt="Neutron peak">
            <figcaption>Neutron capture peak observed in <sup>3</sup>He proportional counter.</figcaption>
          </figure>
        </div>

        <h2>Results</h2>
        <p>
          The prototype telescope achieved consistent muon counting rates, with results 
          matching simulated expectations within statistical uncertainties. Adjusting SiPM 
          bias voltage demonstrated a clear optimization window for energy resolution 
          and noise suppression.
        </p>
        <p>
          For neutron detection, the α–Al reaction induced by an Am-241 source generated 
          neutrons that were successfully detected by the <sup>3</sup>He counter. 
          The characteristic p–t coincidence peak confirmed the presence of neutrons 
          and validated the calibration of the spectrometer.
        </p>

        <h2>Conclusion & Outlook</h2>
        <p>
          This project successfully developed a compact, SiPM-based system capable of detecting 
          both cosmic muons and neutron signals. The results establish a solid platform 
          for future studies, including advanced muon tomography experiments, detector 
          calibration routines, and radiation-safety applications. Upcoming work will 
          focus on extending measurement duration, refining statistical analysis, 
          and exploring hybrid systems integrating both scintillator and proportional-counter technologies.
        </p>
      </section>
    </div>
  </div>
</body>
</html>
