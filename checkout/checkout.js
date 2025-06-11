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
        class="flex items-center justify-between py-3 gap-2 text-sm sm:text-base" 
        data-id="${id}"
        >
          <div class="flex items-center justify-self-start gap-y-1 gap-x-3">
            <img
              src="../assets/imgs/flashSales/${image}"
              class="relative"
              alt=${title}
              width="36"
              height="36"
            />
            <p>${title}</p>
          </div>
          <div class="justify-self-end">
            $${salary * quantity}
          </div>
      </div>
  `;

  shoppingCartContainer.insertAdjacentHTML('beforeend', markup);
};

///////////////////////////////////////////////////////////
// Shopping-Cart Logic
///////////////////////////////////////////////////////////
const renderCart = () => {
  shoppingCart.forEach(displayCart);
};

const calcTotalPrice = () => {
  const totalPrice = shoppingCart.reduce(
    (acc, cur) => acc + cur.salary * cur.quantity,
    0
  );

  totalPriceEl.forEach((el) => (el.textContent = `$${totalPrice.toFixed(2)}`));
};

///////////////////////////////////////////////////////////
// INIT
///////////////////////////////////////////////////////////
(() => {
  renderCart();
  calcTotalPrice();
})();
