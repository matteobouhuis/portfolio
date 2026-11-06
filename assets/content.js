/*
  ============================================================
  CONTENUTI DEL PORTFOLIO — questo è l'unico file da modificare
  ============================================================
  - Ogni testo ha due versioni: { it: "...", en: "..." } (anche le competenze; una parola uguale nelle due lingue può restare una stringa semplice)
  - I punti marcati con TODO sono da completare/verificare.
  - Immagini progetto: tutte nella stessa cartella del sito, chiamate <id-progetto>-<nome>.jpg.
    Se l'immagine non esiste, il sito mostra un riquadro segnaposto (non si rompe nulla).
  - Per aggiungere un progetto: copia un blocco { id: ..., } dentro "projects" e cambia i campi.
*/

window.SITE = {
  name: "Matteo Bouhuis",
  email: "matteo.bouhuis@gmail.com",
  linkedin: "https://www.linkedin.com/in/matteo-bouhuis-684088332",
  github: "https://github.com/matteobouhuis",
  photo: "foto-profilo.jpg",
  cv: { it: "CV_Matteo_Bouhuis_IT.pdf", en: "CV_Matteo_Bouhuis_EN.pdf" },

  hero: {
    kicker: { it: "CFD · Aeroelasticità · Motorsport", en: "CFD · Aeroelasticity · Motorsport" },
    role: {
      it: "Studente di MSc in Aeronautical Engineering al Politecnico di Milano, focalizzato su CFD e aeroelasticità.",
      en: "MSc student in Aeronautical Engineering at Politecnico di Milano, focused on CFD and aeroelasticity."
    },
    intro: {
      it: "Laurea triennale in Ingegneria Aerospaziale al Politecnico di Milano nel 2025; laurea magistrale prevista ad aprile 2027, con una tesi sullo sviluppo di un solver multifase in SU2.",
      en: "BSc in Aerospace Engineering from Politecnico di Milano (2025); MSc expected April 2027, with a thesis on developing a multiphase solver in SU2."
    }
  },

  // Striscia di numeri sotto l'apertura (togli o cambia quello che vuoi)
  keyNumbers: [
    { value: "Apr 2027", label: { it: "Laurea e disponibilità", en: "MSc & availability" } },
    { value: "SU2 · OpenFOAM", label: { it: "Solver CFD usati", en: "CFD solvers used" } },
    { value: "SU2 Conf. 2026", label: { it: "Speaker, Milano 9–10 nov", en: "Speaker, Milan 9–10 Nov" } },
    { value: "IT · EN · NL", label: { it: "Lingue", en: "Languages" } }
  ],

  // Blocco scuro in evidenza sotto l'apertura (qui: la tesi)
  spotlight: {
    kicker: { it: "Tesi magistrale · in corso · SU2 Conference 2026", en: "Master's thesis · ongoing · SU2 Conference 2026" },
    title: {
      it: "Verso un modello Baer–Nunziato trifase in SU2",
      en: "Towards a three-phase Baer–Nunziato model in SU2"
    },
    text: {
      it: "Il gruppo della Prof.ssa Re ha sviluppato in SU2 un solver per il modello Baer–Nunziato di non equilibrio a due fasi, con rilassamento a velocità finita. Nella tesi lo porto da due fasi fisse a N, con l'obiettivo di aggiungere una terza fase inerte (per esempio un gas non condensabile in un flusso liquido–vapore). Ho riorganizzato il codice C++ in undici commit verificabili, mantenendo i risultati a due fasi identici bit per bit, e ho ricavato le chiusure d'interfaccia per tre fasi. I primi test trifase riproducono la soluzione esatta all'errore di macchina. Talk alla SU2 Conference 2026 (Milano, 9–10 novembre) con G. Sirianni e B. Re.",
      en: "Prof. Re's group developed an SU2 solver for the two-phase non-equilibrium Baer–Nunziato model with finite-rate relaxation. In my thesis I take it from two hard-coded phases to N, aiming at a third, inert phase (for example a non-condensable gas in a liquid–vapour flow). I restructured the C++ code in eleven verifiable commits, keeping two-phase results bit-identical, and derived the three-phase interface closures. The first three-phase tests reproduce the exact solution to round-off. Talk at the SU2 Conference 2026 (Milan, 9–10 November) with G. Sirianni and B. Re."
    },
    tags: ["SU2", "C++", "Baer–Nunziato", "Multiphase flows", "Verification", "Git"],
    link: { href: "#/p/tesi-baer-nunziato", label: { it: "Dettagli del progetto", en: "Project details" } }
  },

  projects: [
    {
      id: "tesi-baer-nunziato",
      metric: { it: "Errore ≤ 5·10⁻¹⁴", en: "Error ≤ 5·10⁻¹⁴" },
      status: { it: "In corso", en: "Ongoing" },
      title: { it: "Solver Baer–Nunziato a N fasi in SU2", en: "N-phase Baer–Nunziato solver in SU2" },
      context: { it: "Tesi magistrale, Politecnico di Milano · relatrice Prof.ssa Barbara Re", en: "Master's thesis, Politecnico di Milano · supervisor Prof. Barbara Re" },
      summary: {
        it: "Estensione del solver Baer–Nunziato di SU2 da due a N fasi, verso una terza fase inerte. Presentato alla SU2 Conference 2026.",
        en: "Extension of SU2's Baer–Nunziato solver from two to N phases, towards a third, inert phase. Presented at the SU2 Conference 2026."
      },
      tags: ["SU2", "C++", "Multiphase", "Baer–Nunziato", "Verification"],
      cover: "tesi-baer-nunziato-cover.jpg",
      gallery: [
        { src: "tesi-baer-nunziato-02-titolo.jpg",
          caption: { it: "Slide di apertura del talk alla SU2 Conference 2026", en: "Opening slide of the SU2 Conference 2026 talk" } },
        { src: "tesi-baer-nunziato-03-regola-n-fasi.jpg",
          caption: { it: "La regola dell'estensione: con N = 2 nulla cambia, bit per bit", en: "The extension rule: N = 2 must not change, bit for bit" } },
        { src: "tesi-baer-nunziato-04-verifica.jpg",
          caption: { it: "Primi test trifase contro la soluzione esatta", en: "First three-phase runs against the exact solution" } }
      ],
      sections: [
        { h: { it: "Contesto", en: "Context" },
          p: { it: "Il modello Baer–Nunziato a sette equazioni dà a ogni fase velocità, pressione, temperatura ed equazione di stato proprie; il rilassamento a velocità finita descrive il non equilibrio tra le fasi. Il solver di partenza, sviluppato in SU2 da G. Sirianni e B. Re, usa un flusso HLLC con ricostruzione MUSCL e un operatore di rilassamento analitico.",
               en: "The seven-equation Baer–Nunziato model gives each phase its own velocity, pressure, temperature and equation of state; finite-rate relaxation describes the non-equilibrium between phases. The starting solver, developed in SU2 by G. Sirianni and B. Re, uses an HLLC flux with MUSCL reconstruction and an analytical relaxation operator." } },
        { h: { it: "Il mio lavoro", en: "My work" },
          p: { it: "Ho ricavato le chiusure d'interfaccia per tre fasi (vapore, liquido, gas inerte) e riorganizzato il codice C++ da due fasi fisse a N in undici commit: un'unica definizione degli indici, 32 cicli classificati e 21 estesi, il caso N > 2 bloccato dove non è ancora verificato. Ogni commit passa un controllo di regressione: tre casi a due fasi di riferimento con output identici byte per byte.",
               en: "I derived the three-phase interface closures (vapour, liquid, inert gas) and restructured the C++ code from two hard-coded phases to N in eleven commits: a single definition of all indices, 32 loops classified and 21 extended, N > 2 blocked wherever it is not yet verified. Every commit passes a regression gate: three two-phase reference runs with byte-identical output." } },
        { h: { it: "Risultati", en: "Results" },
          p: { it: "Fase duplicata: differenza relativa massima 3,3·10⁻¹⁴ rispetto al calcolo bifase. Tre gas ideali diversi in puro trasporto: errore su pressioni e velocità entro 5·10⁻¹⁴ su quattro griglie. Lezione imparata: un controllo bit per bit a N = 2 non vede gli errori che compaiono solo con N > 2, che richiedono test propri.",
               en: "Duplicated phase: maximum relative difference 3.3·10⁻¹⁴ versus the two-phase run. Three different ideal gases in pure transport: pressure and velocity error within 5·10⁻¹⁴ on four grids. Lesson learned: a bit-identical N = 2 gate cannot see bugs that only appear for N > 2, which need their own tests." } },
        { h: { it: "Prossimi passi", en: "Next steps" },
          p: { it: "Chiusure trifase selezionabili da configurazione, flusso HLLC e rilassamento per N fasi, casi test multidimensionali.",
               en: "Three-phase closures selectable from the config, N-phase HLLC flux and relaxation, multi-dimensional test cases." } }
      ],
      links: []   // es. { href: "https://...", label: { it: "Slide SU2 Conference", en: "SU2 Conference slides" } }
    },
    {
      id: "hunter-nozzle",
      metric: { it: "F/Fi > 0,9 a NPR 1,25", en: "F/Fi > 0.9 at NPR 1.25" },
      title: { it: "Separazione del flusso in un ugello supersonico", en: "Flow separation in a supersonic nozzle" },
      context: { it: "Computational Fluid Dynamics, team di 5 studenti", en: "Computational Fluid Dynamics, team of 5" },
      summary: {
        it: "RANS 2D in SU2 di un ugello convergente-divergente sovraespanso (NPR 1,25–3,2), validato contro i dati sperimentali di Hunter (NASA).",
        en: "2D RANS in SU2 of an overexpanded convergent-divergent nozzle (NPR 1.25–3.2), validated against Hunter's NASA experiments."
      },
      tags: ["SU2", "RANS", "Spalart–Allmaras", "Shock–boundary layer interaction", "GCI"],
      cover: "hunter-nozzle-cover.jpg",
      gallery: [
        { src: "hunter-nozzle-02-schlieren-npr24.jpg",
          caption: { it: "Schlieren numerico (sopra) contro il calcolo di Hunter (sotto), NPR = 2,4", en: "Numerical schlieren (top) vs Hunter's computation (bottom), NPR = 2.4" } },
        { src: "hunter-nozzle-03-thrust-ratio.jpg",
          caption: { it: "Rapporto di spinta F/Fi: teoria 1D, esperimento, CFD di Hunter e SU2", en: "Thrust ratio F/Fi: 1D theory, experiment, Hunter's CFD and SU2" } },
        { src: "hunter-nozzle-04-pressione-asse.jpg",
          caption: { it: "Pressione statica normalizzata lungo l'asse al variare di NPR", en: "Normalised centreline static pressure for each NPR" } }
      ],
      sections: [
        { h: { it: "Obiettivo", en: "Goal" },
          p: { it: "Capire come la separazione indotta dall'urto cambia la struttura del flusso e l'efficienza di spinta di un ugello planare (Ae/At = 1,797) lontano dalla condizione di progetto.",
               en: "Understand how shock-induced separation changes the flow structure and thrust efficiency of a planar nozzle (Ae/At = 1.797) far from its design point." } },
        { h: { it: "Metodo", en: "Method" },
          p: { it: "RANS stazionario in SU2 con modello Spalart–Allmaras, flussi di Roe con ricostruzione MUSCL e limitatore di Venkatakrishnan, CFL adattivo. Mesh strutturata multiblocco su mezzo ugello con y+ ≈ 1. Studio di convergenza di griglia con estrapolazione di Richardson: GCI sotto l'1% sulla mesh scelta (102 mila celle).",
               en: "Steady RANS in SU2 with the Spalart–Allmaras model, Roe fluxes with MUSCL reconstruction and the Venkatakrishnan limiter, adaptive CFL. Multiblock structured half-nozzle mesh with y+ ≈ 1. Grid convergence study with Richardson extrapolation: GCI below 1% on the selected mesh (102k cells)." } },
        { h: { it: "Risultati", en: "Results" },
          p: { it: "Il calcolo cattura la formazione del lambda-shock da NPR ≈ 1,6 e la separazione completa ad alto NPR, con buon accordo con l'esperimento da NPR = 2,0. La separazione mantiene il rapporto di spinta sopra 0,9 anche a NPR = 1,25, dove la teoria quasi-1D prevede un crollo. Limiti: a basso NPR il modello 2D non cattura gli effetti 3D e anticipa la separazione, sovrastimando la spinta.",
               en: "The computation captures lambda-shock formation from NPR ≈ 1.6 and fully detached separation at higher NPR, agreeing well with experiment from NPR = 2.0. Separation keeps the thrust ratio above 0.9 even at NPR = 1.25, where quasi-1D theory predicts a collapse. Limitations: at low NPR the 2D model misses 3D effects and predicts earlier separation, overestimating thrust." } }
      ],
      links: []   // es. report PDF: { href: "hunter-nozzle-report.pdf", label: { it: "Report completo", en: "Full report" } }
    },
    {
      id: "treni-alta-velocita",
      metric: { it: "−38% Cd", en: "−38% Cd" },
      title: { it: "Aerodinamica di un treno ad alta velocità", en: "High-speed train aerodynamics" },
      context: { it: "Aerodynamics of Transport Vehicles, team di 4 studenti", en: "Aerodynamics of Transport Vehicles, team of 4" },
      summary: {
        it: "Studio parametrico in OpenFOAM di forma del naso con vento frontale e forma del tetto con vento laterale: resistenza, vortici di scia e stabilità al ribaltamento.",
        en: "OpenFOAM parametric study of nose shape in headwind and roof shape in crosswind: drag, wake vortices and overturning stability."
      },
      tags: ["OpenFOAM", "simpleFoam", "k-ω SST", "snappyHexMesh", "SolidWorks", "EN 14067"],
      cover: "treni-alta-velocita-cover.jpg",
      gallery: [
        { src: "treni-alta-velocita-02-cd-beta.jpg",
          caption: { it: "Coefficiente di resistenza al variare dell'angolo del naso β", en: "Drag coefficient vs nose angle β" } },
        { src: "treni-alta-velocita-03-cp-naso.jpg",
          caption: { it: "Cp sulla testa del treno per β = 15°, 30°, 45°", en: "Cp on the leading car for β = 15°, 30°, 45°" } },
        { src: "treni-alta-velocita-04-scia.jpg",
          caption: { it: "Vortici di coda, β = 15° e 45°", en: "Tail vortices, β = 15° and 45°" } },
        { src: "treni-alta-velocita-05-sezioni-crosswind.jpg",
          caption: { it: "Campo di velocità in quattro sezioni con vento laterale, tre forme del tetto", en: "Velocity field at four sections in crosswind, three roof shapes" } }
      ],
      sections: [
        { h: { it: "Obiettivo", en: "Goal" },
          p: { it: "Quantificare come la lunghezza del naso influisce su resistenza e carichi indotti (vento frontale, 50 m/s) e come la curvatura del tetto influisce su forza laterale e momento di ribaltamento (vento laterale, imbardata 20°).",
               en: "Quantify how nose length affects drag and induced loads (headwind, 50 m/s) and how roof curvature affects side force and overturning moment (crosswind, 20° yaw)." } },
        { h: { it: "Metodo", en: "Method" },
          p: { it: "Geometria parametrica in SolidWorks ispirata all'Alstom AGV. RANS incompressibile stazionario con simpleFoam e k-ω SST con funzioni di parete; mesh blockMesh + snappyHexMesh con quattro box di raffinamento e 10 strati di parete (30 < y+ < 300), suolo mobile. Indipendenza da dominio e griglia con soglia 1%: mesh finale da 3,7 milioni di celle, dominio secondo EN 14067-6.",
               en: "Parametric SolidWorks geometry inspired by the Alstom AGV. Steady incompressible RANS with simpleFoam and k-ω SST with wall functions; blockMesh + snappyHexMesh mesh with four refinement boxes and 10 prism layers (30 < y+ < 300), moving ground. Domain and grid independence at a 1% threshold: final mesh of 3.7M cells, domain per EN 14067-6." } },
        { h: { it: "Risultati", en: "Results" },
          p: { it: "Con vento frontale il naso più lungo (β = 15°) riduce la resistenza del 38% rispetto a β = 45°, con scia più stretta e picchi di pressione e di velocità di slipstream più bassi. Con vento laterale il tetto arrotondato indebolisce i vortici sottovento (identificati con il criterio Q): −21,5% di resistenza e −30% del momento di ribaltamento sulla rotaia sottovento rispetto al tetto spigoloso.",
               en: "In headwind, the longest nose (β = 15°) cuts drag by 38% versus β = 45°, with a narrower wake and lower pressure-pulse and slipstream peaks. In crosswind, the rounded roof weakens the leeward vortices (identified with the Q-criterion): −21.5% drag and −30% leeward-rail rolling moment versus the sharp-edged roof." } }
      ],
      links: []
    },
    {
      id: "trajectory-tracking-monza",
      metric: { it: "Giro 83,5 s · e_y < 0,6 m", en: "83.5 s lap · e_y < 0.6 m" },
      title: { it: "Trajectory tracking MPC a Monza", en: "MPC trajectory tracking at Monza" },
      context: { it: "Automation and Control in Autonomous Vehicles, progetto individuale", en: "Automation and Control in Autonomous Vehicles, individual project" },
      summary: {
        it: "Racing line e profilo di velocità generati con un global planner, poi inseguiti da un controllore MPC su un veicolo con parametri simili a una F1.",
        en: "Racing line and speed profile from a global planner, tracked by an MPC controller on a vehicle with F1-like parameters."
      },
      tags: ["MATLAB", "Simulink", "MPC", "Vehicle Dynamics Blockset", "Optimization"],
      cover: "trajectory-tracking-monza-cover.jpg",
      gallery: [],
      sections: [
        { h: { it: "Obiettivo", en: "Goal" },
          p: { it: "Seguire posizione e velocità lungo una racing line calcolando sterzo, coppia frenante e coppia di trazione.",
               en: "Track position and speed along a racing line by computing steering angle, braking torque and drive torque." } },
        { h: { it: "Metodo", en: "Method" },
          p: { it: "Geometria di Monza dal database racetrack TUM; global planning con path optimizer e passaggi forward/backward per il profilo di velocità; MPC in Simulink (Ts = 0,02 s, orizzonte di predizione 25, di controllo 3) con modello veicolo a 3 gradi di libertà.",
               en: "Monza geometry from the TUM racetrack database; global planning with a path optimizer and forward/backward passes for the speed profile; MPC in Simulink (Ts = 0.02 s, prediction horizon 25, control horizon 3) with a 3-DOF vehicle model." } },
        { h: { it: "Risultati", en: "Results" },
          p: { it: "Giro in 83,5 s, errore laterale massimo 0,57 m, RMSE di velocità 1,63 m/s. Limite noto: senza saturazione del pneumatico l'accelerazione laterale supera il limite usato nel planner.",
               en: "83.5 s lap, 0.57 m maximum lateral error, 1.63 m/s velocity RMSE. Known limitation: without tyre saturation, lateral acceleration exceeds the planner limit." } }
      ],
      links: []
    },
    {
      id: "f1-floor",
      status: { it: "In corso", en: "Ongoing" },
      title: { it: "Fondo F1: piatto contro effetto suolo", en: "F1 floor: flat vs ground effect" },
      context: { it: "Progetto personale", en: "Personal project" },
      summary: {
        it: "Confronto in OpenFOAM tra il fondo piatto del regolamento 2021 e un fondo a canali Venturi (Mk2). Simulazioni eseguite, analisi dei risultati in corso.",
        en: "OpenFOAM comparison of the flat 2021-regulation floor with a Venturi-tunnel floor (Mk2). Simulations run, results analysis in progress."
      },
      tags: ["OpenFOAM", "Ground effect", "External aerodynamics"],
      cover: "f1-floor-cover.jpg",
      gallery: [],
      sections: [
        { h: { it: "Geometrie", en: "Geometries" },
          p: { it: "Sopra il fondo 2021, sotto la versione Mk2 con canali Venturi. TODO: conferma la descrizione delle due geometrie.",
               en: "Top: the 2021 floor; bottom: the Mk2 version with Venturi tunnels. TODO: confirm the geometry description." } },
        { h: { it: "Prossimi passi", en: "Next steps" },
          p: { it: "TODO: carico verticale e resistenza dei due fondi, distribuzione di Cp sul lato inferiore, sensibilità all'altezza da terra.",
               en: "TODO: downforce and drag of both floors, underside Cp distribution, ride-height sensitivity." } }
      ],
      links: []
    },
    {
      id: "helmet-cfd",
      metric: { it: "−18% momento d'imbardata", en: "−18% yaw moment" },
      status: { it: "In corso", en: "Ongoing" },
      title: { it: "Aerodinamica di un casco da moto", en: "Motorbike helmet aerodynamics" },
      context: { it: "Progetto personale, con un designer industriale", en: "Personal project, with an industrial designer" },
      summary: {
        it: "Tre varianti di spoiler posteriore confrontate in OpenFOAM con vento frontale e laterale a 45°: stessa resistenza in rettilineo, differenze nette di stabilità con vento laterale.",
        en: "Three rear-spoiler variants compared in OpenFOAM in headwind and 45° crosswind: same drag in a straight line, clear differences in crosswind stability."
      },
      tags: ["OpenFOAM v2412", "simpleFoam", "RANS", "ParaView", "Crosswind"],
      cover: "helmet-cfd-cover.jpg",
      gallery: [
        { src: "helmet-cfd-02-headwind-tipo1.jpg",
          caption: { it: "Streamline con vento frontale, variante 1", en: "Headwind streamlines, variant 1" } },
        { src: "helmet-cfd-03-crosswind-tipo3.jpg",
          caption: { it: "Streamline con vento laterale a 45°, variante 3", en: "45° crosswind streamlines, variant 3" } },
        { src: "helmet-cfd-04-headwind-top.jpg",
          caption: { it: "Vista dall'alto con vento frontale, variante 2", en: "Top view in headwind, variant 2" } }
      ],
      sections: [
        { h: { it: "Obiettivo", en: "Goal" },
          p: { it: "Scegliere lo spoiler posteriore di un casco tra tre varianti con la stessa silhouette frontale, guardando resistenza e stabilità direzionale.",
               en: "Choose a helmet's rear spoiler among three variants with the same frontal silhouette, based on drag and directional stability." } },
        { h: { it: "Metodo", en: "Method" },
          p: { it: "RANS stazionario con simpleFoam (OpenFOAM v2412). Vento frontale a 80 e 130 km/h; vento laterale a 45° a 50 e 80 km/h con doppio ingresso. Coefficienti mediati sulle ultime 50 iterazioni (deviazione standard di Cd sotto l'1%), post-processing in ParaView.",
               en: "Steady RANS with simpleFoam (OpenFOAM v2412). Headwind at 80 and 130 km/h; 45° crosswind at 50 and 80 km/h with a dual inlet. Coefficients averaged over the last 50 iterations (Cd standard deviation below 1%), post-processing in ParaView." } },
        { h: { it: "Risultati", en: "Results" },
          p: { it: "Con vento frontale le tre varianti hanno Cd tra 0,46 e 0,48: differenze entro il rumore numerico, coerenti con la stessa area frontale. Con vento laterale la variante 1 ha il momento d'imbardata più basso (0,108 contro 0,131 della variante 3 a 50 km/h, −18%); la variante 3 è invece la meno sensibile alla velocità. TODO: studio di indipendenza dalla griglia.",
               en: "In headwind the three variants have Cd between 0.46 and 0.48: differences within numerical noise, consistent with the identical frontal area. In crosswind variant 1 has the lowest yaw-moment coefficient (0.108 vs 0.131 for variant 3 at 50 km/h, −18%); variant 3 is the least speed-sensitive. TODO: grid independence study." } }
      ],
      links: []
    },
    {
      id: "strut-braced-wing",
      metric: { it: "U_F = 60,4 m/s", en: "U_F = 60.4 m/s" },
      title: { it: "Aeroelasticità di un'ala controventata", en: "Aeroelasticity of a strut-braced wing" },
      context: { it: "Structural Dynamics and Aeroelasticity, due progetti individuali", en: "Structural Dynamics and Aeroelasticity, two individual assignments" },
      summary: {
        it: "Modelli di Ritz–Galerkin in MATLAB di un'ala con montante: divergenza, efficacia degli alettoni, flutter, raffica e risposta stocastica, con ottimizzazione strutturale.",
        en: "Ritz–Galerkin models in MATLAB of a strut-braced wing: divergence, aileron effectiveness, flutter, gust and stochastic response, with structural optimisation."
      },
      tags: ["MATLAB", "Ritz–Galerkin", "Flutter", "Divergence", "Gust response", "Lyapunov"],
      cover: "strut-braced-wing-cover.jpg",
      gallery: [
        { src: "strut-braced-wing-02-flessione.jpg",
          caption: { it: "Spostamento flessionale con e senza montante", en: "Bending displacement with and without the strut" } },
        { src: "strut-braced-wing-03-bode.jpg",
          caption: { it: "Risposta in frequenza alettone–spostamento a 25 m/s", en: "Aileron-to-displacement frequency response at 25 m/s" } },
        { src: "strut-braced-wing-04-raffica.jpg",
          caption: { it: "Momento flettente alla radice dopo una raffica a gradino", en: "Root bending moment after a step gust" } }
      ],
      sections: [
        { h: { it: "Statica", en: "Static" },
          p: { it: "Divergenza al variare della posizione del montante lungo la corda, efficacia degli alettoni e inversione dei comandi. Il montante riduce lo spostamento flessionale all'estremità dell'85% e la rotazione torsionale del 75%. Una riprogettazione ottimizzata alza la pressione dinamica di divergenza del 40% con una variazione di massa di circa −0,6%.",
               en: "Divergence versus chordwise strut position, aileron effectiveness and control reversal. The strut cuts tip bending displacement by 85% and torsional rotation by 75%. An optimised redesign raises the divergence dynamic pressure by 40% with a mass change of about −0.6%." } },
        { h: { it: "Dinamica", en: "Dynamic" },
          p: { it: "Base di Legendre traslati (convergenza a 4 funzioni flessionali e 9 torsionali), aerodinamica quasi-stazionaria al 3/4 della corda con smorzamento da velocità di beccheggio. Flutter a 60,4 m/s (3,66 Hz) con montante al bordo d'attacco; minimo di 19,3 m/s quando il montante agisce sull'asse elastico e non accoppia flessione e torsione. Risposta a raffica a gradino e varianza del momento alla radice con l'equazione di Lyapunov.",
               en: "Shifted-Legendre basis (converged at 4 bending and 9 torsion functions), quasi-steady 3/4-chord aerodynamics with pitch-rate damping. Flutter at 60.4 m/s (3.66 Hz) with the strut at the leading edge; minimum of 19.3 m/s when the strut acts on the elastic axis and no longer couples bending and torsion. Step-gust response and root-moment variance from the Lyapunov equation." } }
      ]
    }

  ],

  skills: [
    { group: { it: "Linguaggi", en: "Languages" }, items: ["MATLAB", "Python", { it: "C++ (in apprendimento)", en: "C++ (learning)" }] },
    { group: { it: "CFD", en: "CFD" }, items: ["SU2", "OpenFOAM (simpleFoam, snappyHexMesh)", "RANS: k-ω SST, Spalart–Allmaras", { it: "Convergenza di griglia (GCI)", en: "Grid convergence (GCI)" }, "ParaView"] },
    { group: { it: "CAD", en: "CAD" }, items: ["SolidWorks", "Solid Edge", "AutoCAD"] },
    { group: { it: "Simulazione e controllo", en: "Simulation & control" }, items: ["Simulink", "MPC", "Vehicle Dynamics Blockset"] },
    { group: { it: "Sperimentale", en: "Experimental" }, items: [{ it: "Prove in galleria del vento", en: "Wind tunnel testing" }, { it: "Estensimetri", en: "Strain gauges" }] }
  ],

  education: [
    { when: { it: "2025 – Apr 2027", en: "2025 – Apr 2027" },
      title: { it: "Laurea Magistrale in Ingegneria Aeronautica", en: "MSc in Aeronautical Engineering" },
      where: "Politecnico di Milano",
      note: { it: "Focus su CFD, aeroelasticità e turbolenza. Tesi in corso.", en: "Focus on CFD, aeroelasticity and turbulence. Thesis ongoing." } },
    { when: { it: "Mar 2025", en: "Mar 2025" },
      title: { it: "Laurea Triennale in Ingegneria Aerospaziale", en: "BSc in Aerospace Engineering" },
      where: "Politecnico di Milano", note: null },
    { when: { it: "Lingue", en: "Languages" }, title: null, where: null,
      lines: [
        { it: "<strong>Italiano</strong>: madrelingua", en: "<strong>Italian</strong>: native" },
        { it: "<strong>Inglese</strong>: C1 — Cambridge B2 First Certificate (2020)", en: "<strong>English</strong>: C1 — Cambridge B2 First Certificate (2020)" },
        { it: "<strong>Olandese</strong>: B1", en: "<strong>Dutch</strong>: B1" }
      ] }
  ],

  about: {
    it: "Mi interessano l'aerodinamica e la fluidodinamica computazionale applicate al motorsport e all'aeronautica, con l'obiettivo di lavorare come aerodinamico o CFD engineer, con disponibilità da aprile–maggio 2027. Ho doppia cittadinanza italiana e olandese e sono disponibile a trasferirmi all'estero. Nel tempo libero mi alleno e gioco a basket.",
    en: "I am interested in aerodynamics and computational fluid dynamics applied to motorsport and aeronautics, aiming to work as an aerodynamicist or CFD engineer, available from April–May 2027. I hold dual Italian–Dutch citizenship and am open to relocating abroad. In my free time I train and play basketball."
  }
};
