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
  <!-- MathJax (only needed if you add equations) -->
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script>
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
        Long-lived particles (LLPs) are a well-motivated class of beyond-Standard-Model signatures whose masses and lifetimes can span many
        orders of magnitude; detecting them requires dedicated experimental concepts that complement ATLAS/CMS/LHCb. The CODEX-b proposal
        advocates a compact, shielded, transversely displaced detector with a nominal 10 × 10 × 10 m³ fiducial volume located in the DELPHI/UXA
        cavern, designed to achieve near zero-background sensitivity to a variety of LLP models. :contentReference[oaicite:0]{index=0}
      </p>

      <h2>My role and contributions (overview)</h2>
      <p>
        In this project I focused on the phenomenology and simulation chain that underpins detector sensitivity estimates. My primary contributions were:
      </p>
      <ul>
        <li>Critical review of historical fixed-target constraints (CHARM) to establish a benchmark exclusion landscape for light LLPs.</li>
        <li>Large-scale event generation with <strong>Pythia8</strong> to produce LLP kinematic spectra and decay-length distributions under representative BSM benchmarks.</li>
        <li>Geometry and acceptance studies for a CODEX-like far detector (10×10×10 m³ fiducial), quantifying fiducial acceptance as a function of LLP boost and lifetime. :contentReference[oaicite:1]{index=1}</li>
        <li>Monte Carlo evaluation of spatial decay distributions and sensitivity projection calculations; worked in collaboration with colleagues running full Geant4 detector-response simulations to produce the final sensitivity curves. :contentReference[oaicite:2]{index=2}</li>
      </ul>

      <h2>Methods</h2>
      <p>
        The analysis pipeline combined generator-level production (Pythia8) with geometric acceptance and simplified detector response studies:
      </p>
      <ol>
        <li><strong>Benchmarking and literature review.</strong> Re-examined CHARM fixed-target exclusions (400 GeV p–Cu) to set conservative reference limits for light LLPs and to validate our reinterpretation procedures.</li>
        <li><strong>Event generation (Pythia8).</strong> Produced samples for representative portals (dark photons, axion-like particles, heavy neutral leptons) and recorded LLP four-momenta and decay vertices in the lab frame. Production channels included heavy-flavor decays, Drell–Yan and parton-shower emissions when appropriate. :contentReference[oaicite:3]{index=3}</li>
        <li><strong>Geometric acceptance & fiducial cuts.</strong> Using the CODEX-b fiducial definition (26 m < x < 36 m, −7 m < y < 3 m, 5 m < z < 15 m), I computed the probability that an LLP with given production kinematics decays inside the volume; these acceptance maps were binned in mass, boost and proper lifetime. :contentReference[oaicite:4]{index=4}</li>
        <li><strong>Monte Carlo decay sampling & sensitivity estimation.</strong> Spatial decay distributions were sampled via Monte Carlo; expected signal yields were folded with production rates, branching ratios and reconstruction/trigger efficiencies (the latter from simplified models or from Geant4-based studies provided by collaborators). Final sensitivity curves (exclusion vs. lifetime × coupling) were produced by scanning parameter grids and counting expected decays in the fiducial volume. :contentReference[oaicite:5]{index=5}</li>
      </ol>

      <div class="figure-grid">
        <figure>
          <img src="/images/charm-setup-placeholder.jpg" alt="CHARM fixed-target experiment (placeholder)">
          <figcaption>Figure 1. Schematic of the CHARM fixed-target experiment used as a historical benchmark for low-mass LLP exclusions (placeholder).</figcaption>
        </figure>
        <figure>
          <img src="/images/pythia-sim-flow.jpg" alt="Pythia8 simulation workflow">
          <figcaption>Figure 2. Pythia8 → generator-level LLP kinematics → decay sampling → fiducial acceptance mapping workflow used in the analysis.</figcaption>
        </figure>
      </div>

      <h2>Results (selected)</h2>
      <p>
        The main outcomes of my work are:
      </p>
      <ul>
        <li>
          <strong>Reproduced CHARM benchmark:</strong> the reinterpretation of CHARM exclusions provided a validated low-mass constraint set against which CODEX-b projections were compared.
        </li>
        <li>
          <strong>Acceptance maps:</strong> computed acceptance as a function of LLP proper lifetime and mass for the 10×10×10 m³ fiducial volume; acceptance peaks at intermediate boosts (trade-off between decay probability and geometric overlap) and falls for both very short and very long lifetimes.
        </li>
        <li>
          <strong>Sensitivity estimates:</strong> folding generator yields with acceptance and reconstruction efficiencies produced sensitivity curves showing CODEX-b complementarity to existing experiments (plots computed following the procedures described in the CODEX-b expression of interest). :contentReference[oaicite:6]{index=6}
        </li>
        <li>
          <strong>Collaboration with detector simulation:</strong> Monte Carlo spatial decay distributions were passed to colleagues performing Geant4 detector response simulations; their results were used to derive realistic reconstruction efficiencies and to produce the final projected reach plots reported in internal notes. :contentReference[oaicite:7]{index=7}
        </li>
      </ul>

      <div class="figure-grid">
        <figure>
          <img src="/images/codexb-geometry-placeholder.jpg" alt="CODEX-b geometry (placeholder)">
          <figcaption>Figure 3. Schematic of the CODEX-b fiducial volume and shielding arrangement used in acceptance calculations (placeholder). :contentReference[oaicite:8]{index=8}</figcaption>
        </figure>
      </div>

      <h2>Project progress & notes</h2>
      <p>
        Key technical notes and reproducibility points:
      </p>
      <ul>
        <li>Event weights: for rare production modes we used weighted Pythia8 runs (p̂<sub>T</sub> biasing) to maintain statistical precision at high ŝ. :contentReference[oaicite:9]{index=9}</li>
        <li>Geometry: fiducial coordinates and UXA/UX85 cavern placement were taken directly from the CODEX-b proposal to ensure consistent acceptance evaluation. :contentReference[oaicite:10]{index=10}</li>
        <li>Background considerations: final projections incorporate background estimates and shielding discussions from the CODEX-b documentation (shielding, active veto strategies and demonstrator CODEX-β measurements informed background assumptions). :contentReference[oaicite:11]{index=11}</li>
      </ul>

      <h2>Conclusion & Outlook</h2>
      <p>
        My work established a validated generator-level and geometric framework for LLP sensitivity projections, reproducing historical benchmarks
        and producing acceptance maps and preliminary sensitivity curves for CODEX-like detectors. These results formed an analysis backbone that,
        when combined with detailed Geant4 detector response studies from collaborators, yielded the sensitivity estimates used in internal reports.
      </p>
      <p>
        Future directions I recommend and plan to pursue include (i) refining acceptance estimates with fully integrated LHCb+CODEX simulation chains,
        (ii) extending production modeling (e.g. improved shower / hadronization treatment for ALPs), and (iii) producing public, reproducible scripts
        for the community to evaluate new benchmark models rapidly. Selected methodological choices and context are documented in the CODEX-b expression
        of interest. :contentReference[oaicite:12]{index=12}
      </p>

    </section>
  </div>
</div>
</body>
</html>
