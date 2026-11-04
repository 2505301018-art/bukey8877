import React, { useState } from 'react';

export default function Footer({ onNavigate }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer id="footer-contact" className="w-full bg-surface-container-lowest border-t border-tertiary/20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <span className="font-headline-sm text-xl text-on-surface font-headline-sm block">
              BLOOM &amp; BREW
            </span>
            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
              An artisanal confluence of heritage floristry and Parisian coffee culture nestled in tranquil botanical settings.
            </p>
            <div className="flex items-center gap-2 text-tertiary pt-2">
              <span className="material-symbols-outlined text-[20px]">verified</span>
              <span className="font-label-caps text-[11px] tracking-widest uppercase">
                Certified Botanical Atelier
              </span>
            </div>
          </div>

          {/* Column 2: Salons Directory */}
          <div className="space-y-3">
            <h4 className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
              Atelier Salons
            </h4>
            <ul className="space-y-2 font-body-sm text-sm text-on-surface-variant">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-tertiary transition-colors text-left"
                >
                  Artisanal Espresso &amp; Brews
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-tertiary transition-colors text-left"
                >
                  Haute Floral Creations
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('reserve')}
                  className="hover:text-tertiary transition-colors text-left text-tertiary font-medium"
                >
                  High Tea Conservatory Bookings →
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('confirmation')}
                  className="hover:text-tertiary transition-colors text-left"
                >
                  Digital Concierge Pass
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-tertiary transition-colors text-left"
                >
                  Bespoke Gift Boxes &amp; Hampers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Address */}
          <div className="space-y-3">
            <h4 className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
              Boutique &amp; Hours
            </h4>
            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
              42 Rue de l'Atelier, Kensington Arcade
              <br />
              Mumbai, Maharashtra 400050
            </p>
            <p className="font-body-sm text-sm text-tertiary pt-2">
              Tuesday – Sunday: 8:00 AM – 10:00 PM
              <br />
              <span className="text-on-surface-variant text-xs">
                Mondays: Reserved for Floral Harvest &amp; Roasting
              </span>
            </p>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
              The Botanical Gazette
            </h4>
            <p className="font-body-sm text-sm text-on-surface-variant">
              Receive notes on single-origin roasts and rare seasonal flower arrivals.
            </p>
            {subscribed ? (
              <div className="p-3 bg-secondary-container text-secondary-fixed text-xs rounded font-label-caps">
                Merci! You have been inscribed in the Salon Gazette.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="flex">
                  <input
                    className="w-full bg-surface-container border border-tertiary/30 px-3 py-2 text-on-surface font-body-sm text-sm placeholder-on-surface-variant/50 focus:outline-none focus:border-tertiary"
                    placeholder="Your email address"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <button
                    className="bg-primary-container px-4 text-tertiary border-y border-r border-tertiary font-label-caps text-xs uppercase hover:bg-secondary-container hover:text-secondary-fixed transition-colors"
                    type="submit"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-tertiary/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-on-surface-variant font-body-sm text-xs">
          <p>© 2025 Bloom &amp; Brew Botanical Café &amp; Atelier. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-tertiary transition-colors font-label-caps uppercase tracking-wider" href="#privacy">
              Privacy Policy
            </a>
            <a className="hover:text-tertiary transition-colors font-label-caps uppercase tracking-wider" href="#terms">
              Terms of Atelier
            </a>
            <button 
              type="button" 
              onClick={() => onNavigate('confirmation')}
              className="hover:text-tertiary transition-colors font-label-caps uppercase tracking-wider"
            >
              VIP Concierge
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

