import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
    return (
        <div className="w-[90%] mx-auto pt-[5rem]">
            <div>
                <h1 className="mb-[32px] text-center text-[5.4rem] md:text-[3.5rem] lg:text-[3.375rem] font-bold text-[#3A4854] leading-[1.3]">
                    Complete Guide <br />To Crypto Learning
                </h1>

                <p className="text-[#3A4854] text-center opacity-[0.8] text-[1.375rem] font-normal leading-[1.2]">
                    Welcome to CryptoKnowledge! A platform dedicated to the learning of money, blockchain, Bitcoin, and cryptoassets. This is a carefully structured step-by-step course with clear practical lessons that guide you from beginner to expert level
                </p>

                <div className="mt-[32px] flex justify-center gap-[16px]">

                    {/* Outline Button */}
                    <a
                        href="#courses"
                        className="flex items-center gap-[8px] px-4 py-2 rounded-full 
            border-2 border-[#3A4854] text-[#3A4854]
            hover:bg-[#3A4854] hover:text-white
            transition-all duration-300"
                    >
                        <span>Explore the course</span>
                        <IoIosArrowForward size={18} />
                    </a>
                    <a
                        href="#about"
                        className="flex items-center gap-[8px] px-4 py-2 rounded-full 
            bg-[#3A4854] text-white
            hover:bg-[#FFFBF6] hover:text-[#3A4854] hover:border-2 hover:border-[#3A4854]
            transition-all duration-300"
                    >
                        <span>Sign up now</span>
                        <IoIosArrowForward size={18} />
                    </a>

                </div>
                <div>
                    <video
                        className="w-full mt-[48px] rounded-lg shadow-lg"
                        src="https://fast.wistia.com/embed/medias/sq7oxud80h.m3u8?w=1280&h=720"
                        autoPlay
                        loop
                        muted
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;