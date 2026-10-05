/**
 * The Wafflemeister - QR Menu Data
 * Primary source of truth: menu.md & design.md
 */

/**
 * Dedicated Food Photography Assets Registry
 * 
 * IMPORTANT:
 * - Real product photographs can replace these placeholders anytime by updating only this registry
 *   or the respective `image` field in MENU_ITEMS without touching UI components.
 * - Stock food photography resides in images/ (the assets/ directory is reserved exclusively for Logo.png).
 */
const FOOD_IMAGES = {
  BELGIAN_CHOCOLATE: "images/belgian-chocolate-waffle.jpg",
  RED_VELVET: "images/red-velvet-waffle.jpg",
  WAFFLE_POP: "images/waffle-pop.jpg",
  MINI_PANCAKES: "images/mini-pancakes.jpg",
  BUBBLE_WAFFLE: "images/bubble-waffle.jpg",
  ICE_CREAM_WAFFWICH: "images/ice-cream-waffwich.jpg"
};

const MENU_CATEGORIES = [
  {
    id: "authentic-belgian-waffles",
    name: "Authentic Belgian Waffles",
    shortName: "Belgian Waffles",
    description: "Crispy on the outside, fluffy inside, served freshly baked.",
    note: null
  },
  {
    id: "waffle-pops",
    name: "Waffle Pops",
    shortName: "Waffle Pops",
    description: "Waffles on a stick, drizzled and topped to perfection.",
    note: "Available in Small & Regular sizes"
  },
  {
    id: "mini-pancakes",
    name: "Mini Pancakes",
    shortName: "Mini Pancakes",
    description: "Fluffy bite-sized Dutch mini pancakes smothered in rich toppings.",
    note: "Available in Small & Regular sizes"
  },
  {
    id: "pocket-waffle",
    name: "Pocket Waffle",
    shortName: "Pocket Waffle",
    description: "Folded on-the-go waffles filled with gourmet chocolate spreads.",
    note: null
  },
  {
    id: "hong-kong-bubble-waffle",
    name: "Hong Kong Bubble Waffle",
    shortName: "Bubble Waffle",
    description: "Crispy hexagonal egg-puff waffle with airy spherical pockets.",
    note: "Serves 2 people"
  },
  {
    id: "ice-cream-waffwich",
    name: "Ice-Cream Waffwich",
    shortName: "Ice-Cream Waffwich",
    description: "Warm artisanal waffle sandwich with rich, creamy ice cream.",
    note: null
  }
];

const MENU_ITEMS = [
  // ==========================================
  // 1. AUTHENTIC BELGIAN WAFFLES
  // ==========================================
  {
    id: "abw-honey-butter",
    category_id: "authentic-belgian-waffles",
    name: "Honey Butter",
    description: "Golden crisp waffle served with butter & honey",
    price: 99,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 1
  },
  {
    id: "abw-maple-butter",
    category_id: "authentic-belgian-waffles",
    name: "Maple Butter",
    description: "Golden crisp waffle served with butter & maple syrup",
    price: 99,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 2
  },
  {
    id: "abw-banoffee",
    category_id: "authentic-belgian-waffles",
    name: "Banoffee",
    description: "Golden crisp waffle with caramel and fresh banana",
    price: 149,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 3
  },
  {
    id: "abw-red-velvet",
    category_id: "authentic-belgian-waffles",
    name: "Red Velvet",
    description: "Red velvet waffle with white chocolate",
    price: 149,
    small_price: null,
    regular_price: null,
    image: FOOD_IMAGES.RED_VELVET,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 4
  },
  {
    id: "abw-belgian-dark-chocolate",
    category_id: "authentic-belgian-waffles",
    name: "Belgian Dark Chocolate",
    description: "Golden crisp waffle with Belgian dark chocolate",
    price: 149,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 5
  },
  {
    id: "abw-belgian-milk-chocolate",
    category_id: "authentic-belgian-waffles",
    name: "Belgian Milk Chocolate",
    description: "Golden crisp waffle with Belgian milk chocolate",
    price: 149,
    small_price: null,
    regular_price: null,
    image: FOOD_IMAGES.BELGIAN_CHOCOLATE,
    is_veg: true,
    available: true,
    badge: "Popular",
    sort_order: 6
  },
  {
    id: "abw-white-chocolate",
    category_id: "authentic-belgian-waffles",
    name: "White Chocolate",
    description: "Golden crisp waffle with white chocolate",
    price: 149,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 7
  },
  {
    id: "abw-orange-chocolate",
    category_id: "authentic-belgian-waffles",
    name: "Orange Chocolate",
    description: "Golden crisp waffle with orange-flavoured chocolate",
    price: 149,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 8
  },
  {
    id: "abw-coffee-chocolate",
    category_id: "authentic-belgian-waffles",
    name: "Coffee Chocolate",
    description: "Chocolate waffle with coffee drizzle",
    price: 159,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 9
  },
  {
    id: "abw-butterscotch",
    category_id: "authentic-belgian-waffles",
    name: "Butterscotch",
    description: "Golden crisp waffle with crunchy butterscotch chocolate",
    price: 159,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 10
  },
  {
    id: "abw-nutella",
    category_id: "authentic-belgian-waffles",
    name: "Nutella",
    description: "Golden crisp waffle with hazelnut spread",
    price: 159,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: "Bestseller",
    sort_order: 11
  },
  {
    id: "abw-chocolate-waffle",
    category_id: "authentic-belgian-waffles",
    name: "Chocolate Waffle",
    description: "Chocolate waffle with chocolate drizzle",
    price: 159,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 12
  },
  {
    id: "abw-premium-chocolate-waffle",
    category_id: "authentic-belgian-waffles",
    name: "Premium Chocolate Waffle",
    description: "Rich chocolate waffle with Belgian chocolate",
    price: 169,
    small_price: null,
    regular_price: null,
    image: FOOD_IMAGES.BELGIAN_CHOCOLATE,
    is_veg: true,
    available: true,
    badge: "Must Try",
    sort_order: 13
  },
  {
    id: "abw-oreo-waffle",
    category_id: "authentic-belgian-waffles",
    name: "Oreo Waffle",
    description: "Golden crisp waffle with Belgian milk chocolate & Oreo crumbs",
    price: 159,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: "Popular",
    sort_order: 14
  },
  {
    id: "abw-kit-kat-waffle",
    category_id: "authentic-belgian-waffles",
    name: "Kit-Kat Waffle",
    description: "Golden crisp waffle with Belgian milk chocolate & Kit-Kat",
    price: 159,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 15
  },
  {
    id: "abw-blueberry-cream-cheese",
    category_id: "authentic-belgian-waffles",
    name: "Blueberry Cream Cheese",
    description: "Golden crisp waffle with blueberry toppings & cream cheese",
    price: 159,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 16
  },
  {
    id: "abw-strawberry-cream-cheese",
    category_id: "authentic-belgian-waffles",
    name: "Strawberry Cream Cheese",
    description: "Golden crisp waffle with fresh strawberry toppings & cream cheese",
    price: 159,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 17
  },
  {
    id: "abw-dark-white-chocolate",
    category_id: "authentic-belgian-waffles",
    name: "Dark & White Chocolate",
    description: "Golden crisp waffle with dark & white chocolate",
    price: 169,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 18
  },

  // ==========================================
  // 2. WAFFLE POPS
  // ==========================================
  {
    id: "wp-belgian-milk-chocolate",
    category_id: "waffle-pops",
    name: "Belgian Milk Chocolate",
    description: "Waffle pop coated with rich Belgian milk chocolate",
    price: null,
    small_price: 159,
    regular_price: 269,
    image: FOOD_IMAGES.WAFFLE_POP,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 19
  },
  {
    id: "wp-belgian-dark-chocolate",
    category_id: "waffle-pops",
    name: "Belgian Dark Chocolate",
    description: "Waffle pop dipped in bittersweet Belgian dark chocolate",
    price: null,
    small_price: 159,
    regular_price: 269,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 20
  },
  {
    id: "wp-white-chocolate",
    category_id: "waffle-pops",
    name: "White Chocolate",
    description: "Waffle pop glazed with smooth, creamy white chocolate",
    price: null,
    small_price: 159,
    regular_price: 269,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 21
  },
  {
    id: "wp-red-velvet",
    category_id: "waffle-pops",
    name: "Red Velvet Waffle Pop",
    description: "Red velvet pop with creamy white chocolate drizzle",
    price: null,
    small_price: 159,
    regular_price: 269,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 22
  },
  {
    id: "wp-butterscotch",
    category_id: "waffle-pops",
    name: "Butterscotch",
    description: "Waffle pop smothered in butterscotch caramel chocolate",
    price: null,
    small_price: 159,
    regular_price: 269,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 23
  },
  {
    id: "wp-nutella",
    category_id: "waffle-pops",
    name: "Nutella",
    description: "Waffle pop generously laden with pure hazelnut Nutella",
    price: null,
    small_price: 169,
    regular_price: 279,
    image: FOOD_IMAGES.WAFFLE_POP,
    is_veg: true,
    available: true,
    badge: "Bestseller",
    sort_order: 24
  },
  {
    id: "wp-chocolate-waffle-pop",
    category_id: "waffle-pops",
    name: "Chocolate Waffle Pop",
    description: "Deep cocoa waffle pop with decadent chocolate glaze",
    price: null,
    small_price: 169,
    regular_price: 279,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 25
  },
  {
    id: "wp-dark-white",
    category_id: "waffle-pops",
    name: "Dark & White",
    description: "The classic duo — twin swirl of dark and white Belgian chocolate",
    price: null,
    small_price: null,
    regular_price: 279,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 26
  },
  {
    id: "wp-premium-chocolate-waffle-pop",
    category_id: "waffle-pops",
    name: "Premium Chocolate Waffle Pop",
    description: "Extra indulgent waffle pop layered with premium Belgian chocolate",
    price: null,
    small_price: null,
    regular_price: 289,
    image: null,
    is_veg: true,
    available: true,
    badge: "Must Try",
    sort_order: 27
  },

  // ==========================================
  // 3. MINI PANCAKES
  // ==========================================
  {
    id: "mp-honey-butter",
    category_id: "mini-pancakes",
    name: "Honey Butter",
    description: "Warm bite-sized mini pancakes with pure butter & honey",
    price: null,
    small_price: 139,
    regular_price: null, // Unclear in original menu source; marked for confirmation
    regular_price_confirm: true,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 28
  },
  {
    id: "mp-maple-butter",
    category_id: "mini-pancakes",
    name: "Maple Butter",
    description: "Mini pancakes served with melted butter & golden maple syrup",
    price: null,
    small_price: 139,
    regular_price: 189,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 29
  },
  {
    id: "mp-banana-caramel",
    category_id: "mini-pancakes",
    name: "Banana Caramel",
    description: "Mini pancakes topped with fresh banana slices and caramel",
    price: null,
    small_price: 159,
    regular_price: 199,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 30
  },
  {
    id: "mp-belgian-milk-chocolate",
    category_id: "mini-pancakes",
    name: "Belgian Milk Chocolate",
    description: "Mini pancakes covered in warm silky Belgian milk chocolate",
    price: null,
    small_price: 159,
    regular_price: 199,
    image: FOOD_IMAGES.MINI_PANCAKES,
    is_veg: true,
    available: true,
    badge: "Popular",
    sort_order: 31
  },
  {
    id: "mp-belgian-dark-chocolate",
    category_id: "mini-pancakes",
    name: "Belgian Dark Chocolate",
    description: "Mini pancakes drenched in intense Belgian dark chocolate",
    price: null,
    small_price: 159,
    regular_price: 199,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 32
  },
  {
    id: "mp-belgian-white-chocolate",
    category_id: "mini-pancakes",
    name: "Belgian White Chocolate",
    description: "Mini pancakes draped in velvety Belgian white chocolate",
    price: null,
    small_price: 159,
    regular_price: 199,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 33
  },
  {
    id: "mp-butterscotch-chocolate",
    category_id: "mini-pancakes",
    name: "Butterscotch Chocolate",
    description: "Mini pancakes topped with crunchy butterscotch & chocolate",
    price: null,
    small_price: 159,
    regular_price: 199,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 34
  },
  {
    id: "mp-red-velvet",
    category_id: "mini-pancakes",
    name: "Red Velvet",
    description: "Velvety crimson mini pancakes crowned with white chocolate",
    price: null,
    small_price: 169,
    regular_price: 219,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 35
  },
  {
    id: "mp-chocolate",
    category_id: "mini-pancakes",
    name: "Chocolate",
    description: "Classic mini pancakes coated in rich chocolate sauce",
    price: null,
    small_price: 169,
    regular_price: 219,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 36
  },
  {
    id: "mp-nutella-chocolate",
    category_id: "mini-pancakes",
    name: "Nutella Chocolate",
    description: "Mini pancakes generously layered with hazelnut Nutella & chocolate",
    price: null,
    small_price: 169,
    regular_price: 229,
    image: FOOD_IMAGES.MINI_PANCAKES,
    is_veg: true,
    available: true,
    badge: "Bestseller",
    sort_order: 37
  },

  // ==========================================
  // 4. POCKET WAFFLE
  // ==========================================
  {
    id: "pw-belgian-chocolate",
    category_id: "pocket-waffle",
    name: "Belgian Chocolate",
    description: "Handheld pocket waffle stuffed with silky Belgian chocolate",
    price: 79,
    small_price: null,
    regular_price: null,
    image: FOOD_IMAGES.BELGIAN_CHOCOLATE,
    is_veg: true,
    available: true,
    badge: "Bestseller",
    sort_order: 38
  },
  {
    id: "pw-red-velvet",
    category_id: "pocket-waffle",
    name: "Red Velvet",
    description: "Crispy red velvet pocket waffle with melted white chocolate filling",
    price: 89,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 39
  },
  {
    id: "pw-chocolate-waffle",
    category_id: "pocket-waffle",
    name: "Chocolate Waffle",
    description: "Rich cocoa waffle pocket overflowing with luscious melted chocolate",
    price: 89,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 40
  },

  // ==========================================
  // 5. HONG KONG BUBBLE WAFFLE (Serves 2 people)
  // ==========================================
  {
    id: "hkb-original",
    category_id: "hong-kong-bubble-waffle",
    name: "Original Bubble Waffle",
    description: "Traditional golden crispy bubble waffle with airy custard-like spheres. Serves 2 people.",
    price: 230,
    small_price: null,
    regular_price: null,
    image: FOOD_IMAGES.BUBBLE_WAFFLE,
    is_veg: true,
    available: true,
    badge: "Serves 2",
    sort_order: 41
  },
  {
    id: "hkb-chocolate",
    category_id: "hong-kong-bubble-waffle",
    name: "Chocolate Bubble Waffle",
    description: "Crispy chocolate bubble waffle loaded with rich chocolate drizzle. Serves 2 people.",
    price: 260,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: "Serves 2",
    sort_order: 42
  },
  {
    id: "hkb-red-velvet",
    category_id: "hong-kong-bubble-waffle",
    name: "Red Velvet Bubble Waffle",
    description: "Vibrant red velvet bubble waffle complemented with sweet white chocolate. Serves 2 people.",
    price: 260,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: "Serves 2",
    sort_order: 43
  },
  {
    id: "hkb-premium",
    category_id: "hong-kong-bubble-waffle",
    name: "Premium Bubble Waffle",
    description: "Signature bubble waffle lavishly dressed with gourmet Belgian chocolate. Serves 2 people.",
    price: 270,
    small_price: null,
    regular_price: null,
    image: null,
    is_veg: true,
    available: true,
    badge: "Must Try",
    sort_order: 44
  },
  {
    id: "hkb-nutella",
    category_id: "hong-kong-bubble-waffle",
    name: "Nutella Bubble Waffle",
    description: "Warm bubble waffle smothered in luscious hazelnut Nutella spread. Serves 2 people.",
    price: 290,
    small_price: null,
    regular_price: null,
    image: FOOD_IMAGES.BUBBLE_WAFFLE,
    is_veg: true,
    available: true,
    badge: "Bestseller",
    sort_order: 45
  },

  // ==========================================
  // 6. ICE-CREAM WAFFWICH
  // ==========================================
  {
    id: "icw-vanilla",
    category_id: "ice-cream-waffwich",
    name: "Vanilla",
    description: "Warm crispy Belgian waffle sandwich packed with rich, creamy vanilla ice cream",
    price: 150,
    small_price: null,
    regular_price: null,
    image: FOOD_IMAGES.ICE_CREAM_WAFFWICH,
    is_veg: true,
    available: true,
    badge: null,
    sort_order: 46
  },
  {
    id: "icw-chocolate",
    category_id: "ice-cream-waffwich",
    name: "Chocolate",
    description: "Decadent crispy waffle sandwich filled with rich, creamy chocolate ice cream",
    price: 150,
    small_price: null,
    regular_price: null,
    image: FOOD_IMAGES.ICE_CREAM_WAFFWICH,
    is_veg: true,
    available: true,
    badge: "Popular",
    sort_order: 47
  }
];
