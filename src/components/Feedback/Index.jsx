

const Feedback = () => {
  const Card = [
    {
      feedback:
        "“Superb course - engaging, lively, well constructed, holistic and really informative. Crucial knowledge in an increasingly unpredictable world.”",
      name: "Sam",
    },
    {
      feedback:
        "“This course is very helpful for absolute beginners like me!! It builds a clear foundation, starting from basic financial and economic concepts to a solid understanding of cryptocurrency and the new digital financial world.”",
      name: "Lola",
    },
    {
      feedback:
        "“I was new to the subject, but the way each module was explained made it simple to understand. The course felt approachable and kept me motivated to keep learning.”",
      name: "Daniel Kim",
    },
  ];

  return (
    <div className="bg-slate-700 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Students Love Us
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {Card.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col justify-between"
            >
              <p className="text-slate-600 mb-6 leading-relaxed">
                {item.feedback}
              </p>

              <h4 className="text-slate-800 font-semibold">
                — {item.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Feedback;