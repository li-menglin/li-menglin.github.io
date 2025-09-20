---
layout: default
title: null
permalink: /research/research4.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Machine Learning for Beam-Space Traffic Pattern Analysis</title>
  <link rel="stylesheet" href="research.css">
</head>
<body>
<div id="research-detail">
  <div class="content-card">
    <h1 class="page__title">
      Machine Learning for Beam-Space Traffic Pattern Analysis
    </h1>
    <p class="meta">
      Menglin Li · The Chinese University of Hong Kong · Advisor: Prof. Qingjiang Shi<br>
      Research Assistant · Oct 2024 – Jun 2025
    </p>

    <section class="research-body">
      <h2>Background</h2>
      <p>
        Modern 5G and emerging 6G networks rely on beamforming to direct radio energy in spatially selective directions. 
        The resulting beam-space traffic distribution reflects dynamic user locations and temporal service demand, making 
        accurate prediction critical for resource scheduling and adaptive beam management. However, the high dimensionality 
        and variability of real-world traffic pose significant challenges to traditional modeling approaches.
      </p>
      <p>
        Deep generative models, such as the Vector-Quantized Variational Autoencoder (VQ-VAE), provide a powerful framework 
        for compressing complex spatial distributions into discrete and interpretable representations. By learning a finite 
        codebook of prototypical traffic patterns, VQ-VAE enables both efficient reconstruction and improved interpretability.
      </p>

      <h2>Experimental Setup</h2>
      <p>
        Large-scale cellular network datasets were processed through a standardized preprocessing pipeline, including 
        feature engineering, normalization, and construction of <em>PyTorch</em>-based data loaders. This ensured 
        reproducibility and high-quality inputs for downstream model training. The datasets captured traffic measurements 
        across multiple beams and time intervals, providing a rich basis for representation learning.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/beam-traffic-map.png" alt="Beam-space traffic distribution">
          <figcaption>Figure 1. Example beam-space traffic distribution extracted from cellular network datasets.</figcaption>
        </figure>
      </div>

      <h2>Methods</h2>
      <p>
        Building on published frameworks, I designed advanced preprocessing modules including smoothing-spline fitting 
        and matched filtering to enhance weak and noisy components. The VQ-VAE was then implemented and optimized to encode 
        traffic maps into discrete embeddings. Network architecture refinements and hyperparameter tuning ensured stable 
        convergence and robust reconstruction performance.
      </p>
      <p>
        For analysis, I examined the learned codebook embeddings, each representing a prototypical traffic pattern. 
        Clustering metrics and quantization analysis confirmed their interpretability and stability. In addition, a 
        double Chirp-Z Transform (double-CZT) was applied for high-resolution spectral estimation, allowing precise 
        identification of periodic fluctuations in traffic demand beyond the resolution of conventional FFTs.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/vqvae-traffic.png" alt="VQ-VAE architecture for traffic modeling">
          <figcaption>Figure 2. Architecture of the VQ-VAE model applied to beam-space traffic data.</figcaption>
        </figure>
      </div>

      <h2>Results</h2>
      <p>
        The trained VQ-VAE successfully compressed beam-space traffic into a compact codebook of discrete embeddings, 
        each corresponding to a prototypical spatial distribution such as localized hotspots or distributed multi-beam 
        activity. Reconstruction error remained low, and quantization analysis confirmed the consistency of assignments.
      </p>
      <p>
        The double-CZT spectral estimation revealed sharper peaks than conventional FFTs, enabling more accurate identification 
        of periodic traffic fluctuations. These results validated both the accuracy and robustness of the implemented framework 
        and demonstrated its applicability to practical network scenarios.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/traffic-embeddings.png" alt="Discrete latent embeddings">
          <figcaption>Figure 3. Visualization of discrete embeddings representing prototypical traffic patterns.</figcaption>
        </figure>
      </div>

      <h2>Conclusion & Outlook</h2>
      <p>
        This project demonstrated that VQ-VAE can effectively learn discrete and interpretable representations of beam-space 
        traffic while preserving reconstruction accuracy. My contributions encompassed data preprocessing, VQ-VAE implementation, 
        optimization of signal-processing modules, and high-resolution spectral analysis.
      </p>
      <p>
        Future extensions include combining these embeddings with temporal models such as Transformers or Graph Neural Networks 
        to achieve spatio-temporal traffic prediction. Such integration would enhance adaptive scheduling and improve resource 
        efficiency in next-generation wireless networks.
      </p>
    </section>
  </div>
</div>
</body>
</html>
