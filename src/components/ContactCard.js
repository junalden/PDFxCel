import React from "react";

export const ContactCard = () => {
  return (
    <div className="contact-page p-6 ">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">
        If you have any questions or need assistance, please reach out to us via
        the contact information below:
      </p>

      <div className="contact-info bg-white p-6 border rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p className="mb-4">
          {/* You can contact us through the following methods: */}
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Email:{" "}
            <a
              href="mailto:junalden@outlook.com"
              className="text-blue-600 underline"
            >
              junalden@outlook.com
            </a>
          </li>
          <li>Phone: (123) 456-7890</li>
          {/* Add more contact methods if needed */}
        </ul>

        <p className="mb-4">
          We aim to respond to all inquiries within 48 hours. Thank you for
          reaching out!
        </p>
      </div>
    </div>
  );
};
