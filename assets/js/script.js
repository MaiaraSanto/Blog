'use strict';

/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * MOBILE NAVBAR TOGGLER
 */

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks,btnPrimary) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.btnPrimary = document.querySelector(btnPrimary);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
         }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.btnPrimary.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
  ".btn-primary",
);
mobileNavbar.init();

/**
 * HEADER ANIMATION
 * When scrolled donw to 100px header will be active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

/**
 * NEXT SLIDE
 */

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

/**
 * PREVIOUS SLIDE
 */

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);

/**
 * RESPONSIVE
 */
window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});

function getViewCount(postId) {
  const storedCounts = localStorage.getItem('viewCounts');
  if (storedCounts) {
      const counts = JSON.parse(storedCounts);
      return counts[postId] || 0;
  }
  return 0;
}

// Função para incrementar o número de visualizações e atualizar o localStorage para um postId específico
function incrementViewCount(postId) {
  const counts = JSON.parse(localStorage.getItem('viewCounts')) || {};
  counts[postId] = (counts[postId] || 0) + 1;
  localStorage.setItem('viewCounts', JSON.stringify(counts));
  displayViewCount(postId);
}

// Função para exibir o número atual de visualizações para um postId específico
function displayViewCount(postId) {
  const viewCountElement = document.querySelector(`[data-post-id="${postId}"] .view-count`);
  if (viewCountElement) {
      const viewCount = getViewCount(postId);
      viewCountElement.textContent = viewCount;
  }
}

// Adicionar eventos de clique aos elementos clicáveis dos cards
const clickableElements = document.querySelectorAll('[data-clickable]');
clickableElements.forEach(element => {
  element.addEventListener('click', function () {
      const postId = this.closest('[data-post-id]').getAttribute('data-post-id');
      incrementViewCount(postId);
  });
});

// Exibir as visualizações iniciais ao carregar a página
clickableElements.forEach(element => {
  const postId = element.closest('[data-post-id]').getAttribute('data-post-id');
  displayViewCount(postId);
});

// Exibe a data atual na página
function displayCurrentDate() {
  const dateElement = document.getElementById('post-date');
  if (dateElement) {
      dateElement.textContent = getCurrentDate();
  }
}

// Chama a função para exibir a data atual ao carregar a página
window.addEventListener('load', function () {
  displayCurrentDate();
});

// Função para exibir a data atual nos cards
function displayCurrentDateInCards() {
  const dateElements = document.querySelectorAll('.post-date');
  if (dateElements) {
      const currentDate = new Date();
      const dateString = currentDate.toLocaleDateString();
      dateElements.forEach((element) => {
          element.textContent = dateString;
      });
  }
}

// Chama a função para exibir a data atual nos cards ao carregar a página
window.addEventListener('load', function () {
  displayCurrentDateInCards();
});


