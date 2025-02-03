console.log("This is Lab 316.1.1");

// Select and cache the <main> element
const mainEl = document.querySelector('main');

// Set the background color of mainEl using CSS custom property
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add the class 'flex-ctr' to mainEl
mainEl.classList.add('flex-ctr');

// Select and cache the <nav id="top-menu"> element
const topMenuEl = document.getElementById('top-menu');

// Set the height of topMenuEl
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl using CSS custom property
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add the class 'flex-around' to topMenuEl
topMenuEl.classList.add('flex-around');

// Menu data structure
const menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog', subLinks: [
    { text: 'all', href: '/catalog/all' },
    { text: 'top selling', href: '/catalog/top' },
    { text: 'search', href: '/catalog/search' }
  ]},
  { text: 'orders', href: '/orders', subLinks: [
    { text: 'new', href: '/orders/new' },
    { text: 'pending', href: '/orders/pending' },
    { text: 'history', href: '/orders/history' }
  ]},
  { text: 'account', href: '/account', subLinks: [
    { text: 'profile', href: '/account/profile' },
    { text: 'sign out', href: '/account/signout' }
  ]}
];

// Iterate over menuLinks array and create menu buttons
menuLinks.forEach(link => {
  const a = document.createElement('a');
  a.setAttribute('href', link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});

// Select and cache the <nav id="sub-menu"> element
const subMenuEl = document.getElementById('sub-menu');

// Set the height and background color of subMenuEl
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Add the class 'flex-around' to subMenuEl
subMenuEl.classList.add('flex-around');

// Set the position of subMenuEl to temporarily hide it
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// Select and cache all <a> elements inside topMenuEl
const topMenuLinks = document.querySelectorAll('#top-menu a');

// Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.tagName !== 'A') return;
  console.log(event.target.textContent);

  // Toggle active class
  topMenuLinks.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');

  // Show or hide submenu
  const linkData = menuLinks.find(link => link.text === event.target.textContent.toLowerCase());
  if (linkData && linkData.subLinks) {
    subMenuEl.style.top = '100%';
    buildSubmenu(linkData.subLinks);
  } else {
    subMenuEl.style.top = '0';
  }
});

// Helper function to build submenu
function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = '';
  subLinks.forEach(link => {
    const a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.textContent = link.text;
    subMenuEl.appendChild(a);
  });
}

// Attach a delegated 'click' event listener to subMenuEl
subMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.tagName !== 'A') return;
  console.log(event.target.textContent);

  subMenuEl.style.top = '0';
  topMenuLinks.forEach(link => link.classList.remove('active'));

  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});