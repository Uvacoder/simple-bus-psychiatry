// 'use strict';

// ELEMENTS
const nav = document.querySelector('nav');
const allNavLinks = document.querySelector('.nav__links');

const headerLogo = document.querySelector('.nav__logo');
const footerLogo = document.querySelector('.footer__logo');
const topSection = document.querySelector('.section-home');
const ctaBtn = document.querySelector('.cta-btn');
const sectionContact = document.querySelector('.section-contact');

const navIcons = document.querySelectorAll('.nav-icon');
const iconMenu = document.querySelector('.menu-icon');
const iconClose = document.querySelector('.close-icon');

const navHeight = nav.getBoundingClientRect().height;
const navLinks = document.querySelectorAll('.nav__link');
const allSections = document.querySelectorAll('.section');

const priceNodeList = document.querySelectorAll('.price');
const widthBelow865px = window.matchMedia('(max-width: 54em)');

const formBtnsDiv = document.querySelector('.js--btn-group');
const btnConsult = document.querySelector('.js--consult-btn');
const btnContact = document.querySelector('.js--contact-btn');
const formConsult = document.querySelector('.consult-form');
const formContact = document.querySelector('.contact-form');
const formInputs = document.querySelectorAll('.form__input');
const formTextareas = document.querySelectorAll('.form__textarea');

///////////////////////////////////////
// Page Navigation - Scroll to Section on Click
const smoothScroll = function (ev) {
  ev.preventDefault();

  if (ev.target.classList.contains('nav__link')) {
    const id = ev.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

    // close menu, if user is on mobile nav version
    if (allNavLinks.classList.contains('nav__links--visible')) toggleMenu();

    // remove focus state
    ev.target.blur();
  }
};
allNavLinks.addEventListener('click', smoothScroll);

///////////////////////////////////////
// Scroll to Top on Logo Click
const scrollToTop = function (ev) {
  ev.preventDefault();
  topSection.scrollIntoView({ behavior: 'smooth' });
  ev.target.closest('a').blur();
};
headerLogo.addEventListener('click', scrollToTop);
footerLogo.addEventListener('click', scrollToTop);

///////////////////////////////////////
// Scroll to Contact Section on CTA Btn Click
const scrollToContact = function (ev) {
  ev.preventDefault();
  sectionContact.scrollIntoView({ behavior: 'smooth' });
  ev.target.blur();
};
ctaBtn.addEventListener('click', scrollToContact);

///////////////////////////////////////
//  Clicks on Mobile Nav Icon
const toggleMenu = function () {
  iconMenu.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
  allNavLinks.classList.toggle('nav__links--visible');
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
// Section Observer - Navigation - Toggle Active Class
const toggleActive = function (entries) {
  const entry = entries.find(oneEntry => oneEntry.isIntersecting);

  // if 'find' returns undefined:
  if (!entry) return;

  const sectionID = '#' + entry.target.id;
  let foundID;
  Array.from(navLinks, link => {
    if (link.getAttribute('href') === sectionID) foundID = link;
  });

  navLinks.forEach(link => link.classList.remove('nav__link--active'));
  foundID.classList.add('nav__link--active');
};

const sectionObserver = new IntersectionObserver(toggleActive, {
  root: null,
  threshold: 0.35,
});
allSections.forEach(section => sectionObserver.observe(section));

///////////////////////////////////////
// Toggle Dots (in FAQ Answer) @ width 864px
const initialValues = ['$190', '$270', '$140', '$200'];
const initialStrings = [
  'Initial pharmacotherapy assessment',
  'Initial psychotherapy &amp; pharmacotherapy assessment',
  'Followup medication management',
  'Subsequent psychotherapy sessions &amp; medication management',
];

function controlDotDisplay(width) {
  if (width.matches) {
    priceNodeList.forEach(
      (price, i) =>
        (price.innerHTML = `${initialStrings[i]}&nbsp; &mdash; ${initialValues[i]} <span class="js--price"></span>`)
    );
  } else {
    priceNodeList.forEach(
      (price, i) =>
        (price.innerHTML = `${initialStrings[i]}&nbsp; <span class="js--price">. . . . . . . &nbsp${initialValues[i]}</span>`)
    );
  }
}

controlDotDisplay(widthBelow865px);
widthBelow865px.addEventListener('change', controlDotDisplay);

///////////////////////////////////////
// Toggle Contact Forms on Button Clicks
formBtnsDiv.addEventListener('click', function (ev) {
  const clicked = ev.target.closest('.btn-toggle-form');

  if (!clicked) return;

  const dataNum = +clicked.dataset.btn;

  if (dataNum === 1) {
    // Show consultation form
    formConsult.classList.remove('hidden');
    formContact.classList.add('hidden');

    btnConsult.classList.remove('contact-ghost-btn');
    btnContact.classList.add('contact-ghost-btn');

    btnConsult.classList.add('contact-active-btn');
    btnContact.classList.remove('contact-active-btn');
  }
  if (dataNum === 2) {
    // Show contact form
    formContact.classList.remove('hidden');
    formConsult.classList.add('hidden');

    btnContact.classList.remove('contact-ghost-btn');
    btnConsult.classList.add('contact-ghost-btn');

    btnContact.classList.add('contact-active-btn');
    btnConsult.classList.remove('contact-active-btn');
  }

  clicked.blur();
});

///////////////////////////////////////
// Contact Form Validation

///////////////////////////////////////
// Footer Date (Year)
const footerDate = document.querySelector('.display-date');
footerDate.innerHTML = new Date().getFullYear();
