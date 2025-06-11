/////////////////////////////////////////////////////
// DOM Elements
/////////////////////////////////////////////////////
const accountSidebar = document.querySelector('.account-navigation');

/////////////////////////////////////////////////////
// Account Sidebar Logic
/////////////////////////////////////////////////////
const uploadAccountSidebar = async () => {
  const sidebarRes = await fetch('../account/account-sidebar.html');
  const sidebarHTML = await sidebarRes.text();

  accountSidebar.innerHTML = sidebarHTML;

  highlightActiveSidebarLink();
};

const highlightActiveSidebarLink = () => {
  const currenPage = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.sidebar__link');

  links.forEach((link) => {
    const linkPage = link.getAttribute('href').split('/').pop();

    if (linkPage == currenPage) link.classList.add('active');
  });
};

/////////////////////////////////////////////////////
// INIT
/////////////////////////////////////////////////////
(async () => {
  uploadAccountSidebar();
})();
