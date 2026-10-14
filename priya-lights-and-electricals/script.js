/*
  SHOP SETTINGS — replace the example values below before publishing.
  WhatsApp number format: country code + number, digits only (India = 91...).
  Google Forms: paste the public form URL from your Google Form's Send/Share option.
*/
const SHOP = {
  whatsappNumber: "91XXXXXXXXXX",
  phoneDisplay: "Add your phone number",
  address: "Malliakkarai, Salem, Tamil Nadu (edit with exact address)",
  openingHours: "Please contact us for current hours",
  googleFormUrl: " https://docs.google.com/forms/d/e/1FAIpQLSdUJ0mGoAB8aKsjCKgrUNs2e-7cMYjto8syDXCY2b58mf8qzQ/viewform",
  instagramUrl: "https://www.instagram.com/priya_fancy_lights?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==",
  youtubeUrl: "https://youtube.com/@ungalelectrician?si=zHvOKWQ9ft0QbMPe",
  currency: "INR"
};

const money = (value) => new Intl.NumberFormat("en-IN", {
  style: "currency", currency: SHOP.currency, maximumFractionDigits: 0
}).format(value);

function whatsappUrl(message) {
  const number = SHOP.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function setupLinks() {
  const generalMessage = "Hello Priya Lights and Electricals! I found your website and would like to enquire about your products.";
  ["headerWhatsApp", "contactWhatsApp", "floatingWhatsApp"].forEach(id => {
    const link = document.getElementById(id);
    if (link) link.href = whatsappUrl(generalMessage);
  });
  const service = document.getElementById("serviceWhatsApp");
  if (service) service.href = whatsappUrl("Hello! I would like to enquire about profile lighting / lighting work.");
  const form = document.getElementById("contactForm");
  if (form) form.href = SHOP.googleFormUrl;
  document.getElementById("shopAddress").textContent = SHOP.address;
  document.getElementById("shopPhone").textContent = SHOP.phoneDisplay;
  document.getElementById("shopHours").textContent = SHOP.openingHours;
  document.getElementById("instagramLink").href = SHOP.instagramUrl;
  document.getElementById("youtubeLink").href = SHOP.youtubeUrl;
  document.getElementById("year").textContent = new Date().getFullYear();
}

let activeCategory = "All";
function getCategories() {
  return ["All", ...new Set(PRODUCTS.map(product => product.category))];
}
function renderFilters() {
  const holder = document.getElementById("categoryFilters");
  holder.innerHTML = getCategories().map(category =>
    `<button class="filter-button ${category === activeCategory ? "active" : ""}" data-category="${category.replaceAll('"', '&quot;')}">${category}</button>`
  ).join("");
  holder.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    renderFilters();
    renderProducts();
  }));
}
function productCard(product) {
  const price = product.price == null ? "Ask for price" : money(product.price);
  const image = product.image || "assets/images/product-placeholder.svg";
  return `<article class="product-card">
    <div class="product-image"><img src="${image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/product-placeholder.svg'"><span class="product-tag">${product.tag || product.category}</span></div>
    <div class="product-info"><span class="product-category">${product.category}</span><h3>${product.name}</h3>
      <p class="product-description">${product.description || ""}</p>
      <div class="product-bottom"><span class="product-price">${price}</span><button class="product-enquire" data-product="${product.id}">Enquire ↗</button></div>
    </div>
  </article>`;
}
function renderProducts() {
  const query = document.getElementById("productSearch").value.trim().toLowerCase();
  const filtered = PRODUCTS.filter(product => {
    const categoryMatch = activeCategory === "All" || product.category === activeCategory;
    const queryMatch = [product.name, product.category, product.description].join(" ").toLowerCase().includes(query);
    return categoryMatch && queryMatch;
  });
  document.getElementById("productGrid").innerHTML = filtered.map(productCard).join("");
  document.getElementById("noProducts").hidden = filtered.length !== 0;
  document.querySelectorAll(".product-enquire").forEach(button => button.addEventListener("click", () => {
    const product = PRODUCTS.find(item => item.id === button.dataset.product);
    if (!product) return;
    const price = product.price == null ? "Price to be confirmed" : money(product.price);
    window.open(whatsappUrl(`Hello Priya Lights and Electricals! I am interested in: ${product.name}. Listed price: ${price}. Please confirm availability and details.`), "_blank", "noopener");
  }));
}
document.getElementById("productSearch").addEventListener("input", renderProducts);
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const open = nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#mainNav a").forEach(link => link.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
}));
setupLinks();
renderFilters();
renderProducts();
