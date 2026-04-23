import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
    return (
        <div className="w-[92%] sm:w-[90%] lg:w-[85%] mx-auto pt-[3rem] md:pt-[4rem] lg:pt-[5rem]">

            {/* Heading */}
            <h1 className="mb-6 text-center font-bold text-[#3A4854] leading-[1.2]
        text-[2.2rem] 
        sm:text-[2.8rem] 
        md:text-[3.2rem] 
        lg:text-[3.5rem] 
        xl:text-[4rem]"
            >
                Complete Guide <br className="hidden sm:block" /> To Crypto Learning
            </h1>

            {/* Paragraph */}
            <p className="text-[#3A4854] text-center opacity-80 font-normal leading-[1.5]
        text-[0.95rem] 
        sm:text-[1.05rem] 
        md:text-[1.2rem] 
        lg:text-[1.3rem] 
        max-w-[95%] sm:max-w-[80%] lg:max-w-[70%] mx-auto"
            >
                Welcome to CryptoKnowledge! A platform dedicated to the learning of money, blockchain, Bitcoin, and cryptoassets. This is a carefully structured step-by-step course with clear practical lessons that guide you from beginner to expert level
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">

                {/* Outline Button */}
                <a
                    href="#courses"
                    className="flex items-center gap-2 px-5 py-2 rounded-full 
          border-2 border-[#3A4854] text-[#3A4854]
          hover:bg-[#3A4854] hover:text-white
          transition-all duration-300 text-sm sm:text-base"
                >
                    <span>Explore the course</span>
                    <IoIosArrowForward size={18} />
                </a>

                {/* Filled Button */}
                <a
                    href="#about"
                    className="flex items-center gap-2 px-5 py-2 rounded-full 
          bg-[#3A4854] text-white
          hover:bg-[#FFFBF6] hover:text-[#3A4854] hover:border-2 hover:border-[#3A4854]
          transition-all duration-300 text-sm sm:text-base"
                >
                    <span>Sign up now</span>
                    <IoIosArrowForward size={18} />
                </a>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 mb-10">
                <video
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg shadow-lg object-cover"
                    src="https://fast.wistia.com/embed/medias/sq7oxud80h.m3u8?w=1280&h=720"
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                />
            </div>
        </div>
    );
};

export default Hero;