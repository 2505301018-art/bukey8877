import React, { useState, useEffect } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CartDrawer from './components/common/CartDrawer';
import ReservationModal from './components/common/ReservationModal';
import Toast from './components/common/Toast';
import FlagshipExperience from './components/views/FlagshipExperience';
import ConservatorySeating from './components/views/ConservatorySeating';
import BookingConfirmation from './components/views/BookingConfirmation';
import { experiences } from './data/experiences';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, title: '', subtext: '', icon: 'check_circle' });

  // Initial cart items based on the original HTML mocks
  const [cartItems, setCartItems] = useState([
    {
      id: 'cart-item-1',
      title: 'The Montmartre Peony Blend',
      subTitle: 'Hand-tied Bouquet',
      category: 'floral',
      price: 1850,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgXD5CMm6hLhq164-WvdmxR0jlzLNBWWSjB9foRCjo_e6r80TvkBOc3kXKUelIvdLSobYrpdQGJFnrIEXVnqmHhrR7_r8BytlxKtUzNFkny_foFwjx63crZ6-i3_5SwEYXPLcfeQqSsTllAzdiNDCRJ82B8wTiqjZTQYm2XwE-3a4GmI2qVvm8DY-SJEu61pQHZ_UgljSVGcqxlgunWthU58d93xACun6qeXCgqw'
    },
    {
      id: 'cart-item-2',
      title: 'Ethiopian Yirgacheffe Roast',
      subTitle: '250g Whole Bean',
      category: 'cafe',
      price: 850,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp7cx0kHO5WTggWOCZp0MvB3CaPx33QDlciJJq4ecpDYbUPAoDsYPAcPKjDolZK5SrhivcRmbwQQvpzbv7Xn0gdhV71pbioAr0dvTt9JRfKN8CO7YaalBsXo98EzYByDmOTCI2kDpoYubve08QuhqHC7oOyCTljWPg7DmPtiXSWnib4mdYDyU5wi5pRtv7Itl27vK8msA7WJ2rKOdkWa1RRoxaauRdzCodRzgXJg'
    }
  ]);

  // Master reservation state
  const [reservationState, setReservationState] = useState({
    refCode: 'BNB-2024-PARIS-0842',
    zone: 'orangerie',
    zoneTitle: 'The Grand Glasshouse Orangerie',
    table: 'Table 03',
    tableType: '4-Top Center',
    experience: experiences[0],
    guests: 2,
    date: 'Today, Oct 24',
    timeSlot: '02:30 PM',
    addons: {
      'rose-bouquet': 2800
    },
    patronName: 'Lady Evelyn Vance',
    patronPhone: '+91 98201 44589',
    patronEmail: 'evelyn.vance@couture.com',
    dietaryRequests: ['Gluten-Free Patisserie'],
    notes: 'Anniversary table setting with jasmine scents.',
    subtotal: 4800,
    gstTax: 240,
    grandTotal: 5040
  });

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Toast Helper
  const showToast = (title, subtext, icon = 'check_circle') => {
    setToast({ visible: true, title, subtext, icon });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3200);
  };

  // Add to cart handler
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          subTitle: product.subTitle,
          category: product.category,
          price: product.price,
          quantity: 1,
          image: product.image
        }
      ];
    });
    showToast(
      `${product.title} added`,
      `${product.priceFormatted || '₹' + product.price} — Ready in your Salon Cart`,
      'add_shopping_cart'
    );
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    showToast('Item Removed', 'Your salon cart has been updated.', 'remove_shopping_cart');
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    showToast('Proceeding to Checkout', 'Concierge order initiated.', 'lock');
  };

  const handleQuickReservationConfirm = (quickData) => {
    setReservationState(prev => ({
      ...prev,
      date: quickData.date,
      guests: parseInt(quickData.guests) || 2,
      experience: experiences.find(e => e.name === quickData.experience) || experiences[0]
    }));
    setIsReservationModalOpen(false);
    setCurrentPage('reserve');
    showToast('Booking Initialized', 'Please select your conservatory realm and table.');
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased selection:bg-primary-container selection:text-primary flex flex-col font-body-md">
      {/* Universal Luxury Header */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservationModal={() => setIsReservationModalOpen(true)}
      />

      {/* Main Content View Switcher */}
      <main className="w-full pt-28 bg-surface min-h-screen flex-1">
        {currentPage === 'home' && (
          <FlagshipExperience
            onAddToCart={handleAddToCart}
            onNavigateToReserve={() => setCurrentPage('reserve')}
            onOpenReservationModal={() => setIsReservationModalOpen(true)}
            showToast={showToast}
          />
        )}

        {currentPage === 'reserve' && (
          <ConservatorySeating
            reservationState={reservationState}
            onUpdateReservationState={(newState) => setReservationState(prev => ({ ...prev, ...newState }))}
            onConfirmReservation={() => setCurrentPage('confirmation')}
            showToast={showToast}
          />
        )}

        {currentPage === 'confirmation' && (
          <BookingConfirmation
            reservationState={reservationState}
            onNavigateToHome={() => setCurrentPage('home')}
            onNavigateToReserve={() => setCurrentPage('reserve')}
            showToast={showToast}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={setCurrentPage} />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Quick Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
        onConfirmQuickReservation={handleQuickReservationConfirm}
        onOpenFullFloorplan={() => setCurrentPage('reserve')}
      />

      {/* Toast Notification */}
      <Toast toast={toast} />
    </div>
  );
}
