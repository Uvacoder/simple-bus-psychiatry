// 'use strict';
// import 'core-js/stable';

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

const priceNodeList = document.querySelectorAll('.js--price');
const widthBelow865px = window.matchMedia('(max-width: 54em)');

const formBtnsDiv = document.querySelector('.js--btn-group');
const btnConsult = document.querySelector('.js--consult-btn');
const btnContact = document.querySelector('.js--contact-btn');
const formConsult = document.querySelector('.consult-form');
const formContact = document.querySelector('.contact-form');
const formInputs = document.querySelectorAll('.form__input');
const formTextareas = document.querySelectorAll('.form__textarea');
const dateInput1 = document.querySelector('.js--date-1');
const dateInput2 = document.querySelector('.js--date-2');

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

////////////////////////////////////////////
// Scroll to Top on Logo Click
const scrollToTop = function (ev) {
  ev.preventDefault();
  topSection.scrollIntoView({ behavior: 'smooth' });
  ev.target.closest('a').blur();
};
headerLogo.addEventListener('click', scrollToTop);
footerLogo.addEventListener('click', scrollToTop);

////////////////////////////////////////////
// Scroll to Contact Section on CTA Btn Click
const scrollToContact = function (ev) {
  ev.preventDefault();
  sectionContact.scrollIntoView({ behavior: 'smooth' });
  ev.target.blur();
};
ctaBtn.addEventListener('click', scrollToContact);

////////////////////////////////////////////
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

////////////////////////////////////////////
// Menu Hover Fade Animation
const handleHover = function (ev) {
  if (window.matchMedia('(hover: none)').matches) return;
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

////////////////////////////////////////////
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

////////////////////////////////////////////
// Toggle Dots (in FAQ Answer) @ width 864px
const initialValues = ['$190', '$270', '$140', '$200'];

function controlDotDisplay(width) {
  if (width.matches) {
    priceNodeList.forEach(
      (price, i) => (price.innerHTML = `${initialValues[i]}`)
    );
  } else {
    // Width is over 865px
    priceNodeList.forEach(
      (price, i) => (price.innerHTML = `. . . . . . . &nbsp${initialValues[i]}`)
    );
  }
}

controlDotDisplay(widthBelow865px);
widthBelow865px.addEventListener('change', controlDotDisplay);

////////////////////////////////////////////
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

////////////////////////////////////////////
// Contact Form Validation
const patterns = {
  name: new RegExp('^[a-z]{2,} [a-z]{2,}$', 'i'),
  // ⌄SEE: ->  https://regex101.com/r/FHsYQi/2
  //   prettier-ignore
  email: new RegExp('^([a-z\\d\\.-]+)@([a-z\\d-]+)\\.([a-z]{2,8})(\\.[a-z]{2,8})?$', 'i'),
  // ⌄SEE: ->  https://regex101.com/r/RB6Ee6/2
  phone: new RegExp('^(\\d{3}-?\\d{3}-?\\d{4})$'),
  // ⌄ matches everything
  message: new RegExp('^[^]+$'),

  // choiceOne and choiceTwo need to match this format:
  // 2022-03-24T04:58
  choiceOne: new RegExp('^(\\d{4}-\\d{2}-\\d{2})T(\\d{2}:\\d{2})$'),
  choiceTwo: new RegExp('^(\\d{4}-\\d{2}-\\d{2})T(\\d{2}:\\d{2})$'),
};

//////////////////////
// Validate user input
const validate = function (field, regex) {
  if (regex.test(field.value)) {
    field.classList.add('valid');
    field.classList.remove('invalid');
  } else {
    field.classList.add('invalid');
    field.classList.remove('valid');
  }
};

// Callback to Run when Form Receives Input
const passToValidator = function (ev) {
  if (
    ev.target.name === 'messageOptional' ||
    ev.target.name === 'contactMethod' ||
    ev.target.type === 'submit'
  )
    return;
  console.log(ev.target.value);
  validate(ev.target, patterns[ev.target.name]);
};

formConsult.addEventListener('keyup', passToValidator);
formContact.addEventListener('keyup', passToValidator);
dateInput1.addEventListener('change', passToValidator);
dateInput2.addEventListener('change', passToValidator);

//////////////////////
// Handle Various Error States
// When Field is Blurred -- Remove error message. Add backgroundColor when field is invalid AND required
const removeErrorMsg = ev => {
  const evT = ev.target;

  // if field is required & there's user error, highlight the field background
  if (evT.required && evT.classList.contains('invalid'))
    evT.style.backgroundColor = '#f5c6c4';
  // if field has 'invalid' class, remove the message 5 seconds after blur
  if (evT.classList.contains('invalid'))
    setTimeout(() => evT.classList.remove('invalid'), 5000);
};

// When Field is Focused -- Remove red background color
const removeBgColor = ev => (ev.target.style.backgroundColor = '#fff');

formInputs.forEach(input => {
  input.onblur = removeErrorMsg;
  input.onfocus = removeBgColor;
});
formTextareas.forEach(ta => {
  ta.onblur = removeErrorMsg;
  ta.onfocus = removeBgColor;
});

// Remove ability to submit the forms
const btnsNoSubmit = document.querySelectorAll('.js--btn-preventSubmit');

btnsNoSubmit.forEach(btn =>
  btn.addEventListener('click', function (ev) {
    ev.preventDefault();
  })
);

///////////////////////////////////////
// Footer Date (Year)
const footerDate = document.querySelector('.display-date');
footerDate.innerHTML = new Date().getFullYear();
