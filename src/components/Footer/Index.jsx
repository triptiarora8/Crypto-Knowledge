import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function FooterCTA() {
    return (
        <>
            <div className="bg-slate-700 pt-32  relative">

                {/* CTA CARD */}
                <div className="max-w-2xl mx-auto bg-[#A3B2BF] rounded-3xl p-10 text-center shadow-lg absolute left-1/2 transform -translate-x-1/2 -top-24 w-[90%]">

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
                <div className="text-center text-gray-200 mt-40 px-4">

                    {/* Logo */}
                    <div className="flex items-center justify-center mb-6"><img src="https://lwfiles.mycourse.app/686f7ba4ddeafe981e783e8d-public/eff05557ef9ca4ae75838abe9f81b2b1.png" alt="logo" className="w-[300px] h-full object-cover" /></div>

                    {/* Address */}
                    <p className="text-sm mb-1">
                        Unit V307, Vox Studios, 1-45 Durham St, London SE11 5JH
                    </p>
                    <p className="text-sm mb-1">Email: contact@cryptoknowledge.net</p>
                    <p className="text-sm mb-6">Telephone: +447868927012</p>

                    {/* Links */}
                    <div className="flex justify-center items-center gap-6 text-sm mb-6">
                        <span className="cursor-pointer hover:text-white">Terms</span>
                        <span className="border-l h-4 border-gray-400"></span>
                        <span className="cursor-pointer hover:text-white">Privacy</span>
                        <span className="border-l h-4 border-gray-400"></span>
                        <span className="cursor-pointer hover:text-white">SMS Policy</span>
                        <span className="border-l h-4 border-gray-400"></span>
                        <span className="cursor-pointer hover:text-white">Cookies</span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 text-lg">
                        <FaFacebookF className="cursor-pointer hover:text-white" />
                        <FaTwitter className="cursor-pointer hover:text-white" />
                        <FaYoutube className="cursor-pointer hover:text-white" />
                        <FaInstagram className="cursor-pointer hover:text-white" />
                        <FaLinkedinIn className="cursor-pointer hover:text-white" />
                    </div>
                    <h5 className="mt-auto flex flex-col justify-end pt-10 pb-2">Copyright  {new Date().getFullYear()}</h5>
                </div>
            </div>
            <div className="flex items-center justify-center py-4 ">
                <span className="flex items-center gap-2">
                    Created with
                    <a href="https://www.mycourse.app">
                        <img
                            src="https://cdn.mycourse.app/v4.46.4/images/footer-logo.png"
                            alt="logo"
                            className="w-[100px] h-auto object-contain"
                        />
                    </a>
                </span>
            </div>
        </>
    );
}