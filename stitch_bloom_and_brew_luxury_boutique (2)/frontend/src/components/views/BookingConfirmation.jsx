import React, { useState } from 'react';

export default function BookingConfirmation({
  reservationState,
  onNavigateToHome,
  onNavigateToReserve,
  showToast
}) {
  const [copied, setCopied] = useState(false);
  const [rescheduleModalOpen, setRescheduleModalOpen] = useState(false);

  const refCode = reservationState.refCode || 'BNB-2024-PARIS-0842';
  const patron = reservationState.patronName || 'Lady Evelyn Vance';
  const guests = reservationState.guests || 2;
  const dateStr = reservationState.date || 'Today, 24 Oct';
  const timeSlot = reservationState.timeSlot || '02:30 PM';
  const table = reservationState.table || 'Table 03';
  const zoneTitle = reservationState.zoneTitle || 'The Grand Glasshouse Orangerie';
  const experienceName = reservationState.experience?.name || 'The Grand Glasshouse Orangerie High Tea Tasting';
  const depositPaid = reservationState.grandTotal || 5040;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(refCode);
    setCopied(true);
    showToast('Reference Code Copied', refCode);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col w-full text-on-surface">
      <section className="relative w-full overflow-hidden bg-surface py-8 md:py-12 -mt-28 pt-32">
        {/* Ambient Conservatory Glow Orbs */}
        <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary-container/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-tertiary/10 blur-[130px]" />

        <div className="max-w-6xl mx-auto px-4 md:px-16">
          {/* Breadcrumb & Status Monogram Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-tertiary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
              </div>
              <div>
                <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest block">
                  Atelier Salon Registry • Confirmation Ref. {refCode}
                </span>
                <span className="font-title-editorial text-base sm:text-lg text-on-surface">
                  {zoneTitle} Reservation
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/60 text-secondary-fixed text-xs font-label-caps uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                Guaranteed Table Reserved
              </span>
              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-tertiary transition-colors text-xs font-label-caps uppercase tracking-widest flex items-center gap-2 shadow-sm rounded border border-tertiary/20"
              >
                <span className="material-symbols-outlined text-sm">print</span>
                Folio Print
              </button>
            </div>
          </div>

          {/* Main Luxury Modal Card */}
          <div className="relative bg-surface-container-low rounded-2xl shadow-2xl overflow-hidden border border-tertiary/30">
            {/* Top Gilded Wax Seal & Monogram Banner */}
            <div className="relative px-6 md:px-10 pt-10 pb-8 text-center bg-gradient-to-b from-primary-container/40 via-surface-container to-surface-container-low overflow-hidden">
              {/* Background decorative SVG rosette */}
              <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
                <svg className="text-tertiary" fill="none" height="240" viewBox="0 0 600 240" width="600">
                  <path
                    d="M300 10 C340 50, 420 70, 580 70 M300 10 C260 50, 180 70, 20 70 M300 230 C340 190, 420 170, 580 170 M300 230 C260 190, 180 170, 20 170"
                    stroke="currentColor"
                    strokeDasharray="3 3"
                    strokeWidth="0.75"
                  />
                  <circle cx="300" cy="120" r="90" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="300" cy="120" r="75" stroke="currentColor" strokeDasharray="4 2" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Wax Seal Graphic */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-container via-surface-container-highest to-primary-container flex items-center justify-center shadow-xl mb-4 group cursor-pointer border border-tertiary/40">
                  <div className="absolute inset-1 rounded-full bg-surface-container-lowest/40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      spa
                    </span>
                  </div>
                  <span className="absolute -bottom-1 px-2 py-0.5 rounded-full bg-tertiary text-surface-container-lowest font-label-caps text-[9px] font-bold uppercase tracking-wider">
                    OFFICIAL
                  </span>
                </div>

                <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest mb-1.5">
                  RESERVATION CONFIRMED &amp; REGISTERED IN THE SALON REGISTRY
                </span>
                <h1 className="font-headline-lg text-3xl sm:text-4xl text-on-surface mb-3 tracking-tight font-serif">
                  Bienvenue, {patron}
                </h1>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                  Your midday botanical sanctuary has been secluded at Bloom &amp; Brew Parisian Atelier.
                  Your private table amidst fragrant climbing jasmine and Victorian glass cupolas awaits
                  your presence.
                </p>

                {/* Booking Reference Pill */}
                <div className="mt-5 inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-surface-container-highest shadow-md border border-tertiary/20">
                  <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider">
                    Booking Ref:
                  </span>
                  <span className="font-title-editorial text-sm sm:text-base text-tertiary font-semibold tracking-wider">
                    {refCode}
                  </span>
                  <button
                    className="text-on-surface-variant hover:text-tertiary transition-colors flex items-center p-1"
                    onClick={handleCopyCode}
                    title="Copy Reference Code"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                  </button>
                  {copied && (
                    <span className="font-label-caps text-[10px] text-secondary font-bold uppercase animate-pulse">
                      Copied
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Ticket & Details Body */}
            <div className="p-6 md:p-10 space-y-10">
              {/* The Digital Concierge Pass (VIP Boarding Ticket) */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container shadow-2xl border border-tertiary/30">
                {/* Decorative ticket notch top & bottom */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface-container-low hidden md:block border-r border-tertiary/20" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface-container-low hidden md:block border-l border-tertiary/20" />

                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left: Primary Ticket Body (8 cols) */}
                  <div className="lg:col-span-8 p-6 md:p-8 flex flex-col justify-between space-y-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-block px-2.5 py-1 rounded bg-primary-container text-tertiary font-label-caps text-[10px] uppercase tracking-widest mb-2 font-bold border border-tertiary/30">
                          Atelier VIP Concierge Pass • 03-DOME
                        </span>
                        <h2 className="font-headline-md text-xl sm:text-2xl text-on-surface font-serif">
                          The Parisian High Tea &amp; Floral Salon
                        </h2>
                      </div>
                      <div className="text-right">
                        <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider block">
                          Salon Section
                        </span>
                        <span className="font-title-editorial text-sm sm:text-base text-tertiary font-semibold">
                          Orangerie Dome
                        </span>
                      </div>
                    </div>

                    {/* Ticket Grid Specs */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 bg-surface-container-lowest/60 rounded-lg p-4 border border-tertiary/10">
                      <div>
                        <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">
                          Patron
                        </span>
                        <span className="font-body-md text-sm text-on-surface font-semibold block truncate">
                          {patron}
                        </span>
                        <span className="font-body-sm text-[11px] text-tertiary">
                          Party of {guests} Patrons
                        </span>
                      </div>
                      <div>
                        <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">
                          Date &amp; Seating
                        </span>
                        <span className="font-body-md text-sm text-on-surface font-semibold block">
                          {dateStr}
                        </span>
                        <span className="font-body-sm text-[11px] text-tertiary">
                          {timeSlot} Slot
                        </span>
                      </div>
                      <div>
                        <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">
                          Sanctuary Table
                        </span>
                        <span className="font-body-md text-sm text-on-surface font-semibold block">
                          {table}
                        </span>
                        <span className="font-body-sm text-[11px] text-secondary">
                          Center Glass Cupola
                        </span>
                      </div>
                      <div>
                        <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">
                          Sommelier Host
                        </span>
                        <span className="font-body-md text-sm text-on-surface font-semibold block">
                          Jean-Luc Moreau
                        </span>
                        <span className="font-body-sm text-[11px] text-on-surface-variant">
                          Lead Botanical Curator
                        </span>
                      </div>
                    </div>

                    {/* Courtesies breakdown */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-tertiary">
                        <span className="material-symbols-outlined text-sm">local_florist</span>
                        <span className="font-label-caps text-xs uppercase tracking-wider">
                          Complimentary Bespoke Courtesies Included
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-body-sm text-on-surface-variant">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-sm">check</span>
                          Welcome Flute of Champagne Laurent-Perrier
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-sm">check</span>
                          White-Glove Valet &amp; Chauffeur Staging
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-sm">check</span>
                          Custom Calligraphy Table Place Cards
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-sm">check</span>
                          Fresh-Cut Fragrant Garden Posy to Take Home
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Boarding Stub & QR Pass (4 cols) */}
                  <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-high/80 border-t lg:border-t-0 lg:border-l border-dashed border-tertiary/30 flex flex-col items-center justify-between text-center space-y-4">
                    <div className="space-y-1">
                      <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block font-bold">
                        VIP CHECK-IN PASS
                      </span>
                      <p className="font-body-sm text-[11px] text-on-surface-variant">
                        Scan at entrance vestibule for immediate white-glove escort
                      </p>
                    </div>

                    {/* QR Code Artwork */}
                    <div className="p-3 bg-surface-container-lowest rounded-xl shadow-lg border border-tertiary/30 flex flex-col items-center">
                      <svg className="w-28 h-28 text-tertiary" viewBox="0 0 100 100" fill="currentColor">
                        {/* Authentic QR pattern illustration */}
                        <rect x="5" y="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="4" />
                        <rect x="12" y="12" width="14" height="14" fill="currentColor" />
                        <rect x="67" y="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="4" />
                        <rect x="74" y="12" width="14" height="14" fill="currentColor" />
                        <rect x="5" y="67" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="4" />
                        <rect x="12" y="74" width="14" height="14" fill="currentColor" />
                        <rect x="42" y="10" width="8" height="8" />
                        <rect x="54" y="22" width="8" height="8" />
                        <rect x="42" y="38" width="16" height="8" />
                        <rect x="10" y="45" width="8" height="12" />
                        <rect x="25" y="42" width="8" height="8" />
                        <rect x="70" y="45" width="14" height="6" />
                        <rect x="45" y="55" width="10" height="14" />
                        <rect x="65" y="65" width="8" height="12" />
                        <rect x="80" y="75" width="12" height="14" />
                        <rect x="45" y="78" width="12" height="10" />
                      </svg>
                      <span className="font-mono text-[9px] text-tertiary tracking-widest mt-2 block">
                        {refCode}
                      </span>
                    </div>

                    {/* Sensory Profile Spec */}
                    <div className="w-full text-left bg-surface-container rounded p-3 text-[11px] font-body-sm text-on-surface-variant space-y-1">
                      <div className="flex justify-between">
                        <span className="opacity-80">Fragrance:</span>
                        <strong className="text-on-surface font-medium">Star Jasmine &amp; Vanilla Oak</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-80">Climate:</span>
                        <strong className="text-on-surface font-medium">21.5°C Conservatory Air</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-80">Acoustics:</span>
                        <strong className="text-on-surface font-medium">1960s French Jazz on Vinyl</strong>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => showToast('Connecting to WhatsApp Concierge', 'Sommelier Jean-Luc notified.')}
                      className="text-tertiary hover:underline font-label-caps text-[11px] uppercase tracking-wider flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-sm">chat</span>
                      Concierge Hotline WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              {/* Curated Experience & Gastronomy Preview */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-lg sm:text-xl text-on-surface">
                    Curated Gastronomy &amp; Pour-Over Itinerary
                  </h3>
                  <span className="font-label-caps text-xs text-tertiary uppercase">
                    Bespoke Tasting Menu
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className="relative h-44 rounded-xl overflow-hidden shadow-md group">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Artisanal Ethiopian pour-over"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp7cx0kHO5WTggWOCZp0MvB3CaPx33QDlciJJq4ecpDYbUPAoDsYPAcPKjDolZK5SrhivcRmbwQQvpzbv7Xn0gdhV71pbioAr0dvTt9JRfKN8CO7YaalBsXo98EzYByDmOTCI2kDpoYubve08QuhqHC7oOyCTljWPg7DmPtiXSWnib4mdYDyU5wi5pRtv7Itl27vK8msA7WJ2rKOdkWa1RRoxaauRdzCodRzgXJg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block font-bold">
                        Specialty Extraction
                      </span>
                      <span className="font-body-sm text-sm text-on-surface font-medium">
                        Artisanal Ethiopian Pour-Over Pairing
                      </span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="relative h-44 rounded-xl overflow-hidden shadow-md group">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Floral infusion"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiJEFsKbrVgMTqJz7EvJUSeZpTWENbR6J4F-pvvYtvH5Ln8RY7L9EzhWjR7ItI3eZwHW_tiZ8usMG3qiWRXguq7L53tIpWg4x89jPGuG6aLEew5ihwQvSw1Dn4yEerrf3cAJgAOahrqTlhKGWdTAJg3Z_6r7kNlN2ry__GgCcs19_6no_ub_C9g1J3n3zmgERXh7s5ik_BHFd1wKF1TG8hlInlEK3DSNu1n8rhyw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block font-bold">
                        Botanical Brew
                      </span>
                      <span className="font-body-sm text-sm text-on-surface font-medium">
                        Damask Rose Floral Infusion
                      </span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="relative h-44 rounded-xl overflow-hidden shadow-md group">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Parisian high tea pastry tower"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuJ-a84I13nk7JHdMKoAeVGzckiyPGjxjeDmhjwRfbN3L_0_UOceTXqmvRFuoCejrBua_2OT5pAX__GiiS9-_6L0mA3ELOMH6U2s8lj2fa5JSejvn_wfA4pGDbUaECXxcVID-WjUBe0N_Xrtve8T7qiZxONS6aBTaUmOk1R8-mLX9jY5c_uvbxDskwmQIOKtTkDd-pocmZOHSNYAE-WCqy1Wvtl2FJER6qF39QLQ"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block font-bold">
                        Curated Tier
                      </span>
                      <span className="font-body-sm text-sm text-on-surface font-medium">
                        Parisian Pâtisserie Selection
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Folio Receipt & Payment Ledger */}
              <div className="p-6 md:p-8 rounded-xl bg-surface-container shadow-md border border-tertiary/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-tertiary/10">
                  <div>
                    <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest block">
                      Financial Folio &amp; Guarantee
                    </span>
                    <h3 className="font-headline-sm text-lg sm:text-xl text-on-surface font-semibold">
                      Reservation Deposit Breakdown
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-primary-container text-tertiary font-label-caps text-xs uppercase tracking-wider border border-tertiary/20">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    PAID VIA APPLE PAY • VIP CONCIERGE
                  </div>
                </div>

                <div className="space-y-3 pt-4 font-body-sm text-xs sm:text-sm text-on-surface-variant">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-on-surface">
                      {experienceName} ({guests} Patrons × ₹2,400)
                    </span>
                    <span className="font-medium text-on-surface">
                      ₹{(guests * 2400).toLocaleString()}.00
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-on-surface">
                      Parisian Fresh Peony &amp; Rose Welcome Bouquet
                    </span>
                    <span className="text-secondary font-medium">Included (Complimentary)</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-on-surface">
                      White-Glove Valet &amp; Chauffeur Concierge
                    </span>
                    <span className="text-secondary font-medium">Included (Complimentary)</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-on-surface">Botanical Maintenance &amp; Salon GST (5%)</span>
                    <span className="font-medium text-on-surface">
                      ₹{Math.round(depositPaid * 0.05).toLocaleString()}.00
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-4 text-on-surface border-t border-tertiary/20">
                    <div>
                      <span className="font-headline-sm text-base sm:text-lg text-on-surface block font-bold">
                        Total Guaranteed Deposit Paid
                      </span>
                      <span className="font-body-sm text-[11px] text-tertiary">
                        Credited in full toward your final salon bill upon departure
                      </span>
                    </div>
                    <span className="font-headline-md text-xl sm:text-2xl text-tertiary font-semibold">
                      ₹{depositPaid.toLocaleString()}.00
                    </span>
                  </div>
                </div>
              </div>

              {/* Final Interactive Control Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-tertiary/10">
                <div className="flex items-center gap-3 text-on-surface-variant text-xs sm:text-sm">
                  <span className="material-symbols-outlined text-secondary text-lg">event_repeat</span>
                  <span>
                    Grace Period Active: Complimentary rescheduling permitted until{' '}
                    <strong className="text-on-surface">10:30 AM today</strong> (4h before seating).
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setRescheduleModalOpen(true)}
                    className="w-full sm:w-auto px-5 py-3 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-caps text-xs uppercase tracking-widest transition-colors shadow-sm text-center border border-tertiary/20"
                  >
                    Reschedule Slot
                  </button>
                  <button
                    type="button"
                    onClick={onNavigateToHome}
                    className="w-full sm:w-auto px-6 py-3 rounded bg-primary-container hover:bg-secondary-container text-tertiary hover:text-secondary-fixed font-label-caps text-xs uppercase tracking-widest transition-colors shadow-md text-center border border-tertiary/30"
                  >
                    Return to Atelier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reschedule Slot Modal */}
      {rescheduleModalOpen && (
        <div className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-high border border-tertiary/40 max-w-md w-full p-6 shadow-2xl rounded-xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex justify-between items-center">
              <h3 className="font-headline-sm text-lg text-on-surface">Reschedule Conservatory Slot</h3>
              <button
                type="button"
                onClick={() => setRescheduleModalOpen(false)}
                className="text-on-surface-variant hover:text-tertiary"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="font-body-sm text-xs text-on-surface-variant">
              Select an alternative date or seating hour under the glass dome. Your VIP deposit and
              complimentary courtesies will transfer automatically.
            </p>

            <div className="space-y-3">
              <div>
                <label className="block font-label-caps text-[10px] text-tertiary uppercase mb-1">
                  New Date
                </label>
                <select className="w-full bg-surface-container border border-tertiary/30 p-2.5 rounded text-sm text-on-surface focus:outline-none">
                  <option>Tomorrow, Oct 25 (02:30 PM)</option>
                  <option>Saturday, Oct 26 (04:00 PM - Harp Trio)</option>
                  <option>Sunday, Oct 27 (01:00 PM - Jazz High Tea)</option>
                  <option>Tuesday, Oct 29 (02:30 PM)</option>
                </select>
              </div>
              <div>
                <label className="block font-label-caps text-[10px] text-tertiary uppercase mb-1">
                  Concierge Reason
                </label>
                <input
                  type="text"
                  placeholder="Travel schedule change..."
                  className="w-full bg-surface-container border border-tertiary/30 p-2.5 rounded text-sm text-on-surface focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setRescheduleModalOpen(false);
                  showToast('Slot Rescheduled Successfully', 'New confirmation pass updated.');
                }}
                className="flex-1 py-3 bg-tertiary text-surface-container-lowest font-label-caps text-xs uppercase tracking-widest font-bold rounded"
              >
                Confirm New Slot
              </button>
              <button
                type="button"
                onClick={() => {
                  setRescheduleModalOpen(false);
                  onNavigateToReserve();
                }}
                className="px-4 py-3 bg-surface-container text-on-surface-variant hover:text-on-surface text-xs font-label-caps uppercase rounded"
              >
                Open Map
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

