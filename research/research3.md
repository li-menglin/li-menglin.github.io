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
      <h2>Overview</h2>
      <p>
        This project focused on the phenomenology of long-lived particles (LLPs), motivated by beyond the Standard Model scenarios 
        such as hidden-sector dark photons and axion-like particles (ALPs). I established a full simulation pipeline—from event 
        generation to detector acceptance studies—to evaluate the discovery potential of the proposed CODEX-b far detector at the LHC 
        and benchmarked results against past experiments.
      </p>

      <h2>Experimental Setup</h2>
      <p>
        As a baseline, I studied the CHARM fixed-target experiment (400 GeV proton–copper collisions), which placed exclusion limits 
        on neutral LLPs. For collider-scale studies, proton–proton interactions at LHC energies were generated using <em>Pythia8</em>, 
        producing LLP spectra and decay-length distributions under benchmark BSM models.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/llp-charm.png" alt="CHARM fixed-target experiment">
          <figcaption>Figure 1. CHARM fixed-target experiment, used as a benchmark for LLP constraints.</figcaption>
        </figure>
      </div>

      <h2>Methods</h2>
      <p>
        Detector acceptance studies targeted the CODEX-b proposal: a 10×10×10 m³ decay volume near LHCb, shielded from the interaction 
        point. I modeled its fiducial geometry and applied kinematic cuts to compute the probability of LLP decays inside the active 
        region. Monte Carlo propagation sampled decay vertices according to LLP lifetimes, while Geant4-based response simulations 
        enabled signal yield projections. Sensitivity curves were then derived for dark photons and ALPs.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/codexb-geometry.png" alt="CODEX-b detector geometry">
          <figcaption>Figure 2. Geometry of the proposed CODEX-b far detector at LHCb.</figcaption>
        </figure>
      </div>

      <h2>My Contributions</h2>
      <ul>
        <li>Reviewed the CHARM fixed-target experiment, analyzing methodology and exclusion bounds on LLPs as a benchmark for modern studies.</li>
        <li>Simulated proton–proton collisions at LHC energies using <em>Pythia8</em>, generating LLP kinematics and decay distributions under BSM models.</li>
        <li>Investigated CODEX-b’s geometry and shielding, assessing acceptance for LLP decays inside the fiducial volume.</li>
        <li>Applied Monte Carlo techniques and collaborated with colleagues using Geant4 to derive sensitivity curves for dark photons and ALPs, demonstrating CODEX-b’s complementary reach.</li>
      </ul>

      <h2>Results</h2>
      <p>
        Simulations reproduced CHARM exclusion bounds, validating the pipeline. CODEX-b showed unique coverage in mass–lifetime 
        parameter space, particularly for intermediate lifetimes where both prompt and beam-dump experiments lack sensitivity. 
        Dark photon sensitivity extended well beyond previous limits in the MeV–GeV range, and ALPs demonstrated complementary reach.
      </p>

      <div class="figure-grid">
        <figure>
          <img src="/images/llp-sensitivity.png" alt="Sensitivity curves for LLP models">
          <figcaption>Figure 3. Sensitivity curves for dark photons and ALPs, illustrating CODEX-b’s extended reach.</figcaption>
        </figure>
      </div>

      <h2>Conclusion & Outlook</h2>
      <p>
        This work established a validated simulation pipeline for LLP studies, integrating event generation, decay kinematics, and 
        detector acceptance. By reproducing CHARM results and extending to CODEX-b, we demonstrated the ability of far detectors 
        to probe previously unexplored regions. Future work will incorporate background modeling and expand to additional BSM 
        scenarios, strengthening the physics case for LLP searches at the LHC.
      </p>
    </section>
  </div>
</div>
</body>
</html>
