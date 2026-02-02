const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
  <nav class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="flex h-16 md:h-20 items-center justify-between">
      <a href="index.html" class="flex items-center gap-3">
        <img src="assets/northmarke-logo.jpg" class="h-10 md:h-12 w-auto" alt="Northmarke Group">
      </a>

      <div class="hidden lg:flex items-center gap-8">
        <a href="about.html" class="text-sm font-semibold text-slate-700 hover:text-slate-900">About</a>
        <a href="services.html" class="text-sm font-semibold text-slate-700 hover:text-slate-900">Services</a>
        <a href="impact.html" class="text-sm font-semibold text-slate-700 hover:text-slate-900">Impact</a>
        <a href="contact.html" class="text-sm font-semibold text-slate-700 hover:text-slate-900">Contact</a>
      </div>

      <div class="hidden lg:flex items-center gap-3">
        <a href="contact.html"
          class="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20">
          Get in touch
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      <button id="navToggle" type="button"
        class="lg:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
        aria-controls="mobileNav" aria-expanded="false">
        <i id="navOpenIcon" class="fa-solid fa-bars"></i>
        <i id="navCloseIcon" class="fa-solid fa-xmark hidden"></i>
      </button>
    </div>

    <div id="mobileNav"
      class="lg:hidden overflow-hidden max-h-0 opacity-0 pointer-events-none transition-all duration-300 ease-in-out">
      <div class="pb-6 pt-2">
        <div class="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <a href="about.html"
            class="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            <span class="flex items-center gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900/10 text-slate-900">
                <i class="fa-solid fa-building"></i>
              </span>
              About
            </span>
            <i class="fa-solid fa-angle-right text-slate-400"></i>
          </a>

          <a href="services.html"
            class="mt-1 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            <span class="flex items-center gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900/10 text-slate-900">
                <i class="fa-solid fa-grid-2"></i>
              </span>
              Services
            </span>
            <i class="fa-solid fa-angle-right text-slate-400"></i>
          </a>

          <a href="impact.html"
            class="mt-1 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            <span class="flex items-center gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900/10 text-slate-900">
                <i class="fa-solid fa-chart-line"></i>
              </span>
              Impact
            </span>
            <i class="fa-solid fa-angle-right text-slate-400"></i>
          </a>

          <a href="contact.html"
            class="mt-1 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            <span class="flex items-center gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900/10 text-slate-900">
                <i class="fa-solid fa-paper-plane"></i>
              </span>
              Contact
            </span>
            <i class="fa-solid fa-angle-right text-slate-400"></i>
          </a>

          <div class="mt-3">
            <a href="contact.html"
              class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Get in touch
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
`;

const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
const navOpenIcon = document.getElementById("navOpenIcon");
const navCloseIcon = document.getElementById("navCloseIcon");

function setIcons(isOpen) {
  if (isOpen) {
    navOpenIcon.classList.add("hidden");
    navCloseIcon.classList.remove("hidden");
  } else {
    navCloseIcon.classList.add("hidden");
    navOpenIcon.classList.remove("hidden");
  }
}

function openMobileNav() {
  mobileNav.classList.remove("max-h-0", "opacity-0", "pointer-events-none");
  mobileNav.classList.add("max-h-[520px]", "opacity-100");
  navToggle.setAttribute("aria-expanded", "true");
  setIcons(true);
}

function closeMobileNav() {
  mobileNav.classList.add("max-h-0", "opacity-0", "pointer-events-none");
  mobileNav.classList.remove("max-h-[520px]", "opacity-100");
  navToggle.setAttribute("aria-expanded", "false");
  setIcons(false);
}

navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) closeMobileNav();
  else openMobileNav();
});

document.addEventListener("click", (e) => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  if (!isOpen) return;

  const clickedInside = mobileNav.contains(e.target) || navToggle.contains(e.target);
  if (!clickedInside) closeMobileNav();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") closeMobileNav();
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) closeMobileNav();
});
