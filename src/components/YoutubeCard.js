export const YoutubeCard = () => {
  return (
    <section
      id="video-section"
      className="bg-white dark:bg-gray-900 flex justify-center py-8"
    >
      <div className="relative max-w-full md:max-w-3xl lg:max-w-4xl w-full overflow-hidden rounded-lg shadow-lg">
        <div className="p-4 text-center bg-transparent">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-2">
            AI-Powered Data Transformation
          </h2>
          <p className="text-sm md:text-base lg:text-lg font-light text-black mb-4">
            Learn how to efficiently convert, transform, and clean your data.
          </p>
        </div>

        {/* Video Player */}
        <div className="relative pt-[56.25%]">
          {" "}
          {/* 16:9 aspect ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/I_r0RSDzFNs?controls=1&showinfo=0&rel=0&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
          ></iframe>
        </div>
      </div>
    </section>
  );
};
