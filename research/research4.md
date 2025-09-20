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
        In cellular networks, base stations employ beamforming to concentrate radio energy in specific spatial directions, 
        thereby improving link quality and reducing interference. The resulting beam-space traffic distribution evolves across 
        both space and time, reflecting heterogeneous user locations and service demand. Accurate modelling of beam-space traffic 
        patterns is critical for resource allocation, scheduling, and adaptive beam management in multi-beam wireless systems.
      </p>
      <p>
        Traditional statistical approaches often struggle with the high dimensionality and temporal variability of traffic measurements. 
        To address these challenges, we explored deep generative models capable of compressing high-dimensional traffic maps into 
        discrete and interpretable representations. In particular, the Vector-Quantized Variational Autoencoder (VQ-VAE) provides a 
        compact codebook of prototypical traffic patterns, enabling both effective reconstruction and interpretable downstream analysis.
      </p>

      <h2>Experimental Setup</h2>
      <p>
        Large-scale cellular network datasets containing per-beam traffic measurements were processed through a standardized 
        pipeline. I implemented feature engineering and normalization steps to stabilize training, and constructed 
        <em>PyTorch</em>-based data loaders to support batching, shuffling, and reproducible train/test splits. This 
        ensured high-quality inputs for subsequent representation learning experiments.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/beam-space-map.jpg" alt="Beam-space traffic distribution">
          <figcaption>Figure 1. Example beam-space traffic distribution extracted from a cellular network dataset.</figcaption>
        </figure>
      </div>

      <h2>Methods</h2>
      <p>
        At the core of this project, I implemented and optimized a VQ-VAE tailored to beam-space traffic data. The encoder maps 
        traffic snapshots into latent vectors, which are then discretized through a learned codebook. Each codebook entry 
        corresponds to a prototypical traffic pattern, and the decoder reconstructs the original distribution from these discrete embeddings.
      </p>
      <p>
        To improve model stability and interpretability, I refined the network architecture, tuned hyperparameters such as codebook 
        size and learning rate, and introduced smoothing-spline fitting and matched filtering modules to enhance robustness under noisy 
        conditions. In addition, I applied <em>Variational Mode Extraction (VME)</em> to further decompose traffic dynamics and 
        reduce interference between dominant and residual components. For spectral characterization, I implemented a double 
        Chirp-Z Transform (double-CZT), enabling high-resolution analysis of periodic fluctuations in traffic loads.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/vqvae-architecture.jpg" alt="VQ-VAE architecture">
          <figcaption>Figure 2. Schematic of the VQ-VAE framework for beam-space traffic representation learning.</figcaption>
        </figure>
      </div>

      <h2>Results</h2>
      <p>
        Training the VQ-VAE on large-scale beam-space traffic datasets produced a compact dictionary of discrete embeddings. 
        Each codebook entry was interpretable as a prototypical traffic pattern, such as localized hotspots or broad 
        multi-beam activity. Clustering analysis confirmed the consistency of these assignments, while quantization error 
        remained within acceptable bounds. The double-CZT spectral analysis provided sharper peaks and improved resolution 
        compared to conventional FFTs, allowing clearer identification of periodic traffic fluctuations.
      </p>
      <p>
        Beyond reproducing benchmark results, my implementation demonstrated enhanced stability and improved interpretability of 
        learned representations. These results establish a foundation for extending the framework toward temporal prediction 
        tasks using advanced sequence models.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/embedding-clusters.jpg" alt="Discrete latent embeddings">
          <figcaption>Figure 3. Visualization of discrete latent embeddings learned by the VQ-VAE, representing prototypical traffic patterns.</figcaption>
        </figure>
      </div>

      <h2>Conclusion & Outlook</h2>
      <p>
        This project demonstrated that VQ-VAE can effectively compress complex beam-space traffic into discrete, interpretable 
        prototypes while maintaining reconstruction accuracy. My contributions spanned data preprocessing, VQ-VAE implementation 
        and optimization, codebook analysis, and high-resolution spectral estimation. The resulting framework provides both a 
        methodological foundation and interpretable outputs that are valuable for network analysis and resource management.
      </p>
      <p>
        Looking ahead, the discrete embeddings obtained here can be integrated with temporal models such as Transformers and 
        Graph Neural Networks, enabling spatio-temporal prediction of traffic dynamics. Such extensions would advance 
        adaptive scheduling strategies and real-time traffic management in future 5G and 6G networks.
      </p>
    </section>
  </div>
</div>
</body>
</html>
