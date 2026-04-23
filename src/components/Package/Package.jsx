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
            weeks: [
                "Week 1, Week 2, Week 3",
                "Week 4, Week 5, Week 6",
            ],
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
        <div className="bg-slate-700 min-h-screen flex items-center justify-center">
            <div className="flex flex-wrap gap-6 justify-center p-6 ">
                {Card.map((item) => (
                    <div
                        key={item.id}
                        className="w-[350px] bg-[#eae7e2] cursor-pointer rounded-md overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 flex flex-col"
                    >
                        {/* Image */}
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[200px] object-cover"
                            />
                            <span className="absolute top-3 left-3 bg-slate-400 text-white text-xs px-3 py-1 rounded">
                                {item.courses} Courses
                            </span>
                        </div>

                        {/* Content + Footer Wrapper */}
                        <div className="flex flex-col  flex-1 p-6">

                            {/* Top Content */}
                            <div>
                                <h2 className="text-2xl font-semibold text-slate-700 mb-4">
                                    {item.title}
                                </h2>

                                <ul className="list-disc pl-5 text-slate-600 space-y-1 mb-6">
                                    {item.weeks.map((week, i) => (
                                        <li key={i}>{week}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center justify-between mt-auto gap-4">
                                <button className="bg-slate-700 text-white py-[0.375rem] rounded-full w-[60%] text-center">
                                    Enrol
                                </button>

                                <span className="text-xl font-bold text-slate-700">
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