// Listing detail page logic
const descriptions = {
  'real-estate': 'This property is in excellent condition and located in one of the best neighborhoods. Includes all modern amenities: central heating, 24/7 electricity backup, running water, and security. Close to schools, hospitals, and shopping centers. Ideal for families or investment. Price is negotiable for serious buyers. Contact the seller for a viewing appointment.',
  'vehicles': 'This vehicle is in great condition with no accidents or major repairs. Regularly serviced and maintained. All documents (registration, insurance) are up to date and ready for transfer. Single owner. Test drive available. Negotiable price for serious buyers only. Contact us anytime.',
  'electronics': 'This item is in excellent working condition. All original accessories and packaging included. No cracks, scratches, or damage. Fully functional with warranty remaining. Reason for selling: upgrading to a newer model. Price is firm but negotiable for cash buyers.',
  'jobs': 'We are looking for a qualified candidate to join our growing team. The role offers competitive salary, benefits, and opportunities for career growth. Candidates must have relevant experience and education. Please send your CV and cover letter. Only shortlisted candidates will be contacted.',
  'fashion': 'This item is brand new or in like-new condition. Worn only once or twice. No stains, tears, or damage. Size and color as described. Selling because it doesn\'t fit anymore. Perfect for any occasion. Available for pickup in Kabul or can be shipped nationwide.',
  'animals': 'This animal is healthy, vaccinated, and well taken care of. Comes with all necessary documentation. Friendly and well-behaved. Selling due to relocation. Serious buyers only — please contact for more details and photos.',
  'services': 'We offer professional, reliable, and affordable services. Years of experience in the field. Customer satisfaction guaranteed. Available 7 days a week. Contact us for a free consultation and quote.',
  'furniture': 'This furniture piece is solid, sturdy, and in great condition. No scratches or damage. Moving sale — must go quickly. Available for pickup only. Price is negotiable.',
};

const specsMap = {
  'real-estate': [['Type','Apartment/Villa'],['Area','150 m²'],['Rooms','3 Bedrooms'],['Bathrooms','2'],['Floor','3rd'],['Parking','Yes'],['Condition','Excellent']],
  'vehicles': [['Brand','Toyota'],['Year','2021'],['Mileage','45,000 km'],['Fuel','Petrol'],['Transmission','Automatic'],['Color','White'],['Doors','4']],
  'electronics': [['Brand','Apple / Samsung'],['Condition','Like New'],['Storage','256GB'],['Color','Space Black'],['Warranty','6 months'],['Accessories','All included']],
  'jobs': [['Type','Full Time'],['Experience','2+ years'],['Salary','Negotiable'],['Location','Kabul'],['Education','Bachelor\'s'],['Language','Dari / English']],
  'fashion': [['Size','M / L / XL'],['Condition','New'],['Color','As shown'],['Material','Cotton / Silk'],['Gender','Unisex']],
  'animals': [['Age','2 months'],['Gender','Male'],['Vaccinated','Yes'],['Breed','Purebred'],['Health','Excellent']],
  'services': [['Experience','5+ years'],['Availability','Daily'],['Area','Kabul & nearby'],['Response','Within 1 hour']],
  'furniture': [['Material','Wood'],['Color','Brown'],['Condition','Good'],['Age','2 years'],['Assembly','Required']],
};

function revealPhone() {
  const el = document.getElementById('phoneReveal');
  el.style.display = 'block';
  el.textContent = '+93 700 ' + Math.floor(100000 + Math.random() * 899999);
  showToast('Phone number revealed!');
}

function sendMessage() {
  const msg = prompt('Type your message to the seller:');
  if (msg && msg.trim()) showToast('Message sent! The seller will contact you soon.');
}

function shareListing() {
  if (navigator.share) {
    navigator.share({ title: document.title, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast('Link copied to clipboard!');
  }
}

function reportListing() {
  showToast('Thank you for reporting. Our team will review this listing.');
}

function renderDetail(item) {
  const priceStr = item.price === 0 ? 'Contact for Salary' : item.price.toLocaleString() + ' ' + item.currency;
  const badge = item.badge ? `<span class="card-badge badge-${item.badge} badge-detail">${item.badge}</span>` : '';
  const desc = descriptions[item.category] || 'Contact the seller for more information about this listing.';
  const specs = specsMap[item.category] || [];

  document.getElementById('detailCat').textContent = item.category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  document.title = item.title + ' — AfghanShop';

  document.getElementById('detailGrid').innerHTML = `
    <div class="detail-main">
      <div class="detail-gallery">
        <div class="gallery-main" style="background:${item.color}">
          <span style="font-size:5rem">${item.icon}</span>
          ${badge}
        </div>
        <div class="gallery-thumbs">
          ${[item.icon, '📷', '🖼️', '📸'].map((ic, i) =>
            `<div class="gallery-thumb${i===0?' active':''}" style="background:${item.color}">${ic}</div>`
          ).join('')}
        </div>
      </div>

      <div class="detail-info">
        <h1 class="detail-title">${item.title}</h1>
        <div class="detail-price">${priceStr}</div>
        <div class="detail-meta-row">
          <span class="detail-meta-item"><i class="fas fa-map-marker-alt"></i>${item.province}, Afghanistan</span>
          <span class="detail-meta-item"><i class="fas fa-clock"></i>Posted ${item.time}</span>
          <span class="detail-meta-item"><i class="fas fa-eye"></i>${Math.floor(100+Math.random()*900)} views</span>
          <span class="detail-meta-item"><i class="fas fa-tag"></i>${item.category.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</span>
        </div>
        <div class="detail-actions">
          <button class="btn-fav-detail" onclick="toggleFavDetail(this,${item.id})"><i class="far fa-heart"></i> Save</button>
          <button class="btn-share" onclick="shareListing()"><i class="fas fa-share-alt"></i> Share</button>
          <button class="btn-report" onclick="reportListing()"><i class="fas fa-flag"></i> Report</button>
        </div>
      </div>

      <div class="detail-desc">
        <h3><i class="fas fa-info-circle"></i> Description</h3>
        <p>${desc}</p>
      </div>

      ${specs.length ? `
      <div class="detail-specs">
        <h3><i class="fas fa-list-ul"></i> Details & Specifications</h3>
        <table class="specs-table">
          ${specs.map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
        </table>
      </div>` : ''}
    </div>

    <div class="detail-sidebar">
      <div class="seller-card">
        <h3>Seller Information</h3>
        <div class="seller-avatar">👤</div>
        <div class="seller-name">Ahmad Karimi</div>
        <span class="seller-badge"><i class="fas fa-check-circle"></i> Verified Seller</span>
        <div class="seller-stats">
          <div class="seller-stat"><strong>24</strong><span>Active Ads</span></div>
          <div class="seller-stat"><strong>4.8★</strong><span>Rating</span></div>
          <div class="seller-stat"><strong>2y</strong><span>Member</span></div>
        </div>
        <button class="btn-call" onclick="revealPhone()"><i class="fas fa-phone"></i> Show Phone Number</button>
        <button class="btn-message" onclick="sendMessage()"><i class="fas fa-comment"></i> Send Message</button>
        <div class="phone-reveal" id="phoneReveal"></div>
      </div>

      <div class="safety-card">
        <h4><i class="fas fa-shield-alt"></i> Safety Tips</h4>
        <ul>
          <li>Meet in a public, safe place</li>
          <li>Never send money in advance</li>
          <li>Inspect the item before paying</li>
          <li>Bring a friend if possible</li>
          <li>Trust your instincts</li>
        </ul>
      </div>

      <div class="map-card">
        <div class="map-placeholder">
          <i class="fas fa-map-marker-alt"></i>
          <span>${item.province}, Afghanistan</span>
          <small style="font-size:.75rem;color:#888">Exact location shared after contact</small>
        </div>
      </div>
    </div>`;
}

function toggleFavDetail(btn, id) {
  const saved = btn.querySelector('i').classList.contains('fas');
  btn.querySelector('i').className = saved ? 'far fa-heart' : 'fas fa-heart';
  btn.style.color = saved ? '' : 'var(--red)';
  showToast(saved ? 'Removed from favorites' : 'Added to favorites ❤️');
}

document.addEventListener('DOMContentLoaded', () => {
  const id = Number(new URLSearchParams(window.location.search).get('id')) || 1;
  const item = listings.find(l => l.id === id) || listings[0];
  renderDetail(item);

  const related = listings.filter(l => l.category === item.category && l.id !== item.id).slice(0, 4);
  populateGrid('relatedGrid', related);

  window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    if (btn) btn.classList.toggle('visible', window.scrollY > 400);
  });
});
