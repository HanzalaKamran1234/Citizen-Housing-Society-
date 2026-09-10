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
  category: 'Land & Clarification' | 'Pricing & Payment' | 'Location & Land' | 'Facilities' | 'Documentation';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Master Plan' | 'Location & Highway' | 'Land & Community' | 'Infrastructure Planning';
  imageUrl: string;
  caption: string;
}

export const PROJECT_DATA = {
  brand: {
    name: "CITIZEN HOUSING",
    subline: "A PROJECT OF CITIZEN BUILDERS & DEVELOPERS",
    projectTitle: "CITIZEN HOUSING SOCIETY — GREEN BLOCK",
    tagline: "OWN THE PLOT. SHAPE YOUR FUTURE.",
    locationLine: "M9 KARACHI–HYDERABAD MOTORWAY",
    heroDescription: "Residential plots on the M9 Karachi–Hyderabad Motorway, strategically located near DHA City, Saima Midtown and Nooriabad Industrial Area.",
    developer: "Citizen Builders & Developers",
    officialWhatsApp: "+923000000000",
    displayPhone: "+92 21 3000 0000",
    displayEmail: "sales@citizenhousing.pk",
    officeAddress: "Corporate Office: Main Shahrah-e-Faisal / Site Office: M9 Motorway, Sindh",
    siteLocation: "M9 Karachi–Hyderabad Motorway, Sindh, Pakistan",
  },

  trustStrip: [
    {
      label: "Residential Plots",
      value: "80 YARDS",
      unit: "Residential Plot",
      sub: "Manageable entry into land ownership"
    },
    {
      label: "Residential Plots",
      value: "120 YARDS",
      unit: "Residential Plot",
      sub: "Spacious avenue-fronting land parcel"
    },
    {
      label: "Booking Policy",
      value: "0%",
      unit: "Down Payment",
      sub: "Rs. 0 Upfront Down Payment"
    },
    {
      label: "Flexible Installments",
      value: "FROM Rs. 5,000",
      unit: "Monthly",
      sub: "48 equal, structured monthly payments"
    },
    {
      label: "Strategic Corridor",
      value: "M9 MOTORWAY",
      unit: "Frontage",
      sub: "Between Karachi & Hyderabad"
    }
  ],

  plotPlans: [
    {
      id: '80-yards',
      sizeInYards: 80,
      category: "Residential Plot (Land)",
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
      dimensions: "Standard 80 Sq. Yards Plot Dimension",
      recommendedFor: "First-time land purchasers & long-term family security",
      features: [
        "100% Pure Plot Purchase (You own the actual land)",
        "0% Down Payment at initial booking (Rs. 0)",
        "48 monthly installments of Rs. 5,000",
        "8 semi-annual installments of Rs. 10,000",
        "Rs. 130,000 upon physical on-ground possession handover",
        "You decide your own future construction plan and architectural layout"
      ]
    },
    {
      id: '120-yards',
      sizeInYards: 120,
      category: "Residential Plot (Land)",
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
      dimensions: "Standard 120 Sq. Yards Plot Dimension",
      recommendedFor: "Expansive family plots with wide boulevard frontages",
      features: [
        "100% Pure Plot Purchase (You own the actual land)",
        "0% Down Payment at initial booking (Rs. 0)",
        "48 monthly installments of Rs. 7,500",
        "8 semi-annual installments of Rs. 15,000",
        "Rs. 170,000 upon physical on-ground possession handover",
        "Freedom to design your future residence when you are ready"
      ]
    }
  ] as PlotPlan[],

  extraCharges: [
    { category: "West Open", percentage: 5, description: "Plots orientated for natural evening sea breeze and airflow" },
    { category: "Park Facing", percentage: 5, description: "Plots directly facing planned community parks and landscaped belts" },
    { category: "Corner Plot", percentage: 5, description: "Dual-road frontages providing enhanced spatial design options" },
    { category: "Main Road", percentage: 5, description: "Plots with direct frontage on primary wide master-planned boulevards" }
  ] as ExtraCharge[],

  extraChargesNote: "All Extra Charges will be paid within 180 days of Booking.",

  howItWorksSteps: [
    {
      step: "01",
      title: "SELECT YOUR PLOT",
      description: "Choose between available 80 Sq. Yards and 120 Sq. Yards residential plot options based on your family's future vision and budget."
    },
    {
      step: "02",
      title: "CHOOSE YOUR PAYMENT PLAN",
      description: "Review the transparent 48-month installment schedule with 0% down payment, manageable monthly installments, and clear milestones."
    },
    {
      step: "03",
      title: "COMPLETE THE BOOKING PROCESS",
      description: "Submit your registration information and connect with the official sales team for documentation verification and allotment records."
    },
    {
      step: "04",
      title: "OWN YOUR PLOT",
      description: "Complete your payments according to the terms, take possession of your demarcated land, and decide when and how to build your vision."
    }
  ],

  whyOwnAPlot: [
    {
      step: "01",
      title: "OWN THE LAND",
      description: "Land is the permanent foundation. When you purchase a residential plot in Citizen Housing, you own the land itself rather than buying an inflated prefabricated building."
    },
    {
      step: "02",
      title: "PLAN YOUR VISION",
      description: "No forced floorplans or cookie-cutter rooms. You hold the freedom to design your future home according to your family's exact needs and architectural preferences."
    },
    {
      step: "03",
      title: "BUILD WHEN YOU'RE READY",
      description: "There is no rushed construction deadline forced upon you. Take your time, complete your installments comfortably, and build on your plot when the timing suits your financial goals."
    }
  ],

  securityHighlights: [
    {
      title: "Controlled Gated Entrances",
      desc: "Architecturally demarcated entrance gates with monitored barrier arms and security personnel managing vehicle entry.",
      badge: "Gated Community"
    },
    {
      title: "24/7 Security Patrols",
      desc: "Trained on-site security guards stationed across key boulevard junctions and round-the-clock patrol units.",
      badge: "24/7 Guards"
    },
    {
      title: "CCTV Surveillance Corridors",
      desc: "Electronic camera monitoring planned across primary avenues and entry/exit perimeters to maintain community safety.",
      badge: "CCTV Network"
    },
    {
      title: "Demarcated Boundary Infrastructure",
      desc: "Clear boundary lines, planned perimeter walls, and mapped sector demarcations safeguarding project grounds.",
      badge: "Boundary Enclosure"
    }
  ],

  facilities: [
    {
      id: "gated-community",
      title: "Gated Community",
      category: "Security",
      description: "Secure perimeter boundaries with controlled access points and managed gate checkpoints.",
      iconName: "ShieldCheck",
      highlight: true
    },
    {
      id: "modern-planning",
      title: "Modern Planning",
      category: "Infrastructure",
      description: "Contemporary town layout with wide paved boulevards, street lighting, and dedicated pedestrian walkways.",
      iconName: "Compass",
      highlight: true
    },
    {
      id: "theme-park",
      title: "Theme Park & Green Belts",
      category: "Lifestyle",
      description: "Landscaped family recreation parks, open greenery, and community walking avenues within Green Block.",
      iconName: "Trees"
    },
    {
      id: "masjid",
      title: "Central Grand Masjid",
      category: "Lifestyle",
      description: "Centrally positioned community mosque for daily congregational and Friday spiritual gatherings.",
      iconName: "Landmark"
    },
    {
      id: "hospital",
      title: "Healthcare Facility / Hospital",
      category: "Healthcare",
      description: "Designated healthcare parcel planned to ensure accessible medical care and clinical services.",
      iconName: "Stethoscope"
    },
    {
      id: "security-system",
      title: "Integrated Security System",
      category: "Security",
      description: "Proactive security framework with designated checkpoints and surveillance monitoring.",
      iconName: "Lock"
    },
    {
      id: "water",
      title: "Water Supply Network",
      category: "Infrastructure",
      description: "Dedicated water storage infrastructure and underground pipeline corridors planned throughout sectors.",
      iconName: "Droplets"
    },
    {
      id: "gas",
      title: "Sui Gas Provisioning (SSGC)",
      category: "Infrastructure",
      description: "Underground utility corridors mapped in coordination with regional gas supply infrastructure.",
      iconName: "Flame"
    },
    {
      id: "electricity",
      title: "Electricity Network (HESCO)",
      category: "Infrastructure",
      description: "Electrical infrastructure designed to link with the regional power distribution grid.",
      iconName: "Zap"
    },
    {
      id: "school",
      title: "Primary & Secondary School",
      category: "Education",
      description: "Reserved campus plots ensuring future schooling facilities within safe walking distance for children.",
      iconName: "GraduationCap"
    },
    {
      id: "college",
      title: "Intermediate College",
      category: "Education",
      description: "Planned higher secondary education institution supporting academic continuity within the community.",
      iconName: "BookOpen"
    },
    {
      id: "university",
      title: "University Campus Area",
      category: "Education",
      description: "Earmarked higher education zone fostering learning opportunities in the M9 educational corridor.",
      iconName: "Award"
    },
    {
      id: "cctv-surveillance",
      title: "24/7 Security & CCTV",
      category: "Security",
      description: "Continuous electronic surveillance and 24-hour on-ground security monitoring.",
      iconName: "Camera",
      highlight: true
    }
  ] as Facility[],

  nearbyLandmarks: [
    {
      name: "M9 Karachi–Hyderabad Motorway",
      role: "Direct Highway Frontage",
      significance: "The premier arterial corridor linking the metropolis of Karachi to Hyderabad and regional commercial hubs.",
      route: "Direct Highway Access",
      relativePosition: "Society Frontage"
    },
    {
      name: "DHA City Karachi",
      role: "Prominent Landmark Neighbor",
      significance: "High-profile urban expansion enclave setting modern infrastructure benchmarks along the M9 corridor.",
      route: "M9 Motorway Corridor",
      relativePosition: "Nearby Landmark"
    },
    {
      name: "Saima Midtown",
      role: "Major Developing Development",
      significance: "Established neighboring development catalyzing commercial density and residential activity in the precinct.",
      route: "M9 Motorway Corridor",
      relativePosition: "Nearby Development"
    },
    {
      name: "Nooriabad Industrial Area",
      role: "Economic & Industrial Center",
      significance: "Vital manufacturing and employment hub generating sustained long-term housing demand in the area.",
      route: "Industrial Bypass / M9 Link",
      relativePosition: "Immediate Vicinity"
    },
    {
      name: "Karachi Metropolis",
      role: "Provincial Capital & Commercial Port",
      significance: "Easily accessible via multi-lane highway with rapid transit expansion along the northern sector.",
      route: "Direct M9 Southbound",
      relativePosition: "Terminal City Node"
    },
    {
      name: "Hyderabad City",
      role: "Historic Urban & Educational Center",
      significance: "Direct highway connectivity via northern M9 linking regional trade, agricultural, and educational markets.",
      route: "Direct M9 Northbound",
      relativePosition: "Regional Node"
    }
  ] as NearbyLocation[],

  partners: [
    {
      name: "Citizen Builders & Developers",
      role: "Project By",
      tagline: "Dedicated to transparent plot community development",
      description: "The primary project developer steering the master planning, site acquisition, and delivery of Citizen Housing Society."
    },
    {
      name: "Shadab Links",
      role: "Architect By — Engineers & Contractors",
      tagline: "Town Planning & Engineering Excellence",
      description: "Engineering and architectural practice delivering spatial layout, road grid ergonomics, and statutory standards."
    },
    {
      name: "AAC — Akbar Ali & Co.",
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
      note: "Community layout incorporates statutory requirements for roads, parks, and civic allocations."
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
      question: "Is Citizen Housing selling ready-made houses or residential plots?",
      answer: "Citizen Housing Society is exclusively a PLOT / LAND DEVELOPMENT PROJECT. They sell demarcated residential plots (80 Sq. Yards and 120 Sq. Yards) in a master-planned community. They DO NOT sell ready-made houses, flats, or apartments, and they do not act as homebuilders for customers. You buy and own the land, and can later decide what and when to build on your own plot according to applicable rules and approvals.",
      category: "Land & Clarification"
    },
    {
      question: "What plot sizes are available in Green Block?",
      answer: "Citizen Housing Society (Green Block) offers two primary residential plot options: 80 Sq. Yards and 120 Sq. Yards.",
      category: "Pricing & Payment"
    },
    {
      question: "What is the price of an 80-yard residential plot?",
      answer: "The total price for an 80 Sq. Yard residential plot is Rs. 450,000. It features 0% Down Payment (Rs. 0 at booking), 48 monthly installments of Rs. 5,000 (Rs. 240,000), 8 half-yearly installments of Rs. 10,000 (Rs. 80,000), and Rs. 130,000 payable upon physical possession.",
      category: "Pricing & Payment"
    },
    {
      question: "What is the price of a 120-yard residential plot?",
      answer: "The total price for a 120 Sq. Yard residential plot is Rs. 650,000. It features 0% Down Payment (Rs. 0 at booking), 48 monthly installments of Rs. 7,500 (Rs. 360,000), 8 half-yearly installments of Rs. 15,000 (Rs. 120,000), and Rs. 170,000 payable upon physical possession.",
      category: "Pricing & Payment"
    },
    {
      question: "Is there a down payment required to book a plot?",
      answer: "No, there is 0% Down Payment required at booking. You can initiate your plot booking with Rs. 0 upfront and transition straight into the manageable 48-month installment plan.",
      category: "Pricing & Payment"
    },
    {
      question: "What are the monthly installments?",
      answer: "For an 80 Sq. Yard plot, monthly installments are Rs. 5,000 for 48 months. For a 120 Sq. Yard plot, monthly installments are Rs. 7,500 for 48 months.",
      category: "Pricing & Payment"
    },
    {
      question: "What are the half-yearly payments?",
      answer: "Half-yearly payments occur 8 times over the 4-year tenure: Rs. 10,000 every 6 months for an 80-yard plot, and Rs. 15,000 every 6 months for a 120-yard plot.",
      category: "Pricing & Payment"
    },
    {
      question: "What is the possession amount?",
      answer: "The possession amount payable upon formal physical handover of the plot is Rs. 130,000 for 80 Sq. Yards, and Rs. 170,000 for 120 Sq. Yards.",
      category: "Pricing & Payment"
    },
    {
      question: "What additional charges apply to specific plot locations?",
      answer: "Prime location surcharges are 5% for West Open, 5% for Park Facing, 5% for Corner Plots, and 5% for Main Road frontage. As per developer terms, all extra charges are to be cleared within 180 days of booking.",
      category: "Pricing & Payment"
    },
    {
      question: "Where is Citizen Housing located?",
      answer: "Citizen Housing Society is located on the M9 Karachi–Hyderabad Motorway, positioned between Karachi and Hyderabad, in close proximity to DHA City, Saima Midtown, and the Nooriabad Industrial Area.",
      category: "Location & Land"
    },
    {
      question: "What community facilities are included/planned?",
      answer: "Planned community infrastructure includes a Gated Perimeter, Modern Town Planning, Central Grand Masjid, Theme Park & Green Belts, Hospital, 24/7 Security & CCTV, Water, Electricity (HESCO), Gas (SSGC), as well as School, College, and University campus zones.",
      category: "Facilities"
    },
    {
      question: "How can I request project documentation?",
      answer: "Project documentation references include Sindh Master Plan Authority Hyderabad, regional town planning records, and utility coordination (HESCO/SSGC). You can submit an online request or visit the developer sales office to inspect project files.",
      category: "Documentation"
    },
    {
      question: "How can I contact the sales team?",
      answer: "You can click 'Book Your Plot' or 'Talk to Sales', initiate a WhatsApp chat via our floating button, or submit your contact info through our booking form. An official representative will reach out promptly.",
      category: "Land & Clarification"
    }
  ] as FAQItem[],

  galleryImages: [
    {
      id: "master-plan-overview",
      title: "Master Planning Layout & Plot Sectors",
      category: "Master Plan",
      imageUrl: "https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80",
      caption: "Town planning layout detailing road hierarchy, civic zones, and demarcated residential plot sectors."
    },
    {
      id: "m9-connectivity",
      title: "M9 Motorway Highway Alignment",
      category: "Location & Highway",
      imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
      caption: "Multi-lane high-speed corridor connecting Karachi to Hyderabad and regional commercial hubs."
    },
    {
      id: "open-land-community",
      title: "Green Block Landscape & Open Terrain",
      category: "Land & Community",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      caption: "Open, natural terrain of Green Block selected for healthy, spacious community development."
    },
    {
      id: "road-infrastructure",
      title: "Planned Wide Boulevards & Street Grids",
      category: "Infrastructure Planning",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      caption: "Planned modern boulevard network ensuring smooth internal mobility and pedestrian access."
    },
    {
      id: "green-parks-nature",
      title: "Central Theme Park & Landscaped Reserves",
      category: "Land & Community",
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      caption: "Reserved green spaces, botanical gardens, and community leisure avenues within the project."
    },
    {
      id: "civic-planning",
      title: "Educational & Civic Reserve Zones",
      category: "Infrastructure Planning",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      caption: "Earmarked institutional zones for schools, intermediate colleges, hospital, and central masjid."
    }
  ] as GalleryItem[]
};
