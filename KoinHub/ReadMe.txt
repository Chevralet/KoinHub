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

## 💻 JavaScript — Key Functions & What They Do


### UI Helpers (script.js)

* **Navbar padding fix:** Adds top padding to hero sections to account for the fixed navbar.

const nav = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero-section');
if (nav && heroSection) {
  const navHeight = nav.offsetHeight;
  heroSection.style.paddingTop = `${navHeight + 20}px`;
}

* **Form validation:** Email validation, password checks, and 2FA (client-side only) with `is-invalid` / `is-valid` toggles.

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

* **Modal interactions:** Open/close modals via Bootstrap API and jQuery.

bootstrap.Modal.getInstance(form.closest('.modal')).hide();

HTML Trigger Example (from index.html):

<a href="#" data-bs-toggle="modal" data-bs-target="#signupModal" 
class="btn btn-warning btn-lg">Sign Up Now!</a>



### Market Logic (market.js)

* **fetchCoins():** Pulls the top 99 coins from CoinGecko with sparkline data.

async function fetchCoins() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets' +
    '?vs_currency=usd&order=market_cap_desc&per_page=99&page=1&sparkline=true');
  return res.json();
}

* **fmtPrice():**Formats coin prices for readability, using 2 decimals for values > $1 and 4 decimals for smaller values.

function fmtPrice(p) {
  return p > 1 ? `$${p.toLocaleString(undefined, { maxFractionDigits: 2 })}` : `$${p.toFixed(4)}`;
}

* **fmtChange():**Formats 24-hour price change percentages with a +/- sign and color-coded classes for visual FX.

function fmtChange(c) {
  const sign = c > 0 ? '+' : '';
  const cls = c > 0 ? 'text-success' : 'text-danger';
  return `<span class="${cls}">${sign}${c.toFixed(2)}%</span>`;
}

* **mkToggle():** Adds interactivity to mimic watchlist buttons for each coin.

function mkToggle(id) {
  const btn = document.createElement('button');
  btn.className = 'btn btn-sm btn-outline-light';
  btn.textContent = 'Add';
  btn.onclick = () => {
    const added = btn.textContent === 'Add';
    btn.textContent = added ? 'Remove' : 'Add';
    btn.classList.toggle('btn-success', added);
    btn.classList.toggle('btn-outline-light', !added);
  };
  return btn;
}

* **renderTable():** Renders the market table with coin data, sparklines, and watchlist buttons.

function renderTable(all) {
  const tbody = document.getElementById('coinTableBody');
  tbody.innerHTML = '';
  all.forEach((coin, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td><img src="${coin.image}" alt="" width="20"> ${coin.name} (${coin.symbol.toUpperCase()})</td>
      <td>${fmtPrice(coin.current_price)}</td>
      <td>${fmtChange(coin.price_change_percentage_24h)}</td>
      <td><canvas id="spark-${coin.id}" width="100" height="30"></canvas></td>
      <td class="portfolio-cell"></td>
    `;
    tbody.appendChild(tr);
    const ctx = document.getElementById(`spark-${coin.id}`).getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: coin.sparkline_in_7d.price.map((_, idx) => idx),
        datasets: [{
          data: coin.sparkline_in_7d.price,
          borderColor: coin.price_change_percentage_24h >= 0 ? '#4caf50' : '#f44336',
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          pointRadius: 0,
          tension: 0.3
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: { x: { display: false }, y: { display: false } },
        plugins: { legend: { display: false }, tooltip: { enabled: false } }
      }
    });
    tr.querySelector('.portfolio-cell').appendChild(mkToggle(coin.id));
  });
}


* **init():** Entrypoint; fetches coins and renders the table 

async function init() {
  try {
    const coins = await fetchCoins();
    renderTable([kloutKoin, ...coins]);
  } catch (e) {
    console.error(e);
  }
}
document.addEventListener('DOMContentLoaded', init); 

* **KloutKoin is hardcoded into the dataset.

const kloutKoin = {
  id: 'kloutkoin',
  symbol: 'KLOUT',
  name: 'KloutKoin',
  current_price: 1000.00,
  price_change_percentage_24h: 666,
  image: '../Images/KLKO.png',
  sparkline_in_7d: { price: Array(50).fill().map((_, i) => 1 + Math.sin(i / 5) * 0.2) }
};

---

## 🔮 Future Enhancements 

* **Backend:** Node/Express to handle real auth, persistent watchlists, and server-side 2FA.
* **Real-time:** WebSocket or polling to make price updates truly real-time.
* **Persistence:** Save watchlist and preferences to `localStorage` or backend user accounts.
* **Accessibility:**
* **Performance:** Cache API responses, lazy-load images, and implement pagination.
* **Security:** Harden form validation, captchas, and rate limits if a backend is added.
* **UX polish:** Password strength meter, retry logic for API calls, and better mobile carousel spacing.

## Resources

* **How To Use The CoinGecko API in 2024  -  https://youtu.be/9-34uQpEYk8?si=pLd_Ib86JulVbyNk
* **Create Crazy 3D Image Slider Effects Using CSS Only  -  https://youtu.be/yqaLSlPOUxM?si=JI9Vcz0jW5GV-mAw
* **Bootstrap Components  -  https://getbootstrap.com


