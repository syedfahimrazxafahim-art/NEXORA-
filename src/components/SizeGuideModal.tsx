import React from 'react';
import { X, Ruler } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useCart();

  if (!isSizeGuideOpen) return null;

  const sizeChart = [
    { usM: '7.0', usW: '8.5', uk: '6.0', eu: '40.0', cm: '25.0' },
    { usM: '7.5', usW: '9.0', uk: '6.5', eu: '40.5', cm: '25.5' },
    { usM: '8.0', usW: '9.5', uk: '7.0', eu: '41.0', cm: '26.0' },
    { usM: '8.5', usW: '10.0', uk: '7.5', eu: '42.0', cm: '26.5' },
    { usM: '9.0', usW: '10.5', uk: '8.0', eu: '42.5', cm: '27.0' },
    { usM: '9.5', usW: '11.0', uk: '8.5', eu: '43.0', cm: '27.5' },
    { usM: '10.0', usW: '11.5', uk: '9.0', eu: '44.0', cm: '28.0' },
    { usM: '10.5', usW: '12.0', uk: '9.5', eu: '44.5', cm: '28.5' },
    { usM: '11.0', usW: '12.5', uk: '10.0', eu: '45.0', cm: '29.0' },
    { usM: '11.5', usW: '13.0', uk: '10.5', eu: '45.5', cm: '29.5' },
    { usM: '12.0', usW: '13.5', uk: '11.0', eu: '46.0', cm: '30.0' },
    { usM: '13.0', usW: '14.5', uk: '12.0', eu: '47.5', cm: '31.0' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#0F1015] border border-[#232631] text-white rounded-lg shadow-2xl p-6 md:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#232631]">
          <div className="flex items-center gap-2.5">
            <Ruler className="w-5 h-5 text-[#FF1E27]" />
            <h3 className="font-display font-bold text-xl uppercase tracking-wider text-white">
              NEXORA PERFORMANCE FIT & SIZING GUIDE
            </h3>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-neutral-300 mt-4 leading-relaxed">
          The Nexora Elite series is precision-molded for athletic lockdown. For athletes with wider feet or those who prefer a relaxed court feel with thick athletic crew socks, we recommend ordering a <strong>half size up (+0.5 US)</strong>.
        </p>

        {/* Table */}
        <div className="mt-5 border border-[#232631] rounded overflow-hidden">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[#171922] text-[#FF1E27] font-bold border-b border-[#232631]">
              <tr>
                <th className="p-2.5">US MEN</th>
                <th className="p-2.5">US WOMEN</th>
                <th className="p-2.5">UK</th>
                <th className="p-2.5">EUR</th>
                <th className="p-2.5">CM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1F222D]">
              {sizeChart.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#151720] transition-colors">
                  <td className="p-2.5 font-bold text-white">{row.usM}</td>
                  <td className="p-2.5 text-neutral-300">{row.usW}</td>
                  <td className="p-2.5 text-neutral-400">{row.uk}</td>
                  <td className="p-2.5 text-neutral-400">{row.eu}</td>
                  <td className="p-2.5 text-neutral-400">{row.cm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="px-6 py-2.5 bg-[#FF1E27] hover:bg-[#E50914] text-white font-display text-xs uppercase font-bold tracking-wider rounded transition-colors"
          >
            GOT IT
          </button>
        </div>
      </div>
    </div>
  );
};
