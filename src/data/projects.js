// ============================================================
// ADD OR REMOVE PROJECTS HERE
// To add a new project:
//   1. Add an object below with all fields filled in
//   2. Add its detail page in src/pages/
//   3. Add its route in App.jsx
// ============================================================

const projects = [
  {
    id: 5,
    slug: "content-audit",
    title: "Cross-Platform Content Audit",
    description: "Hand-collected audit of ten Bangkok property listings across two travel platforms. The richness gap I set out to prove did not exist. The finding that replaced it was that one description template produced 24 unsupported facility claims while the other produced none.",
    category: "Data Audit",
    preview: "/imgs/contentAuditPreview.png",
    alt: "Chart showing 24 unsupported claims on one description template and none on the other",
    path: "/projects/content-audit",
    tags: ["Excel", "Study Design", "Manual Collection", "Scoring Rubric"],
    featured: true,
    timeline: "August 2026",
    role: "Sole analyst, design to presentation",
    outcomes: [
      "Designed the collection instrument and wrote the scoring rules before collection, including the exclusions that stop a rubric drifting mid-study",
      "Rebuilt two scoring components mid-collection after each proved unable to discriminate between properties",
      "Disproved my own hypothesis: mean completeness was 61.1 against 61.0, with each platform richer on five of ten properties",
      "Isolated the real pattern: 6 of 6 long-template listings carried unsupported facility claims, 24 in total, against 0 of 4 short-template listings",
      "Tested and ruled out the two obvious counter-explanations using matched pairs within the sample",
      "Presented and defended the work live to a panel"
    ],
    github: null,
    demo: null,
  },
  {
    id: 6,
    slug: "credit-risk",
    title: "Credit Risk Modelling, and Four Errors I Made",
    description: "A timed default-prediction exercise on an anonymised lender sample. Reviewing it afterwards I found four methodological errors, including one that meant the model never saw most of its own input data.",
    category: "Modelling",
    preview: "/imgs/creditRiskPreview.png",
    alt: "Line chart of approval rate against default rate across score cutoffs",
    path: "/projects/credit-risk",
    tags: ["Python", "pandas", "scikit-learn", "Credit Risk"],
    featured: true,
    timeline: "2026",
    role: "Sole analyst",
    outcomes: [
      "Defined the target myself from a raw instalment monitoring table, using max days past due across the first four instalments",
      "Found afterwards that my null handler had replaced 40 or so numeric features with presence flags, so the model never saw the underlying values",
      "Identified that dropping rows without repayment records conditioned the sample on approval, the reject inference problem",
      "Identified that reported precision was an artefact of an unset decision threshold, with predicted defaults at 37.8 percent against a true rate of 8.7 percent",
      "Rebuilt the approach with median imputation, sentinel detection and a split-before-inspection order",
      "Produced an approval rate against default rate cutoff table, which is the output a credit committee can actually act on"
    ],
    github: null,
    demo: null,
  },
  {
    id: 7,
    slug: "fmcg-strategy",
    title: "A Consumer Data Strategy That Builds Almost Nothing",
    description: "A case study proposing first-party consumer data capture for an FMCG brand by building a layer inside a messaging platform the company had already launched, rather than a new app, account or database. One of six finalists.",
    category: "Strategy",
    preview: "/imgs/fmcgPreview.png",
    alt: "Five delivery phases, each with a stop condition",
    path: "/projects/fmcg-strategy",
    tags: ["Commercial Strategy", "Competitive Analysis", "Phased Delivery", "Consumer Data"],
    featured: true,
    timeline: "2026",
    role: "Individual submission, presented live",
    outcomes: [
      "Rejected the obvious build and found the cheapest viable intervention, a brand layer inside an existing platform with its consent relationship and points engine already in place",
      "Mapped all four proposed features onto mechanics already live on the platform, so nothing required a new consumer database",
      "Used a competitive scan to show every published loyalty mechanic in the category rewards purchase, and none rewarded activity",
      "Phased delivery with a gate on each phase, and put the data-protection and child-consent question in Phase 0 as a stop condition rather than a later risk",
      "Committed to no commercial target in year one, on the grounds that no baseline existed to set one from",
      "Selected as one of six finalists and defended the work live"
    ],
    github: null,
    demo: null,
  },
  {
    id: 1,
    slug: "welcome-to-seattle",
    title: "Alaskan Airlines Flight Study",
    description: "Mapped the most popular flight destinations from Seattle by analyzing Alaska Airlines route data, revealing how the airline's Seattle hub drives connectivity to over 120 destinations across five countries.",
    category: "Data Visualization",
    preview: "/imgs/welcomeToSeattlePreview.jpg",
    alt: "Alaska Airlines Flight Study Preview",
    path: "/projects/welcome-to-seattle",
    tags: ["Python", "Data Viz", "Sankey Diagram"],
    featured: false,
    timeline: "Spring 2024",
    role: "Data Analyst",
    outcomes: [
      "Processed 120+ flight routes from Open Flights dataset",
      "Built interactive Sankey diagram revealing top 10 destination clusters",
      "Identified California corridor as highest-volume route group from Seattle"
    ],
    github: null,
    demo: null,
  },
  {
    id: 2,
    slug: "whats-happening",
    title: "What's Happening in Roosevelt",
    description: "Scraped and analyzed hundreds of Yelp café reviews from Seattle's Roosevelt Neighborhood using a custom Python web crawler, uncovering sentiment patterns through a radial dendrogram visualization.",
    category: "Web Scraping",
    preview: "/imgs/whatsHappeningInTheTownPreview.jpg",
    alt: "Roosevelt Neighborhood Café Study Preview",
    path: "/projects/whats-happening",
    tags: ["Python", "Web Scraping", "NLP"],
    featured: false,
    timeline: "Winter 2024",
    role: "Data Engineer & Analyst",
    outcomes: [
      "Built a Yelp web crawler collecting 200+ customer reviews across 15 cafés",
      "Applied NLP text processing to extract dominant sentiment themes",
      "Produced a radial dendrogram showing strong positive sentiment for ambience and coffee quality"
    ],
    github: "https://colab.research.google.com/drive/1p7iOEefWETyoUHPqRtYnXBRtkKuCsug_?usp=sharing",
    demo: null,
  },
  {
    id: 3,
    slug: "gray-anatomy",
    title: "A Gray Anatomy of Seattle",
    description: "Documented Seattle's notoriously overcast skies by photographing UW's fountain area over three days, processing thousands of image frames in Python to quantify the city's dominant grey color palette.",
    category: "Image Processing",
    preview: "/imgs/grayAnatomyPreview.jpg",
    alt: "Gray Anatomy of Seattle Preview",
    path: "/projects/gray-anatomy",
    tags: ["Python", "Image Processing", "Color Analysis"],
    featured: false,
    timeline: "Fall 2023",
    role: "Lead Developer",
    outcomes: [
      "Automated processing of 3 days × multiple time slots of photos using Python for-loops",
      "Quantified that grey tones dominated 70%+ of sky pixels across all sessions",
      "One sunny day provided a striking contrast, confirming Seattle's overcast reputation with data"
    ],
    github: "https://colab.research.google.com/drive/1OsGunjEARIahLbE47lr_3ysGNK541QGO?usp=sharing",
    demo: null,
  },
  {
    id: 4,
    slug: "happy-places",
    title: "Happy Places in Seattle",
    description: "Collected and mapped students' favorite spots across Seattle via Padlet, then visualized the emotional geography of the UW community through tree map analysis of place descriptions.",
    category: "Spatial Analysis",
    preview: "/imgs/happyPlacePreview.jpg",
    alt: "Happy Places in Seattle Preview",
    path: "/projects/happy-places",
    tags: ["Python", "Spatial Data", "Tree Map"],
    featured: false,
    timeline: "Fall 2023",
    role: "GIS Analyst",
    outcomes: [
      "Aggregated 30+ student submissions from a collaborative Padlet map",
      "Discovered University District dominated responses, with IMA Field and Suzzallo Library as top picks",
      "Tree map visualization effectively communicated the diversity of emotional place attachments"
    ],
    github: null,
    demo: null,
  },
];

export default projects;
