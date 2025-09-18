---
layout: default
title: null
permalink: /research/research1.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cosmic-Ray Telescope and Neutron Signal Detection</title>
  <link rel="stylesheet" href="research.css">
  <!-- MathJax -->
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script>
</head>
<body>
  <div id="research-detail">
    <div class="content-card">
      <h1 class="page__title">
        Development of a SiPM-Based Cosmic-Ray Telescope and Neutron Detection System
      </h1>
      <p class="meta">
        Menglin Li · Sun Yat-sen University · Advisor: Prof. Jie Feng<br>
        October 2024 to now
      </p>
      
      <section class="research-body">
        <h2>Background</h2>
        <p>
          Cosmic rays, originating from outer space, interact with the Earth’s atmosphere and generate cascades of secondary particles. At sea level, a 
          significant fraction of these secondary cosmic rays consists of muons, which are highly penetrating charged particles capable of traversing dense 
          materials with minimal attenuation. This unique property makes muons valuable probes for experimental studies. To detect them, we employ plastic 
          scintillator detectors coupled with silicon photomultipliers (SiPMs), while complementary measurements of neutrons are performed with a helium-3 
          proportional counter. 
        </p>
        <p>
          The experimental platform centers on a cosmic ray telescope composed of two vertically aligned plastic scintillator detectors. Our project pursues two 
          primary objectives. First, by measuring muon count rates under varying conditions—such as different materials or detector positions—we aim to explore 
          the feasibility of muon imaging. Second, by analyzing the energy deposition of minimum ionizing particles (MIPs) in the scintillators and the 
          characteristic Landau distribution, we seek to establish a reliable calibration method for multi-channel detectors. Additionally, the He-3 neutron 
          detector is used to measure the expected proton–triton coincidence peak, thereby validating the platform as a testbed for energy calibration of 
          radiation detectors.
        </p>

        <h2>Experimental Setup</h2>
        <p>
        The telescope comprises two plastic scintillator paddles oriented vertically, separated by a fixed baseline so that through-going cosmic muons traverse 
        both detectors in succession.Each scintillator is optically coupled to a SiPM whose output is processed by a spectroscopy amplifier to produce a shaped 
        analog signal. The amplified outputs are then passed to single-channel analyzers (SCAs) to generate standardized logic pulses. A coincidence unit requires 
        simultaneous pulses from both scintillators to assert a valid muon trigger. The coincidence output is used as the gate signal to the digital multichannel 
        analyzer (MCA) for time-synchronous spectral acquisition.
        </p>
        <p>
        The He-3 tube is positioned coaxially between the two scintillators so that muons and neutrons interacting in the detector volume are recorded under 
        identical trigger conditions.When a muon traverses the He-3 gas, it deposits energy primarily via ionization; the MCA records the resulting pulse-height 
        spectrum, which exhibits the characteristic Landau distribution associated with minimum ionizing particles (MIPs). These muon-induced spectra serve as an 
        established reference for energy-response calibration.
        </p>
        <div class="figure-grid">
          <figure>
            <img src="/images/research1setup.png" alt="Setup diagram">
            <figcaption>Schematic diagram of the telescope system with scintillators and SiPMs.</figcaption>
          </figure>
          <figure>
            <img src="/images/research1platform.png" alt="Experiment photo">
            <figcaption>Laboratory setup including scintillator modules and readout electronics.</figcaption>
          </figure>
        </div>
        <p>
        Thermal and fast neutrons captured by the He-3 nucleus undergo the well-known reaction
        <span style="white-space:nowrap;">\(n + {}^{3}\mathrm{He} \rightarrow p + t + 764\ \mathrm{keV}\)</span>,
        producing a proton–triton (p–t) pair whose combined kinetic energy is deposited locally and recorded as a distinct feature (the p–t peak) in the MCA 
        spectrum. Observation of the p–t peak under the same gated acquisition conditions provides an independent spectral marker that validates the energy scale 
        derived from muon events.
        </p>
        <p>
        All detector signals are time-stamped and gated by the coincidence logic to suppress uncorrelated background. The physical arrangement (scintillator 
        baseline, He-3 tube position, and electronic gating) is chosen to maximize geometric acceptance for through-going muons while ensuring the He-3 counter is 
        fully within the trigger volume. The resulting configuration yields a robust platform for cross-referencing muon energy-deposition signatures and neutron 
        capture features for detector energy calibration and response characterization.
        </p>




    <h2>Methodology and Analysis</h2>
      <p>
        This project uses a compact cosmic-ray telescope built from two vertically aligned plastic
        scintillator detectors (plastic scintillator + SiPM readout) together with a <sup>3</sup>He proportional
        counter. The combined instrument serves two complementary purposes: (1) to measure muon count-rate
        variations under different material/geometry conditions for muon imaging tests, and (2) to provide an
        energy-calibration reference for the detection chain by exploiting the distinctive energy depositions
        produced by muons and by neutron-capture reactions in the <sup>3</sup>He tube.
      </p>

      <h3>Physical basis</h3>
      <p>
        At ground level the secondary cosmic-ray flux is dominated by muons, which behave as minimum-ionizing
        particles (MIPs) when traversing gaseous detectors. Muons deposit energy mainly through ionization;
        the resulting pulse-height spectrum in a thin detector follows a Landau-like distribution with a
        characteristic most-probable value (MPV). By contrast, thermal neutrons captured in the <sup>3</sup>He
        gas produce a mono-energetic reaction that yields a well-defined peak in the pulse-height spectrum.
      </p>

      <p class="equation">
        <!-- Formula 1: neutron capture (keeps it as one of the three formulas) -->
        \[
        n + {}^{3}\mathrm{He}\;\rightarrow\; {}^{3}\mathrm{H} + p \;+\; 764\ \mathrm{keV}
        \]
        <br><small class="eq-note">(Neutron capture reaction in the \({}^{3}\)He proportional counter; the p–T peak near 764 keV is used as an absolute calibration mark.)</small>
      </p>

      <h3>Experimental signal chain & gating</h3>
      <p>
        Each plastic-scintillator is instrumented with a silicon photomultiplier (SiPM). The SiPM signals are
        amplified and shaped by a spectroscopy chain (preamplifier → shaping amplifier). Identical single-channel
        discriminators (or a single-channel analyzer set to a stable threshold) produce timing pulses whose
        coincidence forms the telescope trigger. The coincidence of the two scintillators is used as a gate
        input to a multichannel analyzer (MCA); only events coincident with the telescope are therefore stored,
        greatly suppressing uncorrelated backgrounds in the recorded spectra.
      </p>

      <figure class="research-figure">
        <img src="/images/setup-diagram.png" alt="Schematic of the telescope and readout chain">
        <figcaption>Experimental layout: two vertically stacked plastic scintillators (SiPM readout) provide the telescope trigger; the gated MCA records spectra from the <sup>3</sup>He counter.</figcaption>
      </figure>

      <h3>Landau MPV estimate (muon energy-loss)</h3>
      <p>
        Using standard stopping-power data and the tube geometry, the expected MPV of the muon energy-deposition
        distribution in the He-3 gas can be estimated and compared to measured spectra. For our tube (80 mm length,
        2 atm) the order-of-magnitude MPV is:
      </p>

      <p class="equation">
        <!-- Formula 2: MPV calculation -->
        \[
        \text{MPV} \approx \rho \cdot \left(\frac{dE}{dx}\right) \cdot L
        \quad\Rightarrow\quad
        \text{MPV} \approx 2.47\times 10^{-4}\,\mathrm{g/cm^3}\times 1.937\,\mathrm{MeV\,g^{-1}cm^2}\times 8\,\mathrm{cm}
        \approx 3.8\ \mathrm{keV}.
        \]
        <br><small class="eq-note">(Estimate used to locate the muon Landau peak for calibration/validation.)</small>
      </p>

      <h3>Neutron-source validation and p–T peak</h3>
      <p>
        To provide a direct, localized calibration point we employ alpha-induced neutron production (e.g. an
        Americium-241 source impinging on thin Al foil) and register the neutron capture signature in the
        <sup>3</sup>He tube. The p–T coincidence peak near 764 keV is easy to identify in the MCA spectrum and
        serves to determine the channel-to-energy mapping of the acquisition system.
      </p>

      <figure class="research-figure">
        <img src="/images/spectrum-example.png" alt="Example spectrum: neutron p-T peak and muon Landau region">
        <figcaption>Example MCA spectrum (schematic): distinct p–T peak from neutron capture and the lower-energy muon Landau distribution.</figcaption>
      </figure>

      <h3>Geometric acceptance and expected muon rate</h3>
      <p>
        The telescope acceptance is determined by the scintillator geometry and separation. For two scintillators
        of width \(W\) and separation \(d\) (vertical extent \(L = d + 2W\)), the maximum acceptance angle is
        \(\theta = \arctan(W/L)\). This geometric factor, together with the local muon angular distribution,
        gives the baseline expected count-rate used to evaluate imaging contrasts when materials or placements
        are changed.
      </p>

      <p class="equation">
        <!-- Formula 3: acceptance angle (keeps formulas ≤3) -->
        \[
        \theta = \arctan\!\left(\frac{W}{L}\right).
        \]
      </p>

      <h3>Calibration workflow and checks</h3>
      <p>
        In practice the calibration proceeds as follows: (i) acquire a long background spectrum with the gated MCA
        (telescope coincidence) to capture the muon Landau region; (ii) introduce the neutron source and record the
        <sup>3</sup>He spectrum to identify the 764 keV p–T peak and derive channel-to-energy calibration; (iii) apply
        the calibration to the telescope-gated spectra and compare the measured muon MPV with the theoretical estimate;
        (iv) repeat for different detector separations, absorbers, or shielding configurations to inspect sensitivity
        and imaging capability. Statistical uncertainties, electronics gain drift and environmental temperature
        variations are quantified and included in the final error budget.
      </p>

      <p>
        The combination of an absolute neutron capture marker and the muon Landau distribution provides a robust,
        dual-purpose calibration strategy suitable for both energy scaling of the MCA and for verifying detector
        uniformity across multiple channels.
      </p>



        <h2>Results</h2>
        <p>
          The prototype telescope achieved consistent muon counting rates, with results 
          matching simulated expectations within statistical uncertainties. Adjusting SiPM 
          bias voltage demonstrated a clear optimization window for energy resolution 
          and noise suppression.
        </p>
        <p>
          For neutron detection, the α–Al reaction induced by an Am-241 source generated 
          neutrons that were successfully detected by the <sup>3</sup>He counter. 
          The characteristic p–t coincidence peak confirmed the presence of neutrons 
          and validated the calibration of the spectrometer.
        </p>

        <h2>Conclusion & Outlook</h2>
        <p>
          This project successfully developed a compact, SiPM-based system capable of detecting 
          both cosmic muons and neutron signals. The results establish a solid platform 
          for future studies, including advanced muon tomography experiments, detector 
          calibration routines, and radiation-safety applications. Upcoming work will 
          focus on extending measurement duration, refining statistical analysis, 
          and exploring hybrid systems integrating both scintillator and proportional-counter technologies.
        </p>
      </section>
    </div>
  </div>
</body>
</html>
