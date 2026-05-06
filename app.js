// ===== SAMPLE DATA =====
const listings = [
  // Real Estate
  { id: 1, title: 'Modern 3-Bedroom Apartment in Kabul', price: 12000000, currency: 'AFN', category: 'real-estate', province: 'Kabul', time: '2 hours ago', badge: 'featured', icon: '🏠', color: '#e8f5e9', img: null },
  { id: 2, title: 'Commercial Shop for Rent — Shar-e-Naw', price: 45000, currency: 'AFN/mo', category: 'real-estate', province: 'Kabul', time: '5 hours ago', badge: 'new', icon: '🏪', color: '#e3f2fd', img: null },
  { id: 3, title: 'Villa with Garden in Herat City', price: 25000000, currency: 'AFN', category: 'real-estate', province: 'Herat', time: '1 day ago', badge: 'featured', icon: '🏡', color: '#f3e5f5', img: null },
  { id: 4, title: 'Office Space for Rent — Wazir Akbar Khan', price: 80000, currency: 'AFN/mo', category: 'real-estate', province: 'Kabul', time: '3 hours ago', badge: null, icon: '🏢', color: '#fff3e0', img: null },

  // Vehicles
  { id: 5, title: 'Toyota Corolla 2021 — Very Clean', price: 1850000, currency: 'AFN', category: 'vehicles', province: 'Kabul', time: '1 hour ago', badge: 'featured', icon: '🚗', color: '#e8f5e9', img: null },
  { id: 6, title: 'Honda Motorbike 125cc — 2023', price: 140000, currency: 'AFN', category: 'vehicles', province: 'Kandahar', time: '3 hours ago', badge: 'new', icon: '🏍️', color: '#fce4ec', img: null },
  { id: 7, title: 'Land Cruiser V8 2019 — Full Option', price: 3800000, currency: 'AFN', category: 'vehicles', province: 'Herat', time: '6 hours ago', badge: 'featured', icon: '🚙', color: '#e1f5fe', img: null },
  { id: 8, title: 'Nissan Patrol 2020 — Excellent Condition', price: 4200000, currency: 'AFN', category: 'vehicles', province: 'Mazar', time: '2 days ago', badge: null, icon: '🚘', color: '#f9fbe7', img: null },

  // Electronics
  { id: 9, title: 'iPhone 14 Pro Max — 256GB, Space Black', price: 85000, currency: 'AFN', category: 'electronics', province: 'Kabul', time: '30 min ago', badge: 'new', icon: '📱', color: '#e8eaf6', img: null },
  { id: 10, title: 'Samsung 65" 4K Smart TV — QLED', price: 42000, currency: 'AFN', category: 'electronics', province: 'Kabul', time: '4 hours ago', badge: null, icon: '📺', color: '#e0f7fa', img: null },
  { id: 11, title: 'MacBook Pro M2 — 2023, 16GB RAM', price: 120000, currency: 'AFN', category: 'electronics', province: 'Herat', time: '1 day ago', badge: 'featured', icon: '💻', color: '#fff8e1', img: null },
  { id: 12, title: 'PlayStation 5 — With 3 Games', price: 38000, currency: 'AFN', category: 'electronics', province: 'Kabul', time: '2 hours ago', badge: 'urgent', icon: '🎮', color: '#fce4ec', img: null },

  // Jobs
  { id: 13, title: 'Senior Software Developer — Kabul', price: 0, currency: '', category: 'jobs', province: 'Kabul', time: '1 hour ago', badge: 'new', icon: '💼', color: '#e8f5e9', img: null },
  { id: 14, title: 'English Teacher Needed — Herat', price: 0, currency: '', category: 'jobs', province: 'Herat', time: '5 hours ago', badge: null, icon: '📚', color: '#e3f2fd', img: null },
  { id: 15, title: 'Delivery Driver — Kabul City', price: 0, currency: '', category: 'jobs', province: 'Kabul', time: '3 hours ago', badge: null, icon: '🚚', color: '#fff3e0', img: null },
  { id: 16, title: 'Graphic Designer — Remote', price: 0, currency: '', category: 'jobs', province: 'Remote', time: '2 days ago', badge: 'featured', icon: '🎨', color: '#f3e5f5', img: null },

  // Fashion
  { id: 17, title: 'Men\'s Traditional Afghan Chapan — XL', price: 4500, currency: 'AFN', category: 'fashion', province: 'Kabul', time: '6 hours ago', badge: 'new', icon: '👘', color: '#fff8e1', img: null },
  { id: 18, title: 'Women\'s Embroidered Dress — Size M', price: 3200, currency: 'AFN', category: 'fashion', province: 'Herat', time: '1 day ago', badge: null, icon: '👗', color: '#fce4ec', img: null },
  { id: 19, title: 'Nike Air Max 2024 — Size 42', price: 8500, currency: 'AFN', category: 'fashion', province: 'Kabul', time: '3 hours ago', badge: 'new', icon: '👟', color: '#e8eaf6', img: null },
  { id: 20, title: 'Leather Bag — Handmade Afghan Craft', price: 2800, currency: 'AFN', category: 'fashion', province: 'Kandahar', time: '2 hours ago', badge: null, icon: '👜', color: '#e8f5e9', img: null },

  // Animals
  { id: 21, title: 'German Shepherd Puppies — 2 Months', price: 15000, currency: 'AFN', category: 'animals', province: 'Kabul', time: '1 hour ago', badge: 'new', icon: '🐕', color: '#fff8e1', img: null },
  { id: 22, title: 'Afghan Hound — Purebred, 1 Year Old', price: 25000, currency: 'AFN', category: 'animals', province: 'Kabul', time: '4 hours ago', badge: 'featured', icon: '🐩', color: '#e8f5e9', img: null },

  // Services
  { id: 23, title: 'Professional Photography & Videography', price: 5000, currency: 'AFN/day', category: 'services', province: 'Kabul', time: '2 hours ago', badge: 'featured', icon: '📸', color: '#e8eaf6', img: null },
  { id: 24, title: 'Home Cleaning Service — Weekly/Monthly', price: 2500, currency: 'AFN', category: 'services', province: 'Kabul', time: '5 hours ago', badge: null, icon: '🧹', color: '#e0f7fa', img: null },

  // Furniture
  { id: 25, title: 'Complete Living Room Set — Brown', price: 65000, currency: 'AFN', category: 'furniture', province: 'Kabul', time: '1 day ago', badge: null, icon: '🛋️', color: '#fff3e0', img: null },
  { id: 26, title: 'Dining Table + 6 Chairs — Walnut Wood', price: 42000, currency: 'AFN', category: 'furniture', province: 'Herat', time: '3 hours ago', badge: 'new', icon: '🪑', color: '#e8f5e9', img: null },
];

// ===== FORMAT PRICE =====
function formatPrice(price, currency) {
  if (price === 0) return '<span style="color:#e74c3c;font-weight:700;">Apply Now</span>';
  if (price >= 1000000) return `${(price / 1000000).toFixed(1)}M ${currency}`;
  if (price >= 1000) return `${(price / 1000).toFixed(0)}K ${currency}`;
  return `${price.toLocaleString()} ${currency}`;
}

// ===== BUILD CARD =====
function buildCard(item) {
  const badge = item.badge ? `<span class="card-badge badge-${item.badge}">${item.badge}</span>` : '';
  const priceHtml = `<div class="card-price">${formatPrice(item.price, item.currency)}</div>`;
  return `
    <div class="card" onclick="openListing(${item.id})">
      <div class="card-img">
        <div class="img-ph" style="background:${item.color}">${item.icon}</div>
        ${badge}
        <button class="card-fav" onclick="toggleFav(event,this,${item.id})" title="Save to favorites"><i class="far fa-heart"></i></button>
      </div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        ${priceHtml}
        <div class="card-meta">
          <span class="card-location"><i class="fas fa-map-marker-alt"></i>${item.province}</span>
          <span class="card-time"><i class="fas fa-clock"></i>${item.time}</span>
        </div>
      </div>
    </div>`;
}

// ===== POPULATE GRIDS =====
function populateGrid(id, items) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = items.map(buildCard).join('');
}

function init() {
  const featured = listings.filter(l => l.badge === 'featured').slice(0, 4);
  const latest = listings.slice(0, 8);
  const realEstate = listings.filter(l => l.category === 'real-estate');
  const vehicles = listings.filter(l => l.category === 'vehicles');
  populateGrid('featuredGrid', featured);
  populateGrid('latestGrid', latest);
  populateGrid('realEstateGrid', realEstate);
  populateGrid('vehiclesGrid', vehicles);
}

// ===== VIEW TOGGLE =====
function setView(mode, gridId, btn) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.classList.toggle('list-view', mode === 'list');
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ===== HERO SLIDER =====
let slideIndex = 0;
let slideTimer;
function goSlide(n) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  slideIndex = n;
  slides[n] && slides[n].classList.add('active');
  dots[n] && dots[n].classList.add('active');
}
function nextSlide() {
  const count = document.querySelectorAll('.hero-slide').length;
  goSlide((slideIndex + 1) % count);
}
function startSlider() { slideTimer = setInterval(nextSlide, 4000); }

// ===== STATS COUNTER =====
function animateCounter(id, target, suffix = '') {
  const el = document.getElementById(id);
  if (!el) return;
  let cur = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = cur.toLocaleString() + suffix;
    if (cur >= target) clearInterval(timer);
  }, 24);
}

// ===== FAV TOGGLE =====
const favs = new Set();
function toggleFav(e, btn, id) {
  e.stopPropagation();
  if (favs.has(id)) {
    favs.delete(id);
    btn.classList.remove('active');
    btn.innerHTML = '<i class="far fa-heart"></i>';
    showToast('Removed from favorites');
  } else {
    favs.add(id);
    btn.classList.add('active');
    btn.innerHTML = '<i class="fas fa-heart"></i>';
    showToast('Added to favorites ❤️');
  }
}

// ===== OPEN LISTING =====
function openListing(id) {
  window.location.href = `listing.html?id=${id}`;
}

// ===== SEARCH =====
function doSearch() {
  const q = document.getElementById('searchInput').value.trim();
  const loc = document.getElementById('locationInput') ? document.getElementById('locationInput').value.trim() : '';
  if (!q) { showToast('Please enter a search term'); return; }
  window.location.href = `listings.html?q=${encodeURIComponent(q)}&loc=${encodeURIComponent(loc)}`;
}

document.getElementById('searchInput') && document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') doSearch();
});

// ===== MODAL =====
function closeModal() {
  document.getElementById('quickPostModal').style.display = 'none';
}
function submitAd(e) {
  e.preventDefault();
  closeModal();
  showToast('Your ad has been submitted! It will be reviewed shortly.');
}
// Make post ad button open modal
document.querySelector('.btn-post-ad') && document.querySelector('.btn-post-ad').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('quickPostModal').style.display = 'flex';
});

// ===== TOAST =====
let toastTimer;
function showToast(msg) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ===== BACK TO TOP =====
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (btn) btn.classList.toggle('visible', window.scrollY > 400);
});

// ===== LANG TOGGLE =====
function toggleLang() {
  showToast('Dari/Pashto version coming soon! دری نسخه به زودی می‌آید');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  init();
  startSlider();
  animateCounter('stat-ads', 62480);
  animateCounter('stat-users', 215000);
  animateCounter('stat-deals', 38900);
});
