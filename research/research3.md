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
        This project investigated long-lived particles (LLPs) in beyond-Standard-Model scenarios, focusing on 
        hidden-sector dark photons and axion-like particles (ALPs). I developed a simulation pipeline linking 
        event generation, decay kinematics, and detector acceptance to evaluate the discovery potential of the 
        proposed CODEX-b far detector at the LHC. The pipeline reproduced and generated CODEX-b sensitivity plots in the mass–lifetime parameter space.
      </p>

      <h2>Theoretical Preparation & Experimental Report Analysis</h2>
      <p>
        To establish a solid foundation, I studied essential quantum field theory and the principles of LLP detection. 
        I conducted a critical review of the <strong>CHARM fixed-target experiment</strong> (400 GeV proton–copper collisions), 
        analyzing its methodology and exclusion limits on neutral LLPs. These results provided a benchmark for validating 
        modern simulations.
      </p>

      <div class="research-figure">
        <figure>
          <img src="/images/llp-charm.png" alt="CHARM fixed-target experiment">
          <figcaption>Figure 1. CHARM fixed-target experiment, serving as a benchmark for LLP constraints</figcaption>
        </figure>
      </div>

      <h2>Simulation Framework</h2>
      <p>
        I employed <em>Pythia8</em> to simulate proton–proton collisions at LHC energies, generating LLP momentum spectra 
        and decay-length distributions under benchmark BSM scenarios. Detector acceptance studies focused on the 
        <strong>proposed CODEX-b far detector</strong>, a 10×10×10 m³ decay volume near LHCb. I modeled its geometry and 
        shielding, applied kinematic cuts, and estimated the probability of LLP decays within the fiducial volume. Monte Carlo 
        methods were used to propagate decay vertices, and in collaboration with colleagues using <em>Geant4</em>, 
        detector response was incorporated to project observable yields. Sensitivity curves for dark photons and ALPs were derived.
      </p>

      <div class="research-figure">
        <figure>
          <img src="/images/codexb-geometry.png" alt="CODEX-b detector geometry">
          <figcaption>Figure 2. Geometry of the proposed CODEX-b far detector at LHCb</figcaption>
        </figure>
      </div>

      <h2>My Contributions</h2>
      <ul>
        <li>Conducted a critical review of the CHARM fixed-target experiment, examining methodology and exclusion bounds on LLPs to establish a benchmark for subsequent studies.</li>
        <li>Utilized the <em>Pythia8</em> event generator to simulate proton–proton collisions at LHC energies, producing LLP kinematic spectra and decay-length distributions under benchmark BSM scenarios.</li>
        <li>Investigated the geometry and shielding of the proposed CODEX-b far detector at LHCb, assessed its acceptance for LLP decays within the 10×10×10 m³ fiducial volume, and evaluated its potential to extend sensitivity beyond existing experiments.</li>
        <li>Applied Monte Carlo methods to compute spatial decay distributions and, in collaboration with colleagues using <em>Geant4</em> for detector response, derived sensitivity curves for models including dark photons and axion-like particles (ALPs), demonstrating CODEX-b's complementary reach in the LLP parameter space.</li>
      </ul>
      
      <div class="research-figure">
        <figure>
          <img src="/images/llp-sensitivity.png" alt="Sensitivity curves for LLP models">
          <figcaption>Figure 3. Sensitivity curves for dark photons and ALPs, illustrating CODEX-b’s extended reach</figcaption>
        </figure>
      </div>


      <h2>Results & Outlook</h2>
      <p>
        The simulation pipeline successfully reproduced CHARM exclusion bounds, confirming the validity of our modeling. 
        Applied to CODEX-b, it demonstrated unique coverage in the mass–lifetime plane, particularly for intermediate 
        lifetimes beyond the reach of prompt and beam-dump experiments. Dark photon sensitivity was extended in the MeV–GeV 
        range, with complementary coverage for ALPs. Future work includes systematic background modeling and extension to 
        additional BSM scenarios.
      </p>


    </section>
  </div>
</div>
</body>
</html>
