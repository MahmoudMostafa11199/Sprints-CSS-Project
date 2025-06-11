import { productsDetails } from '../assets/data/product.js';
import { flashSales } from '../assets/data/flash&selling-products.js';
import { ratingStar } from '../assets/js/helper.js';

/////////////////////////////////////////////////////////////
// DOM Elements
/////////////////////////////////////////////////////////////
const productImagesContainer = document.querySelector('.product-images');
const flashSalesContainer = document.querySelector('.related-products');
const starsContainer = document.querySelector('.product-details-stars');

/////////////////////////////////////////////////////////////
// UI Helpers
/////////////////////////////////////////////////////////////
const displayProductStars = (product) => {
  const { ratings, reviews } = product;

  starsContainer.innerHTML = ratingStar(ratings, reviews);
};

const displayProductImages = (img) => {
  const titleImg = img.split('/')[img.split('/').length - 1].split('.')[0];

  const markup = `
      <div class="grow bg-gray-200 rounded-md place-content-center place-items-center p-3 md:p-6">
        <img 
          src="../assets/imgs/${img}" 
          alt="${titleImg}" 
          height="80"
          width="80"
          class="object-contain"
        />
      </div>
  `;

  productImagesContainer.insertAdjacentHTML('beforeend', markup);
};

const displayProduct = (product) => {
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
              src="../assets/imgs/${img}"
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

  flashSalesContainer.insertAdjacentHTML('beforeend', markup);
};

/////////////////////////////////////////////////////////////
// Product Details Logic
/////////////////////////////////////////////////////////////
const renderProductImages = () => {
  productsDetails[0].images.forEach(displayProductImages);
};

const renderProductStars = () => {
  displayProductStars(productsDetails[0]);
};

/////////////////////////////////////////////////
// Flash Sales Logic
/////////////////////////////////////////////////
const renderFlashSales = () => {
  flashSales.forEach(displayProduct);
};

/////////////////////////////////////////////////////////////
// INIT
/////////////////////////////////////////////////////////////
(() => {
  renderProductImages();
  renderProductStars();
  renderFlashSales();
})();
