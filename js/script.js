// 'use strict';

// ELEMENTS
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav__links');

const navIcons = document.querySelectorAll('.nav-icon');
const iconMenu = document.querySelector('.menu-icon');
const iconClose = document.querySelector('.close-icon');

const navHeight = nav.getBoundingClientRect().height;
const navLink = document.querySelectorAll('.nav__link');
const allSections = document.querySelectorAll('.section');

const priceNodeList = document.querySelectorAll('.price--js');
const widthBelow480px = window.matchMedia('(max-width: 30em)');

///////////////////////////////////////
// Page Navigation (handle click on nav link)
const smoothScroll = function (ev) {
  ev.preventDefault();

  // TODO: add an offset

  if (ev.target.classList.contains('nav__link')) {
    const id = ev.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

    // close menu, if user is on mobile nav version
    if (navLinks.classList.contains('nav__links--visible')) toggleMenu();

    // remove focus state
    ev.target.blur();
  }
};

navLinks.addEventListener('click', smoothScroll);

///////////////////////////////////////
//  Clicks on Mobile Nav Icon
const toggleMenu = function () {
  iconMenu.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
  navLinks.classList.toggle('nav__links--visible');
};

iconMenu.addEventListener('click', toggleMenu);
iconClose.addEventListener('click', toggleMenu);
// for people using tab to navigate pages
iconMenu.addEventListener('keypress', toggleMenu);
iconClose.addEventListener('keypress', toggleMenu);

///////////////////////////////////////
// Menu Hover Fade Animation
const handleHover = function (ev) {
  if (ev.target.classList.contains('nav__link')) {
    const link = ev.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');

    siblings.forEach(el => {
      if (el !== link) el.style.color = this;
    });
  }
};

nav.addEventListener('mouseover', handleHover.bind('#1e1854'));
nav.addEventListener('mouseout', handleHover.bind('#f9fbff'));

///////////////////////////////////////
// Navigation - Sense Scrolling to Section
const sectionNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  const sectionID = '#' + entry.target.id;
  let foundID;
  let siblings = [];
  for (const link of navLink) {
    if (link.getAttribute('href') === sectionID) foundID = link;
    if (link.getAttribute('href') !== sectionID) siblings.push(link);
  }

  foundID.classList.add('nav__link--active');
  siblings.forEach(el => el.classList.remove('nav__link--active'));
};

const sectionObserver = new IntersectionObserver(sectionNav, {
  root: null,
  rootMargin: `-${navHeight}px`,
  threshold: 0.3,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
});

///////////////////////////////////////
// Toggle Dots (in FAQ Answer) @ width 480px
const initialValues = ['$150', '$200', '$180', '$270'];
function controlDotDisplay(width) {
  if (width.matches) {
    priceNodeList.forEach((price, i) => (price.innerHTML = initialValues[i]));
  } else {
    priceNodeList.forEach(
      (price, i) =>
        (price.innerHTML = `. . . . . . . . . &nbsp; ${initialValues[i]}`)
    );
  }
}
controlDotDisplay(widthBelow480px);

widthBelow480px.addEventListener('change', controlDotDisplay);

///////////////////////////////////////
// Footer Date (Year)
const footerDate = document.querySelector('.display-date');
footerDate.innerHTML = new Date().getFullYear();
