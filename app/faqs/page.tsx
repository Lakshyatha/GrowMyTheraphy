'use client';

import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { mayaData } from '../../src/siteData';

export default function FaqsPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-body)]">
      <header className="relative z-40 bg-[var(--bg-page)]">
        <div className="mx-auto flex h-24 w-full max-w-[1440px] items-center justify-between px-[clamp(1.5rem,5vw,6rem)]">
          <a href="/" className="flex flex-col text-decoration-none" aria-label="Dr. Maya Reynolds homepage">
            <span className="font-serif text-2xl font-light text-[var(--text-heading)] sm:text-3xl">Dr. Maya Reynolds</span>
            <span className="eyebrow-text mt-0.5 text-[8px] tracking-[0.16em]">Licensed Clinical Psychologist</span>
          </a>

          <nav className="hidden items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.14em] xl:flex" aria-label="Main Navigation">
            <a href="/#about" className="text-[var(--text-heading)] transition-colors hover:text-[var(--accent-primary)]">About</a>
            <a href="/#services" className="text-[var(--text-heading)] transition-colors hover:text-[var(--accent-primary)]">Services</a>
            <a href="/#expertise" className="text-[var(--text-heading)] transition-colors hover:text-[var(--accent-primary)]">Specialties</a>
            <a href="/#office" className="text-[var(--text-heading)] transition-colors hover:text-[var(--accent-primary)]">Office</a>
            <a href="/faqs" className="text-[var(--accent-primary)]">FAQs</a>
            <a href="/#contact" className="text-[var(--text-heading)] transition-colors hover:text-[var(--accent-primary)]">Contact</a>
            <a href="/#contact" className="btn-primary ml-1 !px-4 !py-2.5 text-[10px]">Book a Consultation</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1440px] px-[clamp(1.5rem,5vw,6rem)] py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
          <div className="max-w-sm">
            <span className="eyebrow-text">Clarifying Details</span>
            <h1 className="mt-3 text-4xl font-light text-[var(--text-heading)] sm:text-5xl">Questions?</h1>
            <p className="mt-6 text-base leading-relaxed text-[var(--text-muted)]">
              Everything you need to know about getting started, scheduling, and session structure.
            </p>
            <a href="/#contact" className="text-action-link mt-8">
              <span>Contact Dr. Reynolds</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <div>
            {mayaData.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={faq.question}>
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-normal text-[var(--text-heading)] transition-colors hover:text-[var(--accent-primary)] sm:text-lg"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={18} className={`flex-shrink-0 text-[var(--accent-primary)] transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  {isOpen && (
                    <div className="max-w-2xl pb-5 pr-10 text-sm font-light leading-relaxed text-[var(--text-muted)] animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}