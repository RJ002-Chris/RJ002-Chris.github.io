// ============================================================
// ADD OR REMOVE PROJECTS HERE
// To add a new project:
//   1. Add an object below with all fields filled in
//   2. Add its detail page in src/pages/
//   3. Add its route in App.jsx
// ============================================================

const projects = [
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
