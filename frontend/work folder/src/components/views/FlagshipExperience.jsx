import React, { useState } from 'react';
import { products } from '../../data/products';

export default function FlagshipExperience({
  onAddToCart,
  onNavigateToReserve,
  onOpenReservationModal,
  showToast
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden -mt-28 pt-28 pb-16 md:pb-24 bg-surface-container-lowest">
        {/* Ambient Golden & Burgundy Glow Gradients */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-primary-container/20 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] rounded-full bg-tertiary/10 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-16 py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Editorial Copy (7 cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-surface-container-high rounded-full shadow-sm">
                <span className="material-symbols-outlined text-[15px] text-tertiary">filter_vintage</span>
                <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
                  Haute Botanical Café &amp; Atelier
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                <span className="font-label-caps text-xs text-on-surface-variant uppercase">
                  Mumbai • Paris
                </span>
              </div>

              <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl text-on-surface leading-[1.08] tracking-tight">
                Where Every Sip Blooms Into{' '}
                <span className="italic font-display-hero text-tertiary">Something Beautiful.</span>
              </h1>

              <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Exceptional Coffee. Exquisite Bouquets. Unforgettable Moments. An unhurried sensory
                sanctuary celebrating slow-roasted heirloom beans and morning-cut Parisian botanicals.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-tertiary text-surface-container-lowest font-label-caps text-xs uppercase tracking-widest shadow-xl hover:bg-tertiary-fixed transition-all flex items-center gap-2 group"
                  href="#signature-experience"
                >
                  <span>Explore Our Café</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>

                <a
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-primary-container text-tertiary font-label-caps text-xs uppercase tracking-widest shadow-lg hover:bg-secondary-container hover:text-secondary-fixed transition-all flex items-center gap-2"
                  href="#featured-products"
                >
                  <span className="material-symbols-outlined text-sm text-tertiary">local_florist</span>
                  <span>Shop Bouquets</span>
                </a>

                <button
                  className="px-5 sm:px-6 py-3.5 sm:py-4 text-on-surface-variant hover:text-tertiary font-label-caps text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
                  onClick={onNavigateToReserve}
                  type="button"
                >
                  <span className="material-symbols-outlined text-base">calendar_month</span>
                  <span>Reserve High Tea</span>
                </button>
              </div>

              {/* Editorial Credential Badges */}
              <div className="pt-6 sm:pt-8 flex items-center gap-6 sm:gap-8 text-on-surface-variant">
                <div className="flex flex-col">
                  <span className="font-headline-sm text-xl sm:text-2xl text-tertiary font-semibold">100%</span>
                  <span className="font-label-caps text-[10px] uppercase text-on-surface-variant tracking-wider">
                    Arabica Single Origin
                  </span>
                </div>
                <div className="h-8 w-px bg-surface-container-highest" />
                <div className="flex flex-col">
                  <span className="font-headline-sm text-xl sm:text-2xl text-tertiary font-semibold">06:00</span>
                  <span className="font-label-caps text-[10px] uppercase text-on-surface-variant tracking-wider">
                    Daily Floral Harvest
                  </span>
                </div>
                <div className="h-8 w-px bg-surface-container-highest" />
                <div className="flex flex-col">
                  <span className="font-headline-sm text-xl sm:text-2xl text-tertiary font-semibold">4.9 ★</span>
                  <span className="font-label-caps text-[10px] uppercase text-on-surface-variant tracking-wider">
                    Salon Connoisseurs
                  </span>
                </div>
              </div>
            </div>

            {/* Right Staged Imagery (5 cols) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl shadow-2xl bg-surface-container">
                <img
                  alt="Bloom and Brew Parisian Table with Coffee and Antique Floral Arrangement"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNI2huhGs99Xb2Qt7RRcouAP5kUFDwiSWKheiMOtllagSveltMmJDokJAlGBLgFvscPnRuI7L4k-2JpZ-DRHKpCZmo1fAjU8Mf-fxKVSahKh95oNI7LzRdtzgeFhcSFhUCAGfKicXNQeDlvCRn846bbiZNP_uGYlJzjmecwpUuXzVm5dt6WLkGiOW2yzosuZS2tdze-_df7mRx-hRGoEUArhA74K6RCiyz7-iXQA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/20 to-transparent" />

                {/* Floating Salon Note Plaque */}
                <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-surface-container-high/90 backdrop-blur-md rounded shadow-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-label-caps text-[10px] uppercase text-tertiary tracking-widest block mb-1">
                        Morning Salon Offering
                      </span>
                      <p className="font-title-editorial text-sm sm:text-base text-on-surface">
                        Antique Brass Urn with Crimson Garden Roses
                      </p>
                      <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                        Paired with Artisanal Ethiopian Yirgacheffe Flat White
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-tertiary text-2xl">local_cafe</span>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Corner Seal */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-primary-container text-tertiary flex items-center justify-center shadow-lg p-2 text-center pointer-events-none">
                <span className="font-label-caps text-[9px] uppercase tracking-tighter leading-tight font-bold">
                  Paris • 1892 • Atelier
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="w-full bg-surface-container-low py-4 shadow-sm border-t border-tertiary/10">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex items-center justify-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors">
                <span className="material-symbols-outlined text-tertiary text-lg">coffee_maker</span>
                <span className="font-label-caps text-[11px] uppercase tracking-wider">
                  Single-Origin Specialty Roasts
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors">
                <span className="material-symbols-outlined text-tertiary text-lg">spa</span>
                <span className="font-label-caps text-[11px] uppercase tracking-wider">
                  Fresh Parisian Morning Harvests
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors">
                <span className="material-symbols-outlined text-tertiary text-lg">redeem</span>
                <span className="font-label-caps text-[11px] uppercase tracking-wider">
                  Curated Luxury Hampers
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-on-surface-variant hover:text-tertiary transition-colors">
                <span className="material-symbols-outlined text-tertiary text-lg">deck</span>
                <span className="font-label-caps text-[11px] uppercase tracking-wider">
                  Heated Glass Conservatory
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE EXPERIENCE */}
      <section className="py-20 bg-surface" id="signature-experience">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
              Two Crafts, One Sanctuary
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl text-on-surface">
              A Sensory Union of Coffee &amp; Floristry
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              Every detail is calibrated to celebrate artisanal mindfulness. Savor our slow-dripped
              single-origin pour-overs enveloped in the sweet aroma of heirloom flowers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-surface-container rounded-xl p-8 flex flex-col justify-between border border-tertiary/10 hover:border-tertiary/30 transition-all group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary-container text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">local_cafe</span>
                </div>
                <h3 className="font-headline-sm text-xl text-on-surface group-hover:text-tertiary transition-colors">
                  The Coffee Atelier
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  Direct-trade beans micro-roasted weekly in small 5kg batches. Featuring custom
                  pour-overs, precision siphon brews, and espresso infused with natural botanical
                  extracts.
                </p>
              </div>
              <ul className="pt-6 space-y-2 border-t border-tertiary/10 font-body-sm text-xs text-on-surface-variant mt-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-base">check</span>
                  Ethiopian Yirgacheffe &amp; Panama Geisha
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-base">check</span>
                  Table-side pour-over ceremony
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-base">check</span>
                  Botanical rose &amp; vanilla infusions
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-surface-container rounded-xl p-8 flex flex-col justify-between border border-tertiary/10 hover:border-tertiary/30 transition-all group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary-container text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">yard</span>
                </div>
                <h3 className="font-headline-sm text-xl text-on-surface group-hover:text-tertiary transition-colors">
                  Haute Floral Boutique
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  Morning-cut Dutch peonies, Ecuadorian garden roses, and wild eucalyptus arranged
                  in Parisian hand-tied style. Custom luxury presentation boxes and antique brass urns.
                </p>
              </div>
              <ul className="pt-6 space-y-2 border-t border-tertiary/10 font-body-sm text-xs text-on-surface-variant mt-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-base">check</span>
                  Air-flown Dutch &amp; South American harvests
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-base">check</span>
                  Zero-plastic luxury linen and parchment wrap
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-base">check</span>
                  Personalized calligraphy message cards
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-surface-container rounded-xl p-8 flex flex-col justify-between border border-tertiary/10 hover:border-tertiary/30 transition-all group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary-container text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">wb_twilight</span>
                </div>
                <h3 className="font-headline-sm text-xl text-on-surface group-hover:text-tertiary transition-colors">
                  The Conservatory Salon
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  A high-ceilinged Victorian glasshouse orangerie draped in jasmine foliage. Enjoy
                  our decadent 3-tier High Tea service, candlelit booths, and weekend live harp.
                </p>
              </div>
              <ul className="pt-6 space-y-2 border-t border-tertiary/10 font-body-sm text-xs text-on-surface-variant mt-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-base">check</span>
                  Artisanal pâtisserie and savory tartlets
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-base">check</span>
                  Dedicated Coffee &amp; Tea Sommelier
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-base">check</span>
                  Secluded velvet banquettes &amp; veranda braziers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS & CURATIONS */}
      <section className="py-20 bg-surface-container-lowest" id="featured-products">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
                Seasonal Salon Collection
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl text-on-surface mt-1">
                Curated Atelier Creations
              </h2>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 max-w-xl">
                Artisanal coffees crafted at order, hand-tied botanical bouquets, and bespoke luxury gift hampers.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface-container rounded-lg self-start md:self-auto">
              <button
                className={`px-4 py-2 rounded font-label-caps text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-tertiary text-surface-container-lowest font-bold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
                onClick={() => setSelectedCategory('all')}
                type="button"
              >
                All Curations
              </button>
              <button
                className={`px-4 py-2 rounded font-label-caps text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === 'cafe'
                    ? 'bg-tertiary text-surface-container-lowest font-bold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
                onClick={() => setSelectedCategory('cafe')}
                type="button"
              >
                Café Specials
              </button>
              <button
                className={`px-4 py-2 rounded font-label-caps text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === 'floral'
                    ? 'bg-tertiary text-surface-container-lowest font-bold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
                onClick={() => setSelectedCategory('floral')}
                type="button"
              >
                Floral Bouquets
              </button>
              <button
                className={`px-4 py-2 rounded font-label-caps text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === 'hampers'
                    ? 'bg-tertiary text-surface-container-lowest font-bold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
                onClick={() => setSelectedCategory('hampers')}
                type="button"
              >
                Gift Hampers
              </button>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-surface-container rounded-xl overflow-hidden shadow-lg flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl border border-tertiary/10"
              >
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-high">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={product.image}
                      alt={product.alt || product.title}
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-surface-container-lowest/80 backdrop-blur-md rounded font-label-caps text-[10px] text-tertiary uppercase tracking-wider">
                      {product.badge}
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest block">
                      {product.subTitle}
                    </span>
                    <h3 className="font-headline-sm text-base sm:text-lg text-on-surface mt-1 group-hover:text-tertiary transition-colors">
                      {product.title}
                    </h3>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between border-t border-tertiary/10 mt-2">
                  <div>
                    <span className="font-headline-sm text-lg text-tertiary font-semibold">
                      {product.priceFormatted}
                    </span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant block">
                      {product.unit}
                    </span>
                  </div>
                  <button
                    aria-label="Add to cart"
                    className="p-3 bg-primary-container text-tertiary hover:bg-secondary-container hover:text-secondary-fixed rounded shadow-sm transition-colors flex items-center justify-center"
                    onClick={() => onAddToCart(product)}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR STORY (EDITORIAL SPLIT SCREEN) */}
      <section className="py-20 bg-surface relative overflow-hidden" id="our-story">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image Composition (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-2xl bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Founders in Parisian courtyard atelier"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLhRgvpShtphUMeuhOb6YsVV5fjzQsrFUe6gv3q1fS5mAFuUUBsLOpATOEWU0u5_haR3G1-52-0On1VlAw61EXhFTh2Vqyf59HId5FWyXwq1B63NyJw0Z5YBqKGTPdOr5L8UtlYE3L-DA9rvetoyauoPrpOngkxZfyWLvIpLpzizdKsrBnfLP-P3Pp3WymXadMh3dZ_7mK_GCWckT7WrSYlew8qYhtXxyfg3gXZQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
              </div>

              {/* Overlapping Card */}
              <div className="absolute -bottom-8 -right-6 w-3/4 p-6 bg-surface-container-high rounded-lg shadow-2xl hidden sm:block border border-tertiary/20">
                <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block">
                  Philosophie de Salon
                </span>
                <p className="font-headline-sm text-sm text-on-surface mt-1 italic">
                  "We believe the steam from fresh espresso and the fragrance of opening petals speak
                  the very same dialect of gratitude."
                </p>
                <span className="font-label-caps text-[10px] text-on-surface-variant uppercase mt-2 block">
                  — Henri &amp; Camille Delacroix, Founders
                </span>
              </div>
            </div>

            {/* Right Narrative (7 cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-6 lg:pl-6 mt-12 lg:mt-0">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-surface-container rounded-full">
                <span className="material-symbols-outlined text-[15px] text-tertiary">history_edu</span>
                <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
                  Heritage &amp; Provenance
                </span>
              </div>

              <h2 className="font-display-hero text-3xl sm:text-4xl text-on-surface leading-tight">
                The Harmony of Roasted Aromas &amp; Fresh Petals
              </h2>

              <div className="space-y-4 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                <p>
                  Born from a quiet corner of the Marais in Paris and reborn in the verdant heart of Mumbai,{' '}
                  <strong className="text-on-surface font-medium">BLOOM &amp; BREW</strong> was founded on a
                  simple revelation: both the master barista and the haute floriste are artisans of
                  fleeting perfection.
                </p>
                <p>
                  Each morning at 05:30 AM, while our head roaster calibrates the water temperature and
                  dial-in profiles of microlot Ethiopian beans, our floral team gathers stems fresh from
                  cold-chain arrivals. We do not place flowers in our café as afterthoughts; our café exists
                  inside an operating botanical atelier.
                </p>
                <p>
                  When you sit by our zinc counters or beneath our jasmine arbor, the warmth of dark
                  chocolate notes interlaces naturally with the cool, green sweetness of opening peonies.
                  Here, time loses its urgency.
                </p>
              </div>

              {/* Feature Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-surface-container-low rounded flex items-start gap-3 border border-tertiary/10">
                  <span className="material-symbols-outlined text-tertiary text-xl flex-shrink-0 mt-0.5">
                    nest_eco_leaf
                  </span>
                  <div>
                    <h4 className="font-title-editorial text-sm text-on-surface">Zero-Plastic Floristry</h4>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                      Biodegradable twine, linen wraps, and reusable brass urns exclusively.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-surface-container-low rounded flex items-start gap-3 border border-tertiary/10">
                  <span className="material-symbols-outlined text-tertiary text-xl flex-shrink-0 mt-0.5">
                    verified
                  </span>
                  <div>
                    <h4 className="font-title-editorial text-sm text-on-surface">Direct-Trade Coffee</h4>
                    <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                      Sourced ethically from multi-generational family estates in Coorg and Yirgacheffe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPECIAL MOMENTS */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
              Celebrate In The Atelier
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl text-on-surface">
              Crafted For Life's Special Moments
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              From intimate morning milestones to private candlelit salon takeovers, we transform
              celebrations into sensory poetry.
            </p>
          </div>

          {/* Moments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Moment 1 */}
            <div className="bg-surface-container p-6 rounded-xl shadow-lg flex flex-col justify-between hover:bg-surface-container-high transition-all group border border-tertiary/10">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary-container text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">cake</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-base sm:text-lg text-on-surface group-hover:text-tertiary transition-colors">
                    Birthday Bouquets &amp; Sweets
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-2">
                    Bespoke pastel bloom boxes accompanied by fresh morning macarons and hand-piped celebratory cakes.
                  </p>
                </div>
              </div>
              <button
                className="mt-6 font-label-caps text-[11px] text-tertiary uppercase tracking-wider text-left flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                onClick={() => showToast('Birthday Florals & Patisserie Inquiry Sent', 'Our atelier coordinator will contact you.')}
                type="button"
              >
                <span>Inquire Package</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>

            {/* Moment 2 */}
            <div className="bg-surface-container p-6 rounded-xl shadow-lg flex flex-col justify-between hover:bg-surface-container-high transition-all group border border-tertiary/10">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary-container text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-base sm:text-lg text-on-surface group-hover:text-tertiary transition-colors">
                    Anniversary Candlelight
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-2">
                    A private salon alcove draped in velvety garden roses, flickering beeswax candelabras, and signature tasting flights.
                  </p>
                </div>
              </div>
              <button
                className="mt-6 font-label-caps text-[11px] text-tertiary uppercase tracking-wider text-left flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                onClick={() => showToast('Anniversary Candlelight Package', 'Secluded booth reservations initialized.')}
                type="button"
              >
                <span>Inquire Package</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>

            {/* Moment 3 */}
            <div className="bg-surface-container p-6 rounded-xl shadow-lg flex flex-col justify-between hover:bg-surface-container-high transition-all group border border-tertiary/10">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary-container text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">local_cafe</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-base sm:text-lg text-on-surface group-hover:text-tertiary transition-colors">
                    High Tea &amp; Dates
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-2">
                    Three-tiered fine bone china service featuring savory brioche, floral petit fours, and single-origin pour-overs.
                  </p>
                </div>
              </div>
              <button
                className="mt-6 font-label-caps text-[11px] text-tertiary uppercase tracking-wider text-left flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                onClick={onNavigateToReserve}
                type="button"
              >
                <span>Book Table</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>

            {/* Moment 4 */}
            <div className="bg-surface-container p-6 rounded-xl shadow-lg flex flex-col justify-between hover:bg-surface-container-high transition-all group border border-tertiary/10">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary-container text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">deck</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-base sm:text-lg text-on-surface group-hover:text-tertiary transition-colors">
                    Garden Soirées
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-2">
                    Exclusive buyout of our outdoor glass conservatory for up to 25 esteemed guests with bespoke sommelier bar.
                  </p>
                </div>
              </div>
              <button
                className="mt-6 font-label-caps text-[11px] text-tertiary uppercase tracking-wider text-left flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                onClick={() => showToast('Conservatory Garden Buyout', 'Inquiry routed to Private Events Concierge.')}
                type="button"
              >
                <span>Inquire Buyout</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>

            {/* Moment 5 */}
            <div className="bg-surface-container p-6 rounded-xl shadow-lg flex flex-col justify-between hover:bg-surface-container-high transition-all group border border-tertiary/10">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary-container text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">featured_seasonal_and_gifts</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-base sm:text-lg text-on-surface group-hover:text-tertiary transition-colors">
                    Corporate Gifting
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-2">
                    Custom monogrammed wooden caskets with roasted bean canisters, brass drippers, and preserved botanical urns.
                  </p>
                </div>
              </div>
              <button
                className="mt-6 font-label-caps text-[11px] text-tertiary uppercase tracking-wider text-left flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                onClick={() => showToast('Corporate Trunk Concierge', 'Bespoke corporate catalogue sent to your email.')}
                type="button"
              >
                <span>Corporate Orders</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Luxury CTA Banner: Custom Hamper Builder */}
          <div className="mt-12 bg-primary-container rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-tertiary/30">
            <div className="relative z-10 max-w-xl space-y-3">
              <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
                Bespoke Atelier Service
              </span>
              <h3 className="font-headline-lg text-2xl sm:text-3xl text-on-surface">
                Design Your Custom Botanical &amp; Coffee Trunk
              </h3>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
                Choose your recipient's favorite roast, preferred floral palette, calligraphed letter seal, and velvet ribbon finish.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <button
                className="px-8 py-4 bg-tertiary text-surface-container-lowest font-label-caps text-xs uppercase tracking-widest shadow-xl hover:bg-tertiary-fixed transition-all flex items-center gap-2"
                onClick={() => showToast('Bespoke Trunk Builder Initiated', 'Please select custom roast & floral pairings in your cart.')}
                type="button"
              >
                <span className="material-symbols-outlined text-lg">auto_awesome</span>
                <span>Create Your Perfect Gift</span>
              </button>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-tertiary/10 blur-[90px] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 6. GALLERY (INSTAGRAM & ATELIER EXHIBITION) */}
      <section className="py-20 bg-surface" id="salon-gallery">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
                Visual Diary
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl text-on-surface mt-1">
                Moments at the Atelier
              </h2>
              <p className="font-body-md text-sm text-on-surface-variant mt-2">
                A photographic glimpse into our everyday harmony of steam, porcelain, and petals.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full text-on-surface hover:text-tertiary transition-colors self-start md:self-auto shadow-sm border border-tertiary/20"
              href="https://instagram.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-tertiary text-base">photo_camera</span>
              <span className="font-label-caps text-xs uppercase tracking-wider">
                @BloomAndBrewAtelier
              </span>
            </a>
          </div>

          {/* Masonry-Style Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="relative group overflow-hidden rounded-xl bg-surface-container aspect-square shadow-lg">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Latte art pour"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaaVzEf2Ra-TLlgb0ebWqCSBNz5Byji3_xVhzkQH1auWtHs12-UbSo2K04VPcvWYpuvxdQ57EAGykQ6s6wy9eWayWeLcDgcWvnr_mxt7YiabrI6oUTId99J73gJ7AOR-ZDojAirfSWCSUGhi2R_No29EKaq2Nf9wYb3YVNBB8BD4Y3WvcAizDJKRLkdG8nuwBhZavW9XWa2_gWoCfN48_hmCC4PBMaVEd7HcA5Hw"
              />
              <div className="absolute inset-0 bg-surface-container-lowest/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest">
                  Precision Pour
                </span>
                <p className="font-headline-sm text-sm text-on-surface mt-1">Geisha Roast Swan Rosetta</p>
                <span className="font-body-sm text-[11px] text-on-surface-variant mt-1">
                  #EspressoArt #BloomAndBrew
                </span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative group overflow-hidden rounded-xl bg-surface-container aspect-square shadow-lg">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Florist hands trimming peonies"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy_5qn8R13CGG4h13QVaUWDBJ7WaZhXq53c-p6scgcXYAHeJw9gfXubiBvSPNSpOoHzuigaRdm6c5VvaXOQ-N1U_6PyaqRzcKNh9v8Fjvcps_stDuIIM3UjgPNRiyPL40qPjQPYCwaaV3IJqVpXb6p3JS0LNz2f93jlrr2jMSOxj_oFjozb481DufuLntQt6lHjRbjgqbEitm1I042Xgb-77w-rKUrf4Y66ZUhAg"
              />
              <div className="absolute inset-0 bg-surface-container-lowest/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest">
                  Daily Harvest
                </span>
                <p className="font-headline-sm text-sm text-on-surface mt-1">
                  Stem Selection for The Montmartre Bouquet
                </p>
                <span className="font-body-sm text-[11px] text-on-surface-variant mt-1">
                  #HauteFloristry #PeonySeason
                </span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative group overflow-hidden rounded-xl bg-surface-container aspect-square shadow-lg">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Twilight candlelit table"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl7sLJKAhqMkDtV0QJe7_OcC0H_goROZJ-cHOWzYVhQUh5msPVSJ4MgalF6ow05a5hdzz_3FoeV4ejlQT3VoBpFn37xaZfOu6W5K0ahAOPMts4oO0WGL_vFRTheJhQMrf6YHmQRRdP02Rx_NFgA5ArWaOj1kmRWkTQZqCs7IIUj6L5WKvzIqqeIqD6kKzzr0uvSDXdQt4dQnGQHlvRsMJbdhL_-NRWieUgrc8vxA"
              />
              <div className="absolute inset-0 bg-surface-container-lowest/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest">
                  Twilight Salon
                </span>
                <p className="font-headline-sm text-sm text-on-surface mt-1">
                  Candlelight &amp; Botanical Digestifs
                </p>
                <span className="font-body-sm text-[11px] text-on-surface-variant mt-1">
                  #EveningSalon #ParisianNights
                </span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="relative group overflow-hidden rounded-xl bg-surface-container aspect-square shadow-lg">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Fresh pain au chocolat"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSfgB-K388n10jLqN6Ueg0X-Kx33rHN_w76kJHymp5qtoIAvm7buxKJ59n6ackBTYTxSxQBr4nWP_ZpDgzAu3wyUEYGU-0N8UlcH_Z6tk4jkEVbSN4qmJY4Fuq2ydx_BOvYd0exY26nwBR2XvJcOSGbpRrivllm2XDYF1uRp5vsMSNMYEZsN3CBgOOhIvpO9QM8z-FKxORY4IX0ZDSV5R0nLWSXC52twh9RcI1Zw"
              />
              <div className="absolute inset-0 bg-surface-container-lowest/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest">
                  07:00 Fresh Bake
                </span>
                <p className="font-headline-sm text-sm text-on-surface mt-1">Golden Valrhona Feuilletés</p>
                <span className="font-body-sm text-[11px] text-on-surface-variant mt-1">
                  #ArtisanCroissant #Viennoiserie
                </span>
              </div>
            </div>

            {/* Item 5 */}
            <div className="relative group overflow-hidden rounded-xl bg-surface-container aspect-square shadow-lg">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Garden conservatory high tea"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrDXRfN8N4eMLBMz5nr3ul2ADeM_zwMFQB4scimnbRdhiqYyTIFMpAFjMx6zfmEp5YyC5Xjlxv5VgD2av8ACydBkaMLEOXSAf6Q3gnCqZPtel5yJlojgVR3CUWNZn5iIPo2BKEVTbSxbz3mP9MvRIldq-VVZkHd1tjev-WALbQqQ8vFvRe_1xh0VevVKbwb7jQ-0e36SJtz6ZwvCzzYQdR0Kib0AVRYUWoGe-FIg"
              />
              <div className="absolute inset-0 bg-surface-container-lowest/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest">
                  Garden Conservatory
                </span>
                <p className="font-headline-sm text-sm text-on-surface mt-1">
                  Afternoon Tea Tasting Salon
                </p>
                <span className="font-body-sm text-[11px] text-on-surface-variant mt-1">
                  #HighTea #BotanicalGarden
                </span>
              </div>
            </div>

            {/* Item 6 */}
            <div className="relative group overflow-hidden rounded-xl bg-surface-container aspect-square shadow-lg">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Patron holding rose bouquet"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVgDuj-URajY-Z4y4EMjVDtj5SV1vahj9ZuUz1NYBcXNvo6DFOtoHBV6qZCQa0vZIj5HvmPJN6IWsyAFnYyer7Bg_n1fmJJo1sfDTbiFbdOmWdkoaH9bHhL9z_eJJLjAq3hrPd0wImNCOp_rAiRaJfpI0-ArcfafWNasbkw2bPdBTMIaIb5bIYry4ruNPcvG2sjgWRW4BoFupIzaNJ7_uxqqluoPJE3JgqZpuZPQ"
              />
              <div className="absolute inset-0 bg-surface-container-lowest/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest">
                  Patron Stories
                </span>
                <p className="font-headline-sm text-sm text-on-surface mt-1">Anniversary Surprises at Table 4</p>
                <span className="font-body-sm text-[11px] text-on-surface-variant mt-1">
                  #BespokeMoments #BloomAndBrewPatrons
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
              Words from Connoisseurs
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl text-on-surface">
              Praise from the Salon
            </h2>
            <p className="font-body-md text-sm text-on-surface-variant">
              Read authentic critiques and personal recollections from patrons who share our reverence for exquisite craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-surface-container p-8 rounded-xl shadow-xl flex flex-col justify-between relative group border border-tertiary/10">
              <div className="space-y-4">
                <div className="flex items-center text-tertiary gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base">star</span>
                  ))}
                </div>
                <p className="font-headline-sm text-sm sm:text-base text-on-surface italic leading-relaxed">
                  "An extraordinary sensory sanctuary. Ordering the Velvet Rose Cappuccino while watching the floral team compose centerpieces transported me straight to the Left Bank. The coffee was genuinely flawless."
                </p>
              </div>
              <div className="pt-6 border-t border-tertiary/10 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-title-editorial text-sm text-on-surface">Ananya Singhania</h4>
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">
                    Lifestyle Columnist • Mumbai
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-surface-container-highest text-tertiary font-label-caps text-[9px] uppercase tracking-wider rounded">
                  Verified Patron
                </span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-surface-container p-8 rounded-xl shadow-xl flex flex-col justify-between relative group border border-tertiary/10">
              <div className="space-y-4">
                <div className="flex items-center text-tertiary gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base">star</span>
                  ))}
                </div>
                <p className="font-headline-sm text-sm sm:text-base text-on-surface italic leading-relaxed">
                  "For our tenth wedding anniversary, the custom hamper and table booking exceeded every dream. The 50 Crimson Garden Roses lasted over twelve days looking regal. Unmatched floristry."
                </p>
              </div>
              <div className="pt-6 border-t border-tertiary/10 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-title-editorial text-sm text-on-surface">Rohit &amp; Meera Varma</h4>
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">
                    Salon Members Since 2023
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-surface-container-highest text-tertiary font-label-caps text-[9px] uppercase tracking-wider rounded">
                  Private Dining
                </span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-surface-container p-8 rounded-xl shadow-xl flex flex-col justify-between relative group border border-tertiary/10">
              <div className="space-y-4">
                <div className="flex items-center text-tertiary gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base">star</span>
                  ))}
                </div>
                <p className="font-headline-sm text-sm sm:text-base text-on-surface italic leading-relaxed">
                  "The single-origin Ethiopian pour-over has few peers across the continent. When combined with their freshly laminated Valrhona chocolate croissants, Bloom &amp; Brew is simply peerless."
                </p>
              </div>
              <div className="pt-6 border-t border-tertiary/10 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-title-editorial text-sm text-on-surface">Chef Julian Mercier</h4>
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">
                    Gastronomy Critic
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-surface-container-highest text-tertiary font-label-caps text-[9px] uppercase tracking-wider rounded">
                  Culinary Review
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LUXURY RESERVATION PROMPT BANNER */}
      <section className="py-16 bg-surface border-t border-tertiary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-16 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
              Private Salon Reservations
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl text-on-surface">
              Reserve Your Conservatory Sanctuary
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              Table reservations under our vaulted glass dome include complimentary garden posies and
              personalized coffee sommelier service.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                className="px-8 py-4 bg-tertiary text-surface-container-lowest font-label-caps text-xs uppercase tracking-widest shadow-xl hover:bg-tertiary-fixed transition-all"
                onClick={onNavigateToReserve}
                type="button"
              >
                Select Conservatory Table
              </button>
              <button
                className="px-6 py-4 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-caps text-xs uppercase tracking-wider transition-colors border border-tertiary/20"
                onClick={onOpenReservationModal}
                type="button"
              >
                Quick Booking Dialog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
