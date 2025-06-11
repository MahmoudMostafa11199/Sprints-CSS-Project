import { employeesInfo } from '../assets/data/employees.js';

/////////////////////////////////////////////////
// DOM Elements
/////////////////////////////////////////////////
const employeeContainer = document.querySelector('.employees');

/////////////////////////////////////////////////
// UI Helpers
/////////////////////////////////////////////////
const displayEmployee = (employee) => {
  const { id, name, department, img, linkedin, instagram, twitter } = employee;

  const markup = `
      <div class="slide flex-[100%] sm:flex-[40%] md:flex-[35%] lg:flex-[32%] flex-shrink-0" data-id="${id}">
        <img 
          src="../assets/imgs/person/${img}" 
          alt="${name} photo" 
          class="object-contain object-bottom w-full h-[15rem] md:h-[20rem] lg:h-[25rem] bg-gray-100 pt-10 mb-4 rounded-md" 
        />
        <h4 class="text-2xl -tracking-tighter font-semibold mb-1">${name}</h4>
        <p class="text-xs mb-4">${department}</p>
        <ul class="flex gap-4">
          <li>
            <a href=${twitter} target="_blank">
              <iconify-icon
                class="hover:text-gray-600"
                icon="teenyicons:twitter-outline"
                ></iconify-icon>
            </a>
          </li>
          <li>
            <a href=${instagram} target="_blank">
              <iconify-icon
                class="hover:text-gray-600"
                icon="teenyicons:instagram-outline"
                ></iconify-icon>
            </a>
          </li>
          <li>
            <a href=${linkedin} target="_blank">
              <iconify-icon
                class="hover:text-gray-600"
                icon="ri:linkedin-line"
                ></iconify-icon>
            </a>
          </li>
        </ul>
      </div>
  `;

  employeeContainer.insertAdjacentHTML('beforeend', markup);
};

/////////////////////////////////////////////////
// Employees Logic
/////////////////////////////////////////////////
const renderEmployees = () => {
  employeesInfo.forEach(displayEmployee);
};

/////////////////////////////////////////////////
// INIT
/////////////////////////////////////////////////
(() => {
  renderEmployees();
})();
