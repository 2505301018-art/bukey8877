import React from 'react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const isGiftUnlocked = subtotal >= 2499;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-surface-container-lowest/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-surface-container-high border-l border-tertiary/30 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="h-20 px-6 border-b border-tertiary/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary">local_florist</span>
            <h2 className="font-headline-sm text-lg text-on-surface">
              Salon Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
          </div>
          <button
            className="text-on-surface-variant hover:text-tertiary p-2 rounded transition-colors"
            onClick={onClose}
            type="button"
            aria-label="Close cart"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <span className="material-symbols-outlined text-4xl text-tertiary opacity-40">
                shopping_bag
              </span>
              <p className="font-title-editorial text-on-surface">Your Salon Cart is Empty</p>
              <p className="font-body-sm text-xs text-on-surface-variant">
                Explore our single-origin coffees, morning harvests, and bespoke hampers.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 bg-surface-container border border-tertiary/10 rounded group hover:border-tertiary/30 transition-all"
              >
                <div className="w-16 h-20 bg-surface-container-highest flex-shrink-0 flex items-center justify-center rounded overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="material-symbols-outlined text-tertiary">
                      {item.category === 'cafe' ? 'coffee' : 'yard'}
                    </span>
                  )}
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline-sm text-sm text-on-surface line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="font-label-caps text-[10px] text-tertiary uppercase mt-0.5">
                      {item.subTitle || item.category || 'Atelier Selection'}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 border border-tertiary/20 rounded px-2 py-0.5 bg-surface-container-high">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="text-on-surface-variant hover:text-tertiary text-xs px-1"
                      >
                        -
                      </button>
                      <span className="font-body-sm text-xs text-on-surface min-w-[14px] text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="text-on-surface-variant hover:text-tertiary text-xs px-1"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-label-md text-xs text-tertiary font-semibold">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </span>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-on-surface-variant/40 hover:text-error transition-colors p-1"
                        title="Remove item"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        <div className="p-6 border-t border-tertiary/20 bg-surface-container-low">
          <div className="flex justify-between items-center mb-3">
            <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider">
              Subtotal
            </span>
            <span className="font-headline-sm text-lg text-tertiary font-semibold">
              ₹{subtotal.toLocaleString()}
            </span>
          </div>

          {/* Complimentary Gift Indicator */}
          <div className="mb-4 p-2.5 rounded bg-surface-container border border-tertiary/20 flex items-center gap-2 text-xs">
            <span className="material-symbols-outlined text-secondary text-sm">
              {isGiftUnlocked ? 'check_circle' : 'redeem'}
            </span>
            <span className={`font-body-sm text-[11px] ${isGiftUnlocked ? 'text-secondary font-medium' : 'text-on-surface-variant'}`}>
              {isGiftUnlocked
                ? 'Complimentary Parisian Gift Box unlocked!'
                : `Add ₹${Math.max(0, 2499 - subtotal).toLocaleString()} more for complimentary Parisian Gift Box`}
            </span>
          </div>

          <button
            type="button"
            disabled={cartItems.length === 0}
            onClick={onProceedToCheckout}
            className="w-full block py-3 text-center bg-primary-container border border-tertiary text-tertiary font-label-caps text-xs uppercase tracking-widest hover:bg-secondary-container hover:text-secondary-fixed transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

