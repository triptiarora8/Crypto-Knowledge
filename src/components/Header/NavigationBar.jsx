
const NavigationBar = () => {
    return (
        <div className="bg-[#FFFBF6]">

        <header className="p-4 flex items-center justify-between mx-[60px]">
            <div>
                <a href="/">
                <img src="../../public/logo.png" alt="logo" className="w-[12.5rem]" />
                </a>
            </div>
            <nav className="">
                <a href="/about" className="text-[#3A4854] text-[13px] mx-4">About Us</a>
                <a href="/courses" className="text-[#3A4854] text-[13px] mx-4">Courses</a>
                <a href="/why-crypto" className="text-[#3A4854] text-[13px] mx-4">Why Crypto</a>
                <a href="/login" className="text-[#3A4854] text-[13px] mx-4">Log In</a>
                <button onClick={()=>{window.location.href="/signup"}} className="border-2 border-[#3A4854] text-[#3A4854] text-[0.8125rem] py-[0.375rem] px-4 rounded-full ml-4 cursor-pointer">Sign Up</button>

            </nav>
        </header>
        </div>
    )
}

export default NavigationBar