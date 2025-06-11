import { shoppingCart } from '../assets/data/shoppingCart.js';

///////////////////////////////////////////////////////////
// DOM Elements
///////////////////////////////////////////////////////////
const shoppingCartContainer = document.querySelector('.shopping-cart');
const totalPriceEl = document.querySelectorAll('.total-price');

///////////////////////////////////////////////////////////
// UI Helpers
///////////////////////////////////////////////////////////
const displayCart = (product) => {
  const { id, title, image, salary, quantity } = product;

  const markup = `
      <div 
        role="section" 
        class="group grid grid-cols-[2fr_1.2fr_1.4fr_1.2fr] items-center shadow-small py-6 px-3 gap-2 text-sm sm:px-6 sm:text-base" 
        data-id="${id}"
        >
          <div class="flex flex-col items-center justify-self-start gap-y-1 gap-x-3 md:gap-x-5 sm:flex-row relative">
            <img
              src="../assets/imgs/flashSales/${image}"
              class="relative "
              alt={title}
              width="36"
              height="36"
            />
            <span 
              class="opacity-0 absolute -top-3 -left-3 w-5 h-5 rounded-full bg-red-700 text-white z-50 flex items-center justify-center transition-opacity group-hover:opacity-100"
              >
                x
            </span>
            <p>${title}</p>
          </div>
          <div>$${salary}</div>
          <input
            class="justify-self-center w-16 p-2"
            type="number"
            value="${quantity}"
          />
          <div class="justify-self-end">
            $${salary * quantity}
          </div>
      </div>
  `;

  shoppingCartContainer.insertAdjacentHTML('beforeend', markup);
};

///////////////////////////////////////////////////////////
// Wishlist Logic
///////////////////////////////////////////////////////////
const renderCart = () => {
  shoppingCart.forEach(displayCart);
};

const calcTotalPrice = () => {
  const totalPrice = shoppingCart.reduce(
    (acc, cur) => acc + cur.salary * cur.quantity,
    0
  );

  totalPriceEl.forEach((el) => (el.textContent = `$${totalPrice}`));
};

///////////////////////////////////////////////////////////
// INIT
///////////////////////////////////////////////////////////
(() => {
  renderCart();
  calcTotalPrice();
})();
