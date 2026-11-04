import React, { useState } from 'react';
import { zoneData } from '../../data/zones';
import { experiences } from '../../data/experiences';
import { addons as availableAddons } from '../../data/addons';

export default function ConservatorySeating({
  reservationState,
  onUpdateReservationState,
  onConfirmReservation,
  showToast
}) {
  const [selectedZoneKey, setSelectedZoneKey] = useState(reservationState.zone || 'orangerie');
  const [selectedTable, setSelectedTable] = useState(reservationState.table || 'Table 03');
  const [selectedTableType, setSelectedTableType] = useState('4-Top Center');
  const [selectedExperience, setSelectedExperience] = useState(
    reservationState.experience || experiences[0]
  );
  const [guestCount, setGuestCount] = useState(reservationState.guests || 2);
  const [selectedDate, setSelectedDate] = useState(reservationState.date || 'Today, Oct 24');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(reservationState.timeSlot || '02:30 PM');
  const [selectedAddons, setSelectedAddons] = useState(reservationState.addons || {});
  
  // Patron form inputs
  const [patronName, setPatronName] = useState(reservationState.patronName || 'Lady Evelyn Vance');
  const [patronPhone, setPatronPhone] = useState(reservationState.patronPhone || '+91 98201 44589');
  const [patronEmail, setPatronEmail] = useState(reservationState.patronEmail || 'evelyn.vance@couture.com');
  const [dietaryRequests, setDietaryRequests] = useState(['Gluten-Free Patisserie']);
  const [specialNotes, setSpecialNotes] = useState(reservationState.notes || '');

  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const currentZone = zoneData[selectedZoneKey];

  // Table selection
  const handleSelectTable = (tbl) => {
    if (tbl.status === 'reserved') return;
    setSelectedTable(tbl.label);
    setSelectedTableType(tbl.type);
    showToast(`Table ${tbl.label} Selected`, `${tbl.type} in ${currentZone.title}`);
  };

  // Switch zone
  const handleSwitchZone = (zoneKey) => {
    setSelectedZoneKey(zoneKey);
    const newZone = zoneData[zoneKey];
    const firstAvailable = newZone.tables.find(t => t.status !== 'reserved');
    if (firstAvailable) {
      setSelectedTable(firstAvailable.label);
      setSelectedTableType(firstAvailable.type);
    }
  };

  // Toggle addons
  const handleToggleAddon = (addon) => {
    setSelectedAddons(prev => {
      const next = { ...prev };
      if (next[addon.id]) {
        delete next[addon.id];
      } else {
        next[addon.id] = addon.price;
      }
      return next;
    });
  };

  // Toggle dietary chips
  const handleToggleDietary = (item) => {
    setDietaryRequests(prev =>
      prev.includes(item) ? prev.filter(d => d !== item) : [...prev, item]
    );
  };

  // Cost calculations
  const experienceSubtotal = selectedExperience.isCoupleRate
    ? selectedExperience.price
    : selectedExperience.price * guestCount;

  const addonSubtotal = Object.values(selectedAddons).reduce((sum, p) => sum + p, 0);
  const totalSubtotal = experienceSubtotal + addonSubtotal;
  const gstTax = Math.round(totalSubtotal * 0.05);
  const grandTotal = totalSubtotal + gstTax;

  const handleBookNow = () => {
    const bookingPayload = {
      refCode: 'BNB-2024-PARIS-' + Math.floor(1000 + Math.random() * 9000),
      zone: selectedZoneKey,
      zoneTitle: currentZone.title,
      table: selectedTable,
      tableType: selectedTableType,
      experience: selectedExperience,
      guests: guestCount,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      addons: selectedAddons,
      patronName,
      patronPhone,
      patronEmail,
      dietaryRequests,
      notes: specialNotes,
      subtotal: totalSubtotal,
      gstTax,
      grandTotal
    };

    onUpdateReservationState(bookingPayload);
    setBookingModalOpen(true);
  };

  const handleFinalProceedToPass = () => {
    setBookingModalOpen(false);
    onConfirmReservation();
  };

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-16 md:py-24 -mt-28 pt-28">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-container via-surface-container-lowest to-surface" />
        <div className="max-w-7xl mx-auto px-4 md:px-16 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high shadow-sm border border-tertiary/20">
              <span className="material-symbols-outlined text-tertiary text-sm">local_florist</span>
              <span className="font-label-caps text-xs uppercase text-tertiary tracking-widest">
                Private Salon &amp; Conservatory Reservations
              </span>
            </div>

            <h1 className="font-headline-lg md:font-display-hero text-3xl sm:text-5xl md:text-6xl text-on-surface tracking-tight">
              Reserve Your Table Amidst <span className="italic text-tertiary font-serif">Blooms &amp; Roasts</span>
            </h1>

            <p className="font-body-lg text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl font-light leading-relaxed">
              Experience an unhurried sensory ritual beneath the glasshouse dome, enveloped by
              heirloom garden roses and the warm aroma of freshly roasted single-origin coffees.
            </p>

            {/* Highlights Bar */}
            <div className="w-full pt-6 mt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-lg bg-surface-container shadow-md border border-tertiary/10">
                <div className="flex items-center justify-center gap-2.5 text-center">
                  <span className="material-symbols-outlined text-tertiary text-lg">spa</span>
                  <span className="font-label-caps text-[11px] uppercase tracking-wider text-on-surface">
                    Complimentary Table Posy
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2.5 text-center">
                  <span className="material-symbols-outlined text-tertiary text-lg">coffee_maker</span>
                  <span className="font-label-caps text-[11px] uppercase tracking-wider text-on-surface">
                    Dedicated Coffee Sommelier
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2.5 text-center">
                  <span className="material-symbols-outlined text-tertiary text-lg">celebration</span>
                  <span className="font-label-caps text-[11px] uppercase tracking-wider text-on-surface">
                    Bespoke Centerpieces
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2.5 text-center">
                  <span className="material-symbols-outlined text-tertiary text-lg">piano</span>
                  <span className="font-label-caps text-[11px] uppercase tracking-wider text-on-surface">
                    Weekend Live Harp &amp; Jazz
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CONSERVATORY FLOORPLAN & SEATING EXPERIENCE */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest block mb-1">
                The Conservatory Floorplan
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-on-surface">
                Select Your Botanical Realm
              </h2>
            </div>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant max-w-md">
              Choose an atmosphere tailored to your intimate tête-à-tête, leisurely salon gathering,
              or serene garden indulgence.
            </p>
          </div>

          {/* Zone Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {Object.entries(zoneData).map(([key, zone]) => {
              const isActive = selectedZoneKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleSwitchZone(key)}
                  className={`text-left p-4 rounded shadow-sm transition-all duration-200 border ${
                    isActive
                      ? 'bg-primary-container text-on-surface border-tertiary shadow-md'
                      : 'bg-surface-container text-on-surface-variant hover:text-on-surface border-tertiary/10'
                  }`}
                >
                  <span className="font-label-caps text-[10px] text-tertiary block tracking-widest uppercase">
                    {zone.zoneLabel}
                  </span>
                  <h4 className="font-title-editorial text-sm sm:text-base font-semibold mt-1">
                    {zone.shortTitle}
                  </h4>
                  <span className="font-body-sm text-[11px] text-on-surface-variant block mt-0.5">
                    {zone.subText}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Floorplan Map & Zone Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            {/* Floorplan Architecture Map (8 cols) */}
            <div className="lg:col-span-8 bg-surface-container-high rounded-xl p-6 relative flex flex-col justify-between shadow-xl border border-tertiary/20">
              <div className="flex items-center justify-between pb-4 border-b border-tertiary/10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-xl">architecture</span>
                  <span className="font-headline-sm text-sm sm:text-base text-on-surface font-semibold">
                    {currentZone.title} • Architectural Seating
                  </span>
                </div>
                {/* Legend */}
                <div className="flex items-center gap-3 sm:gap-4 text-xs font-label-caps">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                    <span className="text-on-surface-variant text-[11px]">Available</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-tertiary" />
                    <span className="text-on-surface text-[11px]">Selected</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-surface-container-highest" />
                    <span className="text-on-surface-variant text-[11px]">Reserved</span>
                  </div>
                </div>
              </div>

              {/* Interactive SVG / Visual Grid Scheme */}
              <div className="w-full min-h-[220px] bg-surface-container-lowest rounded-lg relative p-6 flex items-center justify-center overflow-hidden my-4 border border-tertiary/10">
                {/* Background dot foliage texture */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e2c383_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Table Nodes */}
                <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
                  {currentZone.tables.map((tbl) => {
                    const isSelected = selectedTable === tbl.label;
                    const isReserved = tbl.status === 'reserved';

                    let colorClasses = 'bg-secondary text-surface-container-lowest hover:scale-105 cursor-pointer';
                    let statusLabel = 'Available';

                    if (isReserved) {
                      colorClasses = 'bg-surface-container-highest text-on-surface-variant/40 opacity-60 cursor-not-allowed';
                      statusLabel = 'Reserved';
                    } else if (isSelected) {
                      colorClasses = 'bg-tertiary text-surface-container-lowest ring-4 ring-tertiary/30 scale-105 cursor-pointer font-bold';
                      statusLabel = 'Selected';
                    }

                    return (
                      <button
                        key={tbl.id}
                        type="button"
                        disabled={isReserved}
                        onClick={() => handleSelectTable(tbl)}
                        className={`p-3 rounded-lg flex flex-col items-center justify-center transition-all duration-200 min-w-[110px] md:min-w-[125px] shadow-sm ${colorClasses}`}
                      >
                        <span className="material-symbols-outlined text-lg mb-1">
                          {tbl.type.includes('2-Top') ? 'chair' : (tbl.type.includes('4-Top') ? 'table_restaurant' : 'deck')}
                        </span>
                        <span className="font-headline-sm text-xs font-bold leading-tight">
                          {tbl.label}
                        </span>
                        <span className="font-body-sm text-[10px] opacity-80">
                          {tbl.type}
                        </span>
                        <span className="font-label-caps text-[9px] uppercase tracking-wider mt-1 px-1.5 py-0.5 rounded bg-surface-container-lowest/30">
                          {statusLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Seating summary banner */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-base">check_circle</span>
                  <span>
                    Selected: <strong className="text-on-surface">{selectedTable} ({selectedTableType})</strong> in {currentZone.shortTitle}
                  </span>
                </div>
                <span className="text-secondary font-label-caps text-[11px]">
                  Personal Host &amp; Coffee Sommelier Included
                </span>
              </div>
            </div>

            {/* Zone Preview Card (4 cols) */}
            <div className="lg:col-span-4 bg-surface-container rounded-xl p-6 flex flex-col justify-between shadow-xl border border-tertiary/10">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-high">
                  <img
                    src={currentZone.imgUrl}
                    alt={currentZone.imgAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-surface-container-lowest/80 backdrop-blur-md text-tertiary font-label-caps text-[10px] uppercase tracking-widest">
                    {currentZone.badge}
                  </div>
                </div>

                <div>
                  <h3 className="font-headline-sm text-lg text-on-surface font-semibold">
                    {currentZone.title}
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-2 leading-relaxed">
                    {currentZone.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-tertiary/10 mt-4 space-y-2 font-body-sm text-xs text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-sm">volume_up</span>
                  <span>Acoustic: {currentZone.acoustic}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-sm">nest_thermostat</span>
                  <span>Climate: Ambient Conservatory Air (21.5°C)</span>
                </div>
              </div>
            </div>
          </div>

          {/* RESERVATION CONFIGURATION WIZARD & FOLIO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Steps (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* STEP 1: Experience Selection */}
              <div className="p-6 md:p-8 rounded-xl bg-surface-container shadow-md border border-tertiary/10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary-container text-tertiary flex items-center justify-center font-label-caps font-bold text-xs">
                      01
                    </span>
                    <div>
                      <h3 className="font-headline-sm text-lg text-on-surface font-semibold">
                        Curated Seating Experience
                      </h3>
                      <p className="font-body-sm text-xs text-on-surface-variant">
                        Select a botanical dining or tasting itinerary for your salon table
                      </p>
                    </div>
                  </div>
                  <span className="font-label-caps text-xs text-tertiary uppercase">Step 1 of 4</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {experiences.map((exp) => {
                    const isSelected = selectedExperience.id === exp.id;
                    return (
                      <div
                        key={exp.id}
                        onClick={() => setSelectedExperience(exp)}
                        className={`cursor-pointer p-5 rounded-lg transition-all duration-200 flex flex-col justify-between border ${
                          isSelected
                            ? 'bg-surface-container-high border-tertiary ring-2 ring-tertiary shadow-md'
                            : 'bg-surface-container-high/60 border-tertiary/10 hover:bg-surface-container-high'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest px-2 py-0.5 rounded bg-surface-container-lowest">
                              {exp.badge}
                            </span>
                            <span className="font-headline-sm text-sm sm:text-base text-tertiary font-semibold">
                              ₹{exp.price.toLocaleString()}{' '}
                              <span className="text-[11px] font-normal text-on-surface-variant">
                                {exp.priceUnit}
                              </span>
                            </span>
                          </div>
                          <h4 className="font-title-editorial text-sm sm:text-base text-on-surface mb-1 font-semibold">
                            {exp.name}
                          </h4>
                          <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 flex items-center gap-2 text-[11px] text-secondary font-label-caps border-t border-tertiary/10">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          {exp.duration}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 2: Date, Guest Count & Time Slot */}
              <div className="p-6 md:p-8 rounded-xl bg-surface-container shadow-md border border-tertiary/10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary-container text-tertiary flex items-center justify-center font-label-caps font-bold text-xs">
                      02
                    </span>
                    <div>
                      <h3 className="font-headline-sm text-lg text-on-surface font-semibold">
                        Date &amp; Seating Slot
                      </h3>
                      <p className="font-body-sm text-xs text-on-surface-variant">
                        Select your preferred date, party size, and atmospheric seating hour
                      </p>
                    </div>
                  </div>
                  <span className="font-label-caps text-xs text-tertiary uppercase">Step 2 of 4</span>
                </div>

                {/* Party Count */}
                <div>
                  <label className="block font-label-caps text-xs text-tertiary uppercase tracking-wider mb-2">
                    Number of Salon Patrons
                  </label>
                  <div className="flex items-center flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6, 8].map((num) => {
                      const isActive = guestCount === num;
                      return (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setGuestCount(num)}
                          className={`px-4 py-2.5 rounded font-label-md text-xs sm:text-sm transition-all ${
                            isActive
                              ? 'bg-primary-container text-on-surface font-bold border border-tertiary'
                              : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
                          }`}
                        >
                          {num === 8 ? 'Salon Parlour (8)' : `${num} Guest${num > 1 ? 's' : ''}`}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Date Pills */}
                <div>
                  <label className="block font-label-caps text-xs text-tertiary uppercase tracking-wider mb-2">
                    Choose Date
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {[
                      { label: 'Today', date: '24 Oct', sub: 'Thu', val: 'Today, Oct 24' },
                      { label: 'Tomorrow', date: '25 Oct', sub: 'Few Left', val: 'Tomorrow, Oct 25' },
                      { label: 'Saturday', date: '26 Oct', sub: 'Harp Trio', val: 'Saturday, Oct 26' },
                      { label: 'Sunday', date: '27 Oct', sub: 'Jazz High Tea', val: 'Sunday, Oct 27' },
                      { label: 'Tuesday', date: '29 Oct', sub: 'Harvest Open', val: 'Tuesday, Oct 29' },
                      { label: 'Wednesday', date: '30 Oct', sub: 'Available', val: 'Wednesday, Oct 30' },
                    ].map((d) => {
                      const isSelected = selectedDate === d.val;
                      return (
                        <button
                          key={d.val}
                          type="button"
                          onClick={() => setSelectedDate(d.val)}
                          className={`p-3 rounded text-center transition-all border ${
                            isSelected
                              ? 'bg-primary-container text-on-surface border-tertiary'
                              : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface border-transparent'
                          }`}
                        >
                          <span className="block font-label-caps text-[10px] uppercase text-tertiary">
                            {d.label}
                          </span>
                          <span className="block font-headline-sm text-sm sm:text-base font-bold text-on-surface">
                            {d.date}
                          </span>
                          <span className="block font-body-sm text-[10px] text-secondary">
                            {d.sub}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="space-y-4 pt-2">
                  <label className="block font-label-caps text-xs text-tertiary uppercase tracking-wider">
                    Atmospheric Time Slot
                  </label>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Morning */}
                    <div className="p-3 rounded bg-surface-container-high border border-tertiary/10">
                      <span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest block mb-2">
                        Morning Sunlit Ritual
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {['08:30 AM', '09:30 AM', '10:45 AM'].map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTimeSlot(time)}
                            className={`px-3 py-1.5 rounded text-xs transition-all ${
                              selectedTimeSlot === time
                                ? 'bg-primary-container text-tertiary font-bold border border-tertiary'
                                : 'bg-surface-container-lowest text-on-surface hover:text-tertiary'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Midday */}
                    <div className="p-3 rounded bg-surface-container-high border border-tertiary/10">
                      <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block mb-2">
                        Midday Floral High Tea
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {['01:00 PM', '02:30 PM', '04:00 PM'].map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTimeSlot(time)}
                            className={`px-3 py-1.5 rounded text-xs transition-all ${
                              selectedTimeSlot === time
                                ? 'bg-primary-container text-tertiary font-bold border border-tertiary'
                                : 'bg-surface-container-lowest text-on-surface hover:text-tertiary'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Twilight */}
                    <div className="p-3 rounded bg-surface-container-high border border-tertiary/10">
                      <span className="font-label-caps text-[10px] text-primary uppercase tracking-widest block mb-2">
                        Twilight &amp; Candlelight
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {['06:00 PM', '07:30 PM', '09:00 PM'].map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTimeSlot(time)}
                            className={`px-3 py-1.5 rounded text-xs transition-all ${
                              selectedTimeSlot === time
                                ? 'bg-primary-container text-tertiary font-bold border border-tertiary'
                                : 'bg-surface-container-lowest text-on-surface hover:text-tertiary'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 3: Bespoke Atelier Enhancements */}
              <div className="p-6 md:p-8 rounded-xl bg-surface-container shadow-md border border-tertiary/10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary-container text-tertiary flex items-center justify-center font-label-caps font-bold text-xs">
                      03
                    </span>
                    <div>
                      <h3 className="font-headline-sm text-lg text-on-surface font-semibold">
                        Bespoke Enhancements
                      </h3>
                      <p className="font-body-sm text-xs text-on-surface-variant">
                        Select thoughtful courtesies to be arranged before your arrival
                      </p>
                    </div>
                  </div>
                  <span className="font-label-caps text-xs text-tertiary uppercase">Step 3 of 4</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableAddons.map((addon) => {
                    const isChecked = Boolean(selectedAddons[addon.id]);
                    return (
                      <label
                        key={addon.id}
                        className={`flex items-start gap-3 p-4 rounded cursor-pointer transition-colors border ${
                          isChecked
                            ? 'bg-surface-container-highest border-tertiary'
                            : 'bg-surface-container-high border-tertiary/10 hover:bg-surface-container-highest'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleToggleAddon(addon)}
                          className="mt-1 accent-primary-container w-4 h-4 rounded"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="font-title-editorial text-sm text-on-surface font-semibold">
                              {addon.title}
                            </span>
                            <span className="font-label-caps text-tertiary text-xs">
                              {addon.priceFormatted}
                            </span>
                          </div>
                          <p className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">
                            {addon.description}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* STEP 4: Patron Details & Dietary Wishes */}
              <div className="p-6 md:p-8 rounded-xl bg-surface-container shadow-md border border-tertiary/10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary-container text-tertiary flex items-center justify-center font-label-caps font-bold text-xs">
                      04
                    </span>
                    <div>
                      <h3 className="font-headline-sm text-lg text-on-surface font-semibold">
                        Patron Details &amp; Dietary Wishes
                      </h3>
                      <p className="font-body-sm text-xs text-on-surface-variant">
                        So we may prepare your bespoke table card and menu adjustments
                      </p>
                    </div>
                  </div>
                  <span className="font-label-caps text-xs text-tertiary uppercase">Step 4 of 4</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-caps text-xs text-tertiary uppercase tracking-wider mb-1.5">
                      Honorific &amp; Full Name
                    </label>
                    <input
                      className="w-full bg-surface-container-high rounded px-4 py-2.5 text-on-surface font-body-sm text-sm focus:outline-none focus:ring-1 focus:ring-tertiary border border-tertiary/20"
                      placeholder="e.g. Madame Clara Dupont"
                      type="text"
                      value={patronName}
                      onChange={(e) => setPatronName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block font-label-caps text-xs text-tertiary uppercase tracking-wider mb-1.5">
                      Telephone Number (WhatsApp)
                    </label>
                    <input
                      className="w-full bg-surface-container-high rounded px-4 py-2.5 text-on-surface font-body-sm text-sm focus:outline-none focus:ring-1 focus:ring-tertiary border border-tertiary/20"
                      placeholder="+91 98000 00000"
                      type="tel"
                      value={patronPhone}
                      onChange={(e) => setPatronPhone(e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-label-caps text-xs text-tertiary uppercase tracking-wider mb-1.5">
                      Email for Digital Invitation &amp; Pass
                    </label>
                    <input
                      className="w-full bg-surface-container-high rounded px-4 py-2.5 text-on-surface font-body-sm text-sm focus:outline-none focus:ring-1 focus:ring-tertiary border border-tertiary/20"
                      placeholder="clara@maison.com"
                      type="email"
                      value={patronEmail}
                      onChange={(e) => setPatronEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Dietary Selection Chips */}
                <div>
                  <label className="block font-label-caps text-xs text-tertiary uppercase tracking-wider mb-2">
                    Dietary Curations
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Gluten-Free Patisserie',
                      'Vegan Botanical Menu',
                      'Lactose-Free Milk Options',
                      'Nut Allergy Notification'
                    ].map((item) => {
                      const isSelected = dietaryRequests.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleToggleDietary(item)}
                          className={`px-3 py-1.5 rounded text-xs transition-all font-label-caps border ${
                            isSelected
                              ? 'bg-secondary-container text-secondary-fixed border-secondary font-medium'
                              : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface border-tertiary/10'
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block font-label-caps text-xs text-tertiary uppercase tracking-wider mb-1.5">
                    Special Requests &amp; Notes to Atelier
                  </label>
                  <textarea
                    className="w-full bg-surface-container-high rounded p-3 text-on-surface font-body-sm text-sm focus:outline-none focus:ring-1 focus:ring-tertiary border border-tertiary/20"
                    placeholder="Anniversary surprise, preferred floral scents, or specific seating preferences..."
                    rows="2"
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Right: Live Reservation Folio / Receipt (4 Cols) */}
            <div className="lg:col-span-4 sticky top-32">
              <div className="p-6 md:p-8 rounded-xl bg-surface-container-high shadow-2xl space-y-6 border border-tertiary/30">
                <div className="flex items-center justify-between pb-4 border-b border-tertiary/20">
                  <div>
                    <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block">
                      Atelier Folio
                    </span>
                    <h3 className="font-headline-sm text-lg text-on-surface font-bold">
                      Reservation Summary
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-tertiary text-2xl">receipt_long</span>
                </div>

                {/* Folio Items */}
                <div className="space-y-4 font-body-sm text-xs text-on-surface-variant">
                  <div className="flex justify-between items-center py-1">
                    <span>Sanctuary Realm:</span>
                    <strong className="text-on-surface">{currentZone.shortTitle}</strong>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Table Selected:</span>
                    <strong className="text-tertiary">{selectedTable} ({selectedTableType})</strong>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Seating Time:</span>
                    <span className="text-on-surface font-medium">{selectedDate} • {selectedTimeSlot}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Salon Patrons:</span>
                    <span className="text-on-surface font-medium">{guestCount} Patrons</span>
                  </div>

                  {/* Experience cost row */}
                  <div className="pt-3 border-t border-tertiary/10">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-on-surface font-semibold block">{selectedExperience.name}</span>
                        <span className="text-[10px] text-on-surface-variant">
                          {selectedExperience.isCoupleRate
                            ? 'Fixed Couple Rate'
                            : `₹${selectedExperience.price.toLocaleString()} × ${guestCount} Guests`}
                        </span>
                      </div>
                      <span className="text-tertiary font-semibold">
                        ₹{experienceSubtotal.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Addons breakdown */}
                  {Object.keys(selectedAddons).length > 0 && (
                    <div className="pt-3 border-t border-tertiary/10 space-y-1">
                      <span className="font-label-caps text-[10px] text-tertiary uppercase block">
                        Atelier Enhancements
                      </span>
                      {Object.entries(selectedAddons).map(([addonId, price]) => {
                        const addonObj = availableAddons.find(a => a.id === addonId);
                        return (
                          <div key={addonId} className="flex justify-between text-[11px]">
                            <span>+ {addonObj?.title || addonId}</span>
                            <span className="text-tertiary">₹{price.toLocaleString()}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Subtotal, tax, grand total */}
                  <div className="pt-4 border-t border-tertiary/20 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-on-surface font-medium">₹{totalSubtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Salon GST (5%)</span>
                      <span className="text-on-surface font-medium">₹{gstTax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 text-base border-t border-tertiary/20">
                      <div>
                        <span className="font-headline-sm text-base text-on-surface block font-bold">
                          Grand Total
                        </span>
                        <span className="text-[10px] text-secondary">
                          Credited to final salon folio
                        </span>
                      </div>
                      <span className="font-headline-sm text-xl text-tertiary font-bold">
                        ₹{grandTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Primary CTA */}
                <button
                  type="button"
                  onClick={handleBookNow}
                  className="w-full py-4 bg-tertiary text-surface-container-lowest font-label-caps text-xs uppercase tracking-widest shadow-xl hover:bg-tertiary-fixed transition-all font-bold rounded"
                >
                  Confirm Reservation &amp; View Pass
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Confirmation Dialog Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-high border border-tertiary/40 max-w-md w-full p-8 shadow-2xl rounded-xl text-center space-y-4 animate-in fade-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-secondary-container text-secondary-fixed mx-auto flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <div>
              <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
                Reservation Registered
              </span>
              <h3 className="font-headline-md text-2xl text-on-surface mt-1">
                Bienvenue, {patronName}
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant mt-2">
                Your sanctuary at <strong className="text-on-surface">{selectedTable} ({currentZone.shortTitle})</strong> has been secluded for {selectedDate} at {selectedTimeSlot}.
              </p>
            </div>

            <div className="p-3 bg-surface-container rounded text-left font-body-sm text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Experience:</span>
                <span className="text-on-surface font-medium">{selectedExperience.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Deposit Total:</span>
                <span className="text-tertiary font-bold">₹{grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleFinalProceedToPass}
              className="w-full py-3 bg-tertiary text-surface-container-lowest font-label-caps text-xs uppercase tracking-widest shadow-lg hover:bg-tertiary-fixed transition-colors font-bold rounded"
            >
              Open Digital Concierge Pass →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

