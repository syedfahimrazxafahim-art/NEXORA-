import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  onCheckout: () => void;
  onExplore: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onCheckout, onExplore }) => {
  const { cart, removeFromCart, updateQuantity, cartCount, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; percent: number } | null>(null);
  const [promoError, setPromoError] = useState('');

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 150;
  const isFreeShipping = cartTotal >= FREE_SHIPPING_THRESHOLD || cartTotal === 0;
  const freeShippingDelta = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);
  const progressPercent = Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100);

  const discountAmount = appliedDiscount ? (cartTotal * appliedDiscount.percent) / 100 : 0;
  const shippingFee = cart.length === 0 || isFreeShipping ? 0 : 12.00;
  const finalTotal = Math.max(0, cartTotal - discountAmount + shippingFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCode.trim().toUpperCase();
    if (code === 'NEXORA10' || code === 'ELITE10') {
      setAppliedDiscount({ code, percent: 10 });
      setPromoCode('');
    } else if (code === 'CHAMPION20') {
      setAppliedDiscount({ code, percent: 20 });
      setPromoCode('');
    } else {
      setPromoError('Invalid code. Try ELITE10 or CHAMPION20');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0F1015] border-l border-[#23252E] text-white flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-[#23252E] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="font-display font-bold text-xl tracking-wider uppercase">
                YOUR BAG
              </h2>
              <span className="bg-[#FF1E27] text-white text-xs font-bold font-display px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          {cart.length > 0 && (
            <div className="px-6 py-3 bg-[#161820] border-b border-[#23252E] text-xs">
              <div className="flex justify-between mb-1.5 font-medium">
                {isFreeShipping ? (
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    ✓ You unlocked FREE Global Express Delivery!
                  </span>
                ) : (
                  <span className="text-neutral-300">
                    Add <span className="text-[#FF1E27] font-bold">${freeShippingDelta.toFixed(2)}</span> for Free Express Shipping
                  </span>
                )}
                <span className="text-neutral-400 font-mono">{Math.round(progressPercent)}%</span>
              </div>
              <div className="w-full bg-[#23252E] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#FF1E27] h-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#181922] border border-[#2A2C38] flex items-center justify-center text-neutral-500 mb-4">
                  <Tag className="w-8 h-8 text-neutral-600" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-1">
                  YOUR BAG IS EMPTY
                </h3>
                <p className="text-neutral-400 text-sm max-w-xs mb-6">
                  Experience next-level energy return. Discover the Nexora signature lineup.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    onExplore();
                  }}
                  className="px-6 py-3 bg-[#FF1E27] hover:bg-[#E50914] text-white font-display font-bold text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-lg hover:shadow-red-600/30"
                >
                  SHOP SNEAKERS
                </button>
              </div>
            ) : (
              cart.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.colorway.id}-${item.size}-${index}`}
                  className="flex gap-4 p-3 bg-[#151720] border border-[#232631] rounded-lg group transition-colors hover:border-[#343847]"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 bg-[#1D1F2B] rounded flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={item.colorway.image}
                      alt={item.product.name}
                      className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-bold text-sm tracking-wide text-white truncate">
                          {item.product.name}
                        </h4>
                        <span className="font-mono font-bold text-sm text-neutral-200 whitespace-nowrap">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 truncate mt-0.5">
                        {item.colorway.name}
                      </p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-neutral-300">
                        <span className="font-medium text-neutral-400">Size:</span>
                        <span className="font-mono bg-[#232633] px-1.5 py-0.5 rounded text-[11px] text-white">
                          US {item.size}
                        </span>
                      </div>
                    </div>

                    {/* Quantity controls & Delete */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#232631]">
                      <div className="flex items-center border border-[#2F3240] rounded overflow-hidden bg-[#0D0E12]">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-7 text-center font-mono text-xs font-semibold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-neutral-500 hover:text-[#FF1E27] transition-colors p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#23252E] bg-[#12131A] space-y-4">
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="PROMO CODE (e.g. ELITE10)"
                    className="flex-1 bg-[#1A1C24] border border-[#2D303D] rounded px-3 py-2 text-xs font-mono tracking-wider uppercase text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF1E27]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#262835] hover:bg-[#323546] text-white font-display text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {promoError && (
                  <p className="text-[11px] text-red-400 font-sans">{promoError}</p>
                )}
                {appliedDiscount && (
                  <div className="flex items-center justify-between text-xs text-emerald-400 pt-1">
                    <span>Discount applied ({appliedDiscount.code} - {appliedDiscount.percent}% off)</span>
                    <button
                      type="button"
                      onClick={() => setAppliedDiscount(null)}
                      className="text-neutral-400 hover:text-white underline text-[10px]"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </form>

              {/* Cost Breakdown */}
              <div className="space-y-1.5 text-xs text-neutral-400 font-sans pt-2 border-t border-[#23252E]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-mono">${cartTotal.toFixed(2)}</span>
                </div>
                {appliedDiscount && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Promo Discount ({appliedDiscount.percent}%)</span>
                    <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-white font-mono">
                    {shippingFee === 0 ? (
                      <span className="text-emerald-400 uppercase font-semibold">FREE</span>
                    ) : (
                      `$${shippingFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-[#23252E]">
                  <span className="font-display tracking-wider">TOTAL</span>
                  <span className="font-mono text-[#FF1E27]">${finalTotal.toFixed(2)} USD</span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  onCheckout();
                }}
                className="w-full py-4 bg-[#FF1E27] hover:bg-[#E50914] text-white font-display font-bold text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2 group clip-button-angle"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                <span>30-Day Court Trial Guarantee · Secure 256-bit Checkout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
