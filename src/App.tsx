'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';
import { mayaData } from './siteData';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const data = mayaData;

  useEffect(() => {
    document.title = data.seoTitle;
  }, [data.seoTitle]);

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-500">
      {/* ── MAIN SITE HEADER ── */}
      <header className="relative z-40 bg-[var(--bg-page)] transition-colors duration-500">
        <div className="flex h-28 w-full items-center justify-between px-8 lg:px-16">

          {/* Brand Wordmark — no logo, just text like reference */}
          <a
            href="#top"
            className="flex flex-col leading-none group"
            aria-label={`${data.brandName} homepage`}
          >
            <span className="font-serif text-[2.25rem] font-light tracking-tight text-[var(--text-heading)] transition-colors group-hover:text-[var(--accent-primary)]">
              Dr. Maya Reynolds
            </span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">
              Licensed Clinical Psychologist
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.13em]" aria-label="Main Navigation">
            {data.navItems.map((item) => (
              <div
                key={item.label}
                className="relative group py-2"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="inline-flex items-center text-[var(--text-heading)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  {item.label}
                </a>

                {/* Dropdown Menu — blends into page, no box */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 min-w-[180px] bg-[var(--bg-page)] py-3 z-50 animate-fadeIn">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block py-2.5 px-2 text-center text-[10px] uppercase tracking-[0.16em] font-semibold text-[var(--text-heading)] hover:text-[var(--accent-primary)] transition-colors normal-case"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Pill outline CTA — matches reference CONTACT button */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="rounded-full border border-[var(--text-heading)] px-6 py-2.5 text-[11px] uppercase tracking-[0.13em] text-[var(--text-heading)] transition-colors hover:bg-[var(--text-heading)] hover:text-[var(--bg-page)]"
            >
              Book a Consultation
            </button>
          </nav>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[var(--text-heading)] hover:text-[var(--accent-primary)] transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[var(--bg-white)] border-b border-[var(--border-subtle)] px-6 py-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-4">
              {data.navItems.map((item) => (
                <div key={item.label} className="border-b border-stone-100 pb-2">
                  <a
                    href={item.href}
                    onClick={closeMobile}
                    className="block text-[11px] font-semibold tracking-[0.13em] uppercase text-[var(--text-heading)] py-1"
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <div className="pl-4 pt-1 flex flex-col gap-1.5">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={closeMobile}
                          className="text-xs text-[var(--text-muted)] py-1 hover:text-[var(--accent-primary)]"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => {
                    closeMobile();
                    setIsBookingOpen(true);
                  }}
                  className="w-full rounded-full border border-[var(--text-heading)] py-3 text-[11px] uppercase tracking-[0.13em] text-[var(--text-heading)] transition-colors hover:bg-[var(--text-heading)] hover:text-[var(--bg-page)]"
                >
                  Book a Consultation

                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* ── SECTION 0: HERO SECTION ── */}
        <section
          className="overflow-hidden bg-[var(--bg-page)]"
          aria-labelledby="hero-heading"
        >

          {/* ── MOBILE HERO (hidden on lg+) ── */}
          <div className="lg:hidden pt-14">
            {/* Text content */}
            <div className="px-6 pb-10">
              <p className="eyebrow-text tracking-[0.2em]">{data.hero.eyebrow}</p>
              <h1 id="hero-heading" className="mt-8 text-5xl font-light leading-[1.08]">
                {data.hero.titleLead}{' '}
                <span className="script-accent">{data.hero.titleAccent}</span>
                {data.hero.titleSuffix}
              </h1>
              <p className="mt-8 text-base font-light leading-relaxed text-[var(--text-muted)]">
                {data.hero.description}
              </p>
              <div className="mt-10">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="group bg-transparent border-0 p-0 cursor-pointer text-left"
                >
                  <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--text-heading)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {data.hero.ctaText}
                  </span>
                  <div className="mt-1 h-px w-full bg-[var(--text-heading)] group-hover:bg-[var(--accent-primary)] transition-colors" />
                </button>
              </div>
            </div>

            {/* Two images side by side below text */}
            <div className="flex w-full items-start gap-2 px-3 pb-4">
              {/* Left: main image — taller portrait */}
              <div className="flex-[1.4] overflow-hidden rounded-sm" style={{ aspectRatio: '3/4' }}>
                <img
                  src={data.hero.mainImage}
                  alt={data.hero.mainImageAlt}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
              {/* Right: peek image — offset down for asymmetry */}
              <div className="flex-1 mt-10 overflow-hidden rounded-sm" style={{ aspectRatio: '3/4' }}>
                <img
                  src={data.hero.peekImage}
                  alt={data.hero.peekImageAlt}
                  className="h-full w-full object-cover opacity-95"
                  style={{ objectPosition: 'center 18%' }}
                />
              </div>
            </div>
          </div>


          {/* ── DESKTOP HERO (hidden on mobile) ── */}
          <div className="hidden lg:grid w-full grid-cols-1 items-stretch pt-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(420px,1.18fr)_minmax(0,0.32fr)]">
            <div className="aspect-[4/3] w-full overflow-hidden lg:w-[clamp(280px,36vw,560px)] lg:justify-self-start">
              <img
                src={data.hero.mainImage}
                alt={data.hero.mainImageAlt}
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>

            <div className="flex items-center px-6 py-12 sm:px-12 lg:items-end lg:px-[clamp(2rem,5vw,5rem)] lg:py-12">
              <div className="mx-auto w-full max-w-2xl">
                <p className="eyebrow-text tracking-[0.2em]">{data.hero.eyebrow}</p>
                <h1 id="hero-heading" className="mt-8 text-5xl font-light leading-[1.08] md:text-[3.8rem] lg:text-[4.5rem]">
                  {data.hero.titleLead}{' '}
                  <span className="script-accent">{data.hero.titleAccent}</span>
                  {data.hero.titleSuffix}
                </h1>
                <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-[var(--text-muted)] sm:text-xl">
                  {data.hero.description}
                </p>
                <div className="mt-12">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="group bg-transparent border-0 p-0 cursor-pointer text-left"
                  >
                    <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--text-heading)] group-hover:text-[var(--accent-primary)] transition-colors">
                      {data.hero.ctaText}
                    </span>
                    <div className="mt-1 h-px w-full bg-[var(--text-heading)] group-hover:bg-[var(--accent-primary)] transition-colors" />
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden h-[clamp(340px,28vw,480px)] overflow-hidden bg-[var(--bg-warm)] lg:block lg:self-start lg:mt-[clamp(8rem,14vw,12rem)]">
              <img
                src={data.hero.peekImage}
                alt={data.hero.peekImageAlt}
                className="h-full w-full object-cover opacity-90"
                style={{ objectPosition: 'center 18%' }}
              />
            </div>
          </div>

        </section>


        {/* ── SECTION 1: NARRATIVE INTRO ── */}
        <section
          className="py-20 md:py-28 bg-[var(--bg-page)]"
          aria-labelledby="intro-heading"
        >
          <div className="mx-auto w-full max-w-none px-[clamp(1.5rem,5vw,6rem)] lg:pr-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 id="intro-heading" className="text-3xl sm:text-4xl md:text-5xl font-light leading-snug">
                  {data.intro.title}
                </h2>

                <p className="text-lg font-normal text-[var(--text-heading)] leading-relaxed">
                  {data.intro.leadBold}
                </p>

                {/* col1 */}
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {data.intro.col1}
                </p>

                {/* Mobile-only: image between col1 and col2 */}
                <div className="lg:hidden rounded-sm overflow-hidden border border-[var(--border-subtle)] shadow-lg aspect-[16/9]">
                  <img
                    src={data.intro.image}
                    alt={data.intro.imageAlt}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center center' }}
                  />
                </div>

                {/* col2 */}
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {data.intro.col2}
                </p>

                {/* col3 */}
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {data.intro.col3}
                </p>

                <div className="pt-4">
                  <a href="#about" className="text-action-link">
                    <span>Learn more about Dr. Reynolds</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              {/* Desktop-only image on right */}
              <div className="hidden lg:block lg:col-span-5">
                <div className="img-hover-container ml-auto aspect-[4/5] w-full border border-[var(--border-subtle)] bg-stone-200 shadow-lg lg:w-[clamp(280px,30vw,420px)]">
                  <img
                    src={data.intro.image}
                    alt={data.intro.imageAlt}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center center' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── SECTION 2: SERVICES ("Who I Help") ── */}
        <section
          id="services"
          className="py-20 md:py-28 bg-[var(--bg-white)]"
          aria-labelledby="services-heading"
        >
          <div className="mx-auto w-full max-w-[1440px] px-[clamp(1.5rem,5vw,6rem)]">

            {/* Heading — left edge of container */}
            <div className="mb-14 md:mb-20">
              <h2 id="services-heading" className="text-5xl font-light leading-[1.1] md:text-6xl">
                {data.servicesSection.headingLead}{' '}
                <span className="script-accent">{data.servicesSection.headingAccent}</span>
              </h2>
            </div>

            {/* Image grid — indented right relative to heading */}
            <div className="md:pl-[clamp(3rem,6vw,7rem)] grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {data.servicesSection.services.map((svc, idx) => (
                <article
                  key={svc.title}
                  className="group flex flex-col"
                >
                  {/* Portrait image — 4:5 ratio, matches reference */}
                  <div className="overflow-hidden" style={{ aspectRatio: '4/5' }}>
                    <img
                      src={svc.image}
                      alt={svc.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ objectPosition: idx === 0 ? 'center 35%' : idx === 1 ? 'center 30%' : idx === 2 ? 'center 20%' : 'center center' }}
                    />
                  </div>

                  {/* Text below */}
                  <div className="pt-8 space-y-3">
                    <h3 className="text-[1.35rem] font-light text-[var(--accent-primary)] leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-base text-[var(--text-body)] leading-[1.8] font-light">
                      {svc.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>




        {/* ── SECTION 3: FULL-BLEED INSPIRATIONAL BANNER ── */}
        <section
          className="relative bg-[var(--bg-dark)] text-[var(--text-light)] overflow-hidden"
          style={{ minHeight: '560px' }}
          aria-label="Inspirational statement"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={data.banner.backgroundImage}
              alt="Calm atmospheric scene"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient: stronger at bottom-left where text sits, clear at top */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(25,38,34,0.80) 0%, rgba(25,38,34,0.40) 45%, rgba(25,38,34,0.10) 100%)' }} />
          </div>

          {/* Text — bottom-left, generous padding, spreads wide */}
          <div className="relative z-10 flex items-end h-full" style={{ minHeight: '560px' }}>
            <div className="px-[clamp(1.5rem,7vw,8rem)] py-16 md:py-24 max-w-[68%]">
              <p className="font-serif text-2xl sm:text-3xl md:text-[2.6rem] font-light leading-snug text-white/95">
                {data.banner.quote}{' '}
                <em className="font-serif italic text-amber-100/90">{data.banner.emphasis}</em>
              </p>
            </div>
          </div>
        </section>



        {/* ── SECTION 4: AREAS OF EXPERTISE ── */}
        <section
          id="expertise"
          className="bg-[var(--bg-white)] py-20 md:py-28"
          aria-labelledby="expertise-heading"
        >
          <div className="mx-auto w-full max-w-[1440px] px-[clamp(1.5rem,5vw,6rem)]">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(220px,0.55fr)_minmax(0,1.45fr)] lg:gap-20">

              {/* LEFT: Stacked heading only */}
              <div>
                <h2 id="expertise-heading" className="text-5xl font-light leading-tight sm:text-6xl">
                  {data.expertise.headingLead}
                </h2>
                <div className="script-accent text-5xl sm:text-6xl mt-1">{data.expertise.headingAccent}</div>
              </div>

              {/* RIGHT: Flat 2-column list with dividers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
                {/* Column 1 — first half of all items */}
                <ul>
                  {data.expertise.groups.flatMap(g => g.items).filter((_, i, arr) => i < Math.ceil(arr.length / 2)).map((item) => (
                    <li key={item} className="border-b border-[var(--border-subtle)]">
                      <div className="py-4 text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--text-heading)]">
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
                {/* Column 2 — second half */}
                <ul>
                  {data.expertise.groups.flatMap(g => g.items).filter((_, i, arr) => i >= Math.ceil(arr.length / 2)).map((item) => (
                    <li key={item} className="border-b border-[var(--border-subtle)]">
                      <div className="py-4 text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--text-heading)]">
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>


        {/* ── SECTION 5: MEET YOUR THERAPIST ── */}
        <section
          id="about"
          className="py-20 md:py-28 bg-[var(--bg-page)]"
          aria-labelledby="meet-therapist-heading"
        >
          <div className="mx-auto w-full max-w-[1440px] px-[clamp(1.5rem,5vw,6rem)]">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.65fr)_minmax(0,1fr)] gap-12 lg:gap-20 items-start">

              {/* LEFT: Portrait with white frame */}
              <div className="w-full max-w-[400px] mx-auto lg:mx-0 bg-white p-4 shadow-md">
                <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img
                    src="/images/Dr._Maya_Reynolds.png"
                    alt={data.aboutBio.title}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>

              {/* RIGHT: Name → credentials → divider → statement → paragraphs */}
              <div className="space-y-5 pt-0 lg:pt-8">

                {/* Large name */}
                <h2 id="meet-therapist-heading" className="text-5xl font-light leading-tight md:text-6xl text-[var(--text-heading)]">
                  {data.aboutBio.title}
                </h2>

                {/* Credentials small caps */}
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)] font-semibold">
                  {data.aboutBio.credentials}
                </p>

                {/* Horizontal divider */}
                <hr className="border-t border-[var(--border-subtle)]" />

                {/* Large featured statement */}
                <p className="text-3xl sm:text-4xl font-light leading-snug text-[var(--text-heading)]">
                  {data.aboutBio.quote}
                </p>

                {/* Body paragraphs */}
                <div className="space-y-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-light">
                  {data.aboutBio.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION 7: SPECIALTIES ── */}
        <section
          id="specialties"
          className="bg-[var(--bg-white)] py-20 md:py-28"
          aria-labelledby="specialties-heading"
        >
          <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-[clamp(1.5rem,5vw,6rem)] lg:grid-cols-[minmax(240px,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
            <div className="max-w-sm">
              <h2 id="specialties-heading" className="text-5xl font-light leading-tight sm:text-6xl">
                {data.specialties.headingLead}{' '}
                <span className="script-accent">{data.specialties.headingAccent}</span>{' '}
                {data.specialties.headingSuffix}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--text-muted)]">
                Focused, evidence-based support for adults navigating anxiety, trauma, EMDR, and burnout with care and intention.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
              {data.specialties.cards.map((specialty) => (
                <article key={specialty.title} className="flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-7">
                  <h3 className="text-2xl font-light text-[var(--text-heading)]">{specialty.title}</h3>
                  <p className="text-base font-light leading-relaxed text-[var(--text-muted)]">
                    {specialty.description}
                  </p>
                  {specialty.approach && (
                    <p className="text-[10px] uppercase tracking-widest text-[var(--accent-primary)] font-semibold">
                      {specialty.approach}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 8: SANTA MONICA OFFICE ── */}
        {data.officeSection && (
          <section
            id="office"
            className="overflow-hidden bg-[var(--bg-page)] py-20 md:py-28"
            aria-labelledby="office-heading"
          >

            {/* ── MOBILE OFFICE (hidden on lg+) ── */}
            <div className="lg:hidden">
              {/* Text content first */}
              <div className="px-6 pb-8">
                <span className="eyebrow-text">{data.officeSection.eyebrow}</span>
                <h2 id="office-heading" className="mt-6 text-4xl font-light leading-tight">
                  {data.officeSection.headingLead}{' '}
                  <span className="script-accent">{data.officeSection.headingAccent}</span>
                  {data.officeSection.headingSuffix}
                </h2>
                <p className="mt-6 text-base font-light leading-relaxed text-[var(--text-muted)]">
                  {data.officeSection.description}
                </p>
              </div>

              {/* Two office images side by side */}
              <div className="flex w-full items-start gap-2 px-3">
                {/* Left: office-1 — taller */}
                <div className="flex-[1.4] overflow-hidden rounded-sm" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={data.officeSection.images[0].src}
                    alt={data.officeSection.images[0].alt}
                    className="h-full w-full object-cover object-center opacity-90"
                  />
                </div>
                {/* Right: office-2 — offset down */}
                <div className="flex-1 mt-10 overflow-hidden rounded-sm" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={data.officeSection.images[1].src}
                    alt={data.officeSection.images[1].alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* ── DESKTOP OFFICE (hidden on mobile) ── */}
            <div className="hidden lg:grid w-full max-w-none grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-[clamp(1.5rem,4vw,3.5rem)]">
              <div className="hidden aspect-[3/4] w-full max-w-[240px] overflow-hidden lg:block lg:w-[clamp(180px,16vw,240px)] lg:self-end">
                <img
                  src={data.officeSection.images[0].src}
                  alt={data.officeSection.images[0].alt}
                  className="h-full w-full object-cover object-center opacity-90"
                />
              </div>

              <div className="mx-auto w-full max-w-xl px-4">
                <span className="eyebrow-text">{data.officeSection.eyebrow}</span>
                <h2 id="office-heading" className="mt-8 text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
                  {data.officeSection.headingLead}{' '}
                  <span className="script-accent">{data.officeSection.headingAccent}</span>
                  {data.officeSection.headingSuffix}
                </h2>
                <p className="mt-8 max-w-lg text-base font-light leading-relaxed text-[var(--text-muted)]">
                  {data.officeSection.description}
                </p>
              </div>

              <div className="group h-[clamp(435px,34vw,560px)] w-full overflow-hidden lg:max-w-[560px] lg:justify-self-end">
                <img
                  src={data.officeSection.images[1].src}
                  alt={data.officeSection.images[1].alt}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </section>
        )}


        {/* ── SECTION 9: SCHEDULE A CONSULTATION ── */}
        <section
          id="contact"
          className="bg-[var(--bg-page)] py-20 md:py-28"
          aria-labelledby="schedule-heading"
        >
          <div className="mx-auto max-w-3xl px-6 text-center space-y-6 lg:px-12">
            <span className="eyebrow-text">{data.schedule.eyebrow}</span>
            <h2 id="schedule-heading" className="text-3xl sm:text-4xl md:text-5xl font-light">
              {data.schedule.headingLead}{' '}
              <span className="script-accent">{data.schedule.headingAccent}</span>
              {data.schedule.headingSuffix}
            </h2>

            <p className="text-base text-[var(--text-muted)] leading-relaxed font-light max-w-lg mx-auto">
              {data.schedule.body}
            </p>


            <div className="pt-6">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="btn-primary"
              >
                <span>{data.schedule.buttonText}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* ── SECTION 11: COMPREHENSIVE 4-COLUMN FOOTER ── */}
      <footer className="bg-[var(--bg-white)] pt-16 pb-0 transition-colors duration-500">
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(1.5rem,5vw,6rem)]">
          <div className="grid grid-cols-1 gap-10 pb-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
            {/* Col 1: Brand & Bio */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <h4 className="font-serif text-[1.6rem] font-light text-[var(--text-heading)]">
                  Dr. Maya Reynolds
                </h4>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">
                  Licensed Clinical Psychologist
                </p>
              </div>
              <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                {data.footer.intro}
              </p>
            </div>

            {/* Col 2: Navigate */}
            <div className="lg:col-span-2 space-y-4 min-w-0">
              <span className="eyebrow-text block mb-4">Navigate</span>
              <ul className="space-y-3 text-sm">
                {data.footer.navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors whitespace-nowrap"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact & Location */}
            <div className="lg:col-span-3 space-y-4 min-w-0">
              <span className="eyebrow-text block mb-4">Contact &amp; Location</span>
              <ul className="space-y-3 text-sm text-[var(--text-muted)] font-light">
                {data.footer.contactInfo.map((info, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {info}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Practice details */}
            <div className="lg:col-span-3 space-y-4 min-w-0">
              <span className="eyebrow-text block mb-4">Practice Details</span>
              <ul className="space-y-3 text-sm text-[var(--text-muted)] font-light">
                {data.footer.practiceDetails.map((detail, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-end py-5">
            <a href="#top" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors">
              Back to top ↑
            </a>
          </div>

          {/* ── SECTION 12: LEGAL BOTTOM BAR ── */}
        </div>
        <div className="mt-8 w-full bg-[var(--bg-dark)] px-[clamp(1.5rem,5vw,6rem)] py-5">
          <div className="flex w-full items-center text-xs text-[var(--text-light)]">
            <p>{data.footer.legal}</p>
          </div>
        </div>
      </footer>

      {/* Interactive Consultation / Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        therapistName={data.brandName}
        address={`${data.address.city}, ${data.address.state}`}
      />
    </div>
  );
}

export default App;
