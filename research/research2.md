---
layout: default
title: null
permalink: /research/research2.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>FMCW Millimeter-Wave Radar for Non-Contact Cardiopulmonary Monitoring</title>
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
      FMCW Millimeter-Wave Radar for Non-Contact Cardiopulmonary Monitoring
    </h1>
    <p class="meta">
      Menglin Li · Sun Yat-sen University · Advisor: Prof. Chengpei Tang<br>
      November 2024 – present
    </p>

    <section class="research-body">
      <h2>Overview</h2>
      <p>
        Frequency-Modulated Continuous-Wave (FMCW) radar provides a compact, non-contact solution for monitoring cardiopulmonary activity by resolving chest wall 
        displacements at millimeter precision. The central challenge is <strong>separating weak heartbeat signals</strong> from dominant respiratory motion while 
        suppressing noise and harmonics under realistic conditions. This project develops a full radar–signal processing pipeline to enable accurate extraction of 
        respiration rate (RR) and heart rate (HR).
      </p>
      
      <div class="research-figure">
        <figure>
          <img src="/images/framework.png" alt="cardiopulmonary monitor">
          <figcaption>Figure 1. cardiopulmonary monitor framework</figcaption>
        </figure>
      </div>
      
      <h2>Experimental Setup</h2>
      <p>
        I configured the <strong>Texas Instruments IWR1443BOOST FMCW radar</strong> together with the <strong>DCA1000EVM data capture board</strong> via mmWave 
        Studio to acquire raw ADC echoes in multi-chirp frames. Range profiles were resolved using an <strong>approximated FFT (apFFT)</strong>, followed by DC 
        removal, range-bin selection, and phase unwrapping to obtain thoracic displacement waveforms.
      </p>

      <div class="research-figure">
        <figure>
          <img src="/images/iwr1443data.png" alt="IWR1443BOOST data acquisition">
          <figcaption>Figure 2. Data acquisition process with the IWR1443BOOST FMCW radar module</figcaption>
        </figure>
      </div>

      <h2>Signal Processing Framework</h2>
      <p>
        To extract respiration and heartbeat components, I designed a multi-stage pipeline in MATLAB:
      </p>
      <ul>
        <li><strong>Preprocessing:</strong> Applied smoothing-spline fitting to capture and remove slow respiratory trends, 
        and used matched filtering to enhance subtle heartbeat oscillations.</li>
        <li><strong>Variational Mode Extraction (VME):</strong> Decomposed displacement signals into intrinsic modes, 
        isolating respiration (~0.2–0.3 Hz) from heartbeat (~1 Hz).</li>
        <li><strong>Double Chirp-Z Transform (double-CZT):</strong> Provided high-resolution spectral estimation, 
        surpassing conventional FFT by yielding sharper, better-separated peaks.</li>
      </ul>

      <p><strong>Key formulations:</strong></p>
      <p>
        Variational Mode Extraction (VME) minimizes the following cost functional:
      </p>
      <p>
        \[
        \min_{\{u_k,\omega_k\}} \sum_{k=1}^K \left\| \partial_t \left[ \left( \delta(t) + \frac{j}{\pi t} \right) * u_k(t) \cdot e^{-j\omega_k t} \right] \right\|_2^2
        \]
        where \(u_k(t)\) are intrinsic modes and \(\omega_k\) their center frequencies.
      </p>
      <p>
        The Chirp-Z Transform (CZT) maps a sequence \(x[n]\) to an arbitrary contour in the z-plane:
      </p>
      <p>
        \[
        X_k = \sum_{n=0}^{N-1} x[n] \, z_k^{-n}, \quad z_k = A W^{-k}, \quad k=0,\ldots,M-1
        \]
        where \(A\) and \(W\) control the start point and frequency resolution. 
        A double-CZT applies two successive zoomed analyses for enhanced resolution 
        around respiratory and cardiac bands.
      </p>

      <div class="research-figure">
        <figure>
          <img src="/images/processframework.png" alt="Signal processing framework">
          <figcaption>Figure 3. MATLAB-implemented pipeline for respiration and heartbeat extraction</figcaption>
        </figure>
      </div>

      <h2>My Contributions</h2>
      <ul>
        <li>Configured the IWR1443BOOST FMCW radar with DCA1000EVM and mmWave Studio to acquire raw ADC data for non-contact cardiopulmonary monitoring.</li>
        <li>Implemented <strong>apFFT</strong>-based range profiling to resolve thoracic reflections from radar chirps.</li>
        <li>Developed advanced preprocessing modules including <strong>smoothing-spline fitting</strong> and <strong>matched filtering</strong> to enhance weak 
        heartbeat oscillations.</li>
        <li>Applied <strong>Variational Mode Extraction (VME)</strong> for robust decomposition of respiratory and cardiac components.</li>
        <li>Performed <strong>double-CZT spectral estimation</strong> for high-resolution frequency analysis, enabling precise detection of RR and HR.</li>
        <li>Reproduced and validated published benchmark results in MATLAB, confirming the accuracy and robustness of the framework.</li>
      </ul>

      <h2>Progress & Outlook</h2>
      <p>
        The developed pipeline reliably extracted respiration (~0.25 Hz) and heartbeat (~1 Hz) peaks even under low signal-to-noise conditions. Compared with 
        conventional FFT methods, the double-CZT produced <strong>sharper and better-isolated peaks</strong>, enabling more stable heart-rate tracking across 
        datasets. My contributions spanned radar configuration, advanced preprocessing, VME decomposition, and double-CZT spectral estimation. Looking ahead, I 
        aim to extend the framework toward <strong>real-time implementation</strong> and validate it under more challenging scenarios such as subject motion and 
        through-obstacle sensing, thereby strengthening the biomedical applicability of FMCW radar technology.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/vitalsign-spectrum.png" alt="Frequency spectrum of respiration and heartbeat">
          <figcaption>Figure 4. Frequency spectrum with distinct respiration and heartbeat peaks extracted from radar echoes.</figcaption>
        </figure>
      </div>
    </section>
  </div>
</div>
</body>
</html>
