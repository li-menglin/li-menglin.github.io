---
layout: default
title: null
permalink: /research/research2.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Experimental Research on PMT-Based Signal Detection Systems</title>
  <link rel="stylesheet" href="research.css">
</head>

<body>
<div id="research-detail">
  <div class="content-card">

    <h1 class="page__title">
      Experimental Research on PMT-Based Signal Detection Systems
    </h1>

    <p class="meta">
      Research Assistant / Project Lead · Sun Yat-sen University · Advisor: Prof. Jie Feng<br>
      Oct. 2024 – Nov. 2025
    </p>

    <section class="research-body">

      <h2>Overview</h2>
      <p>
        This project focuses on the design and optimization of a photomultiplier tube (PMT)-based signal detection platform. 
        The system is developed to study low-intensity signal acquisition and processing under realistic noise conditions. 
        Emphasis is placed on improving signal stability, calibration accuracy, and robustness of the electronic readout chain.
      </p>

      <p>
        The work combines experimental instrumentation with computational modeling, aiming to better understand how 
        detector configuration and signal processing strategies influence measurement reliability in sensing systems.
      </p>


      <h2>Experimental Setup</h2>
      <p>
        The platform consists of scintillation materials coupled with PMTs, forming a vertically aligned detection structure. 
        Coincidence-based triggering is applied to suppress noise and improve signal selectivity. The readout chain includes 
        amplification modules, signal discrimination units, and a digital acquisition system for spectral analysis.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/research2setup.png" alt="Experimental setup">
          <figcaption>Figure 1. Experimental setup of the PMT-based detection system</figcaption>
        </figure>
        <figure>
          <img src="/images/platform.png" alt="System architecture">
          <figcaption>Figure 2. Schematic architecture of the signal acquisition and processing chain</figcaption>
        </figure>
      </div>


      <h2>Methodology</h2>
      <p>
        Signal formation in the detector is influenced by statistical fluctuations and electronic noise. 
        To better understand these effects, computational models were developed to reproduce signal distributions 
        and estimate baseline response characteristics.
      </p>

      <p>
        Data analysis focuses on spectral consistency, signal stability, and noise suppression. 
        Calibration procedures are applied to align digital readout channels with reference signal levels, 
        ensuring reliable comparison across different operating conditions.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/spectrum.png" alt="Signal spectrum">
          <figcaption>Figure 3. Example of measured signal spectrum under calibrated conditions</figcaption>
        </figure>
      </div>


      <h2>My Contributions</h2>
      <ul>
        <li><strong>System Development:</strong> Designed and assembled a PMT-based detection platform with integrated signal acquisition and processing modules.</li>
        <li><strong>Signal Processing:</strong> Optimized amplification, thresholding, and coincidence logic to improve signal quality and reduce noise.</li>
        <li><strong>Modeling:</strong> Developed Python-based simulations to reproduce signal distributions and support system calibration.</li>
        <li><strong>Performance Evaluation:</strong> Conducted measurements across different conditions to validate system stability and consistency.</li>
      </ul>


      <h2>Results and Discussion</h2>
      <p>
        The system demonstrates stable signal acquisition performance with improved noise suppression through coincidence-based processing. 
        Experimental results are consistent with modeled expectations, indicating that the platform can reliably capture 
        low-intensity signals under varying conditions.
      </p>


      <h2>Outlook</h2>
      <p>
        Future work will focus on improving system integration and exploring more efficient signal processing methods. 
        The framework developed in this project can be extended to a wide range of sensing applications that require 
        precise signal detection and analysis.
      </p>

    </section>
  </div>
</div>
</body>
</html>
