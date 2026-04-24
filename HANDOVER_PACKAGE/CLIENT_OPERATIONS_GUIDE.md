# CLIENT OPERATIONS GUIDE: TOTAL AUTONOMY
**A HANDBOOK FOR THE DIRTY DOGS MTL WEB PLATFORM**

## 1. INTRODUCTION
Welcome to your digital storefront. This guide is designed for business owners and restaurant staff to manage the website without any coding knowledge. Every update you need to make is contained in one simple file: `src/data/menuData.js`.

---

## 2. HOW TO UPDATE YOUR MENU
To change a price, a description, or an image, you only need to look for the "labels" inside the menu file.

### A. Updating Food Items (Burgers, Dogs, Tacos, Poutines)
- **Changing Prices**: Look for the `price: 15` line and change the number.
- **Toggle Burger to Dog**: If an item has `has_dog_option: true`, the website will automatically show a "Hot Dog" button.
- **Adding Stickers**: Set `is_greasy: true` for the "Hangover Cure" tag.

### B. Updating the Bar (Cocktails & Mocktails)
- **Rush Friendly**: Set `is_rush_friendly: true` for bar staff efficiency management.
- **Descriptions**: List ingredients in an appetizing way in the description field.

### C. Large Format & Bundle Pricing
- **Beer Pitchers**: Set `pitcher_price` to show the Jug option.
- **Shot Bundles**: Use `bundle_qty` and `bundle_price` for volume discounts.

---

## 3. MANAGING DELIVERY LINKS
If your Uber Eats or DoorDash link changes, open `src/App.jsx` and replace the href URLs in the order-grid section (around line 347).

---

## 4. DESIGN & AESTHETIC STANDARDS
Maintain the "Modern Street" premium feel by using high-contrast, rim-lit photography on dark backgrounds. Use `.webp` or `.png` for maximum performance.

---

## 5. TECHNICAL SUPPORT & UPDATES
The website is hosted on Firebase with automated deployments via GitHub. Any change saved to the main folder will go live in 2-3 minutes.

---
**OPERATIONAL VERIFICATION**: This guide ensures that the Dirty Dogs team maintains total control over their digital menu and storefront presence.
