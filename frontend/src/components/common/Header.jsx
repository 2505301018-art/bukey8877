import React, { useState } from 'react';

export default function Header({ 
  currentPage, 
  onNavigate, 
  cartCount = 2, 
  onOpenCart, 
  onOpenReservationModal 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: 'home', hash: '' },
    { label: 'Reserve Table', page: 'reserve', hash: '' },
    { label: 'VIP Pass', page: 'confirmation', hash: '' },
    { label: 'Our Story', page: 'home', hash: '#our-story' },
    { label: 'Café Menu', page: 'home', hash: '#signature-experience' },
    { label: 'Flower Boutique', page: 'home', hash: '#featured-products' },
    { label: 'Shop', page: 'home', hash: '#featured-products' },
    { label: 'Gallery', page: 'home', hash: '#salon-gallery' },
    { label: 'Contact', page: 'home', hash: '#footer-contact' },
  ];

  const handleLinkClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (item.page && item.page !== currentPage) {
      onNavigate(item.page);
      if (item.hash) {
        setTimeout(() => {
          const el = document.querySelector(item.hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (item.hash) {
      const el = document.querySelector(item.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-primary-container/95 backdrop-blur-md border-b border-tertiary/20">
      {/* Top Announcement Bar */}
      <div className="bg-surface-container-lowest text-tertiary border-b border-tertiary/20 py-1.5 px-4 md:px-16 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs">
          <span className="material-symbols-outlined text-[14px] text-tertiary">spa</span>
          <p className="font-label-caps text-[11px] uppercase tracking-widest text-tertiary truncate">
            Complimentary Parisian Floral Gift Box on all orders above ₹2,499 | Reserve Your Garden Table for High Tea
          </p>
          <span className="material-symbols-outlined text-[14px] text-tertiary hidden sm:inline">spa</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-7xl mx-auto px-4 md:px-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <img
            alt="Bloom & Brew Emblem"
            className="h-8 w-auto object-contain cursor-pointer"
            onClick={() => onNavigate('home')}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB5HM8hMPi0PqBmd5UyFvGheoL-4dfPyGD1VHAL_vWd0EDCY3wh81UHbWS8vOzF0akqfr3V2o8P1NKDvzt5Y9uPLvEMAyOEDPwnKmoWuc7102qc6PwjJc6lppBnvxevbH7kiRQn_G4F10Y7LoFKxV2fAmlnEWKc0_-wtBzOQDP3vO1W8AA8LqvHWkPqUtVh3Gb0voqUFL7D1NbPERIiRrpZ_nIvaKDDPPmlhJqIg"
          />
          <button 
            type="button" 
            onClick={() => onNavigate('home')} 
            className="flex flex-col text-left focus:outline-none"
          >
            <span className="font-headline-sm text-lg sm:text-xl tracking-tight text-on-surface font-headline-sm">
              BLOOM &amp; BREW
            </span>
            <span className="font-label-caps text-[10px] sm:text-xs tracking-widest text-tertiary uppercase">
              BOTANICAL CAFÉ &amp; ATELIER
            </span>
          </button>
        </div>

        {/* Desktop Links */}
        <nav className="hidden xl:flex items-center space-x-5">
          {navLinks.map((link, idx) => {
            const isActive = currentPage === link.page && !link.hash;
            return (
              <a
                key={idx}
                href={link.hash || '#'}
                onClick={(e) => handleLinkClick(e, link)}
                className={`font-label-md text-xs uppercase tracking-wider py-1 transition-colors ${
                  isActive
                    ? 'text-tertiary border-b border-tertiary font-medium'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons & Book Table */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Page Nav Pill for Demo Switcher */}
          <div className="hidden lg:flex items-center bg-surface-container rounded-full p-1 border border-tertiary/20 text-[10px] font-label-caps">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                currentPage === 'home'
                  ? 'bg-tertiary text-surface-container-lowest font-bold shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Flagship
            </button>
            <button
              type="button"
              onClick={() => onNavigate('reserve')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                currentPage === 'reserve'
                  ? 'bg-tertiary text-surface-container-lowest font-bold shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Seating
            </button>
            <button
              type="button"
              onClick={() => onNavigate('confirmation')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                currentPage === 'confirmation'
                  ? 'bg-tertiary text-surface-container-lowest font-bold shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              VIP Pass
            </button>
          </div>

          <button
            aria-label="Search Atelier"
            className="p-2 text-on-surface-variant hover:text-tertiary transition-colors flex items-center justify-center"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px] sm:text-[22px]">search</span>
          </button>

          <button
            aria-label="Shopping Cart"
            className="relative p-2 text-on-surface-variant hover:text-tertiary transition-colors flex items-center justify-center"
            onClick={onOpenCart}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px] sm:text-[22px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 h-4 min-w-[16px] px-1 rounded-full bg-tertiary text-surface-container-lowest font-label-caps text-[10px] font-bold flex items-center justify-center leading-none">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-tertiary/60 bg-primary-container text-tertiary font-label-caps text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(226,195,131,0.2)] hover:bg-secondary-container hover:text-secondary-fixed transition-all"
            onClick={() => onNavigate('reserve')}
            type="button"
          >
            Book a Table
          </button>

          <div 
            title="Lady Evelyn Vance (VIP Patron)" 
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1 border border-tertiary/40 cursor-pointer"
            onClick={() => onNavigate('confirmation')}
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="xl:hidden p-2 text-on-surface-variant hover:text-tertiary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-high border-b border-tertiary/30 px-6 py-4 space-y-3">
          <div className="grid grid-cols-3 gap-2 pb-3 border-b border-tertiary/10 font-label-caps text-[11px]">
            <button
              type="button"
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className={`p-2 rounded text-center ${currentPage === 'home' ? 'bg-tertiary text-surface-container-lowest font-bold' : 'bg-surface-container text-on-surface'}`}
            >
              Flagship Home
            </button>
            <button
              type="button"
              onClick={() => { onNavigate('reserve'); setMobileMenuOpen(false); }}
              className={`p-2 rounded text-center ${currentPage === 'reserve' ? 'bg-tertiary text-surface-container-lowest font-bold' : 'bg-surface-container text-on-surface'}`}
            >
              Reserve Table
            </button>
            <button
              type="button"
              onClick={() => { onNavigate('confirmation'); setMobileMenuOpen(false); }}
              className={`p-2 rounded text-center ${currentPage === 'confirmation' ? 'bg-tertiary text-surface-container-lowest font-bold' : 'bg-surface-container text-on-surface'}`}
            >
              VIP Pass
            </button>
          </div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.hash || '#'}
                onClick={(e) => handleLinkClick(e, link)}
                className="py-1 text-sm font-label-md uppercase tracking-wider text-on-surface hover:text-tertiary"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => { onNavigate('reserve'); setMobileMenuOpen(false); }}
              className="w-full py-2.5 bg-primary-container border border-tertiary text-tertiary font-label-caps text-xs uppercase tracking-widest hover:bg-secondary-container hover:text-secondary-fixed transition-colors"
            >
              Reserve Conservatory Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

