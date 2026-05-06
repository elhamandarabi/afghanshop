// Listings page logic
const ITEMS_PER_PAGE = 12;
let currentPage = 1;
let currentView = 'grid';
let filteredItems = [];

function getUrlParam(key) {
  return new URLSearchParams(window.location.search).get(key) || '';
}

function updateRange(el) {
  document.getElementById('rangeVal').textContent = Number(el.value).toLocaleString() + ' AFN';
  document.getElementById('maxPrice').value = el.value;
  applyFilters();
}

function applyFilters() {
  const q = (document.getElementById('searchInput').value || getUrlParam('q')).toLowerCase();
  const catRadio = document.querySelector('input[name="fcat"]:checked');
  const cat = catRadio ? catRadio.value : getUrlParam('cat');
  const provinces = [...document.querySelectorAll('.filter-options input[type="checkbox"][value]:checked')]
    .filter(c => ['Kabul','Herat','Kandahar','Mazar','Jalalabad','Remote'].includes(c.value))
    .map(c => c.value);
  const badges = [...document.querySelectorAll('.filter-options input[type="checkbox"][value]:checked')]
    .filter(c => ['featured','new','urgent'].includes(c.value))
    .map(c => c.value);
  const minP = Number(document.getElementById('minPrice').value) || 0;
  const maxP = Number(document.getElementById('maxPrice').value) || Infinity;
  const sort = document.getElementById('sortSelect').value;

  filteredItems = listings.filter(l => {
    if (q && !l.title.toLowerCase().includes(q)) return false;
    if (cat && l.category !== cat) return false;
    if (provinces.length && !provinces.includes(l.province)) return false;
    if (badges.length && !badges.includes(l.badge)) return false;
    if (l.price > 0 && (l.price < minP || l.price > maxP)) return false;
    return true;
  });

  if (sort === 'price-asc') filteredItems.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') filteredItems.sort((a, b) => b.price - a.price);
  else if (sort === 'featured') filteredItems.sort((a, b) => (b.badge === 'featured') - (a.badge === 'featured'));

  currentPage = 1;
  renderPage();
}

function renderPage() {
  const grid = document.getElementById('resultsGrid');
  const noRes = document.getElementById('noResults');
  const count = document.getElementById('resultCount');
  count.textContent = filteredItems.length;

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = filteredItems.slice(start, start + ITEMS_PER_PAGE);

  if (pageItems.length === 0) {
    grid.innerHTML = '';
    noRes.style.display = 'block';
  } else {
    noRes.style.display = 'none';
    grid.innerHTML = pageItems.map(buildCard).join('');
    if (currentView === 'list') grid.classList.add('list-view');
    else grid.classList.remove('list-view');
  }
  renderPagination();
}

function renderPagination() {
  const total = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const pag = document.getElementById('pagination');
  if (total <= 1) { pag.innerHTML = ''; return; }
  let html = '';
  if (currentPage > 1) html += `<button class="page-btn" onclick="goPage(${currentPage-1})"><i class="fas fa-chevron-left"></i></button>`;
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || Math.abs(i - currentPage) <= 1) {
      html += `<button class="page-btn${i===currentPage?' active':''}" onclick="goPage(${i})">${i}</button>`;
    } else if (Math.abs(i - currentPage) === 2) {
      html += `<span class="page-btn dots">…</span>`;
    }
  }
  if (currentPage < total) html += `<button class="page-btn" onclick="goPage(${currentPage+1})"><i class="fas fa-chevron-right"></i></button>`;
  pag.innerHTML = html;
}

function goPage(n) {
  currentPage = n;
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setViewMode(mode) {
  currentView = mode;
  document.getElementById('gridBtn').classList.toggle('active', mode === 'grid');
  document.getElementById('listBtn').classList.toggle('active', mode === 'list');
  renderPage();
}

function clearFilters() {
  document.querySelectorAll('input[name="fcat"]')[0].checked = true;
  document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
  document.getElementById('minPrice').value = '';
  document.getElementById('maxPrice').value = '';
  document.getElementById('priceRange').value = 5000000;
  document.getElementById('rangeVal').textContent = '5,000,000 AFN';
  document.getElementById('searchInput').value = '';
  applyFilters();
}

// Init from URL params
document.addEventListener('DOMContentLoaded', () => {
  const cat = getUrlParam('cat');
  const q = getUrlParam('q');
  if (cat) {
    const radio = document.querySelector(`input[name="fcat"][value="${cat}"]`);
    if (radio) radio.checked = true;
  }
  if (q) document.getElementById('searchInput').value = q;

  // breadcrumb
  const label = cat ? cat.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase()) : 'All Listings';
  document.getElementById('breadCat').textContent = label;

  applyFilters();

  // back to top
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    if (btn) btn.classList.toggle('visible', window.scrollY > 400);
  });
});
