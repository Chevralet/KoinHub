// KK Hardcode
const kloutKoin = {
  id: 'kloutkoin',
  symbol: 'KLOUT',
  name: 'KloutKoin',
  current_price: 1000.00,
  price_change_percentage_24h: 666,
image: '../Images/KLKO.png',
  sparkline_in_7d: { price: Array(50).fill().map((_,i)=>1 + Math.sin(i/5)*0.2) }
};

// CoinGecko API Fatch
async function fetchCoins() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets' +
    '?vs_currency=usd&order=market_cap_desc&per_page=99&page=1&sparkline=true');
  return res.json();
}
// Format price
function fmtPrice(p) {
  return p > 1 ? `$${p.toLocaleString(undefined,{maxFractionDigits:2})}` : `$${p.toFixed(4)}`;
}

//24-hour price change % with +/- sign and color class
function fmtChange(c) {
  const sign = c>0 ? '+' : '';
  const cls = c>0 ? 'text-success' : 'text-danger';
  return `<span class="${cls}">${sign}${c.toFixed(2)}%</span>`;
}
//toggle-btn add/remove a coin
function mkToggle(id) {
  const btn = document.createElement('button');
  btn.className = 'btn btn-sm btn-outline-light';
  btn.textContent = 'Add';
  btn.onclick = () => {
    const added = btn.textContent==='Add';
    btn.textContent = added ? 'Remove' : 'Add';
    btn.classList.toggle('btn-success', added);
    btn.classList.toggle('btn-outline-light', !added);
  };
  return btn;
}

// Render Crypto table
function renderTable(all) {
  const tbody = document.getElementById('coinTableBody');
  tbody.innerHTML = '';
  
  //populate coin data
  all.forEach((coin,i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i+1}</td>
      <td><img src="${coin.image}" alt="" width="20"> ${coin.name} (${coin.symbol.toUpperCase()})</td>
      <td>${fmtPrice(coin.current_price)}</td>
      <td>${fmtChange(coin.price_change_percentage_24h)}</td>
      <td><canvas id="spark-${coin.id}" width="100" height="30"></canvas></td>
      <td class="portfolio-cell"></td>
    `;
    tbody.appendChild(tr);
    
    // sparkline chart
    const ctx = document.getElementById(`spark-${coin.id}`).getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: { labels: coin.sparkline_in_7d.price.map((_,idx)=>idx), datasets: [{
        data: coin.sparkline_in_7d.price,
        borderColor: coin.price_change_percentage_24h>=0 ? '#4caf50' : '#f44336',
        backgroundColor: 'transparent', borderWidth: 1.5, pointRadius:0, tension:0.3
      }]},
      options: { responsive:false, maintainAspectRatio:false, scales:{x:{display:false},y:{display:false}}, plugins:{legend:{display:false},tooltip:{enabled:false}} }
    });
    tr.querySelector('.portfolio-cell').appendChild(mkToggle(coin.id));
  });
}
// INit - fetch - render - log
async function init() {
  try {
    const coins = await fetchCoins();
    renderTable([kloutKoin, ...coins]);
  } catch(e) {
    console.error(e);
  }
}
// init once loaded
document.addEventListener('DOMContentLoaded', init);
