import React from 'react';
import { X, HelpCircle, RefreshCw, Send, ShieldCheck } from 'lucide-react';

interface SupportModalProps {
  topic: string | null;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ topic, onClose }) => {
  if (!topic) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#0F1015] border border-[#232631] text-white rounded-lg shadow-2xl p-6 md:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#232631]">
          <h3 className="font-display font-bold text-xl uppercase tracking-wider text-white flex items-center gap-2">
            {topic === 'faq' && <HelpCircle className="w-5 h-5 text-[#FF1E27]" />}
            {topic === 'shipping' && <RefreshCw className="w-5 h-5 text-[#FF1E27]" />}
            {topic === 'contact' && <Send className="w-5 h-5 text-[#FF1E27]" />}
            <span>
              {topic === 'faq' && 'FREQUENTLY ASKED QUESTIONS'}
              {topic === 'shipping' && '30-DAY COURT TRIAL & SHIPPING POLICY'}
              {topic === 'contact' && 'ATHLETE SUPPORT CONCIERGE'}
            </span>
          </h3>
          <button onClick={onClose} className="p-1.5 text-neutral-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-4 text-xs text-neutral-300 max-h-96 overflow-y-auto">
          {topic === 'faq' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-white text-sm">How does the 30-Day Court Trial work?</h4>
                <p className="mt-1 text-neutral-400 leading-relaxed">
                  Lace them up, hit the court, and put them through rigorous game play. If they do not improve your responsiveness and comfort within 30 days, send them back for a full refund—no questions asked.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Are Nexora Elite shoes true to size?</h4>
                <p className="mt-1 text-neutral-400 leading-relaxed">
                  They are designed with an anatomical snug lockdown fit. For normal and narrow feet, order your standard US basketball size. For wider feet, we advise going up by a half size (+0.5 US).
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Can I play outdoors on concrete?</h4>
                <p className="mt-1 text-neutral-400 leading-relaxed">
                  The Nexora Grip™ compound is engineered with deep-groove rubber rated for both hardwood and treated outdoor asphalt surfaces.
                </p>
              </div>
            </div>
          )}

          {topic === 'shipping' && (
            <div className="space-y-4">
              <div className="p-3 bg-[#171922] rounded border border-[#262838]">
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Free Express Delivery over $150</span>
                </div>
                <p className="text-neutral-400 text-xs">
                  All domestic and international orders over $150 USD receive complimentary priority air courier shipping.
                </p>
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
                <li>North America: 2-3 Business Days</li>
                <li>Europe & UK: 3-4 Business Days</li>
                <li>Asia-Pacific: 3-5 Business Days</li>
                <li>Pre-paid return labels included inside every shoebox</li>
              </ul>
            </div>
          )}

          {topic === 'contact' && (
            <div className="space-y-3">
              <p className="text-neutral-300">
                Our athlete concierge is on standby 24/7 to assist with sizing advice, drop reservations, or tournament team orders.
              </p>
              <div className="p-4 bg-[#14161F] border border-[#232633] rounded space-y-2 font-mono text-xs">
                <div>DIRECT LINE: <span className="text-[#FF1E27] font-bold">+1 (800) 555-NEXORA</span></div>
                <div>EMAIL: <span className="text-white">support@nexora-kicks.com</span></div>
                <div>RESPONSE TIME: <span className="text-emerald-400 font-bold">&lt; 15 Minutes</span></div>
              </div>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-[#232631] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#FF1E27] hover:bg-[#E50914] text-white font-display text-xs font-bold uppercase tracking-wider rounded"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
