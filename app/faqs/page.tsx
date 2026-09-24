'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { mayaData } from '../../src/siteData';
import { BookingModal } from '../../src/components/BookingModal';

export default function FaqsPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-body)]">
      <header className="relative z-40 bg-[var(--bg-page)]">
        <div className="flex h-28 w-full items-center justify-between px-8 lg:px-16">

          {/* Brand Wordmark */}
          <a href="/" className="flex flex-col leading-none group" aria-label="Dr. Maya Reynolds homepage">
            <span className="font-serif text-[2.25rem] font-light tracking-tight text-[var(--text-heading)] transition-colors group-hover:text-[var(--accent-primary)]">
              Dr. Maya Reynolds
            </span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">
              Licensed Clinical Psychologist
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.13em]" aria-label="Main Navigation">
            <a href="/#about" className="text-[var(--text-heading)] transition-colors hover:text-[var(--accent-primary)]">About</a>
            <a href="/#services" className="text-[var(--text-heading)] transition-colors hover:text-[var(--accent-primary)]">Modalities</a>
            <a href="/#expertise" className="text-[var(--text-heading)] transition-colors hover:text-[var(--accent-primary)]">Specialties</a>
            <a href="/#office" className="text-[var(--text-heading)] transition-colors hover:text-[var(--accent-primary)]">Office</a>
            <a href="/faqs" className="text-[var(--accent-primary)]">FAQs</a>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="rounded-full border border-[var(--text-heading)] px-6 py-2.5 text-[11px] uppercase tracking-[0.13em] text-[var(--text-heading)] transition-colors hover:bg-[var(--text-heading)] hover:text-[var(--bg-page)]"
            >
              Book a Consultation
            </button>
          </nav>

          {/* Mobile: back link only */}
          <a href="/" className="xl:hidden text-[11px] uppercase tracking-[0.13em] font-semibold text-[var(--text-heading)] hover:text-[var(--accent-primary)] transition-colors">
            ← Back
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1440px] px-8 py-16 lg:px-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
          <div className="max-w-sm">
            <span className="eyebrow-text">Clarifying Details</span>
            <h1 className="mt-3 text-4xl font-light text-[var(--text-heading)] sm:text-5xl">Questions?</h1>
            <p className="mt-6 text-base leading-relaxed text-[var(--text-muted)]">
              Everything you need to know about getting started, scheduling, and session structure.
            </p>
          </div>

          <div>
            {mayaData.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={faq.question} className="border-b border-[var(--border-subtle)]">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-normal text-[var(--text-heading)] transition-colors hover:text-[var(--accent-primary)] sm:text-lg"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={18} className={`flex-shrink-0 text-[var(--accent-primary)] transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  {isOpen && (
                    <div className="max-w-2xl pb-6 pr-10 text-sm font-light leading-relaxed text-[var(--text-muted)] animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        therapistName={mayaData.brandName}
        address={`${mayaData.address.city}, ${mayaData.address.state}`}
      />
    </div>
  );
}