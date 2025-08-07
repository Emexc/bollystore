import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const TermsAndConditions = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const termsSections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <p>
            Welcome to Bollystore! These Terms and Conditions govern your use of
            our website and services.
          </p>
          <p>
            By accessing or using our website, you agree to be bound by these
            Terms. If you disagree with any part of these Terms, you may not
            access the website.
          </p>
        </div>
      ),
    },
    {
      id: "account-terms",
      title: "Account Terms",
      content: (
        <div className="space-y-4">
          <p>
            To use certain features of our website, you may need to create an
            account. When creating an account, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your password</li>
            <li>
              Accept responsibility for all activities that occur under your
              account
            </li>
            <li>Not create multiple accounts for abusive purposes</li>
          </ul>
          <p>
            We reserve the right to refuse service, terminate accounts, or
            remove content at our sole discretion.
          </p>
        </div>
      ),
    },
    {
      id: "product-purchases",
      title: "Product Purchases",
      content: (
        <div className="space-y-4">
          <p>
            All purchases through our website are subject to product
            availability. We may limit or cancel quantities purchased per
            person, per household, or per order.
          </p>
          <p>We reserve the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Limit or prohibit orders that appear to be placed by dealers,
              resellers, or distributors
            </li>
            <li>Reject any order you place with us</li>
            <li>Change or discontinue any product at any time</li>
          </ul>
          <p>Prices for our products are subject to change without notice.</p>
        </div>
      ),
    },
    {
      id: "returns-refunds",
      title: "Returns & Refunds",
      content: (
        <div className="space-y-4">
          <p>
            Our Return & Refund Policy forms part of these Terms. Please review
            the policy on our website for complete details.
          </p>
          <p>Key points include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Returns must be made within 14 days of receipt</li>
            <li>Products must be in original condition with all packaging</li>
            <li>Refunds will be issued to the original payment method</li>
            <li>
              Shipping costs are non-refundable unless the return is due to our
              error
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content: (
        <div className="space-y-4">
          <p>
            All content on this website, including text, graphics, logos,
            images, and software, is the property of Bollystore or its content
            suppliers and protected by intellectual property laws.
          </p>
          <p>You may not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Reproduce, duplicate, copy, sell, resell, or exploit any portion
              of the website without express written permission
            </li>
            <li>
              Use any data mining, robots, or similar data gathering/extraction
              tools
            </li>
            <li>Modify, adapt, or hack the website</li>
          </ul>
        </div>
      ),
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      content: (
        <div className="space-y-4">
          <p>
            Bollystore shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages resulting from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your use of or inability to use the website</li>
            <li>
              Any unauthorized access to or use of our servers and/or personal
              information
            </li>
            <li>
              Any interruption or cessation of transmission to or from our
              website
            </li>
            <li>
              Any bugs, viruses, or similar that may be transmitted through our
              website
            </li>
          </ul>
          <p>
            Our maximum liability to you for any claim related to these Terms or
            your use of our website shall not exceed the amount you paid us in
            the last 12 months.
          </p>
        </div>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: (
        <div className="space-y-4">
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of Nigeria, without regard to its conflict of law
            provisions.
          </p>
          <p>
            Any disputes arising under or in connection with these Terms shall
            be subject to the exclusive jurisdiction of the courts located in
            Lagos, Nigeria.
          </p>
        </div>
      ),
    },
    {
      id: "changes",
      title: "Changes to Terms",
      content: (
        <div className="space-y-4">
          <p>
            We reserve the right to update, change, or replace any part of these
            Terms by posting updates to our website.
          </p>
          <p>
            It is your responsibility to check this page periodically for
            changes. Your continued use of the website following the posting of
            any changes constitutes acceptance of those changes.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-[70px]">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <p className="text-gray-700 mb-8">
              Please read these Terms and Conditions carefully before using our
              website. Your access to and use of the service is conditioned on
              your acceptance of and compliance with these Terms.
            </p>

            <div className="space-y-4">
              {termsSections.map((section) => (
                <div
                  key={section.id}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                    aria-expanded={openSection === section.id}
                    aria-controls={`${section.id}-content`}
                  >
                    <h2 className="text-lg font-medium text-gray-900">
                      {section.title}
                    </h2>
                    {openSection === section.id ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  <div
                    id={`${section.id}-content`}
                    className={`pb-4 ${
                      openSection === section.id ? "block" : "hidden"
                    }`}
                  >
                    <div className="text-gray-600 prose prose-indigo max-w-none">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <p className="mt-2 text-gray-800">
                Email:{" "}
                <a
                  href="mailto:legal@bollystore.com"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  legal@bollystore.com
                </a>
              </p>
              <p className="mt-1 text-gray-800">
                Address: 123 Legal Street, Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
