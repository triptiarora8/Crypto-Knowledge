import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function FooterCTA() {
    return (
        <>
            <div className="bg-slate-700 pt-32  pb-10 relative">

                {/* CTA CARD */}
                <div className="block lg:hidden max-w-2xl mx-auto bg-[#A3B2BF] rounded-3xl 
                p-6 sm:p-8 md:p-10 text-center shadow-lg 
                absolute left-1/2 -translate-x-1/2 
                -top-20 sm:-top-24 -top-40
                w-[92%] sm:w-[90%]">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
                        We're Here To Help You Learn
                    </h2>

                    <p className="text-white opacity-80 text-sm sm:text-base mb-6 leading-[1.5]">
                        Not ready to join today? No problem, we are here to support you.
                        Click below and get a 10% discount when you're ready.
                    </p>

                    {/* Input + Button */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">

                        <input
                            type="email"
                            placeholder="E-mail address"
                            className="flex-1 px-4 py-3 outline-none 
                            bg-white sm:bg-transparent 
                            border-2 border-[#3A4854] 
                            sm:border-r-0 
                            rounded-full sm:rounded-l-full"
                        />

                        <button className="bg-[#3A4854] border-2 border-[#3A4854] 
                        text-white px-6 py-3 font-medium 
                        rounded-full sm:rounded-r-full
                        hover:bg-white hover:text-[#3A4854] transition">
                            Join us now!
                        </button>
                    </div>

                    {/* Checkbox */}
                    <label className="flex items-start mt-4 gap-3 text-left cursor-pointer">

                        <input type="checkbox" className="peer hidden" />

                        <div className="w-5 h-5 mt-1 rounded border-2 border-slate-500 flex items-center justify-center 
                        peer-checked:bg-slate-700 peer-checked:border-slate-700">
                            <svg
                                className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <span className="text-sm sm:text-base text-slate-700">
                            I would like to receive emails from CryptoKnowledge
                        </span>
                    </label>
                </div>
                <div className="lg:block hidden max-w-2xl mx-auto bg-[#A3B2BF] rounded-3xl p-10 text-center shadow-lg absolute left-1/2 transform -translate-x-1/2 -top-24 w-[90%]">

                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                        We're Here To Help You Learn
                    </h2>

                    <p className="text-white opacity-[0.8] text-[1rem] mb-6 leading-[1.5]">
                        Not ready to join today? No problem, we are here to support you.
                        Click below and you will receive a promo code valid for a period
                        of time that will give you a 10% discount when you are ready to sign up.
                    </p>

                    {/* Input + Button */}
                    <div className="flex items-center  rounded-full overflow-hidden border border-gray-300">
                        <input
                            type="email"
                            placeholder="E-mail address" className="flex-1 px-4 py-3 outline-none bg-transparent border-2 rounded-l-full border-[#3A4854] text-gray-700 placeholder-gray-500"
                        />
                        <button className="bg-[#3A4854] border-2 border-[#3A4854] text-white px-6 py-3 font-medium hover:bg-white hover:text-[#3A4854] hover:border-2 hover:border-[#3A4854] hover:border-white transition">
                            Join us now!
                        </button>
                    </div>

                    {/* Checkbox */}
                    <label className="flex items-center justify-start mt-4 gap-3 cursor-pointer">

                        {/* Input */}
                        <input type="checkbox" className="peer hidden" />

                        {/* Checkbox UI */}
                        <div className="w-5 h-5 rounded border-2 border-slate-500 flex items-center justify-center transition 
                  peer-checked:bg-slate-700 peer-checked:border-slate-700">

                            {/* FIX: use peer-checked with child selector */}
                            <svg
                                className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <span className="text-[1rem] text-slate-700">
                            I would like to receive emails from CryptoKnowledge
                        </span>
                    </label>
                </div>


                {/* FOOTER CONTENT */}
                <div className="text-center text-gray-200 mt-44 sm:mt-48 px-4">

                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://lwfiles.mycourse.app/686f7ba4ddeafe981e783e8d-public/eff05557ef9ca4ae75838abe9f81b2b1.png"
                            alt="logo"
                            className="w-[180px] sm:w-[220px] md:w-[260px]"
                        />
                    </div>

                    {/* Address */}
                    <p className="text-xs sm:text-sm mb-1">
                        Unit V307, Vox Studios, London SE11 5JH
                    </p>
                    <p className="text-xs sm:text-sm mb-1">
                        Email: contact@cryptoknowledge.net
                    </p>
                    <p className="text-xs sm:text-sm mb-6">
                        Telephone: +447868927012
                    </p>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm mb-6">
                        <span>Terms</span>
                        <span className="hidden sm:block border-l h-4"></span>
                        <span>Privacy</span>
                        <span className="hidden sm:block border-l h-4"></span>
                        <span>SMS Policy</span>
                        <span className="hidden sm:block border-l h-4"></span>
                        <span>Cookies</span>
                    </div>

                    {/* Social */}
                    <div className="flex justify-center gap-5 sm:gap-6 text-base sm:text-lg">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaYoutube />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>

                    <h5 className="pt-8 text-xs sm:text-sm">
                        Copyright {new Date().getFullYear()}
                    </h5>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex items-center justify-center py-4 px-4 text-center">
                <span className="flex flex-col sm:flex-row items-center gap-2 text-sm">
                    Created with
                    <a href="https://www.mycourse.app">
                        <img
                            src="https://cdn.mycourse.app/v4.46.4/images/footer-logo.png"
                            className="w-[80px] sm:w-[100px]"
                        />
                    </a>
                </span>
            </div>
        </>
    );
}