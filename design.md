# Wafflemeister QR Menu — Design Specification

## 1. Brand Direction

**Brand:** The Wafflemeister  
**Tagline:** Your Daily Dose of Dessert Therapy!

### Visual personality
- Premium dessert café
- Warm, indulgent, playful
- Instagram-friendly
- Dark chocolate base with waffle-gold highlights
- Food photography should be the visual focus
- Mobile-first and touch-friendly

Do not make the interface look like a generic restaurant POS system.

---

## 2. Color System

| Token | HEX | Usage |
|---|---|---|
| `--bg-primary` | `#0E0B0A` | Main page background |
| `--bg-card` | `#342B24` | Menu cards / secondary surfaces |
| `--gold` | `#B06D28` | Primary brand accent |
| `--gold-light` | `#DAAA5C` | Prices, highlights, active states |
| `--cream` | `#CDC2AD` | Secondary text / subtle UI |
| `--text-primary` | `#FEFEFE` | Main text |
| `--text-muted` | `#968E83` | Descriptions / metadata |
| `--red` | `#D72B32` | Small promotional accents only |

### Usage rule
Gold should be the primary accent. Red must remain secondary and should not become the dominant CTA color.

---

## 3. Typography

### Headings
**Poppins**
- Bold / SemiBold
- Large, confident headings
- Product names: SemiBold

### Body
**Inter**
- Regular
- Clean descriptions and metadata
- Strong readability on small screens

### Typography hierarchy
- Page title: 28–32px
- Section title: 22–24px
- Product name: 16–18px
- Description: 12–14px
- Price: 16–18px, bold
- Small labels/badges: 11–12px

---

## 4. Mobile-First Layout

Design for mobile first, approximately 360–430px wide.

### Page structure

```text
Header
↓
Hero / Brand intro
↓
Search
↓
Sticky category navigation
↓
Menu sections
↓
Product cards
↓
Footer
```

### Header
- Café logo/name
- Compact
- No oversized desktop navigation
- Optional location/contact icon

### Hero
Use a strong waffle/dessert image.
Overlay:
- The Wafflemeister
- Your Daily Dose of Dessert Therapy!

Avoid excessive animation.

### Search
Large rounded search field:
`Search for your favourite...`

Search should match:
- Product name
- Category
- Description

### Category navigation
Horizontal scroll on mobile.

Categories:
1. Belgian Waffles
2. Waffle Pops
3. Mini Pancakes
4. Pocket Waffle
5. Bubble Waffle
6. Ice-Cream Waffwich

Do not wrap categories into multiple rows.

---

## 5. Product Cards

Each product card should contain:

```text
┌─────────────────────────┐
│                         │
│      FOOD IMAGE         │
│                         │
├─────────────────────────┤
│ Product Name            │
│ Short description       │
│                         │
│ ₹149              ＋    │
└─────────────────────────┘
```

### Card rules
- Dark chocolate surface
- Rounded corners: 14–18px
- Food image ratio: approximately 4:3
- Gold price
- Gold circular `+` button
- Optional `Bestseller`, `New`, or `Spicy` badge
- Vegetarian indicator where applicable

For products with sizes:

```text
Small ₹159    Regular ₹269
```

Do not use a desktop-style table on mobile.

---

## 6. Interaction

### Buttons
Primary:
- Gold background
- Dark text
- Rounded

Secondary:
- Transparent/dark background
- Gold border
- Cream text

### Touch targets
Minimum approximately 44px height/width.

### Motion
Use subtle:
- Card hover/press feedback
- Image fade-in
- Smooth category scrolling
- Small button scale animation

Avoid excessive parallax, spinning objects, or animation that slows menu browsing.

---

## 7. Responsive Behaviour

### Mobile
- One-column product cards
- Horizontal category scroll
- Large food images
- Sticky category bar

### Tablet
- Two-column cards where space permits

### Desktop
- Maximum content width around 1100–1200px
- Two/three-column product grid
- Category navigation remains visible

The mobile experience remains the priority.

---

## 8. Accessibility

- Maintain strong contrast
- Do not communicate availability using colour alone
- Use descriptive image alt text
- Buttons must have accessible labels
- Prices must remain readable
- Avoid tiny text

---

## 9. Component Structure

Suggested components:

```text
Header
Hero
SearchBar
CategoryNav
MenuSection
ProductCard
SizeSelector
Badge
CartButton
Footer
```

If ordering is not part of the MVP, replace `+` with a simple details button or omit the cart functionality.

---

## 10. Data-Driven UI

Menu content must come from the backend/database.

Do not hardcode menu items into HTML templates.

Each menu item should support:

```text
id
category_id
name
description
price
small_price
regular_price
image
is_veg
available
badge
sort_order
```

This allows café staff to update prices and availability without changing frontend code.

## 11. Assets Folder

The `assets/` folder should contain **only the café logo**.

```text
assets/
└── logo.*
```

Do not require or bundle:
- Product/food images
- Decorative background images
- Category icons
- Extra illustrations
- Other brand assets

Product images, if used in the menu UI, should be handled separately through the menu/database image source rather than being required as local assets.
