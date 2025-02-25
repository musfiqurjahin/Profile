document.addEventListener("DOMContentLoaded", () => {
  // Select all elements that have an 'href' attribute (links, tab buttons, menu buttons, etc.)
  const clickableElements = document.querySelectorAll('[href]');
  
  clickableElements.forEach(el => {
    // Store the original href if it exists; if not, add pointer style inline.
    const originalHref = el.getAttribute("href");
    if (originalHref) {
      el.dataset.originalHref = originalHref;
    } else {
      el.style.cursor = "pointer"; // Else branch: add pointer style if no href exists.
    }
    
    // On mouse enter, remove the href to disable link preview.
    el.addEventListener("mouseenter", () => {
      if (el.hasAttribute("href")) {
        el.removeAttribute("href");
      }
    });
    
    // On mouse leave, restore the original href if it was stored.
    el.addEventListener("mouseleave", () => {
      if (el.dataset.originalHref && !el.hasAttribute("href")) {
        el.setAttribute("href", el.dataset.originalHref);
      }
    });
    
    // Optional: Ensure clicking navigates to the intended URL.
    el.addEventListener("click", () => {
      if (el.dataset.originalHref) {
        window.location.href = el.dataset.originalHref;
      }
    });
  });
});
