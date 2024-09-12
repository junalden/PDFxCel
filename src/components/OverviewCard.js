import Banner from "../assets/banner.png";

export const OverviewCard = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full dark:hidden" src={Banner} alt="dashboard" />
        <img
          className="w-full hidden dark:block"
          src={Banner}
          alt="dashboard"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Convert, Transform, and Clean your PDF data powered by AI.
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Unlock the full potential of your PDF data with our AI-powered
            solution, designed to convert, transform, and clean data
            effortlessly. PDFxCel intelligently extracts, restructures, and
            organizes data from PDFs, eliminating manual work and ensuring
            accuracy. Say goodbye to formatting issues and inconsistencies—get
            clean, ready-to-use data in just a few clicks, tailored to your
            needs.
          </p>
          {/* <Link
            href="#"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link> */}
        </div>
      </div>
    </section>
  );
};
