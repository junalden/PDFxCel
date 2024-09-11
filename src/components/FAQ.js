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
      question: "What does your AI-powered solution do?",
      answer:
        "Our solution converts, transforms, and cleans data from PDFs using advanced AI technology. It extracts data accurately, restructures it into the desired format, and eliminates inconsistencies or formatting issues.",
    },
    {
      id: "item-2",
      question: "How does the AI work?",
      answer:
        "The AI engine intelligently analyzes and interprets data within PDFs. It extracts text, tables, and other content, then processes and organizes this information to meet your specific needs, ensuring high accuracy and efficiency.",
    },
    {
      id: "item-3",
      question: "What types of PDFs can your solution handle?",
      answer:
        "Our solution can handle a wide range of PDFs, including those with complex tables, unstructured text, and large volumes of data. Whether your PDFs are scanned documents or digital files, our AI is designed to process them effectively.",
    },
    {
      id: "item-4",
      question: "How do I get started?",
      answer:
        "To get started, simply upload your PDF files to our platform. Our AI will automatically begin the conversion, transformation, and cleaning process. Once complete, you can download the processed data in the format you need.",
    },
    {
      id: "item-5",
      question: "Is my data secure?",
      answer:
        "Yes, we prioritize data security and confidentiality. Your files are processed using secure protocols, and we do not store any personal or sensitive information beyond the processing session.",
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
            isFirst={index === 0}
            isLast={index === faqData.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
