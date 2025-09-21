---
layout: default
title: null
permalink: /research/research1.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Experimental Research on SiPM-Based Cosmic-Ray and Neutron Detection Systems</title>
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
      Experimental Research on SiPM-Based Cosmic-Ray and Neutron Detection Systems
    </h1>
    <p class="meta">
      Menglin Li · Sun Yat-sen University · Advisor: Prof. Jie Feng<br>
      October 2024 – present
    </p>

    <section class="research-body">
      <h2>Overview</h2>
      <p>
        This project develops a compact detection platform based on plastic scintillators with Silicon Photomultipliers (SiPMs), 
        complemented by a helium-3 counter for neutron measurements. The system is designed to register cosmic-ray muons and neutrons 
        under coincidence logic, enabling both detector calibration and exploratory muon imaging studies.
      </p>

      <h2>Experimental Setup</h2>
      <p>
        The telescope employs two vertically aligned scintillators coupled with SiPMs; coincident signals identify through-going muons. 
        Electronics include a spectroscopy amplifier, single-channel analyzers (SCAs), and a coincidence unit triggering a multichannel analyzer (MCA). 
        A helium-3 proportional counter is inserted coaxially to measure neutrons under the same trigger conditions.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/research1setup.png" alt="Setup diagram">
          <figcaption>Figure 1. Schematic of the telescope system with scintillators and SiPM readout.</figcaption>
        </figure>
        <figure>
          <img src="/images/research1platform.png" alt="Experiment photo">
          <figcaption>Figure 2. Laboratory implementation including scintillator paddles and electronics.</figcaption>
        </figure>
      </div>

      <h2>Methodology</h2>
      <p>
        Muon energy deposition is modeled by the Bethe–Bloch formula:
      </p>
      <p class="equation">
        -&lt;dE/dx&gt; = K z² (Z/A) (1/β²) [ ½ ln (2 m<sub>e</sub>c² β²γ² T<sub>max</sub> / I² ) - β² - δ/2 ].
      </p>
      <p>
        In thin absorbers, energy deposition follows a Landau distribution. Python-based Monte Carlo simulations were developed to reproduce 
        the spectrum and predict counting rates, providing a cross-check against experimental results.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/muon-stoppingpower.png" alt="Muon momentum vs stopping power">
          <figcaption>Figure 3. Muon momentum versus stopping power.</figcaption>
        </figure>
        <figure>
          <img src="/images/muon-landau.png" alt="Muon Landau distribution">
          <figcaption>Figure 4. Simulated Landau distribution of muon energy deposition.</figcaption>
        </figure>
      </div>

      <p>
        Neutron detection is based on the reaction:
      </p>
      <p class="equation">
        \( n + {}^{3}\mathrm{He} \rightarrow p + t + 764\ \mathrm{keV} \),
      </p>
      <p>
        where the proton–triton pair deposits its full kinetic energy, forming a distinct peak in the MCA spectrum. 
        A compact Am-241–aluminum neutron source was also prepared via:
      </p>
      <p class="equation">
        α + <sup>27</sup>Al → <sup>30</sup>P + n.
      </p>
      
      <div class="figure-grid">
      <figure>
        <img src="/images/alpha-sigma.png" alt="Alpha-Aluminum reaction cross-section">
        <figcaption>Figure 5. Cross-section of α-induced reactions on aluminum.</figcaption>
        </figure>
      </div>

      <h2>Key Contributions</h2>
      <ul>
        <li><strong>System Design:</strong> Constructed a multi-channel SiPM-based cosmic-ray telescope with coincidence logic for muon detection.</li>
        <li><strong>Detector Optimization:</strong> Tuned SiPM bias and thresholds to enhance resolution, suppress noise, and ensure stable muon flux measurements across multiple building levels.</li>
        <li><strong>Modeling & Simulation:</strong> Applied Bethe–Bloch and Landau MPV analysis; implemented Python-based Monte Carlo simulations to model muon energy-loss spectra and predict detection efficiency.</li>
        <li><strong>Neutron Detection:</strong> Designed experiments with an Am-241–aluminum neutron source, identified the p–t coincidence peak in the He-3 counter, and established calibration benchmarks via spectral analysis.</li>
      </ul>

      <h2>Progress & Outlook</h2>
      <p>
        Initial efficiency studies confirmed alignment of scintillator modules and validated coincidence logic. 
        Measurements across multiple floors demonstrated attenuation trends consistent with muon absorption, 
        supporting the feasibility of muon imaging. Current efforts focus on refining neutron-source validation 
        and quantifying uncertainties. Longer-term, the platform provides a foundation for muon imaging applications 
        and broader particle instrumentation research.
      </p>
    </section>
  </div>
</div>
</body>
</html>
