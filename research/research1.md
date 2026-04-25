---
layout: default
title: null
permalink: /research/research1.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Timing Reconstruction in PMT-Based PET Detectors</title>
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
      Timing Reconstruction in PMT-Based PET Detectors
    </h1>

    <p class="meta">
      Bachelor Thesis Project · Sun Yat-sen University · Advisor: Prof. Jie Feng<br>
      Nov. 2025 – May 2026
    </p>

<section class="research-body">

  <h2>Overview</h2>
  <p>
    Positron Emission Tomography (PET) is an important imaging technique in biomedical research and clinical diagnostics. 
    Its performance is closely related to timing accuracy, which affects image quality and signal localization. 
    This project focuses on waveform-level signal analysis in photomultiplier tube (PMT)-based detector systems, 
    with the goal of improving timing precision through modeling and signal processing.
  </p>

  <p>
    Rather than modifying hardware, the study explores how digital signal processing and statistical modeling 
    can enhance timing estimation under realistic noise conditions. The work lies at the intersection of 
    experimental physics, signal processing, and data analysis.
  </p>


  <h2>Detector and Signal Characteristics</h2>
  <p>
    The detector system consists of scintillation materials coupled with photomultiplier tubes (PMTs). 
    When radiation interacts with the scintillator, optical photons are generated and collected by the PMT, 
    producing electrical pulses. The temporal shape of these pulses contains information about photon arrival statistics, 
    electronic response, and noise.
  </p>

  <div class="figure-grid">
    <figure>
      <img src="/images/pmt-structure.png" alt="PMT structure">
      <figcaption>Figure 1. Basic structure and signal amplification process of a photomultiplier tube (PMT)</figcaption>
    </figure>
    <figure>
      <img src="/images/photon-collection-distribution.png" alt="Photon collection distribution">
      <figcaption>Figure 2. Distribution of photon collection and its impact on signal formation</figcaption>
    </figure>
  </div>


  <h2>Methodology</h2>
  <p>
    The timing resolution depends on both signal slope and noise level. A simplified relationship can be expressed as:
  </p>

  <p class="equation">
    \( \sigma_{t} \approx \frac{\sigma_{noise}}{\left| dV/dt \right|} \)
  </p>

  <p>
    Based on this principle, the project models detector waveforms to separate different contributing factors, 
    including photon arrival fluctuations and electronic noise. This provides a framework for evaluating 
    timing extraction methods under controlled conditions.
  </p>

  <p>
    Several signal processing techniques are implemented and compared:
  </p>

  <ul>
    <li><strong>Constant Fraction Discrimination (CFD):</strong> Reduces amplitude-dependent timing variation.</li>
    <li><strong>Leading-Edge Detection:</strong> Provides a simple baseline for timing extraction.</li>
    <li><strong>Waveform Fitting:</strong> Uses parametric models to estimate the true signal onset more accurately.</li>
  </ul>


  <h2>My Contributions</h2>
  <ul>
    <li><strong>Data Analysis:</strong> Processed experimental waveform data to study signal variability under realistic conditions.</li>
    <li><strong>Modeling:</strong> Built simplified computational models to reproduce signal formation and noise behavior.</li>
    <li><strong>Algorithm Development:</strong> Implemented and compared multiple timing extraction methods.</li>
    <li><strong>Evaluation:</strong> Analyzed how different processing strategies influence timing precision and system performance.</li>
  </ul>


  <h2>Results and Discussion</h2>
  <p>
    The results show that methods incorporating waveform shape information provide improved robustness compared to 
    simple threshold-based approaches, especially in low signal-to-noise scenarios. This highlights the importance 
    of combining physical modeling with signal processing techniques in detector optimization.
  </p>


  <h2>Outlook</h2>
  <p>
    Future work will focus on improving computational efficiency and exploring real-time implementation possibilities. 
    The general approach developed in this project can also be extended to other sensing systems that rely on precise 
    timing extraction from noisy signals.
  </p>

</section>

  </div>
</div>
</body>
</html>
