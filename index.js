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

//  // Menu data structure
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
    // I added new menu item extra for practice
    // { text: 'Career', href: '/career'},
    // { text: 'informtion', href: '/informations'},
  ];

// Iterate over menuLinks array and create menu buttons
menuLinks.forEach(link => {
  const a = document.createElement('a'); // Create an <a> element
  a.setAttribute('href', link.href); // Set href attribute
  a.textContent = link.text; // Set text content
  topMenuEl.appendChild(a); // Append to topMenuEl
});

console.log("lab is done");

