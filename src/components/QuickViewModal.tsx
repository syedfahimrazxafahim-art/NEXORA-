import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Check, Heart, Shield, ArrowRight } from 'lucide-react';
import { Product, ProductColorway } from '../types';
import { useCart } from '../context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onNavigateToDetail?: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart, wishlist, toggleWishlist, setIsSizeGuideOpen } = useCart();
  const [selectedColorway, setSelectedColorway] = useState<ProductColorway | null>(null);
  const [selectedSize, setSelectedSize] = useState<number>(9.5);
  const [activeImage, setActiveImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setSelectedColorway(product.colorways[0]);
      setActiveImage(product.primaryImage);
      if (product.availableSizes.length > 0) {
        setSelectedSize(product.availableSizes[Math.min(3, product.availableSizes.length - 1)]);
      }
      setQuantity(1);
    }
  }, [product]);

  if (!product || !selectedColorway) return null;

  const isFavorited = wishlist.includes(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedColorway, selectedSize, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-[#111217] border border-[#232631] text-white rounded-lg shadow-2xl overflow-hidden my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-neutral-400 hover:text-white bg-[#1A1C24]/80 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Gallery / Image */}
          <div className="p-6 md:p-8 bg-[#161820] flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-[#232631]">
            <div className="w-full flex justify-between items-center text-xs text-neutral-400 font-mono">
              <span className="text-[#FF1E27] font-semibold">{product.collection.toUpperCase()}</span>
              <span>SKU: {selectedColorway.sku}</span>
            </div>

            <div className="relative w-full aspect-4/3 flex items-center justify-center my-4">
              <img
                src={activeImage || selectedColorway.image}
                alt={product.name}
                className="max-h-64 object-contain transition-all duration-300 drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Thumbnail selector */}
            <div className="flex gap-2 justify-center w-full">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`w-14 h-14 rounded border p-1 bg-[#1F212C] transition-all cursor-pointer overflow-hidden ${
                    activeImage === img ? 'border-[#FF1E27] ring-1 ring-[#FF1E27]' : 'border-[#2C2F3E] hover:border-neutral-400'
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Info & Purchase Controls */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400 uppercase tracking-widest font-mono">
                  {product.category}
                </span>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-1.5 rounded-full transition-colors ${
                    isFavorited ? 'text-[#FF1E27] bg-[#FF1E27]/10' : 'text-neutral-400 hover:text-white'
                  }`}
                  aria-label="Save to wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-[#FF1E27]' : ''}`} />
                </button>
              </div>

              <h3 className="font-display font-bold text-2xl tracking-wide uppercase mt-1 text-white">
                {product.name}
              </h3>

              <div className="flex items-baseline gap-3 mt-2">
                <span className="font-mono text-2xl font-bold text-[#FF1E27]">
                  ${product.price.toFixed(2)} USD
                </span>
                {product.originalPrice && (
                  <span className="font-mono text-sm text-neutral-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs text-emerald-400 font-mono font-medium ml-2">
                  ● In Stock ({product.stockCount} pairs left)
                </span>
              </div>

              <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Colorways */}
              <div className="mt-5">
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-mono uppercase text-neutral-400">Colorway</span>
                  <span className="text-neutral-200 font-medium">{selectedColorway.name}</span>
                </div>
                <div className="flex gap-2.5">
                  {product.colorways.map((cw) => (
                    <button
                      key={cw.id}
                      onClick={() => {
                        setSelectedColorway(cw);
                        setActiveImage(cw.image);
                      }}
                      className={`relative w-8 h-8 rounded-full border-2 transition-transform cursor-pointer ${
                        selectedColorway.id === cw.id
                          ? 'border-[#FF1E27] scale-110'
                          : 'border-[#333748] hover:border-neutral-400'
                      }`}
                      style={{ backgroundColor: cw.hex }}
                      title={cw.name}
                    >
                      {selectedColorway.id === cw.id && (
                        <Check className={`w-3.5 h-3.5 mx-auto ${cw.hex === '#FFFFFF' ? 'text-black' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-5">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-mono uppercase text-neutral-400">Select US Size</span>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-[#FF1E27] hover:underline text-xs flex items-center gap-1 cursor-pointer"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {product.availableSizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 text-xs font-mono font-semibold rounded border transition-colors cursor-pointer ${
                        selectedSize === sz
                          ? 'bg-[#FF1E27] border-[#FF1E27] text-white'
                          : 'bg-[#181A24] border-[#292D3D] text-neutral-300 hover:border-neutral-400'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-5 flex items-center gap-3">
                <span className="text-xs font-mono uppercase text-neutral-400">Quantity</span>
                <div className="flex items-center border border-[#2D3142] rounded bg-[#161822] text-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-neutral-300 hover:text-white"
                  >
                    -
                  </button>
                  <span className="px-3 py-1.5 font-mono text-white font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-neutral-300 hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart button */}
            <div className="pt-4 border-t border-[#232631] space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 bg-[#FF1E27] hover:bg-[#E50914] text-white font-display font-bold text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2 clip-button-angle"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO CART · ${(product.price * quantity).toFixed(2)} USD</span>
              </button>
              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400">
                <Shield className="w-3.5 h-3.5 text-neutral-400" />
                <span>Free shipping & 30-day trial warranty included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
