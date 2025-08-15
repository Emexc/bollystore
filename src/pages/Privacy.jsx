import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const PrivacyPolicy = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const privacySections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      content: (
        <div className="space-y-4">
          <p>We collect information that you provide directly to us when you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create an account on our website</li>
            <li>Place an order for products</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact our customer service</li>
          </ul>
          <p>The types of information we may collect include your name, email address, phone number, shipping address, payment information, and any other information you choose to provide.</p>
        </div>
      )
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Data',
      content: (
        <div className="space-y-4">
          <p>We use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your account or transactions</li>
            <li>Provide customer support</li>
            <li>Improve our products and services</li>
            <li>Send you marketing communications (if you've opted in)</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing and Disclosure',
      content: (
        <div className="space-y-4">
          <p>We may share your information with third parties in the following situations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>With service providers who help with payment processing, shipping, and other business operations</li>
            <li>When required by law or to respond to legal process</li>
            <li>To protect the rights and property of our business</li>
            <li>In connection with any merger, sale of company assets, or acquisition</li>
          </ul>
          <p>We never sell your personal information to third parties.</p>
        </div>
      )
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: (
        <div className="space-y-4">
          <p>We implement appropriate security measures to protect your personal information, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Secure socket layer (SSL) technology for data transmission</li>
            <li>Encryption of sensitive information</li>
            <li>Regular security audits</li>
            <li>Access controls to personal information</li>
          </ul>
          <p>However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
        </div>
      )
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      content: (
        <div className="space-y-4">
          <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access the personal data we hold about you</li>
            <li>The right to request correction of inaccurate data</li>
            <li>The right to request deletion of your data</li>
            <li>The right to object to or restrict certain processing</li>
            <li>The right to data portability</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided below.</p>
        </div>
      )
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      content: (
        <div className="space-y-4">
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.</p>
          <p>We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-[70px]">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <p className="text-gray-700 mb-8">
              At Bollystore, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
            </p>

            <div className="space-y-4">
              {privacySections.map((section) => (
                <div key={section.id} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                    aria-expanded={openSection === section.id}
                    aria-controls={`${section.id}-content`}
                  >
                    <h2 className="text-lg font-medium text-gray-900">{section.title}</h2>
                    {openSection === section.id ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  <div
                    id={`${section.id}-content`}
                    className={`pb-4 ${openSection === section.id ? 'block' : 'hidden'}`}
                  >
                    <div className="text-gray-600 prose prose-indigo max-w-none">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2 text-gray-800">
                Email: <a href="mailto:privacy@bollystore.com" className="text-indigo-600 hover:text-indigo-800">care.ng@oraimo.com</a>
              </p>
              <p className="mt-1 text-gray-800">
                Address: 18, Spectrum Plaza, First Floor, Otigba Street, Ikeja, Lagos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;