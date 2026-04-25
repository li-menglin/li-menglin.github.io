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
      Timing Reconstruction in PMT-Based TOF-PET Detectors
    </h1>
    <p class="meta">
      Bachelor Thesis Project · Sun Yat-sen University · Advisor: Prof. Jie Feng<br>
      Dec. 2025 – Apr. 2026
    </p>

<section class="research-body">
  <h2>Overview</h2>
  <p>
    Time-of-Flight Positron Emission Tomography (TOF-PET) is a cornerstone of modern molecular imaging, where timing resolution 
    directly determines the signal-to-noise ratio of reconstructed images. This project focuses on the waveform-level 
    analysis of signal characteristics in dual-end readout PET detectors. By modeling the detector response and 
    optimizing timing extraction algorithms, the research aims to overcome the fundamental limits imposed by 
    scintillation photon statistics and sensor electronic response.
  </p>

  <h2>Experimental Setup</h2>
  <p>
    The study utilizes experimental datasets from a high-resolution mouse PET system. The detector modules consist of 
    finely segmented crystal arrays coupled with high-sensitivity photomultiplier sensors. The readout electronics 
    capture high-speed digital waveforms, allowing for a detailed examination of the pulse shape, rise time, and 
    electronic noise characteristics that affect the precision of coincidence event detection.
  </p>

  <div class="figure-grid">
    <figure>
      <img src="/images/pet-detector-setup.png" alt="PET detector module">
      <figcaption>Figure 1. Schematic of the dual-end readout PET detector module</figcaption>
    </figure>
    <figure>
      <img src="/images/pet-readout-electronics.png" alt="Readout electronics">
      <figcaption>Figure 2. High-speed waveform sampling and data acquisition system</figcaption>
    </figure>
  </div>

  <h2>Methodology</h2>
  <p>
    The timing precision \(\sigma_t\) of a PET detector is governed by the fluctuations in the arrival time of the first 
    detected photons. The relationship can be simplified as a function of the signal-to-noise ratio and the slope of the 
    pulse leading edge:
  </p>
  <p class="equation">
    \( \sigma_{t} \approx \frac{\sigma_{noise}}{\left| dV/dt \right|_{threshold}} \)
  </p>
  <p>
    To validate experimental findings, comprehensive Monte Carlo simulations were conducted using the GATE (GEANT4 Application 
    for Tomographic Emission) framework. These simulations reproduce the stochastic processes of photon generation, 
    transport, and detection, providing a gold-standard reference for benchmarking different timing extractors.
  </p>

  <div class="figure-grid">
    <figure>
      <img src="/images/pet-waveforms.png" alt="Digital waveforms">
      <figcaption>Figure 3. Captured digital waveforms from dual-end readout sensors</figcaption>
    </figure>
    <figure>
      <img src="/images/timing-resolution-fit.png" alt="Coincidence timing resolution">
      <figcaption>Figure 4. Extracted coincidence timing resolution (CTR) distribution</figcaption>
    </figure>
  </div>

  <p>
    Timing extraction is implemented through multiple digital signal processing strategies, including:
  </p>
  <ul>
    <li><strong>Constant Fraction Discrimination (CFD):</strong> Reducing amplitude-walk by triggering at a fixed percentage of the peak.</li>
    <li><strong>Leading-Edge Triggering:</strong> Analyzing the impact of threshold levels on timing jitter.</li>
    <li><strong>Waveform Fitting:</strong> Using mathematical models to reconstruct the signal pulse and estimate the true start time.</li>
  </ul>


  <h2>My Contributions</h2>
  <ul>
  <li><strong>Data Analysis:</strong> Processed and analyzed large-scale experimental datasets to isolate signal fluctuations from electronic noise in medical imaging detectors.</li>
  <li><strong>Simulation Development:</strong> Developed Monte Carlo-based models of photon transport and detection to reproduce timing behavior and validate experimental data.</li>   
  <li><strong>Algorithm Implementation:</strong> Implemented and benchmarked digital timing extractors, including CFD and curve-fitting methods, to optimize coincidence timing resolution.</li>
  <li><strong>Performance Evaluation:</strong> Evaluated signal processing strategies to improve the timing precision of medical imaging systems, directly contributing to enhanced disease diagnosis capabilities.</li>
  </ul>

  <h2>Progress & Outlook</h2>
  <p>
    Preliminary results demonstrate that waveform-based fitting significantly outperforms traditional leading-edge methods 
    under low-photon statistics. The integration of dual-end readout information effectively corrects for the depth-of-interaction 
    (DOI) effect, further refining the timing accuracy. Future work will focus on implementing these algorithms into real-time 
    FPGA-based hardware to support the next generation of high-sensitivity clinical PET scanners.
  </p>
</section>
  </div>
</div>
</body>
</html>
