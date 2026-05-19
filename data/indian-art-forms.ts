export interface ArtForm {
  id: string;
  name: string;
  sanskritName?: string;
  media: {
    hero: string;
    gallery: string[];
  };
  sources: Array<{
    title: string;
    url: string;
    publisher: string;
  }>;
  origin: {
    period: string;
    region: string;
    historicalContext: string;
  };
  description: string;
  symbolism: string[];
  materials: string[];
  techniques: string[];
  characteristics: string[];
  famousArtists: Array<{
    name: string;
    period: string;
    contribution: string;
    notableWorks: string[];
  }>;
  modernEvolution: {
    contemporaryArtists: string[];
    adaptations: string[];
    globalRecognition: string[];
    preservationEfforts: string[];
  };
  relatedFestivals: Array<{
    name: string;
    significance: string;
    region: string;
  }>;
  museums: Array<{
    name: string;
    location: string;
    notableCollection: string;
  }>;
  gallery: {
    historicalWorks: string[];
    contemporaryWorks: string[];
    processImages: string[];
  };
  learningResources: {
    books: string[];
    documentaries: string[];
    workshops: string[];
  };
}

export const indianArtForms: ArtForm[] = [
  {
    id: "madhubani",
    name: "Madhubani Painting",
    sanskritName: "मधुबनी चित्रकला",
    media: {
      hero: "madhubani-commons-primary",
      gallery: ["madhubani-commons-primary"],
    },
    sources: [
      {
        title: "Madhubani painting image record",
        url: "https://commons.wikimedia.org/wiki/File:Madhubani_painting.jpg",
        publisher: "Wikimedia Commons",
      },
      {
        title: "Madhubani painting category",
        url: "https://commons.wikimedia.org/wiki/Category:Madhubani_painting",
        publisher: "Wikimedia Commons",
      },
    ],
    origin: {
      period: "7th Century CE",
      region: "Mithila Region, Bihar",
      historicalContext: "Originated as wall paintings for wedding ceremonies and religious rituals in the Mithila region. Traditionally practiced by women, it was brought to national attention during the 1960s drought when artists were encouraged to paint on paper for income."
    },
    description: "Madhubani, or Mithila painting, is characterized by its vibrant colors, geometric patterns, and symbolic depictions of nature and mythology. The art form uses natural dyes and pigments, with paintings traditionally created on walls, paper, and cloth using twigs, fingers, and matchsticks.",
    symbolism: [
      "Peacocks - beauty and grace",
      "Lotus - purity and divinity",
      "Fish - fertility and prosperity",
      "Sun - life and energy",
      "Trees - nature and growth",
      "Elephants - wisdom and strength"
    ],
    materials: [
      "Natural pigments from plants and minerals",
      "Handmade paper treated with cow dung",
      "Cotton cloth for traditional pieces",
      "Bamboo twigs and matchsticks as brushes",
      "Rice paste for white pigment"
    ],
    techniques: [
      "Double line technique for bold outlines",
      "Geometric pattern filling",
      "Cross-hatching for texture",
      "Pointillism for detailed work",
      "Negative space utilization"
    ],
    characteristics: [
      "No empty space left in paintings",
      "Bold black outlines",
      "Flat perspective with no shading",
      "Vibrant natural colors",
      "Symmetrical compositions",
      "Mythological and nature themes"
    ],
    famousArtists: [
      {
        name: "Sita Devi",
        period: "1920s-2005",
        contribution: "Pioneer who brought Madhubani to international recognition",
        notableWorks: ["Krishna Leela", "Ramayana Series", "Nature Compositions"]
      },
      {
        name: "Mahasundari Devi",
        period: "1942-2013",
        contribution: "National Award winner who modernized traditional themes",
        notableWorks: ["Women's Life Series", "Festival Paintings", "Mythological Stories"]
      },
      {
        name: "Ganga Devi",
        period: "1927-2013",
        contribution: "Known for intricate line work and detailed compositions",
        notableWorks: ["Village Life", "Wedding Ceremonies", "Krishna Stories"]
      }
    ],
    modernEvolution: {
      contemporaryArtists: ["Bharti Dayal", "Rashmi Kala", "Manisha Jha"],
      adaptations: [
        "Canvas paintings for modern homes",
        "Fashion and textile applications",
        "Digital art interpretations",
        "Murals and public art installations"
      ],
      globalRecognition: [
        "UNESCO Intangible Cultural Heritage recognition",
        "International exhibitions in museums worldwide",
        "Inclusion in luxury brand collaborations"
      ],
      preservationEfforts: [
        "Government training centers in Mithila",
        "NGO initiatives for artist support",
        "Educational programs in schools",
        "Digital documentation of traditional techniques"
      ]
    },
    relatedFestivals: [
      {
        name: "Chhath Puja",
        significance: "Sun worship festival where Madhubani paintings decorate homes",
        region: "Bihar, Jharkhand, Uttar Pradesh"
      },
      {
        name: "Vivah Panchami",
        significance: "Wedding anniversary of Rama and Sita, celebrated with marriage paintings",
        region: "Mithila region"
      }
    ],
    museums: [
      {
        name: "Mithila Art Museum",
        location: "Madhubani, Bihar",
        notableCollection: "Over 1000 traditional and contemporary Madhubani paintings"
      },
      {
        name: "National Museum",
        location: "New Delhi",
        notableCollection: "Rare historical Madhubani works from master artists"
      }
    ],
    gallery: {
      historicalWorks: [
        "Traditional kohbar ghar (wedding chamber) paintings",
        "Religious ceremonial wall paintings",
        "19th century paper adaptations"
      ],
      contemporaryWorks: [
        "Modern interpretations on canvas",
        "Urban theme paintings",
        "Abstract Madhubani styles"
      ],
      processImages: [
        "Natural pigment preparation",
        "Traditional brush making",
        "Artists at work in villages"
      ]
    },
    learningResources: {
      books: [
        "Madhubani: The Art of Mithila by Yashodhara Dalmia",
        "Painters of Mithila by Erika Fischer",
        "Women Artists of Mithila by N. K. Bose"
      ],
      documentaries: [
        "The Colors of Mithila - National Geographic",
        "Madhubani: A Living Tradition - Doordarshan"
      ],
      workshops: [
        "Mithila Art Institute, Madhubani",
        "National Institute of Design workshops",
        "Online courses by master artists"
      ]
    }
  },
  {
    id: "warli",
    name: "Warli Art",
    sanskritName: "वारली कला",
    media: {
      hero: "warli-commons-primary",
      gallery: ["warli-commons-primary"],
    },
    sources: [
      {
        title: "Warli painting image record",
        url: "https://commons.wikimedia.org/wiki/File:Warli_painting.jpg",
        publisher: "Wikimedia Commons",
      },
      {
        title: "Warli paintings category",
        url: "https://commons.wikimedia.org/wiki/Category:Warli_paintings",
        publisher: "Wikimedia Commons",
      },
    ],
    origin: {
      period: "10th Century CE",
      region: "Maharashtra (Thane, Palghar districts)",
      historicalContext: "Ancient tribal art form practiced by the Warli tribe, one of the largest tribes in Maharashtra. Originally created as ritualistic paintings on hut walls for weddings, harvests, and special occasions."
    },
    description: "Warli art uses basic geometric shapes—circles, triangles, and squares—to depict scenes from daily life, nature, and social rituals. The monochromatic style uses rice paste on mud walls, creating striking white patterns on dark brown backgrounds.",
    symbolism: [
      "Circle - sun and moon, representing divine",
      "Triangle - mountains and trees, nature",
      "Square - human enclosures and sacred spaces",
      "Humans in circles - community unity",
      "Animals - harmony with nature",
      "Tarpa dance - celebration and joy"
    ],
    materials: [
      "Rice paste for white pigment",
      "Mud walls as canvas",
      "Bamboo sticks as brushes",
      "Natural binders from tree gum",
      "Charcoal for occasional black accents"
    ],
    techniques: [
      "Geometric shape composition",
      "Human figures in stick form",
      "Action through posture lines",
      "Pattern repetition for rhythm",
      "Negative space storytelling"
    ],
    characteristics: [
      "Monochromatic white on brown",
      "Simple geometric shapes",
      "Scenes from daily life",
      "Community and nature themes",
      "Ritual and ceremonial contexts",
      "No facial features on figures"
    ],
    famousArtists: [
      {
        name: "Jivya Soma Mashe",
        period: "1934-2018",
        contribution: "International recognition for Warli art, exhibited globally",
        notableWorks: ["Village Life", "Harvest Festival", "Dance Ceremonies"]
      },
      {
        name: "Ramesh Hengadi",
        period: "Contemporary",
        contribution: "Modern interpretations while preserving traditional techniques",
        notableWorks: ["Urban Warli", "Contemporary Themes", "Nature Series"]
      },
      {
        name: "Anil Vayeda",
        period: "Contemporary",
        contribution: "Incorporating modern themes into traditional Warli style",
        notableWorks: ["Climate Change", "Urban Stories", "Environmental Series"]
      }
    ],
    modernEvolution: {
      contemporaryArtists: ["Balu Jivya Ladshya", "Shantaram Ladshya", "Vijay G. Soni"],
      adaptations: [
        "Canvas and paper paintings",
        "Textile and fashion applications",
        "Digital art and animations",
        "Public murals and installations"
      ],
      globalRecognition: [
        "Tate Modern exhibition",
        "Museum of Modern Art (MoMA) collection",
        "International folk art festivals"
      ],
      preservationEfforts: [
        "Warli Art Foundation initiatives",
        "Government cultural programs",
        "Educational workshops in schools",
        "Digital preservation projects"
      ]
    },
    relatedFestivals: [
      {
        name: "Warli Festival",
        significance: "Annual celebration of Warli culture and art",
        region: "Thane, Maharashtra"
      },
      {
        name: "Tribal Art Festival",
        significance: "Showcase of tribal arts including Warli paintings",
        region: "Various locations in Maharashtra"
      }
    ],
    museums: [
      {
        name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
        location: "Mumbai",
        notableCollection: "Extensive Warli art collection from various periods"
      },
      {
        name: "Tribal Museum",
        location: "Pune",
        notableCollection: "Contemporary and traditional Warli artworks"
      }
    ],
    gallery: {
      historicalWorks: [
        "Traditional hut wall paintings",
        "Ceremonial wedding paintings",
        "Harvest festival decorations"
      ],
      contemporaryWorks: [
        "Canvas adaptations",
        "Modern theme paintings",
        "Urban Warli interpretations"
      ],
      processImages: [
        "Rice paste preparation",
        "Traditional brush making",
        "Community painting sessions"
      ]
    },
    learningResources: {
      books: [
        "Warli: The Art of the Tribal People by Haku Shah",
        "Warli Paintings by Yashodhara Dalmia",
        "Tribal Art of India by K. S. Singh"
      ],
      documentaries: [
        "Warli: A Living Tradition - Films Division",
        "The White Art - National Geographic"
      ],
      workshops: [
        "Warli Art Centers in Maharashtra",
        "National Institute of Design courses",
        "Tribal art workshops in Mumbai"
      ]
    }
  },
  {
    id: "pattachitra",
    name: "Pattachitra",
    sanskritName: "पट्टचित्र",
    media: {
      hero: "pattachitra-commons-primary",
      gallery: ["pattachitra-commons-primary"],
    },
    sources: [
      {
        title: "Pattachitra image record",
        url: "https://commons.wikimedia.org/wiki/File:Pattachitra_art.jpg",
        publisher: "Wikimedia Commons",
      },
      {
        title: "Pattachitra category",
        url: "https://commons.wikimedia.org/wiki/Category:Pattachitra",
        publisher: "Wikimedia Commons",
      },
    ],
    origin: {
      period: "5th Century CE",
      region: "Odisha (Puri, Raghurajpur)",
      historicalContext: "Ancient scroll painting tradition that originated as visual storytelling for temple rituals and religious processions. The name derives from 'patta' (cloth) and 'chitra' (picture)."
    },
    description: "Pattachitra are cloth-based scroll paintings depicting mythological narratives, particularly stories of Lord Jagannath. Characterized by intricate details, bold outlines, and natural colors, these paintings follow strict iconographic traditions.",
    symbolism: [
      "Lotus - purity and divine birth",
      "Peacock - beauty and royalty",
      "Elephant - wisdom and strength",
      "Conch - divine sound",
      "Wheel - cosmic order",
      "Tree of life - connection between heaven and earth"
    ],
    materials: [
      "Cotton or silk cloth treated with tamarind paste",
      "Natural pigments from minerals and plants",
      "Tamarind seed gum as binder",
      "Fine squirrel hair brushes",
      "Charcoal for preliminary sketches"
    ],
    techniques: [
      "Bold black outlines first",
      "Color filling after outlines",
      "Fine detailing with miniature brushes",
      "Symmetrical compositions",
      "Layered color application",
    ],
    characteristics: [
      "Bold black outlines",
      "Natural mineral colors",
      "Mythological themes",
      "Intricate detailing",
      "Flat perspective",
      "Religious iconography"
    ],
    famousArtists: [
      {
        name: "Raghunath Mohapatra",
        period: "Contemporary",
        contribution: "Padma Shri award winner, master of traditional Pattachitra",
        notableWorks: ["Jagannath Series", "Ramayana Scrolls", "Krishna Leela"]
      },
      {
        name: "Jaganath Mohapatra",
        period: "Contemporary",
        contribution: "National Award winner, known for intricate detailing",
        notableWorks: ["Temple Paintings", "Mythological Series", "Contemporary Themes"]
      },
      {
        name: "Balaram Rout",
        period: "Contemporary",
        contribution: "Innovator who blends traditional with modern themes",
        notableWorks: ["Modern Pattachitra", "Social Themes", "Environmental Series"]
      }
    ],
    modernEvolution: {
      contemporaryArtists: ["Sushanta Kumar Maharana", "Prabhasini Maharana", "Gouranga Charana"],
      adaptations: [
        "Canvas paintings for galleries",
        "Miniature Pattachitra artworks",
        "Textile and fashion applications",
        "Digital art interpretations"
      ],
      globalRecognition: [
        "UNESCO recognition for cultural heritage",
        "International exhibitions in Europe and America",
        "Luxury brand collaborations"
      ],
      preservationEfforts: [
        "Raghurajpur artist village development",
        "Government training programs",
        "Cultural tourism initiatives",
        "Educational workshops"
      ]
    },
    relatedFestivals: [
      {
        name: "Ratha Yatra",
        significance: "Chariot festival where Pattachitra scrolls are displayed",
        region: "Puri, Odisha"
      },
      {
        name: "Konark Dance Festival",
        significance: "Cultural festival showcasing Pattachitra alongside dance",
        region: "Konark, Odisha"
      }
    ],
    museums: [
      {
        name: "Odisha State Museum",
        location: "Bhubaneswar",
        notableCollection: "Historical and contemporary Pattachitra collection"
      },
      {
        name: "Jagannath Temple Museum",
        location: "Puri",
        notableCollection: "Traditional temple Pattachitra paintings"
      }
    ],
    gallery: {
      historicalWorks: [
        "Ancient temple scrolls",
        "Traditional religious paintings",
        "19th century masterpieces"
      ],
      contemporaryWorks: [
        "Modern canvas adaptations",
        "Contemporary themes",
        "Abstract interpretations"
      ],
      processImages: [
        "Cloth preparation process",
        "Natural pigment making",
        "Traditional painting techniques"
      ]
    },
    learningResources: {
      books: [
        "Pattachitra of Odisha by J. P. Das",
        "Traditional Paintings of Odisha by K. C. Panigrahi",
        "The Art of Pattachitra by A. B. Tripathy"
      ],
      documentaries: [
        "Colors of Odisha - Doordarshan",
        "Pattachitra: Living Tradition - National Geographic"
      ],
      workshops: [
        "Raghurajpur Art Village",
        "Utkal University of Culture",
        "Private artist studios in Bhubaneswar"
      ]
    }
  },
  {
    id: "tanjore",
    name: "Tanjore Painting",
    sanskritName: "तंजावूर चित्रकला",
    media: {
      hero: "tanjore-commons-primary",
      gallery: ["tanjore-commons-primary"],
    },
    sources: [
      {
        title: "Tanjore art image record",
        url: "https://commons.wikimedia.org/wiki/File:Tanjore_art.jpg",
        publisher: "Wikimedia Commons",
      },
      {
        title: "Tanjore paintings category",
        url: "https://commons.wikimedia.org/wiki/Category:Tanjore_paintings",
        publisher: "Wikimedia Commons",
      },
    ],
    origin: {
      period: "16th Century CE",
      region: "Tanjore (Thanjavur), Tamil Nadu",
      historicalContext: "Developed during the Maratha rule in Thanjavur under the patronage of the Nayak and Maratha kings. Combines indigenous artistic traditions with influences from Deccani, Mughal, and European art."
    },
    description: "Tanjore paintings are classical South Indian paintings characterized by rich colors, compact composition, and especially gold leaf inlay. The paintings depict Hindu gods and goddesses, with gold foil giving them a three-dimensional embossed effect.",
    symbolism: [
      "Gold foil - divine radiance and prosperity",
      "Red background - power and energy",
      "Lotus - purity and enlightenment",
      "Crown - royalty and divinity",
      "Garlands - devotion and offering",
      "Throne - divine authority"
    ],
    materials: [
      "Teak wood or plywood boards",
      "22k gold foil for gilding",
      "Natural mineral pigments",
      "Arabic gum for binding",
      "Glass beads and gems for embellishment",
    ],
    techniques: [
      "Relief work with chalk powder",
      "Gold leaf gilding",
      "Gem stone setting",
      "Fine brush detailing",
      "Layered color application",
    ],
    characteristics: [
      "Rich gold foil work",
      "Vibrant color schemes",
      "Relief embossed effect",
      "Compact composition",
      "Religious themes",
      "Three-dimensional quality"
    ],
    famousArtists: [
      {
        name: "Raja Ravi Varma",
        period: "1848-1906",
        contribution: "Modernized Tanjore style with realistic representations",
        notableWorks: ["Shakuntala", "Lady in the Moonlight", "The Milkmaid"]
      },
      {
        name: "S. Elayaraja",
        period: "Contemporary",
        contribution: "Contemporary master maintaining traditional techniques",
        notableWorks: ["Divine Series", "Mythological Paintings", "Contemporary Themes"]
      },
      {
        name: "M. Senathipathi",
        period: "Contemporary",
        contribution: "Innovator combining traditional with modern elements",
        notableWorks: ["Modern Tanjore", "Abstract Series", "Cultural Heritage"]
      }
    ],
    modernEvolution: {
      contemporaryArtists: ["K. G. Subramanyan", "A. A. Almelkar", "B. D. Garg"],
      adaptations: [
        "Contemporary themes on traditional style",
        "Miniature Tanjore paintings",
        "Fashion and textile applications",
        "Digital art interpretations"
      ],
      globalRecognition: [
        "International museum collections",
        "Luxury art market presence",
        "Cultural diplomacy exhibitions"
      ],
      preservationEfforts: [
        "Government training institutes",
        "Private art schools",
        "Museum conservation programs",
        "Artist welfare initiatives"
      ]
    },
    relatedFestivals: [
      {
        name: "Navaratri",
        significance: "Nine nights festival when Tanjore paintings of goddesses are prominently displayed",
        region: "Tamil Nadu"
      },
      {
        name: "Brahmotsavam",
        significance: "Temple festival where Tanjore paintings decorate temple walls",
        region: "Thanjavur"
      }
    ],
    museums: [
      {
        name: "Tanjore Palace Museum",
        location: "Thanjavur",
        notableCollection: "Historical Tanjore paintings from royal collection"
      },
      {
        name: "Government Museum",
        location: "Chennai",
        notableCollection: "Extensive Tanjore painting collection"
      }
    ],
    gallery: {
      historicalWorks: [
        "16th century royal paintings",
        "Temple mural paintings",
        "Traditional religious compositions"
      ],
      contemporaryWorks: [
        "Modern interpretations",
        "Contemporary themes",
        "Abstract Tanjore styles"
      ],
      processImages: [
        "Board preparation",
        "Gold leaf application",
        "Traditional painting process"
      ]
    },
    learningResources: {
      books: [
        "Tanjore Paintings by C. Sivaramamurti",
        "South Indian Paintings by M. S. Ramesh",
        "The Art of Thanjavur by K. V. Soundara Rajan"
      ],
      documentaries: [
        "Gold Leaf Art - Discovery Channel",
        "Tanjore: Living Tradition - Doordarshan"
      ],
      workshops: [
        "Tanjore College of Arts",
        "Private art studios in Chennai",
        "Traditional artist families in Thanjavur"
      ]
    }
  },
  {
    id: "kalamkari",
    name: "Kalamkari",
    sanskritName: "कलमकारी",
    media: {
      hero: "kalamkari-commons-primary",
      gallery: ["kalamkari-commons-primary"],
    },
    sources: [
      {
        title: "Kalamkari painting image record",
        url: "https://commons.wikimedia.org/wiki/File:Kalamkari_painting.jpg",
        publisher: "Wikimedia Commons",
      },
      {
        title: "Kalamkari category",
        url: "https://commons.wikimedia.org/wiki/Category:Kalamkari",
        publisher: "Wikimedia Commons",
      },
    ],
    origin: {
      period: "17th Century CE",
      region: "Andhra Pradesh (Srikalahasti, Machilipatnam)",
      historicalContext: "Two distinct styles evolved - Srikalahasti style (hand-painted) and Machilipatnam style (block-printed). Originally used for temple hangings and religious textiles, later gained royal patronage."
    },
    description: "Kalamkari (kalam = pen, kari = craftsmanship) involves hand-painting or block-printing on cotton fabric using natural dyes. The art form features intricate mythological narratives and nature motifs with earthy colors and fine detailing.",
    symbolism: [
      "Tree of life - cosmic connection",
      "Peacock - beauty and royalty",
      "Elephant - wisdom and strength",
      "Lotus - purity and enlightenment",
      "Floral vines - growth and prosperity",
      "Mythological scenes - divine stories"
    ],
    materials: [
      "Cotton fabric treated with myrobalan",
      "Natural dyes from vegetables and minerals",
      "Palm leaf pens for drawing",
      "Wooden blocks for printing",
      "Natural mordants for color fixing"
    ],
    techniques: [
      "Natural dye extraction",
      "Block carving and printing",
      "Hand painting with kalam",
      "Multi-step dyeing process",
      "Wax resist techniques"
    ],
    characteristics: [
      "Natural earthy colors",
      "Fine line work",
      "Mythological themes",
      "Narrative storytelling",
      "Organic patterns",
      "Textile-based medium"
    ],
    famousArtists: [
      {
        name: "Gurappa Chetty",
        period: "Contemporary",
        contribution: "National Award winner, master of Srikalahasti style",
        notableWorks: ["Ramayana Series", "Mahabharata Scrolls", "Mythological Themes"]
      },
      {
        name: "Jonnalagadda Gurappa",
        period: "Contemporary",
        contribution: "Padma Shri recipient, preserving traditional techniques",
        notableWorks: ["Traditional Kalamkari", "Religious Themes", "Nature Series"]
      },
      {
        name: "Vijay Kumar Goud",
        period: "Contemporary",
        contribution: "Innovator combining traditional with contemporary designs",
        notableWorks: ["Modern Kalamkari", "Abstract Themes", "Fashion Applications"]
      }
    ],
    modernEvolution: {
      contemporaryArtists: ["K. N. Ramesh", "M. L. Narasimha", "S. R. J. Prasad"],
      adaptations: [
        "Fashion and textile industry",
        "Home decor applications",
        "Contemporary art pieces",
        "International fashion collaborations"
      ],
      globalRecognition: [
        "International fashion weeks",
        "Global textile exhibitions",
        "Luxury brand partnerships"
      ],
      preservationEfforts: [
        "Traditional artisan clusters",
        "Government training programs",
        "Natural dye preservation",
        "Educational workshops"
      ]
    },
    relatedFestivals: [
      {
        name: "Srikalahasti Festival",
        significance: "Annual celebration of Kalamkari art and artists",
        region: "Srikalahasti, Andhra Pradesh"
      },
      {
        name: "Machilipatnam Festival",
        significance: "Showcase of block-printed Kalamkari traditions",
        region: "Machilipatnam, Andhra Pradesh"
      }
    ],
    museums: [
      {
        name: "Salar Jung Museum",
        location: "Hyderabad",
        notableCollection: "Historical Kalamkari textiles and artifacts"
      },
      {
        name: "Crafts Museum",
        location: "New Delhi",
        notableCollection: "Traditional Kalamkari from various regions"
      }
    ],
    gallery: {
      historicalWorks: [
        "17th century temple hangings",
        "Royal textile commissions",
        "Traditional religious scrolls"
      ],
      contemporaryWorks: [
        "Modern textile applications",
        "Fashion collaborations",
        "Contemporary art pieces"
      ],
      processImages: [
        "Natural dye preparation",
        "Block carving process",
        "Traditional painting techniques"
      ]
    },
    learningResources: {
      books: [
        "Kalamkari Art by P. Anuradha",
        "Traditional Textiles of India by Jaya Jaitly",
        "Natural Dyes and Kalamkari by R. K. Mishra"
      ],
      documentaries: [
        "Colors of Andhra - Doordarshan",
        "Kalamkari: Living Heritage - National Geographic"
      ],
      workshops: [
        "Srikalahasti Kalamkari Training Center",
        "National Institute of Fashion Technology",
        "Traditional artisan workshops"
      ]
    }
  }
];

export const artFormCategories = {
  painting: ["Madhubani", "Warli", "Pattachitra", "Tanjore", "Kalamkari"],
  sculpture: ["Bronze", "Stone", "Wood", "Terracotta"],
  textile: ["Madhubani Textiles", "Kalamkari", "Bandhani", "Patola"],
  folk: ["Warli", "Madhubani", "Phad", "Pichwai"],
  classical: ["Tanjore", "Pattachitra", "Mughal Miniature", "Rajput"],
  contemporary: ["Modern Indian Art", "Abstract", "Installation"],
  tribal: ["Warli", "Gond", "Bhil", "Saura"]
};

export const getArtFormById = (id: string): ArtForm | undefined => {
  return indianArtForms.find(art => art.id === id);
};

export const getArtFormsByRegion = (region: string): ArtForm[] => {
  return indianArtForms.filter(art => 
    art.origin.region.toLowerCase().includes(region.toLowerCase())
  );
};

export const getArtFormsByPeriod = (period: string): ArtForm[] => {
  return indianArtForms.filter(art => 
    art.origin.period.toLowerCase().includes(period.toLowerCase())
  );
};
