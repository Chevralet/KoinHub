# Koinhub — Meme Crypto Exchange

**Turn your clout into cold, pixelated currency.
** Koinhub is a gloriously unhinged cryptocurrency dashboard 
that mints your social media flex into KloutKoin ($KLOUT) 
the ultimate meme token on the Social Liquidity Exchange (SLX). 
With a dark theme, punchy orange accents, and a vibe that’s 50% crypto & 50% chaos, 
Koinhub delivers real-time market data, a 3D KloutKpoin carousel, and educational 
(and sometimes savage) tutorials like “How to Get Rugged.” 

Built with Bootstrap 5.3, jQuery, Chart.js, and the CoinGecko API.

---

## ✨ TL;DR

* **What:** Front-end-only meme crypto dashboard with live CoinGecko market data and a 3D KloutKoin showcase.

* **Stack:** HTML, CSS, Bootstrap 5.3, jQuery, Chart.js, CoinGecko API.

* **Run locally:** `python -m http.server 8000` → open `http://localhost:8000`.

* **No backend required** for the demo — just CDNs and internet access.

---

## ⚡ Features

* **Sticky Navbar:** Fixed-top navbar with links and Login/Sign Up modals.
* **Klout Ticker:** Scrolling "breaking news" Ticker. Hidden on mobile for a cleaner UI.
* **Index / Home:** Hero banners, CTAs, and a Bootstrap carousel for article snippets.
* **Market Page:** Live CoinGecko data, Chart.js sparklines, and watchlist toggles.
* **About Page:** Koinhub lore and an accessible FAQ accordion.
* **Tutorials:** Bite-sized lessons like how to buy, sell, or survive a rug pull.
* **Klout Page:** 3D carousel showcasing KloutKoin art, lore, and bold CTAs.
* **Modals:** Login, Signup, and 2FA.
* **Responsive Design:** Mobile first, dark theme; ticker hides on smaller screens.

---
## 📚 Quick Usage Guide

* Use the **sticky navbar** to jump between `index.html`, `market.html`, `about.html`, `tutorials.html`, and `Klout.html`.
* Visit **market.html** to see live CoinGecko data and sparklines; click **Add** to toggle a watchlist entry.
* On **Klout.html** Witness the 3D carousel art gallery .
* Click **Login** / **Sign Up** to test validation and 2FA modals.

---

## 📂 Project Structure

```
koinhub/
│
├── CSS/
│   ├── shared.css        # Global styles
│   ├── index.css         # Hero & carousel
│   ├── market.css        # Market table styles
│   ├── about.css         # About + FAQ
│   ├── tutorials.css     # Tutorial cards
│   └── klout.css         # 3D carousel
│
├── Images/               # logos & carousel assets
├── JS/
│   ├── script.js         # navbar + modal validation
│   └── market.js         # CoinGecko fetch + sparklines
│
├── index.html
├── market.html
├── about.html
├── tutorials.html
├── Klout.html
└── README.md
```

---

## 🧩 Dependencies

* Bootstrap 5.3.
* jQuery 3.6.0.
* Chart.js.
* CoinGecko API for market data.
* Google Fonts (Roboto).


---

## 🎨 Bootstrap
* **Navbar / Collapse / Toggler:** Fixed-top `navbar` + `navbar-expand-lg` for responsive navigation.
* **Carousel:** `carousel` for the index news display with `data-bs-ride` auto-cycling.
* **Modals & Forms:** `modal`, `form-control`, and validation classes for Login/Signup/2FA.
* **Grid / Cards:** `container`, `row`, `col-md-*`, and `card` used across Tutorials, Klout, and Index.
* **Accordion:** FAQ uses `accordion` + `accordion-button` for collapsible help items.
* **Tables:** Market table uses `table` + `table-responsive` + contextual text classes for price changes.

---

## Resources

* **How To Use The CoinGecko API in 2024  -  https://youtu.be/9-34uQpEYk8?si=pLd_Ib86JulVbyNk
* **Create Crazy 3D Image Slider Effects Using CSS Only  -  https://youtu.be/yqaLSlPOUxM?si=JI9Vcz0jW5GV-mAw
* **Bootstrap Components  -  https://getbootstrap.com

