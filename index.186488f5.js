// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2ryJN":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "891a5117186488f5";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["2ryJN"], null, "parcelRequire09f1")
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
const priceNodeList = document.querySelectorAll('.js--price');
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
const smoothScroll = function(ev) {
    ev.preventDefault();
    if (ev.target.classList.contains('nav__link')) {
        const id = ev.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
        // close menu, if user is on mobile nav version
        if (allNavLinks.classList.contains('nav__links--visible')) toggleMenu();
        // remove focus state
        ev.target.blur();
    }
};
allNavLinks.addEventListener('click', smoothScroll);
////////////////////////////////////////////
// Scroll to Top on Logo Click
const scrollToTop = function(ev) {
    ev.preventDefault();
    topSection.scrollIntoView({
        behavior: 'smooth'
    });
    ev.target.closest('a').blur();
};
headerLogo.addEventListener('click', scrollToTop);
footerLogo.addEventListener('click', scrollToTop);
////////////////////////////////////////////
// Scroll to Contact Section on CTA Btn Click
const scrollToContact = function(ev) {
    ev.preventDefault();
    sectionContact.scrollIntoView({
        behavior: 'smooth'
    });
    ev.target.blur();
};
ctaBtn.addEventListener('click', scrollToContact);
////////////////////////////////////////////
//  Clicks on Mobile Nav Icon
const toggleMenu = function() {
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
const handleHover = function(ev) {
    if (window.matchMedia('(hover: none)').matches) return;
    if (ev.target.classList.contains('nav__link')) {
        const link = ev.target;
        const siblings = link.closest('nav').querySelectorAll('.nav__link');
        siblings.forEach((el)=>{
            if (el !== link) el.style.color = this;
        });
    }
};
nav.addEventListener('mouseover', handleHover.bind('#1e1854'));
nav.addEventListener('mouseout', handleHover.bind('#f9fbff'));
////////////////////////////////////////////
// Section Observer - Navigation - Toggle Active Class
const toggleActive = function(entries) {
    const entry = entries.find((oneEntry)=>oneEntry.isIntersecting
    );
    // if 'find' returns undefined:
    if (!entry) return;
    const sectionID = '#' + entry.target.id;
    let foundID;
    Array.from(navLinks, (link)=>{
        if (link.getAttribute('href') === sectionID) foundID = link;
    });
    navLinks.forEach((link)=>link.classList.remove('nav__link--active')
    );
    foundID.classList.add('nav__link--active');
};
const sectionObserver = new IntersectionObserver(toggleActive, {
    root: null,
    threshold: 0.35
});
allSections.forEach((section)=>sectionObserver.observe(section)
);
////////////////////////////////////////////
// Toggle Dots (in FAQ Answer) @ width 864px
const initialValues = [
    '$190',
    '$270',
    '$140',
    '$200'
];
function controlDotDisplay(width) {
    if (width.matches) priceNodeList.forEach((price, i)=>price.innerHTML = `${initialValues[i]}`
    );
    else // Width is over 865px
    priceNodeList.forEach((price, i)=>price.innerHTML = `. . . . . . . &nbsp${initialValues[i]}`
    );
}
controlDotDisplay(widthBelow865px);
widthBelow865px.addEventListener('change', controlDotDisplay);
////////////////////////////////////////////
// Toggle Contact Forms on Button Clicks
formBtnsDiv.addEventListener('click', function(ev) {
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
    message: new RegExp('^[^]+$')
};
//////////////////////
// Validate user input
const validate = function(field, regex) {
    if (regex.test(field.value)) {
        field.classList.add('valid');
        field.classList.remove('invalid');
    } else {
        field.classList.add('invalid');
        field.classList.remove('valid');
    }
};
// Callback to Run when Form Receives Input
const passToValidator = function(ev) {
    //   console.log(ev.target.name);
    if (ev.target.name === 'choiceOne' || ev.target.name === 'choiceTwo' || ev.target.name === 'messageOptional' || ev.target.name === 'contactMethod' || ev.target.type === 'submit') return;
    //  ^ choiceOne and choiceTwo, at least till i get the simplepicker going. messageOptional, contactMethod, & submit stay
    //   if (!ev.target) return;
    // ^ questionable if this is needed.. i mean i would think it is, but maybe not?
    validate(ev.target, patterns[ev.target.name]);
};
formConsult.addEventListener('keyup', passToValidator);
formContact.addEventListener('keyup', passToValidator);
//////////////////////
// Handle Various Error States
// When Field is Blurred -- Remove error message. Add backgroundColor when field is invalid AND required
const removeErrorMsg = (ev)=>{
    const evT = ev.target;
    // if field is required & there's user error, highlight the field background
    if (evT.required && evT.classList.contains('invalid')) evT.style.backgroundColor = '#f5c6c4';
    // if field has 'invalid' class, remove the message 5 seconds after blur
    if (evT.classList.contains('invalid')) setTimeout(()=>evT.classList.remove('invalid')
    , 5000);
};
// When Field is Focused -- Remove red background color
const removeBgColor = (ev)=>ev.target.style.backgroundColor = '#fff'
;
formInputs.forEach((input)=>{
    input.onblur = removeErrorMsg;
    input.onfocus = removeBgColor;
});
formTextareas.forEach((ta)=>{
    ta.onblur = removeErrorMsg;
    ta.onfocus = removeBgColor;
});
// Remove ability to submit the forms
const btnsNoSubmit = document.querySelectorAll('.js--btn-preventSubmit');
btnsNoSubmit.forEach((btn)=>btn.addEventListener('click', function(ev) {
        ev.preventDefault();
    })
);
///////////////////////////////////////
// Footer Date (Year)
const footerDate = document.querySelector('.display-date');
footerDate.innerHTML = new Date().getFullYear();

//# sourceMappingURL=index.186488f5.js.map
