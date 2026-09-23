import { Product } from '../types';
import heroShoeImg from '../assets/images/hero_nexora_elite_1790202286339.jpg';
import outsoleTreadImg from '../assets/images/nexora_outsole_tread_1790202308060.jpg';
import explodedImg from '../assets/images/nexora_exploded_layers_1790202319530.jpg';
import stealthShoeImg from '../assets/images/nexora_stealth_black_1790202335412.jpg';
import crimsonShoeImg from '../assets/images/nexora_crimson_speed_1790202349522.jpg';

export const ASSETS = {
  heroShoe: heroShoeImg,
  outsoleTread: outsoleTreadImg,
  explodedLayers: explodedImg,
  stealthShoe: stealthShoeImg,
  crimsonShoe: crimsonShoeImg,
};

export const PRODUCTS: Product[] = [
  {
    id: 'nexora-elite-1',
    name: 'NEXORA ELITE 1.0',
    subtitle: 'Signature Performance Basketball Shoe',
    price: 199.99,
    originalPrice: 220.00,
    category: 'Performance Basketball',
    gender: 'Unisex',
    sku: 'NXE1.0-WBR',
    inStock: true,
    stockCount: 18,
    rating: 4.9,
    reviewCount: 342,
    description: 'The Nexora Elite 1.0 is designed for athletes who demand excellence. Precision-crafted for agility, stability, and unmatched style.',
    longDescription: 'Engineered in our advanced Biomechanics Facility in collaboration with premier basketball athletes, the Nexora Elite 1.0 combines our breakthrough NX Foam™ dual-density cushioning with the hyper-responsive Nexora Grip™ multi-directional rubber compound. The anatomical dynamic fit wrap anchors your foot during high-velocity directional transitions, giving you effortless court responsiveness.',
    primaryImage: heroShoeImg,
    gallery: [
      heroShoeImg,
      stealthShoeImg,
      outsoleTreadImg,
      explodedImg,
    ],
    colorways: [
      {
        id: 'wbr',
        name: 'White / Black / Crimson Red',
        hex: '#FFFFFF',
        image: heroShoeImg,
        sku: 'NXE1.0-WBR',
      },
      {
        id: 'stealth',
        name: 'Stealth Triple Black',
        hex: '#171717',
        image: stealthShoeImg,
        sku: 'NXE1.0-BLK',
      },
      {
        id: 'crimson',
        name: 'Volt Crimson / Chrome',
        hex: '#FF1E27',
        image: crimsonShoeImg,
        sku: 'NXE1.0-VCR',
      }
    ],
    availableSizes: [7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 13.0],
    specs: {
      weight: '13.4 oz / 380 g',
      drop: '8 mm',
      outsole: 'Nexora Grip™ Outsole',
      cushioning: 'NX Foam™ Midsole',
    },
    materials: {
      upper: 'Engineered Mesh / TPU',
      lining: 'Breathable Textile',
      midsole: 'NX Foam™ (EVA Blend)',
      outsole: 'High-Performance Rubber',
      insole: 'Ortholite® Hybrid',
    },
    features: [
      {
        title: 'NX FOAM™ MIDSOLE',
        description: 'Superior energy return and impact protection during high-impact landings.',
      },
      {
        title: 'NEXORA GRIP™ OUTSOLE',
        description: 'Multi-directional traction micro-tread engineered for razor-sharp court control.',
      },
      {
        title: 'DYNAMIC FIT SYSTEM',
        description: 'Locked-in midfoot comfort with adaptive anatomical support bands.',
      },
      {
        title: 'BREATHABLE ENGINEERED MESH',
        description: 'Lightweight, durable, and zoned ventilation for peak cooling performance.',
      }
    ],
    isNew: true,
    isFeatured: true,
    collection: 'Signature Line',
  },
  {
    id: 'nexora-stealth-pro',
    name: 'NEXORA STEALTH PRO',
    subtitle: 'High-Performance Lockdown Edition',
    price: 219.99,
    category: 'Performance Basketball',
    gender: 'Men',
    sku: 'NX-STH-02',
    inStock: true,
    stockCount: 12,
    rating: 4.8,
    reviewCount: 189,
    description: 'Blackout aesthetics with reinforced carbon-infused side wings for maximum lateral stability on the hardwood.',
    longDescription: 'The Stealth Pro strips down visual excess and elevates raw court dominance. Equipped with full-length carbon torsion plates and dual-density heel containment.',
    primaryImage: stealthShoeImg,
    gallery: [stealthShoeImg, heroShoeImg, outsoleTreadImg],
    colorways: [
      {
        id: 'stealth-blk',
        name: 'Matte Carbon Black',
        hex: '#111111',
        image: stealthShoeImg,
        sku: 'NX-STH-02',
      },
      {
        id: 'stealth-red',
        name: 'Crimson Accent',
        hex: '#FF1E27',
        image: crimsonShoeImg,
        sku: 'NX-STH-02R',
      }
    ],
    availableSizes: [8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 12.0],
    specs: {
      weight: '13.9 oz / 395 g',
      drop: '9 mm',
      outsole: 'Nexora Grip™ Outsole',
      cushioning: 'NX Foam™ + Carbon Shank',
    },
    materials: {
      upper: 'Carbon Weave / Ballistic Mesh',
      lining: 'Microfiber Hydrophobic',
      midsole: 'Dual-Density NX Foam™',
      outsole: 'Sticky Court Rubber',
      insole: 'Ortholite® Ultra',
    },
    features: [
      {
        title: 'CARBON TORSION SHANK',
        description: 'Eliminates midfoot twisting during aggressive crossover cuts.',
      },
      {
        title: 'HERRINGBONE TRACTION',
        description: 'Deep siped grooves clear dust quickly for instant stopping grip.',
      }
    ],
    isNew: true,
    isFeatured: true,
    collection: 'Limited Edition',
  },
  {
    id: 'nexora-crimson-speed',
    name: 'NEXORA VELOCITY CR-7',
    subtitle: 'Ultra-Light Speed & Explosiveness',
    price: 189.99,
    originalPrice: 205.00,
    category: 'Speed Running',
    gender: 'Unisex',
    sku: 'NX-VEL-CR7',
    inStock: true,
    stockCount: 24,
    rating: 4.9,
    reviewCount: 215,
    description: 'Tuned specifically for guards and sprinters requiring featherweight momentum and instant explosive rebound.',
    longDescription: 'Weighing under 11 ounces, the Velocity CR-7 features laser-cut aerodynamic cooling channels and our highest-energy return foam compound.',
    primaryImage: crimsonShoeImg,
    gallery: [crimsonShoeImg, heroShoeImg, outsoleTreadImg],
    colorways: [
      {
        id: 'crimson-volt',
        name: 'Crimson Red / Chrome',
        hex: '#FF1E27',
        image: crimsonShoeImg,
        sku: 'NX-VEL-CR7',
      },
      {
        id: 'glacier-white',
        name: 'Glacier White / Black',
        hex: '#F4F4F5',
        image: heroShoeImg,
        sku: 'NX-VEL-GW1',
      }
    ],
    availableSizes: [7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0],
    specs: {
      weight: '10.8 oz / 305 g',
      drop: '6 mm',
      outsole: 'Nexora SpeedTrack™',
      cushioning: 'NX Foam™ Superlight',
    },
    materials: {
      upper: 'Monofilament Speed Mesh',
      lining: 'Seamless Anti-Friction Knit',
      midsole: 'Supercritical NX Foam™',
      outsole: 'Feather-Grip Blown Rubber',
      insole: 'Molded Ergonomic Foam',
    },
    features: [
      {
        title: 'SUPERCRITICAL FOAM',
        description: '85% energy return rating in laboratory mechanical tests.',
      },
      {
        title: 'AERODYNAMIC PROFILE',
        description: 'Reduces drag while maximizing forefoot transition tempo.',
      }
    ],
    isFeatured: true,
    collection: 'Performance',
  },
  {
    id: 'nexora-apex-court',
    name: 'NEXORA APEX ZERO',
    subtitle: 'All-Terrain Cross-Court Trainer',
    price: 174.99,
    category: 'Elite Training',
    gender: 'Women',
    sku: 'NX-APX-00',
    inStock: true,
    stockCount: 15,
    rating: 4.7,
    reviewCount: 98,
    description: 'Built for indoor hardwoods and outdoor asphalt courts with fortified toe guard and abrasion-resistant compound.',
    longDescription: 'The Apex Zero is the ultimate versatile training weapon. Whether running suicide drills, weight room lifts, or 5v5 pickup, the reinforced chassis stays resilient.',
    primaryImage: heroShoeImg,
    gallery: [heroShoeImg, stealthShoeImg],
    colorways: [
      {
        id: 'arctic-white',
        name: 'Pure White / Ice Blue',
        hex: '#E0F2FE',
        image: heroShoeImg,
        sku: 'NX-APX-00',
      },
      {
        id: 'stealth-dark',
        name: 'Onyx Black',
        hex: '#18181B',
        image: stealthShoeImg,
        sku: 'NX-APX-01',
      }
    ],
    availableSizes: [6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0],
    specs: {
      weight: '12.6 oz / 357 g',
      drop: '7 mm',
      outsole: 'Dual-Zone Nexora Durarubber',
      cushioning: 'NX Foam™ Responsive Core',
    },
    materials: {
      upper: 'Reinforced Ripstop / TPU Cage',
      lining: 'Padded Ankle Collar Knit',
      midsole: 'NX Foam™ Hybrid',
      outsole: 'Non-Marking Court Rubber',
      insole: 'Arch-Support Ortholite®',
    },
    features: [
      {
        title: 'OUTDOOR DURABILITY',
        description: 'Formulated rubber compound withstands extreme abrasive outdoor asphalt.',
      },
      {
        title: 'ANKLE LOCK COLLAR',
        description: 'Anatomical memory foam pads cradle the Achilles tendon.',
      }
    ],
    collection: 'Performance',
  }
];
