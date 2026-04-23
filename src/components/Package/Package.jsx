const Package = () => {
  const Card = [
    {
      id: 1,
      image:
        "https://lwfiles.mycourse.app/686f7ba4ddeafe981e783e8d-public/custom/400x0_a276f77a6106638439e1c4121fc9f278.png",
      title: "Package 1",
      weeks: ["Week 1, Week 2, Week 3"],
      courses: 6,
      price: "£400",
    },
    {
      id: 2,
      image:
        "https://api.eu-w3.learnworlds.com/imagefile/9f5f830942c148689bb4a99b9d9e5200.png?client_id=686f7ba4ddeafe981e783e8d&width=400",
      title: "Package 2",
      weeks: ["Week 1, Week 2, Week 3", "Week 4, Week 5, Week 6"],
      courses: 9,
      price: "£600",
    },
    {
      id: 3,
      image:
        "https://api.eu-w3.learnworlds.com/imagefile/4f2d363ad24f5f8a116908443c66ed7f.png?client_id=686f7ba4ddeafe981e783e8d&width=400",
      title: "Package 3",
      weeks: [
        "Week 1, Week 2, Week 3",
        "Week 4, Week 5, Week 6",
        "Week 7, Week 8, Week 9",
      ],
      courses: 12,
      price: "£700",
    },
  ];

  return (
    <div className="bg-slate-700 py-10 px-4">
      
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid gap-6
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3"
      >
        {Card.map((item) => (
          <div
            key={item.id}
            className="bg-[#eae7e2] cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[180px] sm:h-[200px] object-cover"
              />
              <span className="absolute top-3 left-3 bg-slate-600 text-white text-xs px-3 py-1 rounded-full">
                {item.courses} Courses
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 sm:p-6">
              
              {/* Title */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 mb-3">
                {item.title}
              </h2>

              {/* Weeks */}
              <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-5 text-sm sm:text-base">
                {item.weeks.map((week, i) => (
                  <li key={i}>{week}</li>
                ))}
              </ul>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto gap-3">
                <button className="bg-slate-700 text-white py-2 rounded-full w-full sm:w-[60%] text-sm sm:text-base">
                  Enrol
                </button>

                <span className="text-lg sm:text-xl font-bold text-slate-700 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package;