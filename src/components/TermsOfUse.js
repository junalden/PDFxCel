import React from "react";

export const TermsOfUse = () => {
  const effectiveDate = "September 11, 2024";
  const contactInfo = "junalden@outlook.com";

  return (
    <div className="terms-of-use">
      <h1 className="text-2xl font-bold mb-4">Terms of Use</h1>
      <p className="mb-4">
        <strong>Effective Date:</strong> {effectiveDate}
      </p>
      <p className="mb-4">
        Welcome to our service. By accessing or using our platform, you agree to
        comply with and be bound by the following terms and conditions. Please
        read them carefully.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using our services, you agree to these Terms of Use and
        any additional terms and conditions that may apply to specific features
        or services offered. If you do not agree with these terms, please do not
        use our services.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms of Use at any time. Any
        changes will be effective immediately upon posting. Your continued use
        of our services after any changes constitutes your acceptance of the new
        terms. We encourage you to review these terms periodically.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
      <p className="mb-4">
        You agree to use our services in compliance with all applicable laws and
        regulations. You are responsible for any content you post or transmit
        through our platform and must ensure that it does not violate any
        third-party rights or our policies.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Account Security</h2>
      <p className="mb-4">
        If you create an account with us, you are responsible for maintaining
        the confidentiality of your account credentials and for all activities
        that occur under your account. You agree to notify us immediately of any
        unauthorized use of your account.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
      <p className="mb-4">
        All content and materials available on our platform, including but not
        limited to text, graphics, logos, and software, are the property of our
        company or its licensors and are protected by intellectual property
        laws. You may not use, copy, or distribute any content without our
        express permission.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
      <p className="mb-4">
        To the extent permitted by law, we are not liable for any indirect,
        incidental, special, or consequential damages arising out of or related
        to your use of our services. Our liability is limited to the maximum
        extent permitted by law.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
      <p className="mb-4">
        We reserve the right to terminate or suspend your access to our services
        at our sole discretion, without notice, for any reason, including but
        not limited to a breach of these Terms of Use.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
      <p className="mb-4">
        These Terms of Use are governed by and construed in accordance with the
        laws of the jurisdiction in which our company is based, without regard
        to its conflict of law principles.
      </p>

      <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about these Terms of Use, please
        contact us at{" "}
        <a href={`mailto:${contactInfo}`} className="text-blue-600 underline">
          {contactInfo}
        </a>
        .
      </p>
    </div>
  );
};
