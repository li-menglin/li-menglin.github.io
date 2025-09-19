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
  Cosmic rays originating from outer space interact with the Earth’s atmosphere to produce extensive showers of secondary particles. 
  At sea level, a large fraction of these secondaries consists of muons—highly penetrating charged particles that can traverse dense 
  materials with only modest energy loss. This penetrating nature makes muons especially valuable as natural probes for detector studies.
</p>
<p>
  To detect muons, we employ plastic scintillator detectors coupled with silicon photomultipliers (SiPMs), while complementary 
  measurements of neutrons are performed with a helium-3 proportional counter. The experimental platform, built around a simple cosmic-ray 
  telescope, serves two primary objectives. First, by measuring muon count rates under varying configurations—such as shielding materials or 
  detector spacing—we investigate the feasibility of muon imaging. Second, by analyzing the characteristic Landau distribution of minimum 
  ionizing particles (MIPs), we establish a reliable calibration method for multi-channel detectors. In parallel, the He-3 counter is used 
  to identify the distinct proton–triton coincidence peak, thereby validating the platform as a practical testbed for detector energy calibration.
</p>

<h2>Experimental Setup</h2>
<p>
  The telescope consists of two vertically aligned plastic scintillator paddles, separated by a defined baseline so that through-going 
  muons produce coincident signals. Each scintillator is coupled to a SiPM, with the output processed by a spectroscopy amplifier and then 
  shaped by single-channel analyzers (SCAs). Logic pulses from both channels are fed into a coincidence unit, whose output serves as a 
  trigger for the digital multichannel analyzer (MCA). This gating ensures that only true through-going muons initiate spectral acquisition.
</p>
<p>
  A helium-3 tube is placed coaxially between the scintillators so that both muons and neutrons interacting in the gas volume are measured 
  under identical trigger conditions. When a muon passes through the tube, it deposits energy via ionization, producing a Landau-like pulse-height 
  spectrum characteristic of MIPs. These muon spectra provide a well-defined reference for detector calibration.
</p>
<div class="figure-grid">
  <figure>
    <img src="/images/research1setup.png" alt="Setup diagram">
    <figcaption>Schematic of the telescope system with scintillators and SiPM readout.</figcaption>
  </figure>
  <figure>
    <img src="/images/research1platform.png" alt="Experiment photo">
    <figcaption>Laboratory implementation including scintillator paddles and electronics.</figcaption>
  </figure>
</div>
<p>
  Neutron detection relies on the well-known capture reaction 
  <span class="equation">\( n + {}^{3}\mathrm{He} \rightarrow p + t + 764\ \mathrm{keV} \)</span>, 
  in which the released proton–triton pair deposits its full kinetic energy in the gas. This appears as a distinct “p–t peak” in the MCA 
  spectrum, providing an independent anchor point for the energy scale. With all signals gated by coincidence logic, uncorrelated background 
  is strongly suppressed, ensuring clean identification of both muon and neutron events. Altogether, this arrangement forms a robust and 
  versatile platform for cross-checking detector calibration using naturally occurring cosmic muons and compact neutron sources.
</p>




    <h2>Methodology and Analysis</h2>
    <p>
        To calibrate the detection platform, we utilized plastic scintillators coupled with SiPMs, 
        together with a He-3 neutron detector, to measure the energy deposition of cosmic-ray muons. 
        The underlying principle follows the Bethe–Bloch description of energy loss by charged particles in matter:
      </p>

      <!-- Bethe–Bloch equation -->
      <p class="equation">
        -&lt;dE/dx&gt; = K z² (Z/A) (1/β²) [ ½ ln (2 m<sub>e</sub>c² β²γ² T<sub>max</sub> / I² ) - β² - δ/2 ]
      </p>

      <p>
        Here, <em>dE/dx</em> represents the stopping power, and for high-energy muons in thin absorbers, 
        the deposited energy distribution follows a Landau shape. Based on the He-3 tube parameters 
        (length 80 mm, 2 atm, 25 ℃), the most probable value (MPV) of the muon energy deposition was 
        estimated to be <strong>3.828 keV</strong>.
      </p>

      <!-- Figure: Muon stopping power -->
      <figure class="research-figure">
        <img src="/images/muon-stoppingpower.png" alt="Muon momentum vs stopping power">
        <figcaption>Figure 1. Muon momentum versus stopping power, illustrating the Bethe–Bloch dependence.</figcaption>
      </figure>

      <!-- Figure: Muon Landau distribution -->
      <figure class="research-figure">
        <img src="/images/muon-landau.png" alt="Muon Landau distribution">
        <figcaption>Figure 2. Simulated Landau distribution of muon energy deposition in the He-3 tube. 
          The MPV is located at approximately 3.828 keV.</figcaption>
      </figure>

      <p>
        To further validate the calibration, a compact neutron source was constructed using Americium-241 from a smoke detector. 
        The α particles released in its decay were directed onto an aluminum foil, inducing the nuclear reaction:
      </p>

      <p class="equation">
        α + <sup>27</sup>Al → <sup>30</sup>P + n
      </p>

      <p>
        The measured cross-section indicates the feasibility of this method. 
        The calculated neutron yield is about <strong>12.0 particles per minute</strong>, 
        sufficient for testing the He-3 tube response. 
        The captured neutrons are expected to produce the characteristic proton–triton peak at 764 keV, 
        which serves as an anchor point for detector energy calibration.
      </p>

      <!-- Figure: Alpha + Aluminum cross section -->
      <figure class="research-figure">
        <img src="/images/aluminum-crosssection.png" alt="Alpha-Aluminum reaction cross-section">
        <figcaption>Figure 3. Reaction cross-section of α particles on aluminum, confirming the feasibility of neutron generation.</figcaption>
      </figure>




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
