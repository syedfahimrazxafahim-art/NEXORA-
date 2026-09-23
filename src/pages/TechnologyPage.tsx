import React, { useState } from 'react';
import { Layers, Activity, ShieldCheck, Zap, Cpu, Gauge, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/products';

export const TechnologyPage: React.FC = () => {
  const [activeTech, setActiveTech] = useState<'foam' | 'grip' | 'shank' | 'mesh'>('foam');

  const techDetails = {
    foam: {
      title: 'NX FOAM™ SUPERCRITICAL MIDSOLE',
      badge: 'PROPRIETARY CUSHIONING CHEMISTRY',
      image: ASSETS.explodedLayers,
      metrics: [
        { label: 'Energy Return Rating', value: '85.4%', note: 'vs. 58% standard EVA' },
        { label: 'Weight Reduction', value: '-28%', note: 'Nitrogen-infused cellular matrix' },
        { label: 'Compression Fatigue', value: '< 2.1%', note: 'After 250,000 impact cycles' },
      ],
      description:
        'Created through high-pressure supercritical nitrogen infusion, NX Foam™ forms micro-cellular gas chambers that instantaneously store kinetic energy on compression and violently spring back on toe-off.',
      breakdown: [
        'Supercritical Nitrogen Infusion at 300 bar',
        'Dual-density carrier perimeter prevents heel collapse',
        'Anatomical forefoot flex sipes match natural metatarsal bending',
      ],
    },
    grip: {
      title: 'NEXORA GRIP™ TREAD PATTERN',
      badge: 'HERRINGBONE DIRECTIONAL FRICTION',
      image: ASSETS.outsoleTread,
      metrics: [
        { label: 'Kinetic Friction Coeff.', value: '1.42 µ', note: 'Hardwood dry court' },
        { label: 'Dust Repulsion Rate', value: '92%', note: 'Self-clearing radial grooves' },
        { label: 'Wear Life Expectancy', value: '350+ hrs', note: 'High abrasive asphalt tested' },
      ],
      description:
        'A micro-textured translucent rubber compound formulated to adhere to high-gloss hardwood floors and dust-covered outdoor courts alike, eliminating the dead-stop slip.',
      breakdown: [
        'Multi-angle siping pattern covers 360-degree lateral cut vectors',
        'Decoupled heel crash pad for smooth transition mechanics',
        'Non-marking certified rubber for championship venues',
      ],
    },
    shank: {
      title: 'TORAY T700 CARBON TORSION SHANK',
      badge: 'AEROSPACE RIGIDITY CHASSIS',
      image: ASSETS.heroShoe,
      metrics: [
        { label: 'Torsional Deflection', value: '< 1.2°', note: 'Zero midfoot twist' },
        { label: 'Plate Weight', value: '18 grams', note: 'Ultra-thin 1.2mm composite' },
        { label: 'Propulsive Springback', value: '+12%', note: 'Measurable vertical lift' },
      ],
      description:
        'Sandwiched between the NX Foam midsole and the icy rubber outsole, the Carbon Shank acts as a rigid bridge, channeling force from heel strike through to explosive toe liftoff.',
      breakdown: [
        '3K weave carbon fiber with aerospace-grade epoxy resin',
        'Molded arch contour cradles the plantar fascia',
        'Prevents painful midfoot strain during aggressive plant-and-pivot plays',
      ],
    },
    mesh: {
      title: 'DYNAMIC FIT ENGINEERED MESH',
      badge: 'ADAPTIVE BIOMETRIC WRAP',
      image: ASSETS.stealthShoe,
      metrics: [
        { label: 'Tensile Strength', value: '840 N', note: 'TPU monofilament threads' },
        { label: 'Air Permeability', value: '185 CFM', note: 'Active thermoregulation' },
        { label: 'Lockdown Secureness', value: '100%', note: 'Zero interior foot slide' },
      ],
      description:
        'Precision-loomed Jacquard weave varies density across the foot: hyper-breathable at the vamp, densely reinforced at the lateral high-stress containment zones.',
      breakdown: [
        'Thermal-welded TPU film overlays eliminate irritating seams',
        'Padded internal heel pods lock Achilles into the heel counter',
        'Hydrophobic inner lining wicks perspiration away instantaneously',
      ],
    },
  };

  const current = techDetails[activeTech];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="border-b border-[#232532] pb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF1E27]">
            BIOMECHANICS & MATERIALS RESEARCH
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mt-1">
            NEXORA LAB TECHNOLOGY
          </h1>
          <p className="text-neutral-400 text-sm max-w-2xl mt-2">
            Every millimeter of a Nexora sneaker is backed by empirical laboratory telemetry, mechanical stress simulations, and elite court testing.
          </p>

          {/* Tech Switcher Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            <button
              onClick={() => setActiveTech('foam')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                activeTech === 'foam'
                  ? 'bg-[#181925] border-[#FF1E27] shadow-lg'
                  : 'bg-[#12131A] border-[#222430] hover:border-neutral-500'
              }`}
            >
              <Layers className="w-5 h-5 text-[#FF1E27] mb-2" />
              <div className="font-display font-bold text-xs uppercase text-white">NX Foam™</div>
              <div className="text-[10px] text-neutral-400 font-mono">Supercritical Cushion</div>
            </button>

            <button
              onClick={() => setActiveTech('grip')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                activeTech === 'grip'
                  ? 'bg-[#181925] border-[#FF1E27] shadow-lg'
                  : 'bg-[#12131A] border-[#222430] hover:border-neutral-500'
              }`}
            >
              <Activity className="w-5 h-5 text-[#FF1E27] mb-2" />
              <div className="font-display font-bold text-xs uppercase text-white">Nexora Grip™</div>
              <div className="text-[10px] text-neutral-400 font-mono">Multi-Vector Outsole</div>
            </button>

            <button
              onClick={() => setActiveTech('shank')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                activeTech === 'shank'
                  ? 'bg-[#181925] border-[#FF1E27] shadow-lg'
                  : 'bg-[#12131A] border-[#222430] hover:border-neutral-500'
              }`}
            >
              <Cpu className="w-5 h-5 text-[#FF1E27] mb-2" />
              <div className="font-display font-bold text-xs uppercase text-white">Carbon Shank</div>
              <div className="text-[10px] text-neutral-400 font-mono">Torsional Chassis</div>
            </button>

            <button
              onClick={() => setActiveTech('mesh')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                activeTech === 'mesh'
                  ? 'bg-[#181925] border-[#FF1E27] shadow-lg'
                  : 'bg-[#12131A] border-[#222430] hover:border-neutral-500'
              }`}
            >
              <ShieldCheck className="w-5 h-5 text-[#FF1E27] mb-2" />
              <div className="font-display font-bold text-xs uppercase text-white">Dynamic Fit</div>
              <div className="text-[10px] text-neutral-400 font-mono">Biometric Lockdown</div>
            </button>
          </div>
        </div>

        {/* Active Technology Deep Dive Box */}
        <div className="bg-[#12131C] border border-[#232635] rounded-2xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Detail & Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-mono text-xs text-[#FF1E27] uppercase tracking-widest font-semibold">
                  {current.badge}
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white mt-1">
                  {current.title}
                </h2>
                <p className="text-neutral-300 text-sm mt-3 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Lab Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 bg-[#181A25] rounded-xl border border-[#282B3C]">
                    <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
                      {m.label}
                    </div>
                    <div className="font-mono font-bold text-2xl text-[#FF1E27] mt-1">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-neutral-400 font-sans mt-0.5">
                      {m.note}
                    </div>
                  </div>
                ))}
              </div>

              {/* Engineering Breakdown Bullet points */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono uppercase text-neutral-400 font-semibold">
                  Key Structural Specifications
                </div>
                {current.breakdown.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#FF1E27] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Image */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md bg-[#181A26] rounded-2xl p-6 flex items-center justify-center border border-[#292D3E] shadow-2xl">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Biomechanics Comparison Matrix */}
        <div className="bg-[#12131B] border border-[#232633] rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white">
            NEXORA ELITE PERFORMANCE BENCHMARK
          </h3>
          <p className="text-xs text-neutral-400">
            Independent dynamometer and laser displacement laboratory comparison testing against industry benchmarks.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#181A25] text-neutral-300 border-b border-[#252838]">
                <tr>
                  <th className="p-3">METRIC</th>
                  <th className="p-3 text-[#FF1E27] font-bold">NEXORA ELITE 1.0</th>
                  <th className="p-3 text-neutral-400">TRADITIONAL EVA SNEAKERS</th>
                  <th className="p-3 text-neutral-400">AIR-BAG SOLE DESIGNS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#202330]">
                <tr>
                  <td className="p-3 font-semibold text-white">Energy Return (%)</td>
                  <td className="p-3 text-[#FF1E27] font-bold">85.4%</td>
                  <td className="p-3 text-neutral-400">54.2%</td>
                  <td className="p-3 text-neutral-400">68.1%</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Peak Lateral Stopping Force</td>
                  <td className="p-3 text-[#FF1E27] font-bold">1.42 µ</td>
                  <td className="p-3 text-neutral-400">0.98 µ</td>
                  <td className="p-3 text-neutral-400">1.12 µ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Total Shoe Weight (US 9)</td>
                  <td className="p-3 text-[#FF1E27] font-bold">13.4 oz</td>
                  <td className="p-3 text-neutral-400">15.8 oz</td>
                  <td className="p-3 text-neutral-400">16.2 oz</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Torsional Deflection Angle</td>
                  <td className="p-3 text-[#FF1E27] font-bold">1.2°</td>
                  <td className="p-3 text-neutral-400">7.8°</td>
                  <td className="p-3 text-neutral-400">4.5°</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
