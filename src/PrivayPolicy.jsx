import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-['Open_Sans']">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600">Effective Date: 7/9/2018</p>
        
        <div className="mt-8 space-y-6">
          <p>
            We at <strong>Adfirst</strong> take your privacy seriously. This policy explains how we collect, use, and share your personal information.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900">What does this Privacy Policy cover?</h2>
          <p>
            This policy applies to the personal information we collect when you use our services, but not to companies or individuals we do not control.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Information You Provide:</strong> Name, email, phone number, third-party account credentials.</li>
            <li><strong>Automatically Collected Information:</strong> IP address, browser type, cookies, usage data.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
          <p>
            We use collected information to improve our services, personalize your experience, and communicate with you.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900">Sharing of Information</h2>
          <p>
            We do not sell your personal information but may share anonymized data with partners and service providers.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900">Security</h2>
          <p>
            We take reasonable security measures to protect your information, but no method is 100% secure.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900">Your Choices</h2>
          <p>
            You can update or delete your information by contacting us at <a href="mailto:privacy@Adfirst.in" className="text-blue-600 underline">privacy@Adfirst.in</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
