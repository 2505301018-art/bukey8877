import React, { useState } from 'react';

export default function ReservationModal({ isOpen, onClose, onConfirmQuickReservation, onOpenFullFloorplan }) {
  const [date, setDate] = useState('2026-10-24');
  const [guests, setGuests] = useState('2 Salon Patrons');
  const [experience, setExperience] = useState('Parisian High Tea & Floral Workshop');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirmQuickReservation({
      date,
      guests,
      experience
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface-container-high border border-tertiary/40 max-w-lg w-full p-8 shadow-[0_24px_48px_-12px_rgba(100,30,50,0.45)] relative rounded-xl animate-in fade-in zoom-in-95 duration-200">
        <button
          className="absolute top-6 right-6 text-on-surface-variant hover:text-tertiary transition-colors"
          onClick={onClose}
          type="button"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="text-center mb-6">
          <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest">
            Salon Reservations
          </span>
          <h2 className="font-headline-md text-2xl text-on-surface mt-1">
            Book a Garden Table
          </h2>
          <p className="font-body-sm text-xs text-on-surface-variant mt-2">
            High tea tastings &amp; botanical breakfast seatings
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-label-caps text-[11px] text-tertiary uppercase mb-1">
                Date
              </label>
              <input
                className="w-full bg-surface-container border border-tertiary/30 px-3 py-2 text-on-surface font-body-sm text-sm focus:border-tertiary focus:outline-none rounded"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block font-label-caps text-[11px] text-tertiary uppercase mb-1">
                Guests
              </label>
              <select
                className="w-full bg-surface-container border border-tertiary/30 px-3 py-2 text-on-surface font-body-sm text-sm focus:border-tertiary focus:outline-none rounded"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="2 Salon Patrons">2 Salon Patrons</option>
                <option value="4 Garden Table">4 Garden Table</option>
                <option value="6 Veranda Salon">6 Veranda Salon</option>
                <option value="8 Grand Salon">8 Grand Salon</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-label-caps text-[11px] text-tertiary uppercase mb-1">
              Seating Experience
            </label>
            <select
              className="w-full bg-surface-container border border-tertiary/30 px-3 py-2 text-on-surface font-body-sm text-sm focus:border-tertiary focus:outline-none rounded"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="Parisian High Tea & Floral Workshop">
                Parisian High Tea &amp; Floral Workshop
              </option>
              <option value="Artisanal Pour-Over & Pastry Pairing">
                Artisanal Pour-Over &amp; Pastry Pairing
              </option>
              <option value="Botanical Garden High Tea">
                Botanical Garden High Tea
              </option>
              <option value="Bespoke Floral Celebration (Anniversary/Birthday)">
                Bespoke Floral Celebration (Anniversary/Birthday)
              </option>
            </select>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              className="flex-1 py-3 bg-primary-container border border-tertiary text-tertiary font-label-caps text-xs uppercase tracking-widest hover:bg-secondary-container hover:text-secondary-fixed transition-colors text-center"
              type="submit"
            >
              Confirm Atelier Booking
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenFullFloorplan) onOpenFullFloorplan();
              }}
              className="py-3 px-4 bg-surface-container text-on-surface-variant hover:text-tertiary border border-tertiary/20 font-label-caps text-xs uppercase tracking-wider transition-colors text-center"
            >
              Interactive Floorplan Map →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
