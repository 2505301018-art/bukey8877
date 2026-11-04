import React from 'react';

export default function Toast({ toast }) {
  if (!toast || !toast.visible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 transition-all duration-300 transform translate-y-0 opacity-100 animate-in slide-in-from-bottom-5">
      <div className="flex items-center gap-3 px-5 py-4 bg-surface-container-high border border-tertiary/40 rounded-xl shadow-2xl backdrop-blur-md">
        <span className="material-symbols-outlined text-tertiary text-xl">
          {toast.icon || 'check_circle'}
        </span>
        <div>
          <h4 className="font-title-editorial text-sm text-on-surface font-semibold">
            {toast.title || 'Atelier Action Confirmed'}
          </h4>
          <p className="font-body-sm text-xs text-on-surface-variant">
            {toast.subtext || 'Thank you for curating with Bloom & Brew.'}
          </p>
        </div>
      </div>
    </div>
  );
}
