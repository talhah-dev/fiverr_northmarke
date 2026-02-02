const footer = document.getElementById('footer')
footer.innerHTML = `
<section class="bg-slate-50 pt-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-12 lg:grid-cols-12 lg:items-start">
      <div class="lg:col-span-7">
        <h3 class="text-2xl font-bold text-slate-900">
          Stay Informed
        </h3>

        <p class="mt-3 max-w-xl text-slate-600">
          Sign up to receive insights, updates, and news across consulting,
          technology, healthcare, and government contracting.
        </p>

        <div class="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="#"
            class="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Subscribe
          </a>

          <div class="flex items-center gap-4 text-slate-700">
            <a href="#" class="text-xl hover:text-slate-900" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" class="text-xl hover:text-slate-900" aria-label="X">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <div class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="flex items-start gap-4">
            <div>
              <p class="text-sm text-slate-600">
                With decades of combined experience, Northmarke Group delivers secure,
                reliable, and community-focused solutions across Technology,
                Healthcare, Logistics, and Consulting.
              </p>
            </div>
          </div>

          <div class="mt-6">
            <p class="text-sm font-semibold text-slate-900">
              Northmarke Group HQ
            </p>
            <p class="mt-1 text-sm text-slate-600 !leading-normal">
              3375 Ellicott Center Dr<br />
              Ellicott City, MD 21043-9998<br />
              (410) 907-5496 • <a href="mailto:info@northmarke.com" class="hover:text-slate-900">info@northmarke.com</a>
            </p>


            <a
              href="contact.html"
              class="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <i class="fa-solid fa-paper-plane"></i>
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5">
        <p class="text-sm font-bold uppercase tracking-wider text-slate-700">
          Review Our Latest Insight
        </p>

        <div class="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <span class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            Leadership
          </span>

          <p class="mt-4 text-xl font-bold text-slate-900">
            Building a Stronger Future Through
            Effective Leadership
          </p>

          <p class="mt-3 text-sm text-slate-600">
            Practical insights on organizational development, leadership strategy,
            and sustainable growth.
          </p>

          <a
            href="#"
            class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
          >
            Read More
            <i class="fa-solid fa-arrow-right text-xs transition group-hover:translate-x-1"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <footer class="mt-20 border-t border-slate-200">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 font-medium lg:px-8">
      <div class="flex flex-col items-center justify-center text-center gap-4 py-8 text-sm text-slate-600 sm:flex-row">
        <p>
          © <span id="year"></span> Northmarke Group. All rights reserved.
        </p>
      </div>
    </div>
  </footer>

  </section>
  
  `
document.getElementById("year").textContent = new Date().getFullYear();