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
        complemented by a helium-3 tube detector for neutron spectrum measurement. The system is designed to register cosmic-ray muons and neutrons 
        under coincidence logic, enabling both detector calibration and exploratory muon imaging studies.
      </p>

      <h2>Experimental Setup</h2>
      <p>
        The telescope employs two vertically aligned scintillators coupled with SiPMs, with coincident signals to identify through-going muons. The readout chain 
        incorporates spectroscopy amplifiers, single-channel analyzers (SCAs), and a coincidence unit triggering a multichannel analyzer (MCA). A 
        \({}^{3}\mathrm{He}\) tube neutron detector is inserted coaxially to measure neutrons under the same trigger conditions.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/research1setup.png" alt="Setup diagram">
          <figcaption>Figure 1. Schematic of the Cosmic ray telescope system</figcaption>
        </figure>
        <figure>
          <img src="/images/research1platform.png" alt="Experiment photo">
          <figcaption>Figure 2. Laboratory implementation including scintillator paddles and electronics</figcaption>
        </figure>
      </div>

      <h2>Methodology</h2>
      <p>
        Muon energy deposition in the plastic scintillators and the He-3 tube is modeled by the Bethe–Bloch formula:
      </p>
      <p class="equation">
        \( -\left\langle \frac{dE}{dx} \right\rangle= K z^{2} \frac{Z}{A} \frac{1}{\beta^{2}}\left[\tfrac{1}{2} \ln\!\left( \frac{2 m_{e} c^{2} 
        \beta^{2}\gamma^{2} T_{\text{max}}}{I^{2}} \right)- \beta^{2} - \frac{\delta}{2}\right] \)
      </p>
      <p>
        In thin absorbers, energy deposition follows a Landau distribution. Python-based Monte Carlo simulations were developed to reproduce 
        the spectrum and predict counting rates, providing a cross-check against experimental results.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/muon-stoppingpower.png" alt="Muon momentum vs stopping power">
          <figcaption>Figure 3. Muon momentum versus stopping power</figcaption>
        </figure>
        <figure>
          <img src="/images/muon-landau.png" alt="Muon Landau distribution">
          <figcaption>Figure 4. Simulated Landau distribution of muon energy deposition</figcaption>
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
        \( \alpha + {}^{27}\mathrm{Al} \;\rightarrow\; {}^{30}\mathrm{P} + n \)
      </p>
      
      <figure class="research-figure">
        <img src="/images/alpha-sigma.png" alt="Alpha-Aluminum reaction cross-section">
        <figcaption>Figure 5. Cross-section of α-induced reactions on aluminum.</figcaption>
      </figure>


      <h2>My Contributions</h2>
      <ul>
      <li><strong>System Design:</strong> Constructed a multi-channel SiPM-based cosmic-ray telescope with coincidence logic for muon detection.</li>
      <li><strong>Experimental Corrections:</strong> Measured two-fold and three-fold coincidence rates with three stacked plastic scintillators, and developed a 
      Python program that combines Monte Carlo sampling with experimental data to determine the effective scintillator length and correct raw measurements.</li>   
      <li><strong>Detector Optimization:</strong> Tuned SiPM bias and thresholds to enhance resolution, suppress noise, and ensure stable muon flux measurements 
      across multiple building levels.</li>
      <li><strong>Theoretical Modeling:</strong> Applied Bethe–Bloch and Landau MPV analysis; built dedicated Python-based Monte Carlo simulations to reproduce 
      muon energy-loss spectra and quantitatively predict detector efficiency.</li>
      <li><strong>Neutron Detection:</strong> Designed experiments with an Am-241–aluminum neutron source, identified the p–t coincidence peak in the He-3 
      tube, and established calibration benchmarks via spectral analysis.</li>

      </ul>

      <h2>Progress & Outlook</h2>
      <p>
        Initial efficiency studies confirmed alignment of scintillator modules and validated coincidence logic. Measurements across multiple floors demonstrated 
        attenuation trends consistent with muon absorption, supporting the feasibility of muon imaging. Current efforts focus on refining neutron-source 
        validation and quantifying uncertainties. Longer-term, the platform provides a foundation for muon imaging applications and extended particle 
        instrumentation calibration
      </p>
    </section>
  </div>
</div>
</body>
</html>
