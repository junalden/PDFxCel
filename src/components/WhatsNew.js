import React from "react";

export const WhatsNew = () => {
  return (
    <div className="whats-new p-6 bg-slate-50 rounded-lg py-5 mt-5">
      <h1 className="text-3xl font-bold mb-4">
        What’s New in PDFxCel Version 2.0
      </h1>
      <p className="mb-6">
        We’re excited to introduce the latest update to PDFxCel, Version 2.0!
        This release brings several new features and improvements designed to
        enhance your experience and streamline your data processing tasks.
        Here’s what’s new:
      </p>

      <h2 className="text-xl font-semibold mb-2">1. User Registration</h2>
      <p className="mb-4">
        You can now create an account on PDFxCel! By registering, you gain
        access to additional features that make managing your data extraction
        workflows easier. With a registered account, you can:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Access Your Profile: Manage your account settings and view your
          activity.
        </li>
        <li>
          Save Extraction Mappings: Store your custom extraction mappings for
          future use.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        2. Save Extraction Mappings as Templates
      </h2>
      <p className="mb-4">
        We’ve added a powerful new feature that allows you to save your
        extraction mappings as templates. This means you can:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Create Custom Templates: Design and save templates for different types
          of data extractions, ensuring consistency across your projects.
        </li>
        <li>
          Reuse Templates: Quickly apply your saved templates to new PDF files,
          saving time and effort.
        </li>
        <li>
          Manage Templates: Easily view, edit, and delete your saved templates
          through your account dashboard.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Enhanced User Experience</h2>
      <p className="mb-4">
        Along with these new features, Version 2.0 includes several improvements
        to enhance your overall experience:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Improved Interface: A more intuitive and user-friendly interface to
          navigate and manage your data extraction tasks.
        </li>
        <li>
          Faster Processing: Optimized performance for quicker data extraction
          and transformation.
        </li>
      </ul>

      <p className="mb-4">
        We hope you enjoy these new features and enhancements. As always, your
        feedback is valuable to us. If you have any questions or need
        assistance, please don’t hesitate to contact us.
      </p>
      <p>Thank you for choosing PDFxCel!</p>
    </div>
  );
};
