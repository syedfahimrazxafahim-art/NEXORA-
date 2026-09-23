import React, { useState } from 'react';
import { X, User, Package, Heart, LogOut, CheckCircle, ExternalLink } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

interface UserAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (shoe: any) => void;
}

export const UserAccountModal: React.FC<UserAccountModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const { wishlist, setQuickViewProduct } = useCart();
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist'>('profile');

  if (!isOpen) return null;

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const sampleOrders = [
    {
      id: 'NX-482019',
      date: 'Sep 14, 2026',
      total: 199.99,
      status: 'Delivered',
      items: 'Nexora Elite 1.0 (US 10.5)',
    },
    {
      id: 'NX-309121',
      date: 'Aug 02, 2026',
      total: 219.99,
      status: 'Delivered',
      items: 'Nexora Stealth Pro (US 10.5)',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-[#0F1015] border border-[#232631] text-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#232631] flex items-center justify-between bg-[#151720]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF1E27] flex items-center justify-center font-display font-bold text-white text-lg">
              AV
            </div>
            <div>
              <h3 className="font-display font-bold text-base uppercase tracking-wider text-white">
                Alex Vance
              </h3>
              <p className="text-xs text-neutral-400 font-mono">Nexora Elite Member · Level 2</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#232631] bg-[#12131A] text-xs font-display font-semibold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'profile' ? 'border-[#FF1E27] text-white' : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'orders' ? 'border-[#FF1E27] text-white' : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Past Orders ({sampleOrders.length})
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${
              activeTab === 'wishlist' ? 'border-[#FF1E27] text-white' : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Wishlist ({wishlistProducts.length})
          </button>
        </div>

        {/* Tab content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {activeTab === 'profile' && (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-[#151720] border border-[#232631] rounded">
                  <span className="text-neutral-400 font-mono block text-[10px]">REGISTERED EMAIL</span>
                  <span className="text-white font-medium">alex.vance@nexora.io</span>
                </div>
                <div className="p-3 bg-[#151720] border border-[#232631] rounded">
                  <span className="text-neutral-400 font-mono block text-[10px]">ATHLETE SHOE SIZE</span>
                  <span className="text-white font-medium">US 10.5 Men (D Width)</span>
                </div>
                <div className="p-3 bg-[#151720] border border-[#232631] rounded">
                  <span className="text-neutral-400 font-mono block text-[10px]">PRIMARY SPORT</span>
                  <span className="text-white font-medium">Competitive Basketball</span>
                </div>
                <div className="p-3 bg-[#151720] border border-[#232631] rounded">
                  <span className="text-neutral-400 font-mono block text-[10px]">MEMBER REWARDS</span>
                  <span className="text-[#FF1E27] font-bold">1,850 PTS (Gold Tier)</span>
                </div>
              </div>

              <div className="p-3 bg-[#1A1822] border border-[#3E2325] rounded text-neutral-300">
                <span className="text-[#FF1E27] font-bold font-display block mb-1">
                  VIP EARLY ACCESS DROP: NEXORA ELITE 2.0
                </span>
                You are registered for priority queue access on the upcoming winter drop.
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-3">
              {sampleOrders.map((ord) => (
                <div
                  key={ord.id}
                  className="p-3.5 bg-[#151720] border border-[#232631] rounded-lg flex items-center justify-between text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-white">{ord.id}</span>
                      <span className="text-neutral-400 text-[11px]">· {ord.date}</span>
                    </div>
                    <p className="text-neutral-300">{ord.items}</p>
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400">
                      <CheckCircle className="w-3 h-3" /> {ord.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-white block">
                      ${ord.total.toFixed(2)}
                    </span>
                    <button className="text-[11px] text-[#FF1E27] hover:underline mt-1">
                      Track Parcel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div className="space-y-3">
              {wishlistProducts.length === 0 ? (
                <div className="text-center py-8 text-neutral-500 text-xs">
                  Your wishlist is empty. Tap the heart icon on any shoe to save it.
                </div>
              ) : (
                wishlistProducts.map((p) => (
                  <div
                    key={p.id}
                    className="p-3 bg-[#151720] border border-[#232631] rounded-lg flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={p.primaryImage}
                        alt=""
                        className="w-12 h-12 object-contain bg-[#1C1E28] rounded p-1"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-display font-bold text-white">{p.name}</h4>
                        <span className="font-mono text-neutral-400">${p.price.toFixed(2)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        setQuickViewProduct(p);
                      }}
                      className="px-3 py-1.5 bg-[#FF1E27] hover:bg-[#E50914] text-white font-display text-xs font-semibold rounded uppercase"
                    >
                      Quick Buy
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
