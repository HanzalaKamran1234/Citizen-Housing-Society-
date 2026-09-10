export interface PlotPlan {
  id: '80-yards' | '120-yards';
  sizeInYards: number;
  category: string;
  totalPrice: number;
  bookingAmount: number;
  downPaymentPercent: number;
  monthlyInstallment: number;
  monthlyCount: number;
  monthlyTotal: number;
  halfYearlyInstallment: number;
  halfYearlyCount: number;
  halfYearlyTotal: number;
  possessionAmount: number;
  dimensions: string;
  recommendedFor: string;
  features: string[];
}

export interface ExtraCharge {
  category: string;
  percentage: number;
  description: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Lifestyle' | 'Security' | 'Education' | 'Healthcare';
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface NearbyLocation {
  name: string;
  role: string;
  significance: string;
  route: string;
  relativePosition: string;
}

export interface Partner {
  name: string;
  role: string;
  tagline?: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Pricing & Payment' | 'Location & Land' | 'Facilities' | 'Documentation';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Master Plan' | 'Location & Surroundings' | 'Concept Architecture' | 'Community & Nature' | 'Development Vision';
  imageUrl: string;
  caption: string;
  isPlaceholder?: boolean;
}

export const PROJECT_DATA = {
  brand: {
    name: "CITIZEN HOUSING",
    subline: "A PROJECT OF CITIZEN BUILDERS & DEVELOPERS",
    projectTitle: "CITIZEN HOUSING SOCIETY — GREEN BLOCK",
    tagline: "A Modern Address. A Smarter Investment.",
    locationLine: "M9 Karachi–Hyderabad Motorway | Green Block",
    heroDescription: "Own your residential plot in a strategically located community on the M9 Karachi–Hyderabad Motorway, near DHA City, Saima Midtown and Nooriabad Industrial Area.",
    developer: "Citizen Builders & Developers",
    officialWhatsApp: "+923000000000", // Configurable sales WhatsApp
    displayPhone: "+92 21 3000 0000",
    displayEmail: "sales@citizenhousing.pk",
    officeAddress: "Corporate Office: Main Shahrah-e-Faisal / Site Office: M9 Motorway, Sindh",
    siteLocation: "M9 Karachi–Hyderabad Motorway, Sindh, Pakistan",
  },

  trustStrip: [
    {
      label: "Plot Sizes",
      value: "80 & 120",
      unit: "Sq. Yards",
      sub: "Prime Residential Options"
    },
    {
      label: "Down Payment",
      value: "0%",
      unit: "Down Payment",
      sub: "No Upfront Burden"
    },
    {
      label: "Starting From",
      value: "Rs. 5,000",
      unit: "Monthly",
      sub: "48 Easy Installments"
    },
    {
      label: "Strategic Hub",
      value: "M9 Corridor",
      unit: "Direct Highway Access",
      sub: "Near DHA City & Saima Midtown"
    }
  ],

  plotPlans: [
    {
      id: '80-yards',
      sizeInYards: 80,
      category: "Residential Plot",
      totalPrice: 450000,
      bookingAmount: 0,
      downPaymentPercent: 0,
      monthlyInstallment: 5000,
      monthlyCount: 48,
      monthlyTotal: 240000,
      halfYearlyInstallment: 10000,
      halfYearlyCount: 8,
      halfYearlyTotal: 80000,
      possessionAmount: 130000,
      dimensions: "Standard 80 Sq. Yards Layout",
      recommendedFor: "First-time homeowners & smart long-term investors",
      features: [
        "0% Down Payment at booking",
        "48 manageable monthly installments (Rs. 5,000/mo)",
        "8 semi-annual installments (Rs. 10,000)",
        "Rs. 130,000 on physical possession handover",
        "Allocated in the planned Green Block residential zone",
        "Clear demarcation & underground utility corridors"
      ]
    },
    {
      id: '120-yards',
      sizeInYards: 120,
      category: "Residential Plot",
      totalPrice: 650000,
      bookingAmount: 0,
      downPaymentPercent: 0,
      monthlyInstallment: 7500,
      monthlyCount: 48,
      monthlyTotal: 360000,
      halfYearlyInstallment: 15000,
      halfYearlyCount: 8,
      halfYearlyTotal: 120000,
      possessionAmount: 170000,
      dimensions: "Standard 120 Sq. Yards Layout",
      recommendedFor: "Spacious family homes & high-potential capital asset",
      features: [
        "0% Down Payment at booking",
        "48 predictable monthly installments (Rs. 7,500/mo)",
        "8 semi-annual installments (Rs. 15,000)",
        "Rs. 170,000 on physical possession handover",
        "Expansive frontage allowing multi-level modern design",
        "Direct access to primary wide society boulevards"
      ]
    }
  ] as PlotPlan[],

  extraCharges: [
    { category: "West Open", percentage: 5, description: "Plots aligned for optimal evening breeze and natural airflow" },
    { category: "Park Facing", percentage: 5, description: "Plots with direct scenic views facing landscaped green parks" },
    { category: "Corner Plot", percentage: 5, description: "Dual-road frontages offering enhanced architectural flexibility" },
    { category: "Main Road", percentage: 5, description: "Plots positioned on primary wide access boulevards" }
  ] as ExtraCharge[],

  extraChargesNote: "All Extra Charges will be paid within 180 days of Booking.",

  facilities: [
    {
      id: "gated-community",
      title: "Gated Community",
      category: "Security",
      description: "Secure perimeter boundaries with architecturally controlled access points and managed entry barriers.",
      iconName: "ShieldCheck",
      highlight: true
    },
    {
      id: "modern-planning",
      title: "Modern Planning",
      category: "Infrastructure",
      description: "Contemporary town planning with wide paved roads, dedicated street lighting, and efficient pedestrian walkways.",
      iconName: "Compass",
      highlight: true
    },
    {
      id: "theme-park",
      title: "Theme Park & Green Spaces",
      category: "Lifestyle",
      description: "Lush botanical gardens, family recreation avenues, and dedicated leisure parks within Green Block.",
      iconName: "Trees"
    },
    {
      id: "masjid",
      title: "Grand Central Masjid",
      category: "Lifestyle",
      description: "A beautifully appointed central mosque catering to spiritual congregational gatherings.",
      iconName: "Landmark"
    },
    {
      id: "hospital",
      title: "Healthcare Center & Hospital",
      category: "Healthcare",
      description: "Planned healthcare infrastructure designed to ensure rapid medical care and clinical services.",
      iconName: "Stethoscope"
    },
    {
      id: "security-system",
      title: "Integrated Security System",
      category: "Security",
      description: "Proactive security framework with monitored checkpoints and safety response protocols.",
      iconName: "Lock"
    },
    {
      id: "water",
      title: "Potable Water Supply",
      category: "Infrastructure",
      description: "Dedicated water storage, filtration corridors, and pressure-regulated supply networks.",
      iconName: "Droplets"
    },
    {
      id: "gas",
      title: "Sui Gas Provisioning (SSGC)",
      category: "Infrastructure",
      description: "Underground pipeline corridors planned in alignment with regional utility infrastructure.",
      iconName: "Flame"
    },
    {
      id: "electricity",
      title: "Electricity Grid (HESCO)",
      category: "Infrastructure",
      description: "Direct electrical grid connectivity designed in coordination with regional utility networks.",
      iconName: "Zap"
    },
    {
      id: "school",
      title: "Primary & Secondary School",
      category: "Education",
      description: "Modern educational facility ensuring quality schooling within safe walking distance for children.",
      iconName: "GraduationCap"
    },
    {
      id: "college",
      title: "Intermediate College",
      category: "Education",
      description: "Planned higher secondary education institution to support academic continuity within the community.",
      iconName: "BookOpen"
    },
    {
      id: "university",
      title: "University Campus Zone",
      category: "Education",
      description: "Earmarked academic zone fostering higher education and research opportunities in the M9 educational hub.",
      iconName: "Award"
    },
    {
      id: "cctv-surveillance",
      title: "24/7 Security & CCTV Surveillance",
      category: "Security",
      description: "Round-the-clock patrol personnel and continuous electronic surveillance at all key thoroughfares.",
      iconName: "Camera",
      highlight: true
    }
  ] as Facility[],

  nearbyLandmarks: [
    {
      name: "M9 Karachi–Hyderabad Motorway",
      role: "Direct Highway Arterial Frontage",
      significance: "The master economic lifeline connecting the metropolis of Karachi to Hyderabad and upper Sindh.",
      route: "Direct Highway Access",
      relativePosition: "Society Frontage"
    },
    {
      name: "DHA City Karachi",
      role: "Premier Urban Mega-Project",
      significance: "A high-profile modern enclave setting the benchmark for the future expansion of Karachi along M9.",
      route: "M9 Motorway Corridor",
      relativePosition: "Nearby Landmark"
    },
    {
      name: "Saima Midtown",
      role: "Prominent Residential & Commercial Hub",
      significance: "Major established development catalyzing residential density and commercial vibrancy in the precinct.",
      route: "M9 Motorway Corridor",
      relativePosition: "Nearby Development"
    },
    {
      name: "Nooriabad Industrial Area",
      role: "Key Regional Industrial Engine",
      significance: "Major manufacturing, manufacturing logistics, and employment zone generating robust housing demand.",
      route: "Industrial Bypass / M9 Link",
      relativePosition: "Immediate Vicinity"
    },
    {
      name: "Karachi Metropolis",
      role: "Provincial Capital & Commercial Port",
      significance: "Accessible via the multi-lane M9 Super Highway with expanding suburban transit nodes.",
      route: "Direct M9 Southbound",
      relativePosition: "Terminal City Node"
    },
    {
      name: "Hyderabad City",
      role: "Historic Urban & Educational Center",
      significance: "Rapid connectivity via northern M9 corridor linking regional agricultural and commercial markets.",
      route: "Direct M9 Northbound",
      relativePosition: "Regional Node"
    }
  ] as NearbyLocation[],

  partners: [
    {
      name: "Citizen Builders & Developers",
      role: "Project By",
      tagline: "Dedicated to transparent community development",
      description: "The primary visionary developer steering the master vision, site execution, and delivery of Citizen Housing Society."
    },
    {
      name: "Shadab Links",
      role: "Architect By — Engineers & Contractors",
      tagline: "Architectural Planning & Engineering Excellence",
      description: "Engineering and architectural practice delivering spatial layout, road grid ergonomics, and structural design standards."
    },
    {
      name: "AAC (Akbar Ali & Co.)",
      role: "Development Partner",
      tagline: "Build Up Your Vision",
      description: "Infrastructure support and engineering management driving civil works and planning implementation."
    },
    {
      name: "Jasper Enterprises and Construction",
      role: "Construction Contractor",
      tagline: "On-Site Infrastructure Execution",
      description: "Heavy civil contracting firm handling ground levelling, demarcation, road sub-bases, and boundary installations."
    }
  ] as Partner[],

  documentationReferences: [
    {
      authority: "Sindh Master Plan Authority Hyderabad",
      scope: "Regional Town Planning & Spatial Zoning",
      status: "Developer submitted documentation reference",
      note: "Project planning is structured in coordination with regional town planning guidelines."
    },
    {
      authority: "Town Planning Framework",
      scope: "Internal Road Layouts, Open Areas & Civic Plots",
      status: "Master plan design standards",
      note: "Community layout incorporates statutory requirements for roads, parks, and community facilities."
    },
    {
      authority: "HESCO (Hyderabad Electric Supply Company)",
      scope: "Regional Electrical Distribution Grid Coordination",
      status: "Infrastructure planning phase",
      note: "Power infrastructure layout designed to interface with regional grid provisions."
    },
    {
      authority: "SSGC (Sui Southern Gas Company)",
      scope: "Piped Gas Network Routing",
      status: "Infrastructure planning phase",
      note: "Underground utility corridors reserved for regional utility connections."
    }
  ],

  whyCitizenHousing: [
    {
      number: "01",
      title: "Ownership-Oriented Installment Structure",
      description: "With 0% down payment and starting installments of just Rs. 5,000/month, we remove steep upfront capital barriers to make true land ownership achievable."
    },
    {
      number: "02",
      title: "Residential Plot Options",
      description: "Optimally scaled 80 and 120 Sq. Yards plots cater to pragmatic budgets without sacrificing living standards, ideal for contemporary townhomes."
    },
    {
      number: "03",
      title: "Strategic M9 Location",
      description: "Fronting the M9 Karachi–Hyderabad Motorway, situated strategically between two major cities and neighboring high-growth developments like DHA City and Saima Midtown."
    },
    {
      number: "04",
      title: "Security-Focused Gated Community",
      description: "A planned environment featuring controlled entry gates, dedicated perimeter demarcation, and 24/7 round-the-clock CCTV surveillance systems."
    },
    {
      number: "05",
      title: "Comprehensive Utilities Planning",
      description: "Pre-planned utility corridors designed for underground water lines, regional electricity (HESCO), gas provisioning (SSGC), and rainwater drainage."
    },
    {
      number: "06",
      title: "Predictable 48-Month Schedule",
      description: "Transparent payment terms with 48 equal monthly installments, 8 semi-annual payments, and a balanced final payment upon physical possession."
    },
    {
      number: "07",
      title: "Competitive Pricing Advantage",
      description: "Total plot valuations of Rs. 450,000 (80 sq. yds) and Rs. 650,000 (120 sq. yds) present an exceptional value proposition along the rapid-growth M9 corridor."
    },
    {
      number: "08",
      title: "Experienced Project Partners",
      description: "Collaborations with Shadab Links Engineers, AAC, and Jasper Enterprises ensure professional technical planning and execution standards."
    }
  ],

  faqs: [
    {
      question: "What plot sizes are available in Citizen Housing Society?",
      answer: "Citizen Housing Society (Green Block) currently offers two primary residential plot categories: 80 Sq. Yards and 120 Sq. Yards.",
      category: "Pricing & Payment"
    },
    {
      question: "What is the total price and breakdown of an 80-yard plot?",
      answer: "The total price for an 80 Sq. Yard residential plot is Rs. 450,000. It features 0% Down Payment (Rs. 0 at booking), 48 monthly installments of Rs. 5,000 (Rs. 240,000), 8 half-yearly installments of Rs. 10,000 (Rs. 80,000), and Rs. 130,000 payable at the time of possession.",
      category: "Pricing & Payment"
    },
    {
      question: "What is the total price and breakdown of a 120-yard plot?",
      answer: "The total price for a 120 Sq. Yard residential plot is Rs. 650,000. It features 0% Down Payment (Rs. 0 at booking), 48 monthly installments of Rs. 7,500 (Rs. 360,000), 8 half-yearly installments of Rs. 15,000 (Rs. 120,000), and Rs. 170,000 payable at the time of possession.",
      category: "Pricing & Payment"
    },
    {
      question: "Is there any down payment required at booking?",
      answer: "No, Citizen Housing Society features a 0% Down Payment policy. You can initiate your booking with Rs. 0 down payment and proceed directly into your scheduled monthly installment plan.",
      category: "Pricing & Payment"
    },
    {
      question: "How many monthly installments and half-yearly payments are there?",
      answer: "There are 48 monthly installments spread across a 4-year tenure, accompanied by 8 semi-annual (half-yearly) installments.",
      category: "Pricing & Payment"
    },
    {
      question: "What is the possession amount?",
      answer: "The possession amount payable upon formal physical handover is Rs. 130,000 for an 80-yard plot and Rs. 170,000 for a 120-yard plot.",
      category: "Pricing & Payment"
    },
    {
      question: "What additional charges apply to specific plot categories?",
      answer: "Specific premium locations incur a 5% surcharge: 5% West Open, 5% Park Facing, 5% Corner Plot, and 5% Main Road. As per developer policy, all extra charges are to be cleared within 180 days of booking.",
      category: "Pricing & Payment"
    },
    {
      question: "Where exactly is Citizen Housing located?",
      answer: "Citizen Housing Society is located on the M9 Karachi–Hyderabad Motorway, situated strategically between Karachi and Hyderabad, in close proximity to DHA City, Saima Midtown, and the Nooriabad Industrial Area.",
      category: "Location & Land"
    },
    {
      question: "What community facilities are planned for Green Block?",
      answer: "Planned community amenities include a Gated Perimeter, Modern Town Planning, a Theme Park, Central Grand Masjid, Healthcare Hospital, 24/7 Security & CCTV, Water Supply, Gas (SSGC), Electricity (HESCO), as well as School, College, and University campus zones.",
      category: "Facilities"
    },
    {
      question: "How can I inspect or request project documentation and approvals?",
      answer: "Project documentation references include Sindh Master Plan Authority Hyderabad, regional town planning records, and utility coordination (HESCO/SSGC). You can submit a document request directly through our online form or visit the developer sales office to review available project files.",
      category: "Documentation"
    },
    {
      question: "How can I book a plot or schedule an on-site consultation?",
      answer: "You can click 'Book Your Plot' or 'Book a Consultation' on this website, send a WhatsApp inquiry to our sales desk, or submit your contact information through our lead form. Our official sales team will get back to you promptly.",
      category: "Pricing & Payment"
    }
  ] as FAQItem[],

  galleryImages: [
    {
      id: "master-plan-overview",
      title: "Master Plan & Green Block Layout",
      category: "Master Plan",
      imageUrl: "https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80",
      caption: "Conceptual master planning blueprint detailing road hierarchy, civic zones, and residential plot sectors."
    },
    {
      id: "m9-connectivity",
      title: "M9 Motorway Corridor Connectivity",
      category: "Location & Surroundings",
      imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
      caption: "High-speed multi-lane transit artery linking Karachi, DHA City, and Hyderabad."
    },
    {
      id: "gated-entrance-concept",
      title: "Modern Architectural Entrance Gate",
      category: "Concept Architecture",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      caption: "Architectural representation of the planned secure gated entrance and boulevard."
    },
    {
      id: "green-parks-community",
      title: "Green Block Theme Park & Open Parks",
      category: "Community & Nature",
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      caption: "Landscaped family recreation parks and shaded community walking trails."
    },
    {
      id: "modern-residences",
      title: "Contemporary Residential Vision",
      category: "Development Vision",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      caption: "Clean architectural typology envisioned for 80 and 120 Sq. Yards private residences."
    },
    {
      id: "community-lifestyle",
      title: "Planned Family Living Environment",
      category: "Community & Nature",
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      caption: "Thoughtfully balanced community spaces promoting safety, wellness, and serenity."
    }
  ] as GalleryItem[]
};
