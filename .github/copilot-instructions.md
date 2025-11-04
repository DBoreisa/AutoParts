# Copilot Instructions for auto_parts React Project

## Project Overview
- This is a React app bootstrapped with Create React App, focused on Audi auto parts sales and catalog browsing.
- Main features: product catalog, cart, payment flow, currency switching, filtering, and social media integration.
- Data is fetched from an external API (`https://api.gearpro01e.com/products/`).

## Key Architecture & Patterns
- **Component Structure:**
  - All UI components are in `src/components/`, organized by feature (e.g., `Cart`, `ItemsCarousel`, `OnSale`).
  - Pages are in `src/pages/` (e.g., `HomePage.jsx`, `CatalogPage.jsx`).
  - Contexts for global state: `src/contexts/` (Cart, Currency, Search, Theme).
  - Custom hooks in `src/hooks/` (e.g., `useCart`, `useProductSearch`).
  - Static data in `src/data/` (e.g., `carsData.js`).
- **Styling:**
  - Uses Material-UI (`@mui/material`) for layout and theming.
  - Theme logic in `src/theme/getTheme.js`.
- **API Integration:**
  - Product data is loaded via Axios in page components (see `HomePage.jsx`).
  - Payment status is handled via URL query params and triggers cart clearing.
- **Mobile Responsiveness:**
  - Uses `useMediaQuery` and conditional rendering for mobile/desktop layouts.

## Developer Workflows
- **Start Dev Server:**
  - `npm start` (runs on http://localhost:3000)
- **Run Tests:**
  - `npm test` (Jest, see `src/App.test.js`)
- **Build for Production:**
  - `npm run build` (outputs to `build/`)
- **Linting:**
  - Follows Create React App defaults; no custom lint config detected.

## Project-Specific Conventions
- **Component Exports:**
  - Each component folder has an `index.js` for re-exports.
- **Context Usage:**
  - Use React Context for global state (cart, currency, theme, search).
- **API URLs:**
  - All product data comes from `https://api.gearpro01e.com/products/`.
- **Snackbar Notifications:**
  - Payment success/failure is shown via Material-UI `Snackbar` and `Alert` (see `HomePage.jsx`).
- **Social Media Links:**
  - Facebook and Instagram icons/links in the homepage footer.

## Integration Points
- **External API:**
  - All product data and sale status fetched via Axios from the GearPro API.
- **Material-UI:**
  - Used for layout, theming, and UI components.
- **React Router:**
  - Not explicitly shown, but likely used for page navigation (check `src/pages/`).

## Example Patterns
- **Fetching Products:**
  ```js
  useEffect(() => {
    axios.get('https://api.gearpro01e.com/products/?sort=Date')
      .then(res => setFiveProducts(res.data.slice(0, 5)));
  }, []);
  ```
- **Context Usage:**
  ```js
  const { clearCart } = useCart();
  ```
- **Conditional Rendering for Mobile/Desktop:**
  ```js
  {isMobile ? <RecentlyAdded /> : <ItemsCarousel items={fiveProducts} />}
  ```

## Key Files & Directories
- `src/components/` — UI components
- `src/pages/` — Main pages
- `src/contexts/` — React Contexts
- `src/hooks/` — Custom hooks
- `src/data/` — Static data
- `src/theme/` — Theme logic

---
**For AI agents:**
- Follow the above structure for new features/components.
- Use Material-UI for all new UI elements.
- Fetch product data from the GearPro API unless otherwise specified.
- Use React Context for global state management.
- Place new pages in `src/pages/` and new components in `src/components/[Feature]/`.
- Ask for clarification if a workflow or pattern is unclear or missing.
