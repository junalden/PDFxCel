import React, { useState } from "react";

const FAQItem = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
  isFirst,
  isLast,
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <h2 id={`${id}-heading`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 dark:text-gray-400 border border-b-0 border-gray-200 dark:border-gray-700 ${
            isFirst ? "rounded-t-xl" : ""
          } ${
            isLast ? "rounded-b-xl" : ""
          } focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 ${
            isOpen
              ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              : ""
          }`}
          aria-expanded={isOpen}
          aria-controls={`${id}-body`}
          onClick={onToggle}
        >
          <span>{question}</span>
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l4 4 4-4"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`${id}-body`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-labelledby={`${id}-heading`}
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      id: "item-1",
      question: "What is Flowbite?",
      answer:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      id: "item-2",
      question: "Is there a Figma file available?",
      answer:
        "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
    },
    {
      id: "item-3",
      question: "What are the differences between Flowbite and Tailwind UI?",
      answer:
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:py-16 lg:px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
            FAQ! Need Help?
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            We got you covered.
          </p>
        </div>
        {faqData.map((item, index) => (
          <FAQItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleItem(index)}
            isFirst={index === 0} // Apply rounded corners to the first item
            isLast={index === faqData.length - 1} // Apply rounded corners to the last item
          />
        ))}
      </div>
    </section>
  );
};
