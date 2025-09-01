/**
 * Smooth scroll to an element with the given ID
 * @param {string} elementId - The ID of the element to scroll to (without #)
 * @param {number} offset - Optional offset from the top (default: 80px for fixed header)
 */
export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Handle smooth scroll for anchor links
 * @param {Event} e - The click event
 * @param {string} href - The href attribute (e.g., "#features")
 */
export const handleSmoothScroll = (e, href) => {
  e.preventDefault();
  const elementId = href.replace('#', '');
  smoothScrollTo(elementId);
};
