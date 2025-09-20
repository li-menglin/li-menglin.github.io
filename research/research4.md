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
        Cellular networks partition geographic regions into cells, each served by a base station. 
        With the adoption of beamforming in 5G and emerging 6G systems, base stations direct radio energy into specific 
        spatial beams to improve signal quality and reduce interference. The distribution of traffic across beams 
        evolves dynamically with user movement and service demand, making accurate modeling of beam-space traffic 
        patterns crucial for efficient scheduling and adaptive resource allocation.
      </p>
      <p>
        Traditional statistical methods are limited in capturing the high-dimensional, noisy, and time-varying 
        nature of real-world traffic measurements. To overcome these challenges, this project applied deep generative 
        modeling techniques, particularly the Vector-Quantized Variational Autoencoder (VQ-VAE). VQ-VAE compresses 
        complex traffic maps into a discrete codebook of prototypical patterns, enabling both accurate reconstruction 
        and interpretable analysis of beam-space traffic distributions.
      </p>

      <h2>Experimental Setup</h2>
      <p>
        Large-scale cellular network datasets were provided by the research team, consisting of traffic measurements 
        across multiple beams and time intervals. To prepare the data, I developed end-to-end preprocessing pipelines 
        including feature engineering, normalization, and construction of <em>PyTorch</em>-based data loaders. 
        These pipelines ensured reproducibility and efficient model training, supporting both batch processing and 
        controlled train/test splits.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/beam-traffic-map.png" alt="Beam-space traffic distribution">
          <figcaption>Figure 1. Example of beam-space traffic distribution extracted from cellular network datasets.</figcaption>
        </figure>
      </div>

      <h2>Methods</h2>
      <p>
        The central component of this project was the design and optimization of a VQ-VAE tailored to beam-space data. 
        The encoder network compresses high-dimensional traffic maps into latent vectors, which are discretized via 
        a learned codebook. Each codebook entry corresponds to a prototypical traffic distribution, and the decoder 
        reconstructs the original input from these discrete embeddings.
      </p>
      <p>
        My contributions focused on implementing the model in PyTorch, refining its architecture, tuning hyperparameters 
        such as codebook size and learning rate, and improving training stability. After training, I extracted the learned 
        discrete embeddings and conducted clustering and quantization analyses to identify prototypical beam-space traffic 
        patterns. Finally, I surveyed advanced temporal modeling paradigms, including Transformers and Graph Neural Networks, 
        assessing their potential integration with VQ-VAE embeddings for spatio-temporal traffic prediction.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/vqvae-architecture.png" alt="VQ-VAE framework">
          <figcaption>Figure 2. Schematic of the VQ-VAE framework for beam-space traffic representation learning.</figcaption>
        </figure>
      </div>

      <h2>Results</h2>
      <p>
        The trained VQ-VAE successfully compressed complex traffic distributions into a compact and interpretable codebook. 
        Each codebook entry corresponded to a distinct spatial traffic mode, ranging from localized hotspots to more 
        distributed multi-beam activity. Reconstruction error remained low, validating the effectiveness of the model. 
        Clustering metrics confirmed the stability of embeddings, while quantization analysis demonstrated that 
        prototypical traffic patterns were consistently captured.
      </p>
      <p>
        These results establish the VQ-VAE framework as a robust tool for analyzing high-dimensional traffic data. 
        Beyond reconstruction, the learned discrete embeddings provide interpretable abstractions that can support 
        downstream tasks in traffic prediction and adaptive scheduling.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/traffic-embeddings.png" alt="Discrete embeddings of traffic patterns">
          <figcaption>Figure 3. Visualization of discrete latent embeddings representing prototypical beam-space traffic patterns.</figcaption>
        </figure>
      </div>

      <h2>Conclusion & Outlook</h2>
      <p>
        This project demonstrated the utility of VQ-VAE for beam-space traffic analysis, contributing reproducible 
        data pipelines, an optimized implementation of the model, and a systematic analysis of learned discrete 
        embeddings. My work emphasized both methodological rigor and interpretability of results.
      </p>
      <p>
        Looking ahead, integrating VQ-VAE embeddings with spatio-temporal models such as Transformers or Graph Neural Networks 
        offers a promising pathway for traffic prediction and real-time adaptive scheduling in next-generation wireless systems. 
        These extensions will further bridge the gap between learned representations and practical network management strategies.
      </p>
    </section>
  </div>
</div>
</body>
</html>
