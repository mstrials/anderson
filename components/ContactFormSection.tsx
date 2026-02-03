'use client';

import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  business: string;
  location: string;
  email: string;
  phone: string;
}

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    business: '',
    location: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          business: '',
          location: '',
          email: '',
          phone: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mt-12">
      {/* Left Column - 1/3 width */}
      <div className="bg-[#002a25] p-8 lg:p-12 flex flex-col justify-center text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Do you have questions?</h2>
        <p className="text-center leading-relaxed">
          You can book a consultation any time through our portal and speak to a specialist - we can assist you with all commercial law matters. Send us your details through the contact form and we'll be in touch!
        </p>
      </div>

      {/* Right Column - 2/3 width */}
      <div className="bg-white p-8 lg:p-12 col-span-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Business Field */}
          <div>
            <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Business
            </label>
            <input
              type="text"
              id="business"
              name="business"
              value={formData.business}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Location Field */}
          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#002a25] hover:bg-[#001a15] disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="text-center text-green-600 font-semibold">
              Thank you! We'll be in touch soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-center text-red-600 font-semibold">
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactFormSection;
