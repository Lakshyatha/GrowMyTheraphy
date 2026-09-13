'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  MapPin,
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
                  className="inline-flex items-center gap-1.5 text-[var(--text-heading)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={11} className="opacity-60 group-hover:rotate-180 transition-transform" />}
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 min-w-[240px] bg-[var(--bg-white)] shadow-xl rounded border border-[var(--border-subtle)] py-2 z-50 animate-fadeIn">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2.5 text-[11px] text-[var(--text-heading)] hover:bg-[var(--bg-warm)] hover:text-[var(--accent-primary)] transition-colors normal-case tracking-normal font-normal"
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
          <div className="lg:hidden pt-8">
            {/* Text content first */}
            <div className="px-6 pb-8">
              <p className="eyebrow-text tracking-[0.2em]">{data.hero.eyebrow}</p>
              <h1 id="hero-heading" className="mt-6 text-4xl font-light leading-[1.08]">
                {data.hero.titleLead}{' '}
                <span className="script-accent">{data.hero.titleAccent}</span>
                {data.hero.titleSuffix}
              </h1>
              <p className="mt-6 text-base font-light leading-relaxed text-[var(--text-muted)]">
                {data.hero.description}
              </p>
              <div className="mt-8 flex flex-col items-start gap-3">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="text-action-link border-0 bg-transparent p-0 !underline underline-offset-4"
                >
                  {data.hero.ctaText}
                </button>
              </div>
            </div>

            {/* Two images side by side below text */}
            <div className="flex w-full items-start gap-2 px-3 pb-2">
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
                <h1 id="hero-heading" className="mt-8 text-5xl font-light leading-[1.08] md:text-[3.5rem] lg:text-6xl">
                  {data.hero.titleLead}{' '}
                  <span className="script-accent">{data.hero.titleAccent}</span>
                  {data.hero.titleSuffix}
                </h1>
                <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-[var(--text-muted)] sm:text-lg">
                  {data.hero.description}
                </p>
                <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="text-action-link border-0 bg-transparent p-0 !underline underline-offset-4"
                  >
                    {data.hero.ctaText}
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
          className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[var(--bg-page)]"
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
          className="py-16 md:py-24 bg-[var(--bg-white)]"
          aria-labelledby="services-heading"
        >
          <div className="mx-auto w-full max-w-[1440px] px-[clamp(1.5rem,5vw,6rem)]">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 id="services-heading" className="text-4xl font-light leading-[1.05] md:text-5xl">
                {data.servicesSection.headingLead}{' '}
                <span className="script-accent">{data.servicesSection.headingAccent}</span>
              </h2>
              <p className="text-base text-[var(--text-muted)] leading-relaxed font-light">
                {data.servicesSection.subtitle}
              </p>
            </div>

            {/* 3 Core Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {data.servicesSection.services.map((svc, idx) => (
                <article
                  key={svc.title}
                  className="group flex flex-col overflow-hidden"
                >
                  <div className="img-hover-container aspect-[4/3] bg-stone-200 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ objectPosition: idx === 1 ? 'center 30%' : idx === 2 ? 'center 20%' : 'center center' }}
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between space-y-4 pt-6 sm:pt-8">
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-light text-[var(--text-heading)]">
                        {svc.title}
                      </h3>
                      {svc.subtitle && (
                        <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium">
                          {svc.subtitle}
                        </p>
                      )}
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light pt-1">
                        {svc.description}
                      </p>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: FULL-BLEED INSPIRATIONAL BANNER ── */}
        <section
          className="relative py-24 md:py-32 bg-[var(--bg-dark)] text-[var(--text-light)] overflow-hidden"
          aria-label="Inspirational statement"
        >
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={data.banner.backgroundImage}
              alt="Calm atmospheric ocean horizon at sunset"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[var(--bg-dark-overlay)] backdrop-blur-[1px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-6">
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
              {data.banner.quote}
            </p>
            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-amber-100/90 font-light">
              {data.banner.emphasis}
            </p>

            <div className="pt-6">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="btn-light-banner"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: AREAS OF EXPERTISE ── */}
        <section
          id="expertise"
          className="bg-[var(--bg-white)] py-16 md:py-24"
          aria-labelledby="expertise-heading"
        >
          <div className="mx-auto w-full max-w-[1440px] px-[clamp(1.5rem,5vw,6rem)]">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
              <div className="max-w-sm">
                <span className="eyebrow-text">Clinical Scope</span>
                <h2 id="expertise-heading" className="mt-3 text-4xl font-light sm:text-5xl">
                  {data.expertise.headingLead}{' '}
                  <span className="script-accent">{data.expertise.headingAccent}</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-[var(--text-muted)]">
                  Evidence-based psychological treatment integrating cognitive, somatic, and relational approaches tailored to your goals.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3">
                {data.expertise.groups.map((group) => (
                  <div key={group.title}>
                    <span className="eyebrow-text text-[var(--accent-primary)]">{group.title}</span>
                    <ul className="mt-3 divide-y divide-[var(--border-subtle)]">
                      {group.items.map((item) => (
                        <li key={item}>
                          <div className="flex gap-2 py-3 text-sm leading-snug text-[var(--text-heading)]">
                            <span className="text-[var(--accent-secondary)] font-bold flex-shrink-0" aria-hidden="true">✓</span>
                            <span>{item}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
          </div>
        </section>

        {/* ── SECTION 5: MEET YOUR THERAPIST ── */}
        <section
          id="about"
          className="py-16 md:py-24 bg-[var(--bg-page)]"
          aria-labelledby="meet-therapist-heading"
        >
          <div className="mx-auto w-full max-w-[1440px] px-[clamp(1.5rem,5vw,6rem)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left: Bio text */}
              <div className="lg:col-span-7 space-y-6">
                <span className="eyebrow-text">{data.aboutBio.eyebrow}</span>
                <h2 id="meet-therapist-heading" className="text-3xl sm:text-4xl md:text-5xl font-light">
                  {data.aboutBio.title}
                </h2>
                <p className="text-xs uppercase tracking-widest text-[var(--accent-primary)] font-semibold">
                  {data.aboutBio.credentials}
                </p>
                <div className="space-y-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-light">
                  {data.aboutBio.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <p className="border-l-2 border-[var(--accent-primary)] pl-4 italic text-sm text-[var(--text-heading)] font-serif">
                  {data.aboutBio.quote}
                </p>
                <div className="pt-2">
                  <button onClick={() => setIsBookingOpen(true)} className="btn-primary">
                    <span>Book a Consultation</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* Right: Portrait — full image visible */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="img-hover-container w-full max-w-[380px] rounded-sm border border-[var(--border-subtle)] bg-white p-4 shadow-xl lg:max-w-[420px]">
                  <img
                    src="/images/Dr._Maya_Reynolds.png"
                    alt={data.aboutBio.title}
                    className="w-full object-contain"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION 7: SPECIALTIES ── */}
        <section
          className="bg-[var(--bg-white)] py-16 md:py-24"
          aria-labelledby="specialties-heading"
        >
          <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-[clamp(1.5rem,5vw,6rem)] lg:grid-cols-[minmax(240px,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
            <div className="max-w-sm">
              <h2 id="specialties-heading" className="text-4xl font-light leading-tight sm:text-5xl">
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
                <article key={specialty.title} className="flex flex-col gap-3 border-t border-[var(--border-subtle)] pt-6">
                  <h3 className="text-2xl font-light text-[var(--text-heading)]">{specialty.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-[var(--text-muted)]">
                    {specialty.description}
                  </p>
                  {specialty.approach && (
                    <p className="text-[10px] uppercase tracking-widest text-[var(--accent-primary)] font-semibold mt-1">
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
            className="overflow-hidden bg-[var(--bg-page)] pt-16 pb-10 md:pt-20 md:pb-12"
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
          className="bg-[var(--bg-page)] pt-14 pb-20 md:pt-16 md:pb-24"
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


            <div className="pt-2">
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
