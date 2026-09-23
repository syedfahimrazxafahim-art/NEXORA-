import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { AboutPage } from './pages/AboutPage';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { QuickViewModal } from './components/QuickViewModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { UserAccountModal } from './components/UserAccountModal';
import { SupportModal } from './components/SupportModal';
import { Product } from './types';
import { Check } from 'lucide-react';

const AppContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [supportTopic, setSupportTopic] = useState<string | null>(null);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const {
    isSearchOpen,
    setIsSearchOpen,
    quickViewProduct,
    setQuickViewProduct,
    isCheckoutOpen,
    setIsCheckoutOpen,
    toastMessage,
  } = useCart();

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setQuickViewProduct(product);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col font-sans selection:bg-[#FF1E27] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161822] text-white border border-[#FF1E27] px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="w-5 h-5 rounded-full bg-[#FF1E27] text-white flex items-center justify-center">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="font-display font-semibold text-xs tracking-wider uppercase">
            {toastMessage}
          </span>
        </div>
      )}

      {/* Main Sticky Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenAccount={() => setIsAccountOpen(true)}
      />

      {/* Active Page View */}
      <div className="flex-1">
        {currentTab === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentTab === 'shop' && <ShopPage onSelectProduct={handleSelectProduct} />}
        {currentTab === 'collections' && <CollectionsPage onNavigateToShop={() => handleNavigate('shop')} />}
        {currentTab === 'technology' && <TechnologyPage />}
        {currentTab === 'about' && <AboutPage onNavigateToShop={() => handleNavigate('shop')} />}
      </div>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSupport={(topic) => setSupportTopic(topic)}
      />

      {/* Modals & Slide-over Drawers */}
      <CartDrawer
        onCheckout={() => setIsCheckoutOpen(true)}
        onExplore={() => handleNavigate('shop')}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleSelectProduct}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      <SizeGuideModal />

      <UserAccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        onSelectProduct={handleSelectProduct}
      />

      <SupportModal
        topic={supportTopic}
        onClose={() => setSupportTopic(null)}
      />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
