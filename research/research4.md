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
      Research Assistant · The Chinese University of Hong Kong, Shenzhen · Advisor: Prof. Qingjiang Shi<br>
      Oct. 2024 – Jun. 2025
    </p>

    <section class="research-body">
      <h2>Overview</h2>
      <p>
        This project applied deep generative modeling to analyze beam-space traffic patterns in next-generation 
        cellular networks. I implemented a Vector-Quantized Variational Autoencoder (VQ-VAE) to learn compact and 
        interpretable representations of high-dimensional traffic distributions, enabling both accurate reconstruction 
        and generation of prototypical traffic patterns for downstream prediction and scheduling tasks.
      </p>

      <h2>Experimental Setup</h2>
      <p>
        Large-scale cellular network datasets containing traffic measurements across multiple beams and time intervals 
        were used. I developed end-to-end preprocessing pipelines including feature engineering, normalization, 
        and <em>PyTorch</em>-based data loaders, ensuring reproducibility and controlled train/test splits for model evaluation.
      </p>

      <figure class="research-figure">
          <img src="/images/beam-traffic-map.png" alt="Beam-space traffic distribution">
          <figcaption>Figure 1. Example of beam-space traffic distribution extracted from cellular datasets</figcaption>
      </figure>

      <h2>Methods</h2>
      <p>
        The VQ-VAE framework was adapted for beam-space data: the encoder mapped traffic maps into latent vectors, 
        discretized via a learned codebook, while the decoder reconstructed the original input. I refined network 
        architecture, tuned hyperparameters such as codebook size and learning rate, and stabilized training. 
        Learned embeddings were analyzed with clustering and quantization metrics to identify prototypical traffic modes. 
        I also surveyed spatio-temporal architectures, including Transformers and Graph Neural Networks, for potential integration 
        with VQ-VAE embeddings.
      </p>

      <figure class="research-figure">
          <img src="/images/vqvae-architecture.png" alt="VQ-VAE framework">
          <figcaption>Figure 2. VQ-VAE framework for representation learning of beam-space traffic patterns</figcaption>
      </figure>

      <h2>My Contributions</h2>
      <ul>
        <li>Developed end-to-end ML pipelines for large-scale cellular datasets, including feature engineering, normalization, and PyTorch-based data loaders for reproducible model training and evaluation.</li>
        <li>Trained and optimized a Vector-Quantized Variational Autoencoder (VQ-VAE), refining architecture and hyperparameters to improve representation quality and training stability.</li>
        <li>Extracted and analyzed discrete latent embeddings, applying clustering and quantization analyses to identify prototypical traffic patterns and enhance interpretability.</li>
        <li>Surveyed spatio-temporal ML models (Transformers, Graph Neural Networks) and evaluated their applicability to beam-space traffic prediction and adaptive scheduling.</li>
      </ul>

      <h2>Results & Outlook</h2>
      <p>
        The optimized VQ-VAE compressed complex traffic maps into a compact, interpretable codebook, capturing patterns 
        ranging from localized hotspots to multi-beam activity. Reconstruction errors were low, confirming model effectiveness, 
        while clustering and quantization analyses verified the stability and consistency of learned patterns. 
        This work establishes a reproducible framework for beam-space traffic analysis, with future extensions integrating 
        VQ-VAE embeddings with temporal models to enable real-time prediction and adaptive scheduling in 5G/6G networks.
      </p>

    </section>
  </div>
</div>
</body>
</html>
