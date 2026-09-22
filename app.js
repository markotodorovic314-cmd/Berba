const IMAGE_BASE = 'https://api.berba.me/storage/products/';

const I18N = {
  me: {
    demo: 'Interaktivni demo', partner: 'Kupac', admin: 'Berba admin', logout: 'Promeni nalog',
    partnerPortal: 'Portal za kupce', administration: 'Administracija', overview: 'Pregled', catalog: 'Katalog',
    quick: 'Brza porudžbina', orders: 'Moje porudžbine', import: 'Uvezi porudžbenicu', documents: 'Dokumenti',
    customers: 'Kupci', products: 'Proizvodi i zalihe', integration: 'Abacus integracija', cart: 'Korpa',
    add: 'Dodaj', search: 'Pretraži po nazivu, proizvođaču ili šifri…', all: 'Sve kategorije',
    welcome: 'Dobro došli, Regent Porto Montenegro', welcomeCopy: 'Vaš ugovoreni asortiman, cene i trenutno raspoložive količine spremni su za poručivanje.',
    openCatalog: 'Otvori katalog', repeatOrder: 'Ponovi porudžbinu', currentStock: 'Aktuelno stanje',
    customerPrice: 'Vaša neto cena', perCase: 'po pakovanju, bez PDV-a', inStock: 'Na stanju', lowStock: 'Ograničena količina', outStock: 'Nije na stanju',
    placeOrder: 'Potvrdi porudžbinu', continueShopping: 'Nastavi kupovinu', emptyCart: 'Korpa je prazna',
    emptyCartCopy: 'Dodajte proizvode iz kataloga ili ponovite prethodnu porudžbinu.',
    details: 'Detalji', reorder: 'Ponovi', download: 'Preuzmi', view: 'Pogledaj', approve: 'Odobri',
  },
  en: {
    demo: 'Interactive demo', partner: 'Customer', admin: 'Berba admin', logout: 'Switch account',
    partnerPortal: 'Customer portal', administration: 'Administration', overview: 'Overview', catalog: 'Catalogue',
    quick: 'Quick order', orders: 'My orders', import: 'Import purchase order', documents: 'Documents',
    customers: 'Customers', products: 'Products & stock', integration: 'Abacus integration', cart: 'Cart',
    add: 'Add', search: 'Search by product, producer or SKU…', all: 'All categories',
    welcome: 'Welcome, Regent Porto Montenegro', welcomeCopy: 'Your contracted range, pricing and current availability — ready to order.',
    openCatalog: 'Open catalogue', repeatOrder: 'Repeat an order', currentStock: 'Live availability',
    customerPrice: 'Your net price', perCase: 'per case, excluding VAT', inStock: 'In stock', lowStock: 'Limited stock', outStock: 'Out of stock',
    placeOrder: 'Place order', continueShopping: 'Continue shopping', emptyCart: 'Your cart is empty',
    emptyCartCopy: 'Add products from the catalogue or repeat a previous order.',
    details: 'Details', reorder: 'Reorder', download: 'Download', view: 'View', approve: 'Approve',
  },
};

const iconPaths = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/><path d="M9 20v-6h6v6"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  box: '<path d="m3 7 9-4 9 4-9 4-9-4Z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/>',
  cart: '<circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M3 4h2l2.5 11h10l2-7H6"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r=".5"/><circle cx="3.5" cy="12" r=".5"/><circle cx="3.5" cy="18" r=".5"/>',
  file: '<path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 13h6M9 17h5"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 15v5h16v-5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  sync: '<path d="M20 7h-5V2"/><path d="M20 7a8 8 0 1 0 1 7"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>', minus: '<path d="M5 12h14"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>', menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>', chevron: '<path d="m9 18 6-6-6-6"/>',
  check: '<path d="m5 12 4 4L19 6"/>', heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5a5.5 5.5 0 0 0 1.1-8.9Z"/>',
  euro: '<circle cx="12" cy="12" r="9"/><path d="M16 8.5a4.5 4.5 0 1 0 0 7M7 10h7M7 14h7"/>',
  truck: '<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  logout: '<path d="M10 17l5-5-5-5M15 12H3"/><path d="M14 3h7v18h-7"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  building: '<path d="M4 21V5l8-3 8 3v16M9 9h1M14 9h1M9 13h1M14 13h1M9 17h1M14 17h1"/>',
  tag: '<path d="M20 13 13 20 4 11V4h7z"/><circle cx="8.5" cy="8.5" r="1.2"/>',
  wine: '<path d="M8 2h8l-1 8a3 3 0 0 1-6 0L8 2Z"/><path d="M12 13v8M8 21h8"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 20h16"/>',
  filter: '<path d="M4 5h16l-6 7v6l-4 2v-8z"/>',
};

function icon(name, label = '') {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ${label ? `aria-label="${esc(label)}" role="img"` : 'aria-hidden="true"'}>${iconPaths[name] || iconPaths.info}</svg>`;
}

const volumeRules = {
  standard: [{min:1,discount:10},{min:6,discount:20},{min:12,discount:30}],
  premium: [{min:1,discount:10},{min:3,discount:15},{min:6,discount:20}],
  fast: [{min:1,discount:10},{min:5,discount:20},{min:10,discount:30}],
};

const productSeed = [
  { sku:'BER-WIN-0185', name:'Alastro', producer:'Planeta', category:'Bela vina', origin:'Italija', region:'Sicilija', pack:'6 × 0,75 l', list:92.40, stock:68, reserved:12, tier:'standard', image: IMAGE_BASE+'1sbkYfc6SeZYqblrLV9JQSJj7nxXsoLhHWFuIcw1.png', desc:'Sveže belo vino sa notama citrusa, bele breskve i mediteranskog bilja.' },
  { sku:'BER-WIN-0177', name:'Amarone della Valpolicella “Vigna Garzon”', producer:'Pieropan', category:'Crvena vina', origin:'Italija', region:'Veneto', pack:'6 × 0,75 l', list:298.20, stock:18, reserved:4, tier:'premium', image: IMAGE_BASE+'stMmXuwi6J7Sq9VZt9Ucf4G9rCxEJWR923I6Usqg.png', desc:'Kompleksno Amarone vino sa aromama crne trešnje, crvenog voća i slatkih začina.' },
  { sku:'BER-WIN-0189', name:'Barolo', producer:'Prunotto', category:'Crvena vina', origin:'Italija', region:'Pijemont', pack:'6 × 0,75 l', list:221.40, stock:27, reserved:6, tier:'premium', image: IMAGE_BASE+'ubH4pPpZtmtQigKiEvyOYGhxBqnPNWtrZ9exyCKD.png', desc:'Klasični Barolo od sorte Nebbiolo, sa aromama crvenog voća, začina i šumske zemlje.' },
  { sku:'BER-WIN-0183', name:'Alteni di Brassica', producer:'Gaja', category:'Bela vina', origin:'Italija', region:'Pijemont', pack:'6 × 0,75 l', list:486.00, stock:9, reserved:2, tier:'premium', colors:['#27342d','#c0a56b'], desc:'Premium Sauvignon Blanc za pažljivo kreirane vinske karte i fine-dining ponudu.' },
  { sku:'BER-WIN-0121', name:'Barbaresco', producer:'Gaja', category:'Crvena vina', origin:'Italija', region:'Pijemont', pack:'6 × 0,75 l', list:642.00, stock:14, reserved:3, tier:'premium', image:IMAGE_BASE+'awaeMFQ3rSP8lcigBHJ9xW0FhSSk8JalvJQqR4JL.png', desc:'Jedno od najprepoznatljivijih vina Pijemonta za premium vinske karte.' },
  { sku:'BER-WIN-0201', name:'Barolo “Albe”', producer:'G.D. Vajra', category:'Crvena vina', origin:'Italija', region:'Pijemont', pack:'6 × 0,75 l', list:244.80, stock:31, reserved:8, tier:'premium', colors:['#4b1f25','#d1b173'], desc:'Precizan i slojevit Barolo za premium restorane, hotele i specijalizovanu maloprodaju.' },
  { sku:'BER-SPK-0111', name:'Moscato d’Asti', producer:'G.D. Vajra', category:'Penušava vina', origin:'Italija', region:'Pijemont', pack:'6 × 0,75 l', list:118.80, stock:42, reserved:10, tier:'standard', image:IMAGE_BASE+'adWZV8BWvfMeISHKL7cJmhfDnfV6wrmKAV8DDm5P.png', desc:'Aromatično penušavo vino za aperitiv, deserte i hotelske vinske programe.' },
  { sku:'PATR14', name:'Cuvée “Suton” 2025', producer:'Patrimonio', category:'Crvena vina', origin:'Crna Gora', region:'Crmnica', pack:'6 × 0,75 l', list:76.44, stock:162, reserved:18, tier:'standard', colors:['#4f1727','#d6b976'], desc:'Crnogorski cuvée za restorane i hotele koji žele lokalnu etiketu na vinskoj karti.' },
  { sku:'PATR8', name:'Vranac “Kolomat” 2021', producer:'Patrimonio', category:'Crvena vina', origin:'Crna Gora', region:'Crmnica', pack:'6 × 0,75 l', list:106.98, stock:135, reserved:15, tier:'standard', colors:['#36121c','#b98b50'], desc:'Vranac punog tela za mesna jela i savremene regionalne vinske karte.' },
  { sku:'PATR12', name:'Chardonnay Barrique “Terra Santa” 2023', producer:'Patrimonio', category:'Bela vina', origin:'Crna Gora', region:'Crmnica', pack:'6 × 0,75 l', list:181.50, stock:126, reserved:21, tier:'standard', colors:['#5f6337','#d5c47f'], desc:'Barikirani Chardonnay iz Crne Gore, namenjen premium HoReCa ponudi.' },
  { sku:'ANT154', name:'Villa Antinori Bianco 2025', producer:'Antinori', category:'Bela vina', origin:'Italija', region:'Toskana', pack:'6 × 0,75 l', list:105.00, stock:3593, reserved:240, tier:'standard', colors:['#666f3f','#d4c173'], desc:'Sveže italijansko belo vino za restoransku uslugu na čašu i maloprodaju.' },
  { sku:'GAVI6', name:'Gavi di Gavi 2025', producer:'Villa Sparina', category:'Bela vina', origin:'Italija', region:'Pijemont', pack:'6 × 0,75 l', list:132.00, stock:2118, reserved:180, tier:'standard', colors:['#314e3a','#cabd78'], desc:'Gavi di Gavi sa čistim mineralnim profilom, pogodan za ribu i morske plodove.' },
  { sku:'ANT121', name:'Chianti Classico Pèppoli 2024', producer:'Antinori', category:'Crvena vina', origin:'Italija', region:'Toskana', pack:'6 × 0,75 l', list:123.00, stock:1372, reserved:126, tier:'standard', colors:['#5b1721','#c29b5a'], desc:'Klasični Chianti za restoransku vinsku kartu i specijalizovanu maloprodaju.' },
  { sku:'WA53', name:'Whispering Angel 2025', producer:'Château d’Esclans', category:'Roze vina', origin:'Francuska', region:'Provansa', pack:'6 × 0,75 l', list:150.00, stock:1224, reserved:114, tier:'standard', colors:['#a86e68','#ead2bd'], desc:'Provansalski roze za hotelske terase, restorane i sezonsku ponudu.' },
  { sku:'BILLAS15', name:'Chablis 2023', producer:'Billaud-Simon', category:'Bela vina', origin:'Francuska', region:'Burgundija', pack:'6 × 0,75 l', list:207.00, stock:666, reserved:54, tier:'premium', colors:['#4e5e47','#d8c887'], desc:'Mineralan Chablis za premium HoReCa kupce i pažljivo birane vinske karte.' },
  { sku:'LR78', name:'Collection 246', producer:'Louis Roederer', category:'Penušava vina', origin:'Francuska', region:'Šampanja', pack:'6 × 0,75 l', list:393.00, stock:904, reserved:72, tier:'premium', colors:['#3e3425','#d8b758'], desc:'Šampanjac za premium događaje, hotelske barove i fine-dining uslugu.' },
  { sku:'O387', name:'Bollinger Special Cuvée', producer:'Bollinger', category:'Penušava vina', origin:'Francuska', region:'Šampanja', pack:'6 × 0,75 l', list:456.00, stock:333, reserved:30, tier:'premium', colors:['#423b2c','#d1a84c'], desc:'Prepoznatljiv šampanjac punog stila za ekskluzivnu HoReCa ponudu.' },
  { sku:'BONES1', name:'London Dry Gin', producer:'Broken Bones', category:'Žestoka pića', origin:'Slovenija', region:'Ljubljana', pack:'6 × 0,50 l', list:210.00, stock:185, reserved:22, tier:'standard', colors:['#222b2e','#c0a46a'], desc:'London Dry gin sa spojem kleke, citrusa i lokalnih botanika.' },
  { sku:'OCF15119', name:'3 Stars Rum', producer:'Planteray', category:'Žestoka pića', origin:'Karibi', region:'Barbados · Jamajka', pack:'6 × 0,70 l', list:126.00, stock:645, reserved:56, tier:'standard', colors:['#4b2c1e','#cf9f52'], desc:'Beli rum za hotelske barove, koktel karte i maloprodajnu ponudu.' },
  { sku:'BUJSKA1', name:'Svijetlo pivo', producer:'San Servolo', category:'Pivo', origin:'Hrvatska', region:'Istra', pack:'24 × 0,33 l', list:72.00, stock:1746, reserved:240, tier:'fast', colors:['#8a5d22','#e2b75d'], desc:'Svetlo zanatsko pivo za restorane, barove i hotelski minibar.' },
  { sku:'GARDEN13', name:'Zora Pilsner', producer:'The Garden Brewery', category:'Pivo', origin:'Hrvatska', region:'Zagreb', pack:'24 × 0,33 l', list:55.20, stock:231, reserved:36, tier:'fast', colors:['#34566a','#d8a64b'], desc:'Lagan pilsner za barsku ponudu, događaje i maloprodaju.' },
  { sku:'ESPG10', name:'Premium Tonic Water', producer:'Fever-Tree', category:'Bezalkoholno', origin:'Ujedinjeno Kraljevstvo', region:'London', pack:'24 × 0,20 l', list:46.80, stock:576, reserved:72, tier:'fast', colors:['#324b4d','#c6b77c'], desc:'Premium tonik za barske koktele, hotelske minibare i ugostiteljsku ponudu.' },
];

const products = productSeed.map((p,index) => ({
  ...p,
  id:index+1,
  favorite:[0,1,6,7,10,13,19].includes(index),
  available:Math.max(0,p.stock-p.reserved),
  volumeTiers:volumeRules[p.tier] || volumeRules.standard,
  discount:(volumeRules[p.tier] || volumeRules.standard)[0].discount,
  price:Number((p.list*(1-(volumeRules[p.tier] || volumeRules.standard)[0].discount/100)).toFixed(2)),
}));

const partnerOrders = [
  { id:'BER-260922-244', date:'22. sep 2026.', items:['WA53','BONES1','ESPG10'], quantities:[4,2,5], total:1068.12, status:'blocked', label:'Blokirano · kreditni limit', progress:1, eta:'—', invoice:null, reason:'Porudžbina prelazi raspoloživi kredit za 348,12 €. Berba komercijala treba da je odobri pre slanja u Abacus.' },
  { id:'BER-260921-241', date:'21. sep 2026.', items:['BER-WIN-0185','BER-SPK-0111','ESPG10'], quantities:[4,2,3], total:581.76, status:'processing', label:'Spremno za isporuku', progress:3, eta:'23. sep 2026.', invoice:'FA-2609-188' },
  { id:'BER-260902-219', date:'02. sep 2026.', items:['BER-WIN-0189','PATR14'], quantities:[2,2], total:588.60, status:'delivered', label:'Isporučeno', progress:4, eta:'03. sep 2026.', invoice:'FA-2609-147' },
  { id:'BER-260821-176', date:'21. avg 2026.', items:['BER-WIN-0177','ESPG10'], quantities:[1,4], total:428.22, status:'delivered', label:'Isporučeno', progress:4, eta:'22. avg 2026.', invoice:'FA-2608-391' },
  { id:'BER-260814-152', date:'14. avg 2026.', items:['BONES1','BUJSKA1'], quantities:[2,5], total:556.20, status:'delivered', label:'Isporučeno', progress:4, eta:'15. avg 2026.', invoice:'FA-2608-315' },
];

const adminOrders = [
  { id:'BER-260922-257', partner:'Hotel Regent Porto Montenegro', initials:'HR', date:'22. sep 2026.', items:9, total:1248.36, status:'review', label:'Čeka odobrenje', progress:1 },
  { id:'BER-260922-244', partner:'Boutique Hotel Casa del Mare', initials:'CM', date:'22. sep 2026.', items:3, total:1068.12, status:'blocked', label:'Blokirano · kreditni limit', progress:1, reason:'Porudžbina prelazi raspoloživi kredit za 348,12 €.' },
  { id:'BER-260922-256', partner:'Voli Trade', initials:'VT', date:'22. sep 2026.', items:17, total:2894.10, status:'processing', label:'U pripremi', progress:2 },
  { id:'BER-260922-255', partner:'One&Only Portonovi', initials:'OO', date:'22. sep 2026.', items:12, total:1950.70, status:'processing', label:'Poslato u Abacus', progress:2 },
  { id:'BER-260921-251', partner:'Restoran Galion', initials:'RG', date:'21. sep 2026.', items:6, total:468.90, status:'delivered', label:'Isporučeno', progress:4 },
  { id:'BER-260921-248', partner:'HDL Laković', initials:'HL', date:'21. sep 2026.', items:24, total:4321.40, status:'processing', label:'Spremno za isporuku', progress:3 },
  { id:'BER-260921-247', partner:'Aroma Marketi', initials:'AM', date:'21. sep 2026.', items:21, total:3644.20, status:'delivered', label:'Isporučeno', progress:4 },
];

const customers = [
  { name:'Hotel Regent Porto Montenegro', initials:'HR', type:'HoReCa · Premium', city:'Tivat', price:'HORECA-P1', discount:'10–30%', credit:15000, used:4280, terms:'30 dana', status:'active' },
  { name:'One&Only Portonovi', initials:'OO', type:'HoReCa · Premium', city:'Herceg Novi', price:'HORECA-P1', discount:'10–30%', credit:20000, used:7350, terms:'30 dana', status:'active' },
  { name:'Voli Trade', initials:'VT', type:'Maloprodaja · Key account', city:'Podgorica', price:'RETAIL-KA', discount:'12–30%', credit:40000, used:16480, terms:'45 dana', status:'active' },
  { name:'HDL Laković', initials:'HL', type:'Maloprodaja · Key account', city:'Podgorica', price:'RETAIL-KA', discount:'12–30%', credit:35000, used:19800, terms:'45 dana', status:'active' },
  { name:'Restoran Galion', initials:'RG', type:'HoReCa · Standard', city:'Kotor', price:'HORECA-S1', discount:'7–10%', credit:6000, used:1250, terms:'15 dana', status:'active' },
  { name:'Boutique Hotel Casa del Mare', initials:'CM', type:'HoReCa · Standard', city:'Kamenari', price:'HORECA-S1', discount:'7–11%', credit:8000, used:7860, terms:'15 dana', status:'blocked' },
];

const incomingDocuments = [
  { filename:'PO-REGENT-1009.pdf', customer:'Regent Porto Montenegro', customerIndex:0, lines:9, status:'matched', received:'2 min', receivedAt:'22. sep 2026. · 21:58', source:'Email', reference:'REG-FB-1009', confidence:'98%', progress:3, items:[['BER-WIN-0185',4],['BER-WIN-0189',2],['BER-SPK-0111',3]], total:1869.66 },
  { filename:'Narudzba-Casa-del-Mare.xlsx', customer:'Casa del Mare', customerIndex:5, lines:6, status:'review', received:'11 min', receivedAt:'22. sep 2026. · 21:49', source:'Portal upload', reference:'CDM-0909-44', confidence:'96%', progress:2, items:[['BER-WIN-0177',2],['BONES1',2],['ESPG10',2]], total:842.04 },
  { filename:'order_voli_1009.csv', customer:'Voli Trade', customerIndex:2, lines:17, status:'sent', received:'24 min', receivedAt:'22. sep 2026. · 21:36', source:'SFTP import', reference:'VOLI-1009-873', confidence:'100%', progress:3, items:[['BER-WIN-0189',6],['BUJSKA1',12],['ESPG10',4]], total:2894.10, orderId:'BER-260922-256', erpId:'Abacus ERP' },
  { filename:'photo-order-8801.jpg', customer:'Restoran Galion', customerIndex:4, lines:4, status:'created', received:'42 min', receivedAt:'22. sep 2026. · 21:18', source:'Photo upload', reference:'GAL-8801', confidence:'93%', progress:4, items:[['BONES1',1],['GARDEN13',3],['BER-WIN-0185',1]], total:468.90, orderId:'BER-260921-251', erpId:'Abacus ERP' },
];

const initialNotifications = [
  { id:'new-order', kind:'order', target:'BER-260922-257', icon:'cart', read:false, time:'2 min', titleME:'Nova porudžbina čeka odobrenje', titleEN:'New order awaiting approval', copyME:'Regent Porto Montenegro · BER-260922-257', copyEN:'Regent Porto Montenegro · BER-260922-257' },
  { id:'credit-review', kind:'customer', target:'5', icon:'clock', read:false, time:'11 min', titleME:'Potrebna provera kreditnog limita', titleEN:'Credit limit review required', copyME:'Casa del Mare ima još 140,00 € raspoloživo', copyEN:'Casa del Mare has €140.00 available' },
  { id:'document-review', kind:'document', target:'1', icon:'file', read:false, time:'14 min', titleME:'Dokument zahteva proveru', titleEN:'Document requires review', copyME:'Narudzba-Casa-del-Mare.xlsx · 6 stavki', copyEN:'Narudzba-Casa-del-Mare.xlsx · 6 items' },
];

const state = {
  authenticated:false, mode:'partner', partnerSection:'home', adminSection:'dashboard', lang:'me', mobileOpen:false,
  search:'', category:'Sve kategorije', sort:'featured', cart:new Map(), favorites:new Set(products.filter(p=>p.favorite).map(p=>p.sku)),
  partnerOrders:[...partnerOrders], adminOrders:[...adminOrders], documents:incomingDocuments.map(d=>({...d,items:d.items.map(item=>[...item])})),
  notifications:initialNotifications.map(n=>({...n})), uploadResult:null, quickSearch:'',
};

const app = document.querySelector('#app');
const modalRoot = document.querySelector('#modal-root');
const toastRoot = document.querySelector('#toast-root');

function esc(value='') { return String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c])); }
function t(key) { return I18N[state.lang][key] || I18N.me[key] || key; }
function money(value) { return new Intl.NumberFormat(state.lang==='en'?'en-IE':'sr-ME',{style:'currency',currency:'EUR'}).format(value); }
function normalize(value='') { return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim(); }
function cartCount() { return [...state.cart.values()].reduce((sum,q)=>sum+q,0); }
function tierForQty(p,qty=1) { return [...p.volumeTiers].reverse().find(tier=>qty>=tier.min) || p.volumeTiers[0]; }
function unitPriceForQty(p,qty=1) { return Number((p.list*(1-tierForQty(p,qty).discount/100)).toFixed(2)); }
function cartTotal() { return [...state.cart.entries()].reduce((sum,[sku,q])=>{const p=products.find(item=>item.sku===sku);return sum+(p?unitPriceForQty(p,q)*q:0);},0); }
function cartListTotal() { return [...state.cart.entries()].reduce((sum,[sku,q])=>sum+(products.find(p=>p.sku===sku)?.list||0)*q,0); }
function unreadCount() { return state.notifications.filter(n=>!n.read).length; }
function availableLabel(p) { return p.available===0?t('outStock'):p.available<12?t('lowStock'):t('inStock'); }
function stockClass(p) { return p.available===0?'out':p.available<12?'low':''; }
function statusBadge(order) { return `<span class="status ${esc(order.status)}">${esc(order.label)}</span>`; }
function initials(name) { return name.split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase(); }

function renderLogin() {
  app.innerHTML = `
    <main class="login-screen">
      <section class="login-visual" aria-label="Berba B2B portal">
        <div class="login-brand"><img src="https://berba.me/_ipx/s_192x45/img/logo_large.png" alt="Berba"/><span class="login-brand-line"></span><span class="login-brand-copy">B2B portal</span></div>
        <div class="login-story">
          <div class="login-kicker">Distribucija vina i pića za HoReCa i maloprodaju</div>
          <h1 class="login-title">Berba asortiman i poručivanje<br>na jednom mestu.</h1>
          <p class="login-copy">Kupac nakon prijave vidi svoj katalog, ugovorene cene, količinske rabate i raspoloživo stanje. Porudžbina se šalje Berbi bez poziva i prekucavanja.</p>
        </div>
        <div class="login-proof">
          <div class="proof-item"><div class="proof-value">HoReCa</div><div class="proof-label">restorani, hoteli i barovi</div></div>
          <div class="proof-item"><div class="proof-value">1–2 dana</div><div class="proof-label">planirana isporuka</div></div>
          <div class="proof-item"><div class="proof-value">Abacus</div><div class="proof-label">ERP podaci i porudžbine</div></div>
        </div>
      </section>
      <section class="login-panel">
        <div class="login-card">
          <img class="login-mobile-logo" src="https://berba.me/_ipx/s_192x45/img/logo_large.png" alt="Berba"/>
          <div class="login-overline">${t('demo')}</div>
          <h2 class="login-heading">${state.lang==='en'?'Choose a demo view':'Izaberite demo prikaz'}</h2>
          <p class="login-lead">${state.lang==='en'?'Explore the complete journey from customer ordering to Berba administration and Abacus ERP.':'Pogledajte kompletan tok — od poručivanja kupca do Berba administracije i Abacus ERP-a.'}</p>
          <div class="role-options">
            <button class="role-option" data-action="login" data-mode="partner">
              <span class="role-icon">${icon('wine')}</span><span><span class="role-title">${state.lang==='en'?'Customer portal':'Portal poslovnog kupca'}</span><span class="role-copy">${state.lang==='en'?'Regent Porto Montenegro · contracted prices':'Regent Porto Montenegro · ugovorene cene'}</span></span><span class="role-arrow">${icon('arrow')}</span>
            </button>
            <button class="role-option" data-action="login" data-mode="admin">
              <span class="role-icon">${icon('building')}</span><span><span class="role-title">Berba administrator</span><span class="role-copy">${state.lang==='en'?'Orders, customers, stock and ERP sync':'Porudžbine, kupci, zalihe i ERP sinhronizacija'}</span></span><span class="role-arrow">${icon('arrow')}</span>
            </button>
          </div>
          <div class="login-note">${state.lang==='en'?'Demo data only. Product range, pricing and stock are illustrative and do not constitute a commercial offer.':'Demonstracioni podaci. Prikazani asortiman, cene i stanje služe samo za predstavljanje načina rada portala.'}</div>
          <div class="login-footer"><span>Powered by B2Bware</span>${languageButtons()}</div>
        </div>
      </section>
    </main>`;
}

function languageButtons() {
  return `<div class="lang-group" aria-label="Language"><button class="lang-button ${state.lang==='me'?'active':''}" data-action="language" data-lang="me">SR</button><button class="lang-button ${state.lang==='en'?'active':''}" data-action="language" data-lang="en">EN</button></div>`;
}

function navItems() {
  return state.mode==='partner' ? [
    ['home','home',t('overview')],['catalog','wine',t('catalog')],['quick','list',t('quick')],['orders','truck',t('orders')],['import','upload',t('import')],['documents','file',t('documents')],
  ] : [
    ['dashboard','grid',t('overview')],['orders','cart',state.lang==='en'?'Orders':'Porudžbine','3'],['customers','users',t('customers')],['products','box',t('products')],['pricing','tag',state.lang==='en'?'Pricing rules':'Cenovnici i rabati'],['documents','file',t('documents'),'2'],['integration','sync',t('integration')],
  ];
}

function activeSection() { return state.mode==='partner'?state.partnerSection:state.adminSection; }
function pageMeta() {
  const maps = state.mode==='partner' ? {
    home:[t('partnerPortal'),state.lang==='en'?'Regent Porto Montenegro':'Regent Porto Montenegro'], catalog:[t('partnerPortal'),t('catalog')],
    quick:[state.lang==='en'?'Ordering':'Naručivanje',t('quick')], orders:[state.lang==='en'?'Ordering':'Naručivanje',t('orders')],
    import:[state.lang==='en'?'Automation':'Automatizacija',t('import')], documents:[state.lang==='en'?'Account':'Moj nalog',t('documents')],
  } : {
    dashboard:[t('administration'),state.lang==='en'?'Business overview':'Pregled poslovanja'], orders:[state.lang==='en'?'Sales':'Prodaja',state.lang==='en'?'Orders':'Porudžbine'],
    customers:[state.lang==='en'?'Accounts':'Kupci',t('customers')], products:[state.lang==='en'?'Range':'Asortiman',t('products')], pricing:[state.lang==='en'?'Commercial rules':'Komercijalni uslovi',state.lang==='en'?'Pricing rules':'Cenovnici i rabati'],
    documents:[state.lang==='en'?'Automation':'Automatizacija',t('documents')], integration:[state.lang==='en'?'System':'Sistem',t('integration')],
  };
  return maps[activeSection()];
}

function renderShell() {
  const [overline,title] = pageMeta();
  app.innerHTML = `
    <div class="shell">
      ${state.mobileOpen?'<div class="mobile-nav-overlay" data-action="close-menu"></div>':''}
      <aside class="sidebar ${state.mobileOpen?'open':''}">
        <div class="brand"><img class="brand-logo" src="https://berba.me/_ipx/s_192x45/img/logo_large.png" alt="Berba"/><span class="brand-divider"></span><span class="brand-sub">${state.mode==='partner'?t('partnerPortal'):t('administration')}</span></div>
        <div class="nav-label">${state.mode==='partner'?(state.lang==='en'?'My account':'Moj nalog'):(state.lang==='en'?'Management':'Upravljanje')}</div>
        <nav class="nav-list">${navItems().map(([id,ico,label,badge])=>`<button class="nav-item ${activeSection()===id?'active':''}" data-action="navigate" data-section="${id}">${icon(ico)}<span>${esc(label)}</span>${badge?`<span class="nav-badge">${badge}</span>`:''}</button>`).join('')}</nav>
        <div class="sidebar-spacer"></div>
        <div class="sync-card"><div class="sync-row"><span class="sync-dot"></span><span>${state.lang==='en'?'Abacus connection active':'Abacus veza aktivna'}</span></div><div class="sync-meta">${state.lang==='en'?'Last sync 4 min ago<br>Products · customers · pricing · orders':'Poslednja sinhronizacija pre 4 min<br>Proizvodi · kupci · cene · porudžbine'}</div></div>
        <div class="user-card"><div class="avatar">${state.mode==='partner'?'HR':'BP'}</div><div><div class="user-name">${state.mode==='partner'?'Regent Porto Montenegro':'Boško P.'}</div><div class="user-role">${state.mode==='partner'?'HoReCa · Premium':'Berba administrator'}</div></div><button class="signout-button" data-action="logout" title="${t('logout')}">${icon('logout')}</button></div>
      </aside>
      <section class="workspace">
        <header class="topbar"><button class="mobile-menu" data-action="open-menu" aria-label="Menu">${icon('menu')}</button><div class="breadcrumbs"><div class="crumb-overline">${esc(overline)}</div><div class="crumb-title">${esc(title)}</div></div><div class="topbar-spacer"></div><span class="demo-pill">${t('demo')}</span>${languageButtons()}<div class="mode-switch"><button class="mode-button ${state.mode==='partner'?'active':''}" data-action="switch-mode" data-mode="partner" title="${t('partner')}">${icon('wine')}<span>${t('partner')}</span></button><button class="mode-button ${state.mode==='admin'?'active':''}" data-action="switch-mode" data-mode="admin" title="${t('admin')}">${icon('building')}<span>${t('admin')}</span></button></div>${state.mode==='partner'?`<button class="icon-button" data-action="open-cart" aria-label="${t('cart')}">${icon('cart')}${cartCount()?`<span class="icon-badge">${cartCount()}</span>`:''}</button>`:`<button class="icon-button" data-action="notifications" aria-label="${state.lang==='en'?'Notifications':'Obavještenja'}">${icon('bell')}${unreadCount()?`<span class="icon-badge">${unreadCount()}</span>`:''}</button>`}</header>
        <div id="page-content">${renderPage()}</div>
      </section>
    </div>`;
}

function renderPage() {
  if(state.mode==='partner') {
    return ({home:partnerHome,catalog:partnerCatalog,quick:partnerQuick,orders:partnerOrdersPage,import:partnerImport,documents:partnerDocuments}[state.partnerSection]||partnerHome)();
  }
  return ({dashboard:adminDashboard,orders:adminOrdersPage,customers:adminCustomers,products:adminProducts,pricing:adminPricing,documents:adminDocuments,integration:adminIntegration}[state.adminSection]||adminDashboard)();
}

function pageHeader(kicker,title,copy,actions='') {
  return `<div class="page-header"><div><p class="eyebrow">${kicker}</p><h1 class="page-title">${title}</h1>${copy?`<p class="page-description">${copy}</p>`:''}</div>${actions?`<div class="header-actions">${actions}</div>`:''}</div>`;
}

function accountStrip() {
  return `<div class="account-strip"><div class="account-item"><div class="account-label">${state.lang==='en'?'Price list':'Cenovnik'}</div><div class="account-value">HORECA-P1</div></div><div class="account-item"><div class="account-label">${state.lang==='en'?'Payment terms':'Rok plaćanja'}</div><div class="account-value">30 ${state.lang==='en'?'days':'dana'}</div></div><div class="account-item"><div class="account-label">${state.lang==='en'?'Available credit':'Raspoloživ kredit'}</div><div class="account-value good">${money(10720)}</div></div><div class="account-item"><div class="account-label">${state.lang==='en'?'Next delivery':'Naredna isporuka'}</div><div class="account-value">23. sep · 08–12h</div></div></div>`;
}

function partnerHome() {
  const recent=state.partnerOrders.slice(0,3);
  return `<main class="page">
    <section class="partner-hero"><div class="hero-content"><div class="hero-kicker">${state.lang==='en'?'Your Berba account':'Vaš Berba nalog'}</div><h1 class="hero-title">${t('welcome')}</h1><p class="hero-copy">${t('welcomeCopy')}</p><div class="hero-actions"><button class="primary-button" data-action="navigate" data-section="catalog">${icon('wine')} ${t('openCatalog')}</button><button class="secondary-button" data-action="reorder" data-order="${recent[1].id}">${icon('sync')} ${t('repeatOrder')}</button></div></div><div class="hero-stats"><div class="hero-stats-title">${state.lang==='en'?'Account summary':'Pregled naloga'}</div><div class="hero-stat"><span class="hero-stat-label">${state.lang==='en'?'Quantity discounts':'Količinski rabati'}</span><span class="hero-stat-value">${state.lang==='en'?'up to 30%':'do 30%'}</span></div><div class="hero-stat"><span class="hero-stat-label">${state.lang==='en'?'Open balance':'Otvoreno stanje'}</span><span class="hero-stat-value">${money(4280)}</span></div><div class="hero-stat"><span class="hero-stat-label">${state.lang==='en'?'Delivery service':'Isporuka'}</span><span class="hero-stat-value">${state.lang==='en'?'Same / next day':'Isti / naredni dan'}</span></div></div></section>
    ${accountStrip()}
    <div class="partner-shortcuts">
      ${shortcut('wine',state.lang==='en'?'Browse range':'Pregledaj asortiman',state.lang==='en'?'Your catalogue and net prices':'Vaš katalog i neto cene','catalog')}
      ${shortcut('list',t('quick'),state.lang==='en'?'Enter SKU and case quantity':'Unesite šifru i broj pakovanja','quick')}
      ${shortcut('upload',t('import'),state.lang==='en'?'PDF, Excel, CSV or photo':'PDF, Excel, CSV ili fotografija','import')}
      ${shortcut('file',t('documents'),state.lang==='en'?'Invoices and delivery notes':'Fakture i otpremnice','documents')}
    </div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-head"><div><div class="panel-title">${state.lang==='en'?'Recent orders':'Poslednje porudžbine'}</div><div class="panel-subtitle">${state.lang==='en'?'Status and delivery from Abacus ERP':'Status i isporuka iz Abacus ERP-a'}</div></div><button class="ghost-button" data-action="navigate" data-section="orders">${state.lang==='en'?'View all':'Prikaži sve'} ${icon('arrow')}</button></div>${ordersTable(recent,false)}</section><div><section class="panel"><div class="panel-head"><div><div class="panel-title">${t('currentStock')}</div><div class="panel-subtitle">${state.lang==='en'?'Most frequently ordered products':'Najčešće poručivani artikli'}</div></div></div><div class="activity-list">${products.slice(0,4).map(p=>`<div class="activity-row"><div class="activity-icon">${icon('wine')}</div><div><div class="activity-title">${esc(p.name)}</div><div class="activity-meta">${esc(p.sku)} · ${esc(p.pack)}</div></div><span class="status ${stockClass(p)==='out'?'cancelled':stockClass(p)==='low'?'review':'active'}">${p.available} ${state.lang==='en'?'cases':'pak.'}</span></div>`).join('')}</div></section></div></div>
  </main>`;
}

function shortcut(ico,title,copy,section) { return `<button class="shortcut-card" data-action="navigate" data-section="${section}"><span class="shortcut-icon">${icon(ico)}</span><span><span class="shortcut-title">${title}</span><span class="shortcut-copy">${copy}</span></span><span class="shortcut-arrow">${icon('chevron')}</span></button>`; }

function filteredProducts() {
  const q=normalize(state.search);
  let list=products.filter(p=>(state.category==='Sve kategorije'||p.category===state.category)&&(!q||normalize(`${p.name} ${p.producer} ${p.sku} ${p.origin}`).includes(q)));
  if(state.sort==='price-low') list=[...list].sort((a,b)=>a.price-b.price);
  if(state.sort==='price-high') list=[...list].sort((a,b)=>b.price-a.price);
  if(state.sort==='stock') list=[...list].sort((a,b)=>b.available-a.available);
  return list;
}

function partnerCatalog() {
  const cats=['Sve kategorije',...new Set(products.map(p=>p.category))], list=filteredProducts();
  return `<main class="page">${pageHeader(state.lang==='en'?'Contracted range':'Ugovoreni asortiman',state.lang==='en'?'Your product catalogue':'Vaš katalog proizvoda',state.lang==='en'?'Prices, quantity discounts and availability are shown for the Regent Porto Montenegro account.':'Cene, količinski rabati i raspoloživo stanje prikazani su za nalog Regent Porto Montenegro.',`<button class="secondary-button" data-action="navigate" data-section="quick">${icon('list')} ${t('quick')}</button><button class="primary-button" data-action="open-cart">${icon('cart')} ${t('cart')} · ${cartCount()}</button>`)}
    ${accountStrip()}
    <div class="toolbar"><label class="search-box">${icon('search')}<input id="catalog-search" value="${esc(state.search)}" placeholder="${t('search')}" aria-label="${t('search')}"/></label><select id="catalog-sort" class="select-control" aria-label="Sort"><option value="featured" ${state.sort==='featured'?'selected':''}>${state.lang==='en'?'Recommended':'Preporučeno'}</option><option value="price-low" ${state.sort==='price-low'?'selected':''}>${state.lang==='en'?'Lowest price':'Najniža cena'}</option><option value="price-high" ${state.sort==='price-high'?'selected':''}>${state.lang==='en'?'Highest price':'Najviša cena'}</option><option value="stock" ${state.sort==='stock'?'selected':''}>${state.lang==='en'?'Availability':'Dostupnost'}</option></select><span class="result-count">${list.length} ${state.lang==='en'?'products':'proizvoda'}</span></div>
    <div class="category-tabs">${cats.map(c=>`<button class="category-tab ${state.category===c?'active':''}" data-action="category" data-category="${esc(c)}">${c==='Sve kategorije'?t('all'):esc(c)}</button>`).join('')}</div>
    <div class="product-grid">${list.length?list.map(productCard).join(''):`<div class="empty-state" style="grid-column:1/-1"><div class="empty-state-icon">${icon('search')}</div><div class="empty-title">${state.lang==='en'?'No matching products':'Nema pronađenih proizvoda'}</div><div class="empty-copy">${state.lang==='en'?'Try another name, producer, SKU or category.':'Pokušajte drugi naziv, proizvođača, šifru ili kategoriju.'}</div></div>`}</div>
  </main>`;
}

function productVisual(p,large=false) {
  if(p.image) return `<img src="${p.image}" alt="${esc(p.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><div class="bottle-placeholder" style="display:none;--ph1:${p.colors?.[0]||'#3b1a22'};--ph2:${p.colors?.[1]||'#b7904b'}" data-label="${esc(p.producer)}"></div>`;
  return `<div class="bottle-placeholder" style="--ph1:${p.colors?.[0]||'#3b1a22'};--ph2:${p.colors?.[1]||'#b7904b'}" data-label="${esc(p.producer)}"></div>`;
}
function tierBadges(p) {
  return `<div class="tier-list" aria-label="${state.lang==='en'?'Quantity discounts':'Količinski rabati'}">${p.volumeTiers.map(tier=>`<span class="tier-pill"><strong>${tier.min}+</strong> −${tier.discount}%</span>`).join('')}</div>`;
}
function productCard(p) {
  const fav=state.favorites.has(p.sku);
  return `<article class="product-card"><div class="product-image" data-action="product" data-sku="${p.sku}">${productVisual(p)}<span class="stock-tag ${stockClass(p)}">${availableLabel(p)} · ${p.available}</span><button class="favorite-button ${fav?'active':''}" data-action="favorite" data-sku="${p.sku}" aria-label="Favorite">${icon('heart')}</button></div><div class="product-body"><div class="product-brand">${esc(p.producer)}</div><div class="product-name" data-action="product" data-sku="${p.sku}">${esc(p.name)}</div><div class="product-meta">${esc(p.category)} · ${esc(p.region)}<br>${esc(p.pack)} · ${esc(p.sku)}</div>${tierBadges(p)}<div class="price-row"><div><div class="price">${money(p.price)}</div><div class="price-unit">${state.lang==='en'?'for one case, excluding VAT':'za jedno pakovanje, bez PDV-a'}</div></div><button class="add-button" data-action="add-cart" data-sku="${p.sku}" ${p.available===0?'disabled':''} aria-label="${t('add')}">${icon('plus')}</button></div></div></article>`;
}

function partnerQuick() {
  const q=normalize(state.quickSearch);
  const quickProducts=products.filter(p=>!q||normalize(`${p.name} ${p.producer} ${p.sku}`).includes(q)).slice(0,14);
  return `<main class="page">${pageHeader(state.lang==='en'?'Fast ordering':'Poručivanje po šifri i količini',t('quick'),state.lang==='en'?'Designed for repeat buyers who already know the products. Enter case quantities for several items and add them to the cart in one step.':'Za kupce koji već poznaju Berba asortiman. Unesite broj pakovanja pored više artikala i dodajte sve u korpu jednim klikom.',`<button class="primary-button" data-action="quick-add">${icon('cart')} ${state.lang==='en'?'Add selected':'Dodaj izabrano'}</button>`)}
    <div class="quick-toolbar"><label class="search-box">${icon('search')}<input id="quick-search" value="${esc(state.quickSearch)}" placeholder="${state.lang==='en'?'Search by product or SKU…':'Pretražite naziv, proizvođača ili šifru…'}" aria-label="${state.lang==='en'?'Search quick order':'Pretraga brze porudžbine'}"></label><span class="quick-hint">${state.lang==='en'?'Quantities are entered in cases. The applicable volume discount is calculated in the cart.':'Količine se unose u pakovanjima. Portal u korpi automatski primenjuje odgovarajući količinski rabat.'}</span></div>
    <div class="quick-layout"><section class="panel"><div class="panel-head"><div><div class="panel-title">${state.lang==='en'?'Order lines':'Artikli za poručivanje'}</div><div class="panel-subtitle">${quickProducts.length} ${state.lang==='en'?'products shown':'artikala prikazano'}</div></div></div><div class="table-wrap"><table class="data-table quick-order-table"><thead><tr><th>${state.lang==='en'?'Product':'Proizvod'}</th><th>SKU</th><th>${state.lang==='en'?'Available':'Raspoloživo'}</th><th>${state.lang==='en'?'Discount tiers':'Količinski rabat'}</th><th>${state.lang==='en'?'Cases':'Pakovanja'}</th></tr></thead><tbody>${quickProducts.map(p=>`<tr><td><div class="mini-product"><div class="mini-placeholder">${esc(p.producer.slice(0,2).toUpperCase())}</div><div><strong>${esc(p.name)}</strong><div class="activity-meta">${esc(p.pack)} · od ${money(p.price)}</div></div></div></td><td class="order-id">${p.sku}</td><td><span class="status ${stockClass(p)==='low'?'review':'active'}">${p.available}</span></td><td>${tierBadges(p)}</td><td><input type="number" class="quick-qty" data-sku="${p.sku}" min="0" max="${p.available}" value="0" aria-label="${esc(p.name)} quantity"></td></tr>`).join('')}</tbody></table></div></section><aside class="panel"><div class="panel-head"><div><div class="panel-title">${state.lang==='en'?'Example':'Primer'}</div></div></div><div class="panel-body"><div class="processing-list">${step(1,state.lang==='en'?'Find the item':'Pronađite artikal',state.lang==='en'?'Search by product name, producer or SKU.':'Pretražite po nazivu, proizvođaču ili šifri.')}${step(2,state.lang==='en'?'Enter case quantities':'Unesite broj pakovanja',state.lang==='en'?'For example, 12 cases can activate a 30% discount.':'Na primer, 12 pakovanja može aktivirati rabat od 30%.')}${step(3,state.lang==='en'?'Review the cart':'Proverite korpu',state.lang==='en'?'The cart shows the applied discount, savings and delivery.':'Korpa prikazuje primenjeni rabat, uštedu i termin isporuke.')}${step(4,state.lang==='en'?'Send the order':'Pošaljite porudžbinu',state.lang==='en'?'The approved order is transferred to Abacus.':'Odobrena porudžbina prenosi se u Abacus.')}</div></div></aside></div></main>`;
}

function step(n,title,copy) { return `<div class="processing-step"><span class="step-number">${n}</span><div><div class="step-title">${title}</div><div class="step-copy">${copy}</div></div></div>`; }

function ordersTable(list,admin=true) {
  return `<div class="table-wrap"><table class="data-table"><thead><tr><th>${state.lang==='en'?'Order':'Porudžbina'}</th>${admin?`<th>${state.lang==='en'?'Customer':'Kupac'}</th>`:''}<th>${state.lang==='en'?'Date':'Datum'}</th><th>${state.lang==='en'?'Items':'Stavke'}</th><th>${state.lang==='en'?'Total':'Ukupno'}</th><th>Status</th></tr></thead><tbody>${list.map(o=>`<tr class="clickable-row" data-action="order" data-order="${o.id}"><td class="order-id">${o.id}</td>${admin?`<td><div class="company-cell"><span class="company-logo">${o.initials}</span>${esc(o.partner)}</div></td>`:''}<td>${o.date}</td><td>${Array.isArray(o.items)?o.items.length:o.items}</td><td class="amount">${money(o.total)}</td><td>${statusBadge(o)}</td></tr>`).join('')}</tbody></table></div>`;
}

function partnerOrdersPage() {
  return `<main class="page">${pageHeader(state.lang==='en'?'Ordering history':'Istorija naručivanja',t('orders'),state.lang==='en'?'Track preparation, delivery and documents returned from Abacus ERP.':'Pratite pripremu, isporuku i dokumente koji se vraćaju iz Abacus ERP-a.',`<button class="primary-button" data-action="navigate" data-section="catalog">${icon('plus')} ${state.lang==='en'?'New order':'Nova porudžbina'}</button>`)}<div class="order-grid">${state.partnerOrders.map(o=>`<article class="order-card" data-action="order" data-order="${o.id}"><div class="order-head"><div><div class="order-id">${o.id}</div><div class="order-date">${o.date} · ${Array.isArray(o.items)?o.items.length:o.items} ${state.lang==='en'?'items':'stavke'}</div></div>${statusBadge(o)}</div><div class="order-progress">${[1,2,3,4].map(n=>`<span class="progress-segment ${n<=o.progress?'done':''}"></span>`).join('')}</div><div class="order-foot"><span>${state.lang==='en'?'Delivery':'Isporuka'}: <strong>${o.eta||'—'}</strong></span><span class="order-total">${money(o.total)}</span></div></article>`).join('')}</div></main>`;
}

function partnerImport() {
  const samples=[
    ['Berba_demo_porudzbenica.xlsx','Excel','samples/Berba_demo_porudzbenica.xlsx'],
    ['Berba_demo_porudzbenica.csv','CSV','samples/Berba_demo_porudzbenica.csv'],
    ['Berba_demo_porudzbenica.xml','XML','samples/Berba_demo_porudzbenica.xml'],
    ['Berba_demo_porudzbenica_foto.png',state.lang==='en'?'Photo':'Fotografija','samples/Berba_demo_porudzbenica_foto.png'],
  ];
  return `<main class="page">${pageHeader(state.lang==='en'?'Document automation':'Automatizacija dokumenata',t('import'),state.lang==='en'?'Upload the purchase order you already use. The portal matches customer, products and quantities before creating an order.':'Učitajte porudžbenicu koju kupac već koristi. Portal prepoznaje kupca, šifre i količine, a zatim prikazuje rezultat pre kreiranja porudžbine.')}
    <div class="document-layout"><section class="panel"><div class="panel-body">${state.uploadResult?uploadResult():`<label class="upload-zone"><input id="po-file" type="file" hidden accept=".pdf,.xlsx,.xls,.csv,.xml,.txt,image/*"><div><div class="upload-icon">${icon('upload')}</div><div class="upload-title">${state.lang==='en'?'Choose a purchase order':'Izaberite porudžbenicu'}</div><div class="upload-copy">${state.lang==='en'?'Upload Excel, CSV, XML, PDF or a photo. Nothing is sent to Abacus before review.':'Učitajte Excel, CSV, XML, PDF ili fotografiju. Pre potvrde ništa se ne šalje u Abacus.'}</div><div class="supported-files">PDF · XLSX · CSV · XML · TXT · JPG/PNG</div></div></label>`}<div class="sample-block"><div><div class="panel-title">${state.lang==='en'?'Demo files':'Probni fajlovi'}</div><div class="panel-subtitle">${state.lang==='en'?'Download a sample or load it directly in the demo.':'Preuzmite primer ili ga odmah učitajte u demo.'}</div></div><div class="sample-grid">${samples.map(([name,type,path])=>`<article class="sample-card"><span class="document-icon">${icon(type==='Fotografija'||type==='Photo'?'wine':'file')}</span><span><strong>${type}</strong><small>${name}</small></span><span class="sample-actions"><a href="${path}" download aria-label="${state.lang==='en'?'Download':'Preuzmi'} ${name}">${icon('download')}</a><button data-action="load-sample" data-name="${name}">${state.lang==='en'?'Load':'Učitaj'}</button></span></article>`).join('')}</div></div></div></section><aside class="panel"><div class="panel-head"><div><div class="panel-title">${state.lang==='en'?'From document to Abacus':'Od dokumenta do Abacusa'}</div></div></div><div class="panel-body"><div class="processing-list">${step(1,state.lang==='en'?'Read the document':'Čitanje dokumenta',state.lang==='en'?'SKU and quantities are extracted.':'Izdvajaju se šifre i količine.')}${step(2,state.lang==='en'?'Match the catalogue':'Uparivanje sa katalogom',state.lang==='en'?'Only approved customer products are accepted.':'Prihvataju se samo artikli dodeljeni tom kupcu.')}${step(3,state.lang==='en'?'Review the result':'Provera rezultata',state.lang==='en'?'Prices, discounts, stock and credit rules are checked.':'Proveravaju se cene, rabati, stanje i kreditna pravila.')}${step(4,state.lang==='en'?'Create the order':'Kreiranje porudžbine',state.lang==='en'?'After approval, the order is transferred to Abacus.':'Nakon odobrenja porudžbina se prenosi u Abacus.')}</div></div></aside></div>
  </main>`;
}

function uploadResult() {
  const picks=[products[0],products[2],products[7]];
  return `<div><div class="button-row" style="justify-content:space-between;margin-bottom:1rem"><div><div class="panel-title">${state.lang==='en'?'Purchase order recognised':'Porudžbenica je prepoznata'}</div><div class="panel-subtitle">${esc(state.uploadResult)} · 3 ${state.lang==='en'?'matched lines':'uparene stavke'}</div></div><span class="status active">${state.lang==='en'?'Ready to review':'Spremno za proveru'}</span></div>${picks.map((p,i)=>`<div class="match-card"><span class="match-check">${icon('check')}</span><div><div class="activity-title">${esc(p.name)}</div><div class="activity-meta">${p.sku} · ${[4,2,3][i]} ${state.lang==='en'?'cases':'pakovanja'} · ${money(unitPriceForQty(p,[4,2,3][i]) * [4,2,3][i])}</div></div><span class="status active">${state.lang==='en'?'Matched':'Upareno'}</span></div>`).join('')}<div class="import-checks"><span>${icon('check')} ${state.lang==='en'?'Customer recognised':'Kupac prepoznat'}: Regent Porto Montenegro</span><span>${icon('check')} ${state.lang==='en'?'Price list applied':'Primenjen cenovnik'}: HORECA-P1</span><span>${icon('check')} ${state.lang==='en'?'Stock available':'Roba raspoloživa'}</span></div><div class="button-row" style="justify-content:flex-end;margin-top:1rem"><button class="secondary-button" data-action="reset-upload">${state.lang==='en'?'Choose another file':'Izaberi drugi fajl'}</button><button class="primary-button" data-action="import-cart">${icon('cart')} ${state.lang==='en'?'Review in cart':'Proveri u korpi'}</button></div></div>`;
}

function partnerDocuments() {
  const docs=[['FA-2609-188','Faktura','22. sep 2026.','581,76 €'],['OT-2609-181','Otpremnica','22. sep 2026.','BER-260921-241'],['FA-2609-147','Faktura','02. sep 2026.','588,60 €'],['IZV-2609','Izvod otvorenih stavki','01. sep 2026.','4.280,00 €'],['CJ-HORECA-P1','Važeći cenovnik','01. sep 2026.','HORECA-P1'],['KAT-2026-Q3','Katalog proizvoda','01. jul 2026.','PDF · 12 MB']];
  return `<main class="page">${pageHeader(state.lang==='en'?'Account files':'Dokumentacija naloga',t('documents'),state.lang==='en'?'Invoices, delivery notes, statements and your current catalogue in one place.':'Fakture, otpremnice, izvodi i važeći katalog na jednom mjestu.')}<div class="document-grid">${docs.map(([id,type,date,meta])=>`<article class="document-card"><span class="document-icon">${icon('file')}</span><div><div class="document-title">${state.lang==='en'?translateDoc(type):type}</div><div class="document-meta">${id} · ${date}<br>${meta}</div></div><button class="icon-button document-action" data-action="download" aria-label="${t('download')}">${icon('download')}</button></article>`).join('')}</div></main>`;
}
function translateDoc(type) { return ({'Faktura':'Invoice','Otpremnica':'Delivery note','Izvod otvorenih stavki':'Open items statement','Važeći cenovnik':'Current price list','Katalog proizvoda':'Product catalogue'})[type]||type; }

function adminAttention() {
  const low=products.find(p=>p.sku==='BER-WIN-0183');
  return `<section class="attention-section"><div class="section-heading"><div><div class="panel-title">${state.lang==='en'?'Requires attention':'Zahteva pažnju'}</div><div class="panel-subtitle">${state.lang==='en'?'Concrete actions for the sales and warehouse teams':'Stavke koje prodaja ili magacin treba da provere'}</div></div><span class="status review">3 ${state.lang==='en'?'open':'otvorene'}</span></div><div class="attention-grid">
    <button class="attention-card critical" data-action="order" data-order="BER-260922-244"><span class="attention-visual initials">CM</span><span><strong>${state.lang==='en'?'Order blocked by credit limit':'Porudžbina blokirana zbog limita'}</strong><small>Casa del Mare · BER-260922-244</small><span>${state.lang==='en'?'Review the €348.12 excess and approve or contact the customer.':'Proverite prekoračenje od 348,12 € i odobrite ili kontaktirajte kupca.'}</span></span><em>${state.lang==='en'?'Review order':'Otvori porudžbinu'} ${icon('chevron')}</em></button>
    <button class="attention-card warning" data-action="document-detail" data-document="1"><span class="attention-visual">${icon('file')}</span><span><strong>${state.lang==='en'?'Uploaded file needs review':'Uvezeni fajl čeka proveru'}</strong><small>Narudzba-Casa-del-Mare.xlsx</small><span>${state.lang==='en'?'Products matched. Credit approval is still required.':'Artikli su upareni, ali kreditna kontrola još nije završena.'}</span></span><em>${state.lang==='en'?'Review file':'Otvori fajl'} ${icon('chevron')}</em></button>
    <button class="attention-card stock" data-action="product" data-sku="${low.sku}"><span class="attention-visual product">${productVisual(low)}</span><span><strong>${state.lang==='en'?'Low available stock':'Niska raspoloživa količina'}</strong><small>${esc(low.name)} · ${low.sku}</small><span>${low.available} ${state.lang==='en'?'cases available after reservations.':'pakovanja raspoloživo nakon rezervacija.'}</span></span><em>${state.lang==='en'?'View product':'Otvori artikal'} ${icon('chevron')}</em></button>
  </div></section>`;
}

function adminDashboard() {
  return `<main class="page">${pageHeader(state.lang==='en'?'Today · 22 September 2026':'Danas · 22. septembar 2026.',state.lang==='en'?'Berba sales overview':'Pregled Berba prodaje',state.lang==='en'?'Orders from retail and HoReCa customers, with operational status from Abacus.':'Porudžbine maloprodajnih i HoReCa kupaca, sa operativnim statusom iz Abacusa.',`<button class="secondary-button" data-action="navigate" data-section="integration">${icon('sync')} Abacus</button><button class="primary-button" data-action="navigate" data-section="orders">${icon('cart')} ${state.lang==='en'?'Review orders':'Pregled porudžbina'}</button>`)}
    <div class="metric-grid">${metric('cart',state.lang==='en'?'Orders today':'Porudžbine danas','27',state.lang==='en'?'<span class="trend-up">+18%</span> vs daily average':'<span class="trend-up">+18%</span> prema dnevnom proseku')}${metric('euro',state.lang==='en'?'Order value':'Vrednost porudžbina',money(18426),state.lang==='en'?'Average order €682':'Prosečna porudžbina 682 €')}${metric('clock',state.lang==='en'?'Awaiting approval':'Čeka odobrenje','3',state.lang==='en'?'<span class="trend-alert">2</span> credit checks':'<span class="trend-alert">2</span> provere kreditnog limita')}${metric('truck',state.lang==='en'?'Today’s deliveries':'Današnje isporuke','19',state.lang==='en'?'<span class="trend-neutral">15</span> dispatched':'<span class="trend-neutral">15</span> na putu')}</div>
    ${adminAttention()}
    <div class="dashboard-grid"><section class="panel"><div class="panel-head"><div><div class="panel-title">${state.lang==='en'?'Latest B2B orders':'Poslednje B2B porudžbine'}</div><div class="panel-subtitle">${state.lang==='en'?'Portal and imported purchase orders':'Portal i uvezene porudžbenice'}</div></div><button class="ghost-button" data-action="navigate" data-section="orders">${state.lang==='en'?'View all':'Prikaži sve'} ${icon('arrow')}</button></div>${ordersTable(state.adminOrders.slice(0,5),true)}</section><div><section class="panel"><div class="panel-head"><div><div class="panel-title">${state.lang==='en'?'Activity':'Aktivnosti'}</div><div class="panel-subtitle">${state.lang==='en'?'Portal and ERP events':'Portal i ERP događaji'}</div></div></div><div class="activity-list">${activity('cart','BER-260922-257',state.lang==='en'?'New order from Regent':'Nova porudžbina od Regenta','2 min')}${activity('sync',state.lang==='en'?'Abacus · confirmed':'Abacus · potvrđeno',state.lang==='en'?'Order transferred successfully':'Porudžbina je uspešno preneta','8 min')}${activity('clock',state.lang==='en'?'Credit review':'Provera limita',state.lang==='en'?'Casa del Mare requires approval':'Casa del Mare zahteva odobrenje','14 min',true)}${activity('truck',state.lang==='en'?'Delivery update':'Ažurirana isporuka','BER-260921-248 · HDL Laković','21 min')}</div></section><section class="panel"><div class="integration-card"><span class="integration-logo">ABA</span><div><div class="integration-title">Abacus ERP · Bencom</div><div class="integration-meta">${state.lang==='en'?'Last sync 4 min ago · 5 entities':'Poslednja sinhronizacija pre 4 min · 5 celina'}</div></div><div class="integration-side"><span class="status active">${state.lang==='en'?'Connected':'Povezano'}</span></div></div></section></div></div>
  </main>`;
}

function metric(ico,label,value,foot) { return `<article class="metric-card"><div class="metric-head"><span>${label}</span><span class="metric-icon">${icon(ico)}</span></div><div class="metric-value">${value}</div><div class="metric-foot">${foot}</div></article>`; }
function activity(ico,title,meta,time,warn=false) { return `<div class="activity-row"><div class="activity-icon ${warn?'warn':''}">${icon(ico)}</div><div><div class="activity-title">${title}</div><div class="activity-meta">${meta}</div></div><div class="activity-time">${time}</div></div>`; }

function adminOrdersPage() {
  return `<main class="page">${pageHeader(state.lang==='en'?'Sales operations':'Prodajne operacije',state.lang==='en'?'B2B orders':'B2B porudžbine',state.lang==='en'?'Review portal orders, credit rules and order status in Abacus.':'Pregledajte portal porudžbine, kreditna pravila i status u Abacusu.',`<button class="secondary-button" data-action="toast">${icon('filter')} ${state.lang==='en'?'Filters':'Filteri'}</button><button class="primary-button" data-action="toast">${icon('plus')} ${state.lang==='en'?'Manual order':'Ručna porudžbina'}</button>`)}<section class="panel"><div class="panel-head"><div><div class="panel-title">${state.lang==='en'?'All orders':'Sve porudžbine'}</div><div class="panel-subtitle">${state.adminOrders.length} ${state.lang==='en'?'shown in the demo':'prikazano u demonstraciji'}</div></div><span class="status active">Abacus online</span></div>${ordersTable(state.adminOrders,true)}</section></main>`;
}

function adminCustomers() {
  return `<main class="page">${pageHeader(state.lang==='en'?'Customer accounts':'Nalozi poslovnih kupaca',t('customers'),state.lang==='en'?'Assigned catalogue, price list, payment terms and credit controls from Abacus.':'Dodeljeni katalog, cenovnik, uslovi plaćanja i kreditne kontrole iz Abacusa.',`<button class="primary-button" data-action="toast">${icon('plus')} ${state.lang==='en'?'Add customer':'Dodaj kupca'}</button>`)}<section class="panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>${state.lang==='en'?'Customer':'Kupac'}</th><th>${state.lang==='en'?'Location':'Lokacija'}</th><th>${state.lang==='en'?'Price list':'Cenovnik'}</th><th>${state.lang==='en'?'Discount':'Rabat'}</th><th>${state.lang==='en'?'Credit usage':'Kreditno zaduženje'}</th><th>${state.lang==='en'?'Terms':'Uslovi'}</th><th>Status</th></tr></thead><tbody>${customers.map((c,i)=>`<tr class="clickable-row" data-action="customer" data-customer="${i}"><td><div class="company-cell"><span class="company-logo">${c.initials}</span><div>${esc(c.name)}<div class="activity-meta">${esc(c.type)}</div></div></div></td><td>${c.city}</td><td class="order-id">${c.price}</td><td>${c.discount}</td><td><strong>${money(c.used)}</strong> / ${money(c.credit)}</td><td>${c.terms}</td><td><span class="status ${c.status}">${c.status==='active'?(state.lang==='en'?'Active':'Aktivan'):(state.lang==='en'?'Blocked':'Blokiran')}</span></td></tr>`).join('')}</tbody></table></div></section></main>`;
}

function adminProducts() {
  const lowCount=products.filter(p=>p.available<12).length;
  const availableUnits=products.reduce((sum,p)=>sum+p.available,0);
  return `<main class="page">${pageHeader(state.lang==='en'?'Range and inventory':'Asortiman i lager',t('products'),state.lang==='en'?'Abacus supplies the product master, physical stock and reservations. The portal shows the quantity that can actually be ordered.':'Abacus daje šifarnik, fizičko stanje i rezervacije. Portal kupcu prikazuje količinu koja zaista može da se poruči.',`<button class="secondary-button" data-action="toast">${icon('download')} ${state.lang==='en'?'Export':'Izvoz'}</button><button class="primary-button" data-action="toast">${icon('plus')} ${state.lang==='en'?'Add product':'Dodaj proizvod'}</button>`)}<div class="inventory-note">${icon('info')}<span><strong>${state.lang==='en'?'What “available” means':'Šta znači „raspoloživo“'}</strong>${state.lang==='en'?' Physical stock in the wholesale warehouse minus quantities already reserved for confirmed deliveries.':' Fizičko stanje u veleprodajnom magacinu umanjeno za količine već rezervisane za potvrđene isporuke.'}</span></div><div class="metric-grid">${metric('box',state.lang==='en'?'Products in demo':'Artikli u demo prikazu',String(products.length),state.lang==='en'?'Selected from the Abacus catalogue':'Odabrani iz Abacus šifarnika')}${metric('wine',state.lang==='en'?'Available cases':'Raspoloživa pakovanja',String(availableUnits),state.lang==='en'?'After current reservations':'Nakon trenutnih rezervacija')}${metric('clock',state.lang==='en'?'Low stock':'Nizak lager',String(lowCount),state.lang==='en'?'Below 12 available cases':'Manje od 12 raspoloživih pakovanja')}${metric('sync',state.lang==='en'?'Last update':'Poslednje osveženje','4 min',state.lang==='en'?'Products, reservations and prices':'Proizvodi, rezervacije i cene')}</div><section class="panel"><div class="panel-head"><div><div class="panel-title">${state.lang==='en'?'Wholesale warehouse':'Veleprodajni magacin'}</div><div class="panel-subtitle">${state.lang==='en'?'Physical stock, reservations and customer availability':'Fizičko stanje, rezervacije i raspoloživost za kupce'}</div></div><span class="status active">Abacus online</span></div><div class="table-wrap"><table class="data-table"><thead><tr><th>${state.lang==='en'?'Product':'Proizvod'}</th><th>SKU</th><th>${state.lang==='en'?'Category':'Kategorija'}</th><th>${state.lang==='en'?'Physical stock':'Fizičko stanje'}</th><th>${state.lang==='en'?'Reserved':'Rezervisano'}</th><th>${state.lang==='en'?'Available':'Raspoloživo'}</th><th>${state.lang==='en'?'Price from':'Cena od'}</th></tr></thead><tbody>${products.map(p=>`<tr class="clickable-row" data-action="product" data-sku="${p.sku}"><td><div class="mini-product"><div class="mini-placeholder">${p.producer.slice(0,2).toUpperCase()}</div><div><strong>${esc(p.name)}</strong><div class="activity-meta">${esc(p.producer)} · ${esc(p.pack)}</div></div></div></td><td class="order-id">${p.sku}</td><td>${p.category}</td><td>${p.stock}</td><td>${p.reserved}</td><td><span class="status ${stockClass(p)==='low'?'review':'active'}">${p.available}</span></td><td class="amount">${money(p.price)}</td></tr>`).join('')}</tbody></table></div></section></main>`;
}

function adminPricing() {
  const groups=[
    {code:'HORECA-P1',name:state.lang==='en'?'Premium hotels and restaurants':'Premium hoteli i restorani',buyers:'Regent · One&Only',terms:'30 dana',rules:'10% · 20% · 30%',status:'active'},
    {code:'HORECA-S1',name:state.lang==='en'?'Independent restaurants and hotels':'Samostalni restorani i hoteli',buyers:'Galion · Casa del Mare',terms:'15 dana',rules:'7% · 12% · 18%',status:'review'},
    {code:'RETAIL-KA',name:state.lang==='en'?'Key retail accounts':'Ključni maloprodajni kupci',buyers:'Voli · HDL Laković',terms:'45 dana',rules:'12% · 20% · 30%',status:'active'},
  ];
  return `<main class="page">${pageHeader(state.lang==='en'?'Commercial rules':'Komercijalni uslovi',state.lang==='en'?'Price lists and discounts':'Cenovnici i rabati',state.lang==='en'?'Customer price lists, quantity discounts and promotion rules applied by the portal.':'Cenovnici kupaca, količinski rabati i promotivna pravila koja portal primenjuje pri poručivanju.',`<button class="primary-button" data-action="toast">${icon('plus')} ${state.lang==='en'?'New rule':'Novo pravilo'}</button>`)}
    <div class="pricing-grid">${groups.map(g=>`<article class="pricing-card"><div class="pricing-head"><span class="pricing-code">${g.code}</span><span class="status ${g.status}">${g.status==='active'?(state.lang==='en'?'Active':'Aktivan'):(state.lang==='en'?'Review':'Provera')}</span></div><h3>${g.name}</h3><p>${g.buyers}</p><div class="pricing-details"><span><small>${state.lang==='en'?'Payment terms':'Rok plaćanja'}</small><strong>${g.terms}</strong></span><span><small>${state.lang==='en'?'Quantity discounts':'Količinski rabati'}</small><strong>${g.rules}</strong></span></div><button class="ghost-button" data-action="toast">${state.lang==='en'?'Edit customer group':'Uredi grupu kupaca'} ${icon('arrow')}</button></article>`).join('')}</div>
    <section class="panel"><div class="panel-head"><div><div class="panel-title">${state.lang==='en'?'Example product rules':'Primeri pravila po proizvodu'}</div><div class="panel-subtitle">${state.lang==='en'?'The portal automatically selects the best applicable discount.':'Portal automatski primenjuje odgovarajući rabat prema količini.'}</div></div></div><div class="rule-list">${products.slice(7,15).map(p=>`<div class="rule-row"><div class="mini-product"><div class="mini-placeholder">${p.producer.slice(0,2).toUpperCase()}</div><div><strong>${esc(p.name)}</strong><div class="activity-meta">${p.sku} · ${p.pack}</div></div></div>${tierBadges(p)}<span class="amount">${money(p.list)} <small>${state.lang==='en'?'list':'kataloška'}</small></span><button class="icon-button" data-action="product" data-sku="${p.sku}" aria-label="${state.lang==='en'?'Open product':'Otvori artikal'}">${icon('chevron')}</button></div>`).join('')}</div></section>
    <div class="rules-note-grid"><article class="info-card panel-body"><span class="metric-icon">${icon('tag')}</span><div><strong>${state.lang==='en'?'Promotions with a date range':'Promocije sa periodom važenja'}</strong><p>${state.lang==='en'?'A promotion can replace the regular tier for selected products and customers.':'Promotivna cena može privremeno zameniti redovan rabat za izabrane artikle i kupce.'}</p></div></article><article class="info-card panel-body"><span class="metric-icon">${icon('check')}</span><div><strong>${state.lang==='en'?'Approval for exceptions':'Odobrenje izuzetaka'}</strong><p>${state.lang==='en'?'Orders outside the agreed limit are held for sales approval instead of being sent to Abacus.':'Porudžbine van dogovorenog limita čekaju odobrenje prodaje i ne šalju se odmah u Abacus.'}</p></div></article></div>
  </main>`;
}

function adminDocuments() {
  return `<main class="page">${pageHeader(state.lang==='en'?'Order automation':'Automatizacija naručivanja',state.lang==='en'?'Incoming documents':'Ulazni dokumenti',state.lang==='en'?'Purchase orders received by upload or email, matched to products and customers.':'Porudžbenice primljene kroz portal ili email, uparene sa proizvodima i kupcima.')}<section class="panel"><div class="table-wrap"><table class="data-table"><thead><tr><th>${state.lang==='en'?'Document':'Dokument'}</th><th>${state.lang==='en'?'Customer':'Kupac'}</th><th>${state.lang==='en'?'Recognised':'Prepoznato'}</th><th>Status</th><th>${state.lang==='en'?'Received':'Primljeno'}</th></tr></thead><tbody>${state.documents.map((doc,i)=>`<tr class="clickable-row" data-action="document-detail" data-document="${i}" aria-label="${state.lang==='en'?'Open document details':'Otvori detalje dokumenta'}"><td><div class="mini-product"><span class="document-icon">${icon('file')}</span><strong>${esc(doc.filename)}</strong></div></td><td>${esc(doc.customer)}</td><td>${doc.lines} ${state.lang==='en'?'items':doc.lines===1?'stavka':'stavki'}</td><td>${documentStatusBadge(doc)}</td><td>${doc.received}</td></tr>`).join('')}</tbody></table></div></section></main>`;
}

function documentStatusMeta(status) {
  return {
    matched:{className:'active',me:'Upareno',en:'Matched'},
    review:{className:'review',me:'Provera kupca',en:'Customer review'},
    sent:{className:'processing',me:'Poslato u Abacus',en:'Sent to Abacus'},
    created:{className:'active',me:'Kreirana porudžbina',en:'Order created'},
  }[status] || {className:'draft',me:'U obradi',en:'Processing'};
}

function documentStatusBadge(doc) {
  const meta=documentStatusMeta(doc.status);
  return `<span class="status ${meta.className}">${state.lang==='en'?meta.en:meta.me}</span>`;
}

function adminIntegration() {
  const syncItems=[
    ['Asortiman i proizvodi','Assortment & products',state.lang==='en'?'Names, codes, packaging and product data':'Nazivi, šifre, pakovanja i podaci o proizvodima'],
    ['Cene i rabati','Prices & discounts',state.lang==='en'?'Contracted terms for each customer':'Ugovoreni uslovi za svakog kupca'],
    ['Stanje zaliha','Stock levels',state.lang==='en'?'Current availability before ordering':'Aktuelna raspoloživost pre poručivanja'],
    ['Poslovni kupci','Business customers',state.lang==='en'?'Customer accounts and agreed terms':'Nalozi kupaca i dogovoreni uslovi'],
    ['Porudžbine','Orders',state.lang==='en'?'Automatic transfer into Abacus':'Automatski prenos u Abacus'],
    ['Finansijsko stanje','Financial status',state.lang==='en'?'Balance and open-item checks when needed':'Provera salda i otvorenih stavki po potrebi'],
  ];
  const benefits=[
    [state.lang==='en'?'Fewer stock-check calls':'Manje poziva za proveru lagera',state.lang==='en'?'Customers see current availability before placing an order.':'Kupac vidi raspoloživost pre slanja porudžbine.'],
    [state.lang==='en'?'No manual price-list sharing':'Bez ručnog slanja cenovnika',state.lang==='en'?'Each customer sees their own prices and discounts after login.':'Svaki kupac nakon prijave vidi svoje cene i rabate.'],
    [state.lang==='en'?'No order re-entry':'Nema prekucavanja porudžbina',state.lang==='en'?'Submitted orders are transferred directly into Abacus.':'Poslate porudžbine se direktno prenose u Abacus.'],
    [state.lang==='en'?'Faster processing, fewer errors':'Brža obrada, manje grešaka',state.lang==='en'?'Sales works with ready, structured orders.':'Prodaja radi sa spremnim i urednim porudžbinama.'],
    [state.lang==='en'?'Berba remains in control':'Berba zadržava kontrolu',state.lang==='en'?'The team reviews fulfilment and issues the invoice in its existing system.':'Tim proverava realizaciju i izdaje račun u postojećem sistemu.'],
  ];
  return `<main class="page">${pageHeader(state.lang==='en'?'SYSTEM CONNECTION':'POVEZIVANJE SISTEMA',state.lang==='en'?'B2B portal connected to Abacus':'B2B portal povezan sa Abacusom',state.lang==='en'?'Abacus remains the central system, while B2Bware shows customers their terms and automatically transfers orders.':'Abacus ostaje centralni sistem, dok B2Bware kupcima prikazuje njihove uslove i automatski prenosi porudžbine.',`<button class="secondary-button" data-action="integration-details">${icon('file')} ${state.lang==='en'?'What is automated':'Šta se automatizuje'}</button>`)}<div class="api-confirmed-banner"><span class="api-confirmed-icon">${icon('check')}</span><div><strong>${state.lang==='en'?'Connection confirmed':'Povezivanje potvrđeno'}</strong><span>${state.lang==='en'?'Bencom confirmed that Abacus can exchange all key data with the B2Bware platform.':'Bencom je potvrdio da Abacus može da razmenjuje sve ključne podatke sa B2Bware platformom.'}</span></div><span class="status active">${state.lang==='en'?'Ready for the project':'Spremno za projekat'}</span></div><div class="api-summary-grid"><div class="api-summary-card"><span class="api-summary-icon">${icon('tag')}</span><div><strong>${state.lang==='en'?'Accurate prices for every customer':'Tačne cene za svakog kupca'}</strong><span>${state.lang==='en'?'Contracted price lists and discounts are taken from Abacus.':'Ugovoreni cenovnici i rabati preuzimaju se iz Abacusa.'}</span></div></div><div class="api-summary-card"><span class="api-summary-icon">${icon('box')}</span><div><strong>${state.lang==='en'?'Current stock levels':'Aktuelno stanje lagera'}</strong><span>${state.lang==='en'?'Customers see availability before placing an order.':'Kupac vidi raspoloživost pre nego što poruči.'}</span></div></div><div class="api-summary-card"><span class="api-summary-icon">${icon('cart')}</span><div><strong>${state.lang==='en'?'Orders without re-entry':'Porudžbine bez prekucavanja'}</strong><span>${state.lang==='en'?'Confirmed orders are automatically transferred into Abacus.':'Potvrđene porudžbine automatski se prenose u Abacus.'}</span></div></div><div class="api-summary-card"><span class="api-summary-icon">${icon('building')}</span><div><strong>${state.lang==='en'?'Berba remains in control':'Kontrola ostaje kod Berbe'}</strong><span>${state.lang==='en'?'Review, fulfilment and invoicing stay in the existing system.':'Provera, realizacija i izdavanje računa ostaju u postojećem sistemu.'}</span></div></div></div><section class="panel"><div class="panel-head"><div><div class="panel-title">${state.lang==='en'?'How it works in practice':'Kako funkcioniše u praksi'}</div><div class="panel-subtitle">${state.lang==='en'?'A simple path from accurate data to a ready order in Abacus.':'Jednostavan put od tačnih podataka do spremne porudžbine u Abacusu.'}</div></div></div><div class="panel-body"><div class="business-flow-grid"><div class="business-step"><span class="business-step-number">1</span><span class="business-step-icon">${icon('building')}</span><strong>${state.lang==='en'?'Abacus supplies the data':'Abacus daje podatke'}</strong><span>${state.lang==='en'?'Assortment, customer prices, discounts and stock.':'Asortiman, cene kupca, rabati i stanje zaliha.'}</span></div><div class="business-step"><span class="business-step-number">2</span><span class="business-step-icon">${icon('wine')}</span><strong>${state.lang==='en'?'The customer sees their terms':'Kupac vidi svoje uslove'}</strong><span>${state.lang==='en'?'After login, each customer gets their own catalogue and prices.':'Nakon prijave svaki kupac dobija svoj katalog i cene.'}</span></div><div class="business-step"><span class="business-step-number">3</span><span class="business-step-icon">${icon('cart')}</span><strong>${state.lang==='en'?'The customer places an order':'Kupac šalje porudžbinu'}</strong><span>${state.lang==='en'?'The order is created online without calls or spreadsheets.':'Porudžbina nastaje onlajn, bez poziva i tabela.'}</span></div><div class="business-step"><span class="business-step-number">4</span><span class="business-step-icon">${icon('check')}</span><strong>${state.lang==='en'?'Berba completes the process':'Berba završava proces'}</strong><span>${state.lang==='en'?'The order arrives in Abacus for review, fulfilment and invoicing.':'Porudžbina stiže u Abacus na proveru, realizaciju i fakturisanje.'}</span></div></div></div></section><div class="integration-review-grid"><section class="panel"><div class="panel-head"><div><div class="panel-title">${state.lang==='en'?'Data kept in sync automatically':'Podaci koji se automatski usklađuju'}</div><div class="panel-subtitle">${state.lang==='en'?'One source of truth for the portal and the sales team':'Jedan izvor tačnih podataka za portal i prodaju'}</div></div></div><div class="api-map-list">${syncItems.map(([me,en,copy])=>`<div class="api-map-row"><div><strong>${state.lang==='en'?en:me}</strong><span>${copy}</span></div><span class="status active">${state.lang==='en'?'Connected':'Povezano'}</span></div>`).join('')}</div></section><section class="panel"><div class="panel-head"><div><div class="panel-title">${state.lang==='en'?'What Berba gains':'Šta Berba dobija'}</div><div class="panel-subtitle">${state.lang==='en'?'Less administration and a faster path to fulfilment':'Manje administracije i brži put do realizacije'}</div></div></div><div class="api-question-list benefit-list">${benefits.map(([title,copy])=>`<div class="api-question"><span class="api-question-icon">${icon('check')}</span><div><strong>${title}</strong><span>${copy}</span></div></div>`).join('')}<div class="implementation-note">${icon('info')}<span>${state.lang==='en'?'Approval rules, refresh frequency and product content are agreed during implementation.':'Pravila odobravanja, učestalost osvežavanja i prikaz sadržaja dogovaraju se tokom implementacije.'}</span></div></div></section></div></main>`;
}
function translateEntity(name){return ({'Proizvodi':'Products','Stanje zaliha':'Stock levels','Kupci i status':'Customers & status','Cene i rabati':'Prices & discounts','Porudžbine':'Orders'})[name]||name;}

function showIntegrationDetails() {
  const stages=[
    [state.lang==='en'?'Before the order':'Pre porudžbine',state.lang==='en'?'The portal receives the assortment, customer-specific prices, discounts and current stock from Abacus.':'Portal iz Abacusa preuzima asortiman, cene i rabate kupca, kao i aktuelno stanje lagera.'],
    [state.lang==='en'?'While ordering':'Tokom poručivanja',state.lang==='en'?'The customer sees only their agreed terms, creates a cart and sends a complete order online.':'Kupac vidi samo svoje dogovorene uslove, formira korpu i šalje kompletnu porudžbinu onlajn.'],
    [state.lang==='en'?'After the order':'Posle porudžbine',state.lang==='en'?'The order is transferred into Abacus, where Berba reviews fulfilment and issues the invoice.':'Porudžbina se prenosi u Abacus, gde Berba proverava realizaciju i izdaje račun.'],
  ];
  modalRoot.innerHTML=`<div class="modal-overlay" data-action="close-modal"><article class="modal wide" role="dialog" aria-modal="true" aria-label="${state.lang==='en'?'Automated order flow':'Automatizovan tok porudžbine'}" onclick="event.stopPropagation()"><div class="modal-head"><div><div class="modal-title">${state.lang==='en'?'Automated flow from customer to Abacus':'Automatizovan tok od kupca do Abacusa'}</div><div class="panel-subtitle">${state.lang==='en'?'Abacus remains the central system; B2Bware is the digital channel for customers.':'Abacus ostaje centralni sistem; B2Bware je digitalni kanal za kupce.'}</div></div><button class="icon-button" data-action="close-modal" aria-label="${state.lang==='en'?'Close':'Zatvori'}">${icon('close')}</button></div><div class="modal-body"><div class="api-modal-intro"><span class="api-confirmed-icon">${icon('check')}</span><div><strong>${state.lang==='en'?'The complete business flow is supported':'Kompletan poslovni tok je podržan'}</strong><span>${state.lang==='en'?'Products, customers, prices, stock and orders can be exchanged between the two systems.':'Proizvodi, kupci, cene, zalihe i porudžbine mogu da se usklađuju između dva sistema.'}</span></div></div><div class="automation-stage-grid">${stages.map(([title,copy],index)=>`<section class="automation-stage"><span class="business-step-number">${index+1}</span><div class="panel-title">${title}</div><p>${copy}</p></section>`).join('')}</div><div class="api-modal-notes"><div class="api-note good">${icon('check')}<span><strong>${state.lang==='en'?'Result':'Rezultat'}:</strong> ${state.lang==='en'?'less manual work, fewer errors and faster order processing.':'manje ručnog rada, manje grešaka i brža obrada porudžbina.'}</span></div><div class="api-note review">${icon('info')}<span><strong>${state.lang==='en'?'Control':'Kontrola'}:</strong> ${state.lang==='en'?'Berba keeps the final review, fulfilment and invoicing in Abacus.':'Berba zadržava završnu proveru, realizaciju i izdavanje računa u Abacusu.'}</span></div></div></div><div class="modal-foot"><button class="primary-button" data-action="close-modal">${state.lang==='en'?'Done':'U redu'}</button></div></article></div>`;
  document.body.classList.add('no-scroll');
}

function openNotifications() {
  const unread=unreadCount();
  modalRoot.innerHTML=`<div class="drawer-overlay" data-action="close-modal"></div><aside class="notification-drawer" aria-label="${state.lang==='en'?'Notifications':'Obaveštenja'}"><div class="drawer-head"><div><div class="drawer-title">${state.lang==='en'?'Notifications':'Obaveštenja'}</div><div class="panel-subtitle">${unread?`${unread} ${state.lang==='en'?'unread':'nepročitana'}`:(state.lang==='en'?'Everything is up to date':'Sve je pregledano')}</div></div><button class="icon-button" data-action="close-modal" aria-label="${state.lang==='en'?'Close notifications':'Zatvori obaveštenja'}">${icon('close')}</button></div><div class="notification-toolbar"><span>${state.lang==='en'?'Latest activity':'Poslednje aktivnosti'}</span><button class="notification-read-all" data-action="mark-all-notifications" ${unread?'':'disabled'}>${state.lang==='en'?'Mark all as read':'Označi sve kao pročitano'}</button></div><div class="drawer-body notification-list">${state.notifications.map(n=>`<button class="notification-item ${n.read?'':'unread'}" data-action="notification-detail" data-notification="${n.id}"><span class="notification-icon">${icon(n.icon)}</span><span class="notification-content"><span class="notification-title">${esc(state.lang==='en'?n.titleEN:n.titleME)}</span><span class="notification-copy">${esc(state.lang==='en'?n.copyEN:n.copyME)}</span></span><span class="notification-side"><span class="notification-time">${n.time}</span>${n.read?'':'<span class="notification-dot" aria-label="Unread"></span>'}</span></button>`).join('')}</div><div class="drawer-foot notification-foot"><span class="sync-dot"></span><span>${state.lang==='en'?'Live updates from the portal and Abacus ERP':'Ažuriranja sa portala i iz Abacus ERP-a'}</span></div></aside>`;
  document.body.classList.add('no-scroll');
}

function showDocument(index) {
  const doc=state.documents[index]; if(!doc)return;
  const shownLines=doc.items.map(([sku,qty])=>({p:products.find(p=>p.sku===sku),qty})).filter(line=>line.p);
  const more=Math.max(0,doc.lines-shownLines.length);
  const stepThree=doc.status==='review'
    ? [state.lang==='en'?'Customer credit check':'Provera kreditnog limita',state.lang==='en'?'Ordering is paused until approval':'Poručivanje je zaustavljeno do odobrenja']
    : [state.lang==='en'?'Customer and products matched':'Kupac i proizvodi upareni',`${doc.confidence} ${state.lang==='en'?'recognition confidence':'pouzdanost prepoznavanja'}`];
  const footerAction=doc.status==='matched'
    ? `<button class="primary-button" data-action="create-document-order" data-document="${index}">${icon('check')} ${state.lang==='en'?'Create order in Abacus':'Kreiraj porudžbinu u Abacusu'}</button>`
    : doc.status==='review'
      ? `<button class="primary-button" data-action="document-customer" data-customer="${doc.customerIndex}">${icon('users')} ${state.lang==='en'?'Review customer':'Pregledaj kupca'}</button>`
      : `<button class="primary-button" data-action="order" data-order="${doc.orderId}">${icon('cart')} ${state.lang==='en'?'Open linked order':'Otvori povezanu porudžbinu'}</button>`;
  modalRoot.innerHTML=`<div class="modal-overlay" data-action="close-modal"><article class="modal wide" role="dialog" aria-modal="true" aria-label="${state.lang==='en'?'Document processing details':'Detalji obrade dokumenta'}" onclick="event.stopPropagation()"><div class="modal-head"><div><div class="modal-title">${esc(doc.filename)}</div><div class="panel-subtitle">${esc(doc.customer)} · ${doc.reference}</div></div><div class="modal-head-actions">${documentStatusBadge(doc)}<button class="icon-button" data-action="close-modal" aria-label="${state.lang==='en'?'Close':'Zatvori'}">${icon('close')}</button></div></div><div class="modal-body"><div class="document-summary"><div class="document-summary-item"><span>${state.lang==='en'?'Received':'Primljeno'}</span><strong>${doc.receivedAt}</strong></div><div class="document-summary-item"><span>${state.lang==='en'?'Source':'Izvor'}</span><strong>${esc(doc.source)}</strong></div><div class="document-summary-item"><span>${state.lang==='en'?'Recognised':'Prepoznato'}</span><strong>${doc.lines} ${state.lang==='en'?'items':'stavki'}</strong></div><div class="document-summary-item"><span>${state.lang==='en'?'Confidence':'Pouzdanost'}</span><strong>${doc.confidence}</strong></div></div><div class="document-modal-grid"><section><div class="section-heading"><div><div class="panel-title">${state.lang==='en'?'Recognised order lines':'Prepoznate stavke porudžbine'}</div><div class="panel-subtitle">${state.lang==='en'?'Matched against the Abacus product master':'Upareno sa šifarnikom proizvoda iz Abacusa'}</div></div><span class="status active">${state.lang==='en'?'Matched':'Upareno'}</span></div><div class="recognized-list">${shownLines.map(({p,qty})=>`<div class="recognized-row"><span class="match-check">${icon('check')}</span><span><strong>${esc(p.name)}</strong><span class="recognized-meta">${p.sku} · ${esc(p.pack)}</span></span><span class="recognized-qty">${qty} ×</span><strong class="recognized-price">${money(unitPriceForQty(p,qty)*qty)}</strong></div>`).join('')}${more?`<div class="recognized-more">+ ${more} ${state.lang==='en'?'additional recognised items':'dodatnih prepoznatih stavki'}</div>`:''}</div><div class="document-total"><span>${state.lang==='en'?'Document value':'Vrednost dokumenta'}</span><strong>${money(doc.total)}</strong></div></section><aside class="document-progress"><div class="panel-title">${state.lang==='en'?'Processing status':'Status obrade'}</div><div class="timeline">${timeline(1,state.lang==='en'?'Document received':'Dokument primljen',doc.receivedAt,doc.progress)}${timeline(2,state.lang==='en'?'Lines recognised':'Stavke prepoznate',`${doc.lines} ${state.lang==='en'?'lines extracted':'stavki izdvojeno'} · ${doc.confidence}`,doc.progress)}${timeline(3,stepThree[0],stepThree[1],doc.progress)}${timeline(4,state.lang==='en'?'Order created':'Porudžbina kreirana',doc.orderId?`${doc.orderId}${doc.erpId?' · '+doc.erpId:''}`:(state.lang==='en'?'Waiting for confirmation':'Čeka potvrdu'),doc.progress)}</div>${doc.status==='review'?`<div class="document-alert"><strong>${state.lang==='en'?'Credit control':'Kreditna kontrola'}</strong><span>${state.lang==='en'?'Casa del Mare has €140.00 available. Approval is required before sending the order to Abacus.':'Casa del Mare ima 140,00 € raspoloživo. Potrebno je odobrenje pre slanja porudžbine u Abacus.'}</span></div>`:''}</aside></div></div><div class="modal-foot"><button class="secondary-button" data-action="close-modal">${state.lang==='en'?'Close':'Zatvori'}</button>${footerAction}</div></article></div>`;
  document.body.classList.add('no-scroll');
}

function openCart() {
  const entries=[...state.cart.entries()];
  const savings=Math.max(0,cartListTotal()-cartTotal());
  modalRoot.innerHTML=`<div class="drawer-overlay" data-action="close-modal"></div><aside class="cart-drawer" aria-label="${t('cart')}"><div class="drawer-head"><div><div class="drawer-title">${t('cart')}</div><div class="panel-subtitle">${cartCount()} ${state.lang==='en'?'cases selected':'izabranih pakovanja'}</div></div><button class="icon-button" data-action="close-modal">${icon('close')}</button></div><div class="drawer-body">${entries.length?entries.map(([sku,q])=>cartItem(products.find(p=>p.sku===sku),q)).join(''):`<div class="empty-state"><div class="empty-state-icon">${icon('cart')}</div><div class="empty-title">${t('emptyCart')}</div><div class="empty-copy">${t('emptyCartCopy')}</div></div>`}</div><div class="drawer-foot"><div class="summary-list"><div class="summary-row"><span>${state.lang==='en'?'List value':'Kataloška vrednost'}</span><span><s>${money(cartListTotal())}</s></span></div><div class="summary-row savings"><span>${state.lang==='en'?'Discount saving':'Ušteda kroz rabate'}</span><strong>−${money(savings)}</strong></div><div class="summary-row"><span>${state.lang==='en'?'Net value':'Neto vrednost'}</span><strong>${money(cartTotal())}</strong></div><div class="summary-row"><span>PDV 21%</span><strong>${money(cartTotal()*.21)}</strong></div><div class="summary-row total"><span>${state.lang==='en'?'Total':'Ukupno'}</span><strong>${money(cartTotal()*1.21)}</strong></div></div><div class="button-row" style="margin-top:1rem"><button class="secondary-button" data-action="close-modal">${t('continueShopping')}</button><button class="primary-button" data-action="checkout" ${entries.length?'':'disabled'}>${t('placeOrder')} ${icon('arrow')}</button></div></div></aside>`;
  document.body.classList.add('no-scroll');
}
function cartItem(p,q) { const tier=tierForQty(p,q),unit=unitPriceForQty(p,q); return `<div class="cart-item">${p.image?`<img class="cart-item-image" src="${p.image}" alt="">`:`<div class="cart-item-image" style="display:grid;place-items:center;color:var(--wine-700)">${icon('wine')}</div>`}<div><div class="cart-item-name">${esc(p.name)}</div><div class="cart-item-meta">${p.sku} · ${esc(p.pack)}</div><span class="applied-tier">−${tier.discount}% · ${money(unit)} ${state.lang==='en'?'per case':'po pakovanju'}</span><div class="qty-control"><button class="qty-button" data-action="cart-qty" data-sku="${p.sku}" data-delta="-1">−</button><span class="qty-value">${q}</span><button class="qty-button" data-action="cart-qty" data-sku="${p.sku}" data-delta="1">+</button></div></div><div class="cart-item-price">${money(unit*q)}</div></div>`; }

function showProduct(sku) {
  const p=products.find(x=>x.sku===sku); if(!p)return;
  modalRoot.innerHTML=`<div class="modal-overlay" data-action="close-modal"><article class="modal wide" role="dialog" aria-modal="true" onclick="event.stopPropagation()"><div class="modal-head"><div class="modal-title">${state.lang==='en'?'Product details':'Detalji proizvoda'}</div><button class="icon-button" data-action="close-modal">${icon('close')}</button></div><div class="modal-body"><div class="product-modal-grid"><div class="product-modal-image">${productVisual(p,true)}</div><div><div class="detail-overline">${esc(p.producer)} · ${esc(p.category)}</div><h2 class="detail-title">${esc(p.name)}</h2><p class="detail-copy">${esc(p.desc)}</p><div class="detail-list"><div class="detail-row"><span>SKU</span><strong>${p.sku}</strong></div><div class="detail-row"><span>${state.lang==='en'?'Origin / region':'Poreklo / regija'}</span><strong>${p.origin} · ${p.region}</strong></div><div class="detail-row"><span>${state.lang==='en'?'Pack size':'Pakovanje'}</span><strong>${p.pack}</strong></div><div class="detail-row"><span>${state.lang==='en'?'Availability':'Raspoloživo'}</span><strong class="${p.available<12?'trend-alert':'trend-up'}">${p.available} ${state.lang==='en'?'cases':'pakovanja'}</strong></div><div class="detail-row"><span>${state.lang==='en'?'List price':'Kataloška cena'}</span><strong>${money(p.list)}</strong></div></div><div class="volume-box"><span>${state.lang==='en'?'Price by ordered quantity':'Cena prema poručenoj količini'}</span>${p.volumeTiers.map(tier=>`<div><strong>${tier.min}+ ${state.lang==='en'?'cases':'pakovanja'}</strong><span>−${tier.discount}%</span><b>${money(p.list*(1-tier.discount/100))}</b></div>`).join('')}</div><div class="button-row"><button class="primary-button" data-action="add-cart" data-sku="${p.sku}" ${p.available===0?'disabled':''}>${icon('cart')} ${t('add')}</button><button class="secondary-button" data-action="favorite" data-sku="${p.sku}">${icon('heart')} ${state.lang==='en'?'Save product':'Sačuvaj proizvod'}</button></div></div></div></div></article></div>`;
  document.body.classList.add('no-scroll');
}

function findOrder(id) { return state.partnerOrders.find(o=>o.id===id)||state.adminOrders.find(o=>o.id===id); }
function showOrder(id) {
  const o=findOrder(id); if(!o)return; const isAdmin=!!o.partner;
  const lines=isAdmin?products.slice(0,Math.min(o.items,5)).map((p,i)=>({p,q:[2,4,1,3,2][i]})):(o.items||[]).map((sku,i)=>({p:products.find(p=>p.sku===sku),q:o.quantities[i]}));
  const erpMeta=o.erpId||(o.progress>=2?(state.lang==='en'?'Confirmed in Abacus':'Potvrđeno u Abacusu'):(state.lang==='en'?'Awaiting approval':'Čeka odobrenje'));
  const blocked=o.status==='blocked';
  modalRoot.innerHTML=`<div class="modal-overlay" data-action="close-modal"><article class="modal wide" role="dialog" aria-modal="true" onclick="event.stopPropagation()"><div class="modal-head"><div><div class="modal-title">${o.id}</div><div class="panel-subtitle">${isAdmin?esc(o.partner):'Regent Porto Montenegro'} · ${o.date}</div></div>${statusBadge(o)}<button class="icon-button" data-action="close-modal">${icon('close')}</button></div><div class="modal-body">${blocked?`<div class="blocked-banner">${icon('info')}<div><strong>${state.lang==='en'?'Order has not been sent to Abacus':'Porudžbina nije poslata u Abacus'}</strong><span>${esc(o.reason||'Potrebno je odobrenje Berba prodaje pre dalje obrade.')}</span></div></div>`:''}<div class="field-grid"><div><div class="panel-title">${state.lang==='en'?'Order items':'Stavke porudžbine'}</div><div class="detail-list">${lines.map(({p,q})=>`<div class="detail-row"><span>${esc(p?.name||'Product')} · ${q} ×</span><strong>${money(p?unitPriceForQty(p,q)*q:0)}</strong></div>`).join('')}<div class="detail-row"><span>${state.lang==='en'?'Order total':'Ukupna vrednost'}</span><strong>${money(o.total)}</strong></div></div></div><div><div class="panel-title">${state.lang==='en'?'Order status':'Status porudžbine'}</div><div class="timeline">${timeline(1,state.lang==='en'?'Order received':'Porudžbina primljena',o.date,o.progress)}${timeline(2,blocked?(state.lang==='en'?'Credit approval':'Kreditno odobrenje'):(state.lang==='en'?'Recorded in Abacus':'Evidentirano u Abacusu'),blocked?(state.lang==='en'?'Required before transfer':'Potrebno pre prenosa'):erpMeta,o.progress)}${timeline(3,state.lang==='en'?'Prepared for delivery':'Spremno za isporuku',o.eta||(state.lang==='en'?'Planned':'Planirano'),o.progress)}${timeline(4,state.lang==='en'?'Delivered / invoiced':'Isporučeno / fakturisano',o.invoice||'—',o.progress)}</div></div></div></div><div class="modal-foot"><button class="secondary-button" data-action="close-modal">${state.lang==='en'?'Close':'Zatvori'}</button>${!isAdmin?`<button class="primary-button" data-action="reorder" data-order="${o.id}">${icon('sync')} ${t('reorder')}</button>`:(o.status==='review'||o.status==='blocked')?`<button class="primary-button" data-action="approve-order" data-order="${o.id}">${icon('check')} ${state.lang==='en'?'Approve and send':'Odobri i pošalji'}</button>`:''}</div></article></div>`;
  document.body.classList.add('no-scroll');
}
function timeline(n,title,meta,progress) { return `<div class="timeline-row ${n<=progress?'done':''}"><span class="timeline-dot"></span><div class="timeline-title">${title}</div><div class="timeline-meta">${meta}</div></div>`; }

function showCustomer(index) {
  const c=customers[index]; if(!c)return;
  modalRoot.innerHTML=`<div class="modal-overlay" data-action="close-modal"><article class="modal" onclick="event.stopPropagation()"><div class="modal-head"><div><div class="modal-title">${esc(c.name)}</div><div class="panel-subtitle">${c.type} · ${c.city}</div></div><button class="icon-button" data-action="close-modal">${icon('close')}</button></div><div class="modal-body">${c.status==='blocked'?`<div class="blocked-banner">${icon('info')}<div><strong>${state.lang==='en'?'Ordering is blocked':'Poručivanje je blokirano'}</strong><span>${state.lang==='en'?'The customer has €140.00 available. New orders require sales approval.':'Kupac ima 140,00 € raspoloživog kredita. Nove porudžbine zahtevaju odobrenje prodaje.'}</span></div></div>`:''}<div class="metric-grid" style="grid-template-columns:1fr 1fr"><div class="info-card panel-body"><div class="account-label">${state.lang==='en'?'Credit limit':'Kreditni limit'}</div><div class="metric-value">${money(c.credit)}</div></div><div class="info-card panel-body"><div class="account-label">${state.lang==='en'?'Available':'Raspoloživo'}</div><div class="metric-value">${money(c.credit-c.used)}</div></div></div><div class="detail-list"><div class="detail-row"><span>${state.lang==='en'?'Price list':'Cenovnik'}</span><strong>${c.price}</strong></div><div class="detail-row"><span>${state.lang==='en'?'Contract discounts':'Ugovoreni rabati'}</span><strong>${c.discount}</strong></div><div class="detail-row"><span>${state.lang==='en'?'Payment terms':'Rok plaćanja'}</span><strong>${c.terms}</strong></div><div class="detail-row"><span>${state.lang==='en'?'Abacus status':'Abacus status'}</span><strong>${c.status==='active'?'Dozvoljeno poručivanje':'Blokirano poručivanje'}</strong></div></div></div><div class="modal-foot"><button class="secondary-button" data-action="close-modal">${state.lang==='en'?'Close':'Zatvori'}</button><button class="primary-button" data-action="toast">${state.lang==='en'?'Edit customer rules':'Uredi pravila kupca'}</button></div></article></div>`;
  document.body.classList.add('no-scroll');
}

function showCheckout() {
  modalRoot.innerHTML=`<div class="modal-overlay" data-action="close-modal"><article class="modal" onclick="event.stopPropagation()"><div class="modal-head"><div><div class="modal-title">${state.lang==='en'?'Confirm order':'Potvrda porudžbine'}</div><div class="panel-subtitle">Regent Porto Montenegro · ${cartCount()} ${state.lang==='en'?'cases':'pakovanja'}</div></div><button class="icon-button" data-action="close-modal">${icon('close')}</button></div><div class="modal-body"><div class="form-stack"><div class="field-grid"><label class="field-group"><span class="field-label">${state.lang==='en'?'Delivery location':'Mesto isporuke'}</span><select class="select-control"><option>Hotel Regent · Obala BB, Tivat</option><option>Regent Pool Club · Porto Montenegro</option></select></label><label class="field-group"><span class="field-label">${state.lang==='en'?'Requested delivery':'Željena isporuka'}</span><select class="select-control"><option>${state.lang==='en'?'Tomorrow · 08:00–12:00':'Sutra · 08:00–12:00'}</option><option>${state.lang==='en'?'Tomorrow · 12:00–16:00':'Sutra · 12:00–16:00'}</option></select></label></div><label class="field-group"><span class="field-label">${state.lang==='en'?'Purchase order reference':'Referenca kupca'}</span><input class="text-control" value="REG-FB-0910"/></label><label class="field-group"><span class="field-label">${state.lang==='en'?'Order note':'Napomena uz porudžbinu'}</span><textarea class="textarea-control" placeholder="${state.lang==='en'?'Optional delivery instruction…':'Opciono uputstvo za isporuku…'}"></textarea></label><div class="assumption-banner" style="margin:0"><strong>${state.lang==='en'?'Credit check passed.':'Kreditna provera je uspešna.'}</strong> ${state.lang==='en'?'Available after this order:':'Raspoloživo nakon porudžbine:'} ${money(10720-cartTotal()*1.21)}.</div><div class="summary-list"><div class="summary-row"><span>${state.lang==='en'?'Net value':'Neto vrednost'}</span><strong>${money(cartTotal())}</strong></div><div class="summary-row"><span>PDV 21%</span><strong>${money(cartTotal()*.21)}</strong></div><div class="summary-row total"><span>${state.lang==='en'?'Total':'Ukupno'}</span><strong>${money(cartTotal()*1.21)}</strong></div></div></div></div><div class="modal-foot"><button class="secondary-button" data-action="open-cart">${state.lang==='en'?'Back to cart':'Nazad na korpu'}</button><button class="primary-button" data-action="place-order">${icon('check')} ${t('placeOrder')}</button></div></article></div>`;
}

function closeModal() { modalRoot.innerHTML=''; document.body.classList.remove('no-scroll'); }
function toast(message) { const el=document.createElement('div'); el.className='toast'; el.innerHTML=`${icon('check')}<span>${message}</span>`; toastRoot.appendChild(el); setTimeout(()=>el.remove(),3100); }
function refreshPage() { if(!state.authenticated)renderLogin(); else renderShell(); }

app.addEventListener('input',e=>{
  if(e.target.id==='catalog-search'){ state.search=e.target.value; const pos=e.target.selectionStart; renderShell(); const input=document.querySelector('#catalog-search'); input?.focus(); input?.setSelectionRange(pos,pos); }
  if(e.target.id==='quick-search'){ state.quickSearch=e.target.value; const pos=e.target.selectionStart; renderShell(); const input=document.querySelector('#quick-search'); input?.focus(); input?.setSelectionRange(pos,pos); }
});
app.addEventListener('change',e=>{
  if(e.target.id==='catalog-sort'){ state.sort=e.target.value; renderShell(); }
  if(e.target.id==='po-file'&&e.target.files?.[0]){ state.uploadResult=e.target.files[0].name; renderShell(); toast(state.lang==='en'?'Document successfully read.':'Dokument je uspešno pročitan.'); }
});

document.addEventListener('click',e=>{
  const target=e.target.closest('[data-action]'); if(!target)return;
  const action=target.dataset.action;
  if(action==='login'){ state.authenticated=true; state.mode=target.dataset.mode; refreshPage(); }
  if(action==='logout'){ state.authenticated=false; state.mobileOpen=false; closeModal(); renderLogin(); }
  if(action==='language'){ state.lang=target.dataset.lang; closeModal(); refreshPage(); }
  if(action==='switch-mode'){ state.mode=target.dataset.mode; state.mobileOpen=false; closeModal(); renderShell(); }
  if(action==='navigate'){ if(state.mode==='partner')state.partnerSection=target.dataset.section; else state.adminSection=target.dataset.section; state.mobileOpen=false; closeModal(); renderShell(); window.scrollTo(0,0); }
  if(action==='open-menu'){ state.mobileOpen=true; renderShell(); }
  if(action==='close-menu'){ state.mobileOpen=false; renderShell(); }
  if(action==='category'){ state.category=target.dataset.category; renderShell(); }
  if(action==='product'){ showProduct(target.dataset.sku); }
  if(action==='favorite'){ e.stopPropagation(); const sku=target.dataset.sku; state.favorites.has(sku)?state.favorites.delete(sku):state.favorites.add(sku); if(modalRoot.innerHTML)showProduct(sku); else renderShell(); toast(state.lang==='en'?'Saved products updated.':'Sačuvani proizvodi su ažurirani.'); }
  if(action==='add-cart'){ e.stopPropagation(); const sku=target.dataset.sku; const p=products.find(x=>x.sku===sku); if(!p||p.available===0)return; state.cart.set(sku,Math.min((state.cart.get(sku)||0)+1,p.available)); closeModal(); renderShell(); toast(`${p.name} · ${state.lang==='en'?'added to cart':'dodato u korpu'}`); }
  if(action==='open-cart'){ openCart(); }
  if(action==='integration-details'){ showIntegrationDetails(); }
  if(action==='notifications'){ openNotifications(); }
  if(action==='mark-all-notifications'){ state.notifications.forEach(n=>{n.read=true;}); renderShell(); openNotifications(); toast(state.lang==='en'?'All notifications marked as read.':'Sva obaveštenja su označena kao pročitana.'); }
  if(action==='notification-detail'){ const note=state.notifications.find(n=>n.id===target.dataset.notification); if(note){ note.read=true; closeModal(); renderShell(); if(note.kind==='order')showOrder(note.target); if(note.kind==='customer')showCustomer(Number(note.target)); if(note.kind==='document')showDocument(Number(note.target)); } }
  if(action==='close-modal'){ closeModal(); }
  if(action==='cart-qty'){ const sku=target.dataset.sku,delta=Number(target.dataset.delta),p=products.find(x=>x.sku===sku),next=(state.cart.get(sku)||0)+delta; if(next<=0)state.cart.delete(sku); else state.cart.set(sku,Math.min(next,p.available)); renderShell(); openCart(); }
  if(action==='checkout'){ showCheckout(); }
  if(action==='place-order'){ const id=`BER-260922-${260+state.partnerOrders.length}`; const items=[...state.cart.keys()],quantities=[...state.cart.values()],total=Number((cartTotal()*1.21).toFixed(2)); const order={id,date:'22. sep 2026.',items,quantities,total,status:'review',label:'Primljeno · provera',progress:1,eta:'23. sep 2026.',invoice:null}; state.partnerOrders.unshift(order); state.adminOrders.unshift({...order,partner:'Hotel Regent Porto Montenegro',initials:'HR',items:items.length}); state.cart.clear(); state.partnerSection='orders'; closeModal(); renderShell(); toast(`${state.lang==='en'?'Order placed':'Porudžbina je poslata'} · ${id}`); }
  if(action==='order'){ showOrder(target.dataset.order); }
  if(action==='reorder'){ const o=findOrder(target.dataset.order); if(o&&Array.isArray(o.items)){ o.items.forEach((sku,i)=>state.cart.set(sku,(state.cart.get(sku)||0)+(o.quantities?.[i]||1))); closeModal(); renderShell(); openCart(); toast(state.lang==='en'?'Order copied to cart.':'Porudžbina je kopirana u korpu.'); } }
  if(action==='approve-order'){ const o=findOrder(target.dataset.order); if(o){o.status='processing';o.label='Poslato u Abacus';o.progress=2;o.erpId='Abacus ERP';closeModal();renderShell();toast(state.lang==='en'?'Order approved and transferred to Abacus.':'Porudžbina je odobrena i preneta u Abacus.');} }
  if(action==='quick-add'){ let added=0; document.querySelectorAll('.quick-qty').forEach(input=>{const q=Number(input.value);if(q>0){state.cart.set(input.dataset.sku,(state.cart.get(input.dataset.sku)||0)+q);added+=q;}}); renderShell(); if(added)openCart(); else toast(state.lang==='en'?'Enter at least one quantity.':'Unesite najmanje jednu količinu.'); }
  if(action==='load-sample'){ state.uploadResult=target.dataset.name; renderShell(); toast(state.lang==='en'?'Demo file loaded.':'Probni fajl je učitan.'); }
  if(action==='reset-upload'){ state.uploadResult=null; renderShell(); }
  if(action==='import-cart'){ [[products[0].sku,4],[products[2].sku,2],[products[7].sku,3]].forEach(([sku,q])=>state.cart.set(sku,q)); renderShell(); openCart(); }
  if(action==='download') toast(state.lang==='en'?'Demo document is ready for download.':'Demo dokument je spreman za preuzimanje.');
  if(action==='customer') showCustomer(Number(target.dataset.customer));
  if(action==='document-detail') showDocument(Number(target.dataset.document));
  if(action==='document-customer') showCustomer(Number(target.dataset.customer));
  if(action==='create-document-order'){ const index=Number(target.dataset.document),doc=state.documents[index]; if(doc&&doc.status==='matched'){ doc.status='created';doc.progress=4;doc.orderId='BER-260922-258';doc.erpId='Abacus ERP';if(!state.adminOrders.some(o=>o.id===doc.orderId))state.adminOrders.unshift({id:doc.orderId,partner:doc.customer,initials:initials(doc.customer),date:'22. sep 2026.',items:doc.lines,total:doc.total,status:'processing',label:'Poslato u Abacus',progress:2,erpId:doc.erpId});renderShell();showDocument(index);toast(state.lang==='en'?'Order created and transferred to Abacus.':'Porudžbina je kreirana i preneta u Abacus.');} }
  if(action==='toast') toast(state.lang==='en'?'This action is included in the proposed portal.':'Ova funkcija je uključena u predloženi portal.');
});

function registerWebMCP() {
  const context=document.modelContext; if(!context?.registerTool)return;
  const safeRegister=tool=>{try{Promise.resolve(context.registerTool(tool)).catch(()=>{});}catch{}}
  safeRegister({name:'get_berba_stock',title:'Check Berba stock',description:'Return current demo availability and customer pricing for matching products.',inputSchema:{type:'object',properties:{query:{type:'string'}},required:['query'],additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute({query}){if(typeof query!=='string'||!query.trim())throw new Error('query is required');return products.filter(p=>normalize(`${p.name} ${p.producer} ${p.sku}`).includes(normalize(query))).map(p=>({sku:p.sku,name:p.name,availableCases:p.available,netPrice:p.price,currency:'EUR'}));}});
  safeRegister({name:'add_berba_products_to_cart',title:'Add products to Berba cart',description:'Add one or more catalogue products to the visible demo cart.',inputSchema:{type:'object',properties:{lines:{type:'array',items:{type:'object',properties:{sku:{type:'string'},quantity:{type:'integer',minimum:1}},required:['sku','quantity'],additionalProperties:false},minItems:1}},required:['lines'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute({lines}){if(!Array.isArray(lines)||!lines.length)throw new Error('lines are required');for(const line of lines){const p=products.find(x=>x.sku===line.sku);if(!p||!Number.isInteger(line.quantity)||line.quantity<1||line.quantity>p.available)throw new Error(`Invalid line: ${line.sku}`);}for(const line of lines)state.cart.set(line.sku,(state.cart.get(line.sku)||0)+line.quantity);if(state.authenticated)renderShell();return{cartCases:cartCount(),netTotal:cartTotal(),currency:'EUR'};}});
}

renderLogin();
registerWebMCP();
