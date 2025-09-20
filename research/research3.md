---
layout: default
title: null
permalink: /research/research3.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Analysis of Long-Lived Particle Properties with Multiple Detectors</title>
  <link rel="stylesheet" href="research.css">
</head>
<body>
<div id="research-detail">
  <div class="content-card">
    <h1 class="page__title">
      Analysis of Long-Lived Particle Properties with Multiple Detectors
    </h1>
    <p class="meta">
      Menglin Li · Sun Yat-sen University · Advisor: Prof. Wei Su<br>
      Research Assistant · Sep 2023 – Sep 2024
    </p>

    <section class="research-body">
      <h2>Background</h2>
      <p>
        Long-lived particles (LLPs) are predicted in a broad range of beyond the Standard Model (BSM) scenarios, including 
        hidden-sector dark photons and axion-like particles (ALPs). Their macroscopic decay lengths make them particularly 
        challenging to probe with conventional detectors optimized for promptly decaying particles. To address this gap, 
        dedicated far detectors have been proposed at the LHC, such as CODEX-b, designed to extend sensitivity to lifetimes 
        inaccessible to the main detectors.
      </p>
      <p>
        This project investigated the phenomenology of LLPs by combining theoretical review, event generation, and detector 
        performance simulations, with an emphasis on evaluating the discovery potential of CODEX-b relative to existing 
        experiments.
      </p>

      <h2>Experimental Setup</h2>
      <p>
        We first examined the methodology and exclusion limits of the CHARM fixed-target experiment, where 400 GeV 
        proton–copper collisions constrained neutral LLPs. These results provided a baseline for comparison with modern 
        collider proposals. For collider-scale studies, proton–proton interactions at LHC energies were simulated with 
        <em>Pythia8</em>, generating LLP kinematic spectra and decay-length distributions under benchmark BSM models.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/llp-charm.png" alt="CHARM fixed-target experiment">
          <figcaption>Figure 1. Schematic of the CHARM fixed-target experiment used as a benchmark for LLP constraints.</figcaption>
        </figure>
      </div>

      <h2>Methods</h2>
      <p>
        Detector acceptance studies focused on the CODEX-b proposal: a 10×10×10 m³ decay volume positioned near LHCb with 
        significant shielding from the primary collision point. I modeled the fiducial geometry and applied kinematic cuts 
        to compute the probability of LLP decays within the active volume. Monte Carlo methods were used to propagate LLPs 
        from the interaction point, sampling decay vertices according to their lifetimes.
      </p>
      <p>
        For sensitivity projections, spatial decay distributions were combined with detector response simulations 
        (based on Geant4) to derive expected signal yields. Exclusion curves were produced for models including dark photons 
        and ALPs, mapping out CODEX-b’s potential reach relative to past experiments.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/codexb-geometry.png" alt="CODEX-b detector geometry">
          <figcaption>Figure 2. Proposed geometry of the CODEX-b far detector at LHCb.</figcaption>
        </figure>
      </div>

      <h2>Results</h2>
      <p>
        Simulations confirmed that CODEX-b provides unique coverage in the parameter space of LLP mass versus lifetime, 
        particularly for intermediate lifetimes where sensitivity of both prompt and beam-dump experiments is limited. 
        Benchmark results reproduced published CHARM bounds, validating the simulation chain. For dark photons, CODEX-b 
        extends sensitivity well beyond previous exclusions in the MeV–GeV mass range, while ALP scenarios also show 
        complementary reach.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/llp-sensitivity.png" alt="Sensitivity curves for LLP models">
          <figcaption>Figure 3. Sensitivity curves for dark photons and ALPs, illustrating CODEX-b’s complementary reach.</figcaption>
        </figure>
      </div>

      <h2>Conclusion & Outlook</h2>
      <p>
        This project established a comprehensive pipeline for studying LLP phenomenology, combining event generation, 
        decay kinematics, and detector acceptance studies. By reproducing CHARM bounds and extending to CODEX-b projections, 
        we demonstrated the ability of far detectors to probe unexplored regions of LLP parameter space.
      </p>
      <p>
        Future work includes integrating more realistic background models and expanding to additional BSM scenarios. The 
        methodologies developed here provide a strong foundation for evaluating the physics case of proposed LLP detectors.
      </p>
    </section>
  </div>
</div>
</body>
</html>
