const CryptoIntro = () => {
  const features = [
    {
      Icon: "https://lwfiles.mycourse.app/686f7ba4ddeafe981e783e8d-public/233520d427a3aa25d05c1d6ff1174ae0.png",
      text: "Self-paced learning – stop and start as you please",
    },
    {
      Icon: "https://lwfiles.mycourse.app/686f7ba4ddeafe981e783e8d-public/3271ac3e4de2a925b582df5e15e9c8da.png",
      text: "We include written material, graphics and audio",
    },
    {
      Icon: "https://lwfiles.mycourse.app/686f7ba4ddeafe981e783e8d-public/37db15688817d6ca82f558215faba761.png",
      text: "Course is designed to be used for 30 minutes per day for 9 weeks",
    },
    {
      Icon: "https://lwfiles.mycourse.app/686f7ba4ddeafe981e783e8d-public/b46560b519dc8f0fbbde29428a82283c.png",
      text: "The world's easiest and most effective step-by-step crypto learning course",
    },
    {
      Icon: "https://lwfiles.mycourse.app/686f7ba4ddeafe981e783e8d-public/180e783d65d7e28d8ca5afa8a9180155.png",
      text: "The structured modules guide you from the basics to advanced concepts",
    },
    {
      Icon: "https://lwfiles.mycourse.app/686f7ba4ddeafe981e783e8d-public/4fa228404b16b43304f72b8609383500.png",
      text: "Lessons are crafted by experts who make complex topics accessible and fun",
    },
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 w-full lg:w-[90%] mx-auto">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* LEFT */}
        <div>
          {/* Heading */}
          <h1 className="text-center lg:text-left font-bold text-slate-700 leading-tight mb-5
            text-[2rem] 
            sm:text-[2.5rem] 
            md:text-[3rem] 
            lg:text-[3.5rem]"
          >
            New To Crypto? <br /> No Problem!
          </h1>

          {/* Paragraph */}
          <p className="text-[#3A4854] opacity-80 text-center lg:text-left leading-[1.5] mb-6
            text-[0.95rem] 
            sm:text-[1.05rem] 
            md:text-[1.1rem]"
          >
            The world is evolving fast. Don’t get left behind. Crypto is changing
            how money and value work. Those who learn today will be ready for tomorrow.
            <br /><br />
            CryptoKnowledge is designed to help you learn:
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                
                {/* Icon */}
                <img
                  src={item.Icon}
                  alt="icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                />

                {/* Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-[1.4]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-first lg:order-none">
          <img
            src="https://lwfiles.mycourse.app/686f7ba4ddeafe981e783e8d-public/eb4c9508e2445a5fd671bb8ed63c8aa0.png"
            alt="crypto"
            className="rounded-[20px] sm:rounded-[30px] w-full h-full object-cover
            max-h-[300px] sm:max-h-[400px] lg:max-h-[500px]"
          />
        </div>

      </div>
    </div>
  );
};

export default CryptoIntro;