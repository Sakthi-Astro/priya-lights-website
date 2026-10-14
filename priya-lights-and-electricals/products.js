/*
  PRODUCT LIST — EDIT THIS FILE TO UPDATE YOUR CATALOGUE.
  1. Copy a product object to add another item.
  2. Change name, category, price, description, image and tag.
  3. Use an image URL or add a photo inside assets/images/ and use that path.
  4. Keep price as a number (example: 1299). Set price to null to show "Ask for price".
*/
const PRODUCTS = [
  {
    id: "ceiling-light-01",
    name: "Modern Ceiling Light",
    category: "Ceiling Lights",
    price: 1299,
    description: "A stylish light for living rooms and bedrooms.",
    image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=700&q=80",
    tag: "FEATURED"
  },
  {
    id: "wall-light-01",
    name: "Decorative Wall Light",
    category: "Wall Lights",
    price: 899,
    description: "Add a warm accent to your walls and corners.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",
    tag: "POPULAR"
  },
  {
    id: "led-light-01",
    name: "LED Panel Light",
    category: "LED Lights",
    price: 450,
    description: "A neat lighting option for everyday spaces.",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=700&q=80",
    tag: "ESSENTIAL"
  },
  {
    id: "profile-light-01",
    name: "LED Profile Lighting",
    category: "Profile Lights",
    price: null,
    description: "Ask us about sizes and profile-lighting work.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80",
    tag: "MADE TO FIT"
  },
  {
    id: "ceiling-light-02",
    name: "Pendant Ceiling Light",
    category: "Ceiling Lights",
    price: 1599,
    description: "A statement piece for dining and lounge areas.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",
    tag: "STYLE PICK"
  },
  {
    id: "fan-01",
    name: "Decorative Ceiling Fan",
    category: "Fans",
    price: 2499,
    description: "Check available models, colours and sizes.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80",
    tag: "HOME"
  },
  {
    id: "heater-01",
    name: "Water Heater",
    category: "Water Heaters",
    price: 3999,
    description: "Ask about capacity, model and availability.",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=700&q=80",
    tag: "ESSENTIAL"
  },
  {
    id: "electrical-01",
    name: "Electrical Accessories",
    category: "Accessories",
    price: 199,
    description: "Contact us with the item or model you need.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80",
    tag: "DAILY USE"
  }
];
