/**
 * Buroq Transport - Main Script
 * Modular, vanilla JavaScript
 */

(function () {
  'use strict';

  // ============================================================
  // CONFIGURATION
  // ============================================================
  const CONFIG = {
    whatsappNumber: '6281122334455', // Ganti dengan nomor WhatsApp asli
    scrollOffset: 100,               // Offset untuk active nav
    revealThreshold: 0.15,           // Threshold untuk scroll reveal
  };

  // ============================================================
  // UTILITIES
  // ============================================================
  function $(selector, parent = document) {
    return parent.querySelector(selector);
  }

  function $$(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
  }

  // ============================================================
  // NAVBAR - Sticky & Glassmorphism
  // ============================================================
  function initNavbar() {
    const navbar = $('#navbar');
    if (!navbar) return;

    let lastScroll = 0;

    function onScroll() {
      const currentScroll = window.scrollY;

      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial check
  }

  // ============================================================
  // MOBILE MENU
  // ============================================================
  function initMobileMenu() {
    const hamburgerBtn = $('#hamburgerBtn');
    if (!hamburgerBtn) return;

    // Create mobile panel
    const panel = document.createElement('div');
    panel.className = 'navbar__mobile-panel';
    panel.id = 'mobilePanel';
    panel.innerHTML = `
      <div class="navbar__mobile-header">
        <a href="#beranda" class="navbar__logo">
          <span class="navbar__logo-text">Buroq Transport</span>
        </a>
        <button class="navbar__mobile-close" id="mobileClose" aria-label="Tutup menu">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      <a href="#beranda" class="navbar__mobile-link navbar__mobile-link--active" data-mobile-nav>Beranda</a>
      <a href="#tentang" class="navbar__mobile-link" data-mobile-nav>Tentang Kami</a>
      <a href="#layanan" class="navbar__mobile-link" data-mobile-nav>Layanan</a>
      <a href="#armada" class="navbar__mobile-link" data-mobile-nav>Armada</a>
      <a href="#kontak" class="navbar__mobile-link" data-mobile-nav>Kontak</a>
      <a href="https://wa.me/${CONFIG.whatsappNumber}?text=Halo%20Buroq%20Transport%2C%20saya%20ingin%20menyewa%20mobil." class="navbar__mobile-cta" target="_blank" rel="noopener">Pesan Sekarang</a>
    `;

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'navbar__mobile-overlay';
    overlay.id = 'mobileOverlay';

    document.body.appendChild(panel);
    document.body.appendChild(overlay);

    const closeBtn = $('#mobileClose');

    function openMenu() {
      panel.classList.add('active');
      overlay.classList.add('active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      panel.classList.remove('active');
      overlay.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    hamburgerBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Close on link click
    $$('[data-mobile-nav]', panel).forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // ============================================================
  // DESKTOP DROPDOWN NAVIGATION
  // ============================================================
  function initDropdowns() {
    const dropdowns = $$('[data-dropdown]');

    dropdowns.forEach(function (dropdown) {
      const toggle = $('[data-dropdown-toggle]', dropdown);
      const menu = $('.navbar__dropdown-menu', dropdown);

      if (!toggle || !menu) return;

      // Click to toggle
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = dropdown.classList.contains('open');

        // Close all other dropdowns
        dropdowns.forEach(function (d) {
          d.classList.remove('open');
          const t = $('[data-dropdown-toggle]', d);
          if (t) t.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          dropdown.classList.add('open');
          toggle.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', function () {
      dropdowns.forEach(function (d) {
        d.classList.remove('open');
        const t = $('[data-dropdown-toggle]', d);
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdowns.forEach(function (d) {
          d.classList.remove('open');
          const t = $('[data-dropdown-toggle]', d);
          if (t) t.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  // ============================================================
  // SMOOTH SCROLL
  // ============================================================
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#' || targetId.charAt(0) !== '#') return;

        const target = $(targetId);
        if (!target) return;

        e.preventDefault();
        const offset = 90; // navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: top,
          behavior: 'smooth',
        });
      });
    });
  }

  // ============================================================
  // ACTIVE NAVIGATION STATE
  // ============================================================
  function initActiveNav() {
    const sections = $$('section[id]');
    const navLinks = $$('[data-nav]');
    const mobileLinks = $$('[data-mobile-nav]');

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');

            // Desktop nav
            navLinks.forEach(function (link) {
              link.classList.remove('navbar__link--active');
              if (link.getAttribute('href') === '#' + id) {
                link.classList.add('navbar__link--active');
              }
            });

            // Mobile nav
            mobileLinks.forEach(function (link) {
              link.classList.remove('navbar__mobile-link--active');
              if (link.getAttribute('href') === '#' + id) {
                link.classList.add('navbar__mobile-link--active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // ============================================================
  // ACCORDION (Routes + FAQ)
  // ============================================================
  function initAccordions() {
    const accordions = $$('[data-accordion]');

    accordions.forEach(function (accordion) {
      const trigger = $('[data-accordion-trigger]', accordion);
      const content = $('[data-accordion-content]', accordion);
      const icon = $('.accordion__icon', accordion);

      if (!trigger || !content) return;

      trigger.addEventListener('click', function () {
        const isOpen = accordion.classList.contains('is-open');
        const group = accordion.getAttribute('data-accordion-group');

        // Close all in same group (accordion behavior)
        if (!isOpen && group) {
          $$('[data-accordion-group="' + group + '"]').forEach(function (acc) {
            const c = $('[data-accordion-content]', acc);
            const t = $('[data-accordion-trigger]', acc);
            if (c) {
              c.classList.remove('is-open');
              c.style.maxHeight = '0';
            }
            acc.classList.remove('is-open');
            if (t) t.setAttribute('aria-expanded', 'false');
          });
        }

        // Toggle current
        if (isOpen) {
          content.classList.remove('is-open');
          content.style.maxHeight = '0';
          accordion.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          content.classList.add('is-open');
          content.style.maxHeight = content.scrollHeight + 'px';
          accordion.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Open default accordions
    $$('[data-accordion-default="true"]').forEach(function (accordion) {
      const trigger = $('[data-accordion-trigger]', accordion);
      if (trigger) trigger.click();
    });
  }

  // ============================================================
  // WHATSAPP INTEGRATION
  // ============================================================
  function initWhatsApp() {
    $$('[data-whatsapp]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const carName = this.getAttribute('data-car') || 'mobil';
        const message = encodeURIComponent(
          'Hallo Buroq Transport, saya tertarik menyewa ' +
            carName +
            '. Mohon informasi ketersediaannya.'
        );
        window.open(
          'https://wa.me/' + CONFIG.whatsappNumber + '?text=' + message,
          '_blank'
        );
      });
    });
  }

  // ============================================================
  // SCROLL REVEAL
  // ============================================================
  function initScrollReveal() {
    const reveals = $$('.reveal');
    if (reveals.length === 0) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      reveals.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: CONFIG.revealThreshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ============================================================
  // STAR RATING
  // ============================================================
  function initStarRatings() {
    $$('[data-rating]').forEach(function (container) {
      const rating = parseInt(container.getAttribute('data-rating'), 10) || 5;
      container.innerHTML = '';

      for (let i = 0; i < rating; i++) {
        const star = document.createElement('span');
        star.className = 'material-symbols-outlined star';
        star.textContent = 'star';
        star.setAttribute('aria-hidden', 'true');
        container.appendChild(star);
      }

      // Screen reader text
      const srText = document.createElement('span');
      srText.className = 'sr-only';
      srText.textContent = rating + ' dari 5 bintang';
      container.appendChild(srText);
    });
  }

  // ============================================================
  // HERO - Entrance Animation & Mouse Parallax
  // ============================================================
  function initHero() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Entrance animation on page load
    requestAnimationFrame(function () {
      hero.classList.add('hero--loaded');
    });

    // Mouse parallax (desktop only)
    if (window.matchMedia('(min-width: 768px)').matches) {
      const bgImage = hero.querySelector('[data-hero-bg]');
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion || !bgImage) return;

      let targetX = 0;
      let targetY = 0;
      let currentX = 0;
      let currentY = 0;
      let rafId = null;

      hero.addEventListener('mousemove', function (e) {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetX = x * 6;
        targetY = y * 4;
      });

      hero.addEventListener('mouseleave', function () {
        targetX = 0;
        targetY = 0;
      });

      function animate() {
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;
        bgImage.style.transform =
          'translate(' + currentX + 'px, ' + currentY + 'px) scale(1.03)';
        rafId = requestAnimationFrame(animate);
      }

      animate();
    }
  }

  // ============================================================
  // SERVICE CARDS - Expand/Collapse Interaction
  // ============================================================
  function initServiceCards() {
    const cards = $$('[data-service]');
    if (cards.length === 0) return;

    const serviceMessages = {
      airport: 'Hallo Buroq Transport, saya tertarik dengan layanan Airport Transfer. Mohon informasi lebih lanjut mengenai paket dan ketersediaannya.',
      wisata: 'Hallo Buroq Transport, saya tertarik dengan layanan Wisata & Liburan. Mohon informasi lebih lanjut mengenai paket dan ketersediaannya.',
      business: 'Hallo Buroq Transport, saya tertarik dengan layanan Business Trip. Mohon informasi lebih lanjut mengenai paket dan ketersediaannya.',
      family: 'Hallo Buroq Transport, saya tertarik dengan layanan Family Trip. Mohon informasi lebih lanjut mengenai paket dan ketersediaannya.',
    };

    cards.forEach(function (card) {
      var serviceKey = card.getAttribute('data-service');
      var waBtn = $('.service-card__wa', card);

      // Card click handler
      card.addEventListener('click', function (e) {
        // Don't toggle if clicking the WhatsApp button
        if (waBtn && waBtn.contains(e.target)) return;

        var isExpanded = card.classList.contains('is-expanded');

        // Collapse all other cards
        cards.forEach(function (otherCard) {
          if (otherCard !== card) {
            otherCard.classList.remove('is-expanded');
          }
        });

        // Toggle current card
        if (isExpanded) {
          card.classList.remove('is-expanded');
        } else {
          card.classList.add('is-expanded');
        }
      });

      // WhatsApp CTA - set real link so it opens WhatsApp only (no duplicate tab)
      if (waBtn) {
        waBtn.setAttribute(
          'href',
          'https://wa.me/' +
            CONFIG.whatsappNumber +
            '?text=' +
            encodeURIComponent(serviceMessages[serviceKey] || 'Hallo Buroq Transport, saya tertarik dengan layanan Anda.')
        );
        waBtn.addEventListener('click', function (e) {
          e.stopPropagation();
        });
      }
    });
  }

  // ============================================================
  // FOOTER YEAR
  // ============================================================
  function initFooterYear() {
    var yearEl = document.getElementById('footerYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    initNavbar();
    initMobileMenu();
    initDropdowns();
    initSmoothScroll();
    initActiveNav();
    initAccordions();
    initServiceCards();
    initWhatsApp();
    initScrollReveal();
    initStarRatings();
    initHero();
    initFooterYear();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
