import React, { useState } from 'react';
import { X, CheckCircle, Shield, Truck, CreditCard, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { NexoraLogo } from './NexoraLogo';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    firstName: 'Alex',
    lastName: 'Vance',
    email: 'alex.vance@nexora.io',
    phone: '+1 (555) 234-8900',
    address: '742 Performance Way',
    city: 'Portland',
    state: 'OR',
    zip: '97201',
    paymentMethod: 'card',
    cardNumber: '4242 •••• •••• 9821',
    expiry: '12/28',
    cvv: '883',
  });

  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `NX-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setStep('success');
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-[#0F1015] border border-[#232631] text-white rounded-lg shadow-2xl overflow-hidden my-8">
        {/* Top Header */}
        <div className="p-6 border-b border-[#232631] flex items-center justify-between bg-[#151720]">
          <div className="flex items-center gap-4">
            <NexoraLogo size="sm" light={true} />
            <span className="text-neutral-500 font-mono text-sm">/</span>
            <span className="font-display font-semibold text-sm tracking-wider uppercase text-neutral-300">
              {step === 'form' ? 'EXPRESS ATHLETE CHECKOUT' : 'ORDER CONFIRMED'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Shipping info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-[#FF1E27]">
                  <Truck className="w-4 h-4" />
                  <span>1. Athlete Shipping Address</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1">FIRST NAME</label>
                    <input
                      required
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-[#181A22] border border-[#2D303D] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF1E27]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1">LAST NAME</label>
                    <input
                      required
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-[#181A22] border border-[#2D303D] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF1E27]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">EMAIL FOR DISPATCH NOTIFICATIONS</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#181A22] border border-[#2D303D] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF1E27]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">STREET ADDRESS</label>
                  <input
                    required
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#181A22] border border-[#2D303D] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF1E27]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1">CITY</label>
                    <input
                      required
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#181A22] border border-[#2D303D] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF1E27]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1">STATE</label>
                    <input
                      required
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-[#181A22] border border-[#2D303D] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF1E27]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1">ZIP / POSTAL</label>
                    <input
                      required
                      type="text"
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full bg-[#181A22] border border-[#2D303D] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF1E27]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment & Order Summary */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-[#FF1E27]">
                  <CreditCard className="w-4 h-4" />
                  <span>2. Payment & Verification</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1">CARD NUMBER</label>
                    <input
                      required
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full bg-[#181A22] border border-[#2D303D] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF1E27] font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-neutral-400 mb-1">EXPIRY</label>
                      <input
                        required
                        type="text"
                        value={formData.expiry}
                        onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                        className="w-full bg-[#181A22] border border-[#2D303D] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF1E27] font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-neutral-400 mb-1">SECURITY CODE (CVV)</label>
                      <input
                        required
                        type="text"
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                        className="w-full bg-[#181A22] border border-[#2D303D] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF1E27] font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Items Summary list */}
                <div className="mt-4 p-4 bg-[#14161F] border border-[#232633] rounded space-y-2">
                  <div className="text-xs font-display font-semibold text-neutral-300 uppercase tracking-wider pb-2 border-b border-[#232633]">
                    Order Summary ({cart.length} unique items)
                  </div>
                  <div className="max-h-28 overflow-y-auto space-y-1.5 text-xs text-neutral-300">
                    {cart.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="truncate max-w-[180px]">
                          {item.quantity}x {item.product.name} (US {item.size})
                        </span>
                        <span className="font-mono text-neutral-200">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-[#232633] flex justify-between text-sm font-bold text-white">
                    <span>Due Now</span>
                    <span className="text-[#FF1E27] font-mono">${cartTotal.toFixed(2)} USD</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#232631] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Protected by Nexora Athletic Escrow Guarantee</span>
              </div>
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#FF1E27] hover:bg-[#E50914] text-white font-display font-bold text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-lg hover:shadow-red-600/30 flex items-center gap-2 clip-button-angle"
              >
                <span>COMPLETE ORDER · ${cartTotal.toFixed(2)}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 md:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                PAYMENT CONFIRMED & ALLOCATED
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider text-white">
                WELCOME TO THE NEXORA ELITE
              </h3>
              <p className="text-neutral-400 text-sm max-w-md mx-auto">
                Your order is currently being inspected and packed in our climate-controlled vault. Tracking details have been sent to{' '}
                <span className="text-white font-medium">{formData.email}</span>.
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="max-w-md mx-auto bg-[#14161F] border border-[#232633] rounded-lg p-5 text-left text-xs space-y-2">
              <div className="flex justify-between pb-2 border-b border-[#232633]">
                <span className="text-neutral-400 font-mono">ORDER NUMBER</span>
                <span className="font-mono font-bold text-white">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Recipient</span>
                <span className="text-neutral-200">{formData.firstName} {formData.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Shipping Destination</span>
                <span className="text-neutral-200">{formData.address}, {formData.city} {formData.state}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Estimated Delivery</span>
                <span className="text-emerald-400 font-medium">3-5 Business Days (Express Air)</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#FF1E27] hover:bg-[#E50914] text-white font-display font-bold text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer clip-button-angle"
              >
                CONTINUE EXPLORING
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
