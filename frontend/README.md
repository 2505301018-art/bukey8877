# Bloom & Brew | Haute Botanique & Café — React Application

Welcome to the converted React application for **Bloom & Brew Botanical Café & Atelier**. All original HTML codespaces in the project have been completely converted into modular, responsive, high-performance React 18 code with Tailwind CSS styling matching the luxury design specification.

---

## 🏛️ Converted Pages & Structure

Each original HTML codespace file has been converted into a dedicated React view and reusable components:

| Original HTML File | Converted React Component | Description |
| :--- | :--- | :--- |
| `bloom_brew_flagship_experience/code.html` | [`src/components/views/FlagshipExperience.jsx`](./src/components/views/FlagshipExperience.jsx) | Flagship brand experience with editorial hero, specialty coffee atelier, haute floristry catalog, interactive product category filter, customer reviews, and Instagram masonry gallery. |
| `bloom_brew_reserve_a_table_conservatory_seating/code.html` | [`src/components/views/ConservatorySeating.jsx`](./src/components/views/ConservatorySeating.jsx) | Interactive Conservatory Seating engine with Zone switching (Orangerie, Velvet Rose Alcoves, Florist Atelier Counter, Fragrant Veranda), SVG architectural seating map with real-time availability, experience packages, date/time slots, atelier add-on enhancements, patron dietary requirements, and dynamic live cost folio with GST calculation. |
| `bloom_brew_booking_confirmation_digital_concierge_pass/code.html` | [`src/components/views/BookingConfirmation.jsx`](./src/components/views/BookingConfirmation.jsx) | Luxury booking confirmation modal with gilded wax seal monogram, copyable booking reference code (`BNB-2024-PARIS-0842`), VIP Boarding Ticket with QR code pass, sensory ambience profile (jasmine & vanilla oak aroma, 21.5°C climate, vinyl jazz audio), courtesies list, gastronomy preview, financial breakdown, print folio action, and slot rescheduling. |

---

## 🧩 Modular Components & Data

```
frontend/
├── index.html                           # Standard Vite entry HTML
├── preview.html                         # Standalone zero-install direct browser preview
├── package.json                         # React 18, Vite & Tailwind configuration
├── tailwind.config.js                   # Haute Botanique & Café color tokens & fonts
├── vite.config.js                       # Vite build configuration
├── src/
│   ├── main.jsx                         # Application root
│   ├── App.jsx                          # Main orchestrator with state & multi-page navigation
│   ├── index.css                        # Global Tailwind styles & typography
│   ├── data/
│   │   ├── products.js                  # 8 curated products with categories, pricing & high-res images
│   │   ├── zones.js                     # 4 seating zones with tables, acoustics & photography
│   │   ├── experiences.js               # High tea and tasting experience packages
│   │   └── addons.js                    # Atelier luxury enhancements
│   └── components/
│       ├── common/
│       │   ├── Header.jsx               # Universal luxury navigation bar with cart badge & switcher
│       │   ├── Footer.jsx               # Brand footer, boutique hours, gazette newsletter & links
│       │   ├── CartDrawer.jsx           # Slide-out cart with quantity controls & gift progress
│       │   ├── ReservationModal.jsx     # Quick booking dialog
│       │   └── Toast.jsx                # Micro-interaction notifications for actions & cart
│       └── views/
│           ├── FlagshipExperience.jsx   # Page 1: Flagship Experience
│           ├── ConservatorySeating.jsx  # Page 2: Conservatory Seating Engine
│           └── BookingConfirmation.jsx  # Page 3: VIP Digital Concierge Pass
```

---

## ⚡ How to Run

### Method 1: Instant Standalone Browser Preview (Zero Installation)
Simply double-click or open `preview.html` directly in any web browser (Chrome, Edge, Opera, Firefox). It uses CDN-based React 18 and Tailwind CSS, allowing you to interact with all three pages, switch zones, add items to your cart, reserve tables, and view your VIP Concierge Pass immediately.

### Method 2: Standard Vite Development Server
Once Node.js is installed on your system:
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✨ Key Features & Interactivity

1. **Seamless Page Navigation**: Switch instantly between the Flagship Experience, Conservatory Table Reservation, and VIP Concierge Pass using the header pills or interactive journey buttons.
2. **Interactive Conservatory Seating Map**: Click tables across 4 architectural realms (Orangerie, Velvet Rose Alcoves, Florist Atelier Counter, Fragrant Veranda) to inspect availability and reserve specific tables in real time.
3. **Live Folio Ledger**: Subtotals, guest calculations, atelier enhancements, and 5% Salon GST update automatically as you customize your experience.
4. **Interactive Shopping Cart**: Add single-origin coffees, morning harvests, and luxury hampers from the catalog into the slide-out cart drawer, update quantities, and unlock complimentary gift boxes.
5. **VIP Concierge Pass**: Generates a boarding ticket complete with reference code, QR code for entrance check-in, personalized patron details, and sensory ambiance specs.

