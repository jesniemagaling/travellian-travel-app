export function setupStickyNav({
  headerSelector = 'header',
  hamburgerSelector = '#hamburger',
  mobileNavSelector = '.mobile-nav',
  navLinkSelector = 'a.nav-link',
  logoSelector = '.company-logo-nav img',
  flightIconSelector = '.flights-btn-nav img',
  staysIconSelector = '.stays-btn-nav img',
  menuIconSelector = '.menu-nav',
  closeIconSelector = '.close-nav',
  lightAssets = {},
  darkAssets = {},
}) {
  const header = document.querySelector(headerSelector);
  const hamburger = document.querySelector(hamburgerSelector);
  const mobileNav = document.querySelector(mobileNavSelector);
  const navLinks = header.querySelectorAll(navLinkSelector);
  const logoImg = header.querySelector(logoSelector);
  const flightIcon = header.querySelector(flightIconSelector);
  const staysIcon = header.querySelector(staysIconSelector);
  const menuIcon = header.querySelector(menuIconSelector);
  const closeIcon = header.querySelector(closeIconSelector);

  const updateNavStyle = () => {
    const isScrolled = window.scrollY > 20;
    const isHamburgerActive = hamburger?.classList.contains('active');

    if (isScrolled || isHamburgerActive) {
      header.classList.add('sticky');
      navLinks.forEach((link) => link.classList.add('links-black'));

      logoImg.src = darkAssets.logo;
      flightIcon.src = darkAssets.flight;
      staysIcon.src = darkAssets.stays;
      menuIcon.src = darkAssets.menu;
      closeIcon.src = darkAssets.close;
    } else {
      header.classList.remove('sticky');
      navLinks.forEach((link) => link.classList.remove('links-black'));

      logoImg.src = lightAssets.logo;
      flightIcon.src = lightAssets.flight;
      staysIcon.src = lightAssets.stays;
      menuIcon.src = lightAssets.menu;
      closeIcon.src = lightAssets.close;
    }
  };

  const toggleMobileNav = () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('show');
    updateNavStyle();
  };

  const closeMobileNav = () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('show');
    updateNavStyle();
  };

  // Events
  window.addEventListener('scroll', updateNavStyle);
  hamburger?.addEventListener('click', toggleMobileNav);
  window.addEventListener('resize', () => {
    if (window.innerWidth > 976) closeMobileNav();
  });

  // Initial run
  updateNavStyle();
}

export function setupMobileNav() {
  // Mobile Navigation
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  const toggleMobileNav = () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('show');
  };

  const closeMobileNav = () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('show');
  };

  hamburger?.addEventListener('click', toggleMobileNav);

  // Close mobile nav if window is resized beyond mobile
  window.addEventListener('resize', () => {
    if (window.innerWidth > 976) closeMobileNav();
  });
}

export function createTabSwitcher({ activeTab, inactiveTab }) {
  let isClicked = false;

  inactiveTab.addEventListener('mouseenter', () => {
    if (!isClicked) {
      inactiveTab.classList.add('active');
      activeTab.classList.remove('active');
    }
  });

  inactiveTab.addEventListener('mouseleave', () => {
    if (!isClicked) {
      activeTab.classList.add('active');
      inactiveTab.classList.remove('active');
    }
  });

  inactiveTab.addEventListener('click', () => {
    inactiveTab.classList.add('active');
    activeTab.classList.remove('active');
    isClicked = true;
  });
}

export function initUserDropdown() {
  const userBtn = document.querySelector('.user-profile-btn');
  const userNav = document.getElementById('userNav');

  if (!userBtn || !userNav) return;

  userBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    userNav.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!userNav.contains(e.target) && !userBtn.contains(e.target)) {
      userNav.classList.remove('show');
    }
  });
}
