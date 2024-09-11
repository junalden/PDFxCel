import React from "react";

export const PrivacyPolicy = () => {
  const effectiveDate = "September 11, 2024";
  const contactInfo = "junalden@outlook.com";

  return (
    <div className="privacy-policy">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        <strong>Effective Date:</strong> {effectiveDate}
      </p>
      <p className="mb-4">
        Thank you for choosing our service. Your privacy is important to us, and
        we are committed to protecting your personal information. This Privacy
        Policy outlines how we handle your data when you use our services.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Data Collection and Use</h2>
      <ul className="mb-4 list-disc list-inside">
        <li className="mb-2">
          <strong>PDF and Excel Files:</strong> We do not store any of the files
          you upload, including PDFs and Excel files. All file processing is
          done in real-time, and once the process is complete, the files are
          immediately deleted from our systems. We do not retain any copies of
          your files.
        </li>
        <li className="mb-2">
          <strong>User Registration:</strong> If you choose to register for an
          account, we will collect and store your email address and any
          templates you create on our platform. This data is stored securely in
          our database and is used to enhance your user experience, allowing you
          to save and reuse templates as needed.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">2. Data Security</h2>
      <p className="mb-4">
        We prioritize the security of your data. The email addresses and
        templates that you save are stored in a secure, encrypted database. We
        use industry-standard security measures to protect your information from
        unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. No Third-Party Sharing</h2>
      <p className="mb-4">
        We do not share your personal information, email address, or any
        templates you create with any third-party services or organizations.
        Your data is strictly used for the functionality of our platform and to
        improve your experience.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Data Retention</h2>
      <ul className="mb-4 list-disc list-inside">
        <li className="mb-2">
          <strong>Non-registered Users:</strong> If you are not a registered
          user, no data is retained on our servers. Your files are processed and
          deleted immediately after completion.
        </li>
        <li className="mb-2">
          <strong>Registered Users:</strong> If you opt for user registration,
          we retain your email address and templates in our secure database.
          This data will remain stored until you request its deletion or
          deactivate your account.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
      <p className="mb-4">You have the right to:</p>
      <ul className="mb-4 list-disc list-inside">
        <li className="mb-2">Access the data we store about you.</li>
        <li className="mb-2">
          Request the deletion of your personal data, including your email
          address and saved templates.
        </li>
        <li className="mb-2">
          Withdraw your consent for data processing at any time.
        </li>
      </ul>
      <p className="mb-4">
        If you would like to exercise any of these rights, please contact us at{" "}
        <a href={`mailto:${contactInfo}`} className="text-blue-600 underline">
          {contactInfo}
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal requirements. When we do, we will revise the
        effective date at the top of this page. We encourage you to review this
        policy periodically to stay informed about how we are protecting your
        information.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at{" "}
        <a href={`mailto:${contactInfo}`} className="text-blue-600 underline">
          {contactInfo}
        </a>
        .
      </p>
    </div>
  );
};
