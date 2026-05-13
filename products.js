/* ================= PRODUCT DATABASE (REFINED SYSTEM) ================= */

const PRODUCTS = {

  /* ================= RIFLES ================= */
 "nx200-athena": {
  title: "Precihole NX200 Athena Ultimate",
  category: "rifles",
  badge: "Best Seller",

  description: "Nitro piston powered break barrel air rifle engineered for superior precision and long range target shooting.",

  highlights: [
    "✔ Nitro piston technology",
    "✔ Rifled steel barrel",
    "✔ High accuracy shooting",
    "✔ Durable synthetic stock"
  ],

  specifications: {
      Type: "Air Rifle",
    mechanism: "Break Barrel",
    powerPlant: "Nitro Piston",
    caliber: "0.177 (4.5mm)",
    velocity: "860 fps",
    power: "20 Joules / 15 ft-lb",
    barrelLength: "450mm",
    totalLength: "1095mm",
    weight: "3.15 kg",
    barrelMaterial: "Steel",
    barrelType: "Rifled",
    safety: "Automatic",
    frontSight: "Post",
    rearSight: "Adjustable",
    triggerType: "Two Stage",
    stockMaterial: "Synthetic",
    mountingRail: '11mm Dovetail',
    scopable: "Yes",
    usage: "Plinking / Open Field Target"
  },

  rating: 4.8,

 variants: {
    default: {
      standard: {
        price: "₹16,999",

        image: "assets/nx-200front.webp",

        images: [
          "assets/athena-gpt.png",
          "assets/athena-200.png",
          "assets/athena-nx200.png",
          
        ]
      }
    }
  }
},



"vx100-spartan-mk2": {
  title: "Precihole VX100 Spartan MK II",
  category: "rifles",
  badge: "Popular",

  description: "Lightweight entry-level air rifle designed for beginners and recreational shooters.",

  highlights: [
    "✔ Lightweight platform",
    "✔ Beginner friendly",
    "✔ Durable synthetic stock",
    "✔ Reliable shooting performance"
  ],

  specifications: {
    type: "Air Rifle",
    mechanism: "Break Barrel",
    powerPlant: "Spring Piston",
    caliber: "0.177 (4.5mm)",
    velocity: "750 fps",
    power: "15 Joules",
    barrelType: "Rifled",
    triggerType: "Two Stage",
    stockMaterial: "Polymer",
    usage: "Training & Practice"
  },

  rating: 4.5,

  variants: {
    default: {
      standard: {
        price: "₹8,499",

        image: "assets/vx-100-front.png",

        images: [
          "assets/vx-100-1.png",
          "assets/vx-100-specs.png",
          "assets/vx-100-3.png"
        ]
      }
    }
  }
},



"px120-minotaur-x3": {
  title: "Precihole PX120 Minotaur X3",
  category: "rifles",
  badge: "Premium",

  description: "Advanced PCP air rifle featuring regulated precision shooting and integrated suppressor system.",

  highlights: [
    "✔ PCP precision platform",
    "✔ Integrated suppressor",
    "✔ Match grade barrel",
    "✔ High shot consistency"
  ],

  specifications: {
    type: "PCP Air Rifle",
    mechanism: "PCP",
    caliber: "0.177 (4.5mm)",
    velocity: "1100 fps",
    airCapacity: "280cc",
    fillPressure: "250 BAR",
    regulator: "Yes",
    suppressor: "Integrated",
    triggerType: "Adjustable Match Trigger",
    stockMaterial: "Synthetic",
    usage: "Professional Shooting"
  },

  rating: 4.9,

  variants: {
    default: {
      standard: {
        price: "₹36,999",

        image: "assets/px-120-front.png",

        images: [
          "assets/px-120-2.png",
          "assets/px-120-1.png",
          "assets/px-120-specs.png"
        ]
      }
    }
  }
},

"px100-match-pro": {
  title: "Precihole PX100 Match Pro",
  category: "rifles",
  badge: "Competition",

  description: "Competition grade PCP air rifle designed for elite precision and benchrest shooting.",

  highlights: [
    "✔ Competition ready platform",
    "✔ Match trigger system",
    "✔ Adjustable stock",
    "✔ Precision regulated PCP"
  ],

  specifications: {
    type: "PCP Air Rifle",
    mechanism: "PCP",
    caliber: "0.177 (4.5mm)",
    velocity: "1050 fps",
    airCapacity: "250cc",
    fillPressure: "250 BAR",
    regulator: "Yes",
    barrelType: "Match Grade Rifled",
    triggerType: "Adjustable Match Trigger",
    stockMaterial: "Aluminium",
    usage: "Competition & Benchrest"
  },

  rating: 4.9,

  variants: {
    default: {
      standard: {
        price: "₹45,500",

        image: "assets/match-pro-front.png",

        images: [
          "assets/match-1.png",
          "assets/match-specs.png",
          "assets/match-angels.png"
          
        ]
      }
    }
  }
},

  /* ================= PISTOLS ================= */

  "pp100-vulcan": {
  title: "Precihole PP100 Vulcan",
  category: "pistols",
  badge: "Premium PCP",

  description: "High precision PCP air pistol engineered for target shooting and competitive accuracy.",

  highlights: [
    "✔ PCP powered system",
    "✔ Match grade accuracy",
    "✔ Ergonomic grip design",
    "✔ Precision shooting platform"
  ],

  specifications: {
    caliber: "0.177 (4.5mm)",
    mechanism: "PCP",
    velocity: "520 fps",
    airCapacity: "50cc",
    fillPressure: "200 BAR",
    triggerType: "Adjustable Match Trigger",
    barrelType: "Rifled Steel Barrel",
    safety: "Manual",
    stockMaterial: "Polymer Grip",
    usage: "Target Shooting"
  },

  rating: 4.9,

  variants: {
    default: {
      standard: {
        price: "₹24,999",

        image: "assets/products/pp100-vulcan/main.webp",

        images: [
          "assets/products/pp100-vulcan/main.webp",
          "assets/products/pp100-vulcan/side.webp",
          "assets/products/pp100-vulcan/detail.webp",
          "assets/products/pp100-vulcan/usage.webp"
        ]
      }
    }
  }
},

"pp800-dragon": {
  title: "Precihole PP800 Dragon",
  category: "pistols",
  badge: "Tactical",

  description: "Compact PCP air pistol featuring tactical styling and high consistency shot performance.",

  highlights: [
    "✔ Compact PCP design",
    "✔ Tactical ergonomics",
    "✔ Lightweight platform",
    "✔ High shot consistency"
  ],

  specifications: {
    caliber: "0.177 (4.5mm)",
    mechanism: "PCP",
    velocity: "600 fps",
    airCapacity: "40cc",
    fillPressure: "200 BAR",
    triggerType: "Two Stage Adjustable",
    barrelType: "Precision Rifled",
    safety: "Manual",
    stockMaterial: "Polymer",
    usage: "Plinking & Precision"
  },

  rating: 4.7,

  variants: {
    default: {
      standard: {
        price: "₹21,500",

        image: "assets/products/pp800-dragon/main.webp",

        images: [
          "assets/products/pp800-dragon/main.webp",
          "assets/products/pp800-dragon/side.webp",
          "assets/products/pp800-dragon/detail.webp",
          "assets/products/pp800-dragon/usage.webp"
        ]
      }
    }
  }
},

"pp750-shadow": {
  title: "Precihole PP750 Shadow",
  category: "pistols",
  badge: "Best Seller",

  description: "Modern PCP air pistol with sleek tactical body and stable shooting performance.",

  highlights: [
    "✔ PCP precision system",
    "✔ Lightweight tactical frame",
    "✔ Stable velocity output",
    "✔ Smooth trigger response"
  ],

  specifications: {
    caliber: "0.177 (4.5mm)",
    mechanism: "PCP",
    velocity: "580 fps",
    airCapacity: "45cc",
    fillPressure: "220 BAR",
    triggerType: "Adjustable",
    barrelType: "Rifled",
    safety: "Manual",
    stockMaterial: "Polymer",
    usage: "Target & Recreation"
  },

  rating: 4.8,

  variants: {
    default: {
      standard: {
        price: "₹22,999",

        image: "assets/products/pp750-shadow/main.webp",

        images: [
          "assets/products/pp750-shadow/main.webp",
          "assets/products/pp750-shadow/side.webp",
          "assets/products/pp750-shadow/detail.webp",
          "assets/products/pp750-shadow/usage.webp"
        ]
      }
    }
  }
},

"pp600-hawk": {
  title: "Precihole PP600 Hawk",
  category: "pistols",
  badge: "Sport",

  description: "Sport-oriented air pistol designed for recreational shooting and precision control.",

  highlights: [
    "✔ Sport shooting platform",
    "✔ Compact lightweight design",
    "✔ Precision barrel",
    "✔ Reliable PCP mechanism"
  ],

  specifications: {
    caliber: "0.177 (4.5mm)",
    mechanism: "PCP",
    velocity: "500 fps",
    airCapacity: "35cc",
    fillPressure: "200 BAR",
    triggerType: "Two Stage",
    barrelType: "Steel Rifled",
    safety: "Manual",
    stockMaterial: "Polymer",
    usage: "Recreational Shooting"
  },

  rating: 4.5,

  variants: {
    default: {
      standard: {
        price: "₹18,999",

        image: "assets/products/pp600-hawk/main.webp",

        images: [
          "assets/products/pp600-hawk/main.webp",
          "assets/products/pp600-hawk/side.webp",
          "assets/products/pp600-hawk/detail.webp",
          "assets/products/pp600-hawk/usage.webp"
        ]
      }
    }
  }
},

"pp900-phantom": {
  title: "Precihole PP900 Phantom",
  category: "pistols",
  badge: "Competition",

  description: "Competition-grade PCP pistol built for elite precision and advanced target shooting.",

  highlights: [
    "✔ Match precision engineering",
    "✔ Adjustable competition trigger",
    "✔ High consistency shots",
    "✔ Advanced PCP platform"
  ],

  specifications: {
    caliber: "0.177 (4.5mm)",
    mechanism: "PCP",
    velocity: "650 fps",
    airCapacity: "55cc",
    fillPressure: "250 BAR",
    triggerType: "Match Adjustable",
    barrelType: "Competition Rifled",
    safety: "Manual",
    stockMaterial: "Aluminium & Polymer",
    usage: "Competition Shooting"
  },

  rating: 5.0,

  variants: {
    default: {
      standard: {
        price: "₹29,999",

        image: "assets/products/pp900-phantom/main.webp",

        images: [
          "assets/products/pp900-phantom/main.webp",
          "assets/products/pp900-phantom/side.webp",
          "assets/products/pp900-phantom/detail.webp",
          "assets/products/pp900-phantom/usage.webp"
        ]
      }
    }
  }
},



 /* ================= PELLETS ================= */

"pellets-sharpkiller-177": {
  title: "Precihole Sharpkiller .177 Pellets",
  category: "pellets",
  badge: "Best Seller",

  description: "High precision domed pellets designed for accuracy, consistency and superior flight stability.",

  highlights: [
    "✔ Match grade precision",
    "✔ Consistent weight distribution",
    "✔ Excellent aerodynamic stability",
    "✔ Ideal for target shooting"
  ],

  specifications: {
    caliber: ".177 (4.5mm)",
    pelletType: "Domed",
    material: "Lead",
    weight: "8.2 Grain",
    quantity: "500 Pellets",
    compatibility: "Air Rifles & PCP",
    usage: "Target Shooting",
    finish: "Precision Molded"
  },

  rating: 4.9,

  variants: {
    default: {
      standard: {
        price: "₹450",

        image: "assets/products/sharpkiller-177/main.webp",

        images: [
          "assets/products/sharpkiller-177/main.webp",
          "assets/products/sharpkiller-177/box.webp",
          "assets/products/sharpkiller-177/detail.webp",
          "assets/products/sharpkiller-177/lifestyle.webp"
        ]
      }
    }
  }
},

"pellets-mastershot-22": {
  title: "Precihole Mastershot .22 Pellets",
  category: "pellets",
  badge: "Premium",

  description: "Heavy impact precision pellets engineered for superior penetration and stable long-range performance.",

  highlights: [
    "✔ Heavy impact design",
    "✔ Stable trajectory",
    "✔ High precision molding",
    "✔ Long range optimized"
  ],

  specifications: {
    caliber: ".22 (5.5mm)",
    pelletType: "Domed",
    material: "Lead",
    weight: "15.8 Grain",
    quantity: "300 Pellets",
    compatibility: "PCP & Spring Rifles",
    usage: "Precision Shooting",
    finish: "Premium Polished"
  },

  rating: 4.8,

  variants: {
    default: {
      standard: {
        price: "₹520",

        image: "assets/products/mastershot-22/main.webp",

        images: [
          "assets/products/mastershot-22/main.webp",
          "assets/products/mastershot-22/box.webp",
          "assets/products/mastershot-22/detail.webp",
          "assets/products/mastershot-22/lifestyle.webp"
        ]
      }
    }
  }
},

"pellets-hunterpro-177": {
  title: "Precihole Hunter Pro .177 Pellets",
  category: "pellets",
  badge: "Popular",

  description: "Precision hunting pellets delivering balanced expansion and deep impact performance.",

  highlights: [
    "✔ Hunting optimized",
    "✔ Controlled expansion",
    "✔ Consistent accuracy",
    "✔ High impact delivery"
  ],

  specifications: {
    caliber: ".177 (4.5mm)",
    pelletType: "Pointed",
    material: "Lead",
    weight: "9 Grain",
    quantity: "400 Pellets",
    compatibility: "Air Rifles",
    usage: "Hunting & Plinking",
    finish: "Precision Molded"
  },

  rating: 4.7,

  variants: {
    default: {
      standard: {
        price: "₹430",

        image: "assets/products/hunterpro-177/main.webp",

        images: [
          "assets/products/hunterpro-177/main.webp",
          "assets/products/hunterpro-177/box.webp",
          "assets/products/hunterpro-177/detail.webp",
          "assets/products/hunterpro-177/lifestyle.webp"
        ]
      }
    }
  }
},

"pellets-stormmatch-22": {
  title: "Precihole Storm Match .22 Pellets",
  category: "pellets",
  badge: "Competition",

  description: "Competition-grade pellets crafted for elite precision and exceptional grouping consistency.",

  highlights: [
    "✔ Match competition quality",
    "✔ Superior grouping",
    "✔ High consistency",
    "✔ Optimized ballistic profile"
  ],

  specifications: {
    caliber: ".22 (5.5mm)",
    pelletType: "Wadcutter",
    material: "Lead",
    weight: "14.5 Grain",
    quantity: "250 Pellets",
    compatibility: "PCP Air Rifles",
    usage: "Competition Shooting",
    finish: "Competition Grade"
  },

  rating: 5.0,

  variants: {
    default: {
      standard: {
        price: "₹650",

        image: "assets/products/stormmatch-22/main.webp",

        images: [
          "assets/products/stormmatch-22/main.webp",
          "assets/products/stormmatch-22/box.webp",
          "assets/products/stormmatch-22/detail.webp",
          "assets/products/stormmatch-22/lifestyle.webp"
        ]
      }
    }
  }
},

"pellets-airstrike-177": {
  title: "Precihole Airstrike .177 Pellets",
  category: "pellets",
  badge: "Economy",

  description: "Reliable general-purpose pellets designed for everyday practice and recreational shooting.",

  highlights: [
    "✔ Reliable performance",
    "✔ Consistent quality",
    "✔ Smooth chambering",
    "✔ Recreational shooting ready"
  ],

  specifications: {
    caliber: ".177 (4.5mm)",
    pelletType: "Flat Head",
    material: "Lead",
    weight: "7.8 Grain",
    quantity: "500 Pellets",
    compatibility: "All Air Rifles",
    usage: "Practice & Recreation",
    finish: "Smooth Finish"
  },

  rating: 4.5,

  variants: {
    default: {
      standard: {
        price: "₹350",

        image: "assets/products/airstrike-177/main.webp",

        images: [
          "assets/products/airstrike-177/main.webp",
          "assets/products/airstrike-177/box.webp",
          "assets/products/airstrike-177/detail.webp",
          "assets/products/airstrike-177/lifestyle.webp"
        ]
      }
    }
  }
},


  /* ================= ACCESSORIES ================= */

"scope-3x9x40": {
  title: "Precihole 3-9x40 AO Rifle Scope",
  category: "accessories",
  badge: "Best Seller",

  description: "High precision adjustable optic scope engineered for accurate target acquisition and long-range shooting.",

  highlights: [
    "✔ Adjustable objective lens",
    "✔ Crystal clear optics",
    "✔ Shock resistant body",
    "✔ Precision targeting"
  ],

  specifications: {
    magnification: "3-9x",
    objectiveLens: "40mm",
    tubeDiameter: "1 Inch",
    reticleType: "Mil-Dot",
    bodyMaterial: "Aircraft Grade Aluminium",
    mountingType: "11mm Dovetail",
    waterproof: "Yes",
    fogProof: "Yes",
    shockProof: "Yes",
    usage: "Target & Hunting"
  },

  rating: 4.9,

  variants: {
    default: {
      standard: {
        price: "₹4,999",

        image: "assets/products/scope-3x9x40/main.webp",

        images: [
          "assets/products/scope-3x9x40/main.webp",
          "assets/products/scope-3x9x40/side.webp",
          "assets/products/scope-3x9x40/detail.webp",
          "assets/products/scope-3x9x40/lifestyle.webp"
        ]
      }
    }
  }
},

"bipod-tactical-pro": {
  title: "Precihole Tactical Bipod Pro",
  category: "accessories",
  badge: "Professional",

  description: "Heavy-duty adjustable bipod designed for enhanced shooting stability and precision support.",

  highlights: [
    "✔ Adjustable height",
    "✔ Lightweight aluminium body",
    "✔ Anti-slip feet",
    "✔ Quick mount system"
  ],

  specifications: {
    material: "Aluminium Alloy",
    mountingType: "Picatinny Rail",
    adjustableHeight: "6-9 Inches",
    legType: "Foldable",
    weight: "380g",
    finish: "Matte Black",
    compatibility: "Air Rifles & PCP",
    usage: "Precision Shooting"
  },

  rating: 4.8,

  variants: {
    default: {
      standard: {
        price: "₹2,499",

        image: "assets/products/bipod-pro/main.webp",

        images: [
          "assets/products/bipod-pro/main.webp",
          "assets/products/bipod-pro/side.webp",
          "assets/products/bipod-pro/detail.webp",
          "assets/products/bipod-pro/lifestyle.webp"
        ]
      }
    }
  }
},

"silencer-maxx": {
  title: "Precihole Silencer Maxx",
  category: "accessories",
  badge: "Popular",

  description: "Precision-engineered suppressor accessory built to reduce shooting noise and vibration.",

  highlights: [
    "✔ Noise reduction system",
    "✔ Lightweight build",
    "✔ Durable metal construction",
    "✔ Precision threaded fit"
  ],

  specifications: {
    material: "CNC Aluminium",
    finish: "Matte Black",
    compatibility: ".177 & .22",
    mountingType: "Threaded",
    weight: "220g",
    usage: "Noise Suppression",
    construction: "Multi-Chamber"
  },

  rating: 4.7,

  variants: {
    default: {
      standard: {
        price: "₹3,200",

        image: "assets/products/silencer-maxx/main.webp",

        images: [
          "assets/products/silencer-maxx/main.webp",
          "assets/products/silencer-maxx/side.webp",
          "assets/products/silencer-maxx/detail.webp",
          "assets/products/silencer-maxx/lifestyle.webp"
        ]
      }
    }
  }
},

"target-kit-premium": {
  title: "Precihole Premium Target Kit",
  category: "accessories",
  badge: "Training",

  description: "Complete target shooting kit designed for practice sessions and competition preparation.",

  highlights: [
    "✔ Durable target sheets",
    "✔ Multi-distance compatible",
    "✔ Professional training setup",
    "✔ Easy installation"
  ],

  specifications: {
    material: "Heavy Duty Fiber Board",
    targetType: "Competition & Practice",
    quantity: "25 Sheets",
    compatibility: "Air Rifles & Pistols",
    portability: "Yes",
    usage: "Target Practice",
    finish: "Weather Resistant"
  },

  rating: 4.6,

  variants: {
    default: {
      standard: {
        price: "₹899",

        image: "assets/products/target-kit/main.webp",

        images: [
          "assets/products/target-kit/main.webp",
          "assets/products/target-kit/side.webp",
          "assets/products/target-kit/detail.webp",
          "assets/products/target-kit/lifestyle.webp"
        ]
      }
    }
  }
},

"rifle-case-elite": {
  title: "Precihole Rifle Case Elite",
  category: "accessories",
  badge: "Premium",

  description: "Premium padded rifle carrying case designed for safe transport and secure storage.",

  highlights: [
    "✔ Thick padded protection",
    "✔ Waterproof exterior",
    "✔ Heavy-duty zipper",
    "✔ Easy carry design"
  ],

  specifications: {
    material: "600D Polyester",
    innerPadding: "High Density Foam",
    waterproof: "Yes",
    closureType: "Heavy Duty Zipper",
    carryType: "Handle & Shoulder Strap",
    compatibility: "Air Rifles & PCP",
    usage: "Transport & Storage"
  },

  rating: 4.9,

  variants: {
    default: {
      standard: {
        price: "₹2,999",

        image: "assets/products/rifle-case/main.webp",

        images: [
          "assets/products/rifle-case/main.webp",
          "assets/products/rifle-case/side.webp",
          "assets/products/rifle-case/detail.webp",
          "assets/products/rifle-case/lifestyle.webp"
        ]
      }
    }
  }
}


};
