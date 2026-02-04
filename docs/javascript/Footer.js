const footer = document.getElementById("footer");

footer.innerHTML = `
<section class="bg-slate-950 pt-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-12 lg:grid-cols-12 lg:items-start">
      <div class="lg:col-span-7">
        <h3 class="text-2xl font-bold text-white">
          Stay Informed
        </h3>

        <p class="mt-3 max-w-xl text-slate-300">
          Sign up to receive insights, updates, and news across consulting,
          technology, healthcare, and government contracting.
        </p>

        <div class="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="#"
            class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
          >
            Subscribe
          </a>

          <div class="flex flex-wrap items-center gap-2 text-slate-300">
            <a
              href="https://www.linkedin.com/company/northmarke"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <i class="fa-brands fa-linkedin-in text-lg"></i>
            </a>

            <a
              href="https://www.patreon.com/Northmarke"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              aria-label="Patreon"
              title="Patreon"
            >
              <i class="fa-brands fa-patreon text-lg"></i>
            </a>

            <a
              href="https://x.com/NorthmarkeGroup"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              aria-label="X (Twitter)"
              title="X"
            >
              <i class="fa-brands fa-x-twitter text-lg"></i>
            </a>

            <a
              href="https://facebook.com/NorthmarkeGroup"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              aria-label="Facebook"
              title="Facebook"
            >
              <i class="fa-brands fa-facebook-f text-lg"></i>
            </a>

            <a
              href="https://www.instagram.com/NorthmarkeGroup"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              aria-label="Instagram"
              title="Instagram"
            >
              <i class="fa-brands fa-instagram text-lg"></i>
            </a>

            <a
              href="https://www.youtube.com/@Northmarke"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              aria-label="YouTube"
              title="YouTube"
            >
              <i class="fa-brands fa-youtube text-lg"></i>
            </a>
          </div>
        </div>

        <div class="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
          <div class="flex items-start gap-4">
            <div>
              <p class="text-sm text-slate-300">
                With decades of combined experience, Northmarke Group delivers secure,
                reliable, and community-focused solutions across Technology,
                Healthcare, Logistics, and Consulting.
              </p>
            </div>
          </div>

          <div class="mt-6">
            <p class="text-sm font-semibold text-white">
              Northmarke Group HQ
            </p>
            <p class="mt-1 text-sm text-slate-300 !leading-normal">
              3375 Ellicott Center Dr<br />
              Ellicott City, MD 21043-9998<br />
              (410) 907-5496 •
              <a
                href="mailto:info@northmarke.com"
                class="font-semibold text-white/90 transition hover:text-white"
              >
                info@northmarke.com
              </a>
            </p>

            <a
              href="contact.html"
              class="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
            >
              <i class="fa-solid fa-paper-plane"></i>
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5">
        <p class="text-sm font-bold uppercase tracking-wider text-slate-300">
          Review Our Latest Insight
        </p>

        <div class="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <span class="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-200">
            Leadership
          </span>

          <p class="mt-4 text-xl font-bold text-white">
            Building a Stronger Future Through
            Effective Leadership
          </p>

          <p class="mt-3 text-sm text-slate-300">
            Practical insights on organizational development, leadership strategy,
            and sustainable growth.
          </p>

          <a
            href="#"
            class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/90"
          >
            Read More
            <i class="fa-solid fa-arrow-right text-xs transition group-hover:translate-x-1"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <footer class="mt-20 border-t border-slate-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 font-medium lg:px-8">
      <div class="flex flex-col items-center justify-center text-center gap-4 py-8 text-sm text-slate-400 sm:flex-row">
        <p>
          © <span id="year"></span> Northmarke Group. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</section>
`;

document.getElementById("year").textContent = new Date().getFullYear();
