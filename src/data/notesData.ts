export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface NoteItem {
  id: string;
  partId: string;
  partTitle: string;
  sectionNumber: string;
  sectionTitle: string;
  topicNumber: string;
  topicTitle: string;
  marks?: string; // e.g. "2 Marks", "4 Marks", "9 Marks Essay"
  rawText: string;
  examCallout?: string[];
  lastMinuteRevision?: string[];
  flowchart?: string[];
  table?: TableData;
  chemicalEquations?: string[];
  has3DModel?: string; // model key if applicable
}

export interface PartInfo {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  pageRange: string;
  badge: string;
}

export const PARTS_INFO: PartInfo[] = [
  {
    id: "part-1",
    title: "DENTAL MATERIALS EXAMINATION CRASH NOTES",
    subtitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    tagline: "Strictly Grounded in Basic Dental Materials (4th Edition by John J. Manappallil)",
    description: "Physical & mechanical properties, biological considerations, amalgam fundamentals, direct gold, and impression physics.",
    pageRange: "Pages 1 – 12",
    badge: "Module 1"
  },
  {
    id: "part-2",
    title: "Basic Dental Materials — Theoretical Crash Notes (Part 2)",
    subtitle: "High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    tagline: "High-Yield Exam Notes with Tables, Flowcharts & Reactions",
    description: "Models, dies, gypsum products, casting investments, defects, alloys, abrasives, ceramics, soldering, and polymers.",
    pageRange: "Pages 13 – 22",
    badge: "Module 2"
  },
  {
    id: "part-3",
    title: "BASIC DENTAL MATERIALS",
    subtitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    tagline: "Grounded in Basic Dental Materials (4th Ed. by John J. Manappallil) | Targeted Exam Preparation",
    description: "Dental cements, pulp protection, high-copper amalgam, composite resins, elastomeric impressions, and dental waxes.",
    pageRange: "Pages 23 – 38",
    badge: "Module 3"
  },
  {
    id: "part-4",
    title: "DENTAL MATERIALS CRASH NOTES (PART 2)",
    subtitle: "High-Yield Exam Notes: Sections 7 to 12 (2-Mark & 4-Mark Topics)",
    tagline: "Grounded in Basic Dental Materials (4th Edition by John J. Manappallil)",
    description: "Refractory investments, Co-Cr & NiTi alloys, polishing & dentifrices, modern ceramics, implants, and denture resins.",
    pageRange: "Pages 39 – 59",
    badge: "Module 4"
  },
  {
    id: "part-5",
    title: "DENTAL MATERIALS — 9-MARK ESSAYS • CRASH COURSE",
    subtitle: "Two high-yield answers | structured flowcharts | exam-focused tables",
    tagline: "BDS revision notes • Verify exact values with prescribed textbook",
    description: "Master 9-mark essays on Impression Materials Classification & Heat-Activated Denture Base Acrylic Resins + Checklist.",
    pageRange: "Pages 60 – 69",
    badge: "Module 5"
  },
  {
    id: "part-6",
    title: "DENTAL MATERIALS EXAMINATION CRASH NOTES",
    subtitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    tagline: "Basic Dental Materials (4th Ed.) — Crash Exam Notes",
    description: "Standardized 26 core procedures and instruments: hardness, luting, pulp capping, acid etch, sandwich technique, casting machines, flame zones, and impression essay.",
    pageRange: "Pages 70 – 83",
    badge: "Module 6"
  }
];

export const ALL_NOTES: NoteItem[] = [
  // =========================================================================
  // PART 1 (Pages 1 - 12)
  // =========================================================================
  {
    id: "p1-1-1",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "1",
    sectionTitle: "Dental Materials: Physical and Mechanical Properties",
    topicNumber: "1.1",
    topicTitle: "Stress–Strain Curve",
    marks: "2 Marks",
    rawText: `• Definition: A graphical plot representing the relationship between internal stress (internal resistance per unit area) generated within a material and the resulting strain (deformation per unit length) when subjected to an external load.
• Key Regions & Points on the Curve:
• • Proportional Limit: The highest stress at which stress is directly proportional to strain (Hooke's law applies).
• • Elastic Limit: The maximum stress a material can withstand without undergoing permanent plastic deformation upon unloading.
• • Yield Strength: The stress at which a material exhibits a specified permanent plastic strain (typically 0.2% offset yield strength).
• • Ultimate Strength: The maximum stress the material can sustain before fracture occurs.
• Energy Calculations: The area under the elastic portion represents Resilience (ability to absorb energy elastically without permanent distortion), while the total area under the entire stress-strain curve represents Toughness (total energy required to fracture the material).`,
    examCallout: [
      "Proportional Limit = Start of non-linear behavior.",
      "Yield Strength = Stress level at 0.2% permanent plastic strain.",
      "Area under Elastic Curve = Resilience; Total Area = Toughness."
    ]
  },
  {
    id: "p1-1-2",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "1",
    sectionTitle: "Dental Materials: Physical and Mechanical Properties",
    topicNumber: "1.2",
    topicTitle: "Surface Tension, Wetting and Contact Angle",
    marks: "2 Marks",
    rawText: `• Definition: Surface tension is the cohesive thermodynamic force at a liquid-gas interface. Wetting is the ability of a liquid to spread across a solid surface. Contact Angle (θ) is the internal angle formed between the liquid droplet edge and the solid surface at the contact boundary.
• Scientific Principle & Contact Angle Values:
• • Excellent Wetting (θ = 0°): Liquid spreads completely into a thin film (high solid surface energy + low liquid surface tension).
• • Poor Wetting (θ > 90°): Liquid beads up into spherical drops (e.g. mercury on tooth enamel or water on impression wax).
• Clinical Significance: Low contact angle is essential for gypsum slurry to wet elastomeric impressions without air bubble entrapment, and for resin bonding agents to wet acid-etched enamel/dentin.`,
    examCallout: [
      "Good Wetting = Contact Angle θ < 90° (Ideal θ = 0°).",
      "High Solid Surface Energy + Low Liquid Surface Tension = Maximum Spreading.",
      "Acid etching increases enamel surface energy, enhancing resin wetting."
    ]
  },
  {
    id: "p1-1-3",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "1",
    sectionTitle: "Dental Materials: Physical and Mechanical Properties",
    topicNumber: "1.3",
    topicTitle: "Poisson’s Ratio",
    marks: "2 Marks",
    rawText: `• Definition: The absolute ratio of transverse (lateral) strain to axial (longitudinal) strain when a material is subjected to uniaxial tensile or compressive loading.
• Mathematical Formula: Poisson's Ratio (ν) = - (Lateral Strain / Axial Strain).
• Representative Dental Values: Most rigid dental materials and tooth structures exhibit values between 0.25 and 0.35 (theoretical maximum for an ideal incompressible elastic solid is 0.50).
• Clinical Significance: When a metallic or composite restoration is compressed occlusally, it expands laterally against cavity walls, creating lateral wall stresses.`,
    examCallout: [
      "Poisson's Ratio = Transverse Strain / Axial Strain.",
      "Typical dental values = 0.25 to 0.35.",
      "Explains lateral expansion of restorations under occlusal compressive force."
    ]
  },
  {
    id: "p1-1-4",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "1",
    sectionTitle: "Dental Materials: Physical and Mechanical Properties",
    topicNumber: "1.4",
    topicTitle: "Modulus of Elasticity and Yield Strength",
    marks: "2 Marks",
    rawText: `• Modulus of Elasticity (Young's Modulus, E): A measure of the stiffness or rigidity of a material within its elastic range. Defined as the ratio of stress to strain (E = Stress / Strain). Higher values indicate a stiffer material (e.g., Enamel = 84 GPa, Co-Cr = 220 GPa; Dentin = 18 GPa).
• Yield Strength: The stress level at which a material transitions from elastic behavior to permanent plastic deformation (measured at 0.2% offset).
• Clinical Applications: High elastic modulus is required for ceramic crown cores and partial denture frameworks to prevent flexing under occlusal load. High yield strength prevents permanent deformation of clasps and restoration margins.
• Enamel E = 84 GPa, Dentin E = 18 GPa, Co-Cr E = 220 GPa.`,
    examCallout: [
      "Modulus of Elasticity = Stiffness (Stress / Strain).",
      "Yield Strength = Stress required for 0.2% permanent plastic deformation."
    ]
  },
  {
    id: "p1-1-5",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "1",
    sectionTitle: "Dental Materials: Physical and Mechanical Properties",
    topicNumber: "1.5",
    topicTitle: "Shear Strength",
    marks: "2 Marks",
    rawText: `• Definition: The maximum stress a material can withstand under parallel sliding or twisting forces before slipping or failing along a plane interface.
• Mathematical Formula: Shear Stress (τ) = Applied Force (F) / Parallel Cross-Sectional Area (A).
• Clinical Applications: Extremely critical at adhesive bonding interfaces (e.g., enamel-composite or ceramic-metal bonding). The shear bond strength of composite to etched enamel is typically 20–25 MPa.`,
    examCallout: [
      "Shear Strength = Resistance to parallel sliding forces.",
      "Formula: τ = Force / Parallel Area.",
      "Standard Enamel-Resin Shear Bond Strength = 20–25 MPa."
    ]
  },
  {
    id: "p1-1-6",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "1",
    sectionTitle: "Dental Materials: Physical and Mechanical Properties",
    topicNumber: "1.6",
    topicTitle: "Colour: Hue, Value and Chroma",
    marks: "2 Marks",
    rawText: `• Definition & Munsell Dimensions: The three fundamental dimensions used to describe tooth and restorative material optical appearance:
• • Hue: The dominant wavelength or basic color family name (e.g. Red, Yellow; Vita shades A, B, C, D).
• • Value: The relative lightness or darkness of a color (scale 0 = pure black, 10 = pure white). Value is the single most critical dimension in shade matching.
• • Chroma: The degree of saturation, intensity, or purity of a specific hue (e.g. shade A1 has low chroma, A4 has high chroma).
• Clinical Precaution: Human eyes perceive Value differences first; an error in Value selection is far more noticeable than a slight error in Hue or Chroma.`,
    examCallout: [
      "Hue = Dominant color/wavelength (A, B, C, D).",
      "Value = Lightness/Darkness (0-10 scale) -> MOST CRITICAL SHADE DIMENSION.",
      "Chroma = Color saturation/intensity (A1 vs A4)."
    ]
  },
  {
    id: "p1-1-7",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "1",
    sectionTitle: "Dental Materials: Physical and Mechanical Properties",
    topicNumber: "1.7",
    topicTitle: "Rheology: Creep and Flow",
    marks: "2 Marks",
    rawText: `• Rheology Definition: The study of the deformation and flow of matter under applied stress.
• Creep: Time-dependent permanent plastic deformation of a fully set/solid material subjected to a continuous or cyclic static load below its yield strength (e.g. set dental amalgam under masticatory force).
• Flow: Time-dependent deformation of an unset, amorphous, or wax-like material under its own weight or small static load (e.g. impression compound, inlay wax at mouth temperature).
• Clinical Distinction: Creep applies to set solids over long periods; Flow applies to unset/amorphous thermoplastic materials during manipulation.`,
    examCallout: [
      "Creep = Time-dependent deformation of SET solid materials under load.",
      "Flow = Time-dependent deformation of UNSET or amorphous thermoplastic materials.",
      "Low-copper amalgam creep = 6.0%; High-copper amalgam creep = <0.5%."
    ]
  },
  {
    id: "p1-1-8",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "1",
    sectionTitle: "Dental Materials: Physical and Mechanical Properties",
    topicNumber: "1.8",
    topicTitle: "Tarnish and Corrosion",
    marks: "4 Marks",
    rawText: `• Definitions:
• • Tarnish: A surface discoloration or loss of metallic luster caused by thin film formation (oxides, sulfides, chlorides) without loss of underlying mechanical integrity.
• • Corrosion: Actual chemical or electrochemical destruction and disintegration of a metallic material in an oral electrolyte environment, leading to severe loss of mechanical properties.
• Classification / Types of Corrosion:
• 1. Chemical (Dry) Corrosion: Direct oxidation or gas reaction at high temperatures.
• 2. Electrochemical (Wet) Corrosion: Requires anode, cathode, electrolyte (saliva), and electrical conductor. Includes Galvanic, Stress, Crevice, and Intergranular corrosion.
• Corrosion Susceptibility in Amalgam: In low-copper amalgams, the Sn-Hg (γ2) phase is extremely prone to corrosion. In high-copper amalgams, γ2 is eliminated and replaced by Cu6Sn5 (η phase), which corrodes at a drastically lower rate.
• Prevention Methods: Achieving a smooth, high-luster polish (Beilby layer), using high noble alloys (>60% Au, Pt, Pd), good oral hygiene, and avoiding dissimilar occluding metals.`,
    examCallout: [
      "Tarnish = Surface discoloration only (no loss of mechanical strength).",
      "Corrosion = Structural destruction via chemical/electrochemical attack.",
      "γ2 phase (Sn8Hg) = Most corrosion-susceptible phase in low-copper amalgam.",
      "High polish minimizes tarnish and corrosion by reducing surface area."
    ]
  },
  {
    id: "p1-1-9",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "1",
    sectionTitle: "Dental Materials: Physical and Mechanical Properties",
    topicNumber: "1.9",
    topicTitle: "Galvanic Corrosion",
    marks: "4 Marks",
    rawText: `• Definition: An electrochemical corrosion process that occurs when two metallic restorations of dissimilar composition come into direct contact or are bridged by an electrolyte (saliva), creating a galvanic cell.
• Components of a Dental Galvanic Cell:
• • Anode: The less noble metal (lower electrode potential) that oxidizes, releases ions, and corrodes.
• • Cathode: The more noble metal (higher electrode potential) that serves as the electron reduction site.
• • Electrolyte: Saliva containing dissolved Na+, Cl-, and K+ ions.
• • Circuit: Soft tissues and fluid inter-tooth contacts complete the electrical path.
• Clinical Symptoms & Effects:
• • Galvanic Shock: Sharp, shooting pain caused by electrical current flow through the dentin to the pulp when an amalgam restoration occludes with a gold crown.
• • Other Effects: Metallic/battery taste, mucosal burning, and accelerated corrosion of the anodic restoration.
• Prevention: Avoid placing dissimilar metals in opposing or adjacent contacting teeth; insulate cavity floors with insulating bases/liners; utilize non-metallic or matching noble alloys.`,
    examCallout: [
      "Galvanic Cell = Anode (corrodes) + Cathode (protected) + Saliva (electrolyte) + Tissue Circuit.",
      "Galvanic Shock = Current passing through pulp when dissimilar metals touch.",
      "Prevention = Insulating bases, avoiding gold-amalgam contact."
    ]
  },
  {
    id: "p1-2-1",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "2",
    sectionTitle: "Biological Properties of Dental Materials",
    topicNumber: "2.1",
    topicTitle: "Microleakage",
    marks: "2 Marks",
    rawText: `• Definition: The microscopic, non-detectable passage of bacteria, fluids, oral debris, molecules, and ions between cavity preparation walls and the restorative material margin.
• Major Causes: Polymerization shrinkage of composites, coefficient of thermal expansion mismatch (thermal percolation), dissolution of luting cements, or improper adaptation/condensation.
• Clinical Sequelae: Postoperative pain and sensitivity, recurrent (secondary) caries, pulpal inflammation/necrosis, and marginal staining.`,
    examCallout: [
      "Microleakage = Microscopic fluid/bacterial ingress at restoration margin.",
      "Causes = Polymerization shrinkage, thermal expansion mismatch, cement dissolution.",
      "Consequences = Hypersensitivity, secondary caries, pulpitis."
    ]
  },
  {
    id: "p1-2-2",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "2",
    sectionTitle: "Biological Properties of Dental Materials",
    topicNumber: "2.2",
    topicTitle: "Toxicity Evaluation",
    marks: "4 Marks",
    rawText: `• Definition & Purpose: A standardized 3-tiered evaluation system governed by ISO 7405 and ANSI/ADA Specification standards designed to thoroughly evaluate the biocompatibility, cellular safety, and systemic toxicity of dental materials before clinical usage.
• Level I Tests (Initial Screening Tests):
• • In Vitro Cytotoxicity: Evaluates cell lysis and vitality using cultured cells (L-929 mouse fibroblasts or HeLa cells). Techniques include Agar Overlay Technique (clear zone of dead cells indicates toxicity), Millipore filter assay, or direct contact.
• • Systemic Toxicity & Mutagenicity: Acute oral LD50 testing in rodents, Ames test for mutagenicity/carcinogenicity, and hemolysis assays.
• Level II Tests (Secondary / Usage Tests in Animals): Materials are tested in experimental animals (primates, dogs, rats) under conditions simulating human clinical usage. Example: Class V cavity preparations in monkeys evaluated for pulpal inflammatory response at 1, 14, and 56 days compared against positive (silicate) and negative (ZOE) controls.
• Level III Tests (Human Clinical Trials): Controlled clinical trials in human subjects to monitor long-term safety, therapeutic efficacy, tissue compatibility, and adverse allergic or inflammatory responses under actual clinical operation.`,
    examCallout: [
      "Level I = Screening (In vitro cell culture, Agar overlay, rodent LD50).",
      "Level II = Usage tests in animals (Class V cavity pulpal response in primates).",
      "Level III = Clinical trials in human subjects.",
      "Positive control = Silicate cement; Negative control = ZOE cement."
    ]
  },
  {
    id: "p1-3-1",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "3",
    sectionTitle: "Amalgam: Theoretical Concepts",
    topicNumber: "3.1",
    topicTitle: "Microleakage in Dental Amalgam",
    marks: "4 Marks",
    rawText: `• Definition & Unique Self-Sealing Feature: Microleakage in dental amalgam is initially high upon placement but exhibits a unique dynamic property where it progressively DECREASES over time in the oral cavity.
• Mechanism of Self-Sealing: As the amalgam restoration undergoes slow electrochemical corrosion in saliva, insoluble corrosion byproducts—primarily tin hydroxychloride, tin oxide, and tin sulfide—precipitate and pack tightly into the micro-crevice between cavity walls and amalgam.
• Timeframe: Self-sealing marginal seal is achieved within 6 to 12 months after placement.
• Factors Increasing Initial Leakage: High mercury-to-alloy ratio, inadequate condensation pressure, under-trituration, and failure to apply cavity varnish.
• Clinical Role of Cavity Varnish: Applying two thin layers of copal cavity varnish (or resin adhesive) seals dentinal tubules and prevents initial microleakage during the first few months until corrosion products form.`,
    examCallout: [
      "Initial Microleakage = HIGH; Long-Term Microleakage = LOW (Self-Sealing).",
      "Self-Sealing Mechanism = Accumulation of corrosion products (tin hydroxychloride).",
      "Copal Varnish = Seals margin temporarily for first 6-12 months."
    ]
  },
  {
    id: "p1-3-2",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "3",
    sectionTitle: "Amalgam: Theoretical Concepts",
    topicNumber: "3.2",
    topicTitle: "Delayed Expansion (Secondary Expansion)",
    marks: "4 Marks",
    rawText: `• Definition: A severe, secondary volumetric expansion (>400 µm/cm or >0.15–4.0%) occurring 3 to 5 days after placement in zinc-containing amalgam contaminated with moisture during trituration or condensation.
• Chemical Reaction & Gas Formation Mechanism:
• • Chemical Equation: Zn + H2O → ZnO + H2 (gas) ↑
• • Internal Gas Pressure: Hydrogen gas released from the reaction does not combine with the amalgam matrix. Instead, it accumulates inside the setting mass, generating extreme internal pressure that forces the amalgam mass to expand outward.
• Clinical Consequences: Severe postoperative dental pain (pressure on pulp/dentin), protrusion of restoration above cavity margins, increased creep, severe microleakage, pitted surface corrosion, secondary caries, and tooth/cavity wall fracture.
• Prevention & Zinc-Free Alloys: Maintain strict rubber dam moisture isolation. Use Zinc-Free alloys in subgingival cavities, pediatric uncooperative patients, or retrograde root canal fillings where moisture control is impossible.`,
    chemicalEquations: ["Zn + H2O → ZnO + H2 (gas) ↑"],
    examCallout: [
      "Triggers = Zinc-containing alloy + Moisture contamination during placement.",
      "Reaction = Zn + H2O -> ZnO + H2 gas ↑.",
      "Timeline = Begins after 3–5 days, continues for months (>400 µm/cm).",
      "Prevention = Rubber dam or Zinc-free amalgam alloys."
    ]
  },
  {
    id: "p1-3-3",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "3",
    sectionTitle: "Amalgam: Theoretical Concepts",
    topicNumber: "3.3",
    topicTitle: "Creep in Dental Amalgam",
    marks: "4 Marks",
    rawText: `• Definition: Time-dependent permanent plastic strain or slow deformation of set amalgam subjected to continuous or cyclic masticatory stresses below its yield strength.
• ISO/ADA Testing Specification: Tested on a 7-day-old cylindrical specimen under a static load of 36 MPa at 37°C for 1 to 4 hours. Maximum permissible creep is 3.0%.
• Metallurgical & Phase Mechanism:
• • Low-Copper Amalgam (~6.0% Creep): Contains the Sn-Hg (γ2) phase, which undergoes rapid, continuous grain boundary sliding and deformation.
• • High-Copper Amalgam (<0.5% Creep): Eliminates the γ2 phase. The Cu6Sn5 (η) rod-like crystals act as mechanical barriers that interlock γ1 grains, preventing plastic deformation.
• Clinical Significance (Marginal Ditching): High creep causes amalgam to squeeze out of the cavity prep under occlusal force. Overhanging thin edges fracture under chewing, creating 'marginal ditching' and recurrent caries.`,
    examCallout: [
      "Low-Copper Amalgam Creep = ~6.0% (driven by γ2 phase).",
      "High-Copper Amalgam Creep = <0.5% (γ2 eliminated, η rods prevent slip).",
      "Clinical Result of High Creep = Marginal ditching & recurrent caries."
    ]
  },
  {
    id: "p1-3-4",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "3",
    sectionTitle: "Amalgam: Theoretical Concepts",
    topicNumber: "3.4",
    topicTitle: "Mercury Toxicity",
    marks: "4 Marks",
    rawText: `• Definition & Primary Hazard: Mercury (Hg) is a heavy metal poison. In dentistry, the primary toxic hazard arises from the inhalation of elemental mercury vapor (rapidly absorbed across lungs into blood and CNS).
• Threshold Limit Value (TLV): 0.05 mg/m³ (50 µg/m³) for an 8-hour workday (40-hour work week).
• Routes of Dental Exposure:
• 1. Vapor Inhalation: During mechanical trituration, carpet spills, or dry removal of old restorations without water spray.
• 2. Skin Contact: Direct handling of fresh amalgam mass (absorption through skin).
• Chronic Toxicity Symptoms (Erethism / Micromercurialism): Fine muscle tremors (hands/tongue), emotional instability, irritability, memory loss, stomatitis, excessive salivation, metallic taste, and renal impairment.
• Mercury Hygiene Rules: Use preproportioned sealed capsules; amalgamators with protective hoods; high-volume suction (HVE) and water spray during removal; store scrap amalgam under water or sulfide solutions in airtight containers; clean spills with sulfur powder.`,
    examCallout: [
      "Primary Exposure Route = Vapor inhalation (TLV = 0.05 mg/m³).",
      "Erethism = Chronic toxicity (tremors, irritability, stomatitis).",
      "Hygiene = Water spray + HVE during removal, preproportioned capsules, sulfur spill kit."
    ]
  },
  {
    id: "p1-3-5",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "3",
    sectionTitle: "Amalgam: Theoretical Concepts",
    topicNumber: "3.5",
    topicTitle: "Flow in Amalgam",
    marks: "2 Marks",
    rawText: `• Definition: The percentage of permanent plastic deformation experienced by a fresh, early-setting amalgam specimen when subjected to a static compressive load (4 MPa) applied 3 hours after mixing for 21 hours.
• Distinction from Creep: Flow measures plastic deformation during early setting (first 24 hours), whereas Creep measures deformation of fully set amalgam.
• Specification Limit: ADA Specification No. 1 limits flow to a maximum of 3.0%.`,
    examCallout: [
      "Flow = Deformation during EARLY SETTING phase (first 24 hours).",
      "Creep = Deformation of FULLY SET amalgam.",
      "ADA Spec limit = Max 3.0% flow."
    ]
  },
  {
    id: "p1-4-1",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "4",
    sectionTitle: "Direct Filling Gold",
    topicNumber: "4.1",
    topicTitle: "Degassing / Degolding (Desorbing / Annealing)",
    marks: "4 Marks",
    rawText: `• Definition: The process of heating direct filling gold immediately prior to compaction to drive off volatile adsorbed surface gases (ammonia, moisture, sulfur dioxide) and restore pure, cohesive 'sticky' gold character.
• Scientific Principle: Pure gold has high surface energy and naturally cold-welds at room temperature. During storage, gold adsorbs atmospheric gases that act as a barrier to cohesion. Heating desorbs these surface contaminants.
• Heating Methods:
• • Electric Annealer: Bulk heating on a tray with individual compartments at 340°C to 370°C for 5 to 20 minutes.
• • Flame Desorption: Individual gold pellets held on a sharp non-oxidizing needle directly in a pure alcohol flame (ethanol/methanol) until a dull red glow is achieved.
• Errors & Consequences:
• • Under-heating: Incomplete gas removal -> poor inter-layer cohesion, flaking restoration.
• • Over-heating: Oversintering, embrittlement, tray contamination -> poor compaction, loss of workability.`,
    examCallout: [
      "Purpose = Remove adsorbed gases (ammonia/moisture) to allow cold-welding.",
      "Electric Annealer = 340–370°C for 5–20 minutes.",
      "Under-heating = Poor cohesion; Over-heating = Embrittlement/sintering."
    ]
  },
  {
    id: "p1-4-2",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "4",
    sectionTitle: "Direct Filling Gold",
    topicNumber: "4.2",
    topicTitle: "Applications of Direct Filling Gold",
    marks: "2 Marks",
    rawText: `• Clinical Indications:
• 1. Small Class I pit and fissure restorations.
• 2. Class III and Class V gingival restorations in non-esthetic areas.
• 3. Repair of cast gold restoration margins and crown vent/perforation holes.
• 4. Class VI incisal edge restorations.
• Contraindications: Teeth with large pulp chambers, periodontally compromised teeth, brittle endodontically treated teeth, and uncooperative patients.`,
    examCallout: [
      "Pits, small Class I, Class III, Class V, repair of gold crown margins.",
      "Contraindicated in large pulps, brittle root-filled teeth, periodontally weak teeth."
    ]
  },
  {
    id: "p1-5-1",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "5",
    sectionTitle: "Composite Resins and Bonding Agents",
    topicNumber: "5.1",
    topicTitle: "Polymerisation Shrinkage",
    marks: "4 Marks",
    has3DModel: "cavity-sandwich",
    rawText: `• Definition & Volumetric Cause: Volumetric contraction occurring during composite resin light-curing as van der Waals intermolecular distances between monomers (3–4 Å) convert into covalent polymer bonds (1.5 Å).
• Volumetric Magnitude: Unfilled acrylic resins shrink ~21%; microfilled composites ~2–3%; hybrid/nanocomposites 1.5–2.5%.
• Configuration Factor (C-Factor):
• • Formula: C-Factor = Bonded Cavity Surfaces / Unbonded (Free) Cavity Surfaces.
• • Clinical Significance: High C-Factor (e.g. Class I box = 5/1 = 5) restricts stress relief, generating immense contraction stress that causes marginal gaps, enamel microcracks, and postoperative pain.
• Methods to Minimize Shrinkage Stress:
• 1. Incremental Layering Technique (placing layers <= 2 mm thick).
• 2. Controlled Curing Protocols (Soft-start or ramped light curing).
• 3. Stress-relieving low-shrinkage monomers (Siloranes, ORMOCERs).
• 4. Placing a GIC base underneath (Sandwich technique).`,
    examCallout: [
      "Monomer van der Waals (3-4 Å) -> Covalent polymer bond (1.5 Å).",
      "C-Factor = Bonded / Unbonded surfaces (Class I = 5/1 = High Stress).",
      "Prevention = Incremental layering <= 2 mm, soft-start curing, GIC base."
    ]
  },
  {
    id: "p1-5-2",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "5",
    sectionTitle: "Composite Resins and Bonding Agents",
    topicNumber: "5.2",
    topicTitle: "Adhesion and Mechanical Bonding",
    marks: "4 Marks",
    rawText: `• Definitions:
• • Adhesion: The attraction force joining two dissimilar molecules or materials in intimate surface contact.
• • Mechanical Bonding: Interlocking or keying of an adhesive into microscopic surface irregularities/porosities of a substrate.
• Enamel Bonding Mechanism (Acid-Etch Technique): 37% Phosphoric acid application for 15 seconds dissolves hydroxyapatite prism cores/peripheries (Etch Patterns I, II, III), creating 10–30 µm deep microporosities. Low-viscosity resin penetrates by capillary action to form **Resin Tags** (~20–25 MPa shear bond strength).
• Dentin Bonding Mechanism (Hybrid Layer): Etching removes the smear layer and demineralizes 3–5 µm of superficial dentin, exposing collagen fibers. Hydrophilic primer (HEMA) infiltrates collagen, followed by adhesive resin which co-polymerizes to form the **Hybrid Layer (Resin-Infiltrated Dentin Zone)** and resin micro-tags in dentinal tubules.`,
    examCallout: [
      "Enamel Bonding = 37% H3PO4 acid etch -> Micro-porosities -> Resin Tags (20-25 MPa).",
      "Dentin Bonding = Acid etch smear layer removal -> Exposed collagen -> HEMA Primer -> Hybrid Layer + Micro-tags.",
      "Hybrid Layer = Resin-infiltrated demineralized dentin zone."
    ]
  },
  {
    id: "p1-6-1",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "6",
    sectionTitle: "Impression Materials",
    topicNumber: "6.1",
    topicTitle: "Fusion Temperature of Impression Compound",
    marks: "2 Marks",
    rawText: `• Definition: The specific temperature range at which impression compound transitions from a rigid, brittle solid state into a soft, plastic, moldable state capable of taking an impression.
• Specific Values: Impression compound begins softening at 39°C and reaches plastic flow for clinical manipulation above 43.5°C.
• Clinical Significance: Compound must be heated above 43.5°C in a water bath to make an impression, and allowed to cool thoroughly in the mouth below 39°C before removal to avoid permanent deformation.`,
    examCallout: [
      "Fusion Temperature Range = Softens at 39°C; Plastic flow above 43.5°C.",
      "Must cool below 39°C in mouth before removal to prevent distortion."
    ]
  },
  {
    id: "p1-6-2",
    partId: "part-1",
    partTitle: "Part 1: Theoretical Concepts & Fundamentals (2-Mark & 4-Mark Answers)",
    sectionNumber: "6",
    sectionTitle: "Impression Materials",
    topicNumber: "6.2",
    topicTitle: "Syneresis and Imbibition",
    marks: "4 Marks",
    rawText: `• Definitions:
• • Syneresis: The loss of water by exudation/evaporation from a hydrocolloid gel, accompanied by gel contraction and shrinkage.
• • Imbibition: The absorption of water by a hydrocolloid gel when immersed in water, accompanied by swelling and dimensional expansion.
• Mechanism in Hydrocolloid Gels (Agar & Alginate): Hydrocolloid gels consist of a polysaccharide fibrillar network enclosing ~80–85% water. When exposed to air, water evaporates from matrix pores (*Syneresis*), causing shrinkage. When submerged in water, water enters the matrix by osmosis (*Imbibition*), causing swelling.
• Clinical Significance & Storage Guidelines: Hydrocolloid impressions are dimensionally unstable in dry air or submerged water. Impressions must be **poured with dental stone immediately (within 10–12 minutes)**. If temporary delay is unavoidable, store in **100% relative humidity** (wrapped in a damp paper towel) for no longer than 30 minutes.`,
    examCallout: [
      "Syneresis = Water loss + Shrinkage (in dry air).",
      "Imbibition = Water absorption + Swelling (when submerged in water).",
      "Clinical Storage = Pour immediately (within 10-12 mins) or store in 100% humidity max 30 mins."
    ]
  },

  // =========================================================================
  // PART 2 (Pages 13 - 22)
  // =========================================================================
  {
    id: "p2-1-1",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "1",
    sectionTitle: "Model, Cast and Die Materials",
    topicNumber: "1.1",
    topicTitle: "Cast",
    marks: "2 Marks",
    has3DModel: "crown-die",
    rawText: `• Definition: A positive, life-size 3D anatomical replica of the teeth and/or surrounding soft and hard tissues of a dental arch, poured from an elastomeric or hydrocolloid impression using dental stone (Type III, IV, or V).
• Purpose & Clinical Applications: Acts as a working foundation for fabricating full dentures, removable partial denture (RPD) frameworks, orthodontic appliances, and diagnostic study models.
• Key Requirements: High compressive strength (>20 MPa), high surface hardness, excellent dimensional stability, and fine surface detail reproduction.`,
    examCallout: [
      "Definition: Life-size positive replica of an entire dental arch.",
      "Main Material Used: Type III Dental Stone or Type IV Die Stone.",
      "Key Properties: High strength, low setting expansion (0.08–0.15%), bubble-free surface."
    ]
  },
  {
    id: "p2-1-2",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "1",
    sectionTitle: "Model, Cast and Die Materials",
    topicNumber: "1.2",
    topicTitle: "Types of Dies",
    marks: "2 Marks",
    has3DModel: "crown-die",
    rawText: `• Definition: A positive replica of a single prepared tooth (or teeth) on which an indirect restoration (crown, inlay, onlay, veneer) is fabricated in the dental laboratory.
• Classification of Die Materials:
• 1. Gypsum Dies: Type IV (High Strength, Low Expansion) and Type V (High Strength, High Expansion) dental stones. Most common, easy to handle, susceptible to abrasion.
• 2. Electroformed / Electroplated Dies: Copper-plated dies (for compound/elastomeric impressions) and Silver-plated dies (for polysulfide impressions). Extremely hard, abrasion-resistant, crisp margins.
• 3. Epoxy Resin Dies: Two-component resin-hardener system. Superior abrasion resistance and tensile strength compared to gypsum; slight polymerization shrinkage (~0.1%).
• 4. Refractory Dies: High-temperature phosphate/silica-bonded investment material used for direct ceramic veneer and porcelain inlay fabrication without a metal foil.
• 5. Digital / CAD-CAM Milled Dies: Computer-milled resin or 3D-printed polyurethane dies produced from intraoral optical digital scans.`
  },
  {
    id: "p2-2-1",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "2",
    sectionTitle: "Gypsum Products",
    topicNumber: "2.1",
    topicTitle: "Classification of Gypsum Products",
    marks: "2 Marks",
    rawText: `• Standard Classification (ISO 6873 / ANSI/ADA Specification No. 25):
• • Type 1 (Impression Plaster): Beta-hemihydrate; unconfined W:P ratio ~0.60; low strength (~6 MPa); high setting expansion (~0.15%); obsolete for primary impressions.
• • Type 2 (Model Plaster): Beta-hemihydrate; porous irregular crystals; W:P ratio 0.45–0.50; compressive strength ~9 MPa; used for study casts and flasking.
• • Type 3 (Dental Stone): Alpha-hemihydrate; uniform prismatic crystals; W:P ratio 0.28–0.30; compressive strength ~20.7 MPa; used for diagnostic casts and denture master casts.
• • Type 4 (Dental Stone, High Strength, Low Expansion): Alpha-modified hemihydrate (die stone); dense cuboidal particles; W:P ratio 0.22–0.24; compressive strength ~34.5 MPa; setting expansion ~0.10%; used for crown & bridge dies.
• • Type 5 (Dental Stone, High Strength, High Expansion): Alpha-modified hemihydrate; W:P ratio 0.18–0.22; compressive strength ~48 MPa; high setting expansion (~0.18–0.30%) to compensate for high casting shrinkage of base metal alloys.`
  },
  {
    id: "p2-2-2",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "2",
    sectionTitle: "Gypsum Products",
    topicNumber: "2.2",
    topicTitle: "Accelerators and Retarders of Gypsum",
    marks: "4 Marks",
    rawText: `• Definition: Chemical additives incorporated into gypsum powder or mixing water to modify the rate of dissolution and crystallization, thereby shortening (accelerating) or prolonging (retarding) the setting time.
• Accelerators: Chemicals that increase the dissolution rate of hemihydrate, causing rapid supersaturation and dihydrate nucleus formation.
• • Potassium Sulfate (K2SO4, 2%): Most effective accelerator; increases dissolution rate of hemihydrate dramatically.
• • Terra Alba (0.5–1% set gypsum dihydrate fine crystals): Provides ready-made seed nuclei for crystallization, eliminating the induction period.
• • Slurry Water: Water from model trimmer containing saturated gypsum fine particles.
• Retarders: Chemicals that inhibit hydration by forming protective coatings on hemihydrate particles or poisoning dihydrate growth sites.
• • Borax (Sodium Tetraborate, 1–2%): Most potent retarder; forms insoluble calcium borate film around hemihydrate.
• • Citrates & Acetates (Potassium Citrate): Precipitate calcium ions as insoluble salts.
• • Colloids (Gelatin, Glue, Blood, Saliva, Hydrocolloids): Adsorb onto dihydrate crystal nuclei and physically block crystal growth.`,
    table: {
      headers: ["Category", "Chemical Agent", "Optimal Concentration", "Mechanism of Action"],
      rows: [
        ["Accelerator", "Potassium Sulfate (K2SO4)", "2.0%", "Increases hemihydrate dissolution rate; accelerates dihydrate nucleus formation."],
        ["Accelerator", "Terra Alba / Slurry Water", "0.5 – 1.0%", "Provides ready-made dihydrate seed nuclei; bypasses induction phase."],
        ["Retarder", "Borax (Sodium Tetraborate)", "1.0 – 2.0%", "Forms insoluble calcium borate coating around hemihydrate particles."],
        ["Retarder", "Potassium Citrate", "1.0 – 2.0%", "Precipitates calcium ions; poisons dihydrate crystal nucleation sites."]
      ]
    }
  },
  {
    id: "p2-2-3",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "2",
    sectionTitle: "Gypsum Products",
    topicNumber: "2.3",
    topicTitle: "Setting Expansion of Gypsum",
    marks: "4 Marks",
    rawText: `• Definition: The volumetric and linear expansion that accompanies the hardening of gypsum products as calcium sulfate hemihydrate converts to calcium sulfate dihydrate.
• Magnitude: Plaster (Type 2) ~0.20–0.35%; Dental Stone (Type 3) ~0.08–0.15%; Die Stone (Type 4) ~0.05–0.10%.
• Mechanism: Driven by the outward thrust of growing, needle-like acicular dihydrate crystals impinging against one another during crystallization from a supersaturated solution.
• Control Factors:
• 1. Water-to-Powder (W:P) Ratio: Higher W:P ratio increases particle distance -> fewer crystal impactions -> decreases setting expansion.
• 2. Spatulation Rate & Time: Longer or faster spatulation breaks up forming crystals into multiple growth centers -> increases setting expansion.
• 3. Chemical Additives: Combinations of K2SO4 (accelerator) and Potassium Citrate (retarder) act as 'anti-expansion additives', reducing setting expansion to <0.05%.`
  },
  {
    id: "p2-2-4",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "2",
    sectionTitle: "Gypsum Products",
    topicNumber: "2.4",
    topicTitle: "Setting Reaction of Gypsum Products",
    marks: "4 Marks",
    rawText: `• Chemical Equation:
(CaSO4)2·H2O + 3 H2O ──► 2 (CaSO4·2H2O) + Heat (3,900 cal/g-mol)
• Sequential Reaction Stages:
• 1. Dissolution: Calcium sulfate hemihydrate dissolves in water (solubility ~0.65 g/100 mL at 20°C).
• 2. Supersaturation: Solution becomes highly supersaturated with calcium and sulfate ions relative to dihydrate (dihydrate solubility is much lower, ~0.20 g/100 mL).
• 3. Precipitation: Dihydrate crystals precipitate out rapidly at nucleation sites.
• 4. Crystallization & Interlocking: Continuous dissolution of hemihydrate and precipitation of dihydrate causes needle-like acicular crystals to grow and interlock into a solid crystalline mass.
• 5. Exothermic Heat Release: Reaction releases 3,900 calories per gram-mole of hemihydrate.`,
    chemicalEquations: ["(CaSO4)2·H2O + 3 H2O ──► 2 (CaSO4·2H2O) + Heat (3,900 cal/g-mol)"],
    flowchart: [
      "[Hemihydrate Dissolves in Water]",
      "[Supersaturation with Dihydrate Ions]",
      "[Precipitation of Dihydrate Nuclei]",
      "[Interlocking Acicular Crystal Growth]",
      "[Solid Rigid Mass + Exothermic Heat]"
    ]
  },
  {
    id: "p2-2-5",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "2",
    sectionTitle: "Gypsum Products",
    topicNumber: "2.5",
    topicTitle: "Hygroscopic Setting Expansion",
    marks: "4 Marks",
    rawText: `• Definition: The enhanced setting expansion that occurs when a setting gypsum product or investment material is immersed in warm water during its setting process (typically in a 37°C water bath).
• Magnitude: 2 to 5 times greater than normal setting expansion in air (up to 1.2% – 2.2%).
• Mechanism:
• • In Air: Surface tension of the thin water film surrounding growing dihydrate crystals draws them together, restricting outward linear thrust.
• • In Water (Hygroscopic): Immersion supplies excess water, eliminating surface tension film restrictions. Dihydrate crystals continue to grow outwards freely without confinement, resulting in significantly greater linear expansion.
• Clinical Application: Used in hygroscopic inlay casting techniques to expand investment molds sufficiently to compensate for the casting shrinkage of gold alloys (1.25% – 1.7%).`
  },
  {
    id: "p2-2-6",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "2",
    sectionTitle: "Gypsum Products",
    topicNumber: "2.6",
    topicTitle: "Theories of Setting of Gypsum",
    marks: "4 Marks",
    rawText: `• Three Major Theories:
• 1. Crystalline Theory (Le Chatelier & Van't Hoff): Most widely accepted theory. Based on the solubility difference between hemihydrate (4.5x more soluble) and dihydrate. Hemihydrate dissolves -> supersaturates dihydrate -> precipitates needle-like interlocking crystals.
• 2. Colloidal Theory (Michaelis): Proposes that hemihydrate reacts with water to form an intermediate gel-like colloidal matrix (sol state), which desorbs water and subsequently crystallizes into solid dihydrate.
• 3. Dissolution-Precipitation Theory: Modern refinement of the crystalline theory emphasizing the continuous thermodynamic driving force created by the lower free energy and lower solubility of the dihydrate phase.`
  },
  {
    id: "p2-3-1",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "3",
    sectionTitle: "Dental Casting Investments",
    topicNumber: "3.1",
    topicTitle: "Normal and Hygroscopic Setting Expansion of Investments",
    marks: "4 Marks",
    rawText: `• Definition: Refractory investment materials exhibit two forms of setting expansion to enlarge the mold cavity before casting: Normal Setting Expansion (in air) and Hygroscopic Setting Expansion (under water immersion).`,
    table: {
      headers: ["Parameter", "Normal Setting Expansion", "Hygroscopic Setting Expansion"],
      rows: [
        ["Environment", "Setting occurs in air.", "Setting occurs immersed in warm water bath (37°C)."],
        ["Linear Expansion", "0.10% – 0.60%", "1.20% – 2.20% (2x to 5x higher)"],
        ["Mechanism", "Crystal growth restricted by surface tension water film.", "Immersion eliminates water film tension; crystals grow freely."],
        ["Clinical Application", "Standard burnout casting technique.", "Hygroscopic casting technique for gold crowns/inlays."]
      ]
    }
  },
  {
    id: "p2-3-2",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "3",
    sectionTitle: "Dental Casting Investments",
    topicNumber: "3.2",
    topicTitle: "Setting Reaction of Ammonium Colloidal Phosphate",
    marks: "2 Marks",
    rawText: `• Chemical Equation & Mechanism: In phosphate-bonded investments, monoammonium phosphate reacts with magnesium oxide in the presence of water/colloidal silica liquid:
NH4H2PO4 + MgO + 5 H2O ──► MgNH4PO4·6H2O
• High-Temperature Transformation: Upon burnout above 1000°C, ammonium magnesium phosphate decomposes into Magnesium Pyrophosphate (Mg2P2O7), providing high thermal strength for ceramic and base metal casting.`,
    chemicalEquations: ["NH4H2PO4 + MgO + 5 H2O ──► MgNH4PO4·6H2O"]
  },
  {
    id: "p2-4-1",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "4",
    sectionTitle: "Casting Procedure: Defects and Mechanisms",
    topicNumber: "4.1",
    topicTitle: "Casting Defects",
    marks: "4 Marks",
    rawText: `• Definition: Inaccuracies, surface blemishes, or structural flaws in a cast metal restoration that compromise fit, esthetics, or mechanical integrity.`,
    table: {
      headers: ["Defect Type", "Etio-Pathology / Cause", "Prevention & Solution"],
      rows: [
        ["Surface Nodules / Bubbles", "Air bubbles trapped on wax pattern during investing.", "Use vacuum mixing, apply wetting agent (surfactant), store in humidor."],
        ["Fins or Feathers", "Investment cracks from rapid heating or high casting pressure.", "Heat investment slowly; avoid dropping cold ring in hot furnace."],
        ["Incomplete Casting (Short)", "Low casting pressure, under-heated alloy/mold, trapped air.", "Ensure adequate winding of casting arm; use proper burnout temp."],
        ["Black / Discolored Casting", "Incomplete wax burnout or oxidation during melting.", "Ensure complete burnout with adequate oxygen supply; apply flux."]
      ]
    }
  },
  {
    id: "p2-4-2",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "4",
    sectionTitle: "Casting Procedure: Defects and Mechanisms",
    topicNumber: "4.2",
    topicTitle: "Porosity in Castings",
    marks: "4 Marks",
    rawText: `• Definition: Internal or surface voids within a cast metal restoration caused by solidification shrinkage or gas inclusion.
• Classification of Porosity:
• 1. Solidification Shrinkage Porosity:
• a. Localized Shrinkage Porosity: Large irregular void near the sprue-casting junction caused by improper sprue thickness or lack of reservoir.
• b. Microporosity: Fine inter-granular voids caused by rapid alloy freezing before feeding is complete.
• 2. Gas-Inclusion Porosity:
• a. Pinhole Porosity: Tiny spherical voids caused by dissolved gases (O2, H2) coming out of solution during freezing.
• b. Gas Pockets: Larger voids caused by air trapped in mold cavity due to inadequate investment permeability.
• 3. Back-Pressure Porosity: Smooth concave voids on the button-side caused by air trapped at mold tip when wax burnout is incomplete or investment distance to ring end is >1/4 inch.`,
    flowchart: [
      "[CASTING POROSITY]",
      "[Solidification Shrinkage (Localized / Microporosity)]",
      "[Gas Inclusion (Pinhole / Gas Pockets)]",
      "[Back-Pressure Porosity (Incomplete Air Escape)]"
    ]
  },
  {
    id: "p2-5-1",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "5",
    sectionTitle: "Dental Casting Alloys",
    topicNumber: "5.1",
    topicTitle: "Karat and Fineness",
    marks: "2 Marks",
    rawText: `• Karat: Expression of gold content in parts per 24.
Karat = (Parts of Pure Gold by Weight / 24) × 24
• Fineness: Expression of gold content in parts per 1,000.
Fineness = Percentage of Gold × 10 = Karat × 41.666
• Examples: Pure gold = 24 Karat = 1,000 Fine. 18 Karat gold = 18/24 = 75% gold = 750 Fine.`
  },
  {
    id: "p2-6-1",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "6",
    sectionTitle: "Abrasion and Polishing",
    topicNumber: "6.1",
    topicTitle: "Types of Abrasives",
    marks: "2 Marks",
    rawText: `• Classification:
• 1. Natural Abrasives: Diamond (hardest, Mohs 10), Quartz (Mohs 7), Emery (corundum + iron oxide, Mohs 7–9), Garnet (Mohs 6.5–7.5), Pumice (volcanic glass, Mohs 6), Cuttle.
• 2. Manufactured / Synthetic Abrasives: Silicon Carbide (Carborundum, Mohs 9.5), Aluminum Oxide (Corundum/Levigated alumina, Mohs 9), Boron Carbide (Mohs 9.3), Synthetic Diamond, Zirconium Silicate.`
  },
  {
    id: "p2-6-2",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "6",
    sectionTitle: "Abrasion and Polishing",
    topicNumber: "6.2",
    topicTitle: "Rake's Angle",
    marks: "2 Marks",
    rawText: `• Definition: The angle formed between the rake face of a cutting bur blade and a radial line passing from the center of the bur to the cutting edge.
• Types & Significance:
• • Positive Rake Angle: Rake face leans away from direction of rotation; sharp, digs into tissue; fragile edge.
• • Negative Rake Angle: Rake face leans toward direction of rotation; scrapes tissue, increases bur strength, dissipates heat better (Standard for carbide burs).
• • Zero Rake Angle: Rake face coincides with the radial line.`,
    flowchart: [
      "[POSITIVE RAKE ANGLE (Sharp, fragile, digs in)]",
      "[ZERO RAKE ANGLE (Coincides with radial line)]",
      "[NEGATIVE RAKE ANGLE (Scrapes, strong edge, standard for carbide burs)]"
    ]
  },
  {
    id: "p2-7-1",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "7",
    sectionTitle: "Dental Ceramics",
    topicNumber: "7.1",
    topicTitle: "Firing of Porcelains",
    marks: "4 Marks",
    has3DModel: "crown-die",
    rawText: `• Definition: The high-temperature thermal cycle during which condensed porcelain powder particles sinter together into a dense, non-porous translucent restoration.
• Five Sequential Firing Stages:
• 1. Drying Stage: Gentle pre-heating at furnace door (~500°C) to evaporate water binder and prevent steam explosions.
• 2. Low Bisque Stage: Organic binder burns out; glass particles start fusing at contact points; minimal shrinkage.
• 3. Medium Bisque Stage: Particle coalescence advances; significant volumetric contraction; porous mass.
• 4. High Bisque Stage: Complete fusion of powder particles; total volumetric shrinkage (30–40%); translucent mass.
• 5. Glazing Stage: Surface pyro-chemical reaction producing a smooth, self-glazed impervious glass layer.
• Role of Vacuum Firing: Evacuates air between 500°C and 950°C, eliminating internal air entrapment and increasing translucency.`,
    flowchart: [
      "[Drying Stage (Pre-heat ~500°C)]",
      "[Low Bisque Stage (Binder burnout)]",
      "[Medium Bisque Stage (Particle coalescence)]",
      "[High Bisque Stage (Full sintering)]",
      "[Glazing Stage (Smooth sealed surface)]"
    ]
  },
  {
    id: "p2-8-1",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "8",
    sectionTitle: "Brazing and Welding: Related Theory",
    topicNumber: "8.1",
    topicTitle: "Dental Solders",
    marks: "4 Marks",
    rawText: `• Definition: Intermediate filler alloys used to join two or more metal components by surface wetting and adhesion at temperatures above 425°C, but below the solidus temperature of the parts being joined.
• Types of Dental Solders:
• • Gold Solders (Noble): Gold-silver-copper alloys; high tarnish resistance; melting range 750°C – 850°C.
• • Silver Solders (Base Metal): Silver-copper-zinc alloys; lower melting range (600°C – 750°C); used for orthodontic wires.
• Ideal Requirements: Flow temperature must be at least 50°C – 100°C lower than the parent metal solidus; high fluidity and wetting; tarnish resistant; color-matched.`
  },
  {
    id: "p2-8-2",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "8",
    sectionTitle: "Brazing and Welding: Related Theory",
    topicNumber: "8.2",
    topicTitle: "Flux and Antiflux",
    marks: "2 Marks",
    rawText: `• Flux: Chemical agent applied during soldering to dissolve surface oxides, prevent oxidation, and promote molten alloy wetting and flow (e.g., Borax, Potassium Fluoride for stainless steel).
• Antiflux: Substance applied adjacent to the joint area to restrict solder flow and confine it strictly to the designated solder joint (e.g., Graphite lead pencil, Rouge/Iron oxide in chloroform).`
  },
  {
    id: "p2-9-1",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "9",
    sectionTitle: "Dental Implant Materials",
    topicNumber: "9.1",
    topicTitle: "Osseointegration",
    marks: "4 Marks",
    has3DModel: "dental-implant",
    rawText: `• Definition: A direct structural and functional connection between ordered, living bone tissue and the surface of a load-carrying titanium dental implant, visible at the light microscopic level without intervening soft tissue (Brånemark, 1969).
• Key Requirements:
• 1. Biocompatible Material: Commercially pure titanium (cpTi) or Ti-6Al-4V forming a stable TiO2 oxide film.
• 2. Atraumatic Surgery: Low-speed drilling under copious saline irrigation (temperature strictly <47°C) to prevent thermal bone necrosis.
• 3. Primary Stability: Rigid initial mechanical engagement (insertion torque 30–45 Ncm).
• 4. Unloaded Healing Period: 3 to 6 months undisturbed healing (3 months mandible, 6 months maxilla).`,
    flowchart: [
      "[Biocompatible Titanium (cpTi / TiO2 oxide film)]",
      "[Atraumatic Drilling (<47°C saline irrigation)]",
      "[Primary Mechanical Stability (30-45 Ncm torque)]",
      "[Undisturbed Healing Period (3-6 months)]"
    ]
  },
  {
    id: "p2-9-2",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "9",
    sectionTitle: "Dental Implant Materials",
    topicNumber: "9.2",
    topicTitle: "Biointegration",
    marks: "2 Marks",
    rawText: `• Definition: A direct biochemical contact between living bone tissue and the implant surface achieved through chemical bonding, characterized by an interfacial layer of hydroxyapatite/calcium phosphate continuous with bone matrix (seen in Hydroxyapatite [HA]-coated titanium implants).
• Distinction: Osseointegration is direct mechanical apposition to TiO2; Biointegration involves chemical ionic bonding across the interface.`
  },
  {
    id: "p2-10-1",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "10",
    sectionTitle: "Denture Resins and Polymers",
    topicNumber: "10.1",
    topicTitle: "Copolymerisation",
    marks: "4 Marks",
    rawText: `• Definition: A polymerization process in which two or more chemically distinct monomer species are polymerized together to form a single macromolecular chain containing units of both monomers.
• Types of Copolymers:
• • Random Copolymer: Monomer units arranged randomly (-A-B-A-A-B-B-A-).
• • Alternating Copolymer: Monomer units alternate strictly (-A-B-A-B-A-B-).
• • Block Copolymer: Identical monomer blocks linked together (-A-A-A-B-B-B-).
• • Graft Copolymer: Chains of monomer B grafted as side branches onto a backbone of monomer A.
• Dental Significance: Copolymerizing methyl methacrylate with butyl methacrylate increases flexibility and impact strength; crosslinking with Ethylene Glycol Dimethacrylate (EGDMA) reduces solubility, crazing, and organic solvent absorption.`
  },
  {
    id: "p2-10-2",
    partId: "part-2",
    partTitle: "Theoretical Crash Notes (Part 2) — High-Yield Exam Notes with Tables, Flowcharts & Reactions (Sections 7 to 16)",
    sectionNumber: "10",
    sectionTitle: "Denture Resins and Polymers",
    topicNumber: "10.2",
    topicTitle: "Crazing and Porosity in Denture Resins",
    marks: "4 Marks",
    rawText: `• Crazing: Microscopic surface cracks or micro-fissures in acrylic denture base resins caused by tensile stress relaxation, mechanical abrasion, or exposure to organic solvents (alcohol/monomer). Prevented by crosslinking with 1–2% EGDMA.`,
    table: {
      headers: ["Porosity Type", "Etio-Pathology / Cause", "Appearance & Prevention"],
      rows: [
        ["Gaseous Porosity", "Monomer vaporization when flask temp exceeds MMA boiling point (100.8°C) during rapid heating.", "Sub-surface voids in thick denture sections. Prevent by slow controlled heating."],
        ["Contraction / Granular Porosity", "Insufficient monomer, inadequate mixing dough, or low packing pressure.", "Uniform tiny voids distributed throughout entire resin mass. Prevent by proper P:L ratio & trial closure."]
      ]
    },
    examCallout: [
      "Gypsum Products: Alpha-hemihydrate (Stone) has dense prismatic crystals requiring less water (W:P 0.28) than Beta-hemihydrate (Plaster W:P 0.50).",
      "Accelerators vs Retarders: 2% K2SO4 accelerates dissolution; 1% Borax forms protective calcium borate coating to retard setting.",
      "Hygroscopic Expansion: Immersion in warm water eliminates surface tension film, yielding 2x-5x higher linear expansion.",
      "Casting Defects: Fins = cracked investment from rapid heating; Porosity = solidification shrinkage or gas inclusion.",
      "MMA Boiling Point: 100.8°C — exceeding this temperature causes Gaseous Porosity in thick acrylic sections.",
      "Osseointegration: Titanium TiO2 film + atraumatic drilling (<47°C) + primary stability + 3-6 months unloaded healing."
    ]
  },

  // =========================================================================
  // PART 3 (Pages 23 - 38)
  // =========================================================================
  {
    id: "p3-1-1",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "1",
    topicTitle: "Silicate Cement",
    marks: "4 Marks",
    rawText: `• Definition: Anterior tooth-colored restorative material formed by mixing fluoroaluminosilicate glass powder with an aqueous solution of orthophosphoric acid; historically the first translucent direct filling material.
• Classification: Translucent direct restorative cement (ISO 4049 / Historical specifications).
• Composition: Powder: Silica (SiO2 40%), Alumina (Al2O3 30%), Cryolite/Calcium fluoride (Na3AlF6 / CaF2 20% - flux & fluoride source), Calcium oxide (10%). Liquid: Orthophosphoric acid (40–50%), Water (40–45%), Aluminum & Zinc phosphate buffers.
• Setting Reaction: Acid-base reaction. Phosphoric acid dissolves surface glass ions (Ca2+, Al3+, F-), forming a hydrogel matrix of silicic acid and insoluble phosphates surrounding unreacted glass cores.
• Main Properties: High anticariogenic fluoride release (~10–15%); thermal expansion matches tooth structure (10 ppm/°C); high solubility in oral acidic fluids (pH < 5.5); severely pulpal toxic (pH ~1.6 at insertion, causing pulpal necrosis if unlined); brittle (compressive strength ~180 MPa, tensile strength ~15 MPa).
• Manipulation & Steps: Proportion powder:liquid (3:1); mix rapidly on cold glass slab within 1 minute using an agate or plastic spatula (metal spatulas stain cement); insert under celluloid matrix; coat immediately with cavity varnish to prevent moisture contamination or desiccation.
• Uses: Historical Class III and Class V anterior restorations (now superseded by GIC and composites).
• Advantages & Disadvantages: Advantage: Significant fluoride release, initial translucency. Disadvantage: Extreme acidity/pulpal hazard, high solubility, marginal discoloration, brittleness.`,
    lastMinuteRevision: [
      "First anticariogenic fluoride-releasing restorative material.",
      "Requires non-metallic (agate/plastic) spatula to avoid metal discolouration.",
      "Severe acid pulp hazard (initial pH 1.6) -> mandatory sub-base/varnish application."
    ]
  },
  {
    id: "p3-1-2",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "2",
    topicTitle: "Zinc Phosphate Cement",
    marks: "4 Marks",
    rawText: `• Definition: Oldest standard luting cement formed by mixing zinc oxide powder with buffered orthophosphoric acid liquid. ISO 9917 / ADA Spec No. 8.
• Classification: Type I: Fine grain (film thickness <= 25 um) for luting precision restorations; Type II: Medium grain for cavity bases and temporary restorations.
• Composition: Powder: Zinc oxide (86%), Magnesium oxide (10% - reduces calcination temp, increases strength), Silica/Bismuth trioxide (4% - filler/whiteness). Liquid: Orthophosphoric acid (45–55%), Water (30–35% - controls reaction rate), Aluminum & Zinc phosphate buffers.
• Setting Reaction: Exothermic acid-base reaction forming an amorphous matrix of zinc aluminophosphate surrounding unreacted zinc oxide cores: ZnO + 2H3PO4 + 3H2O -> Zn3(PO4)2.4H2O (Hopeite).
• Main Properties: High compressive strength (~104 MPa); low tensile strength (~5.5 MPa); film thickness <= 25 um; initial pH 1.6–3.6 (pulpal irritant requiring liner); high elastic modulus (~13 GPa) providing rigid support under amalgam.
• Manipulation & Steps: Use chilled, thick glass slab; incrementally add small powder portions to liquid over a wide slab area for 90 seconds to dissipate exothermic heat; insert during glossy stage.
• Uses: Luting of crowns, bridges, inlays, onlays, and orthodontic bands; intermediate thermal base under metal restorations.
• Advantages & Disadvantages: Advantage: High compressive strength, long clinical track record, rigid support. Disadvantage: Initial acidity, no chemical adhesion (purely mechanical lock), soluble in oral fluids.`,
    chemicalEquations: ["ZnO + 2H3PO4 + 3H2O -> Zn3(PO4)2.4H2O (Hopeite)"],
    lastMinuteRevision: [
      "Gold standard for mechanical luting (film thickness <= 25 um).",
      "Chilled glass slab + incremental powder mixing dissipates exothermic reaction heat.",
      "Initial acidity (pH 1.6) demands pulp protection in deep cavities."
    ]
  },
  {
    id: "p3-1-3",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "3",
    topicTitle: "Zinc Polycarboxylate Cement",
    marks: "4 Marks",
    rawText: `• Definition: First dental cement developed with inherent chemical adhesion to tooth structure (Dr. Dennis Smith, 1968), formed by mixing zinc oxide powder with aqueous polyacrylic acid. ISO 9917.
• Classification: Type I: Luting restorations; Type II: Base / Restorative.
• Composition: Powder: Zinc oxide (major constituent), Magnesium oxide (10%), Bismuth/Alumina, Stannous fluoride (increases strength & releases fluoride). Liquid: 30–40% aqueous solution of Polyacrylic acid (or copolymer with itaconic/maleic acid); molecular weight ~30,000–50,000.
• Setting Reaction: Acid-base reaction forming a zinc polyacrylate gel matrix surrounding unreacted zinc oxide particles. Carboxyl groups (-COOH) chelate with Zinc ions and Calcium ions in tooth hydroxyapatite.
• Main Properties: True chemical adhesion to enamel and dentin via calcium chelation (tensile bond strength ~8–10 MPa); highly biocompatible (large polyacrylic acid molecules cannot penetrate dentinal tubules); initial pH ~3–4 rising rapidly; lower elastic modulus (~6 GPa) than zinc phosphate.
• Manipulation & Steps: Mix rapidly on non-absorbent paper pad within 30–45 seconds; apply to tooth while surface remains glossy; discard if cement becomes tacky or forms cobwebs.
• Uses: Luting of crowns, bridges, inlays, and orthodontic appliances; cavity base under composites or amalgam.
• Advantages & Disadvantages: Advantage: True chemical adhesion, excellent biocompatibility, low pulpal irritation. Disadvantage: Short working time, plastic deformation under heavy occlusal forces, technique-sensitive.`,
    lastMinuteRevision: [
      "First chemically adhesive cement (chelation of -COOH with Ca2+ in hydroxyapatite).",
      "Large molecular size prevents pulpal tubule penetration -> superior biocompatibility.",
      "Must be applied while glossy; loss of gloss indicates loss of free carboxyl groups."
    ]
  },
  {
    id: "p3-1-4",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "4",
    topicTitle: "Zinc Oxide Eugenol (ZOE) Cement",
    marks: "4 Marks",
    rawText: `• Definition: Low-strength, highly biocompatible sedative cement formed by reacting zinc oxide with eugenol (oil of cloves). ISO 3107.
• Classification: Type I: Temporary luting; Type II: Long-term luting; Type III: Temporary restoration & thermal base; Type IV: Cavity liner.
• Composition: Powder: Zinc oxide (69%), White rosin (29% - reduces brittleness), Zinc acetate (1% - accelerator), Zinc stearate (1% - plasticizer). Liquid: Eugenol (85%), Olive oil / Cottonseed oil (15% - plasticizer).
• Setting Reaction: Chelation reaction between ZnO and eugenol forming Zinc Eugenolate complex matrix embedding unreacted ZnO particles: ZnO + 2C10H12O2 -> Zn(C10H11O2)2 + H2O. Water is an essential catalyst.
• Main Properties: Obtundent / sedative effect on pulp (relieves pain via free eugenol); excellent initial marginal seal; low compressive strength (~5–20 MPa); inhibits free-radical polymerization of composite resins; high solubility in oral fluids.
• Manipulation & Steps: Spatulate vigorously on oil-resistant paper pad; water and humidity drastically accelerate setting time.
• Uses: Sedative temporary restoration, temporary luting, pulp capping sub-base, root canal sealer, periodontal dressing.
• Advantages & Disadvantages: Advantage: Anodyne/sedative effect, excellent sealing, biocompatible. Disadvantage: Low strength, high solubility, CONTRAINDICATED under composite resin (eugenol inhibits resin cure).`,
    chemicalEquations: ["ZnO + 2C10H12O2 -> Zn(C10H11O2)2 + H2O"],
    lastMinuteRevision: [
      "Sedative / obtundent effect on painful pulp via free eugenol release.",
      "Water/humidity accelerates the chelation setting reaction.",
      "STRICTLY CONTRAINDICATED under composite resins (eugenol inhibits polymerization)."
    ]
  },
  {
    id: "p3-1-5",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "5",
    topicTitle: "Modifications of ZOE Cement",
    marks: "4 Marks",
    rawText: `• Definition: Reinforced ZOE formulations developed to overcome the low mechanical strength, high solubility, and resin-inhibition limitations of conventional ZOE.
• Classification / Types: 1. Polymer-Reinforced ZOE (IRM - Intermediate Restorative Material): Powder contains 20–40% polymethyl methacrylate (PMMA) or polystyrene resin; 2. EBA-Alumina Modified ZOE: Liquid contains 62.5% Ortho-ethoxybenzoic acid (EBA) + 37.5% Eugenol; Powder contains 30% Alumina + 70% ZnO; 3. Non-Eugenol ZOE: Replaces eugenol with carboxylic acids.
• Composition & Key Differences: IRM adds PMMA polymer powder to increase toughness; EBA-ZOE uses EBA liquid and alumina powder to boost compressive strength to 60–80 MPa; Non-Eugenol ZOE uses fatty/carboxylic acids.
• Main Properties: Significantly increased compressive strength (IRM ~40 MPa, EBA ~60–80 MPa); markedly reduced solubility and abrasion; maintains pulpal compatibility.
• Uses: Intermediate restorations lasting up to 1 year (IRM), high-strength temporary luting (EBA), temporary restorations prior to composite bonding (Non-eugenol ZOE).
• Advantages & Disadvantages: Advantage: High strength, low solubility, long-term durability. Disadvantage: EBA exhibits high viscous flow; IRM still contains eugenol.`,
    lastMinuteRevision: [
      "IRM = ZOE + 20-40% PMMA resin powder (used for 1-year intermediate restorations).",
      "EBA Cement = EBA liquid + Alumina powder -> Compressive strength jumps to 60-80 MPa.",
      "Non-Eugenol ZOE avoids polymerisation inhibition under composite resins."
    ]
  },
  {
    id: "p3-1-6",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "6",
    topicTitle: "Calcium Hydroxide Ca(OH)2 Cement",
    marks: "4 Marks",
    rawText: `• Definition: Reaction-type lining/base cement specifically used for direct/indirect pulp capping and dentin bridge induction. ISO 9917.
• Classification: Self-cure two-paste system; Light-cure resin-modified single paste system.
• Composition: Base Paste: Calcium tungstate / Barium sulfate (radiopacifiers), Calcium phosphate, Glycol salicylate (chelating resin). Catalyst Paste: Calcium hydroxide (50%), Zinc oxide, Titanium dioxide, N-ethyl-o/p-toluene sulfonamide (binder).
• Setting Reaction: Chelation reaction between calcium hydroxide and glycol salicylate forming an amorphous calcium disalicylate complex matrix.
• Main Properties: High alkalinity (pH ~11–12) providing bactericidal action; stimulates undifferentiated mesenchymal pulp cells to form reparative secondary dentin (dentin bridge); very low compressive strength (~10–20 MPa); highly soluble in water and acids.
• Manipulation & Steps: Mix equal lengths of base and catalyst paste on paper pad using a ball-ended applicator for 10 seconds; sets rapidly in mouth due to humidity and heat.
• Uses: Direct pulp capping (exposed pulp), indirect pulp capping (deep carious dentin), protective sub-liner under high-strength bases.
• Advantages & Disadvantages: Advantage: Bactericidal, stimulates reparative dentin bridge formation. Disadvantage: Extremely low strength, high solubility, easily washed out under leaking restorations if unbacked.`,
    lastMinuteRevision: [
      "High alkalinity (pH 11-12) triggers reparative dentin bridge formation.",
      "Gold standard for direct and indirect pulp capping.",
      "Must be covered by a high-strength base due to low compressive strength and high solubility."
    ]
  },
  {
    id: "p3-1-7",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "7",
    topicTitle: "Glass Ionomer Cement (GIC)",
    marks: "2 Marks",
    rawText: `• Definition: Acid-base setting dental cement formed by reacting fluoroaluminosilicate glass powder with polyalkenoic acid solution; features chemical adhesion and continuous fluoride release. ISO 9917.
• Classifications: Type I: Luting; Type II: Restorative (II.1 Aesthetic, II.2 Reinforced); Type III: Lining/Base; Type IV: Pit & fissure sealant.
• 3-5 High-Yield Points: Chemical bond via carboxyl group chelation with calcium in tooth hydroxyapatite; Continuous anticariogenic fluoride release; Thermal expansion matches natural dentin (9 ppm/°C); Moisture sensitive during initial 24 hours of setting -> requires protective varnish.`
  },
  {
    id: "p3-1-8",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "8",
    topicTitle: "Modified GIC (Cermet / Metal-Reinforced GIC)",
    marks: "2 Marks",
    rawText: `• Definition: GIC formulations incorporating metal particles into the glass powder to improve fracture toughness and wear resistance.
• Types: 1. Miracle Mix: Physical blend of 87% GIC powder + 13% spherical silver amalgam alloy; 2. Cermet: Silver particles sintered/bonded onto glass particles at high temperatures (~800°C).
• 3-5 High-Yield Points: Higher wear resistance and radiopacity than conventional GIC; Lower fluoride release due to reduced glass content; Poor aesthetics (grey color); Uses: Core build-ups and primary tooth restorations.`
  },
  {
    id: "p3-1-9",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "9",
    topicTitle: "Resin-Modified Glass Ionomer Cement (RMGIC)",
    marks: "2 Marks",
    rawText: `• Definition: Hybrid cement combining conventional GIC acid-base chemistry with light- or chemical-cure resin polymerization (HEMA / Bis-GMA).
• Key Principle: Dual-cure or tri-cure setting: immediate light-activated resin polymerization followed by dark acid-base ionomer reaction.
• 3-5 High-Yield Points: Higher flexural and tensile strength than conventional GIC; Immediate early strength upon light activation; Lower initial moisture sensitivity; HEMA water absorption causes expansion (contraindicated as core build-up under all-ceramic crowns).`
  },
  {
    id: "p3-1-10",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "10",
    topicTitle: "Compomer (Polyacid-Modified Composite)",
    marks: "2 Marks",
    rawText: `• Definition: Composite resin modified with acid-functionalized monomer groups and glass fillers, setting primarily via free-radical light polymerization.
• Key Principle: Resin matrix containing macro-monomers (TCB) + silanized reactive glass fillers; requires dental bonding agent for adhesion.
• 3-5 High-Yield Points: Combines handling/aesthetics of composite with minor delayed fluoride release; Sets 99% via light curing; Delayed minor acid-base reaction occurs as saliva is absorbed; Uses: Class III/V in low-stress areas, pediatric restorations.`
  },
  {
    id: "p3-1-11",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "11",
    topicTitle: "Bases (Dental Bases)",
    marks: "2 Marks",
    rawText: `• Definition: Thick layer of dental material (>= 0.5–2.0 mm) placed beneath restorations to provide thermal insulation to the pulp and support under condensation forces.
• Types: High-strength bases (Zinc phosphate, Polycarboxylate, GIC, RMGIC) vs Low-strength bases (ZOE, Ca(OH)2).
• 3-5 High-Yield Points: Replaces lost dentin bulk; Minimum thickness 0.5–0.75 mm for effective thermal insulation; Compressive strength must withstand amalgam condensation forces (~0.5–1.2 MPa condensation pressure).`
  },
  {
    id: "p3-1-12",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "12",
    topicTitle: "Liners (Cavity Liners)",
    marks: "2 Marks",
    rawText: `• Definition: Thin fluid coating (0.2–0.5 mm thick) applied to dentin surfaces to provide a physical barrier against chemical irritants and therapeutic pulpal response.
• Types: Suspension liners (Ca(OH)2 in solvent), Solution liners, Resin-modified liners (RMGIC, flowable composite).
• 3-5 High-Yield Points: Provides active therapeutic benefit (bactericidal action, dentin bridge induction with Ca(OH)2, fluoride release); Lacks mechanical strength; Cannot support heavy occlusal loads directly.`
  },
  {
    id: "p3-1-13",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "13",
    topicTitle: "Varnishes (Cavity Varnishes)",
    marks: "2 Marks",
    rawText: `• Definition: Solution of natural copal or synthetic resins dissolved in a volatile organic solvent (ether, acetone) applied to cavity walls.
• Key Principle: Solvent evaporates rapidly leaving a thin resin film (2–5 microns per coat) that physically seals dentinal tubule orifices.
• 3-5 High-Yield Points: Applied in 2–3 thin layers allowing 30s drying between coats; Reduces microleakage under amalgam restorations; CONTRAINDICATED under composites and GIC (inhibits resin curing and destroys chemical adhesion).`
  },
  {
    id: "p3-1-14",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "14",
    topicTitle: "Cavity Liners (High-Yield Summary)",
    marks: "2 Marks",
    rawText: `• Definition: Therapeutic fluid suspensions (0.2–0.5 mm) placed on deep dentinal walls to induce pulpal healing or provide antibacterial seal.
• 3-5 High-Yield Points: Applied specifically to deepest dentin areas; Soluble in water/acids; Must be covered by a rigid high-strength base before placing permanent restorations.`
  },
  {
    id: "p3-1-15",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 1",
    sectionTitle: "Dental Cements and Pulp-Protection Materials",
    topicNumber: "15",
    topicTitle: "Cavity Varnishes (High-Yield Summary)",
    marks: "2 Marks",
    rawText: `• Definition: Thin resin film barriers (2–5 um) applied to all cavity walls (enamel + dentin) to prevent microleakage and acid penetration.
• 3-5 High-Yield Points: Provides passive barrier seal; Prevents post-operative sensitivity under amalgam; Prohibited under composite resin and glass ionomer restorations.`
  },
  {
    id: "p3-2-16",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 2",
    sectionTitle: "Amalgam and Direct Filling Gold",
    topicNumber: "16",
    topicTitle: "High-Copper Amalgam Alloys",
    marks: "4 Marks",
    rawText: `• Definition: Dental amalgam alloys containing >= 12% Cu by weight (typically 12–30%), developed to eliminate the weak, corrosion-prone gamma-2 (gamma-2, Sn8Hg) phase. ISO 24234 / ADA Spec No. 1.
• Classification: 1. Admixed / Dispersant Alloys: 2 parts low-copper lathe-cut + 1 part high-copper silver-copper eutectic spherical particles (e.g. Dispersalloy); 2. Single Composition / Unicompositional: All particles contain Ag, Cu, Sn in single lathe-cut or spherical forms (e.g. Tytin).
• Composition: Silver (40–70%), Tin (20–30%), Copper (12–30%), Zinc (0–2%).
• Setting Reaction & Phase Elimination: Low-copper amalgam forms corrosion-prone gamma-2: Ag3Sn (gamma) + Hg -> Ag3Sn + Ag2Hg3 (gamma-1) + Sn8Hg (gamma-2). High-copper alloy eliminates gamma-2 by reacting tin preferentially with copper to form Eta phase (Cu6Sn5): Ag3Sn + Ag-Cu eutectic + Hg -> gamma-1 (Ag2Hg3) + Eta (Cu6Sn5) + unreacted cores.
• Main Properties: High early compressive strength (~250–500 MPa); virtually zero creep (< 0.2%); superior corrosion resistance; dramatically reduced marginal ditching.
• Manipulation & Steps: Triturate mechanically in high-speed amalgamator; condense firmly using small-faced pluggers; carve and post-carve burnish.
• Uses: Class I, II, V direct posterior restorations, core build-ups.`,
    chemicalEquations: [
      "Low-copper: Ag3Sn (gamma) + Hg -> Ag3Sn + Ag2Hg3 (gamma-1) + Sn8Hg (gamma-2)",
      "High-copper: Ag3Sn + Ag-Cu eutectic + Hg -> gamma-1 (Ag2Hg3) + Eta (Cu6Sn5) + unreacted cores"
    ],
    lastMinuteRevision: [
      "Eliminates corrosion-susceptible gamma-2 (Sn8Hg) phase by forming Eta phase (Cu6Sn5).",
      "Creep < 0.2% prevents marginal ditching and breakdown.",
      "Admixed (Dispersalloy) vs Single Composition (Tytin)."
    ]
  },
  {
    id: "p3-2-17",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 2",
    sectionTitle: "Amalgam and Direct Filling Gold",
    topicNumber: "17",
    topicTitle: "Gold Foil / Direct Filling Gold",
    marks: "4 Marks",
    rawText: `• Definition: Pure gold (99.99% / 24-karat) restored into cavity preparations by cold-welding under mechanical compaction force. ADA Spec No. 20.
• Classification & Forms: 1. Gold Foil: Cohesive (chemically clean) vs Non-cohesive (ammonia-coated); 2. Mat Gold: Electrolytically deposited crystalline powder; 3. Powdered Gold (Goldent): Atomized powder wrapped in organic gold foil sheath; 4. Clad Foils: Gold-platinum foil.
• Principle & Annealing: Pure gold cold-welds via atomic interdiffusion under pressure provided its surface is completely clean. Surface gas contaminants are removed by Annealing / Degassing over an alcohol flame at 340–380°C until a dull red glow appears.
• Main Properties: Unsurpassed biocompatibility; ultimate marginal adaptation; zero solubility; high density (19.3 g/cm3); work hardens during condensation (tensile strength increases from 120 to 300 MPa).
• Manipulation & Steps: Degas pellets -> Insert into clean preparation -> Condense using 50% overlapping stepping technique from floor toward walls -> Carve, burnish, and polish.
• Uses: Small Class I, Class III, and Class V direct restorations.`,
    lastMinuteRevision: [
      "Requires cold-welding of pure 24k gold via atomic interdiffusion under compaction.",
      "Degassing / Annealing (340-380°C) removes volatile surface gas contaminants.",
      "Stepping technique (50% overlapping plugger steps) ensures complete compaction."
    ]
  },
  {
    id: "p3-3-18",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 3",
    sectionTitle: "Composite Resins and Bonding Materials",
    topicNumber: "18",
    topicTitle: "Composite Resins",
    marks: "2 Marks",
    rawText: `• Definition: Three-dimensional cross-linked polymer matrix reinforced by inorganic filler particles bound together by a silane coupling agent. ISO 4049.
• Key Constituents: Resin Matrix (Bis-GMA, UDMA, TEGDMA diluent), Inorganic Fillers (Quartz, barium glass, silica), Coupling Agent (gamma-MPTS silane), Photoinitiator (Camphorquinone + amine).
• 3-5 High-Yield Points: Micromechanical bonding via acid etching & bonding agents; Polymerization shrinkage (~2–4% vol) induces C-factor stress; Properties depend directly on filler loading; Excellent aesthetics and radiopacity.`
  },
  {
    id: "p3-3-19",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 3",
    sectionTitle: "Composite Resins and Bonding Materials",
    topicNumber: "19",
    topicTitle: "Light-Activated Composites",
    marks: "2 Marks",
    rawText: `• Definition: Single-paste composite resin system cured on demand by exposure to visible blue light (460–490 nm wavelength).
• Key Principle: Camphorquinone (CQ) absorbs blue light (~468 nm) and reacts with tertiary amine co-initiator to produce free radicals that initiate cross-linking polymerization.
• 3-5 High-Yield Points: Unlimited working time until light exposure; Maximum depth of cure = 2.0 mm per increment; Prevents air-bubble inclusion compared to two-paste self-cure systems; Curing units: LED, QTH, PAC.`
  },
  {
    id: "p3-3-20",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 3",
    sectionTitle: "Composite Resins and Bonding Materials",
    topicNumber: "20",
    topicTitle: "Hybrid and Nano Composites",
    marks: "2 Marks",
    rawText: `• Definition: Composite resins combining submicron and nanoscale filler particles to optimize both mechanical strength and surface polishability.
• Types: Hybrid Composites (0.4–1.0 um particles + 0.04 um colloidal silica); Nanocomposites (nanomers 1–100 nm + synthesized nanoclusters).
• 3-5 High-Yield Points: Nanocomposites combine universal mechanical strength (suitable for posterior Class I/II) with long-term enamel-like high-gloss polish retention (anterior Class III/IV); Lower polymerization shrinkage.`
  },
  {
    id: "p3-3-21",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 3",
    sectionTitle: "Composite Resins and Bonding Materials",
    topicNumber: "21",
    topicTitle: "Bonding Agents (Dental Adhesives)",
    marks: "2 Marks",
    rawText: `• Definition: Unfilled or lightly filled resin solutions applied to etched enamel and dentin to form a micromechanical bond between tooth substrate and composite resin.
• Generations: Etch-and-Rinse (4th/5th Gen) vs Self-Etch (6th/7th Gen) vs Universal Adhesives (8th Gen with 10-MDP).
• 3-5 High-Yield Points: Hybrid Layer: Interdiffusion zone formed by resin monomer infiltration into demineralized dentin collagen; Resin Tags: Monomer extensions penetrating open enamel rods and dentinal tubules; Key Monomers: HEMA (hydrophilic dentin primer), Bis-GMA (hydrophobic sealer), 10-MDP (chemical bonding).`
  },
  {
    id: "p3-3-22",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 3",
    sectionTitle: "Composite Resins and Bonding Materials",
    topicNumber: "22",
    topicTitle: "Fillers in Composite Resins",
    marks: "2 Marks",
    rawText: `• Definition: Inorganic mineral particles embedded within the organic resin matrix to enhance physical and mechanical properties.
• Materials: Quartz, barium silicate glass, strontium glass, zirconia, colloidal silica.
• 3-5 High-Yield Points: Increasing filler content increases compressive strength, hardness, and elastic modulus while reducing polymerization shrinkage, thermal expansion, and water sorption; Heavy metal glasses (Barium, Strontium) provide radiopacity.`
  },
  {
    id: "p3-3-23",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 3",
    sectionTitle: "Composite Resins and Bonding Materials",
    topicNumber: "23",
    topicTitle: "Conventional / Macrofilled Composites",
    marks: "2 Marks",
    rawText: `• Definition: First generation composite resins introduced in the 1960s containing large crystalline quartz filler particles (10–50 um).
• 3-5 High-Yield Points: High filler content (~70–80 wt%); High compressive strength (~250 MPa); Major disadvantage: Severe surface roughness, rapid wear due to filler plucking, and poor polishability; Superseded by microfilled and hybrid composites.`
  },
  {
    id: "p3-3-24",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 3",
    sectionTitle: "Composite Resins and Bonding Materials",
    topicNumber: "24",
    topicTitle: "Pit and Fissure Sealants",
    marks: "2 Marks",
    rawText: `• Definition: Low-viscosity resin or GIC materials applied to deep developmental pits and fissures of occlusal tooth surfaces to prevent caries. ADA Spec No. 39.
• 3-5 High-Yield Points: Applied after acid etching with 37% phosphoric acid for 15–20s to establish micromechanical resin tag locking; Acts as a physical barrier isolating deep grooves from cariogenic bacteria; Key primary preventive measure in pediatric dentistry.`
  },
  {
    id: "p3-3-25",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 3",
    sectionTitle: "Composite Resins and Bonding Materials",
    topicNumber: "25",
    topicTitle: "Microfilled Composite",
    marks: "4 Marks",
    rawText: `• Definition: Composite resin designed specifically for anterior aesthetic restorations, incorporating pyrogenic colloidal silica filler particles with an average particle size of 0.04 um (40 nm).
• Classification & Types: 1. Homogeneous Microfilled: Colloidal silica mixed directly into matrix resin (viscosity limits filler loading to only 30–50 wt%); 2. Heterogeneous (Pre-polymerized) Microfilled: Colloidal silica mixed into resin, heat-cured, ground into 10–20 um pre-polymerized composite filler blocks, and blended back into resin matrix (boosts total filler loading to 60–70 wt%).
• Composition: Resin Matrix: Bis-GMA, TEGDMA diluent. Filler: Colloidal silica (0.04 um / 40 nm).
• Main Properties: Exceptional, ultra-smooth surface finish matching natural enamel lustre; higher thermal expansion coefficient; higher water sorption; lower elastic modulus (~3–6 GPa); lower flexural strength (~80 MPa); susceptible to marginal chipping under heavy occlusal loads.
• Uses: Class III and Class V anterior restorations where aesthetics is primary; direct composite veneers.`,
    lastMinuteRevision: [
      "Features microfine 0.04 um (40 nm) colloidal silica filler particles.",
      "Provides unmatched enamel-like surface smoothness and polish retention.",
      "Lower flexural strength restricts use to non-stress bearing Class III and V restorations."
    ]
  },
  {
    id: "p3-4-26",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 4",
    sectionTitle: "Impression Materials",
    topicNumber: "26",
    topicTitle: "Impression Compound",
    marks: "2 Marks",
    rawText: `• Definition: Reversible, non-elastic thermoplastic impression material that softens upon heating and hardens upon cooling without chemical change. ISO 4823 / ADA Spec No. 3.
• Types: Type I: Low temp (Impression compound - softening temp 55–60°C); Type II: High temp (Tray compound - softening temp 70°C).
• 3-5 High-Yield Points: Composition: Rosin/dammar resin (30%), Paraffin wax (5%), Plasticizers (10%), Fillers (french chalk 50%); Low thermal conductivity requires slow water bath kneading at 55–60°C; High viscosity mucodisplaceive material used for primary edentulous impressions and green stick border moulding.`
  },
  {
    id: "p3-4-27",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 4",
    sectionTitle: "Impression Materials",
    topicNumber: "27",
    topicTitle: "ZOE Impression Paste",
    marks: "2 Marks",
    rawText: `• Definition: Rigid, irreversible mucostatic impression paste formed by mixing zinc oxide base paste and eugenol catalyst paste. ADA Spec No. 16.
• 3-5 High-Yield Points: Chelation reaction forming zinc eugenolate matrix; Excellent dimensional stability (0.1% shrinkage); Records fine detail in thin layers (0.5–1.0 mm) inside custom trays; Used as secondary wash impression material for edentulous arches; Eugenol can cause tissue burning.`
  },
  {
    id: "p3-4-28",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 4",
    sectionTitle: "Impression Materials",
    topicNumber: "28",
    topicTitle: "Non-Eugenol Impression Paste",
    marks: "2 Marks",
    rawText: `• Definition: Rigid mucostatic impression paste developed for patients sensitive to eugenol, replacing eugenol with carboxylic or fatty acids.
• 3-5 High-Yield Points: Saponification reaction between Zinc Oxide base and carboxylic acids (e.g. Lauric, Caproic acid) forming insoluble zinc soap matrix; Identical handling and accuracy to ZOE without tissue irritation or odor.`
  },
  {
    id: "p3-4-29",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 4",
    sectionTitle: "Impression Materials",
    topicNumber: "29",
    topicTitle: "Agar Impression Material (Reversible Hydrocolloid)",
    marks: "4 Marks",
    rawText: `• Definition: Reversible elastic hydrocolloid impression material composed of organic agar polymer dispersed in water, changing from a solid gel to liquid sol upon heating and back to gel upon cooling. ISO 13716 / ADA Spec No. 11.
• Composition: Agar-agar (12–15% - polysaccharide gel frame), Water (80–85% - continuous phase), Borax (0.2% - boosts gel strength), Potassium sulfate (1–2% - gypsum setting accelerator), Alkyl benzoate preservative.
• Hysteresis Principle: Physical liquefaction and gelation temperature lag: Liquefies to Sol at 95–100°C; solidifies to Gel upon cooling at 37–42°C.
• Manipulation & 3-Stage Water Bath: 1. Liquefaction Section: 100°C for 10 minutes (converts gel to sol); 2. Storage Section: 65–68°C (maintains fluid sol state for daily use); 3. Tempering Section: 45–46°C for 3–5 minutes in tray (lowers temp to tolerate oral tissues).
• Main Properties: Highly hydrophilic; flexible elastic recovery (98.8%); low tear strength; subject to Syneresis (exuding water & shrinking) and Imbibition (absorbing water & swelling); must pour cast immediately.
• Uses: Crown & bridge impressions, partial denture duplicating material in laboratories.`,
    lastMinuteRevision: [
      "Reversible physical gel-sol-gel transition driven by temperature.",
      "Hysteresis gap: Liquefies at 100°C, solidifies to gel at 37-42°C.",
      "Requires 3-stage water bath (Liquefaction 100°C, Storage 65°C, Tempering 45°C)."
    ]
  },
  {
    id: "p3-4-30",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 4",
    sectionTitle: "Impression Materials",
    topicNumber: "30",
    topicTitle: "Alginate Impression Material (Irreversible Hydrocolloid)",
    marks: "4 Marks",
    rawText: `• Definition: Irreversible elastic hydrocolloid impression material consisting of soluble sodium/potassium alginate reacting chemically with calcium sulfate to form an insoluble calcium alginate gel frame. ISO 1563 / ADA Spec No. 18.
• Classification: Type I: Fast setting (1.5–2.0 mins); Type II: Normal setting (3.0–4.5 mins).
• Composition: Sodium/Potassium Alginate (15% - soluble polymer), Calcium Sulfate Dihydrate (15% - reactor supplying Ca2+), Trisodium Phosphate (2% - retarder controlling working time), Diatomaceous Earth (60% - filler), Potassium Titanium Fluoride (2% - gypsum accelerator).
• Setting Reaction: Two-step chemical reaction: 1. Retarder reaction: 2Na3PO4 + 3CaSO4 -> Ca3(PO4)2 + 3Na2SO4 (delays set); 2. Main gelation: Sodium Alginate + CaSO4 -> Insoluble Calcium Alginate Gel + Na2SO4.
• Main Properties: Hydrophilic; excellent surface wetting; lower tear strength than elastomers; subject to Syneresis and Imbibition (pour cast within 10–12 minutes); Permanent deformation ~1.5%.
• Manipulation & Steps: Fluff powder; 1:1 powder/water ratio; spatulate vigorously against rubber bowl wall for 45–60 seconds; warmer water accelerates setting time.
• Uses: Diagnostic study models, primary impressions, orthodontic appliances, mouthguards.`,
    chemicalEquations: [
      "Retarder reaction: 2Na3PO4 + 3CaSO4 -> Ca3(PO4)2 + 3Na2SO4",
      "Main gelation: Sodium Alginate + CaSO4 -> Insoluble Calcium Alginate Gel + Na2SO4"
    ],
    lastMinuteRevision: [
      "Irreversible chemical setting forming insoluble calcium alginate gel.",
      "Trisodium phosphate acts as retarder to ensure adequate working time.",
      "Must pour cast within 10 minutes to prevent syneresis and imbibition distortion."
    ]
  },
  {
    id: "p3-4-31",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 4",
    sectionTitle: "Impression Materials",
    topicNumber: "31",
    topicTitle: "Polysulfide Impression Material",
    marks: "4 Marks",
    rawText: `• Definition: First non-aqueous elastomeric impression material ('Rubber Base'), setting via condensation polymerization of mercaptan liquid polymer with lead dioxide. ISO 4823 / ADA Spec No. 19.
• Classification / Viscosities: Light-bodied (wash), Medium-bodied (regular), Heavy-bodied (tray).
• Composition: Base Paste: Polysulfide liquid polymer (mercaptan polymer with reactive -SH groups - 80%), Fillers (titanium dioxide/zinc sulfide - 20%), Plasticizer. Catalyst Paste: Lead dioxide (PbO2 - 15-20%, brown color), Sulfur (0.5% - promoter), Castor oil.
• Setting Reaction: Condensation polymerization: Mercaptan Polymer (-SH) + PbO2 + S -> Polysulfide Rubber + H2O (byproduct).
• Main Properties: Long working time (5–7 mins) and setting time (8–12 mins); high tear strength (highest among elastomers ~2500–4000 g/cm); water byproduct evaporation causes high dimensional contraction over time (must pour within 30 minutes); unpleasant odor; stains clothing.
• Manipulation & Steps: Equal lengths of brown and white paste on paper pad; spatulate with broad strokes until streak-free brown color achieved; custom acrylic tray mandatory (2 mm uniform space).
• Uses: Final impressions for complete dentures, removable partial dentures, crowns and bridges.`,
    chemicalEquations: ["Mercaptan Polymer (-SH) + PbO2 + S -> Polysulfide Rubber + H2O (byproduct)"],
    lastMinuteRevision: [
      "Mercaptan polymer condensed with Lead dioxide catalyst.",
      "Water byproduct evaporation causes high dimensional contraction -> pour within 30 mins.",
      "Highest tear strength among all elastomeric impression materials."
    ]
  },
  {
    id: "p3-5-32",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 5",
    sectionTitle: "Model, Cast, Die and Gypsum Materials",
    topicNumber: "32",
    topicTitle: "Dental Stone / Die Stone (Gypsum Types III, IV, V)",
    marks: "4 Marks",
    rawText: `• Definition: Alpha-hemihydrate gypsum products manufactured by heating calcium sulfate dihydrate under steam pressure or chemical solutions, producing dense crystals used for diagnostic casts and master working dies. ISO 6873 / ADA Spec No. 25.
• Classification: Type III: Dental Stone (Class I / Hydrocal) - W/P ratio 0.28–0.30; Type IV: High Strength / Low Expansion Die Stone (Densite) - W/P ratio 0.20–0.22; Type V: High Strength / High Expansion Die Stone - W/P ratio 0.18–0.20.
• Manufacturing & Structure: Alpha-hemihydrate crystals produced by calcining gypsum in an autoclave under steam pressure at 120–130°C (Type III) or boiling in 30% CaCl2 solution (Type IV/V Densite). Yields smooth, non-porous, dense prismatic alpha-crystals.
• Setting Reaction: Exothermic hydration reaction: (CaSO4)2.H2O + 3H2O -> 2(CaSO4.2H2O) + Heat (3900 cal/g).
• Main Properties: High compressive strength (Type III ~20–30 MPa, Type IV ~35–45 MPa, Type V ~45–55 MPa); low setting expansion (Type IV <= 0.10%); excellent surface hardness and abrasion resistance.
• Manipulation & Steps: Proportion stone and water accurately; vacuum mix or hand spatulate in rubber bowl for 45–60 seconds; pour into impression under mechanical vibration to eliminate air bubbles; allow 45–60 minutes before separation.
• Uses: Master casts for removable prosthetics (Type III), fixed crown & bridge master dies (Type IV), base metal alloy casting dies (Type V).`,
    chemicalEquations: ["(CaSO4)2.H2O + 3H2O -> 2(CaSO4.2H2O) + Heat (3900 cal/g)"],
    lastMinuteRevision: [
      "Alpha-hemihydrate forms dense, non-porous prismatic crystals requiring less mixing water.",
      "Type IV (Densite) has lowest W/P ratio (0.20) and highest abrasion resistance for crown dies.",
      "Type V high expansion compensates for high solid-state contraction of base metal alloys."
    ]
  },
  {
    id: "p3-5-33",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 5",
    sectionTitle: "Model, Cast, Die and Gypsum Materials",
    topicNumber: "33",
    topicTitle: "Epoxy Resin Die Materials",
    marks: "4 Marks",
    rawText: `• Definition: Synthetic resin die material formed by reacting an epoxy resin prepolymer with an amine hardener, producing an extremely tough, abrasion-resistant die for indirect prosthetics.
• Composition: Prepolymer: Bisphenol A and Epichlorohydrin (containing reactive epoxy groups). Hardener: Polyamine curing agent. Fillers: Silica or metallic powders (reduces thermal contraction).
• Setting Reaction: Ring-opening step-growth polymerization reaction between epoxide rings and amine hardener without volatile byproduct formation.
• Main Properties: Superior abrasion resistance and toughness compared to Type IV die stone; zero water solubility; slight polymerization shrinkage (~0.1–0.3%); slower setting time (requires 12–24 hours to cure); INCOMPATIBLE with alginate or agar hydrocolloids (water inhibits set); works best with silicone and polyether impressions.
• Manipulation & Steps: Proportion resin liquid and hardener accurately; mix thoroughly avoiding air bubbles; centrifuge or pour into elastomeric impressions under vibration; allow overnight cure.
• Uses: Dies for all-ceramic crowns, resin-bonded restorations, and intricate indirect cast metal frames requiring extreme edge strength.`,
    lastMinuteRevision: [
      "Provides unmatched abrasion resistance and edge strength compared to gypsum dies.",
      "Requires 12–24 hours to cure fully.",
      "STRICTLY CONTRAINDICATED with hydrocolloid impressions (alginate/agar); must use elastomeric impressions."
    ]
  },
  {
    id: "p3-5-34",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 5",
    sectionTitle: "Model, Cast, Die and Gypsum Materials",
    topicNumber: "34",
    topicTitle: "Investment Materials",
    marks: "4 Marks",
    rawText: `• Definition: Refractory ceramic compounds used to form molds around wax patterns for the lost-wax casting of dental alloy restorations. ISO 15912 / ADA Spec No. 2, 42, 93.
• Classification & Types: 1. Gypsum-Bonded Investments: Refractory Silica + Gypsum binder (Max temp = 700°C; for gold alloys); 2. Phosphate-Bonded Investments: Refractory Silica + Mg_O & Monoammonium phosphate binder + Silica sol liquid (Temp = 700–1000°C; for metal-ceramic PFM alloys); 3. Ethyl Silicate-Bonded Investments: Refractory Silica + Ethyl silicate binder (Temp > 1000°C; for Co-Cr partial denture frames).
• Composition: Refractory Material (Quartz / Cristobalite silica - 60–80%): Provides thermal expansion and withstands high temperatures. Binder (Gypsum / Phosphate / Silicate - 15–30%): Holds refractory grains together. Modifiers (Boric acid, sodium chloride - 1–5%): Regulate setting time and expansion.
• Expansion Mechanisms (Compensating for Alloy Shrinkage ~1.2–2.2%): Setting Expansion (Crystal growth collision) + Hygroscopic Setting Expansion (Immersion in 37°C water bath doubles setting expansion) + Thermal Expansion (Inversion transformation of Quartz at 573°C and Cristobalite at 230°C).
• Uses: Lost-wax casting molds for inlays, crowns, bridges, and partial denture frameworks.`,
    lastMinuteRevision: [
      "Gypsum-bonded investments decompose above 700°C; Phosphate-bonded used for high-fusing PFM alloys.",
      "Silica inversion (Cristobalite 230°C / Quartz 573°C) provides essential thermal expansion.",
      "Hygroscopic expansion (water bath immersion during setting) compensates for alloy shrinkage."
    ]
  },
  {
    id: "p3-6-35",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 6",
    sectionTitle: "Dental Waxes",
    topicNumber: "35",
    topicTitle: "Inlay Casting Wax",
    marks: "4 Marks",
    rawText: `• Definition: Specialty pattern wax formulated to create precise wax patterns for cast metallic inlays, crowns, and bridges using the lost-wax technique. ISO 15854 / ADA Spec No. 4.
• Classification: Type I: Medium/Hard wax for direct intraoral wax pattern technique; Type II: Soft wax for indirect laboratory die technique.
• Composition: Paraffin Wax (40–60% - main constituent, melting range 50–70°C), Carnauba Wax (25% - increases hardness, toughness, and gloss), Ceresin Wax (10% - modifies toughness), Beeswax (5% - reduces brittleness), Synthetic / Candellila waxes & Colorants.
• Main Properties: High coefficient of thermal expansion (~350 x 10^-6 /°C); must burn out completely leaving zero carbon residue (max ash residue <= 0.10%); Wax Memory (internal residual stresses created during manipulation cause wax pattern distortion over time; patterns must be invested immediately).
• Manipulation & Steps: Softened uniformly over flame or water bath; adapt into cavity/die; carve with sharp warmed instruments; invest within 30 minutes to prevent stress relief distortion.
• Uses: Wax pattern fabrication for inlays, onlays, crowns, and FPDs.`,
    lastMinuteRevision: [
      "Paraffin (40-60%) + Carnauba (25%) provides carving hardness and high-gloss polish.",
      "Max burnout ash residue <= 0.10% ensures clean casting mold.",
      "Wax memory / residual stress relaxation causes pattern distortion if investing is delayed (>30 mins)."
    ]
  },
  {
    id: "p3-6-36",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 6",
    sectionTitle: "Dental Waxes",
    topicNumber: "36",
    topicTitle: "RPD Casting Wax",
    marks: "2 Marks",
    rawText: `• Definition: Pattern wax supplied in preformed sheets, ready-made mesh shapes, clasps, and lingual bars used to construct wax patterns for Removable Partial Denture (RPD) frameworks.
• 3-5 High-Yield Points: Supplied in calibrated thicknesses (28 and 30 gauge sheets) with stippled/smooth surface textures mimicking palatal mucosa; Pliable, uniform thickness; Leaves zero ash residue during burnout at 900–1000°C; Applied directly over refractory duplicate casts.`
  },
  {
    id: "p3-6-37",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 6",
    sectionTitle: "Dental Waxes",
    topicNumber: "37",
    topicTitle: "Baseplate Wax (Model Wax)",
    marks: "2 Marks",
    rawText: `• Definition: Pattern wax supplied in pink or red sheets used to build occlusion rims and denture base patterns for removable prosthodontics. ISO 15854 / ADA Spec No. 24.
• 3-5 High-Yield Points: Composition: Paraffin wax (80%), Beeswax (12%), Carnauba wax (2.5%), Resins and microcrystalline wax; Types: Type I (Soft), Type II (Medium), Type III (Hard); Uses: Fabrication of occlusion rims, establishing vertical dimension, setting artificial teeth for trial dentures.`
  },
  {
    id: "p3-6-38",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 6",
    sectionTitle: "Dental Waxes",
    topicNumber: "38",
    topicTitle: "Beading and Boxing Wax",
    marks: "2 Marks",
    rawText: `• Definition: Processing wax used to enclose impression boundaries and construct a vertical enclosure around impressions prior to pouring gypsum.
• 3-5 High-Yield Points: Soft and pliable at room temperature; easily adapted without heating; Beading wax strip attached 2–3 mm below impression border preserves mucobuccal fold contour; Boxing wax sheet wrapped around beading strip forms a 10–15 mm high container for pouring a uniform cast base.`
  },
  {
    id: "p3-6-39",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 6",
    sectionTitle: "Dental Waxes",
    topicNumber: "39",
    topicTitle: "Sticky Wax",
    marks: "2 Marks",
    rawText: `• Definition: Processing wax composed of yellow beeswax, natural rosin, and gum dammar, exhibiting high sticky adhesion when melted and extreme brittleness when cooled.
• 3-5 High-Yield Points: Formula: Yellow beeswax (70%), Natural Rosin (25%), Gum dammar (5%); Adheres firmly to metal, gypsum, and acrylic when melted; When cooled, breaks cleanly with a sharp fracture rather than bending; Used to hold broken denture parts or metal frames in alignment during laboratory assembly.`
  },
  {
    id: "p3-6-40",
    partId: "part-3",
    partTitle: "Comprehensive High-Yield Examination Crash Notes (2-Mark & 4-Mark Topics)",
    sectionNumber: "Section 6",
    sectionTitle: "Dental Waxes",
    topicNumber: "40",
    topicTitle: "Bite Registration Wax",
    marks: "2 Marks",
    rawText: `• Definition: Impression wax formulated with aluminum or copper particles, used to record interocclusal relationships between upper and lower dental arches.
• 3-5 High-Yield Points: Formulated with paraffin, beeswax, and 20–30% metal filings (e.g. Aluwax); Softens at 45–50°C; Metal particles increase thermal conductivity and density; Easily distorted during storage; Largely replaced by elastomeric bite registration materials in modern clinical practice.`
  },

  // =========================================================================
  // PART 4 (Pages 39 - 59)
  // =========================================================================
  {
    id: "p4-7-1",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 7",
    sectionTitle: "Dental Casting Investments",
    topicNumber: "1",
    topicTitle: "Gypsum-Bonded Investments",
    marks: "4 Marks",
    rawText: `1. Definition: Refractory mold materials bound by alpha-calcium sulfate hemihydrate (dental stone), designed for casting gold and high-noble gold alloys at burnout temperatures not exceeding 700°C.
2. Classification (ADA Spec No. 2 / ISO 7490):
• Type I: Inlay thermal expansion type (for gold inlays and crowns).
• Type II: Inlay hygroscopic expansion type (requires water immersion during setting).
• Type III: Denture casting type (for partial denture gold frameworks).
3. Composition & Constituent Functions:
• Refractory Silica (60–65%): Quartz or Cristobalite. Provides high temperature resistance and thermal expansion to compensate for gold alloy casting shrinkage (~1.25–1.4%).
• Binder (30–35%): Alpha-calcium sulfate hemihydrate. Provides green strength upon setting and holds silica grains together.
• Modifiers (up to 5%): Reducing agents (carbon or copper powder) to prevent gold alloy oxidation; setting regulators (NaCl, K2SO4, boric acid) to control expansion and setting time.
4. Applicable Specification: ANSI/ADA Specification No. 2 / ISO 7490.
5. Key Properties:
• Thermal Expansion: 0.7–1.4% (Cristobalite provides higher expansion at lower temperatures than quartz).
• Hygroscopic Expansion: 1.2–2.2% when immersed in 37°C water bath during setting.
• Thermal Decomposition Constraint: Decomposes above 700°C releasing sulfur dioxide gas (SO2), which severely embrittles gold alloys and ruins casting surfaces.
6. Setting Reaction:
CaSO4·½H2O + 1.5 H2O ──> CaSO4·2H2O + Heat (Exothermic)
7. Step-by-Step Manipulation:
1. Proportioning: Water-to-powder ratio = 0.30–0.40.
2. Mixing: Vacuum mechanical mixing for 30 seconds to eliminate air bubbles.
3. Ring Preparation: Line casting ring with 1 mm non-asbestos ring liner to allow lateral setting expansion.
4. Burnout: Slowly heat in burnout furnace to 650–700°C maximum.
8. Uses & Indications: Casting gold inlays, onlays, crowns, and Type I–IV gold partial denture frameworks.
9. Advantages & Disadvantages:
• Advantages: Smooth surface finish, easily divested, adequate expansion for gold alloys.
• Disadvantages: Cannot be heated above 700°C; unsuitable for high-melting base metal or ceramic alloys.`,
    chemicalEquations: ["CaSO4·½H2O + 1.5 H2O ──> CaSO4·2H2O + Heat (Exothermic)"],
    examCallout: [
      "ADA Spec No.: Specification No. 2 (ISO 7490)",
      "Max Burnout Temp: 700°C (SO2 gas decomposes alloy above 700°C)",
      "W/P Ratio: 0.30 to 0.40",
      "Refractory Phase: Cristobalite (higher thermal expansion) or Quartz",
      "Clinical Uses: Gold inlays, onlays, crowns, Type I-IV gold alloys"
    ]
  },
  {
    id: "p4-7-2",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 7",
    sectionTitle: "Dental Casting Investments",
    topicNumber: "2",
    topicTitle: "Phosphate-Bonded Investments",
    marks: "4 Marks",
    rawText: `1. Definition: High-temperature refractory investment materials utilizing a magnesium oxide-phosphate reaction binder, capable of withstanding burnout temperatures up to 1000–1100°C for metal-ceramic base metal/noble alloys and pressable ceramics.
2. Classification (ISO 9694 / ADA Spec No. 42):
• Type I: For crowns, inlays, and fixed partial dentures (metal-ceramic systems).
• Type II: For partial denture frameworks and non-precious removable prostheses.
3. Composition & Constituent Functions:
• Powder Refractory (80%): Quartz and Cristobalite silica grains for thermal endurance.
• Powder Binder (20%): Magnesium Oxide (MgO) and Monoammonium Phosphate [NH4H2PO4].
• Liquid Component: Special liquid = Aqueous suspension of colloidal silica (increases setting and thermal expansion); can be diluted with distilled water to decrease expansion.
4. Key Properties:
• Thermal Endurance: Stable up to 1000–1100°C without sulfur decomposition.
• Compressive Strength: Very high green and fired strength (resists heavy forces of base metal centrifugal casting).
• Expansion Control: Concentration of special liquid directly controls total setting and thermal expansion.
5. Setting & Firing Mechanism:
NH4H2PO4 + MgO + 5 H2O ──> MgNH4PO4·6H2O (Room Temp Setting Matrix)
Heating to 1000°C converts matrix to Magnesium Pyrophosphate [Mg2P2O7].
6. Step-by-Step Manipulation:
1. Liquid Selection: Choose special colloidal silica liquid concentration based on desired expansion.
2. Mixing: Vacuum mix powder and liquid for 60 seconds.
3. Setting: Allow to bench set for 45–60 minutes.
4. Burnout: Heat to 900–1000°C in burnout furnace.
7. Uses & Indications: Casting Ni-Cr, Co-Cr, high-melting noble PFM substructures, and pressable ceramic cores (e.g., lithium disilicate).`,
    chemicalEquations: [
      "NH4H2PO4 + MgO + 5 H2O ──> MgNH4PO4·6H2O (Room Temp Setting Matrix)",
      "Heating to 1000°C converts matrix to Magnesium Pyrophosphate [Mg2P2O7]"
    ],
    examCallout: [
      "Binder Constituents: MgO + Monoammonium Phosphate [NH4H2PO4]",
      "Special Liquid: Colloidal Silica suspension (increases expansion)",
      "Burnout Range: 900°C to 1000°C",
      "High-Temp Conversion: Forms Magnesium Pyrophosphate [Mg2P2O7]",
      "Clinical Uses: Metal-Ceramic (PFM) crowns, Ni-Cr/Co-Cr alloys, Pressable ceramics"
    ]
  },
  {
    id: "p4-7-3",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 7",
    sectionTitle: "Dental Casting Investments",
    topicNumber: "3",
    topicTitle: "Refractory Investments",
    marks: "4 Marks",
    rawText: `1. Definition: High-temperature investment materials formulated to withstand extreme thermal stress (above 1100°C) and used directly for fabricating refractory working casts for partial dentures or dies for porcelain veneers.
2. Classification:
• Phosphate-Bonded Refractory Cast Materials.
• Silica/Ethyl Silicate-Bonded Refractory Investments.
• Porcelain Veneer Refractory Die Materials.
3. Composition: Fine Quartz, Cristobalite, Silica gel, Magnesium oxide, Phosphate binders, and specialized alumina glass additives to match ceramic thermal expansion coefficients.
4. Key Properties:
• High Thermal Expansion: Matches heavy casting shrinkage (~2.3%) of Cobalt-Chromium base metal alloys.
• Thermal Shock Resistance: Allows repeated firing cycles in porcelain furnaces up to 1050°C without cracking.
5. Step-by-Step Laboratory Procedure (Refractory Cast Fabrication):
1. Duplication: Duplicate master cast using agar hydrocolloid or silicone duplicating material.
2. Pouring: Pour mixed refractory investment into impression under gentle vibration.
3. Degassing / Trimming: Trim cast and heat treat (degas) at 1000–1050°C before applying wax pattern or porcelain.
6. Uses & Indications: 1. Removable partial denture (RPD) refractory working casts for wax-up and casting.
2. Refractory dies for direct firing of porcelain veneers and inlays.`,
    examCallout: [
      "Primary Application: RPD working casts & Porcelain veneer refractory dies",
      "Thermal Endurance: Resists repeated firings up to 1200°C",
      "Expansion Match: Matches Co-Cr alloy shrinkage (~2.3%)",
      "Key Procedure: Master cast duplicated in Agar/Silicone -> Poured in Refractory Investment"
    ]
  },
  {
    id: "p4-7-4",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 7",
    sectionTitle: "Dental Casting Investments",
    topicNumber: "4",
    topicTitle: "Silica-Bonded Investments",
    marks: "4 Marks",
    rawText: `1. Definition: High-temperature investment materials utilizing a silica gel binder (derived from ethyl silicate or colloidal silica), specifically designed for casting high-melting base metal alloys like Cobalt-Chromium.
2. Classification / Types:
• Two-Component System: Ethyl silicate liquid + acid catalyst + powder.
• One-Component System: Pre-hydrolyzed ethyl silicate powder/liquid.
3. Composition & Functions:
• Powder Refractory: Quartz or Cristobalite (80–85%) plus Magnesium Oxide powder.
• Binder Liquid: Ethyl silicate [Si(OC2H5)4], water, ethanol, and Hydrochloric Acid (HCl) catalyst.
4. Setting & Firing Reaction:
Ethyl Silicate + Water + HCl Catalyst ──> Silicic Acid [Si(OH)4] + Ethanol
Silicic Acid polymerizes into Silica Gel [SiO2·xH2O] matrix.
Heating above 1000°C converts gel into pure Silica [SiO2] binder.
5. Manipulation & Safety Precautions:
• Hydrolysis Step: Ethyl silicate is mixed with acid/alcohol and allowed to hydrolyze before adding refractory powder.
• Flammability Precaution: Alcohol released during setting is highly flammable; burnout furnace must have proper ventilation and slow initial heating to prevent explosion.
6. Uses & Indications: Large Cobalt-Chromium removable partial denture (RPD) frameworks.`,
    chemicalEquations: [
      "Ethyl Silicate + Water + HCl Catalyst ──> Silicic Acid [Si(OH)4] + Ethanol",
      "Silicic Acid polymerizes into Silica Gel [SiO2·xH2O] matrix",
      "Heating above 1000°C converts gel into pure Silica [SiO2] binder"
    ],
    examCallout: [
      "Binder Liquid: Ethyl Silicate + HCl catalyst",
      "Setting Matrix: Hydrolysis produces Silicic Acid -> Silica Gel",
      "High-Temp Binder: Converts to pure Silica [SiO2] at 1000°C",
      "Hazard Note: Flammable alcohol byproduct requires slow ventilated burnout",
      "Application: Co-Cr partial denture framework casting"
    ]
  },
  {
    id: "p4-7-5",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 7",
    sectionTitle: "Dental Casting Investments",
    topicNumber: "5",
    topicTitle: "Ammonium Colloidal Phosphate",
    marks: "2 Marks",
    rawText: `1. Definition: A specialized chemical binder and liquid modifier system comprising monoammonium phosphate powder and colloidal silica liquid suspension, used in high-temperature phosphate-bonded dental investments.
2. Key Principles & Mechanism:
• Monoammonium phosphate [NH4H2PO4] reacts with MgO to form the room-temperature setting matrix.
• Colloidal silica liquid regulates both setting expansion and thermal expansion to compensate for alloy shrinkage.
3. Clinical / Laboratory Applications: Used as binder liquid and powder modifier in phosphate-bonded investment systems for PFM crowns and base-metal alloys.`,
    examCallout: [
      "Constituents: Monoammonium phosphate + Colloidal silica liquid",
      "Function: Reacts with MgO to form green strength matrix",
      "Expansion Control: Colloidal silica concentration dictates total expansion",
      "Application: Phosphate-bonded investments for PFM and base metals"
    ]
  },
  {
    id: "p4-8-6",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 8",
    sectionTitle: "Dental Casting Alloys and Wrought Alloys",
    topicNumber: "6",
    topicTitle: "Cobalt–Chromium Alloys",
    marks: "4 Marks",
    rawText: `1. Definition: Non-precious base metal casting alloys composed primarily of cobalt and chromium, widely used for fabricating removable partial denture (RPD) frameworks.
2. Classification (ADA Spec No. 14 / ISO 22674): Type 4 (extra high strength) and Type 5 (ultra-high strength) metallic materials.
3. Composition & Constituent Functions:
• Cobalt (60%): Provides high hardness, strength, rigidity, and high elastic modulus.
• Chromium (25–30%): Ensures passivation and tarnish/corrosion resistance via a protective surface chromic oxide [Cr2O3] layer.
• Molybdenum (5–6%): Refines grain size and enhances yield strength.
• Carbon (0.2–0.5%): Critical constituent; forms carbides with cobalt and chromium to drastically increase hardness and strength (excess causes brittleness).
4. Key Properties:
• Fusion Temperature: 1400–1450°C (requires induction or oxy-acetylene melting).
• Density: 8.0–8.5 g/cm³ (approx. half the weight of gold alloys).
• Elastic Modulus: 220 GPa (twice as rigid as gold, allowing thinner partial denture connectors).
• Casting Shrinkage: 2.3% (requires high expansion phosphate/silica investments).
5. Uses & Indications: Removable partial denture (RPD) frameworks, clasps, major connectors, and surgical bone plates.`,
    examCallout: [
      "Composition: 60% Co, 25-30% Cr, 5-6% Mo, 0.2-0.5% C",
      "Passivation: Chromic Oxide [Cr2O3] surface layer resists corrosion",
      "Elastic Modulus: 220 GPa (2x Gold -> thinner major connectors)",
      "Casting Shrinkage: 2.3% (highest among casting alloys)",
      "Density: 8.0 g/cm³ (half the weight of gold)"
    ]
  },
  {
    id: "p4-8-7",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 8",
    sectionTitle: "Dental Casting Alloys and Wrought Alloys",
    topicNumber: "7",
    topicTitle: "Stainless Steel",
    marks: "2 Marks",
    rawText: `1. Definition: An iron-carbon alloy containing at least 11% chromium, extensively cold-worked into wrought form for orthodontic archwires, brackets, band materials, and pediatric crowns.
2. Classification / Types: Austenitic 18-8 Stainless Steel (18% Chromium, 8% Nickel; AISI Type 302/304).
3. Key Properties & Precautions:
• Passivation layer of Cr2O3 gives corrosion resistance.
• Elastic modulus ~200 GPa; high yield strength.
• Sensitization Hazard: Heating between 400–900°C during soldering precipitates chromium carbide at grain boundaries, causing severe intergranular rust.`,
    examCallout: [
      "Type: 18-8 Austenitic Stainless Steel (18% Cr, 8% Ni)",
      "Modulus: 200 GPa",
      "Passivation: Chromic oxide layer",
      "Hazard: Heating >400°C causes Sensitization (carbide precipitation -> rust)",
      "Uses: Orthodontic archwires, brackets, pediatric crowns"
    ]
  },
  {
    id: "p4-8-8",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 8",
    sectionTitle: "Dental Casting Alloys and Wrought Alloys",
    topicNumber: "8",
    topicTitle: "Nickel–Titanium Alloys",
    marks: "2 Marks",
    rawText: `1. Definition: An equiatomic wrought alloy composed of 55% Nickel and 45% Titanium (Nitinol) possessing exceptional superelasticity and thermal shape memory.
2. Key Principle & Mechanism: Stress-induced phase transformation between Austenitic (cubic) and Martensitic (monoclinic) crystal structures, delivering low continuous forces over large working deflections.
3. Clinical Applications: Initial orthodontic tooth alignment archwires and rotary endodontic shaping files (M-Wire, R-Phase).`,
    examCallout: [
      "Composition: 55% Ni - 45% Ti (Equiatomic Nitinol)",
      "Key Properties: Superelasticity & Thermal Shape Memory",
      "Phase Transformation: Stress-induced Austenitic <-> Martensitic shift",
      "Applications: Orthodontic alignment wires & Rotary endodontic files"
    ]
  },
  {
    id: "p4-8-9",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 8",
    sectionTitle: "Dental Casting Alloys and Wrought Alloys",
    topicNumber: "9",
    topicTitle: "Orthodontic Wire",
    marks: "2 Marks",
    rawText: `1. Definition: Wrought metallic wires manufactured by cold drawing, used to construct appliances that apply controlled, continuous mechanical forces to move teeth or maintain arch form.
2. Types of Wires: Stainless Steel, Cobalt-Chromium-Nickel (Elgiloy), Nickel-Titanium (NiTi), and Beta-Titanium (TMA / Titanium-Molybdenum Alloy).
3. Essential Properties: High springback, high resilience, excellent formability, high yield strength, and resistance to stress relaxation.`,
    examCallout: [
      "Structure: Wrought cold-drawn wire",
      "Wire Types: Stainless Steel, Elgiloy, NiTi, Beta-Titanium (TMA)",
      "Core Mechanical Properties: Springback, resilience, formability, bio-compatibility",
      "Clinical Goal: Applies continuous physiological tooth-moving forces"
    ]
  },
  {
    id: "p4-9-10",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 9",
    sectionTitle: "Abrasives and Polishing Materials",
    topicNumber: "10",
    topicTitle: "Pumice",
    marks: "2 Marks",
    rawText: `1. Definition: A natural volcanic siliceous abrasive material used in various grain sizes for grinding and polishing dental acrylics, tooth enamel, and metal restorations.
2. Composition & Manipulation: Silicates of aluminum, potassium, and sodium. Mixed with water to form a wet slurry and used with rag wheels, felt cones, or rubber prophy cups.
3. Clinical & Laboratory Uses: Laboratory polishing of acrylic denture bases; clinical prophylaxis to remove extrinsic enamel stains.`,
    examCallout: [
      "Origin: Natural volcanic siliceous rock",
      "Grades: Flour of pumice (fine) to coarse grains",
      "Mode of Use: Slurry with water on rag wheel / prophy cup",
      "Uses: Denture acrylic finishing & Enamel stain removal"
    ]
  },
  {
    id: "p4-9-11",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 9",
    sectionTitle: "Abrasives and Polishing Materials",
    topicNumber: "11",
    topicTitle: "Dental Cleansers",
    marks: "2 Marks",
    rawText: `1. Definition: Chemical solutions or abrasive formulations designed for daily immersion or brushing of removable full and partial dentures to remove plaque, stains, and food debris.
2. Classification / Types: Alkaline Peroxides (effervescent tablets releasing O2), Alkaline Hypochlorites (bleach solutions), Acid Cleaners, and Abrasive Pastes.
3. Important Precautions: Hypochlorites cause tarnish/corrosion on base metal clasps; hot water warps PMMA denture bases.`,
    examCallout: [
      "Alkaline Peroxides: Effervescent oxygen bubble cleaning action",
      "Alkaline Hypochlorites: Corrode/tarnish metal clasps (avoid in RPDs)",
      "Water Temp Note: Never use hot water (causes PMMA warping)",
      "Method: 15-30 min daily immersion + soft brush scrubbing"
    ]
  },
  {
    id: "p4-9-12",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 9",
    sectionTitle: "Abrasives and Polishing Materials",
    topicNumber: "12",
    topicTitle: "Rouge / Kieselguhr",
    marks: "2 Marks",
    rawText: `1. Definitions:
• Rouge (Iron Oxide [Fe2O3]): A fine red polishing cake applied to rag wheels for final high-luster polishing of gold and noble metal alloys.
• Kieselguhr (Diatomaceous Earth): A mild siliceous abrasive derived from fossilized diatom remains, used as a fine polishing powder and alginate filler.
2. Key Applications: Rouge gives high shine on extraoral gold restorations; Kieselguhr acts as a mild abrasive in polishing pastes.`,
    examCallout: [
      "Rouge: Iron Oxide [Fe2O3] red cake for final high polish on gold",
      "Kieselguhr: Diatomaceous silica earth filler & mild polishing powder",
      "Rouge Safety Note: Toxic if inhaled; used strictly extraorally"
    ]
  },
  {
    id: "p4-9-13",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 9",
    sectionTitle: "Abrasives and Polishing Materials",
    topicNumber: "13",
    topicTitle: "Diamond / Carborundum",
    marks: "2 Marks",
    rawText: `1. Definitions:
• Diamond Abrasive: The hardest known substance (Mohs hardness 10), bonded via electroplated nickel onto rotary shanks for high-speed cutting of tooth enamel and ceramics.
• Carborundum (Silicon Carbide [SiC]): A synthetic abrasive (Mohs hardness 9.5) molded into grinding wheels, separators, and discs for metal and ceramic reduction.`,
    examCallout: [
      "Diamond: Mohs Hardness 10 (hardest); used for tooth prep & ceramic cutting",
      "Carborundum: Synthetic Silicon Carbide [SiC]; Mohs Hardness 9.5",
      "Applications: Carborundum separating discs for casting sprues & metals"
    ]
  },
  {
    id: "p4-9-14",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 9",
    sectionTitle: "Abrasives and Polishing Materials",
    topicNumber: "14",
    topicTitle: "Dentifrices",
    marks: "4 Marks",
    rawText: `1. Definition: Pastes, gels, or powders used in conjunction with a toothbrush to clean accessible surfaces of teeth for cosmetic, hygienic, and therapeutic benefits.
2. Classification: Cosmetic Dentifrices, Anti-Caries Dentifrices, Desensitizing Dentifrices, Anti-Plaque/Gingivitis Dentifrices, and Anti-Calculus Dentifrices.
3. Composition & Constituent Functions:
• Abrasives (20–40%): Hydrated Silica, Calcium Carbonate, Dicalcium Phosphate. Remove stain and plaque mechanically.
• Humectants (20–40%): Glycerin, Sorbitol, Propylene Glycol. Retain moisture and prevent paste hardening.
• Water (20–30%): Solvent vehicle.
• Surfactant / Detergent (1–2%): Sodium Lauryl Sulfate (SLS). Lowers surface tension, foams, emulsifies debris.
• Binders / Thickeners (1–2%): Sodium Carboxymethyl Cellulose (CMC), Xanthan Gum. Prevents liquid-solid separation.
• Therapeutic Agents (1–2%): Sodium Fluoride (0.24% NaF) or Monofluorophosphate (MFP) for caries prevention; Potassium Nitrate for dentin desensitization; Zinc Citrate / Triclosan for anti-plaque.
4. Limitations & Precautions: Excessive abrasiveness (high Relative Dentin Abrasivity RDA >100) causes cervical dentin abrasion and gingival recession.`,
    examCallout: [
      "Abrasives (20-40%): Hydrated Silica, CaCO3",
      "Humectants (20-40%): Glycerin, Sorbitol (retains moisture)",
      "Surfactant (1-2%): Sodium Lauryl Sulfate (SLS foaming agent)",
      "Active Fluoride: 0.24% NaF / Monofluorophosphate (MFP)",
      "Desensitizer: Potassium Nitrate (depolarizes dentinal nerves)"
    ]
  },
  {
    id: "p4-10-15",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 10",
    sectionTitle: "Dental Ceramics and Porcelains",
    topicNumber: "15",
    topicTitle: "Classification of Porcelains",
    marks: "4 Marks",
    rawText: `1. Definition: Inorganic, non-metallic ceramic materials composed of glass and crystalline phases produced by high-temperature firing (sintering), designed for aesthetic indirect restorations.
2. Comprehensive Classifications:
• A. By Firing Temperature:
• High-Fusing (1300–1400°C): Denture teeth.
• Medium-Fusing (1100–1300°C): All-ceramic cores, pontics, inlays.
• Low-Fusing (850–1100°C): Metal-ceramic (PFM) crowns and veneers.
• Ultra-Low Fusing (<850°C): Titanium crowns and shoulder ceramics.
• B. By Composition & Crystalline Phase:
• Feldspathic Glass Ceramics.
• Leucite-Reinforced Ceramics.
• Lithium Disilicate Glass Ceramics.
• Polycrystalline Ceramics (Y-TZP Zirconia & Alumina).
• C. By Processing Method: Sintered Porcelain, Heat-Pressed, Slip-Cast, and CAD/CAM Machined Blocks.
• D. By Layering Application: Opaque Core Porcelain, Dentin/Body Porcelain, Enamel/Translucent Porcelain, Glaze/Stains.`,
    examCallout: [
      "Firing Temps: High (>1300°C), Med (1100-1300°C), Low (850-1100°C), Ultra-Low (<850°C)",
      "Materials: Feldspathic -> Leucite -> Lithium Disilicate -> Zirconia",
      "Layer Structure: Opaque (masks metal) + Dentin + Enamel + Glaze",
      "Processing: Sintered, Pressed, Slip-cast, CAD/CAM Milled"
    ]
  },
  {
    id: "p4-10-16",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 10",
    sectionTitle: "Dental Ceramics and Porcelains",
    topicNumber: "16",
    topicTitle: "CAD/CAM Ceramics",
    marks: "4 Marks",
    rawText: `1. Definition: Homogeneous, industrially manufactured ceramic blocks processed using Computer-Aided Design and Computer-Aided Manufacturing (subtractive milling) for indirect restorations.
2. Types of CAD/CAM Blocks:
• Feldspathic Blocks (VITA Mark II): Monolithic glass blocks for inlays/veneers.
• Lithium Disilicate (IPS e.max CAD): Milled in a soft blue metasilicate state (130 MPa) and subsequently sintered at 840°C to achieve full strength (360–400 MPa).
• Polycrystalline Zirconia (Y-TZP): Milled in a soft partially sintered 'green' state (20% oversized to account for sintering shrinkage) and fired at 1450°C.
3. Advantages: Zero internal porosity, high strength, single-visit chairside restoration option, precise marginal fit (30–50 µm).`,
    examCallout: [
      "Factory Blocks: Homogeneous density free of hand-condensation voids",
      "IPS e.max CAD: Milled in soft 'blue state' -> Sintered at 840°C (360-400 MPa)",
      "Zirconia Milling: Milled 20% oversized in soft state to accommodate shrinkage",
      "Clinical Fit: Precise margins (30-50 µm)"
    ]
  },
  {
    id: "p4-10-17",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 10",
    sectionTitle: "Dental Ceramics and Porcelains",
    topicNumber: "17",
    topicTitle: "Glass Ceramics",
    marks: "4 Marks",
    rawText: `1. Definition: Materials initially formed as monolithic glass and subsequently converted into a partially crystalline ceramic through controlled thermal devitrification (ceramming).
2. Key Types:
• Castable Glass Ceramic (Dicor): Tetrasilicic fluormica crystals.
• Heat-Pressable Lithium Disilicate (IPS e.max Press): 70% interlocking needle-like lithium disilicate crystals in glass matrix.
3. Properties & Mechanism:
• High Flexural Strength: 360–400 MPa.
• Dispersion Strengthening: Needle-like crystals deflect and stop crack tip propagation.
• Etchability: Silica glass matrix can be etched with 5% Hydrofluoric Acid (HF) for resin bonding.`,
    examCallout: [
      "Ceramming Process: Controlled heating converts glass to crystalline ceramic",
      "IPS e.max Press: 70% Lithium Disilicate needle-like crystals",
      "Flexural Strength: 360 to 400 MPa",
      "Etching for Bonding: Etched with 5% HF acid + Silane coupling agent"
    ]
  },
  {
    id: "p4-10-18",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 10",
    sectionTitle: "Dental Ceramics and Porcelains",
    topicNumber: "18",
    topicTitle: "Metal–Ceramic Systems / Bonding",
    marks: "4 Marks",
    has3DModel: "crown-die",
    rawText: `1. Definition: Restorations consisting of a ceramic porcelain layer fused to a cast metal alloy substructure (PFM), combining the mechanical strength of alloys with the aesthetic qualities of porcelain.
2. Four Mechanisms of Metal-Ceramic Bonding:
• 1. Chemical Bonding (Primary, 50–80%): Formation of a trace oxide layer (tin, indium, gallium oxides in alloy) during degassing that chemically reacts with silica in opaque porcelain.
• 2. Mechanical Interlocking: Air abrasion of alloy surface with 50 µm alumina powder creates micro-retentive anchors.
• 3. Compression Bonding (Thermal Mismatch): Alloy CTE (14.0–14.5 × 10⁻⁶/°C) is slightly higher than porcelain CTE (13.0–13.5 × 10⁻⁶/°C), placing porcelain under beneficial compressive stress upon cooling.
• 4. Van der Waals Forces: Physical surface wetting.
3. Critical Precaution: Over-thick oxide layer causes bond failure; CTE mismatch >1.0 × 10⁻⁶/°C leads to porcelain crazing or shear fracture.`,
    examCallout: [
      "Primary Bond: Chemical bond via trace oxide layer (In, Sn, Ga oxides)",
      "Thermal Expansion Match: Alloy CTE slightly > Porcelain CTE (compressive fit)",
      "Degassing Step: Removes impurities & forms necessary oxide layer",
      "Mechanical Bond: Sandblasting with 50 µm Al2O3"
    ]
  },
  {
    id: "p4-10-19",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 10",
    sectionTitle: "Dental Ceramics and Porcelains",
    topicNumber: "19",
    topicTitle: "Strengthening of Porcelains",
    marks: "4 Marks",
    rawText: `1. Definition: Physical, chemical, and structural methods employed in ceramic science to counteract inherent brittleness and prevent crack propagation under tensile loads.
2. Four Core Strengthening Mechanisms:
• 1. Dispersion Strengthening: Adding tough crystalline particles (Alumina, Leucite, Lithium Disilicate) to deflect and block crack tips.
• 2. Transformation Toughening (Zirconia Y-TZP): Tensile stress at a crack tip triggers a phase transition from Tetragonal to Monoclinic (t ──> m) with a 3–5% volume expansion that squeezes the crack tip shut.
• 3. Residual Surface Compression: Chemical toughening (K+ ion exchange replacing smaller Na+ ions on surface below strain point) or thermal tempering.
• 4. High-Strength Substructure Reinforcement (PFM or Zirconia cores).`,
    examCallout: [
      "Dispersion Strengthening: Crystal additions deflect cracks",
      "Transformation Toughening: Zirconia t -> m phase expansion (3-5%) squeezes cracks",
      "Ion Exchange (Stuffing): K+ replaces Na+ on surface -> residual compression",
      "Core Support: Metal or Zirconia high-strength substructure"
    ]
  },
  {
    id: "p4-10-20",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 10",
    sectionTitle: "Dental Ceramics and Porcelains",
    topicNumber: "20",
    topicTitle: "Recent Advances in Ceramics",
    marks: "4 Marks",
    rawText: `1. Definition: Modern breakthroughs in ceramic formulation aimed at combining high fracture toughness, natural enamel translucency, and digital manufacturability.
2. Four Major Recent Innovations:
• 1. High-Translucency Multilayered Zirconia (5Y-TZP): Increased yttria content (>50% cubic phase) provides high translucency for monolithic anterior crowns without requiring porcelain veneering.
• 2. Polymer-Infiltrated Ceramic Network (PICN / Enamic): Dual-network hybrid combining 86% ceramic matrix infiltrated with 14% polymer, matching human dentin elastic modulus (30 GPa).
• 3. 3D Printing / Additive Ceramic Manufacturing: Stereolithography (SLA) printing of zirconia slurries.
• 4. Ultra-Thin Monolithic Resin-Bonded Veneers.`,
    examCallout: [
      "5Y-TZP Cubic Zirconia: High cubic phase -> Translucent monolithic crowns",
      "PICN (VITA Enamic): Hybrid ceramic-polymer network; Modulus 30 GPa (dentin-like)",
      "Additive Manufacturing: SLA 3D printing of zirconia restorations",
      "Clinical Benefit: Minimal tooth reduction & defect-free CAD manufacturing"
    ]
  },
  {
    id: "p4-10-21",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 10",
    sectionTitle: "Dental Ceramics and Porcelains",
    topicNumber: "21",
    topicTitle: "Firing of Porcelains",
    marks: "4 Marks",
    rawText: `1. Definition: The controlled thermal sintering process of heating condensed porcelain powder in a vacuum furnace to fuse particles into a dense ceramic restoration.
2. Five Sequential Stages of Firing:
1. Preheating / Drying Stage: Evaporates remaining water to prevent steam explosion cracks.
2. Low Bisque Stage: Particles soften and unite at contact points; minimal volumetric shrinkage.
3. Medium Bisque Stage: Particle fusion advances with 30–40% volumetric shrinkage; vacuum applied to pull out trapped air.
4. High Bisque Stage: Complete fusion, smooth surface, final size achieved; vacuum released before peak temperature.
5. Glazing Stage: Heating to self-glaze temperature to seal surface microcracks.`,
    examCallout: [
      "Firing Stages: Drying -> Low Bisque -> Medium Bisque -> High Bisque -> Glazing",
      "Vacuum Function: Evacuates air voids between 500°C and 950°C",
      "Firing Shrinkage: 30% to 40% volumetric shrinkage (requires over-building)",
      "Glazing Goal: Blunts surface crack tips to maximize strength"
    ]
  },
  {
    id: "p4-11-22",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 11",
    sectionTitle: "Dental Implant Materials",
    topicNumber: "22",
    topicTitle: "Dental Implant Materials",
    marks: "4 Marks",
    has3DModel: "dental-implant",
    rawText: `1. Definition: Biocompatible metallic or ceramic materials surgically anchored into maxilla or mandible bone to support fixed or removable dental prostheses through osseointegration.
2. Core Implant Materials:
• Commercially Pure Titanium (cpTi): Grades 1 to 4 (classified by increasing oxygen content 0.18–0.40%; Grade 4 has highest strength 480 MPa).
• Titanium Alloys: Ti-6Al-4V (Grade 5; 6% Aluminum, 4% Vanadium; yield strength 830 MPa).
• Ceramics: Y-TZP Zirconia (for tooth-colored aesthetic anterior implants).
3. Key Properties & Osseointegration:
• Passivation Layer: Spontaneous formation of a protective Titanium Dioxide [TiO2] surface layer.
• Osseointegration: Direct structural and functional connection between living bone and titanium oxide without intervening fibrous connective tissue.
• Elastic Modulus: 110 GPa (closer to cortical bone than stainless steel).
4. Surface Modifications: SLA (Sandblasted, Large-grit, Acid-etched), Anodization, and Hydroxyapatite (HA) coating to accelerate bone contact.`,
    examCallout: [
      "Materials: cpTi (Grades 1-4), Ti-6Al-4V (Grade 5), Y-TZP Zirconia",
      "Passivation: Titanium Dioxide [TiO2] surface film provides biocompatibility",
      "Osseointegration: Direct bone-to-implant contact without fibrous tissue",
      "Elastic Modulus: ~110 GPa (cpTi)",
      "Surface Prep: SLA (Sandblasted, Acid-etched) accelerates bone bonding"
    ]
  },
  {
    id: "p4-11-23",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 11",
    sectionTitle: "Dental Implant Materials",
    topicNumber: "23",
    topicTitle: "Parts and Types of Implants",
    marks: "2 Marks",
    has3DModel: "dental-implant",
    rawText: `1. Types of Dental Implants: Endosseous Implants (root-form threaded/tapered; standard clinical choice), Subperiosteal Implants, Transosteal Implants.
2. Five Core Structural Components:
1. Implant Fixture / Body: Threaded post embedded in bone.
2. Cover Screw / Healing Cap: Protects internal threads during surgical healing.
3. Abutment: Connects fixture to crown through soft tissue.
4. Abutment Screw: Secures abutment to fixture.
5. Prosthetic Crown / Restoration.`,
    examCallout: [
      "Standard Type: Endosseous root-form threaded implants",
      "Components: Fixture -> Cover Screw -> Abutment -> Abutment Screw -> Crown",
      "Surgical Stages: 2-stage (submerged fixture) vs 1-stage (transmucosal healing)"
    ]
  },
  {
    id: "p4-12-24",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 12",
    sectionTitle: "Denture Base Resins and Polymers",
    topicNumber: "24",
    topicTitle: "Light-Activated Denture Base Resins",
    marks: "2 Marks",
    rawText: `1. Definition: Visible Light Cured (VLC) dimethacrylate composite resins supplied as premixed sheets or ropes for custom impression trays, denture repair, and baseplates.
2. Composition & Mechanism: Urethane Dimethacrylate (UDMA) matrix, microfine silica filler (80–85%), Camphorquinone photoinitiator (activated by 468 nm blue light in a light curing chamber for 4–5 min).
3. Advantages & Clinical Uses: Zero free methyl methacrylate monomer toxicity; fast dimensional stability; used for custom trays, baseplates, and repair.`,
    examCallout: [
      "Composition: UDMA matrix + Silica filler + Camphorquinone",
      "Curing Source: 468 nm blue light in VLC chamber (4-5 min)",
      "Key Advantage: Zero free monomer (MMA) allergic potential",
      "Uses: Custom impression trays, baseplates, denture repairs"
    ]
  },
  {
    id: "p4-12-25",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 12",
    sectionTitle: "Denture Base Resins and Polymers",
    topicNumber: "25",
    topicTitle: "Soft Resilient Dental Liners",
    marks: "4 Marks",
    rawText: `1. Definition: Elastomeric cushion materials applied to the fitting surface of hard acrylic denture bases to absorb shock and relieve traumatized, thin oral mucosa.
2. Two Major Types:
• Plasticized Acrylics: Heat-cured or self-cured PMMA/PEMA with 30–50% liquid plasticizer (Dibutyl Phthalate).
• Silicone Elastomers: Room Temperature Vulcanizing (RTV) or Heat Vulcanizing Silicones (dimethylsiloxane polymers).
3. Key Properties & Clinical Limitations:
• Hardness: Shore A hardness 40–50.
• Plasticizer Leaching: Plasticized acrylics leach plasticizer in saliva, becoming hard and foul-smelling after months.
• Fungal Growth & Debonding: Silicone liners remain soft longer but suffer from Candida albicans colonization and debonding from PMMA.`,
    examCallout: [
      "Indication: Cushions thin mucosa, bony ridges, or bruxist patients",
      "Types: Plasticized Acrylics vs Silicone Elastomers",
      "Acrylic Failure: Plasticizer leaches out -> material hardens",
      "Silicone Failure: Susceptible to Candida albicans fungal colonization & debonding",
      "Hardness Range: Shore A 40 to 50"
    ]
  },
  {
    id: "p4-12-26",
    partId: "part-4",
    partTitle: "DENTAL MATERIALS CRASH NOTES (PART 2) — Sections 7 to 12",
    sectionNumber: "Section 12",
    sectionTitle: "Denture Base Resins and Polymers",
    topicNumber: "26",
    topicTitle: "Tissue Conditioners",
    marks: "4 Marks",
    rawText: `1. Definition: Short-term temporary soft gel materials applied inside ill-fitting dentures to cushion forces and allow inflamed, traumatized oral mucosa to recover before taking final impressions.
2. Composition (100% Free of Monomer!):
• Powder: Poly(ethyl methacrylate) [PEMA] polymer beads.
• Liquid: Ethyl Alcohol (30–50%) and Ester Plasticizer (butyl phthalyl butyl glycolate) — ZERO Methyl Methacrylate monomer!
3. Mechanism of Action & Lifespan:
• Forms a viscoelastic gel without polymerization.
• Alcohol evaporates and plasticizer leaches into oral fluids over 3–7 days, causing gel to stiffen.
• Must be removed and replaced every 3–5 days until mucosal health is restored.
4. Uses: 1. Temporary tissue recovery under ill-fitting dentures.
2. Functional impression material for complete dentures.`,
    examCallout: [
      "Powder: Poly(ethyl methacrylate) [PEMA]",
      "Liquid: Ethyl Alcohol + Plasticizer (100% Monomer-Free!)",
      "Action: Viscoelastic gel cushions mucosa without polymerization",
      "Lifespan: 3 to 7 days (requires replacement every 3-5 days)",
      "Clinical Goal: Restores traumatized mucosal health before final impressions"
    ]
  },

  // =========================================================================
  // PART 5 (Pages 60 - 69) - 9-MARK ESSAYS
  // =========================================================================
  {
    id: "p5-essay-1",
    partId: "part-5",
    partTitle: "DENTAL MATERIALS — 9-MARK ESSAYS • CRASH COURSE",
    sectionNumber: "Essay 1",
    sectionTitle: "Comprehensive 9-Mark Answers",
    topicNumber: "1",
    topicTitle: "Impression Materials — Classification",
    marks: "9 Marks Essay",
    rawText: `1. IMPRESSION MATERIALS — CLASSIFICATION (9 MARKS)

1.1 Definition
An impression is a negative reproduction of the teeth and adjacent oral tissues, from which a positive replica (cast or die) is made for diagnosis and fabrication of dental prostheses.

1.2 Classification — structured flowcharts

A. By elasticity after setting:
• Non-elastic (rigid): Impression compound, ZOE impression paste, impression plaster, waxes; unsuitable for significant undercuts.
• Elastic: Can flex around undercuts and recover; used for dentulous and selected edentulous cases.
  - Hydrocolloids: Agar (reversible); alginate (irreversible).
  - Elastomers: Polysulfide, condensation silicone, addition silicone (PVS), polyether.

B. By setting mechanism:
• Reversible / physical: Thermal sol–gel change; can be softened again (Agar, impression compound, impression waxes).
• Irreversible / chemical: Chemical reaction or polymerization; cannot be returned to original state by heating (Alginate, ZOE, impression plaster, polysulfide, silicones, polyether).

C. By tissue displacement (mucosal pressure):
• Mucostatic: Records tissues with minimal displacement (ZOE paste, impression plaster, light-body elastomer).
• Mucocompressive: Displaces movable mucosa under seating pressure (Impression compound, putty / heavy-body materials).

1.3 Main material groups — quick comparison
[See detailed comparison table below]

1.4 Composition — representative examples
[See detailed composition table below]

1.5 Setting mechanisms — flowchart
• AGAR: Heat → gel becomes sol; cooling → sol returns to gel (reversible physical change)
• ALGINATE: Retarder consumes available Ca²⁺ first → Ca²⁺ cross-links alginate chains → insoluble gel
• ELASTOMERS: Polysulfide: oxidation / cross-linking • Condensation silicone: alcohol by-product • PVS: hydrosilylation, no volatile by-product • Polyether: ring-opening polymerization
• ZOE: ZnO + eugenol (in presence of moisture) → zinc eugenolate matrix

1.6 Manipulation and precautions
• Alginate: measure powder and water accurately; spatulate briskly to a smooth mix; load a suitable tray; seat and hold still; remove with a quick snap after set; pour promptly.
• Agar: follow the manufacturer’s conditioning sequence (liquefaction, storage and tempering temperatures are system-specific); temper before intraoral placement.
• Elastomers: follow the manufacturer’s base/catalyst ratio and working time; avoid air entrapment; syringe around margins while loading tray; keep tray stable until set.
• PVS: avoid sulfur contamination from latex gloves or contaminated materials if the product instructions warn of catalyst inhibition.
• Hydrocolloids: prevent dehydration and water uptake; disinfect using a compatible method and avoid prolonged immersion.
• Rigid materials such as compound and ZOE should not be forced through significant undercuts.

1.7 Properties, uses and ideal requirements
• Important properties: accuracy / detail reproduction, elastic recovery, tear strength, dimensional stability, working and setting time, flow, wettability, biocompatibility and ease of removal.
• Ideal requirements: accurate detail, adequate working time, convenient setting time, elastic recovery where needed, dimensional stability, sufficient tear strength, acceptable taste / odour, biocompatibility and easy disinfection.
• Selection: alginate for study casts; PVS or polyether for many precision fixed-prosthodontic impressions; ZOE for suitable edentulous final impressions; compound for preliminary impressions and border moulding.

1.8 Common errors and prevention
[See error prevention table below]

1.9 Last-minute revision
• Agar = reversible hydrocolloid; alginate = irreversible hydrocolloid.
• PVS = addition silicone; known for high dimensional stability when correctly handled.
• Hydrocolloids are vulnerable to syneresis (water loss) and imbibition (water uptake).
• Remember to classify by elasticity, setting mechanism, and tissue displacement if asked for a comprehensive classification.
• Likely short questions: define an impression; distinguish agar and alginate; define syneresis and imbibition; list elastic impression materials; state uses of impression compound.`,
    flowchart: [
      "DENTAL IMPRESSION MATERIALS",
      "├─ NON-ELASTIC / RIGID: Impression compound • ZOE paste • Impression plaster • Waxes",
      "└─ ELASTIC",
      "   ├─ Hydrocolloids: Agar (reversible) | Alginate (irreversible)",
      "   └─ Elastomers: Polysulfide | Condensation silicone | PVS | Polyether"
    ],
    table: {
      headers: ["Material", "Setting", "Key strength / limitation", "Typical use"],
      rows: [
        ["Agar", "Reversible thermal gel", "Good detail; poor dimensional stability from syneresis / imbibition.", "Precision impressions historically; selected crown / inlay work."],
        ["Alginate", "Irreversible chemical gel", "Economical and easy; lower tear strength and dimensional stability.", "Study casts, orthodontic models, preliminary impressions."],
        ["Polysulfide", "Chemical polymerization", "High tear strength; by-product formation and longer setting.", "Selected complete denture / RPD impressions."],
        ["Condensation silicone", "Chemical polymerization", "Alcohol by-product can cause shrinkage.", "Crown and bridge impressions; pour promptly."],
        ["Addition silicone (PVS)", "Addition polymerization", "Excellent dimensional stability and elastic recovery; avoid sulfur contamination.", "Precision crown and bridge impressions."],
        ["Polyether", "Ring-opening polymerization", "Accurate and hydrophilic; relatively stiff and moisture-sensitive in storage.", "Precision impressions, including implant work where indicated."],
        ["ZOE paste", "Chelation / chemical set", "Accurate but rigid; avoid significant undercuts.", "Final impressions for edentulous arches."],
        ["Impression compound", "Thermal softening and cooling", "Rigid after cooling; may distort if overheated or removed incorrectly.", "Preliminary edentulous impressions and border moulding."]
      ]
    }
  },
  {
    id: "p5-essay-2",
    partId: "part-5",
    partTitle: "DENTAL MATERIALS — 9-MARK ESSAYS • CRASH COURSE",
    sectionNumber: "Essay 2",
    sectionTitle: "Comprehensive 9-Mark Answers",
    topicNumber: "2",
    topicTitle: "Heat-Activated Denture Base Acrylic Resins",
    marks: "9 Marks Essay",
    rawText: `2. HEAT-ACTIVATED DENTURE BASE ACRYLIC RESINS (9 MARKS)

2.1 Definition
Heat-activated denture base acrylic resin is a powder–liquid system based mainly on poly(methyl methacrylate) (PMMA), polymerized by heat-initiated free-radical addition polymerization to form a rigid denture base.

2.2 Classification — structured flowchart
DENTURE BASE MATERIALS
├─ By activation: Heat-activated (heat-cured PMMA), Chemically activated / self-cure, Light-activated, Microwave-cured
├─ By processing: Compression moulding / packing, Injection moulding / pour technique, Digital: CAD/CAM milling / 3D printing
└─ By modification: Conventional PMMA, High-impact / modified resin

2.3 Composition and functions
• Powder: PMMA polymer beads (Provide pre-polymerized resin; reduce overall shrinkage and give body), Benzoyl peroxide (Initiator; heat decomposes it to free radicals), Pigments / opacifiers / coloured fibres (Provide natural gingival shade and vein-like appearance).
• Liquid: Methyl methacrylate (MMA) monomer (Swells / softens polymer beads and polymerizes to form the matrix), Hydroquinone inhibitor (Prevents premature polymerization during storage), Ethylene glycol dimethacrylate (cross-linking agent; Links polymer chains and improves resistance to crazing / solvent attack).
Typical working proportion: approximately 3:1 powder-to-liquid by volume (follow the product instructions and prescribed textbook).

2.4 Polymerization mechanism — clean flowchart
HEAT ACTIVATES BENZOYL PEROXIDE ──► produces free radicals
INITIATION: A radical opens the C=C bond of MMA and starts a growing chain.
PROPAGATION: Repeated addition of MMA monomers lengthens the PMMA chain.
TERMINATION: Growing chains stop by combination or disproportionation.
RESULT: PMMA POLYMER MATRIX

2.5 Dough stages — flowchart
1. Sandy: Grainy; monomer wets the beads. (Too early for packing)
2. Sticky / stringy: Tacky; strings form when touched. (Monomer begins to dissolve bead surfaces)
3. Dough: Smooth, cohesive and non-sticky. (IDEAL PACKING STAGE)
4. Rubbery: Elastic; rebounds on pressure. (Difficult to adapt and pack)
5. Stiff / hard: Rigid and unworkable. (Packing is no longer possible)

2.6 Laboratory processing — stepwise
1. Proportion and mix powder and liquid in a clean, dry jar; cover to limit monomer evaporation.
2. Wait until the dough stage: smooth, cohesive and non-sticky.
3. Prepare the flask and mould; apply a suitable separating medium according to the laboratory protocol.
4. Pack dough into the mould; perform trial closure and remove flash; complete final closure and clamp.
5. Cure using the manufacturer’s recommended water-bath cycle. Common textbook examples include a long cycle around 74°C or a staged short cycle; avoid uncontrolled rapid heating.
6. Bench-cool the flask before deflasking. Rapid cooling can create internal stress and warpage.
7. Trim, finish and polish using wet techniques and avoid excessive heat during polishing.

2.7 Properties and clinical significance
• Mechanical: Good strength and rigidity for a denture base, but impact resistance is limited; dentures may fracture if dropped.
• Physical / dimensional: Polymerization shrinkage occurs; packing and curing technique affect fit. Water sorption causes slight expansion.
• Thermal: Low thermal conductivity; the denture base insulates oral tissues from hot and cold foods.
• Biological: Residual MMA may irritate oral tissues or cause sensitivity; adequate curing reduces residual monomer.
• Aesthetic: Can be pigmented to approximate gingival colour and can be finished to a smooth surface.

2.8 Defects, causes and prevention
[See detailed defects table below]

2.9 Uses, advantages and limitations
• Uses: bases of complete and partial dentures; support for artificial teeth; restoration of lost oral contours and aesthetics.
• Advantages: good aesthetics, relatively easy processing and repair, low cost, and useful strength when properly processed.
• Limitations: polymerization shrinkage, possible residual monomer, low impact strength, water sorption, and risk of porosity / warpage if processed incorrectly.

2.10 Specifications and values to verify
• The uploaded notes cite ISO 20795-1 and ANSI/ADA Specification No. 12 for denture base polymers. Check the current edition and exact classification with your prescribed text or standards source.
• High-yield values often taught: MMA boiling point ≈100.8°C; PMMA glass-transition temperature ≈105°C; dough stage is the packing stage. Use your course textbook’s exact values.

2.11 Last-minute revision
• Powder = PMMA beads + benzoyl peroxide initiator + pigments / optional modifiers.
• Liquid = MMA monomer + inhibitor + cross-linking agent.
• Polymerization: initiation → propagation → termination.
• Physical stages: sandy → sticky → dough → rubbery → stiff.
• Packing stage = dough stage; overheating can cause gaseous porosity; rapid cooling / dry polishing can cause warpage.
• Likely short questions: define PMMA; name the initiator; list dough stages; define gaseous porosity; state two advantages and two disadvantages.`,
    table: {
      headers: ["Defect", "Cause", "Prevention"],
      rows: [
        ["Gaseous porosity", "Overheating can boil monomer in thick sections.", "Use a controlled curing cycle; do not heat too rapidly."],
        ["Contraction porosity", "Insufficient monomer / under-packing / inadequate pressure.", "Correct proportion, adequate dough, proper trial closure and clamping."],
        ["Crazing", "Tensile stress or exposure to incompatible solvents.", "Avoid stress, unsuitable solvents and abrupt temperature changes."],
        ["Warpage", "Rapid cooling or excessive heat during finishing.", "Bench-cool; polish wet and avoid overheating."],
        ["Residual monomer irritation", "Incomplete polymerization or inadequate curing.", "Follow validated curing cycle and product instructions."]
      ]
    },
    flowchart: [
      "HEAT ACTIVATES BENZOYL PEROXIDE",
      "↓ produces free radicals",
      "INITIATION (Radical opens C=C bond of MMA)",
      "↓",
      "PROPAGATION (Addition of monomers lengthens chain)",
      "↓",
      "TERMINATION (Combination or disproportionation)",
      "RESULT: PMMA POLYMER MATRIX"
    ]
  },
  {
    id: "p5-checklist",
    partId: "part-5",
    partTitle: "DENTAL MATERIALS — 9-MARK ESSAYS • CRASH COURSE",
    sectionNumber: "Guideline",
    sectionTitle: "3. EXAM-WRITING CHECKLIST",
    topicNumber: "3",
    topicTitle: "Exam-Writing Checklist",
    marks: "Exam Guide",
    rawText: `• Start with a precise definition and a short clinical purpose.
• Draw the main classification flowchart with straight branches and examples under each branch.
• Include one composition table or comparison table.
• Explain the mechanism or processing in sequence using arrows.
• Add properties with clinical significance rather than an unconnected list.
• Mention 2–4 common defects with cause and prevention.
• End with uses / key takeaways; avoid padding the answer with irrelevant headings.
• Treat numerical values and specification numbers as textbook-dependent; verify them before memorizing.`
  },

  // =========================================================================
  // PART 6 (Pages 70 - 83) - 26 CORE INSTRUMENTS & PROCEDURES
  // =========================================================================
  {
    id: "p6-proc-1",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "1",
    topicTitle: "Hardness Test",
    marks: "2 Marks",
    rawText: `• The resistance of a dental material to permanent surface indentation, penetration, abrasion, or scratching.
• Measures surface resistance to localized plastic deformation under a specified load. Indentation dimensions/depth are inversely proportional to hardness.
• Classification of Tests:
  A. Macrohardness Tests: Brinell (10 mm steel ball indenter, 3000 kgf load; used for metals) and Rockwell (steel ball or diamond cone indenter; measures depth directly).
  B. Microhardness Tests: Vickers (136° square diamond pyramid) and Knoop (elongated diamond pyramid; suitable for tooth structure, ceramics, and thin specimens).
  C. Portable Penetrometers: Shore and Barcol testers (spring-loaded indenters used for flexible rubbers and elastomers).
• Representative Values: Enamel = 343 KHN | Dentin = 70 KHN | Dental Amalgam = 110 KHN | Pure Gold = 25 BHN | Composite Resins = 22–117 KHN | Cobalt-Chromium = 432 VHN.
• Clinical Significance: Hardness correlates with wear resistance and cutability. Vickers and Knoop tests are mandatory for brittle dental materials and thin tooth-colored restorations where macro-tests would cause cracking.`
  },
  {
    id: "p6-proc-2",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "2",
    topicTitle: "Luting",
    marks: "4 Marks",
    has3DModel: "crown-die",
    rawText: `• The clinical procedure of bonding, securing, or sealing an indirect restoration (crown, bridge, inlay, or post) to prepared tooth structure using a fluid cement layer that hardens in the intervening space.
• Provides mechanical retention, creates a fluid-tight marginal seal, prevents microleakage and secondary caries, and evenly distributes occlusal loads to the underlying tooth.
• Cement Types:
  - Water-Based Cements: Zinc Phosphate (Type I), Zinc Polycarboxylate, Glass Ionomer (GIC Type I), Resin-Modified GIC (RMGIC).
  - Resin-Based Cements: Adhesive Resin Cements, Self-Adhesive Resin Cements (Etch & Rinse, Self-Etch).
  - Oil-Based / Temporary Cements: Zinc Oxide Eugenol (ZOE Type I), Non-eugenol ZOE, EBA-alumina ZOE.
• Physical Requirements: Film thickness ≤ 25 µm (ISO 9917 standard) for complete seating; low oral solubility (<0.2%); net setting time 2.5–8 minutes; adequate compressive strength (>90 MPa for permanent luting).
• Clinical Procedure:
  1. Tooth Preparation & Isolation: Clean cavity prep with pumice slurry; isolate against moisture/saliva (rubber dam/cotton rolls); do not desiccate dentin.
  2. Proportioning & Mixing: Dispense powder/liquid or automix paste. Spatulate while maintaining a glossy cream-like consistency (indicates unreacted polyacid/monomers for chemical bonding).
  3. Application & Seating: Line internal surfaces of restoration; seat firmly under sustained static finger pressure or patient biting force on a wooden wedge.
  4. Excess Removal: Peel off excess cement during its rubbery/gel phase; thoroughly clear interproximal spaces with dental floss.
• Precautions: Excess subgingival cement retention causes localized severe periodontitis. Loss of surface gloss before seating drastically reduces adhesion and increases microleakage.`
  },
  {
    id: "p6-proc-3",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "3",
    topicTitle: "Pulp Capping",
    marks: "4 Marks",
    rawText: `• The placement of a protective, biocompatible, therapeutic material over an exposed or nearly exposed dental pulp to preserve pulpal vitality and stimulate reparative dentin bridge formation.
• Protects the pulp against thermal, chemical, bacterial, and mechanical trauma, seals the pulpal interface, and induces odontoblast differentiation for mineralized tissue barrier formation.
• Types:
  - Direct Pulp Capping: Material placed directly onto a pinpoint, non-infected mechanical or traumatic pulp exposure (<1 mm) in a asymptomatic vital tooth.
  - Indirect Pulp Capping: Material placed over a thin layer of affected, uninfected dentin intentionally left over the pulp to avoid frank exposure in deep carious lesions.
• Materials Used: Calcium Hydroxide [Ca(OH)2 - Dycal, Calcimol LC], Mineral Trioxide Aggregate (MTA - ProRoot MTA, Endocem MTA), Biodentine, Resin-Modified Glass Ionomer (as a protective base).
• Mechanism:
  - Calcium Hydroxide: High alkaline pH (~12.5) causes superficial liquefaction necrosis, mild chemical irritation, neutralizes bacterial acids, and releases growth factors (TGF-β1, BMP) that stimulate stem cells to form dentin bridges.
  - MTA / Biodentine: Hydrates with water to form calcium silicate hydrate gel and Ca(OH)2. Superior sealing, lower solubility, and biocompatible hydroxyapatite formation.
• Step-by-Step Technique:
  1. Isolate tooth using a rubber dam and achieve adequate anesthesia.
  2. Gently excavate caries using slow-speed round burs or hand excavators; irrigate with 1–2.5% NaOCl or sterile saline.
  3. Achieve pulpal hemostasis by applying a sterile, moist cotton pellet under light pressure for 2–3 minutes.
  4. Apply a thin layer (0.5–1.0 mm) of Ca(OH)2 or MTA directly over the exposure point without pushing material into the pulp chamber.
  5. Place a protective base of Glass Ionomer Cement (GIC) over the liner and place a hermetic definitive restoration.
• Setting Times: ProRoot MTA initial set = 165 minutes; Biodentine set = 9–12 minutes; Calcimol LC light-cures in 20 seconds.
• Precautions: Capping an actively inflamed, irreversibly damaged, or purulent pulp results in failure. Pushing capping material into pulp tissue triggers severe foreign-body reactions.`
  },
  {
    id: "p6-proc-4",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "4",
    topicTitle: "Trituration",
    marks: "2 Marks",
    rawText: `• The mechanical or manual mixing process of combining dental amalgam alloy powder with liquid mercury to form a smooth, homogenous, plastic amalgam mass.
• Rubs off the protective oxide film from alloy particles, permitting mercury to wet silver-tin particles and initiate the setting reaction (Gamma + Hg -> Gamma-1 + Gamma-2).
• Equipment: High-speed mechanical amalgamator (triturator) with preproportioned self-contained capsule, diaphragm, and internal pestle.
• Mix Variations:
  A. Normal Mix: Shiny, smooth, plastic, cohesive mass; warm to touch; yields optimal compressive strength and tarnish resistance.
  B. Over-triturated Mix: Soupy, sticky, dark grey; sets too rapidly; exhibits increased creep and polymerization/curing shrinkage.
  C. Under-triturated Mix: Dull, dry, grainy, crumbly mass; high residual mercury; rough carved surface subject to severe tarnish, corrosion, and low strength.
• Operating Parameters: Amalgamator speed = 3200–4400 rpm; mixing time = 10–15 seconds (varies by alloy particle morphology: lathe-cut vs. spherical).`
  },
  {
    id: "p6-proc-5",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "5",
    topicTitle: "Cavity Preparation",
    marks: "2 Marks",
    has3DModel: "cavity-sandwich",
    rawText: `• The mechanical alteration of defective, injured, or carious tooth structure to receive a restorative material that restores anatomical form, function, and aesthetics.
• Removes diseased tissue, provides sound structural support, prevents restoration dislodgement under occlusal load (retention form), and prevents tooth fracture (resistance form).
• Classic Steps: 1. Outline form | 2. Retention & Resistance form | 3. Convenience form | 4. Removal of remaining carious dentin | 5. Finishing enamel walls & margins | 6. Cavity toilet (cleansing).
• Material Differences:
  - Dental Amalgam Prep: Requires 90° cavosurface margin (butt joint), depth ≥ 1.5–2.0 mm, flat pulpal floor, and mechanical undercut features.
  - Composite Resin Prep: Minimal invasive cavity outline; bevelled enamel cavosurface margins (45°) for acid-etch micromechanical bonding; rounded internal line angles.`
  },
  {
    id: "p6-proc-6",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "6",
    topicTitle: "Burnishing",
    marks: "4 Marks",
    rawText: `• The process of plastically deforming, smoothing, and adapting a restorative material margin or surface by sliding contact under hand pressure using a smooth-surfaced instrument.
• Seals marginal gaps, reduces surface porosity/voids, brings excess mercury to the surface for removal (amalgam), improves marginal adaptation, and increases surface hardness via strain hardening.
• Clinical Stages:
  - Pre-carve Burnishing: Heavy rubbing across amalgam margins immediately after condensation using a large ball burnisher; brings mercury-rich matrix to surface and ensures complete marginal filling.
  - Post-carve Burnishing: Light rubbing after carving using an anatomical burnisher to smooth surface scratches and close microscopic marginal gaps.
  - Cast Gold / Gold Foil Burnishing: Adapting thin gold margins tightly against enamel cavosurface margins.
• Instruments: Hand burnishers (Ball, Acorn/Anatomical, Egg/Oval, Beavertail).
• Physical Mechanism: Exerts localized shear and compressive stress above the yield strength of the material, causing plastic flow without cutting or removing material.
• Precautions: Burnishing slow-setting amalgams too late fractures fragile setting gamma-1 matrix; excessive pressure on fast-setting alloys causes edge breakdown.`
  },
  {
    id: "p6-proc-7",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "7",
    topicTitle: "Compaction",
    marks: "4 Marks",
    rawText: `• The process of condensing, packing, and adapting a plastic or incremented restorative material into a prepared cavity to eliminate voids, achieve maximum density, and ensure complete wall adaptation.
• Maximizes compressive strength, minimizes internal porosity, optimizes marginal seal, and expels excess liquid/mercury vehicle (in amalgam and direct filling gold).
• Procedures:
  - Dental Amalgam Condensation: Using smooth or serrated condensers (1–2 mm steps) with 15–20 N hand force directed vertically and laterally into line angles.
  - Direct Filling Gold Compaction: Cold-welding gold increments using hand malleting or pneumatic/electric condensers with serrated pyramidal faces ('stepping' technique from center outward).
  - Composite Resin Incremental Packing: Placing resin in layers ≤ 2 mm thick using teflon/titanium-coated plastic instruments to ensure complete light penetration and minimize polymerization shrinkage stress.
• Instruments: Amalgam condensers (small/large round, parallelogram), Gold foil condensers/mallet, Non-stick composite pluggers/paddles.
• Precautions: Inadequate compaction force leaves internal voids, leading to restoration fracture, severe microleakage, and recurrent caries. Moisture during compaction of zinc-containing amalgam causes delayed expansion (>400 µm/cm).`
  },
  {
    id: "p6-proc-8",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "8",
    topicTitle: "Annealing (Direct Filling Gold)",
    marks: "2 Marks",
    rawText: `• Also termed degassing or desorption, it is the process of heating direct filling gold prior to insertion to drive off protective surface volatile contaminants (ammonia, moisture).
• Exposes a pure, uncontaminated metallic gold surface, restoring its cohesive property and enabling atomic cold-welding upon compaction.
• Methods:
  A. Bulk Method: Heating gold increments on a tray (e.g., Neibert electric gold annealer) at ~340–390°C for 10–20 minutes.
  B. Flame Method: Holding individual gold pieces on a sharp wire in a clean alcohol flame (pure ethanol/methanol) until glowing dull red.
• Errors & Hazards:
  - Under-heating: Incomplete removal of impurities -> non-cohesive gold, pitting, flaking.
  - Over-heating: Sintering/melting of gold fragments, embrittlement, loss of malleability.`
  },
  {
    id: "p6-proc-9",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "9",
    topicTitle: "Acid-Etch Technique",
    marks: "2 Marks",
    rawText: `• A micro-mechanical surface conditioning technique introduced by Michael Buonocore (1955) using an acid solution/gel to selectively dissolve enamel hydroxyapatite crystals.
• Creates microscopic surface irregularities/porosities, increases surface area and surface free energy, allowing low-viscosity resin monomers to penetrate and form resin tags.
• Protocol: 37% Phosphoric acid (H3PO4) gel applied for 15 seconds on enamel and 10–15 seconds on dentin; washed with water spray for 15–20 seconds; air-dried to a frosted white appearance.
• Etch Patterns: Type 1 (selective prism core dissolution) | Type 2 (selective prism periphery dissolution) | Type 3 (mixed/indistinct pattern).
• Values & Hazards: Creates micro-porosities 10–50 µm deep; yields reliable enamel bond strengths of 20–25 MPa. Over-etching forms insoluble dicalcium phosphate monohydrate precipitates that weaken bonding.`
  },
  {
    id: "p6-proc-10",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "10",
    topicTitle: "Sandwich Technique",
    marks: "2 Marks",
    has3DModel: "cavity-sandwich",
    rawText: `• A layered restorative technique where Glass Ionomer Cement (GIC/RMGIC) is placed as a dentin-replacing base, overlaid with Composite Resin as an enamel replacement.
• Combines the chemical adhesion, fluoride release, and thermal insulation of GIC with the high mechanical strength, polishability, and aesthetics of composite resin.
• Two Variants:
  A. Closed Sandwich: GIC is completely sealed inside the cavity prep by enamel and composite; no GIC exposed to oral fluids.
  B. Open Sandwich: GIC extends to the cervical cavosurface margin (cervical dentin/cementum) where enamel is missing, providing an anti-cariogenic fluoride seal.
• Stepwise Procedure: Condition dentin -> Place GIC base -> Etch enamel and GIC surface (15 s) -> Apply bonding agent -> Incrementally place composite.`
  },
  {
    id: "p6-proc-11",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "11",
    topicTitle: "Laminate Technique",
    marks: "4 Marks",
    rawText: `• Dual Contexts:
  - Impression Material Context: Also known as the Agar-Alginate Combination Technique; combines light-bodied syringe agar placed over prepared teeth with a cool alginate mix in a stock tray placed over it.
  - Restorative Context: Placement of a thin porcelain or composite veneer over facial enamel for aesthetic correction.
• Impression Scientific Principle: Combines the high surface detail reproduction (25 µm) and hydrophilic wetting of syringe agar with the convenience and cooling gelation effect of alginate.
• Materials: Hydrocolloid syringe cartridges with warm agar (46°C), chilled alginate mix, standard perforated stock tray (water-cooled rim-lock trays NOT required).
• Mechanism: The chilled alginate causes the warm syringe agar to gel rapidly from its interface outward by heat transfer, while the alginate sets via its own chemical cross-linking reaction. The two hydrocolloids bond chemically.
• Step-by-Step Procedure:
  1. Dispense warm light-bodied syringe agar directly onto prepared washed teeth.
  2. Immediately seat a stock perforated tray loaded with a cool mix of alginate over the agar.
  3. Hold steady until alginate sets (~3 minutes).
  4. Snap remove the combined impression and pour immediately with dental stone.
• Advantages: Eliminates expensive water-circulating hoses and rim-lock trays; produces higher detail than alginate alone; cost-effective and patient-friendly.`
  },
  {
    id: "p6-proc-12",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "12",
    topicTitle: "Gillmore Needle",
    marks: "2 Marks",
    has3DModel: "gillmore-needle",
    rawText: `• A classical double-needle penetration apparatus used to determine the initial and final setting times of gypsum products, dental cements, and impression plaster.
• Needle Specifications:
  A. Initial Gillmore Needle: Weight = 1/4 lb (113.4 g); tip diameter = 1/12 inch (2.12 mm). Measures initial setting time when needle no longer indents the setting surface.
  B. Final Gillmore Needle: Weight = 1 lb (453.6 g); tip diameter = 1/24 inch (1.06 mm). Measures final setting time when needle leaves only a barely visible mark.
• Operating Principle: Measures localized resistance to compressive shear penetration as dihydrate crystal growth and intermeshing progress.
• Comparison: Vicat needle uses a 300 g weight with a 1 mm needle diameter; Vicat setting time corresponds closely to the initial Gillmore set.`
  },
  {
    id: "p6-proc-13",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "13",
    topicTitle: "Sprue Formers",
    marks: "4 Marks",
    rawText: `• A wax, plastic, or metal rod attached to a finished wax pattern that creates a channel in the set investment mold through which molten alloy flows during casting.
• Core Functions: 1. Mounts wax pattern on crucible former | 2. Creates entry channel for molten metal | 3. Provides exit path for vaporized wax during burnout | 4. Forms a reservoir of molten metal to feed solidification shrinkage.
• Materials:
  - Wax Sprues: Burn out cleanly; recommended for most gold castings.
  - Plastic Sprues: Hollow or solid; require two-stage burnout to allow plastic softening without expanding and cracking investment.
  - Metal Sprues: Stainless steel pins; must be removed from investment prior to burnout.
• Dimensions & Positioning Rules:
  - Diameter: Must be equal to or larger than the thickest cross-section of the wax pattern (typically 10–12 gauge / 2.0–2.6 mm for crowns).
  - Attachment Angle: Attached at a 45° angle to a bulky non-functional cusp away from thin margins to minimize turbulence.
  - Pattern Position: Wax pattern must be positioned 1/4 inch (6.0–8.0 mm) from the open top end of the casting ring to allow rapid air evacuation.
  - Reservoir: A spherical wax reservoir ball placed on sprue within 1.5 mm of pattern to prevent shrink-spot porosity.
• Failure Hazard: Using a sprue that is too thin or too long causes premature sprue solidification, resulting in localized shrink-spot porosity at the sprue-casting junction.`
  },
  {
    id: "p6-proc-14",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "14",
    topicTitle: "Quenching",
    marks: "4 Marks",
    rawText: `• The rapid immersion of a hot casting ring and metal restoration into cold water immediately after the molten metal has solidified (after red glow disappears).
• Two Primary Purposes:
  1. Leaves gold alloys in a soft, ductile, annealed state (disordered solid solution) suitable for burnishing and fitting.
  2. Disintegrates and fragments the hot investment material via thermal shock (steam explosion).
• Metallurgical Mechanism: Rapid cooling from ~500°C traps atomic disorder, preventing the atomic diffusion required to form ordered AuCu-I age-hardened phase structures.
• Timing: Gold alloy casting rings are quenched after waiting 2–5 minutes until the button's dull red glow disappears.
• Strict Contraindication: Metal-ceramic alloys (PFM), Base metal alloys (Co-Cr, Ni-Cr), and All-ceramic systems MUST NEVER BE QUENCHED! They must air-cool slowly to room temperature to prevent severe thermal stress, warping, or porcelain cracking.`
  },
  {
    id: "p6-proc-15",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "15",
    topicTitle: "Casting Machines",
    marks: "4 Marks",
    rawText: `• A mechanical laboratory apparatus designed to force molten dental alloy under pressure into a preheated refractory investment mold cavity.
• Classifications:
  - Based on Driving Force: Centrifugal Casting Machines (Spring-driven, Motor-driven) vs. Air/Vacuum Pressure Casting Machines.
  - Based on Heat Source: Torch-melted (Gas-air, Oxy-acetylene) | Induction-melted (electromagnetic eddy currents) | Arc-melted (direct electric arc under argon).
• Structural Parts: Horizontal rotating arm, central spring-winding mechanism, counterweight balance, crucible carrier, casting ring cradle, release pin.
• Mechanism of Action: Centrifugal force (F = m * w^2 * r) accelerates dense liquid metal outward from crucible into mold cavity, forcing air out through porous investment walls.
• Operating Parameters: Spring winding = 3 to 4 turns; casting pressure = 15–20 psi air pressure.
• Troubleshooting: Insufficient rotational force or premature release causes incomplete castings with rounded short margins. Overheating alloy causes investment decomposition and dark sulfur-contaminated castings.`
  },
  {
    id: "p6-proc-16",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "16",
    topicTitle: "Zones of Flame",
    marks: "4 Marks",
    has3DModel: "flame-zones",
    rawText: `• The distinct structural and thermal regions of a gas-air or gas-oxygen blowtorch flame used for melting dental casting alloys and soldering.
• Four Flame Zones:
  A. Mixing Zone (Zone A / Inner Cone): Innermost dark cone; fuel gas and air mix prior to combustion; unburned cold gas, no heat.
  B. Combustion Zone (Zone B): Greenish cone surrounding Zone A; partial gas combustion; oxidizing in nature; relatively cool.
  C. Reducing Zone (Zone C): Clear blue zone just beyond Zone B; HOTTEST PART OF FLAME (~1300–1600°C); complete unburned carbon consumption; reducing character. MUST BE USED FOR MELTING ALLOY!
  D. Oxidizing Zone (Zone D): Outermost faint blue sheath; gas burns in surrounding atmosphere; cool and highly oxidizing. NEVER USE FOR MELTING!
• Thermal Rationale: Zone C (Reducing Zone) prevents metal oxidation, dissolves surface oxides, and provides maximum heat transfer for rapid alloy fusion.
• Casting Hazard: Holding the alloy in Zone D or B causes severe oxidation, slag formation, gas inclusion porosities, and dark pitted castings.`
  },
  {
    id: "p6-proc-17",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "17",
    topicTitle: "Polishing",
    marks: "2 Marks",
    rawText: `• The process of producing a smooth, glossy, mirror-like, scratch-free surface on a restoration or appliance using progressively finer abrasive and polishing agents.
• Enhances aesthetics, improves oral comfort, minimizes plaque accumulation, reduces tarnish/corrosion susceptibility, and increases fatigue strength by eliminating stress concentrators.
• Mechanism & Beilby Layer: Micro-cutting and plastic flow of surface ridges, producing an ultra-fine amorphous surface layer known as the Beilby layer.
• Sequence: Coarse grinding (silicon carbide/pumice) -> Intermediate smoothing (tripoli/chalk) -> Final high polish (rouge for gold, tin oxide/aluminum oxide or diamond paste for composite/porcelain).
• Clinical Precautions: Use light pressure, high speed, and continuous wet lubrication to prevent pulpal overheating or resin matrix degradation.`
  },
  {
    id: "p6-proc-18",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "18",
    topicTitle: "Glazing",
    marks: "4 Marks",
    rawText: `• The final firing step in dental ceramic fabrication where the outer surface is heated to form a smooth, impervious, glossy glass layer.
• Two Techniques:
  - Auto-glazing: Heating the unglazed ceramic restoration to its firing temperature; pyroclastic flow of the glass matrix seals surface micro-cracks.
  - Over-glazing: Applying a thin layer of low-fusing transparent glass slurry (glaze powder) and firing at a lower temperature.
• Physical Role: Smooths surface roughness, seals microscopic surface voids, blunts sharp crack tips (increasing flexural strength by 20–30%), and delivers natural optical translucency.
• Parameters & Precautions: Glaze firing is performed WITHOUT VACUUM in a ceramic furnace at 850–950°C for 1–2 minutes. Over-glazing or repeated firing causes devitrification (loss of transparency, cloudy appearance) and weakens the ceramic structure.`
  },
  {
    id: "p6-proc-19",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "19",
    topicTitle: "Firing of Porcelains",
    marks: "4 Marks",
    rawText: `• The thermal processing (sintering) of condensed ceramic powder in a specialized furnace to fuse glass particles into a dense, solid, translucent restoration.
• Three Classic Stages:
  1. Low Bake (Biscuit Stage): Particles start uniting at contact points; highly porous, opaque, minimal shrinkage.
  2. Medium Bake Stage: Significant inter-particle fusion; reduced internal porosity; moderate volumetric shrinkage.
  3. High Bake Stage: Complete sintering and glass flow; surface smooth; minimal internal porosity; maximum volumetric shrinkage (15–20%).
• Critical Processing Steps:
  - Preheating: Gradually raises wet condensed porcelain into furnace opening to evaporate water slowly, preventing explosive steam cracking.
  - Vacuum Firing: Evacuates air from furnace chamber (~29 inches Hg) before glass fusion to prevent air entrapment. Vacuum is released at top temperature to compress residual closed pores.
• Firing Ranges: High fusing (1260–1370°C) | Medium fusing (1050–1260°C) | Low fusing (850–1050°C) | Ultra-low fusing (<850°C).`
  },
  {
    id: "p6-proc-20",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "20",
    topicTitle: "Heat Treatment of Gold Alloys",
    marks: "4 Marks",
    rawText: `• Thermal processing applied to Type III and Type IV gold casting alloys to systematically alter their mechanical properties (hardness, yield strength, elongation).
• Two Standard Heat Treatments:
  - Softening Heat Treatment (Solution Heat Treatment): Casting heated to 700°C for 10 minutes, followed by immediate quenching in cold water. Results in a disordered face-centered cubic (fcc) solid solution; high ductility, low hardness. Facilitates burnishing and mechanical adjustments.
  - Hardening Heat Treatment (Age Hardening / Precipitation Hardening): Softened casting heated to 450°C, then slowly cooled to 250°C over 15–30 minutes (or held at 350°C for 10–15 min), followed by quenching. Promotes formation of ordered solid solution phases (AuCu-I and AuCu-III superlattices) and Cu-rich precipitates; increases tensile/yield strength and hardness, but reduces ductility.
• Clinical Sequence: Soften before marginal burnishing and fitting; age-harden prior to final intraoral cementation of long-span bridges or partial denture frameworks.`
  },
  {
    id: "p6-proc-21",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "21",
    topicTitle: "Stages of Annealing",
    marks: "4 Marks",
    rawText: `• The three sequential microstructural stages that occur when a cold-worked, strain-hardened metal or alloy is heated above its recrystallization temperature.
• Sequential Microstructural Stages:
  1. Recovery (Stress Relief) Stage: Low-temperature heating; relieves internal residual stresses without changing grain shape or mechanical strength; minor recovery of electrical/thermal conductivity.
  2. Recrystallization Stage: Formation of new, strain-free, equiaxed grains at high-energy dislocation sites along original boundaries; dramatic reduction in hardness and tensile strength, with major increase in ductility.
  3. Grain Growth Stage: Continued heating at elevated temperatures causes larger recrystallized grains to grow by consuming smaller adjacent grains; produces coarse grain structure, reduced strength, and brittleness.
• Laboratory Warning: Dental lab procedures (soldering, wrought wire bending) must avoid overheating into the grain growth stage to prevent weak, brittle prostheses.`
  },
  {
    id: "p6-proc-22",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "22",
    topicTitle: "Soldering and Welding",
    marks: "4 Marks",
    rawText: `• Definitions & Contrast:
  - Soldering (Brazing): Joining metal components using a molten filler metal (solder) whose melting temperature is below that of the parent metals (hard soldering/brazing > 450°C).
  - Welding: Joining two metal parts directly by localized melting and fusion of their contacting interfaces, with or without pressure/filler metal.
• Technical Differences:
  - Filler Metal: Soldering uses intermediate gold/silver solder alloys; welding fuses parent metals directly (or uses laser/spot wire).
  - Heat Source: Gas-air/propane torch or furnace (soldering); Electric spot welder, Nd:YAG laser, or TIG plasma arc (welding).
  - Flux & Joint Gap: Soldering requires flux (borax/fluoride) and an optimum joint gap (0.13–0.30 mm) for capillary flow. Welding requires zero gap and argon gas shielding (no flux).
• Applications: Assembly of fixed partial denture units, attaching clasps to partial denture frames, orthodontic archwire joining.`
  },
  {
    id: "p6-proc-23",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "23",
    topicTitle: "Curing Cycle",
    marks: "4 Marks",
    rawText: `• The controlled heating schedule (time and temperature profile) used to polymerize heat-activated PMMA acrylic denture bases in a water bath.
• Mechanism: Thermal decomposition of benzoyl peroxide initiator -> free radicals -> addition polymerization of methyl methacrylate monomer. Exothermic reaction (boiling point of monomer = 100.8°C).
• Standard Schedules:
  - Long / Slow Curing Cycle: Heating flask in water bath at 74°C for 8 hours (or 9 hours overnight) without boiling. Produces minimal residual monomer (<0.2%) and lowest porosity.
  - Short / Rapid Curing Cycle: Heating at 74°C for 1.5 to 2 hours, then raising temperature to 100°C (boiling) for 30–60 minutes.
• Critical Risk: Raising temperature too rapidly above 100.8°C while unreacted monomer remains causes monomer boiling, resulting in internal gaseous porosity in thick denture sections.`
  },
  {
    id: "p6-proc-24",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "24",
    topicTitle: "Deflasking",
    marks: "4 Marks",
    rawText: `• The laboratory procedure of separating the cured acrylic denture and master cast from the surrounding gypsum investment mold inside the metal flask.
• Tools: Flask ejector/press, pneumatic deflasking chisel, plaster knife, saw.
• Step-by-Step Procedure:
  1. Allow flask to bench-cool to room temperature (prevents thermal warpage).
  2. Remove flask top and bottom metal lids.
  3. Use flask ejector to push gypsum block out of flask rings.
  4. Section outer plaster key carefully with saw/chisel along stone index lines.
  5. Pry off investment sections to expose acrylic denture on cast without damaging teeth or ridge undercuts.
• Precautions: Improper force or prying leverage during deflasking causes tooth fracture, denture base distortion, or fracture of master cast undercuts.`
  },
  {
    id: "p6-proc-25",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "25",
    topicTitle: "Border Moulding Technique",
    marks: "4 Marks",
    rawText: `• The shaping of impression material margins along the peripheral borders of a custom tray by manual tissue manipulation to record the contours and extension of the vestibule.
• Purpose: Establishes complete peripheral seal (border seal/suction), preserves soft tissue health, and determines correct denture border width and height.
• Materials: Type I Low-fusing Impression Compound (Green stick tracing compound; softens at 55–60°C), Polyether, or Heavy-body Addition Silicone.
• Step-by-Step Clinical Technique:
  1. Trim custom resin tray 2 mm short of mucobuccal fold.
  2. Soften green stick compound over flame, temper in warm water bath (45°C).
  3. Apply compound incrementally in sections (labial, buccal, distobuccal, posterior palatal seal / lingual flanges).
  4. Insert intraorally and perform functional border movements (lip pulling, cheek manipulation, swallowing, tongue elevation).
  5. Cool and inspect for rounded, matte-finish borders before taking final wash impression.
• Clinical Hazards: Under-extension causes loss of denture retention; over-extension causes tissue ulceration and denture displacement during function.`
  },
  {
    id: "p6-proc-26",
    partId: "part-6",
    partTitle: "High-Yield Review of 26 Core Instruments, Techniques, and Procedures",
    sectionNumber: "Core Review",
    sectionTitle: "Instruments, Techniques, and Procedures",
    topicNumber: "26",
    topicTitle: "Impression Classification and Manipulation Techniques",
    marks: "9 Marks Essay",
    rawText: `26. Impression Classification and Manipulation Techniques [9 Marks Essay]

1. Comprehensive Classification of Impression Materials
• By Elasticity / Setting Mechanism:
  1. Rigid / Irreversible (Thermoset): Impression Plaster, Zinc Oxide Eugenol (ZOE) paste.
  2. Rigid / Reversible (Thermoplastic): Impression Compound, Impression Waxes.
  3. Elastic / Irreversible (Thermoset): Alginate Hydrocolloid, Nonaqueous Elastomers (Polysulfide, Condensation Silicone, Addition Silicone / PVS, Polyether).
  4. Elastic / Reversible (Thermoplastic): Agar Hydrocolloid.
• By Mucosal Pressure:
  1. Mucostatic Materials: Produce minimal displacement of soft tissue during seating (Impression Plaster, ZOE paste, low-viscosity elastomers).
  2. Mucocompressive Materials: Viscous materials that displace soft tissues during seating (Impression Compound, Putty elastomers).
• By Arch Condition:
  - Edentulous arches (ZOE, Impression Compound, Plaster) vs. Dentulous arches (Alginate, Elastomers, Agar).

2. Composition & Constituent Functions
[See table below for details]

3. Setting Reactions & Mechanisms
• Alginate: 2 Na-Alginate + CaSO4 -> Calcium Alginate (insoluble gel network) + Na2SO4. Trisodium phosphate reacts first with Ca ions to delay gelation, providing working time.
• ZOE: ZnO + H2O -> Zn(OH)2; Zn(OH)2 + 2 Eugenol -> Zinc Eugenolate (crystalline chelate gel matrix surrounding unreacted ZnO cores) + 2 H2O.
• Addition Silicone (PVS): Vinyl-terminated siloxane + Silane-containing siloxane --(Platinum Catalyst)--> Cross-linked silicone rubber. No volatile reaction by-product is formed (curing shrinkage < 0.15%).

4. Manipulation & Impression Techniques
• Alginate: Fluff powder -> Measure water/powder ratio -> Add powder to water in rubber bowl -> Spatulate aggressively against bowl walls for 45–60 s until creamy -> Load perforated tray -> Seat intraorally -> Hold still until set -> Snap remove along long axis of teeth.
• ZOE Paste: Dispense equal lengths of Base and Catalyst pastes on oil-impervious pad -> Squeeze and strop with broad stainless steel spatula for 30–45 s until streak-free mix -> Load custom tray -> Seat under light pressure -> Remove after final set (~10 min).
• Elastomeric Impression Techniques:
  1. Two-Stage Putty-Wash: Preliminary putty impression made with polyethylene spacer -> Space created -> Light-body wash material injected around prep and seated in preliminary putty impression.
  2. One-Stage Dual-Phase: Light-body injected around prepared teeth while heavy-body/putty loaded tray seated simultaneously; both viscosities cure together.

5. Material Properties Comparison Table
[See table below for details]

6. Precautions & Clinical Errors
• Storing alginate in dry air causes water loss (syneresis/shrinkage); storing in water causes swelling (imbibition). Must be stored in 100% relative humidity and poured within 12 minutes.
• Sulfur compounds from latex gloves inhibit the platinum catalyst of addition silicone, causing non-setting sticky surfaces. Use nitrile or vinyl gloves when handling putty!
• Failing to apply tray adhesive or allow it to dry causes impression detachment during removal, resulting in severe distortion.`,
    chemicalEquations: [
      "2 Na-Alginate + CaSO4 -> Calcium Alginate (insoluble gel network) + Na2SO4",
      "ZnO + H2O -> Zn(OH)2; Zn(OH)2 + 2 Eugenol -> Zinc Eugenolate + 2 H2O",
      "Vinyl-terminated siloxane + Silane-containing siloxane --(Platinum Catalyst)--> Cross-linked silicone rubber"
    ],
    table: {
      headers: ["Property", "Alginate", "ZOE Paste", "Addition Silicone (PVS)"],
      rows: [
        ["Detail Reproduction", "50 µm line", "20 µm line", "20 µm line (Excellent)"],
        ["Dimensional Stability", "Poor (Syneresis/Imbibition)", "Excellent (< 0.1% change)", "Best (> 7–14 days stable)"],
        ["Elastic Recovery", "97.3%", "Non-elastic (Rigid)", "99.8% (Highest)"],
        ["Tear Strength", "0.4–0.7 kN/m", "N/A (Brittle)", "3.0–4.0 kN/m (High)"]
      ]
    }
  }
];

export const MOTIVATIONAL_QUOTES = [
  { text: "Pretty notes, powerful brain, future dentist energy! 🎀🦷", author: "Barbie BDS Motto" },
  { text: "One topic at a time, babe. You're building your future! 💗✨", author: "Study Chic" },
  { text: "Study like a girl with a dream and a pink highlighter! 🌸💅", author: "Dental Barbie" },
  { text: "Little progress is still progress. Keep sparkling! 💖🌷", author: "Glow & Grow" },
  { text: "Future Dr. energy: activated! 🦷👑", author: "Crown Royalty" },
  { text: "You've got this, queen. One page closer! 🎀🌸", author: "Pink Power" },
  { text: "Brain full of knowledge, heart full of sparkle. ✨💗", author: "BDS Radiance" },
  { text: "Smart is gorgeous, confident is iconic! 💅✨", author: "Barbiecore Study Room" }
];
