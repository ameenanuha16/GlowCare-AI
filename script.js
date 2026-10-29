"use strict";

/*
  GlowCare AI demonstration store.
  Prices are approximate INR estimates, not live-verified prices.
  Product image links are illustrative remote image sources; replace them
  with official product image URLs if a particular package image is needed.
*/

const products = [
  {
    id: 1, brand: "Minimalist", name: "Salicylic Acid Cleanser",
    category: "Cleanser", size: "100 ml", price: 299, use: "AM / PM",
    skin: ["oily", "combination"], concerns: ["acne"],
    image: "https://placehold.co/600x600/F9E8E8/773F50?text=Minimalist%0ACleanser",
    alternative: "Budget option: Simple Refreshing Face Wash"
  },
  {
    id: 2, brand: "Simple", name: "Refreshing Facial Wash",
    category: "Cleanser", size: "150 ml", price: 385, use: "AM / PM",
    skin: ["oily", "combination", "normal", "sensitive"], concerns: ["acne", "basic", "dullness"],
    image: "https://placehold.co/600x600/E6F1E7/35533B?text=Simple%0AFace+Wash",
    alternative: "Alternative: Cetaphil Gentle Cleanser"
  },
  {
    id: 3, brand: "Cetaphil", name: "Gentle Skin Cleanser",
    category: "Cleanser", size: "125 ml", price: 399, use: "AM / PM",
    skin: ["dry", "normal", "sensitive"], concerns: ["dryness", "basic"],
    image: "https://placehold.co/600x600/F3EBDD/6C5C43?text=Cetaphil%0ACleanser",
    alternative: "Budget option: Simple Refreshing Face Wash"
  },
  {
    id: 4, brand: "CeraVe", name: "Foaming Facial Cleanser",
    category: "Cleanser", size: "236 ml", price: 999, use: "AM / PM",
    skin: ["oily", "combination"], concerns: ["acne", "basic"],
    image: "https://placehold.co/600x600/E4ECF6/38577B?text=CeraVe%0AFoaming+Cleanser",
    alternative: "Budget option: Simple Refreshing Face Wash"
  },
  {
    id: 5, brand: "Foxtale", name: "Daily Duet Cleanser",
    category: "Cleanser", size: "100 ml", price: 299, use: "AM / PM",
    skin: ["oily", "combination", "normal"], concerns: ["acne", "basic"],
    image: "https://placehold.co/600x600/F8E1E9/8D5268?text=Foxtale%0ACleanser",
    alternative: "Alternative: Simple Refreshing Face Wash"
  },
  {
    id: 6, brand: "Neutrogena", name: "Oil-Free Acne Wash",
    category: "Cleanser", size: "175 ml", price: 599, use: "PM / as tolerated",
    skin: ["oily", "combination"], concerns: ["acne"],
    image: "https://placehold.co/600x600/FFF0DF/8A5730?text=Neutrogena%0AAcne+Wash",
    alternative: "Budget option: Simple Refreshing Face Wash"
  },
  {
    id: 7, brand: "Minimalist", name: "Vitamin B5 Moisturizer",
    category: "Moisturizer", size: "50 g", price: 349, use: "AM / PM",
    skin: ["oily", "combination", "normal"], concerns: ["acne", "basic", "dullness"],
    image: "https://placehold.co/600x600/F5E7D9/755A43?text=Minimalist%0AMoisturizer",
    alternative: "Budget option: Simple Hydrating Light Moisturiser"
  },
  {
    id: 8, brand: "Simple", name: "Hydrating Light Moisturiser",
    category: "Moisturizer", size: "125 ml", price: 399, use: "AM / PM",
    skin: ["oily", "combination", "normal", "sensitive"], concerns: ["basic", "acne", "dullness"],
    image: "https://placehold.co/600x600/E4F0E7/35533B?text=Simple%0AMoisturiser",
    alternative: "Alternative: Minimalist Vitamin B5 Moisturizer"
  },
  {
    id: 9, brand: "Cetaphil", name: "Moisturising Cream",
    category: "Moisturizer", size: "80 g", price: 499, use: "AM / PM",
    skin: ["dry", "normal", "sensitive"], concerns: ["dryness", "basic"],
    image: "https://placehold.co/600x600/F2EBDD/6C5C43?text=Cetaphil%0ACream",
    alternative: "Budget option: Simple Hydrating Light Moisturiser"
  },
  {
    id: 10, brand: "CeraVe", name: "Moisturising Lotion",
    category: "Moisturizer", size: "236 ml", price: 999, use: "AM / PM",
    skin: ["dry", "normal", "sensitive"], concerns: ["dryness", "basic"],
    image: "https://placehold.co/600x600/E4ECF6/38577B?text=CeraVe%0ALotion",
    alternative: "Budget option: Simple Hydrating Light Moisturiser"
  },
  {
    id: 11, brand: "Foxtale", name: "Oil-Balancing Moisturiser",
    category: "Moisturizer", size: "50 g", price: 349, use: "AM / PM",
    skin: ["oily", "combination"], concerns: ["acne", "basic"],
    image: "https://placehold.co/600x600/F8E1E9/8D5268?text=Foxtale%0AMoisturiser",
    alternative: "Budget option: Minimalist Vitamin B5 Moisturizer"
  },
  {
    id: 12, brand: "Dot & Key", name: "Hydrating Moisturizer",
    category: "Moisturizer", size: "60 ml", price: 395, use: "AM / PM",
    skin: ["dry", "normal", "combination"], concerns: ["dryness", "dullness"],
    image: "https://placehold.co/600x600/F6E5F0/805170?text=Dot+%26+Key%0AMoisturizer",
    alternative: "Budget option: Simple Hydrating Light Moisturiser"
  },
  {
    id: 13, brand: "Minimalist", name: "Niacinamide 5% Serum",
    category: "Serum", size: "30 ml", price: 599, use: "AM or PM",
    skin: ["oily", "combination", "normal"], concerns: ["acne", "marks"],
    image: "https://placehold.co/600x600/F7E6D8/79573C?text=Minimalist%0ANiacinamide",
    alternative: "Optional step: skip serum to save money"
  },
  {
    id: 14, brand: "The Ordinary", name: "Niacinamide 10% + Zinc 1%",
    category: "Serum", size: "30 ml", price: 850, use: "AM or PM",
    skin: ["oily", "combination"], concerns: ["acne", "marks"],
    image: "https://placehold.co/600x600/F0F0EC/454545?text=The+Ordinary%0ANiacinamide",
    alternative: "Budget option: Minimalist Niacinamide 5%"
  },
  {
    id: 15, brand: "Minimalist", name: "Alpha Arbutin 2% Serum",
    category: "Serum", size: "30 ml", price: 549, use: "AM or PM",
    skin: ["oily", "dry", "combination", "normal"], concerns: ["marks", "dullness"],
    image: "https://placehold.co/600x600/F7E6D8/79573C?text=Minimalist%0AAlpha+Arbutin",
    alternative: "Budget option: skip serum and use sunscreen consistently"
  },
  {
    id: 16, brand: "The Ordinary", name: "Hyaluronic Acid 2% + B5",
    category: "Serum", size: "30 ml", price: 850, use: "AM or PM",
    skin: ["dry", "normal", "combination"], concerns: ["dryness", "dullness"],
    image: "https://placehold.co/600x600/F0F0EC/454545?text=The+Ordinary%0AHyaluronic+Acid",
    alternative: "Budget option: use moisturiser on slightly damp skin"
  },
  {
    id: 17, brand: "Foxtale", name: "Vitamin C Serum",
    category: "Serum", size: "30 ml", price: 549, use: "AM",
    skin: ["normal", "combination", "oily"], concerns: ["marks", "dullness"],
    image: "https://placehold.co/600x600/F8E1E9/8D5268?text=Foxtale%0AVitamin+C",
    alternative: "Budget option: skip serum and prioritise sunscreen"
  },
  {
    id: 18, brand: "Plum", name: "Niacinamide Serum",
    category: "Serum", size: "30 ml", price: 599, use: "AM or PM",
    skin: ["oily", "combination"], concerns: ["acne", "marks"],
    image: "https://placehold.co/600x600/F3E6F0/805170?text=Plum%0ASerum",
    alternative: "Budget option: Minimalist Niacinamide 5%"
  },
  {
    id: 19, brand: "Minimalist", name: "SPF 50 Sunscreen",
    category: "Sunscreen", size: "50 g", price: 399, use: "AM; reapply outdoors",
    skin: ["oily", "dry", "combination", "normal", "sensitive"], concerns: ["acne", "marks", "dullness", "basic", "dryness"],
    image: "https://placehold.co/600x600/F7E6D8/79573C?text=Minimalist%0ASPF+50",
    alternative: "Compare price per gram with other SPF 50 options"
  },
  {
    id: 20, brand: "Neutrogena", name: "Ultra Sheer Sunscreen",
    category: "Sunscreen", size: "50 ml", price: 499, use: "AM; reapply outdoors",
    skin: ["oily", "dry", "combination", "normal"], concerns: ["acne", "marks", "dullness", "basic", "dryness"],
    image: "https://placehold.co/600x600/FFF0DF/8A5730?text=Neutrogena%0ASPF+50",
    alternative: "Compare finishes and labels before choosing"
  },
  {
    id: 21, brand: "Foxtale", name: "Cover-Up SPF 50 Sunscreen",
    category: "Sunscreen", size: "50 g", price: 399, use: "AM; reapply outdoors",
    skin: ["oily", "dry", "combination", "normal"], concerns: ["acne", "marks", "dullness", "basic", "dryness"],
    image: "https://placehold.co/600x600/F8E1E9/8D5268?text=Foxtale%0ASPF+50",
    alternative: "Choose the sunscreen finish you will use consistently"
  },
  {
    id: 22, brand: "Dot & Key", name: "Watermelon Cooling Sunscreen",
    category: "Sunscreen", size: "50 g", price: 449, use: "AM; reapply outdoors",
    skin: ["oily", "combination", "normal"], concerns: ["acne", "marks", "dullness", "basic"],
    image: "https://placehold.co/600x600/F6E5F0/805170?text=Dot+%26+Key%0ASPF+50",
    alternative: "Compare labels and finishes before buying"
  },
  {
    id: 23, brand: "CeraVe", name: "AM Facial Moisturising Lotion SPF",
    category: "Sunscreen", size: "52 ml", price: 1499, use: "AM; follow label",
    skin: ["dry", "normal", "combination"], concerns: ["basic", "dryness"],
    image: "https://placehold.co/600x600/E4ECF6/38577B?text=CeraVe%0AAM+Lotion",
    alternative: "Budget option: a separate moisturiser and SPF 50 sunscreen"
  },
  {
    id: 24, brand: "The Derma Co", name: "1% Hyaluronic Sunscreen",
    category: "Sunscreen", size: "50 g", price: 399, use: "AM; reapply outdoors",
    skin: ["dry", "normal", "combination", "oily"], concerns: ["marks", "dullness", "basic", "dryness", "acne"],
    image: "https://placehold.co/600x600/E3E8F8/475A8A?text=The+Derma+Co%0ASPF+50",
    alternative: "Compare finish and price with other SPF 50 options"
  },
  {
    id: 25, brand: "Minimalist", name: "Oat Extract Cleanser",
    category: "Cleanser", size: "100 ml", price: 299, use: "AM / PM",
    skin: ["dry", "normal", "sensitive"], concerns: ["dryness", "basic"],
    image: "https://placehold.co/600x600/F7E6D8/79573C?text=Minimalist%0AOat+Cleanser",
    alternative: "Alternative: Cetaphil Gentle Cleanser"
  },
  {
    id: 26, brand: "Plum", name: "Green Tea Face Wash",
    category: "Cleanser", size: "100 ml", price: 345, use: "AM / PM",
    skin: ["oily", "combination"], concerns: ["acne", "basic"],
    image: "https://placehold.co/600x600/E5EFDF/476442?text=Plum%0AFace+Wash",
    alternative: "Budget option: Simple Refreshing Face Wash"
  },
  {
    id: 27, brand: "The Ordinary", name: "Natural Moisturizing Factors",
    category: "Moisturizer", size: "30 ml", price: 650, use: "AM / PM",
    skin: ["dry", "normal", "combination"], concerns: ["dryness", "basic"],
    image: "https://placehold.co/600x600/F0F0EC/454545?text=The+Ordinary%0AMoisturizer",
    alternative: "Budget option: Simple Hydrating Light Moisturiser"
  },
  {
    id: 28, brand: "Nivea", name: "Soft Moisturising Cream",
    category: "Moisturizer", size: "50 ml", price: 180, use: "AM / PM",
    skin: ["dry", "normal"], concerns: ["dryness", "basic"],
    image: "https://placehold.co/600x600/E0EBF8/375F94?text=Nivea%0ASoft+Cream",
    alternative: "Lightweight alternative: Simple Hydrating Light Moisturiser"
  },
  {
    id: 29, brand: "Garnier", name: "Vitamin C Serum",
    category: "Serum", size: "30 ml", price: 499, use: "AM or PM",
    skin: ["normal", "combination", "oily"], concerns: ["marks", "dullness"],
    image: "https://placehold.co/600x600/FFF0C9/84652A?text=Garnier%0AVitamin+C",
    alternative: "Budget option: skip serum and prioritise sunscreen"
  },
  {
    id: 30, brand: "The Derma Co", name: "Niacinamide Serum",
    category: "Serum", size: "30 ml", price: 499, use: "AM or PM",
    skin: ["oily", "combination"], concerns: ["acne", "marks"],
    image: "https://placehold.co/600x600/E3E8F8/475A8A?text=The+Derma+Co%0ASerum",
    alternative: "Budget option: Minimalist Niacinamide 5%"
  },
  {
    id: 31, brand: "Vaseline", name: "Original Petroleum Jelly",
    category: "Moisturizer", size: "50 ml", price: 110, use: "PM; small amount on dry areas",
    skin: ["dry", "normal", "sensitive"], concerns: ["dryness"],
    image: "https://placehold.co/600x600/F4E3D0/805C37?text=Vaseline%0AJelly",
    alternative: "Use a small amount only where needed"
  },
  {
    id: 32, brand: "La Roche-Posay", name: "Toleriane Cleanser",
    category: "Cleanser", size: "200 ml", price: 1499, use: "AM / PM",
    skin: ["dry", "normal", "sensitive"], concerns: ["dryness", "basic"],
    image: "https://placehold.co/600x600/F1E7E8/72545C?text=La+Roche-Posay%0ACleanser",
    alternative: "Budget option: Cetaphil Gentle Cleanser"
  }
];

const money = amount =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);

const productGrid = document.getElementById("product-grid");
const brandFilter = document.getElementById("brand-filter");
const categoryFilter = document.getElementById("category-filter");
const priceFilter = document.getElementById("price-filter");
const searchInput = document.getElementById("search-input");

let bag = [];

function setupBrandFilter() {
  const brands = [...new Set(products.map(product => product.brand))].sort();
  brands.forEach(brand => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandFilter.appendChild(option);
  });
}

function makeProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const imageWrap = document.createElement("div");
  imageWrap.className = "product-image-wrap";

  const img = document.createElement("img");
  img.className = "product-image";
  img.src = product.image;
  img.alt = `${product.brand} ${product.name}`;
  img.loading = "lazy";

  const placeholder = document.createElement("div");
  placeholder.className = "product-placeholder";
  placeholder.innerHTML =
    "<span>♡</span><strong>GlowCare Edit</strong><small>Product photo unavailable</small>";

  img.addEventListener("error", () => {
    img.style.display = "none";
    placeholder.style.display = "flex";
  });

  imageWrap.append(img, placeholder);

  const brand = document.createElement("p");
  brand.className = "product-brand";
  brand.textContent = product.brand;

  const name = document.createElement("h3");
  name.className = "product-name";
  name.textContent = product.name;

  const meta = document.createElement("p");
  meta.className = "product-meta";
  meta.textContent = `${product.category} · ${product.size}`;

  const usage = document.createElement("p");
  usage.className = "product-usage";
  usage.textContent = `Usage: ${product.use}`;

  const alternative = document.createElement("p");
  alternative.className = "product-alternative";
  alternative.textContent = product.alternative;

  const bottom = document.createElement("div");
  bottom.className = "product-bottom";

  const price = document.createElement("div");
  price.className = "product-price";
  price.textContent = money(product.price);

  const estimate = document.createElement("small");
  estimate.textContent = "Estimated price";
  price.appendChild(estimate);

  const add = document.createElement("button");
  add.className = "add-button";
  add.type = "button";
  add.textContent = "+ Add to bag";
  add.addEventListener("click", () => addToBag(product.id));

  bottom.append(price, add);
  card.append(imageWrap, brand, name, meta, usage, alternative, bottom);
  return card;
}

function renderProducts() {
  const search = searchInput.value.trim().toLowerCase();
  const brand = brandFilter.value;
  const category = categoryFilter.value;
  const maxPrice = priceFilter.value;

  const filtered = products.filter(product => {
    const matchesSearch =
      `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(search);
    const matchesBrand = brand === "all" || product.brand === brand;
    const matchesCategory = category === "all" || product.category === category;
    const matchesPrice = maxPrice === "all" || product.price < Number(maxPrice);
    return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
  });

  productGrid.replaceChildren();
  document.getElementById("product-count").textContent =
    `${filtered.length} products · Prices are estimates, not live-verified`;

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "no-results";
    empty.textContent = "No products match these filters. Try another search.";
    productGrid.appendChild(empty);
    return;
  }

  filtered.forEach(product => productGrid.appendChild(makeProductCard(product)));
}

function addToBag(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  const existing = bag.find(item => item.id === productId);
  if (existing) existing.quantity += 1;
  else bag.push({ ...product, quantity: 1 });

  renderBag();
}

function changeQuantity(productId, change) {
  const item = bag.find(product => product.id === productId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) bag = bag.filter(product => product.id !== productId);

  renderBag();
}

function removeFromBag(productId) {
  bag = bag.filter(product => product.id !== productId);
  renderBag();
}

function renderBag() {
  const container = document.getElementById("bag-items");
  container.replaceChildren();

  const itemCount = bag.reduce((sum, item) => sum + item.quantity, 0);
  const total = bag.reduce((sum, item) => sum + item.price * item.quantity, 0);

  document.getElementById("bag-count").textContent = itemCount;
  document.getElementById("summary-items").textContent = itemCount;
  document.getElementById("bag-total").textContent = money(total);

  if (bag.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-bag";
    empty.textContent = "Your bag is waiting for a little glow ♡";
    container.appendChild(empty);
    return;
  }

  bag.forEach(item => {
    const row = document.createElement("div");
    row.className = "bag-item";

    const thumb = document.createElement("div");
    thumb.className = "bag-thumb";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = "";
    img.addEventListener("error", () => {
      img.style.display = "none";
      thumb.textContent = "♡";
    });
    thumb.appendChild(img);

    const info = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = item.name;
    const brand = document.createElement("p");
    brand.textContent = `${item.brand} · ${item.size}`;
    const usage = document.createElement("p");
    usage.textContent = `Usage: ${item.use}`;

    const quantity = document.createElement("div");
    quantity.className = "quantity-control";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "−";
    minus.setAttribute("aria-label", `Remove one ${item.name}`);
    minus.addEventListener("click", () => changeQuantity(item.id, -1));

    const number = document.createElement("span");
    number.textContent = item.quantity;

    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.setAttribute("aria-label", `Add one ${item.name}`);
    plus.addEventListener("click", () => changeQuantity(item.id, 1));

    quantity.append(minus, number, plus);
    info.append(title, brand, usage, quantity);

    const right = document.createElement("div");
    const price = document.createElement("strong");
    price.textContent = money(item.price * item.quantity);
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-item";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => removeFromBag(item.id));
    right.append(price, remove);

    row.append(thumb, info, right);
    container.appendChild(row);
  });
}

function buildRoutine(event) {
  event.preventDefault();

  if (!document.getElementById("routine-consent").checked) {
    alert("Please confirm that you understand these are general cosmetic suggestions.");
    return;
  }

  const skinType = document.getElementById("skin-type").value;
  const concern = document.getElementById("skin-concern").value;
  const budget = Number(document.getElementById("skin-budget").value);
  const sensitivity = document.getElementById("skin-sensitivity").value;
  const preferredBrand = document.getElementById("preferred-brand").value;
  const experience = document.getElementById("skin-experience").value;

  function choose(category) {
    let candidates = products.filter(product => product.category === category);

    if (skinType !== "unsure") {
      const suitable = candidates.filter(product => product.skin.includes(skinType));
      if (suitable.length) candidates = suitable;
    }

    const relevant = candidates.filter(product => product.concerns.includes(concern));
    if (relevant.length) candidates = relevant;

    if (sensitivity === "sensitive" && category === "Serum") {
      candidates = candidates.filter(product =>
        ["Minimalist", "The Ordinary", "Cetaphil", "CeraVe"].includes(product.brand)
      );
    }

    if (preferredBrand !== "any") {
      const preferred = candidates.filter(product => product.brand === preferredBrand);
      if (preferred.length) candidates = preferred;
    }

    return candidates.sort((a, b) => a.price - b.price)[0];
  }

  const cleanser = choose("Cleanser");
  const moisturizer = choose("Moisturizer");
  const sunscreen = choose("Sunscreen");
  const serum = concern === "basic" || sensitivity === "sensitive" ? null : choose("Serum");

  const result = document.getElementById("routine-result");
  result.replaceChildren();

  const heading = document.createElement("h3");
  heading.textContent = "Your suggested skincare edit ♡";
  const intro = document.createElement("p");
  intro.textContent =
    `Skin type: ${skinType}. Main concern: ${concern}. Budget: ${money(budget)}.`;

  const columns = document.createElement("div");
  columns.className = "routine-columns";

  const am = document.createElement("div");
  am.className = "routine-column";
  const amTitle = document.createElement("h4");
  amTitle.textContent = "☀️ Morning routine";
  const amList = document.createElement("ol");

  const pm = document.createElement("div");
  pm.className = "routine-column";
  const pmTitle = document.createElement("h4");
  pmTitle.textContent = "🌙 Evening routine";
  const pmList = document.createElement("ol");

  function addRoutineItem(list, product, text) {
    const li = document.createElement("li");
    if (product) {
      li.textContent = `${text}: ${product.brand} ${product.name} (${product.size}) — ${money(product.price)} estimated.`;
    } else {
      li.textContent = text;
    }
    list.appendChild(li);
  }

  addRoutineItem(amList, cleanser, "Cleanse gently");
  if (serum) addRoutineItem(amList, serum, "Optional serum");
  addRoutineItem(amList, moisturizer, "Moisturise");
  addRoutineItem(amList, sunscreen, "Broad-spectrum SPF 50");

  addRoutineItem(pmList, cleanser, "Cleanse");
  if (serum) addRoutineItem(pmList, serum, "Optional serum");
  addRoutineItem(pmList, moisturizer, "Moisturise");
  addRoutineItem(pmList, null, "Introduce new products gradually and stop if irritation occurs.");

  am.append(amTitle, amList);
  pm.append(pmTitle, pmList);
  columns.append(am, pm);

  const estimated = [cleanser, moisturizer, sunscreen, serum]
    .filter(Boolean)
    .reduce((sum, product) => sum + product.price, 0);

  const costNote = document.createElement("p");
  costNote.className = "small-note";
  costNote.textContent =
    `Estimated cost for the selected products: ${money(estimated)}. ` +
    (estimated > budget
      ? "This exceeds your selected budget. Start with cleanser, moisturiser and sunscreen, then add optional products later."
      : "This is within your selected budget before delivery charges. Prices are estimates.");

  const safety = document.createElement("p");
  safety.className = "small-note";
  safety.textContent = experience === "beginner"
    ? "Beginner tip: start with cleanser, moisturiser and sunscreen. Add only one new product at a time."
    : "Keep your routine consistent and avoid adding several new active products at once.";

  const addAll = document.createElement("button");
  addAll.type = "button";
  addAll.className = "button primary routine-actions";
  addAll.textContent = "Add routine essentials to bag";
  addAll.addEventListener("click", () => {
    [cleanser, moisturizer, sunscreen, serum].filter(Boolean).forEach(product => {
      if (!bag.some(item => item.id === product.id)) {
        bag.push({ ...product, quantity: 1 });
      }
    });
    renderBag();
    document.getElementById("bag").scrollIntoView({ behavior: "smooth" });
  });

  result.append(heading, intro, columns, costNote, safety, addAll);
  result.classList.remove("hidden");
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setupPhotoPreview() {
  const input = document.getElementById("skin-photo");
  const image = document.getElementById("photo-image");
  const placeholder = document.getElementById("photo-placeholder");
  const remove = document.getElementById("remove-photo");
  let currentUrl = null;

  input.addEventListener("change", () => {
    const file = input.files && input.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please choose an image file.");
      input.value = "";
      return;
    }

    if (currentUrl) URL.revokeObjectURL(currentUrl);
    currentUrl = URL.createObjectURL(file);
    image.src = currentUrl;
    image.classList.remove("hidden");
    placeholder.classList.add("hidden");
    remove.classList.remove("hidden");
  });

  remove.addEventListener("click", () => {
    image.removeAttribute("src");
    image.classList.add("hidden");
    placeholder.classList.remove("hidden");
    remove.classList.add("hidden");
    input.value = "";
    if (currentUrl) URL.revokeObjectURL(currentUrl);
    currentUrl = null;
  });
}

function setupShoppingList() {
  document.getElementById("copy-list").addEventListener("click", async () => {
    const status = document.getElementById("copy-status");

    if (!bag.length) {
      status.textContent = "Your bag is empty.";
      return;
    }

    const lines = bag.map(item =>
      `${item.brand} ${item.name} — ${item.size} × ${item.quantity}: ${money(item.price * item.quantity)} (estimated)`
    );

    const total = bag.reduce((sum, item) => sum + item.price * item.quantity, 0);
    lines.push(`Estimated total: ${money(total)}`);
    lines.push("Prices are estimates, not live-verified.");

    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      status.textContent = "Shopping list copied!";
    } catch {
      status.textContent = lines.join(" | ");
    }
  });

  document.getElementById("clear-bag").addEventListener("click", () => {
    bag = [];
    renderBag();
    document.getElementById("copy-status").textContent = "";
  });
}

document.getElementById("skin-quiz").addEventListener("submit", buildRoutine);

[searchInput, brandFilter, categoryFilter, priceFilter].forEach(control => {
  control.addEventListener("input", renderProducts);
  control.addEventListener("change", renderProducts);
});

setupBrandFilter();
renderProducts();
renderBag();
setupPhotoPreview();
setupShoppingList();