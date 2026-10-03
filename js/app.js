/**
 * The Wafflemeister - QR Menu Application Logic
 * Mobile-first interactive behavior & dynamic rendering
 */

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const categoryNavInner = document.getElementById("categoryNavInner");
  const menuSectionsContainer = document.getElementById("menuSectionsContainer");
  const searchInput = document.getElementById("searchInput");
  const searchClearBtn = document.getElementById("searchClearBtn");
  const searchMetaStatus = document.getElementById("searchMetaStatus");
  const searchStatusText = document.getElementById("searchStatusText");
  const searchResetLink = document.getElementById("searchResetLink");
  const backToTopBtn = document.getElementById("backToTopBtn");

  // Modal Elements
  const itemModal = document.getElementById("itemModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalCategoryName = document.getElementById("modalCategoryName");
  const modalItemTitle = document.getElementById("modalItemTitle");
  const modalItemDesc = document.getElementById("modalItemDesc");
  const modalPriceValues = document.getElementById("modalPriceValues");
  const modalVegBadge = document.getElementById("modalVegBadge");
  const modalHeroVisual = document.getElementById("modalHeroVisual");

  let activeCategoryIndex = 0;
  let isNavClickScrolling = false;

  // -------------------------------------------------------------------------
  // 1. Initial Render: Category Navigation & Menu Sections
  // -------------------------------------------------------------------------
  function renderCategoryNav() {
    categoryNavInner.innerHTML = "";
    MENU_CATEGORIES.forEach((cat, index) => {
      const pill = document.createElement("button");
      pill.className = `category-pill ${index === 0 ? "active" : ""}`;
      pill.setAttribute("role", "tab");
      pill.setAttribute("aria-selected", index === 0 ? "true" : "false");
      pill.setAttribute("data-category-id", cat.id);
      pill.id = `pill-${cat.id}`;
      pill.textContent = cat.name;

      pill.addEventListener("click", () => {
        handleCategoryClick(cat.id, pill);
      });

      categoryNavInner.appendChild(pill);
    });
  }

  function createProductCard(item, category) {
    const card = document.createElement("article");
    card.className = "product-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${item.name}, ${formatPriceSpeech(item)}`);
    card.id = `product-${item.id}`;

    // Price markup generation
    let priceMarkup = "";
    if (item.price !== null) {
      priceMarkup = `
        <div class="price-container">
          <span class="single-price">₹${item.price}</span>
        </div>
      `;
    } else {
      // Multi-size products
      const parts = [];
      if (item.small_price !== null) {
        parts.push(`
          <span class="size-price-pill">
            <span class="size-label">Small</span>
            <span class="size-val">₹${item.small_price}</span>
          </span>
        `);
      }
      if (item.regular_price !== null) {
        parts.push(`
          <span class="size-price-pill">
            <span class="size-label">Regular</span>
            <span class="size-val">₹${item.regular_price}</span>
          </span>
        `);
      } else if (item.regular_price_confirm) {
        parts.push(`
          <span class="size-price-pill">
            <span class="size-label">Regular</span>
            <span class="size-val confirm" title="Please confirm price with server">Confirm</span>
          </span>
        `);
      }

      priceMarkup = `
        <div class="multi-size-price-row">
          ${parts.join('<span class="size-divider">·</span>')}
        </div>
      `;
    }

    // Badge markup
    let badgeMarkup = "";
    if (item.badge) {
      const badgeClass = item.badge.toLowerCase().replace(/\s+/g, "-");
      badgeMarkup = `<span class="promo-badge ${badgeClass}">${item.badge}</span>`;
    }

    // Image & Placeholder markup
    const imgMarkup = item.image
      ? `<img src="${item.image}" alt="${item.name}" class="product-real-img" loading="lazy" onload="this.classList.add('loaded')" onerror="this.style.display='none'">`
      : "";

    card.innerHTML = `
      <div class="product-image-wrap">
        <div class="card-top-badges">
          <div class="veg-badge-box" title="100% Pure Vegetarian" aria-label="Vegetarian">
            <span class="veg-dot"></span>
          </div>
          ${badgeMarkup}
        </div>
        <div class="food-placeholder">
          <div class="waffle-emboss-pattern"></div>
          <svg class="placeholder-brand-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6C17.37 6 12 11.37 12 18C12 21.05 13.14 23.83 15 25.96V38C15 40.21 16.79 42 19 42H29C31.21 42 33 40.21 33 38V25.96C34.86 23.83 36 21.05 36 18C36 11.37 30.63 6 24 6Z" fill="#B06D28" fill-opacity="0.2" stroke="#DAAA5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19 28H29M17 34H31" stroke="#DAAA5C" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span class="placeholder-label">${category.shortName}</span>
        </div>
        ${imgMarkup}
      </div>

      <div class="product-card-body">
        <div class="product-name-row">
          <h3 class="product-name">${item.name}</h3>
        </div>
        <p class="product-description">${item.description}</p>
        <div class="product-footer-row">
          ${priceMarkup}
          <button class="card-action-btn" type="button" aria-label="View details for ${item.name}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5V19M5 12H19" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    // Interactivity: open item detail modal
    card.addEventListener("click", () => openItemModal(item, category));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openItemModal(item, category);
      }
    });

    return card;
  }

  function formatPriceSpeech(item) {
    if (item.price !== null) return `Rupees ${item.price}`;
    if (item.small_price && item.regular_price) return `Small Rupees ${item.small_price}, Regular Rupees ${item.regular_price}`;
    if (item.regular_price) return `Regular Rupees ${item.regular_price}`;
    return "Price on request";
  }

  function renderMenuSections() {
    menuSectionsContainer.innerHTML = "";

    MENU_CATEGORIES.forEach((category) => {
      const items = MENU_ITEMS.filter((item) => item.category_id === category.id && item.available);

      const section = document.createElement("section");
      section.className = "menu-section";
      section.id = `section-${category.id}`;
      section.setAttribute("data-category-id", category.id);

      // Section Header
      const header = document.createElement("div");
      header.className = "menu-section-header";
      header.innerHTML = `
        <div class="section-title-row">
          <h2 class="section-title">
            ${category.name}
            <span class="section-count-badge">${items.length}</span>
          </h2>
        </div>
        <p class="section-subtitle">${category.description}</p>
        ${category.note ? `<div class="section-note-badge">✨ ${category.note}</div>` : ""}
      `;
      section.appendChild(header);

      // Product Grid (Strictly 1 column on mobile)
      const grid = document.createElement("div");
      grid.className = "product-grid";

      items.forEach((item) => {
        const card = createProductCard(item, category);
        grid.appendChild(card);
      });

      section.appendChild(grid);
      menuSectionsContainer.appendChild(section);
    });
  }

  // -------------------------------------------------------------------------
  // 2. Category Navigation Click & Scroll Handling
  // -------------------------------------------------------------------------
  function handleCategoryClick(categoryId, pillElement) {
    const targetSection = document.getElementById(`section-${categoryId}`);
    if (!targetSection) return;

    // Clear search if user clicks a category tab
    if (searchInput.value.trim() !== "") {
      searchInput.value = "";
      handleSearchInput();
    }

    isNavClickScrolling = true;
    updateActiveCategoryPill(categoryId);

    // Calculate position taking sticky header + category bar into account
    const headerOffset = 120;
    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    setTimeout(() => {
      isNavClickScrolling = false;
    }, 600);
  }

  function updateActiveCategoryPill(categoryId) {
    const allPills = document.querySelectorAll(".category-pill");
    allPills.forEach((pill) => {
      const isActive = pill.getAttribute("data-category-id") === categoryId;
      pill.classList.toggle("active", isActive);
      pill.setAttribute("aria-selected", isActive ? "true" : "false");

      if (isActive) {
        // Smoothly scroll horizontal category nav to center active pill
        const pillLeft = pill.offsetLeft;
        const pillWidth = pill.offsetWidth;
        const containerWidth = categoryNavInner.clientWidth;
        categoryNavInner.scrollTo({
          left: pillLeft - containerWidth / 2 + pillWidth / 2,
          behavior: "smooth"
        });
      }
    });
  }

  // -------------------------------------------------------------------------
  // 3. ScrollSpy via IntersectionObserver
  // -------------------------------------------------------------------------
  function initScrollSpy() {
    const sections = document.querySelectorAll(".menu-section");
    if (!sections.length) return;

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      if (isNavClickScrolling) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.getAttribute("data-category-id");
          if (categoryId) {
            updateActiveCategoryPill(categoryId);
          }
        }
      });
    }, observerOptions);

    sections.forEach((sec) => observer.observe(sec));
  }

  // -------------------------------------------------------------------------
  // 4. Live Instant Search
  // -------------------------------------------------------------------------
  function handleSearchInput() {
    const query = searchInput.value.trim().toLowerCase();

    // Toggle search clear button
    searchClearBtn.classList.toggle("visible", query.length > 0);

    const sections = document.querySelectorAll(".menu-section");
    let totalMatches = 0;

    if (query === "") {
      // Restore all
      searchMetaStatus.classList.remove("active");
      sections.forEach((sec) => {
        sec.style.display = "block";
        const cards = sec.querySelectorAll(".product-card");
        cards.forEach((c) => (c.style.display = "flex"));
      });
      removeNoResultsState();
      return;
    }

    // Filter items
    MENU_CATEGORIES.forEach((category) => {
      const section = document.getElementById(`section-${category.id}`);
      if (!section) return;

      let sectionMatches = 0;
      const cards = section.querySelectorAll(".product-card");

      cards.forEach((card) => {
        const itemId = card.id.replace("product-", "");
        const item = MENU_ITEMS.find((it) => it.id === itemId);

        if (!item) return;

        const nameMatch = item.name.toLowerCase().includes(query);
        const descMatch = item.description.toLowerCase().includes(query);
        const catMatch = category.name.toLowerCase().includes(query);

        if (nameMatch || descMatch || catMatch) {
          card.style.display = "flex";
          sectionMatches++;
          totalMatches++;
        } else {
          card.style.display = "none";
        }
      });

      // Hide section if no products match
      section.style.display = sectionMatches > 0 ? "block" : "none";
    });

    // Update search metadata banner
    searchMetaStatus.classList.add("active");
    searchStatusText.textContent = `Found ${totalMatches} item${totalMatches === 1 ? "" : "s"} matching "${query}"`;

    if (totalMatches === 0) {
      showNoResultsState(query);
    } else {
      removeNoResultsState();
    }
  }

  function showNoResultsState(query) {
    removeNoResultsState();
    const emptyBox = document.createElement("div");
    emptyBox.className = "no-results-state";
    emptyBox.id = "emptySearchState";
    emptyBox.innerHTML = `
      <svg class="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="8" stroke-width="2"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2" stroke-linecap="round"/>
        <line x1="8" y1="11" x2="14" y2="11" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <h3 class="no-results-title">No matching treats found</h3>
      <p class="no-results-desc">We couldn't find anything matching "${query}". Try searching for chocolate, nutella, or waffle.</p>
      <button class="clear-search-action-btn" type="button" id="emptyResetBtn">View All Treats</button>
    `;

    menuSectionsContainer.appendChild(emptyBox);

    document.getElementById("emptyResetBtn")?.addEventListener("click", () => {
      searchInput.value = "";
      handleSearchInput();
    });
  }

  function removeNoResultsState() {
    const existing = document.getElementById("emptySearchState");
    if (existing) existing.remove();
  }

  searchInput.addEventListener("input", handleSearchInput);

  searchClearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    handleSearchInput();
  });

  searchResetLink.addEventListener("click", (e) => {
    e.preventDefault();
    searchInput.value = "";
    handleSearchInput();
  });

  // -------------------------------------------------------------------------
  // 5. Item Detail Modal / Bottom Sheet
  // -------------------------------------------------------------------------
  function openItemModal(item, category) {
    modalCategoryName.textContent = category.name;
    modalItemTitle.textContent = item.name;
    modalItemDesc.textContent = item.description;

    // Price section in modal
    let priceDetails = "";
    if (item.price !== null) {
      priceDetails = `
        <div class="modal-price-title">Price</div>
        <div class="single-price">₹${item.price}</div>
      `;
    } else {
      const parts = [];
      if (item.small_price !== null) {
        parts.push(`
          <div class="size-price-pill">
            <span class="size-label">Small Size:</span>
            <span class="size-val">₹${item.small_price}</span>
          </div>
        `);
      }
      if (item.regular_price !== null) {
        parts.push(`
          <div class="size-price-pill">
            <span class="size-label">Regular Size:</span>
            <span class="size-val">₹${item.regular_price}</span>
          </div>
        `);
      } else if (item.regular_price_confirm) {
        parts.push(`
          <div class="size-price-pill">
            <span class="size-label">Regular Size:</span>
            <span class="size-val confirm">Confirm with Server</span>
          </div>
        `);
      }

      priceDetails = `
        <div class="modal-price-title">Portion Options & Pricing</div>
        <div class="modal-price-values">${parts.join("")}</div>
      `;
    }
    modalPriceValues.innerHTML = priceDetails;

    // Modal Visual / Placeholder
    if (item.image) {
      modalHeroVisual.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;">
      `;
    } else {
      modalHeroVisual.innerHTML = `
        <div class="food-placeholder" style="aspect-ratio:16/9;width:100%;">
          <div class="waffle-emboss-pattern"></div>
          <svg class="placeholder-brand-icon" style="width:56px;height:56px;" viewBox="0 0 48 48" fill="none">
            <path d="M24 6C17.37 6 12 11.37 12 18C12 21.05 13.14 23.83 15 25.96V38C15 40.21 16.79 42 19 42H29C31.21 42 33 40.21 33 38V25.96C34.86 23.83 36 21.05 36 18C36 11.37 30.63 6 24 6Z" fill="#B06D28" fill-opacity="0.2" stroke="#DAAA5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19 28H29M17 34H31" stroke="#DAAA5C" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span class="placeholder-label" style="font-size:12px;">${category.name}</span>
        </div>
      `;
    }

    itemModal.classList.add("open");
    itemModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent background scroll
    modalCloseBtn.focus();
  }

  function closeItemModal() {
    itemModal.classList.remove("open");
    itemModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  modalCloseBtn.addEventListener("click", closeItemModal);
  itemModal.addEventListener("click", (e) => {
    if (e.target === itemModal) {
      closeItemModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && itemModal.classList.contains("open")) {
      closeItemModal();
    }
  });

  // -------------------------------------------------------------------------
  // 6. Back to Top Floating Button
  // -------------------------------------------------------------------------
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 450) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // -------------------------------------------------------------------------
  // Initialize
  // -------------------------------------------------------------------------
  renderCategoryNav();
  renderMenuSections();
  initScrollSpy();
});
