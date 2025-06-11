/////////////////////////////////////////////////////
// DOM Elements
/////////////////////////////////////////////////////
const headerContainer = document.querySelector('.header');
const footerContainer = document.querySelector('.footer');

/////////////////////////////////////////////////////
// Layout Logic
/////////////////////////////////////////////////////
const uploadLayout = async () => {
  const headerRes = await fetch('../assets/layout/header.html');
  const headerHTML = await headerRes.text();

  const footerRes = await fetch('../assets/layout/footer.html');
  const footerHTML = await footerRes.text();

  headerContainer.innerHTML = headerHTML;
  footerContainer.innerHTML = footerHTML;

  highlightActiveHeaderLink();
};

//
const highlightActiveHeaderLink = () => {
  const currenPage = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.main-nav__link');

  links.forEach((link) => {
    const linkPage = link.getAttribute('href').split('/').pop();

    if (linkPage == currenPage) link.classList.add('active');
  });
};

/////////////////////////////////////////////////////
// INIT
/////////////////////////////////////////////////////
(async () => {
  uploadLayout();
})();
