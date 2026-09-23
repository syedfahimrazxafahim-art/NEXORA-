import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, ShoppingBag, Eye, Heart, Check, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ShopPageProps {
  onSelectProduct: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = () => {
  const { addToCart, setQuickViewProduct, wishlist, toggleWishlist } = useCart();

  // Filters state
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedGender, setSelectedGender] = useState<string>('All');
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<number>(250);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categories = ['All', 'Performance Basketball', 'Speed Running', 'Elite Training'];
  const genders = ['All', 'Men', 'Women', 'Unisex'];
  const allSizes = [7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 13.0];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
      if (selectedGender !== 'All' && p.gender !== selectedGender && p.gender !== 'Unisex') return false;
      if (p.price > priceRange) return false;
      if (selectedSize && !p.availableSizes.includes(selectedSize)) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, selectedGender, selectedSize, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#22242D] pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF1E27] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL CATALOGUE 2026</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mt-1">
              ATHLETIC PERFORMANCE SHOP
            </h1>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1 max-w-xl">
              Equip yourself with the vanguard of basketball and speed footwear. Each silhouette is tested by pro-level athletes under rigorous game conditions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden px-4 py-2.5 bg-[#181A24] border border-[#2B2E3D] rounded-lg text-xs font-display font-semibold uppercase flex items-center gap-2"
            >
              <Filter className="w-4 h-4 text-[#FF1E27]" />
              <span>Filters</span>
            </button>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 bg-[#181A24] border border-[#2B2E3D] rounded-lg px-3 py-2 text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-white font-mono text-xs focus:outline-none cursor-pointer"
              >
                <option value="featured" className="bg-[#181A24]">Featured First</option>
                <option value="price-low" className="bg-[#181A24]">Price: Low to High</option>
                <option value="price-high" className="bg-[#181A24]">Price: High to Low</option>
                <option value="rating" className="bg-[#181A24]">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Layout: Sidebar Filters + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar Filters */}
          <aside
            className={`lg:col-span-3 space-y-6 ${
              showMobileFilters ? 'block' : 'hidden lg:block'
            } bg-[#12131A] p-6 rounded-xl border border-[#22242F] h-fit sticky top-28`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#22242F]">
              <h2 className="font-display font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#FF1E27]" />
                <span>REFINE SELECTION</span>
              </h2>
              {(selectedCategory !== 'All' || selectedGender !== 'All' || selectedSize !== null) && (
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedGender('All');
                    setSelectedSize(null);
                    setPriceRange(250);
                  }}
                  className="text-[11px] text-[#FF1E27] hover:underline"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-neutral-400 font-semibold block">
                Category
              </label>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors cursor-pointer flex items-center justify-between ${
                      selectedCategory === cat
                        ? 'bg-[#FF1E27] text-white font-bold'
                        : 'text-neutral-300 hover:bg-[#1A1C26]'
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Gender Filter */}
            <div className="space-y-2 pt-2 border-t border-[#22242F]">
              <label className="text-xs font-mono uppercase text-neutral-400 font-semibold block">
                Athlete Division
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {genders.map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGender(g)}
                    className={`py-1.5 text-center text-xs rounded transition-colors cursor-pointer ${
                      selectedGender === g
                        ? 'bg-[#292C3D] text-white font-bold border border-[#FF1E27]'
                        : 'bg-[#181A24] text-neutral-400 hover:text-white border border-[#232633]'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="space-y-2 pt-2 border-t border-[#22242F]">
              <div className="flex justify-between items-center text-xs">
                <label className="font-mono uppercase text-neutral-400 font-semibold">
                  US Shoe Size
                </label>
                {selectedSize && (
                  <span className="text-[#FF1E27] font-mono text-[11px] font-bold">
                    US {selectedSize}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {allSizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(selectedSize === sz ? null : sz)}
                    className={`py-1 text-xs font-mono rounded border transition-colors cursor-pointer ${
                      selectedSize === sz
                        ? 'bg-[#FF1E27] border-[#FF1E27] text-white font-bold'
                        : 'bg-[#181A24] border-[#252838] text-neutral-400 hover:text-white'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-2 pt-2 border-t border-[#22242F]">
              <div className="flex justify-between items-center text-xs">
                <label className="font-mono uppercase text-neutral-400 font-semibold">
                  Max Price
                </label>
                <span className="font-mono text-white font-bold">${priceRange} USD</span>
              </div>
              <input
                type="range"
                min="150"
                max="250"
                step="5"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#FF1E27] cursor-pointer"
              />
            </div>
          </aside>

          {/* Right Product Grid */}
          <div className="lg:col-span-9 space-y-4">
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>Showing {filteredProducts.length} high-performance models</span>
              <span>Global Free Delivery Eligible</span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-[#12131A] border border-[#22242F] rounded-xl p-12 text-center text-neutral-400 space-y-3">
                <p>No models match the active filter criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedGender('All');
                    setSelectedSize(null);
                    setPriceRange(250);
                  }}
                  className="px-4 py-2 bg-[#FF1E27] text-white text-xs font-display uppercase tracking-wider font-bold rounded"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((shoe) => {
                  const isWishlisted = wishlist.includes(shoe.id);
                  return (
                    <div
                      key={shoe.id}
                      className="group bg-[#13141C] border border-[#222533] hover:border-[#383C50] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative"
                    >
                      {/* Badge in top left */}
                      <div className="absolute top-3 left-3 z-10">
                        {shoe.isNew && (
                          <span className="bg-[#FF1E27] text-white text-[10px] font-display font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                            NEW DROP
                          </span>
                        )}
                      </div>

                      {/* Wishlist Heart */}
                      <button
                        onClick={() => toggleWishlist(shoe.id)}
                        className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md bg-black/40 hover:bg-black/70 transition-colors cursor-pointer ${
                          isWishlisted ? 'text-[#FF1E27]' : 'text-neutral-400 hover:text-white'
                        }`}
                        title="Wishlist"
                      >
                        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#FF1E27]' : ''}`} />
                      </button>

                      {/* Shoe Image Box with quick action hover */}
                      <div className="relative aspect-4/3 bg-[#181A24] p-6 flex items-center justify-center overflow-hidden cursor-pointer"
                        onClick={() => setQuickViewProduct(shoe)}
                      >
                        <img
                          src={shoe.primaryImage}
                          alt={shoe.name}
                          className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />

                        {/* Quick View Button on Hover */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setQuickViewProduct(shoe);
                            }}
                            className="px-4 py-2 bg-white text-neutral-900 font-display font-bold text-xs uppercase tracking-wider rounded flex items-center gap-1.5 shadow-lg hover:bg-neutral-200 transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex justify-between items-start">
                            <span className="text-[11px] font-mono text-[#FF1E27] uppercase tracking-wider">
                              {shoe.collection}
                            </span>
                            <span className="text-xs font-mono text-neutral-400">
                              ★ {shoe.rating} ({shoe.reviewCount})
                            </span>
                          </div>

                          <h3 
                            onClick={() => setQuickViewProduct(shoe)}
                            className="font-display font-bold text-lg uppercase tracking-wide text-white mt-1 group-hover:text-[#FF1E27] transition-colors cursor-pointer"
                          >
                            {shoe.name}
                          </h3>
                          <p className="text-xs text-neutral-400 line-clamp-2 mt-1">
                            {shoe.description}
                          </p>
                        </div>

                        {/* Price & Buy Action */}
                        <div className="pt-3 border-t border-[#222533] flex items-center justify-between">
                          <div>
                            <span className="font-mono text-lg font-bold text-white block">
                              ${shoe.price.toFixed(2)}
                            </span>
                            <span className="text-[10px] text-neutral-500 font-mono">
                              {shoe.specs.weight}
                            </span>
                          </div>

                          <button
                            onClick={() => addToCart(shoe, shoe.colorways[0], shoe.availableSizes[0] || 9.5, 1)}
                            className="p-2.5 bg-[#FF1E27] hover:bg-[#E50914] text-white rounded-lg transition-all duration-200 cursor-pointer shadow-md hover:shadow-red-600/30"
                            title="Add to Cart"
                          >
                            <ShoppingBag className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
