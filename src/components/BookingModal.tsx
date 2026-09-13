import React, { useState } from 'react';
import { X, CheckCircle, Calendar, MapPin, Shield } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  therapistName: string;
  address: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  therapistName,
  address,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'Anxiety & Panic Counseling',
    sessionPreference: 'In-Person (Santa Monica Office)',
    preferredTime: 'Morning (9am - 12pm)',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content relative p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200/50 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="eyebrow-text">Confidential Request</span>
              <h3 className="text-3xl font-light mt-1 mb-2">
                Schedule a Consultation
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Connect with {therapistName} for a complimentary 15-minute phone consultation to discuss your goals, answer questions, and explore working with me.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded text-sm focus:outline-none focus:border-stone-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded text-sm focus:outline-none focus:border-stone-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(310) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded text-sm focus:outline-none focus:border-stone-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Primary Area of Focus
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded text-sm focus:outline-none focus:border-stone-800"
                  >
                    <option>Anxiety & Panic Counseling</option>
                    <option>Trauma & EMDR Therapy</option>
                    <option>Burnout & Perfectionism</option>
                    <option>General Adult Psychotherapy</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Session Preference
                  </label>
                  <select
                    value={formData.sessionPreference}
                    onChange={(e) => setFormData({ ...formData, sessionPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded text-sm focus:outline-none focus:border-stone-800"
                  >
                    <option>In-Person (Office)</option>
                    <option>Secure Telehealth (California)</option>
                    <option>Flexible / Either</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Best Time for a 15-min Call
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded text-sm focus:outline-none focus:border-stone-800"
                  >
                    <option>Morning (9am - 12pm)</option>
                    <option>Afternoon (12pm - 4pm)</option>
                    <option>Late Afternoon (4pm - 6pm)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Brief Note (Optional & Confidential)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a brief overview of what you're hoping to address..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded text-sm focus:outline-none focus:border-stone-800"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
                <Shield size={14} className="text-emerald-700 flex-shrink-0" />
                <span>All communication is confidential.</span>
              </div>

              <div className="pt-2">
                <button type="submit" className="btn-primary w-full text-center">
                  Request 15-Minute Consultation
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 px-4 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-3xl font-light">Consultation Request Received</h3>
            <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
              Thank you, {formData.fullName}. Dr. Maya Reynolds will review your request and reach out within 24–48 business hours to schedule your introductory call.
            </p>

            <div className="bg-white/80 p-5 rounded border border-stone-200 text-left text-xs text-stone-600 space-y-2 max-w-sm mx-auto mt-4">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-stone-700" />
                <span>Format: {formData.sessionPreference}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-stone-700" />
                <span>{address}</span>
              </div>
            </div>

            <div className="pt-4">
              <button onClick={handleReset} className="btn-outline">
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
