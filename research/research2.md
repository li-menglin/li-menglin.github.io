---
layout: default
title: null
permalink: /research/research2.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Non-contact Vital Sign Detection with FMCW Radar</title>
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
      Radar-based Non-contact Detection of Heart Rate and Respiration
    </h1>
    <p class="meta">
      Menglin Li · Sun Yat-sen University · Advisor: Prof. Jie Feng<br>
      May 2024 – present
    </p>

    <section class="research-body">
      <h2>Background</h2>
      <p>
  Radar-based vital sign detection has become a promising alternative to contact sensors such as ECG or PPG, offering continuous 
  monitoring without physical contact. Frequency-modulated continuous-wave (FMCW) radars, such as TI’s IWR1443BOOST, 
  can capture subtle chest wall displacements on the order of millimeters, induced by respiration and heartbeat. The 
  main challenge lies in separating weak heartbeat signals from the dominant respiratory motion and suppressing noise 
  and harmonics.
</p>
<p>
  Within this collaborative project, my responsibility was to reproduce a state-of-the-art signal-processing framework 
  reported in the literature. By carefully studying the methodology and developing MATLAB programs, I implemented the 
  complete pipeline for extracting heart rate (HR) and respiration rate (RR) from raw radar data, covering preprocessing, 
  signal enhancement, mode decomposition, and frequency estimation.
</p>

<h2>Experimental Setup</h2>
<p>
  Data acquisition was carried out with a TI IWR1443BOOST radar module. Raw ADC signals were collected and converted into 
  range–time data cubes using fast-time and slow-time FFTs. Each recording contained thousands of chirps, with multiple 
  range bins capturing reflections from the subject’s thoracic region. I was responsible for implementing the preprocessing 
  steps—DC removal, range-bin selection, and phase unwrapping—to obtain clean displacement waveforms for subsequent analysis.
</p>


      <div class="figure-grid">
        <figure>
          <img src="/images/iwr1443-dataacq.jpg" alt="IWR1443BOOST data acquisition">
          <figcaption>Figure 1. Data acquisition process using the IWR1443BOOST FMCW radar module.</figcaption>
        </figure>
      </div>

      <h2>Signal Processing Framework</h2>
      <p>
        The framework I reproduced follows the logic of the <em>heart-rate detection new framework</em> shown below. 
        It consists of range-gate selection, clutter suppression via Singular Spectrum Analysis (SSA), phase extraction 
        and unwrapping, residual enhancement using spline fitting and matched filtering, mode decomposition using 
        Variational Mode Decomposition (VMD), and final estimation through a double-layer fuzzy logic system.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/心率检测新框架.jpg" alt="Signal processing framework">
          <figcaption>Figure 2. Signal-processing framework for radar-based heart and respiration rate detection, 
          reproduced in MATLAB implementation.</figcaption>
        </figure>
      </div>

      <h2>Implementation and Results</h2>
      <p>
        Through MATLAB implementation, I reproduced the full pipeline to extract RR and HR from radar signals. The SSA step 
        effectively suppressed static clutter, while spline-based residual extraction enhanced weak cardiac components. VMD 
        enabled separation of respiratory and cardiac oscillations, and the double-layer fuzzy logic stabilized frequency 
        estimation against noise and intermodulation. 
      </p>
      <p>
        Frequency spectra were then obtained using FFT and VMD-based reconstruction, clearly showing respiration peaks around 
        0.2–0.3 Hz and heartbeat peaks around 1 Hz. These results validated the framework and confirmed that the radar system 
        could accurately recover both respiration and cardiac frequencies from non-contact measurements.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/vitalsign-spectrum.jpg" alt="Frequency spectrum of respiration and heartbeat">
          <figcaption>Figure 3. Frequency spectrum showing distinct respiration (~0.25 Hz) and heartbeat (~1 Hz) peaks, 
          extracted using the reproduced framework.</figcaption>
        </figure>
      </div>

      <h2>Conclusion & Outlook</h2>
      <p>
        In this collaborative project, my contribution centered on reproducing a published signal-processing framework for 
        radar-based vital sign detection. By implementing the full pipeline in MATLAB, I successfully extracted respiration 
        and heartbeat signals from raw FMCW radar data and verified their frequency components. These results provide a 
        solid foundation for further improvements and benchmarking.
      </p>
      <p>
        Future work will extend toward real-time implementation, robustness evaluation under non-stationary conditions, 
        and integration into broader experimental programs. Meanwhile, my postdoctoral collaborator continues to explore 
        methodological innovations and alternative processing schemes, complementing my contribution with new directions 
        for advancing radar-based biomedical sensing.
      </p>
    </section>
  </div>
</div>
</body>
</html>
