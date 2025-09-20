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
      Menglin Li · Sun Yat-sen University · Advisor: Prof. Jie Feng<br>
      November 2024 – present
    </p>

    <section class="research-body">
      <h2>Background</h2>
      <p>
        Radar-based cardiopulmonary monitoring has emerged as a promising non-contact alternative to traditional sensors such as ECG and PPG. 
        Frequency-modulated continuous-wave (FMCW) radars are capable of resolving chest wall displacements induced by respiration and heartbeat, 
        typically on the order of millimeters. The principal challenge is to isolate the weak cardiac component from the dominant respiratory motion 
        and to suppress noise and spectral leakage under realistic conditions.
      </p>
      <p>
        Within this collaborative project, I was responsible for configuring radar hardware and reproducing a state-of-the-art signal-processing 
        framework in MATLAB. My work focused on the full technical pipeline—from raw data acquisition to advanced spectral estimation—ensuring 
        accurate extraction of respiration rate (RR) and heart rate (HR) from noisy radar echoes.
      </p>

      <h2>Experimental Setup</h2>
      <p>
        Experiments were carried out with the Texas Instruments IWR1443BOOST FMCW radar platform. I configured the radar using mmWave Studio 
        and acquired raw ADC data in multi-chirp frames. An approximated Fast Fourier Transform (apFFT) was then applied to resolve range profiles 
        and identify the subject’s thoracic reflections. Subsequent preprocessing included DC removal, range-bin selection, and phase unwrapping, 
        which I implemented to prepare displacement waveforms for further cardiopulmonary analysis.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/iwr1443-dataacq.jpg" alt="IWR1443BOOST data acquisition">
          <figcaption>Figure 1. Data acquisition process using the IWR1443BOOST FMCW radar module.</figcaption>
        </figure>
      </div>

      <h2>Signal Processing Framework</h2>
      <p>
        Building on published frameworks, I designed advanced preprocessing modules including smoothing-spline fitting and matched filtering 
        to enhance weak heartbeat components. Variational Mode Extraction (VME) was then applied to decompose respiration and heartbeat oscillations, 
        providing robust separation under noisy conditions. For spectral analysis, I implemented a double Chirp-Z Transform (double-CZT), 
        which achieves high-resolution frequency estimation of both RR and HR beyond conventional FFT resolution.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/心率检测新框架.jpg" alt="Signal processing framework">
          <figcaption>Figure 2. Signal-processing framework for radar-based cardiopulmonary monitoring, reproduced in MATLAB implementation.</figcaption>
        </figure>
      </div>

      <h2>Results</h2>
      <p>
        Using the implemented framework, I successfully reproduced benchmark results reported in the literature. The pipeline reliably 
        extracted respiration peaks around 0.2–0.3 Hz and heartbeat peaks near 1 Hz, even in the presence of strong respiratory harmonics 
        and background noise. Validation experiments demonstrated that the proposed preprocessing, VME decomposition, and double-CZT 
        spectral estimation jointly improved the accuracy and robustness of radar-based vital sign detection.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/vitalsign-spectrum.jpg" alt="Frequency spectrum of respiration and heartbeat">
          <figcaption>Figure 3. Frequency spectrum showing distinct respiration (~0.25 Hz) and heartbeat (~1 Hz) peaks, 
          extracted using the reproduced radar-processing framework.</figcaption>
        </figure>
      </div>

      <h2>Conclusion & Outlook</h2>
      <p>
        In this project, I configured FMCW radar hardware, implemented advanced signal-processing algorithms, and validated a 
        non-contact cardiopulmonary monitoring framework in MATLAB. My contributions demonstrate the feasibility of extracting 
        accurate respiration and heartbeat frequencies using compact radar systems under realistic noise conditions.
      </p>
      <p>
        Moving forward, I plan to extend this framework toward real-time implementation and test its robustness in more 
        challenging scenarios, including non-stationary subjects and through-obstacle conditions. These developments will 
        further strengthen the applicability of FMCW radar technology for biomedical sensing and continuous health monitoring.
      </p>
    </section>
  </div>
</div>
</body>
</html>
