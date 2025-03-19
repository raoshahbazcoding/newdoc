export default function LatestNews() {
  const news = [
    {
      image: "src/assets/image 5.png",
      title: "Appropriately productize",
      date: "Jan 21, 2019",
      comments: "45 Comments",
      shares: "10 Shares",
      excerpt: "Some quick example text to build on the",
    },
    {
      image: "src/assets/image 6.png",
      title: "Quickly formulate backend",
      date: "May 26, 2019",
      comments: "30 Comments",
      shares: "5 Shares",
      excerpt: "Synergistically engage effective ROI after",
    },
    {
      image: "src/assets/image 7.png",
      title: "Objectively extend extensive",
      date: "Apr 25, 2019",
      comments: "41 Comments",
      shares: "30 Shares",
      excerpt: "Holistically mesh open-source leadership",
    },
    {
      image: "src/assets/image 5.png",
      title: "Appropriately productize",
      date: "Jan 21, 2019",
      comments: "45 Comments",
      shares: "10 Shares",
      excerpt: "Some quick example text to build on the",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4">
          Our Latest News
        </h2>
        <p className="text-center text-gray-500 mb-2">
          Enthusiastically drive revolutionary opportunities before emerging leadership.
        </p>
        <p className="text-center text-gray-500 mb-12">
          Distinctively transform tactical methods of empowerment via resource.
        </p>

        {/* News Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
              {/* News Image */}
              <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />

              {/* News Content */}
              <div className="p-6">
                <p className="text-lg font-semibold mb-2">{item.title}</p>
                <div className="text-sm text-gray-500 mb-2 flex flex-wrap gap-2">
                  <span>• {item.date}</span>
                  <span>• {item.comments}</span>
                  <span>• {item.shares}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>

                {/* Read More Link */}
                <a href="#" className="text-[#1d5c5c] font-semibold flex items-center gap-1">
                  Read more
                  <svg
                    className="ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
