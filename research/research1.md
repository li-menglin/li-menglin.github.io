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
      <p class="meta">Menglin Li · Sun Yat-sen University · Advisor: Prof. XXX</p>

      <section class="research-body">
        <h2>Background</h2>
        <p>
          Cosmic rays, consisting primarily of high-energy protons and nuclei, interact with 
          Earth’s atmosphere to produce cascades of secondary particles. Among them, 
          <strong>cosmic muons</strong> reach ground level with sufficient flux and stability, 
          making them ideal probes for detector calibration, atmospheric studies, and even 
          <em>muon tomography</em> in geophysics and engineering. 
        </p>
        <p>
          In parallel, <strong>neutron detection</strong> plays a vital role in both nuclear 
          physics research and radiation monitoring. By integrating <sup>3</sup>He proportional 
          counters with α-induced neutron sources, we extend the platform’s functionality beyond 
          muon detection, providing a versatile experimental system for undergraduate training 
          and applied research.
        </p>

        <h2>Experimental Setup</h2>
        <div class="figure-grid">
          <figure>
            <img src="images/setup_diagram.png" alt="Setup diagram">
            <figcaption>Schematic diagram of the telescope system with scintillators and SiPMs.</figcaption>
          </figure>
          <figure>
            <img src="images/setup_photo.jpg" alt="Experiment photo">
            <figcaption>Laboratory setup including scintillator modules and readout electronics.</figcaption>
          </figure>
        </div>
        <p>
          The telescope is composed of <em>MNT500/10 plastic scintillators</em>, each coupled 
          to a Silicon Photomultiplier (SiPM). The SiPMs are connected to a chain of modules: 
          SC1030 multichannel analyzer, SC1035 high-voltage supply, and SC1004 spectroscopy amplifier. 
          Coincidence logic between scintillators ensures efficient muon detection while 
          suppressing background noise.
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
