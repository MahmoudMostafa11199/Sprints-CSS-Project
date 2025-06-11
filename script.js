import { ratingStar, calculateAverageRating } from './assets/js/helper.js';
import {
  flashSales,
  sellingProducts,
  products,
} from './assets/data/flash&selling-products.js';

/////////////////////////////////////////////////
// DOM Elements
/////////////////////////////////////////////////
const flashSalesContainer = document.querySelector('.flash-sales');
const sellingProductsContainer = document.querySelector('.selling-products');
const ourProductsContainer = document.querySelector('.our-products');

/////////////////////////////////////////////////
// UI Helpers
/////////////////////////////////////////////////
const displayProduct = (product, container) => {
  const { id, img, title, price, ratingCount, ratings, sale } = product;

  const markup = `
        <div class="cart group relative flex-shrink-0 basis-[65%] sm:basis-[30%] md:basis-[25%] lg:basis-[23.2%]" data-id="${id}">
          <div class="relative h-60 place-content-center bg-gray-300 mb-4">
            <p
              class="absolute top-2 left-2 text-xs bg-primary-700 px-2 py-1 rounded text-white"
            >
              -${sale}%
            </p>
            <div class="absolute top-2 right-2 space-y-0.5">
              <button class="btn-heart block">
                <iconify-icon 
                  icon="gridicons:heart" 
                  width="18" 
                  height="18" 
                  class="p-1 bg-white rounded-full text-transparent stroke-gray-900 hover:text-red-600 hover:stroke-red-600"
                ></iconify-icon>
              </button>
              <button class="btn-eye">
                <iconify-icon 
                  icon="proicons:eye" 
                  width="18" 
                  height="18" 
                  class="p-1 bg-white rounded-full"
                ></iconify-icon>
              </button>
            </div>
            <button
              class="opacity-0 transition-all group-hover:opacity-100 absolute bottom-0 left-0 w-full bg-black text-white text-center p-2"
            >
              Add To Cart
            </button>
            <img
              src="./assets/imgs/${img}"
              alt="${title}"
              class="max-w-full h-full object-scale-down mx-auto"
            />
          </div>
          <div class="space-y-1">
            <h4 class="font-semibold text-sm">${title}</h4>
            <p>
              <span class="text-red-600 me-2">
                $${price - (sale * price) / 100}
              </span>
              <span class="line-through text-gray-500"> $${price} </span>
            </p>
            <div class="star flex items-center gap-2">
              <ul class="flex">
                ${ratingStar(ratings, ratingCount)}
              </ul>
              <span class="text-gray-500 text-sm">(${ratingCount})</span>
            </div>
          </div>
        </div>
  `;

  container.insertAdjacentHTML('beforeend', markup);
};

const displayOurProduct = (product) => {
  const { id, title, img, price, ratings, ratingCount, color, isNew } = product;

  const markup = `
      <div class="group flex-shrink-0 flex-[23.2%]" data-id="${id}">
        <div class="relative h-60 place-content-center flex bg-gray-300 mb-4">
          <p class="absolute top-2 left-2 text-xs bg-green-500 px-2 py-1 rounded text-white ${
            !isNew && 'hidden'
          }">
            New
          </p>
          <div class="absolute top-2 right-2 space-y-0.5">
            <button class="btn-heart block">
              <iconify-icon 
                icon="gridicons:heart" 
                width="18" 
                height="18" 
                class="p-1 bg-white rounded-full text-transparent stroke-gray-900 hover:text-red-600 hover:stroke-red-600"
              ></iconify-icon>
            </button>
            <button class="btn-eye">
              <iconify-icon 
                icon="proicons:eye" 
                width="18" 
                height="18" 
                class="p-1 bg-white rounded-full"
              ></iconify-icon>
            </button>
          </div>
          <button class="opacity-0 transition-all group-hover:opacity-100 absolute bottom-0 left-0 w-full bg-black text-white text-center p-2">
            Add To Cart
          </button>
          <img
            src="./assets/imgs/${img}"
            alt="${title}"
            class="max-w-full h-full object-scale-down mx-auto"
          />
        </div>
        <div class="space-y-1">
          <h4 class="font-semibold text-sm">${title}</h4>
          <div class="flex gap-2">
            <p class="text-red-600">$${price}</p>
            <div class="flex items-center gap-2">
              <ul class="flex">
                ${ratingStar(ratings, ratingCount)}
              </ul>
              <span class="text-gray-500 text-sm">(${ratingCount})</span>
            </div>
          </div>
          ${
            color
              ? `<div class="space-x-1">
                   <span
                      style="--bg-before-color: ${color}"
                      class="w-5 h-5 inline-block rounded-full border-2 border-black relative 
                          before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 
                          before:-translate-y-1/2 before:w-3 before:h-3 before:rounded-full before:bg-[var(--bg-before-color)]"
                    ></span>
                   <span class="w-5 h-5 bg-slate-700 inline-block rounded-full"></span>
                 </div>`
              : ''
          }
        </div>
      </div>
  `;

  ourProductsContainer.insertAdjacentHTML('beforeend', markup);
};
/////////////////////////////////////////////////
// Flash Sales Logic
/////////////////////////////////////////////////
const renderFlashSales = () => {
  flashSales.forEach((product) => displayProduct(product, flashSalesContainer));
};

/////////////////////////////////////////////////
// Selling Products Logic
/////////////////////////////////////////////////
const renderSellingProducts = () => {
  sellingProducts.forEach((product) =>
    displayProduct(product, sellingProductsContainer)
  );
};

/////////////////////////////////////////////////
// Our Product Logic
/////////////////////////////////////////////////
const renderOurProducts = () => {
  products.forEach(displayOurProduct);
};

/////////////////////////////////////////////////
// INIT
/////////////////////////////////////////////////
(() => {
  renderFlashSales();
  renderSellingProducts();
  renderOurProducts();
})();
