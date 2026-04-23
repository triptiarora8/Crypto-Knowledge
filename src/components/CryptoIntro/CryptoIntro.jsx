
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
    }
  ];

  return (
    <div className=" py-16 px-6 w-[90%] mx-auto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl font-bold text-slate-700 leading-tight mb-6">
            New To Crypto? <br /> No Problem!
          </h1>

          <p className="text-[#3A4854] text-[1.1rem] mb-6 leading-[1.2] opacity-[0.8]">
            The world is evolving fast. Don’t get left behind. Crypto is changing
            how money and value work. Those who learn today will be ready for tomorrow.
            <br/>
            <br/>
            CryptoKnowledge is designed to help you learn:
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <div key={i} className="flex flex-col items-start gap-3">

                {/* Arrow Icon */}
                <div className="mt-1">
                  <img src={item.Icon} alt="icon" className="w-[3.125rem] h-[3.125rem]" />
                </div>

                {/* Text */}
                <p className="text-slate-700 text-[1rem] leading-[1.2]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="">
          <img
          src="https://lwfiles.mycourse.app/686f7ba4ddeafe981e783e8d-public/eb4c9508e2445a5fd671bb8ed63c8aa0.png"
          alt="crypto"
            className="rounded-[30px] w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default CryptoIntro;