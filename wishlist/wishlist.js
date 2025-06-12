import { favoriteProducts, productForYou } from '../assets/data/wishlist.js';
import { ratingStar } from '../assets/js/helper.js';

///////////////////////////////////////////////////////////
// DOM Elements
///////////////////////////////////////////////////////////
const wishlistContainer = document.querySelector('.wishlist');
const productForYouContainer = document.querySelector('.product-for-you');

///////////////////////////////////////////////////////////
// UI Helpers
///////////////////////////////////////////////////////////
const displayProduct = (product) => {
  const { id, title, img, price, sale } = product;

  const markup = `
          <div class="cart relative flex-shrink-0 basis-[65%] sm:basis-[30%] md:basis-[25%] lg:basis-[23.2%]" data-id="${id}">
            <div class="relative h-70 place-content-center bg-gray-300 mb-4 ">
              <p
                class="absolute top-2 left-2 text-xs bg-primary-700 px-2 py-1 rounded text-white ${
                  !sale ? 'hidden' : ''
                }"
              >
                -${sale}%
              </p>
              <div class="absolute top-2 right-2 space-y-0.5">
                <button class="btn-heart block">
                  <iconify-icon 
                    icon="ion:trash-outline" 
                    width="18" 
                    height="18" 
                    class="p-1 bg-white rounded-full  hover:text-red-600"
                  ></iconify-icon>
                </button>
              </div>
              <button
                class="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2"
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
                <span class="line-through text-gray-500 ${
                  !sale ? 'hidden' : ''
                }"> $${price} </span>
              </p>
            </div>
          </div>
        `;

  wishlistContainer.insertAdjacentHTML('beforeend', markup);
};

//
const displayProductForYou = (product) => {
  const { id, title, img, price, sale, isNew, ratings, ratingCount } = product;

  const markup = `
          <div class="cart relative flex-shrink-0 basis-[65%] sm:basis-[30%] md:basis-[25%] lg:basis-[23.2%]" data-id="${id}">
            <div class="relative h-70 place-content-center bg-gray-300 mb-4 ">
              <div class="absolute top-2 left-2 flex gap-1">
                <p
                  class="text-xs bg-primary-700 px-2 py-1 rounded text-white ${
                    !sale ? 'hidden' : ''
                  }"
                >
                  -${sale}%
                </p>
                <p class="text-xs bg-green-500 px-2 py-1 rounded text-white ${
                  !isNew ? 'hidden' : ''
                }">
                  New
                </p>
              </div>
              <div class="absolute top-2 right-2 space-y-0.5">
                <button class="btn-heart block">
                  <iconify-icon 
                    icon="proicons:eye" 
                    width="18" 
                    height="18" 
                    class="p-1 bg-white rounded-full  hover:text-red-600"
                  ></iconify-icon>
                </button>
              </div>
              <button
                class="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2"
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
                <span class="line-through text-gray-500 ${
                  !sale ? 'hidden' : ''
                }"> $${price} </span>
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

  productForYouContainer.insertAdjacentHTML('beforeend', markup);
};

///////////////////////////////////////////////////////////
// Wishlist Logic
///////////////////////////////////////////////////////////
const renderProduct = () => {
  favoriteProducts.forEach(displayProduct);
};

const renderProductForYou = () => {
  productForYou.forEach(displayProductForYou);
};

///////////////////////////////////////////////////////////
// INIT
///////////////////////////////////////////////////////////
(() => {
  renderProduct();
  renderProductForYou();
})();
