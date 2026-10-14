# Priya Lights and Electricals — Website

A responsive static catalogue website using HTML, CSS and JavaScript. It is designed for GitHub Pages hosting and manual product updates.

## Files

- `index.html` — page content and layout
- `styles.css` — navy, white and gold design
- `products.js` — catalogue items, prices, descriptions and image URLs
- `script.js` — shop contact settings, search, category filters and WhatsApp links
- `assets/images/product-placeholder.svg` — fallback product image

## Before publishing

### 1. Set up shop contact details

Open `script.js` and edit the `SHOP` settings:

- `whatsappNumber`: country code + phone number, digits only. Example format: `919876543210`
- `phoneDisplay`: public phone number to show on the site
- `address`: exact shop address
- `openingHours`: shop hours
- `googleFormUrl`: your Google Form URL
- `instagramUrl` and `youtubeUrl`: official social media links

**Important:** The example WhatsApp number and Google Form URL are placeholders. Replace them before publishing. A placeholder number will not work.

### 2. Update product details and prices

Open `products.js`. Each product looks like this:

```js
{
  id: "new-product-01",
  name: "Example LED Light",
  category: "LED Lights",
  price: 1250,
  description: "Short product description.",
  image: "assets/images/example-led-light.jpg",
  tag: "NEW"
}
```

- Use a unique `id` for every product.
- `price` should be a number, without the rupee symbol. The site formats it automatically.
- Use `price: null` if you want the card to show “Ask for price”.
- To use your own photo, upload it into `assets/images/` and set `image` to its relative path, for example `assets/images/example-led-light.jpg`.
- Remove or replace the sample products and sample prices before the public launch. They are examples only and are not verified shop prices.

### 3. Create your Google Form

For general product enquiries, collect name, phone number, product/category, quantity and delivery location.

For lighting work, collect name, phone number, address, type of work, approximate measurements in metres, and notes/photos if needed.

Create the form in Google Forms, use **Send** to copy its public responder link, then paste it into `googleFormUrl` in `script.js`. Test it while signed out or in a private browser window.

### 4. Publish with GitHub Pages

1. Sign in to GitHub and create a **public** repository, for example `priya-lights-website`.
2. Upload all files and folders from this project. Make sure `index.html` is in the repository's root.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/(root)`, then press **Save**.
6. Wait for GitHub Pages to publish. The site address will look like `https://YOUR-USERNAME.github.io/priya-lights-website/`.

The exact URL depends on your GitHub username and repository name.

## Important notes

- GitHub Pages hosting is free for a public repository; a custom domain is optional and costs extra.
- This is a catalogue website, not an online payment or stock-management system.
- WhatsApp enquiries require an internet connection and a valid phone number.
- External image URLs and Google Fonts need an internet connection. For long-term reliability, prefer your own product photos in `assets/images/`.
- Keep prices, availability, delivery terms and contact details current.
