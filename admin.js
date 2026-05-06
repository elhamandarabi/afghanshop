// ===== AUTH CHECK =====
if (!sessionStorage.getItem('as_admin')) window.location.href = 'admin-login.html';

// ===== SAMPLE DATA =====
const adminListings = [
  { id:1, title:'Modern 3-Bedroom Apartment in Kabul', cat:'Real Estate', price:'12,000,000 AFN', province:'Kabul', user:'Ahmad K.', date:'2026-05-06', status:'active', icon:'🏠', color:'#e8f5e9' },
  { id:2, title:'Toyota Corolla 2021 — Very Clean', cat:'Vehicles', price:'1,850,000 AFN', province:'Kabul', user:'Sara M.', date:'2026-05-06', status:'active', icon:'🚗', color:'#e3f2fd' },
  { id:3, title:'iPhone 14 Pro Max 256GB', cat:'Electronics', price:'85,000 AFN', province:'Herat', user:'Noor R.', date:'2026-05-05', status:'pending', icon:'📱', color:'#f3e5f5' },
  { id:4, title:'Villa with Garden in Herat City', cat:'Real Estate', price:'25,000,000 AFN', province:'Herat', user:'Farhad H.', date:'2026-05-05', status:'active', icon:'🏡', color:'#fff3e0' },
  { id:5, title:'Land Cruiser V8 2019 Full Option', cat:'Vehicles', price:'3,800,000 AFN', province:'Kandahar', user:'Khalid A.', date:'2026-05-04', status:'featured', icon:'🚙', color:'#e8f5e9' },
  { id:6, title:'MacBook Pro M2 2023 16GB', cat:'Electronics', price:'120,000 AFN', province:'Kabul', user:'Mariam Z.', date:'2026-05-04', status:'active', icon:'💻', color:'#e3f2fd' },
  { id:7, title:'German Shepherd Puppies 2 Months', cat:'Animals', price:'15,000 AFN', province:'Kabul', user:'Yusuf B.', date:'2026-05-04', status:'pending', icon:'🐕', color:'#fff8e1' },
  { id:8, title:'Senior Software Developer — Kabul', cat:'Jobs', price:'Contact', province:'Kabul', user:'TechCo Ltd.', date:'2026-05-03', status:'active', icon:'💼', color:'#e8f5e9' },
  { id:9, title:'PlayStation 5 With 3 Games', cat:'Electronics', price:'38,000 AFN', province:'Mazar', user:'Ali N.', date:'2026-05-03', status:'rejected', icon:'🎮', color:'#fce4ec' },
  { id:10, title:'Complete Living Room Set Brown', cat:'Furniture', price:'65,000 AFN', province:'Kabul', user:'Fatima S.', date:'2026-05-02', status:'active', icon:'🛋️', color:'#fff3e0' },
  { id:11, title:'Commercial Shop for Rent Shar-e-Naw', cat:'Real Estate', price:'45,000 AFN/mo', province:'Kabul', user:'Reza M.', date:'2026-05-02', status:'pending', icon:'🏪', color:'#e8eaf6' },
  { id:12, title:'Nike Air Max 2024 Size 42', cat:'Fashion', price:'8,500 AFN', province:'Herat', user:'Laila K.', date:'2026-05-01', status:'active', icon:'👟', color:'#e8f5e9' },
];

const adminUsers = [
  { id:1, name:'Ahmad Karimi', email:'ahmad@gmail.com', phone:'+93 700 111 222', province:'Kabul', joined:'2025-01-12', ads:24, status:'active', avatar:'AK', color:'#1e7e34' },
  { id:2, name:'Sara Mohammadi', email:'sara@gmail.com', phone:'+93 700 333 444', province:'Herat', joined:'2025-03-08', ads:12, status:'active', avatar:'SM', color:'#2196f3' },
  { id:3, name:'Noor Rahimi', email:'noor@gmail.com', phone:'+93 700 555 666', province:'Kandahar', joined:'2025-05-20', ads:7, status:'active', avatar:'NR', color:'#9c27b0' },
  { id:4, name:'Farhad Haidari', email:'farhad@gmail.com', phone:'+93 700 777 888', province:'Kabul', joined:'2025-06-14', ads:31, status:'active', avatar:'FH', color:'#f39c12' },
  { id:5, name:'Khalid Ahmadi', email:'khalid@gmail.com', phone:'+93 700 999 000', province:'Mazar', joined:'2025-08-02', ads:5, status:'banned', avatar:'KA', color:'#e74c3c' },
  { id:6, name:'Mariam Zahir', email:'mariam@gmail.com', phone:'+93 700 121 212', province:'Herat', joined:'2025-09-18', ads:18, status:'active', avatar:'MZ', color:'#009688' },
  { id:7, name:'Yusuf Bakr', email:'yusuf@gmail.com', phone:'+93 700 343 434', province:'Kabul', joined:'2025-11-05', ads:9, status:'active', avatar:'YB', color:'#e91e63' },
  { id:8, name:'Ali Nasiri', email:'ali@gmail.com', phone:'+93 700 565 656', province:'Jalalabad', joined:'2025-12-22', ads:3, status:'active', avatar:'AN', color:'#3f51b5' },
];

const adminReports = [
  { id:1, listing:'iPhone 14 Pro Max 256GB', reportedBy:'Noor R.', reason:'Price seems fake / scam', date:'2026-05-06' },
  { id:2, listing:'Villa with Garden in Herat', reportedBy:'Ahmad K.', reason:'Duplicate listing', date:'2026-05-05' },
  { id:3, listing:'PS5 With 3 Games', reportedBy:'Sara M.', reason:'Inappropriate content', date:'2026-05-04' },
  { id:4, listing:'Job: Senior Developer', reportedBy:'Khalid A.', reason:'Misleading salary info', date:'2026-05-03' },
  { id:5, listing:'German Shepherd Puppies', reportedBy:'Mariam Z.', reason:'Cruelty to animals concern', date:'2026-05-02' },
];

const pendingListings = adminListings.filter(l => l.status === 'pending');

const categories = [
  { name:'Real Estate', icon:'🏠', count:12450 },
  { name:'Vehicles', icon:'🚗', count:8320 },
  { name:'Electronics', icon:'💻', count:15670 },
  { name:'Jobs', icon:'💼', count:4200 },
  { name:'Services', icon:'🔧', count:3100 },
  { name:'Fashion', icon:'👗', count:9800 },
  { name:'Animals', icon:'🐾', count:2340 },
  { name:'Furniture', icon:'🛋️', count:5670 },
  { name:'Food & Drinks', icon:'🍽️', count:1890 },
  { name:'Sports', icon:'⚽', count:3400 },
];

const activityItems = [
  { icon:'📋', bg:'#e8f5e9', color:'#1e7e34', text:'<strong>Ahmad K.</strong> posted a new listing: <em>Modern Apartment</em>', time:'2 min ago' },
  { icon:'👤', bg:'#e3f2fd', color:'#2196f3', text:'<strong>Sara M.</strong> registered a new account', time:'5 min ago' },
  { icon:'🚩', bg:'#fdecea', color:'#e74c3c', text:'<strong>Noor R.</strong> reported a listing', time:'12 min ago' },
  { icon:'⭐', bg:'#fff3e0', color:'#f39c12', text:'<strong>Farhad H.</strong> purchased Featured Ad package', time:'18 min ago' },
  { icon:'✅', bg:'#e8f5e9', color:'#1e7e34', text:'<strong>Admin</strong> approved listing: <em>Land Cruiser V8</em>', time:'25 min ago' },
  { icon:'❌', bg:'#fdecea', color:'#e74c3c', text:'<strong>Admin</strong> rejected listing: <em>PS5 with games</em>', time:'32 min ago' },
  { icon:'📋', bg:'#e8f5e9', color:'#1e7e34', text:'<strong>Mariam Z.</strong> posted: <em>MacBook Pro M2</em>', time:'45 min ago' },
  { icon:'👤', bg:'#e3f2fd', color:'#2196f3', text:'<strong>Yusuf B.</strong> registered a new account', time:'1 hour ago' },
];

// ===== PAGE NAVIGATION =====
function showPage(name, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');
  if (el) el.classList.add('active');
  document.getElementById('pageTitle').textContent = el ? el.textContent.trim() : name;
}

// ===== SIDEBAR TOGGLE =====
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ===== TOAST =====
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('adminToast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== CONFIRM MODAL =====
let confirmCallback = null;
function showConfirm(icon, title, msg, btnLabel, btnColor, cb) {
  document.getElementById('modalIcon').textContent = icon;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalMsg').textContent = msg;
  const btn = document.getElementById('confirmBtn');
  btn.textContent = btnLabel;
  btn.style.background = btnColor;
  confirmCallback = cb;
  document.getElementById('confirmModal').style.display = 'flex';
}
function closeConfirm() { document.getElementById('confirmModal').style.display = 'none'; }
document.getElementById('confirmBtn').addEventListener('click', () => {
  if (confirmCallback) confirmCallback();
  closeConfirm();
});

// ===== STAT COUNTER =====
function animateStat(el) {
  const target = parseInt(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  let cur = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = prefix + cur.toLocaleString();
    if (cur >= target) clearInterval(timer);
  }, 20);
}

// ===== RENDER RECENT LISTINGS (dashboard) =====
function renderRecentListings() {
  const tbody = document.getElementById('recentListingsTbody');
  if (!tbody) return;
  tbody.innerHTML = adminListings.slice(0, 6).map(l => `
    <tr>
      <td><span style="font-size:1.2rem">${l.icon}</span> ${l.title.substring(0,28)}...</td>
      <td>${l.cat}</td>
      <td>${l.user}</td>
      <td><span class="status-badge ${l.status}">${l.status}</span></td>
      <td>
        <button class="act-btn approve" onclick="approveListing(${l.id})"><i class="fas fa-check"></i></button>
        <button class="act-btn del" onclick="deleteListing(${l.id})"><i class="fas fa-trash"></i></button>
      </td>
    </tr>`).join('');
}

// ===== RENDER ALL LISTINGS =====
function renderAllListings(data) {
  const tbody = document.getElementById('allListingsTbody');
  if (!tbody) return;
  tbody.innerHTML = data.map(l => `
    <tr>
      <td><input type="checkbox" /></td>
      <td>${l.id}</td>
      <td><span style="font-size:1rem;margin-right:5px">${l.icon}</span>${l.title.substring(0,30)}...</td>
      <td>${l.cat}</td>
      <td style="font-weight:700;color:#1e7e34">${l.price}</td>
      <td>${l.province}</td>
      <td>${l.user}</td>
      <td>${l.date}</td>
      <td><span class="status-badge ${l.status}">${l.status}</span></td>
      <td>
        <button class="act-btn view" onclick="showToast('Viewing listing #${l.id}')"><i class="fas fa-eye"></i></button>
        <button class="act-btn approve" onclick="approveListing(${l.id})"><i class="fas fa-check"></i></button>
        <button class="act-btn edit" onclick="showToast('Editing listing #${l.id}')"><i class="fas fa-edit"></i></button>
        <button class="act-btn del" onclick="deleteListing(${l.id})"><i class="fas fa-trash"></i></button>
      </td>
    </tr>`).join('');
  document.getElementById('listCount').textContent = `Showing ${data.length} listings`;
}

function filterListings() {
  const q = document.getElementById('listSearch').value.toLowerCase();
  const cat = document.getElementById('listCatFilter').value;
  const status = document.getElementById('listStatusFilter').value;
  const prov = document.getElementById('listProvinceFilter').value;
  const filtered = adminListings.filter(l => {
    if (q && !l.title.toLowerCase().includes(q) && !l.user.toLowerCase().includes(q)) return false;
    if (cat && l.cat !== cat) return false;
    if (status && l.status !== status) return false;
    if (prov && l.province !== prov) return false;
    return true;
  });
  renderAllListings(filtered);
}

function selectAll(cb) {
  document.querySelectorAll('#allListingsTbody input[type="checkbox"]').forEach(c => c.checked = cb.checked);
}

// ===== LISTING ACTIONS =====
function approveListing(id) {
  showConfirm('✅', 'Approve Listing', `Approve listing #${id}? It will go live immediately.`, 'Approve', '#1e7e34', () => {
    showToast(`Listing #${id} approved and now live!`);
  });
}
function deleteListing(id) {
  showConfirm('🗑️', 'Delete Listing', `Delete listing #${id}? This cannot be undone.`, 'Delete', '#e74c3c', () => {
    showToast(`Listing #${id} deleted.`);
  });
}

// ===== PENDING =====
function renderPending() {
  const grid = document.getElementById('pendingGrid');
  if (!grid) return;
  if (pendingListings.length === 0) { grid.innerHTML = '<div style="text-align:center;padding:40px;color:#aaa;"><i class="fas fa-check-circle fa-3x"></i><p style="margin-top:12px">No pending listings!</p></div>'; return; }
  grid.innerHTML = pendingListings.map(l => `
    <div class="pending-card" id="pc-${l.id}">
      <div class="pending-card-img" style="background:${l.color}">${l.icon}</div>
      <div class="pending-card-body">
        <div class="pending-card-title">${l.title}</div>
        <div class="pending-card-meta"><i class="fas fa-user"></i> ${l.user} &nbsp;|&nbsp; <i class="fas fa-map-marker-alt"></i> ${l.province} &nbsp;|&nbsp; <i class="fas fa-tag"></i> ${l.price}</div>
        <div class="pending-card-actions">
          <button class="btn-approve" onclick="approveCard(${l.id})"><i class="fas fa-check"></i> Approve</button>
          <button class="btn-reject" onclick="rejectCard(${l.id})"><i class="fas fa-times"></i> Reject</button>
        </div>
      </div>
    </div>`).join('');
}

function approveCard(id) {
  const card = document.getElementById('pc-' + id);
  if (card) { card.style.opacity = '0'; card.style.transform = 'scale(.95)'; card.style.transition = '.3s'; setTimeout(() => card.remove(), 300); }
  showToast('Listing approved and now live!');
}
function rejectCard(id) {
  const card = document.getElementById('pc-' + id);
  if (card) { card.style.opacity = '0'; card.style.transform = 'scale(.95)'; card.style.transition = '.3s'; setTimeout(() => card.remove(), 300); }
  showToast('Listing rejected.');
}
function approveAll() {
  document.querySelectorAll('[id^="pc-"]').forEach(card => { card.style.opacity = '0'; card.style.transition = '.3s'; setTimeout(() => card.remove(), 300); });
  setTimeout(() => showToast('All pending listings approved!'), 400);
}

// ===== USERS =====
function renderUsers(data) {
  const tbody = document.getElementById('usersTbody');
  if (!tbody) return;
  tbody.innerHTML = data.map(u => `
    <tr>
      <td>${u.id}</td>
      <td><div class="user-cell"><div class="u-avatar" style="background:${u.color}">${u.avatar}</div><div><strong>${u.name}</strong></div></div></td>
      <td>${u.email}</td>
      <td>${u.phone}</td>
      <td>${u.province}</td>
      <td>${u.joined}</td>
      <td><strong>${u.ads}</strong></td>
      <td><span class="status-badge ${u.status}">${u.status}</span></td>
      <td>
        <button class="act-btn view" onclick="showToast('Viewing ${u.name}\\'s profile')"><i class="fas fa-eye"></i></button>
        <button class="act-btn edit" onclick="showToast('Editing ${u.name}')"><i class="fas fa-edit"></i></button>
        <button class="act-btn ban" onclick="banUser(${u.id},'${u.name}','${u.status}')"><i class="fas fa-${u.status==='banned'?'unlock':'ban'}"></i></button>
        <button class="act-btn del" onclick="showConfirm('🗑️','Delete User','Delete ${u.name}? All their ads will also be deleted.','Delete','#e74c3c',()=>showToast('User deleted.'))"><i class="fas fa-trash"></i></button>
      </td>
    </tr>`).join('');
}

function filterUsers(q, prov, status) {
  let data = [...adminUsers];
  if (q !== null && q !== undefined && q !== '') data = data.filter(u => u.name.toLowerCase().includes(q.toLowerCase()) || u.email.toLowerCase().includes(q.toLowerCase()));
  if (prov) data = data.filter(u => u.province === prov);
  if (status) data = data.filter(u => u.status === status);
  renderUsers(data);
}

function banUser(id, name, currentStatus) {
  const action = currentStatus === 'banned' ? 'Unban' : 'Ban';
  showConfirm(action === 'Ban' ? '🚫' : '✅', `${action} User`, `${action} ${name}?`, action, action === 'Ban' ? '#e74c3c' : '#1e7e34', () => {
    showToast(`${name} has been ${action === 'Ban' ? 'banned' : 'unbanned'}.`);
  });
}

// ===== REPORTS =====
function renderReports() {
  const tbody = document.getElementById('reportsTbody');
  if (!tbody) return;
  tbody.innerHTML = adminReports.map(r => `
    <tr>
      <td>${r.id}</td>
      <td>${r.listing}</td>
      <td>${r.reportedBy}</td>
      <td>${r.reason}</td>
      <td>${r.date}</td>
      <td>
        <button class="act-btn view" onclick="showToast('Viewing reported listing')"><i class="fas fa-eye"></i></button>
        <button class="act-btn del" onclick="showConfirm('🗑️','Remove Listing','Remove this reported listing?','Remove','#e74c3c',()=>showToast('Listing removed.'))"><i class="fas fa-trash"></i></button>
        <button class="act-btn approve" onclick="showToast('Report dismissed.')"><i class="fas fa-check"></i> Dismiss</button>
      </td>
    </tr>`).join('');
}

// ===== CATEGORIES =====
function renderCategories() {
  const el = document.getElementById('catManager');
  if (!el) return;
  el.innerHTML = categories.map(c => `
    <div class="cat-manage-card">
      <div class="cat-manage-icon">${c.icon}</div>
      <div class="cat-manage-info">
        <strong>${c.name}</strong>
        <small>${c.count.toLocaleString()} ads</small>
      </div>
      <div class="cat-manage-btns">
        <button class="act-btn edit" onclick="showToast('Edit ${c.name}')"><i class="fas fa-edit"></i></button>
        <button class="act-btn del" onclick="showConfirm('🗑️','Delete Category','Delete ${c.name}? All ads in this category will be uncategorized.','Delete','#e74c3c',()=>showToast('Category deleted.'))"><i class="fas fa-trash"></i></button>
      </div>
    </div>`).join('');
}

function addCategory() {
  const name = prompt('Enter new category name:');
  if (name && name.trim()) { showToast(`Category "${name}" added!`); renderCategories(); }
}

// ===== BANNERS =====
function renderBanners() {
  const el = document.getElementById('bannersGrid');
  if (!el) return;
  const banners = [
    { label:'Hero Banner 1', bg:'linear-gradient(135deg,#1a3a1a,#2d6a2d)', status:'active' },
    { label:'Hero Banner 2', bg:'linear-gradient(135deg,#8b1a1a,#c0392b)', status:'active' },
    { label:'Sidebar Ad Left', bg:'linear-gradient(135deg,#1a1a2e,#16213e)', status:'inactive' },
    { label:'Footer Banner', bg:'linear-gradient(135deg,#2c3e50,#4ca1af)', status:'active' },
  ];
  el.innerHTML = banners.map(b => `
    <div class="banner-card">
      <div class="banner-preview" style="background:${b.bg}">${b.label}</div>
      <div class="banner-footer">
        <span><span class="status-badge ${b.status==='active'?'active':'pending'}">${b.status}</span></span>
        <div>
          <button class="act-btn edit" onclick="showToast('Edit banner')"><i class="fas fa-edit"></i></button>
          <button class="act-btn del" onclick="showToast('Delete banner?')"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    </div>`).join('');
}

// ===== FEATURED =====
function renderFeatured() {
  const tbody = document.getElementById('featuredTbody');
  if (!tbody) return;
  const featured = adminListings.filter(l => l.status === 'featured');
  tbody.innerHTML = featured.length ? featured.map(l => `
    <tr>
      <td>${l.id}</td>
      <td>${l.icon} ${l.title.substring(0,30)}...</td>
      <td>${l.user}</td>
      <td>2026-05-01</td>
      <td>2026-05-31</td>
      <td><span class="status-badge featured">Premium</span></td>
      <td>
        <button class="act-btn del" onclick="showToast('Featured removed')"><i class="fas fa-times"></i> Remove</button>
      </td>
    </tr>`).join('') : '<tr><td colspan="7" style="text-align:center;padding:24px;color:#aaa">No featured ads</td></tr>';
}

// ===== REVENUE =====
function renderRevenue() {
  const tbody = document.getElementById('revenueTbody');
  if (!tbody) return;
  const txs = [
    { id:1, user:'Farhad H.', pkg:'Featured Ad — 7 days', amount:'14,000 AFN', date:'2026-05-06', status:'paid' },
    { id:2, user:'Ahmad K.', pkg:'Featured Ad — 30 days', amount:'42,000 AFN', date:'2026-05-05', status:'paid' },
    { id:3, user:'Sara M.', pkg:'Banner Ad — 1 month', amount:'30,000 AFN', date:'2026-05-04', status:'paid' },
    { id:4, user:'Noor R.', pkg:'Featured Ad — 7 days', amount:'14,000 AFN', date:'2026-05-03', status:'pending' },
    { id:5, user:'Mariam Z.', pkg:'Premium Member — 1 year', amount:'42,000 AFN', date:'2026-05-01', status:'paid' },
  ];
  tbody.innerHTML = txs.map(t => `
    <tr>
      <td>${t.id}</td>
      <td>${t.user}</td>
      <td>${t.pkg}</td>
      <td style="font-weight:700;color:#1e7e34">${t.amount}</td>
      <td>${t.date}</td>
      <td><span class="status-badge ${t.status === 'paid' ? 'active' : 'pending'}">${t.status}</span></td>
    </tr>`).join('');
}

// ===== RECENT USERS (dashboard) =====
function renderRecentUsers() {
  const tbody = document.getElementById('recentUsersTbody');
  if (!tbody) return;
  tbody.innerHTML = adminUsers.slice(0, 5).map(u => `
    <tr>
      <td><div class="user-cell"><div class="u-avatar" style="background:${u.color}">${u.avatar}</div><strong>${u.name}</strong></div></td>
      <td>${u.province}</td>
      <td>${u.joined}</td>
      <td>${u.ads}</td>
      <td><span class="status-badge ${u.status}">${u.status}</span></td>
    </tr>`).join('');
}

// ===== ACTIVITY FEED =====
function renderActivity() {
  const el = document.getElementById('activityFeed');
  if (!el) return;
  el.innerHTML = activityItems.map(a => `
    <div class="activity-item">
      <div class="a-icon" style="background:${a.bg};color:${a.color}">${a.icon}</div>
      <div class="a-text">${a.text}</div>
      <div class="a-time">${a.time}</div>
    </div>`).join('');
}

// ===== CATEGORY CHART =====
function renderCatChart() {
  const el = document.getElementById('catChart');
  if (!el) return;
  const max = Math.max(...categories.map(c => c.count));
  el.innerHTML = categories.map(c => `
    <div class="cat-bar-row">
      <div class="cat-bar-label"><span>${c.icon} ${c.name}</span><span>${c.count.toLocaleString()}</span></div>
      <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${Math.round(c.count/max*100)}%"></div></div>
    </div>`).join('');
}

// ===== BAR CHART (analytics) =====
function renderBarChart() {
  const el = document.getElementById('weeklyChart');
  if (!el) return;
  const days = [
    { d:'Mon', v:62000 },{ d:'Tue', v:75000 },{ d:'Wed', v:58000 },
    { d:'Thu', v:84000 },{ d:'Fri', v:92000 },{ d:'Sat', v:71000 },{ d:'Sun', v:84320 },
  ];
  const max = Math.max(...days.map(d => d.v));
  el.innerHTML = days.map(d => `
    <div class="bar-col">
      <div class="bar-val">${(d.v/1000).toFixed(0)}K</div>
      <div class="bar-fill" style="height:${Math.round(d.v/max*140)}px"></div>
      <div class="bar-label">${d.d}</div>
    </div>`).join('');
}

// ===== PROVINCE STATS =====
function renderProvinceStats() {
  const el = document.getElementById('provinceStats');
  if (!el) return;
  const provs = [
    { name:'Kabul', count:42150, pct:100 },
    { name:'Herat', count:18200, pct:43 },
    { name:'Kandahar', count:12400, pct:29 },
    { name:'Mazar', count:9800, pct:23 },
    { name:'Jalalabad', count:7200, pct:17 },
    { name:'Kunduz', count:4100, pct:10 },
  ];
  el.innerHTML = provs.map(p => `
    <div class="prov-row">
      <div class="prov-name">${p.name}</div>
      <div class="prov-bar"><div class="prov-fill" style="width:${p.pct}%"></div></div>
      <div class="prov-count">${(p.count/1000).toFixed(1)}K</div>
    </div>`).join('');
}

// ===== LOGOUT =====
function logout() {
  sessionStorage.removeItem('as_admin');
  window.location.href = 'admin-login.html';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.stat-num[data-target]').forEach(animateStat);
  renderRecentListings();
  renderRecentUsers();
  renderActivity();
  renderCatChart();
  renderAllListings(adminListings);
  renderPending();
  renderUsers(adminUsers);
  renderReports();
  renderCategories();
  renderBanners();
  renderFeatured();
  renderRevenue();
  renderBarChart();
  renderProvinceStats();
});
