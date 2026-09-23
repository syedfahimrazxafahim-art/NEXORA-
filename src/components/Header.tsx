import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { NexoraLogo } from './NexoraLogo';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate, onOpenAccount }) => {
  const { cartCount, setIsCartOpen, setIsSearchOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'shop', label: 'SHOP' },
    { id: 'collections', label: 'COLLECTIONS' },
    { id: 'technology', label: 'TECHNOLOGY' },
    { id: 'about', label: 'ABOUT' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#22242A] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark & Crown Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group text-left cursor-pointer transition-opacity hover:opacity-90"
          aria-label="Nexora Home"
        >
          <NexoraLogo size="md" light={true} />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 font-display text-sm tracking-widest font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
                {/* Active indicator dot from reference image */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF1E27]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Quick Actions (Search, Profile, Cart) */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Search catalog"
            title="Search shoes (Cmd + K)"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* User Account Trigger */}
          <button
            onClick={onOpenAccount}
            className="p-2 text-neutral-300 hover:text-white transition-colors cursor-pointer hidden sm:block"
            aria-label="User account"
            title="Account & Orders"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-neutral-300 hover:text-white transition-colors cursor-pointer group"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
            <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] font-bold font-display bg-[#FF1E27] text-white rounded-full px-1 shadow-sm">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white transition-colors md:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-b border-[#22242A] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 font-display text-base font-semibold tracking-wider flex items-center justify-between ${
                  currentTab === item.id ? 'text-[#FF1E27]' : 'text-neutral-300'
                }`}
              >
                <span>{item.label}</span>
                {currentTab === item.id && (
                  <span className="w-2 h-2 rounded-full bg-[#FF1E27]" />
                )}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-[#22242A] flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAccount();
              }}
              className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white"
            >
              <User className="w-4 h-4 text-[#FF1E27]" />
              <span>Athlete Account & Orders</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
