
"use strict";

/* ==================================================
   VIBEX GLOBAL
   Interacciones y traducciones de la tienda
   ================================================== */

const WHATSAPP_NUMBER = "593984692292";
const STORAGE_CART = "vibexGlobalCartV2";
const STORAGE_LANGUAGE = "vibexGlobalLanguageV1";
const STORAGE_COOKIE = "vibexGlobalCookieChoiceV1";

/*
  Productos de demostración.
  No contienen fotografías: cada tarjeta muestra
  un espacio donde podrás colocar tu propia imagen.
*/

const products = [
  {
    id: 1,
    name: "Essence No. 01",
    category: "Perfumería",
    price: 48,
    label: "SELECCIÓN",
    description: "Una fragancia para acompañar tu estilo. Consulta la presentación y disponibilidad.",
    image: ""
  },
  {
    id: 2,
    name: "Golden Elixir",
    category: "Perfumería",
    price: 56,
    label: "DESTACADO",
    description: "Una propuesta sofisticada. Confirma el producto exacto y sus características antes de comprar.",
    image: ""
  },
  {
    id: 3,
    name: "Botanical Mist",
    category: "Perfumería",
    price: 39,
    label: "",
    description: "Una opción de perfumería para quienes disfrutan de los pequeños detalles.",
    image: ""
  },
  {
    id: 4,
    name: "Classic Pendant",
    category: "Joyería",
    price: 29,
    label: "SELECCIÓN",
    description: "Un accesorio de diseño discreto. Consulta materiales, medidas y disponibilidad.",
    image: ""
  },
  {
    id: 5,
    name: "Golden Form",
    category: "Joyería",
    price: 35,
    label: "",
    description: "Una pieza para complementar distintos estilos. Las características finales se confirmarán con el producto real.",
    image: ""
  },
  {
    id: 6,
    name: "Essential Sound",
    category: "Electrónica",
    price: 65,
    label: "DESTACADO",
    description: "Una propuesta tecnológica. Consulta especificaciones, compatibilidad y disponibilidad.",
    image: ""
  },
  {
    id: 7,
    name: "Studio Audio",
    category: "Electrónica",
    price: 79,
    label: "",
    description: "Tecnología para acompañar tus actividades. Las especificaciones deberán verificarse.",
    image: ""
  },
  {
    id: 8,
    name: "Everyday Tech",
    category: "Electrónica",
    price: 42,
    label: "",
    description: "Una opción de tecnología para el día a día. Consulta las características del producto real.",
    image: ""
  }
];

/* TRADUCCIONES DE LA INTERFAZ */

const translations = {
  es: {
    announcement: "VIBEX GLOBAL — DETALLES QUE MARCAN LA DIFERENCIA",
    collections: "Colecciones",
    discover: "Descubrir",
    ourVision: "Nuestra visión",
    contact: "Contacto",
    bag: "Bolsa",
    explore: "EXPLORA VIBEX",
    findYourStyle: "Encuentra tu estilo.",
    menuDescription: "Una selección pensada para acompañar cada detalle de tu vida.",
    perfume: "Perfumería",
    jewelry: "Joyería",
    electronics: "Electrónica",
    allProducts: "Todos los productos",
    imageHere: "[COLOCAR IMAGEN AQUÍ]",
    searchLabel: "¿Qué estás buscando?",
    searchPlaceholder: "Buscar productos...",
    close: "Cerrar",
    heroImageHere: "[COLOCAR IMAGEN O VÍDEO DE PORTADA AQUÍ]",
    heroImageNote: "Reemplaza este espacio con tu propio contenido visual.",
    heroEyebrow: "UNA NUEVA FORMA DE ELEGIR",
    heroTitle: "Tu estilo.<br>Tu esencia.<br><em>Tu elección.</em>",
    heroDescription: "Descubre una selección de productos pensada para quienes encuentran lo extraordinario en los pequeños detalles.",
    exploreCollection: "Explorar colección",
    heroBottom: "VIBEX GLOBAL · UNA VISIÓN CONTEMPORÁNEA",
    stripOne: "CALIDAD CON INTENCIÓN",
    stripTwo: "DISEÑO ATEMPORAL",
    stripThree: "DETALLES QUE PERDURAN",
    curatedSelection: "SELECCIÓN VIBEX",
    collectionsTitle: "El arte de elegir.",
    collectionsDescription: "Diferentes universos, una misma atención por los detalles.",
    collectionOne: "EL ARTE DE LA FRAGANCIA",
    collectionTwo: "DETALLES CON CARÁCTER",
    collectionThree: "TECNOLOGÍA Y DISEÑO",
    ourPhilosophy: "NUESTRA FILOSOFÍA",
    statementTitle: "Menos ruido.<br><em>Más significado.</em>",
    statementDescription: "Creemos en elegir con intención. En productos que expresan personalidad y en una experiencia de compra cuidada de principio a fin.",
    discoverSelection: "Descubrir la selección",
    selectionForYou: "UNA SELECCIÓN PARA TI",
    featuredTitle: "Piezas destacadas.",
    featuredDescription: "Explora nuestras categorías y encuentra tu próximo favorito.",
    all: "Todos",
    noProducts: "No encontramos productos con esos criterios.",
    demoNotice: "Catálogo de demostración. Los productos, precios y descripciones deberán verificarse antes de publicar la tienda.",
    videoHere: "[COLOCAR VÍDEO DE MARCA AQUÍ]",
    theVibexExperience: "THE VIBEX EXPERIENCE",
    experienceTitle: "Una experiencia<br><em>sin exceso.</em>",
    experienceDescription: "Una selección cuidada, una navegación sencilla y atención cercana cuando la necesitas.",
    learnMore: "Conoce más",
    benefitOneTitle: "Selección cuidada",
    benefitOneText: "Productos elegidos con atención al detalle.",
    benefitTwoTitle: "Compra sencilla",
    benefitTwoText: "Una experiencia clara desde el primer clic.",
    benefitThreeTitle: "Atención cercana",
    benefitThreeText: "Resolvemos tus dudas antes de confirmar el pedido.",
    benefitFourTitle: "Información clara",
    benefitFourText: "Precios, disponibilidad y condiciones por confirmar.",
    stayConnected: "MANTENTE EN CONTACTO",
    contactTitle: "Hablemos de<br><em>lo que buscas.</em>",
    contactDescription: "Si necesitas información sobre un producto, escríbenos. Estaremos encantados de ayudarte.",
    contactWhatsApp: "Consultar por WhatsApp",
    footerPhrase: "Detalles que marcan la diferencia.",
    backToTop: "Volver arriba",
    footerRights: "Todos los derechos reservados.",
    yourSelection: "TU SELECCIÓN",
    yourBag: "Tu bolsa",
    emptyBag: "Tu bolsa está esperando por algo especial.",
    subtotal: "Subtotal estimado",
    checkoutNotice: "El envío y el pago se confirmarán por WhatsApp.",
    continueWhatsApp: "Consultar pedido",
    continueShopping: "Seguir explorando",
    addToBag: "Añadir a la bolsa",
    cookieTitle: "Tu privacidad importa.",
    cookieDescription: "Esta versión de prueba guarda preferencias básicas en tu navegador.",
    cookieClose: "Cerrar",
    cookieAccept: "Entendido",
    products: "productos",
    product: "producto",
    added: "se añadió a tu bolsa.",
    removed: "Producto eliminado de la bolsa.",
    emptySearch: "No encontramos productos con esos criterios.",
    subtotalMessage: "Subtotal estimado:",
    orderIntro: "Hola, Vibex Global. Quisiera consultar este pedido:",
    orderEnd: "Por favor, confirmen disponibilidad, precio final, envío y métodos de pago.",
    searchNoResults: "No encontramos productos con esos criterios.",
    cookieSaved: "Preferencia guardada.",
    whatsappUnavailable: "No se pudo abrir WhatsApp. Inténtalo de nuevo.",
    imageLabel: "[COLOCAR IMAGEN AQUÍ]",
    slideLabel: "Mostrar diapositiva",
    productImageLabel: "Imagen del producto",
    productLabel: "Producto",
    reduceQuantity: "Reducir cantidad",
    increaseQuantity: "Aumentar cantidad",
    removeItem: "Eliminar",
    categoryAll: "Todos"
  },

  en: {
    announcement: "VIBEX GLOBAL — DETAILS THAT MAKE THE DIFFERENCE",
    collections: "Collections",
    discover: "Discover",
    ourVision: "Our vision",
    contact: "Contact",
    bag: "Bag",
    explore: "EXPLORE VIBEX",
    findYourStyle: "Find your style.",
    menuDescription: "A selection designed to complement every detail of your life.",
    perfume: "Fragrance",
    jewelry: "Jewelry",
    electronics: "Electronics",
    allProducts: "All products",
    imageHere: "[PLACE IMAGE HERE]",
    searchLabel: "What are you looking for?",
    searchPlaceholder: "Search products...",
    close: "Close",
    heroImageHere: "[PLACE HERO IMAGE OR VIDEO HERE]",
    heroImageNote: "Replace this space with your own visual content.",
    heroEyebrow: "A NEW WAY TO CHOOSE",
    heroTitle: "Your style.<br>Your essence.<br><em>Your choice.</em>",
    heroDescription: "Discover a selection designed for those who find the extraordinary in the smallest details.",
    exploreCollection: "Explore collection",
    heroBottom: "VIBEX GLOBAL · A CONTEMPORARY VISION",
    stripOne: "QUALITY WITH INTENTION",
    stripTwo: "TIMELESS DESIGN",
    stripThree: "DETAILS THAT LAST",
    curatedSelection: "THE VIBEX SELECTION",
    collectionsTitle: "The art of choosing.",
    collectionsDescription: "Different worlds, united by attention to detail.",
    collectionOne: "THE ART OF FRAGRANCE",
    collectionTwo: "DETAILS WITH CHARACTER",
    collectionThree: "TECHNOLOGY AND DESIGN",
    ourPhilosophy: "OUR PHILOSOPHY",
    statementTitle: "Less noise.<br><em>More meaning.</em>",
    statementDescription: "We believe in choosing with intention, products that express personality, and a thoughtful shopping experience from beginning to end.",
    discoverSelection: "Discover the selection",
    selectionForYou: "A SELECTION FOR YOU",
    featuredTitle: "Featured pieces.",
    featuredDescription: "Explore our categories and find your next favorite.",
    all: "All",
    noProducts: "We couldn't find products matching your search.",
    demoNotice: "Demo catalog. Products, prices, and descriptions must be verified before the store goes live.",
    videoHere: "[PLACE BRAND VIDEO HERE]",
    theVibexExperience: "THE VIBEX EXPERIENCE",
    experienceTitle: "An experience<br><em>without excess.</em>",
    experienceDescription: "A considered selection, simple navigation, and personal assistance when you need it.",
    learnMore: "Learn more",
    benefitOneTitle: "Thoughtful selection",
    benefitOneText: "Products selected with attention to detail.",
    benefitTwoTitle: "Simple shopping",
    benefitTwoText: "A clear experience from the very first click.",
    benefitThreeTitle: "Personal assistance",
    benefitThreeText: "We answer your questions before confirming an order.",
    benefitFourTitle: "Clear information",
    benefitFourText: "Prices, availability, and terms to be confirmed.",
    stayConnected: "STAY IN TOUCH",
    contactTitle: "Let's talk about<br><em>what you're looking for.</em>",
    contactDescription: "Need information about a product? Send us a message. We'll be happy to help.",
    contactWhatsApp: "Contact us on WhatsApp",
    footerPhrase: "Details that make the difference.",
    backToTop: "Back to top",
    footerRights: "All rights reserved.",
    yourSelection: "YOUR SELECTION",
    yourBag: "Your bag",
    emptyBag: "Your bag is waiting for something special.",
    subtotal: "Estimated subtotal",
    checkoutNotice: "Shipping and payment will be confirmed on WhatsApp.",
    continueWhatsApp: "Enquire about order",
    continueShopping: "Continue exploring",
    addToBag: "Add to bag",
    cookieTitle: "Your privacy matters.",
    cookieDescription: "This demo stores basic preferences in your browser.",
    cookieClose: "Close",
    cookieAccept: "Got it",
    products: "products",
    product: "product",
    added: "was added to your bag.",
    removed: "Product removed from your bag.",
    emptySearch: "We couldn't find products matching your search.",
    subtotalMessage: "Estimated subtotal:",
    orderIntro: "Hello, Vibex Global. I'd like to enquire about this order:",
    orderEnd: "Please confirm availability, final price, shipping, and payment methods.",
    searchNoResults: "We couldn't find products matching your search.",
    cookieSaved: "Preference saved.",
    whatsappUnavailable: "WhatsApp could not be opened. Please try again.",
    imageLabel: "[PLACE IMAGE HERE]",
    slideLabel: "Show slide",
    productImageLabel: "Product image",
    productLabel: "Product",
    reduceQuantity: "Reduce quantity",
    increaseQuantity: "Increase quantity",
    removeItem: "Remove",
    categoryAll: "All"
  }
};

/* HERRAMIENTAS GENERALES */

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const categoryLabels = {
  es: {
    "Todos": "Todos",
    "Perfumería": "Perfumería",
    "Joyería": "Joyería",
    "Electrónica": "Electrónica"
  },
  en: {
    "Todos": "All",
    "Perfumería": "Fragrance",
    "Joyería": "Jewelry",
    "Electrónica": "Electronics"
  }
};

function readStorage(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function money(amount) {
  const locale = currentLanguage === "en" ? "en-US" : "es-EC";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD"
  }).format(amount);
}

let currentLanguage = readStorage(STORAGE_LANGUAGE, "es");
if (!["es", "en"].includes(currentLanguage)) currentLanguage = "es";

let activeFilter = "Todos";
let searchTerm = "";
let currentSlide = 0;
let currentProductId = null;
let slideTimer = null;
let toastTimer = null;

/* IDIOMAS */

function applyTranslations() {
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;

  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      // Los únicos valores HTML se han definido dentro del diccionario
      // para los encabezados editoriales de esta página.
      if (["heroTitle", "statementTitle", "experienceTitle", "contactTitle"].includes(key)) {
        element.innerHTML = dictionary[key];
      } else {
        element.textContent = dictionary[key];
      }
    }
  });

  $$("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) element.placeholder = dictionary[key];
  });

  $$("[data-language]").forEach((button) => {
    const active = button.dataset.language === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  $$(".filter-button").forEach((button) => {
    button.textContent =
      categoryLabels[currentLanguage][button.dataset.filter] ||
      button.dataset.filter;
  });

  updateSlideCounter();
  renderProducts();
  renderCart();
}

$$("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.language;
    writeStorage(STORAGE_LANGUAGE, currentLanguage);
    applyTranslations();
  });
});

/* MENSAJES TEMPORALES */

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* MENÚ DESPLEGABLE */

const collectionsTrigger = $("#collectionsTrigger");
const megaMenu = $("#megaMenu");
const mainNav = $("#mainNav");
const mobileMenuButton = $("#mobileMenuButton");

function setMegaMenu(open) {
  if (!megaMenu || !collectionsTrigger) return;

  megaMenu.classList.toggle("open", open);
  megaMenu.setAttribute("aria-hidden", String(!open));
  collectionsTrigger.setAttribute("aria-expanded", String(open));
}

collectionsTrigger?.addEventListener("click", (event) => {
  event.stopPropagation();
  setMegaMenu(!megaMenu.classList.contains("open"));
});

collectionsTrigger?.addEventListener("mouseenter", () => {
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    setMegaMenu(true);
  }
});

megaMenu?.addEventListener("mouseleave", () => {
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    setMegaMenu(false);
  }
});

mobileMenuButton?.addEventListener("click", () => {
  const open = !mainNav.classList.contains("open");

  mainNav.classList.toggle("open", open);
  mobileMenuButton.setAttribute("aria-expanded", String(open));
  mobileMenuButton.setAttribute(
    "aria-label",
    open ? "Close menu" : "Open menu"
  );

  if (!open) setMegaMenu(false);
});

$$(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav?.classList.remove("open");
    mobileMenuButton?.setAttribute("aria-expanded", "false");
    setMegaMenu(false);
  });
});

document.addEventListener("click", (event) => {
  if (
    megaMenu &&
    !megaMenu.contains(event.target) &&
    !collectionsTrigger?.contains(event.target)
  ) {
    setMegaMenu(false);
  }
});

$$("[data-category-link]").forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.categoryLink);
    setMegaMenu(false);
    mainNav?.classList.remove("open");
    mobileMenuButton?.setAttribute("aria-expanded", "false");

    $("#destacados")?.scrollIntoView({ behavior: "smooth" });
  });
});

/* BUSCADOR */

const searchPanel = $("#searchPanel");
const searchInput = $("#searchInput");

$("#searchToggle")?.addEventListener("click", () => {
  const open = !searchPanel.classList.contains("open");
  searchPanel.classList.toggle("open", open);

  if (open) window.setTimeout(() => searchInput?.focus(), 100);
});

$("#closeSearch")?.addEventListener("click", () => {
  searchPanel?.classList.remove("open");
});

searchInput?.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLocaleLowerCase(
    currentLanguage === "es" ? "es" : "en"
  );
  renderProducts();
});

/* CARRUSEL DE PORTADA
   Son tres composiciones de color, sin fotografías.
   Más adelante podrás colocar tus propias imágenes.
*/

const slideBackgrounds = [
  "radial-gradient(ellipse at 76% 36%, rgba(180,154,101,.18), transparent 32%), linear-gradient(125deg,#30382e 0%,#1c251e 55%,#101511 100%)",
  "radial-gradient(ellipse at 70% 45%, rgba(191,175,139,.2), transparent 36%), linear-gradient(130deg,#34352c 0%,#24271f 55%,#131712 100%)",
  "radial-gradient(ellipse at 80% 40%, rgba(137,153,133,.2), transparent 36%), linear-gradient(125deg,#28342d 0%,#1b251e 58%,#111611 100%)"
];

const heroImage = $("#heroImage");
const heroDots = $("#heroDots");

function updateSlideCounter() {
  const number = $("#slideNumber");
  if (number) number.textContent = String(currentSlide + 1).padStart(2, "0");

  heroDots?.querySelectorAll("button").forEach((button, index) => {
    button.classList.toggle("active", index === currentSlide);
    button.setAttribute("aria-pressed", String(index === currentSlide));
  });
}

function showSlide(index) {
  currentSlide = (index + slideBackgrounds.length) % slideBackgrounds.length;

  if (heroImage) {
    heroImage.style.background = slideBackgrounds[currentSlide];
  }

  updateSlideCounter();
}

function restartSlideTimer() {
  window.clearInterval(slideTimer);

  slideTimer = window.setInterval(() => {
    if (!document.hidden) showSlide(currentSlide + 1);
  }, 6500);
}

if (heroDots) {
  slideBackgrounds.forEach((background, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute(
      "aria-label",
      `${translations[currentLanguage].slideLabel} ${index + 1}`
    );

    button.addEventListener("click", () => {
      showSlide(index);
      restartSlideTimer();
    });

    heroDots.appendChild(button);
  });
}

$("#heroPrev")?.addEventListener("click", () => {
  showSlide(currentSlide - 1);
  restartSlideTimer();
});

$("#heroNext")?.addEventListener("click", () => {
  showSlide(currentSlide + 1);
  restartSlideTimer();
});

showSlide(0);
restartSlideTimer();

/* CATÁLOGO */

function translatedProductCategory(category) {
  return categoryLabels[currentLanguage][category] || category;
}

function renderProducts() {
  const grid = $("#productGrid");
  const total = $("#productTotal");
  const empty = $("#emptyMessage");

  if (!grid) return;

  const dictionary = translations[currentLanguage];

  const filtered = products.filter((product) => {
    const categoryMatches =
      activeFilter === "Todos" || product.category === activeFilter;

    const text = [
      product.name,
      product.category,
      translatedProductCategory(product.category),
      product.description
    ].join(" ").toLocaleLowerCase(currentLanguage);

    return categoryMatches && text.includes(searchTerm);
  });

  grid.replaceChildren();

  filtered.forEach((product, index) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.style.animationDelay = `${Math.min(index * 50, 250)}ms`;

    const visual = document.createElement("div");
    visual.className = "product-visual";

    const imageButton = document.createElement("button");
    imageButton.type = "button";
    imageButton.className = "product-image-button";
    imageButton.setAttribute(
      "aria-label",
      `${dictionary.productLabel}: ${product.name}`
    );

    if (product.image) {
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;
      image.loading = "lazy";
      imageButton.appendChild(image);
    } else {
      const placeholder = document.createElement("span");
      placeholder.className = "product-placeholder-label";

      const symbol = document.createElement("span");
      symbol.className = "placeholder-symbol";
      symbol.textContent = "＋";

      const text = document.createElement("span");
      text.textContent = dictionary.imageLabel;

      placeholder.append(symbol, text);
      imageButton.appendChild(placeholder);
    }

    imageButton.addEventListener("click", () => openProductModal(product.id));
    visual.appendChild(imageButton);

    if (product.label) {
      const label = document.createElement("span");
      label.className = "product-label";

      if (currentLanguage === "en") {
        label.textContent = product.label === "SELECCIÓN"
          ? "CURATED"
          : "FEATURED";
      } else {
        label.textContent = product.label;
      }

      visual.appendChild(label);
    }

    const quickView = document.createElement("button");
    quickView.type = "button";
    quickView.className = "quick-view";
    quickView.textContent = currentLanguage === "es"
      ? "Vista rápida +"
      : "Quick view +";

    quickView.addEventListener("click", () => openProductModal(product.id));
    visual.appendChild(quickView);

    const details = document.createElement("div");
    details.className = "product-details";

    const category = document.createElement("span");
    category.className = "product-category";
    category.textContent = translatedProductCategory(product.category);

    const name = document.createElement("h3");
    name.className = "product-name";
    name.textContent = product.name;

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;

    const priceRow = document.createElement("div");
    priceRow.className = "product-price-row";

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = money(product.price);

    const add = document.createElement("button");
    add.type = "button";
    add.className = "add-product";
    add.textContent = "+";
    add.setAttribute("aria-label", `${dictionary.addToBag}: ${product.name}`);
    add.addEventListener("click", () => addToCart(product.id));

    priceRow.append(price, add);
    details.append(category, name, description, priceRow);
    card.append(visual, details);
    grid.appendChild(card);
  });

  if (total) {
    const count = filtered.length;
    const noun = currentLanguage === "es"
      ? (count === 1 ? dictionary.product : dictionary.products)
      : dictionary.products;

    total.textContent = `${count} ${noun}`;
  }

  if (empty) empty.hidden = filtered.length !== 0;
}

function setFilter(category) {
  activeFilter = category;

  $$(".filter-button").forEach((button) => {
    const active = button.dataset.filter === category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderProducts();
}

$$(".filter-button").forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

$$("[data-collection]").forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.collection);
    $("#destacados")?.scrollIntoView({ behavior: "smooth" });
  });
});

/* MODAL DE PRODUCTO */

const productModal = $("#productModal");

function openProductModal(productId) {
  const product = products.find((entry) => entry.id === productId);
  if (!product) return;

  currentProductId = productId;

  $("#modalCategory").textContent =
    translatedProductCategory(product.category);

  $("#modalName").textContent = product.name;
  $("#modalPrice").textContent = money(product.price);
  $("#modalDescription").textContent = product.description;

  const modalImage = $("#modalImage");
  const placeholder = $(".modal-image-placeholder");

  if (product.image) {
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalImage.hidden = false;
    placeholder.hidden = true;
  } else {
    modalImage.removeAttribute("src");
    modalImage.alt = "";
    modalImage.hidden = true;
    placeholder.hidden = false;

    const placeholderText = $("[data-i18n='imageHere']", placeholder);
    if (placeholderText) {
      placeholderText.textContent = translations[currentLanguage].imageHere;
    }
  }

  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  $("#modalClose")?.focus();
}

function closeProductModal() {
  productModal?.classList.remove("open");
  productModal?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
  currentProductId = null;
}

$("#modalClose")?.addEventListener("click", closeProductModal);
$("#modalBackdrop")?.addEventListener("click", closeProductModal);

$("#modalAdd")?.addEventListener("click", () => {
  if (currentProductId === null) return;

  addToCart(currentProductId);
  closeProductModal();
});

/* BOLSA DE COMPRA */

function loadCart() {
  try {
    const saved = readStorage(STORAGE_CART, "[]");
    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter((item) =>
        products.some((product) => product.id === Number(item.id))
      )
      .map((item) => ({
        id: Number(item.id),
        quantity: Math.max(1, Math.min(99, Number(item.quantity) || 1))
      }));
  } catch {
    return [];
  }
}

let cart = loadCart();

function saveCart() {
  const success = writeStorage(STORAGE_CART, JSON.stringify(cart));

  if (!success) {
    showToast(currentLanguage === "es"
      ? "No se pudo guardar la bolsa en este navegador."
      : "The bag could not be saved in this browser.");
  }
}

function getCartDetails() {
  return cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) return null;

      return {
        ...product,
        quantity: item.quantity,
        lineTotal: product.price * item.quantity
      };
    })
    .filter(Boolean);
}

function addToCart(productId) {
  const product = products.find((entry) => entry.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity = Math.min(99, existing.quantity + 1);
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart();
  renderCart();

  showToast(
    `${product.name} ${translations[currentLanguage].added}`
  );
}

function changeQuantity(productId, amount) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter((entry) => entry.id !== productId);
  } else {
    item.quantity = Math.min(99, item.quantity);
  }

  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();

  showToast(currentLanguage === "es"
    ? translations.es.removed
    : "Product removed from your bag.");
}

function renderCart() {
  const itemsContainer = $("#cartItems");
  if (!itemsContainer) return;

  const dictionary = translations[currentLanguage];
  const details = getCartDetails();
  const count = details.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = details.reduce((sum, item) => sum + item.lineTotal, 0);

  $("#cartCount").textContent = count;
  $("#drawerCount").textContent = `(${count})`;
  $("#cartSubtotal").textContent = money(subtotal);

  itemsContainer.replaceChildren();

  details.forEach((product) => {
    const line = document.createElement("div");
    line.className = "cart-line";

    const image = document.createElement("div");
    image.className = "cart-line-image-placeholder";
    image.textContent = "＋";
    image.style.display = "grid";
    image.style.placeItems = "center";
    image.style.background = "#e9e4d9";
    image.style.color = "#b49a65";
    image.style.fontSize = "24px";
    image.style.aspectRatio = "0.8";

    const info = document.createElement("div");

    const name = document.createElement("h3");
    name.textContent = product.name;

    const category = document.createElement("small");
    category.textContent = translatedProductCategory(product.category);

    const controls = document.createElement("div");
    controls.className = "quantity-controls";

    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "−";
    minus.setAttribute("aria-label", `${dictionary.reduceQuantity}: ${product.name}`);
    minus.addEventListener("click", () => changeQuantity(product.id, -1));

    const quantity = document.createElement("span");
    quantity.textContent = product.quantity;

    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.setAttribute("aria-label", `${dictionary.increaseQuantity}: ${product.name}`);
    plus.addEventListener("click", () => changeQuantity(product.id, 1));

    controls.append(minus, quantity, plus);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-item";
    remove.textContent = dictionary.removeItem;
    remove.addEventListener("click", () => removeFromCart(product.id));

    info.append(name, category, controls, remove);

    const price = document.createElement("span");
    price.className = "cart-line-price";
    price.textContent = money(product.lineTotal);

    line.append(image, info, price);
    itemsContainer.appendChild(line);
  });

  const isEmpty = details.length === 0;

  $("#cartEmpty").hidden = !isEmpty;
  $("#cartFooter").hidden = isEmpty;
  itemsContainer.hidden = isEmpty;
}

function openCart() {
  $("#cartDrawer").classList.add("open");
  $("#drawerBackdrop").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  $("#cartClose")?.focus();
}

function closeCart() {
  $("#cartDrawer")?.classList.remove("open");
  $("#drawerBackdrop")?.classList.remove("open");
  $("#cartDrawer")?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
}

$("#cartToggle")?.addEventListener("click", openCart);
$("#cartClose")?.addEventListener("click", closeCart);
$("#drawerBackdrop")?.addEventListener("click", closeCart);

$("#continueShopping")?.addEventListener("click", () => {
  closeCart();
  $("#destacados")?.scrollIntoView({ behavior: "smooth" });
});

/* CONSULTA DEL PEDIDO POR WHATSAPP */

$("#checkoutButton")?.addEventListener("click", () => {
  const details = getCartDetails();

  if (details.length === 0) {
    showToast(translations[currentLanguage].emptyBag);
    return;
  }

  const dictionary = translations[currentLanguage];

  const lines = details.map((item) =>
    `• ${item.name} (${translatedProductCategory(item.category)}) x${item.quantity}: ${money(item.lineTotal)}`
  );

  const subtotal = details.reduce((sum, item) => sum + item.lineTotal, 0);

  const message = [
    dictionary.orderIntro,
    "",
    ...lines,
    "",
    `${dictionary.subtotalMessage} ${money(subtotal)}`,
    "",
    dictionary.orderEnd
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");

  if (!newWindow) {
    window.location.href = url;
  }
});

/* AVISO DE COOKIES DE DEMOSTRACIÓN */

const cookieNotice = $("#cookieNotice");
const cookieChoice = readStorage(STORAGE_COOKIE);

if (!cookieChoice) {
  window.setTimeout(() => cookieNotice?.classList.add("open"), 1200);
}

function saveCookieChoice(choice) {
  writeStorage(STORAGE_COOKIE, choice);
  cookieNotice?.classList.remove("open");
}

$("#cookieAccept")?.addEventListener("click", () => saveCookieChoice("accepted"));
$("#cookieDismiss")?.addEventListener("click", () => saveCookieChoice("dismissed"));

/* ANIMACIONES AL DESPLAZARSE */

const revealElements = $$(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -25px 0px"
  });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

/* CERRAR ELEMENTOS CON ESCAPE */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    closeProductModal();
    setMegaMenu(false);
    searchPanel?.classList.remove("open");
    mainNav?.classList.remove("open");
    mobileMenuButton?.setAttribute("aria-expanded", "false");
  }
});

/* AÑO DEL PIE DE PÁGINA */

const yearElement = $("#currentYear");
if (yearElement) yearElement.textContent = new Date().getFullYear();

/* PRIMER RENDER */

applyTranslations();
renderProducts();
renderCart();
