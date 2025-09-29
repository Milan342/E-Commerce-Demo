(() => {
  "use strict";

  // Form Validation
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

  // Smooth Scroll to Top Button
  const createScrollTopButton = () => {
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = "scroll-top";
    scrollTopBtn.setAttribute("aria-label", "Scroll to top");
    document.body.appendChild(scrollTopBtn);

    // Show/hide button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    });

    // Scroll to top when clicked
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  // Initialize scroll to top button
  createScrollTopButton();

  // Enhanced Filter Functionality
  const initializeFilters = () => {
    const filters = document.querySelectorAll(".filter");
    const filtersContainer = document.getElementById("filters");

    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        // Remove active class from all filters
        filters.forEach((f) => f.classList.remove("active"));
        // Add active class to clicked filter
        filter.classList.add("active");

        // Add subtle animation
        filter.style.transform = "scale(0.95)";
        setTimeout(() => {
          filter.style.transform = "";
        }, 150);
      });
    });

    // Handle scroll indicator visibility on mobile
    if (filtersContainer && window.innerWidth <= 768) {
      const updateScrollIndicator = () => {
        const isScrollable =
          filtersContainer.scrollWidth > filtersContainer.clientWidth;
        const isAtEnd =
          filtersContainer.scrollLeft >=
          filtersContainer.scrollWidth - filtersContainer.clientWidth - 10;

        const indicator = document.querySelector("#filters::before");
        if (isScrollable && !isAtEnd) {
          filtersContainer.style.setProperty("--show-scroll-indicator", "1");
        } else {
          filtersContainer.style.setProperty("--show-scroll-indicator", "0");
        }
      };

      filtersContainer.addEventListener("scroll", updateScrollIndicator);
      window.addEventListener("resize", updateScrollIndicator);
      setTimeout(updateScrollIndicator, 100);
    }
  };

  // Card Hover Effects
  const initializeCardEffects = () => {
    const cards = document.querySelectorAll(".listing-card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  };

  // Loading Animation for Cards
  const animateCards = () => {
    const cards = document.querySelectorAll(".listing-card");
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  };

  // Tax Toggle Enhancement
  const initializeTaxToggle = () => {
    const taxSwitch = document.getElementById("flexSwitchCheckDefault");
    if (taxSwitch) {
      taxSwitch.addEventListener("change", () => {
        const taxInfo = document.getElementsByClassName("tax-info");
        for (let info of taxInfo) {
          if (taxSwitch.checked) {
            info.style.display = "inline";
            info.style.opacity = "0";
            setTimeout(() => {
              info.style.opacity = "1";
              info.style.transition = "opacity 0.3s ease";
            }, 50);
          } else {
            info.style.opacity = "0";
            setTimeout(() => {
              info.style.display = "none";
            }, 300);
          }
        }
      });
    }
  };

  // Image Lazy Loading
  const initializeLazyLoading = () => {
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  };

  // Search Enhancement
  const initializeSearch = () => {
    const searchInput = document.querySelector(".search-input");
    if (searchInput) {
      let searchTimeout;
      searchInput.addEventListener("input", (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          const searchTerm = e.target.value.toLowerCase();
          const cards = document.querySelectorAll(".listing-card");

          cards.forEach((card) => {
            const title = card.querySelector(".card-text b");
            const isVisible =
              title && title.textContent.toLowerCase().includes(searchTerm);
            card.style.display = isVisible ? "block" : "none";

            if (isVisible) {
              card.style.animation = "fadeInUp 0.3s ease-out";
            }
          });
        }, 300);
      });
    }
  };

  // Navbar Scroll Effect
  const initializeNavbarScroll = () => {
    const navbar = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = "translateY(-100%)";
      } else {
        navbar.style.transform = "translateY(0)";
      }

      if (currentScrollY > 50) {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        navbar.style.backdropFilter = "blur(10px)";
      } else {
        navbar.style.backgroundColor = "var(--background-white)";
        navbar.style.backdropFilter = "none";
      }

      lastScrollY = currentScrollY;
    });
  };

  // Initialize all features when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    initializeFilters();
    initializeCardEffects();
    animateCards();
    initializeTaxToggle();
    initializeLazyLoading();
    initializeSearch();
    initializeNavbarScroll();
  });

  // Performance optimization - debounce resize events
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Handle window resize
  window.addEventListener(
    "resize",
    debounce(() => {
      // Reinitialize components that depend on viewport size
      initializeCardEffects();
    }, 250)
  );
})();

// Global utility functions
window.showNotification = (message, type = "success") => {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === "success" ? "#28a745" : "#dc3545"};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
};

// Add CSS for notifications
const style = document.createElement("style");
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
