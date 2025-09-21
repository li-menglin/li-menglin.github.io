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
      <h2>Overview</h2>
      <p>
        This project applied deep generative modeling to beam-space traffic analysis in next-generation wireless systems. 
        Motivated by the challenges of modeling dynamic, high-dimensional traffic distributions in 5G/6G networks, 
        I implemented a Vector-Quantized Variational Autoencoder (VQ-VAE) to learn compact and interpretable representations 
        of beam-space traffic patterns, supporting both reconstruction and downstream prediction tasks.
      </p>

      <h2>Experimental Setup</h2>
      <p>
        The study utilized large-scale cellular network datasets containing traffic measurements across multiple beams and 
        time intervals. To ensure reproducibility, I built preprocessing pipelines including feature engineering, 
        normalization, and <em>PyTorch</em>-based data loaders for batch processing and train/test control. 
        These pipelines enabled systematic model training and evaluation.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/beam-traffic-map.png" alt="Beam-space traffic distribution">
          <figcaption>Figure 1. Example of beam-space traffic distribution extracted from cellular datasets.</figcaption>
        </figure>
      </div>

      <h2>Methods</h2>
      <p>
        The VQ-VAE framework was adapted for beam-space data: an encoder compressed traffic maps into latent vectors, 
        discretized by a learned codebook, while the decoder reconstructed the original inputs. 
        I optimized the architecture, tuned hyperparameters such as codebook size and learning rate, 
        and stabilized training. After training, the learned embeddings were analyzed using clustering 
        and quantization metrics to identify prototypical beam-space traffic modes. 
        Additionally, I reviewed spatio-temporal architectures such as Transformers and Graph Neural Networks 
        for potential integration with VQ-VAE embeddings.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/vqvae-architecture.png" alt="VQ-VAE framework">
          <figcaption>Figure 2. VQ-VAE framework for representation learning of beam-space traffic patterns.</figcaption>
        </figure>
      </div>

      <h2>My Contributions</h2>
      <ul>
        <li>Developed end-to-end ML pipelines for large-scale cellular datasets, including feature engineering, normalization, and PyTorch-based data loaders.</li>
        <li>Trained and optimized a Vector-Quantized Variational Autoencoder (VQ-VAE), refining architecture and hyperparameters to improve representation quality.</li>
        <li>Extracted and analyzed discrete latent embeddings, applying clustering and quantization analyses to identify prototypical traffic patterns.</li>
        <li>Surveyed spatio-temporal ML models (Transformers, Graph Neural Networks) and evaluated their applicability to beam-space traffic prediction and scheduling.</li>
      </ul>

      <h2>Results</h2>
      <p>
        The optimized VQ-VAE compressed complex traffic maps into a compact codebook of interpretable patterns, 
        ranging from localized hotspots to multi-beam activity. Reconstruction error remained low, validating model performance. 
        Clustering metrics confirmed embedding stability, while quantization analysis showed consistent capture of 
        prototypical traffic modes. These results demonstrate VQ-VAE as a robust framework for representation learning 
        in beam-space traffic analysis.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/traffic-embeddings.png" alt="Discrete embeddings of traffic patterns">
          <figcaption>Figure 3. Visualization of discrete latent embeddings representing prototypical beam-space traffic patterns.</figcaption>
        </figure>
      </div>

      <h2>Conclusion & Outlook</h2>
      <p>
        This work established a reproducible pipeline for applying VQ-VAE to cellular traffic analysis, 
        combining robust preprocessing, optimized model design, and interpretable embedding analysis. 
        Looking ahead, integrating VQ-VAE embeddings with temporal models such as Transformers or Graph Neural Networks 
        could enable real-time traffic prediction and adaptive scheduling in 5G/6G networks.
      </p>
    </section>
  </div>
</div>
</body>
</html>
