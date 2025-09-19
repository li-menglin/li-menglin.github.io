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
      October 2024 – present
    </p>

    <section class="research-body">
      <h2>Background</h2>
      <p>
        Cosmic rays from outer space interact with the Earth’s atmosphere, generating extensive showers of secondary particles. 
        At sea level, muons constitute the dominant component—highly penetrating charged particles capable of traversing dense materials 
        with minimal energy loss. Their penetrating nature makes muons valuable natural probes for detector studies.
      </p>
      <p>
        In this work, muons are detected using plastic scintillators coupled with silicon photomultipliers (SiPMs), while complementary 
        neutron measurements are carried out with a helium-3 proportional counter. The platform, built around a simple cosmic-ray 
        telescope, serves two main purposes: (i) to explore the feasibility of muon imaging by varying shielding materials and detector spacing, 
        and (ii) to establish a robust calibration method for multi-channel detectors by analyzing the characteristic Landau distribution of 
        minimum ionizing particles (MIPs). The He-3 counter further identifies the distinct proton–triton coincidence peak, providing an 
        independent anchor for energy calibration.
      </p>

      <h2>Experimental Setup</h2>
      <p>
        The telescope consists of two vertically aligned plastic scintillators separated by a defined baseline so that through-going 
        muons produce coincident signals. Each scintillator is coupled to a SiPM, with signals processed by a spectroscopy amplifier, 
        shaped by single-channel analyzers (SCAs), and combined in a coincidence unit. The resulting logic output triggers a digital 
        multichannel analyzer (MCA), ensuring that only true muon events initiate spectral acquisition.
      </p>
      <p>
        A helium-3 tube is positioned coaxially between the scintillators so that both muon and neutron interactions are measured 
        under the same trigger conditions. Muon passage through the tube produces a Landau-like pulse-height spectrum, which provides 
        a reliable reference for detector calibration.
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

      <p>
        Neutron detection relies on the well-known reaction 
        <span class="equation">\( n + {}^{3}\mathrm{He} \rightarrow p + t + 764\ \mathrm{keV} \)</span>, 
        where the emitted proton–triton pair deposits its full kinetic energy in the gas, forming a distinct “p–t peak” in the MCA spectrum. 
        With coincidence gating, uncorrelated background is strongly suppressed, allowing clean identification of both muon and neutron events. 
        Together, this configuration establishes a versatile platform for cross-checking detector calibration using natural muons and compact neutron sources.
      </p>

      <h2>Methodology and Analysis</h2>
      <p>
        Detector calibration was performed with plastic scintillators and SiPMs, together with the He-3 neutron counter, to measure cosmic-ray muon energy deposition. 
        The energy loss mechanism follows the Bethe–Bloch formula:
      </p>

      <p class="equation">
        -&lt;dE/dx&gt; = K z² (Z/A) (1/β²) [ ½ ln (2 m<sub>e</sub>c² β²γ² T<sub>max</sub> / I² ) - β² - δ/2 ]
      </p>

      <p>
        For high-energy muons in thin absorbers, the deposited energy follows a Landau distribution. Based on the He-3 tube parameters 
        (80 mm length, 2 atm, 25 ℃), the most probable energy deposition was estimated at <strong>3.828 keV</strong>.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/muon-stoppingpower.png" alt="Muon momentum vs stopping power">
          <figcaption>Figure 3. Muon momentum versus stopping power.</figcaption>
        </figure>
        <figure>
          <img src="/images/muon-landau.png" alt="Muon Landau distribution">
          <figcaption>Figure 4. Simulated Landau distribution of muon energy deposition in the He-3 tube.</figcaption>
        </figure>
      </div>
      
      <p>
        A compact neutron source was also constructed using Americium-241 from smoke detectors. The emitted α particles irradiated thin aluminum foils, inducing:
      </p>

      <p class="equation">
        α + <sup>27</sup>Al → <sup>30</sup>P + n
      </p>

      <p>
        The expected yield (~12 neutrons/min) confirmed the feasibility of this approach. Recording muon Landau peaks and neutron capture signals under identical 
        trigger conditions enabled cross-referenced benchmarks for detector energy calibration and performance assessment.
      </p>

      <figure class="research-figure">
        <img src="/images/alpha-sigma.png" alt="Alpha-Aluminum reaction cross-section">
        <figcaption>Figure 5. Cross-section of α-induced reactions on aluminum.</figcaption>
      </figure>

      <h2>Progress and Results</h2>
      <p>
        Scintillator efficiency was first evaluated by measuring single-detector rates and aligning modules precisely. Using the three-detector coincidence method, 
        the efficiency of the middle detector was determined, establishing a reliable baseline for performance characterization.
      </p>
      <p>
        By stacking three scintillators and translating the middle one, both two-fold and three-fold coincidence rates were measured. 
        A Python-based Monte Carlo analysis was implemented to extract the effective detection length, improving accuracy beyond simple geometry.
      </p>
      <p>
        The telescope was subsequently deployed across multiple floors of the teaching building. Measured muon rates showed consistent attenuation trends 
        with increasing overburden, providing preliminary evidence for muon imaging feasibility. 
      </p>
      <p>
        Current work focuses on preparing the Am-241–aluminum neutron source to measure the muon Landau MPV (~3.8&nbsp;keV) in the He-3 tube 
        and to evaluate statistical uncertainties and overall calibration reliability.
      </p>

      <h2>Conclusion & Outlook</h2>
      <p>
        This project has demonstrated the successful construction and operation of a SiPM-based cosmic-ray telescope, validated through efficiency measurements, 
        muon rate studies, and preliminary calibration. The combination of plastic scintillators and a He-3 counter provides a flexible platform capable of 
        registering both muon and neutron signatures under coincidence logic.
      </p>
      <p>
        In the short term, we will refine muon energy-deposition measurements and complete neutron-source validation to consolidate the platform as a calibration tool. 
        In the longer term, the methodology developed here may be extended to muon imaging and integrated into broader particle detection and instrumentation programs.
      </p>
    </section>
  </div>
</div>
</body>
</html>
