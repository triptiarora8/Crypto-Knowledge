import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#FFFBF6]">
      {/* Header */}
      <header className="p-4 flex items-center justify-between mx-4 md:mx-[60px] gap-4">
        
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src="/logo.png" alt="logo" className="w-[10rem] md:w-[12.5rem]" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center">
          <a href="/about" className="text-[#3A4854] text-[13px] mx-3 whitespace-nowrap">
            About Us
          </a>
          <a href="/courses" className="text-[#3A4854] text-[13px] mx-3 whitespace-nowrap">
            Courses
          </a>
          <a href="/why-crypto" className="text-[#3A4854] text-[13px] mx-3 whitespace-nowrap">
            Why Crypto
          </a>
          <a href="/login" className="text-[#3A4854] text-[13px] mx-3 whitespace-nowrap">
            Log In
          </a>

          <button
            onClick={() => (window.location.href = "/signup")}
            className="border-2 border-[#3A4854] text-[#3A4854] text-[13px] py-1 px-4 rounded-full ml-3 whitespace-nowrap"
          >
            Sign Up
          </button>
        </nav>

        {/* Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-6 gap-6 mt-4">
          <a href="/about" onClick={()=>setIsOpen(false)} className="text-[#3A4854] text-lg">
            About Us
          </a>
          <a href="/courses" onClick={()=>setIsOpen(false)} className="text-[#3A4854] text-lg">
            Courses
          </a>
          <a href="/why-crypto" onClick={()=>setIsOpen(false)} className="text-[#3A4854] text-lg">
            Why Crypto
          </a>
          <a href="/login" onClick={()=>setIsOpen(false)} className="text-[#3A4854] text-lg">
            Log In
          </a>

          <button
            onClick={() => {
              setIsOpen(false);
              window.location.href = "/signup";
            }}
            className="border-2 border-[#3A4854] text-[#3A4854] py-2 px-5 rounded-full mt-4 w-fit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;