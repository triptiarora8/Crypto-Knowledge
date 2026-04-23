

const Money = () => {
  return (
    <div style={{backgroundImage: `url('https://lwfiles.mycourse.app/686f7ba4ddeafe981e783e8d-public/581bfaeea326d88b6ad1a38a81838828.png')`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='flex w-full h-[10.25rem] md:h-[18.75rem] flex items-center justify-center py-4 md:py-8 lg:py-[5rem]'>
      <div  className='flex flex-col items-center justify-center text-center lg:gap-[1rem] md:gap-3 gap-2'>
      <h1 className="text-[#3A4854] md:text-[1.5rem] lg:text-[2rem] leading-[1.2] capitalize font-inter font-bold">Not Sure? Try our 48-hour money-back guarantee</h1>
      <p className="text-[#3A4854] text-sm md:text-[1rem] lg:text-[1.375rem] leading-[1.2] opacity-[0.8] mt-[0.5rem] font-inter font-normal ">We're confident in our product - that's why we offer a 48-hour money-back guarantee.</p>
      <a href="#courses" className="flex items-center gap-[0.5rem] px-2 py-1 lg:px-4 lg:py-2 rounded-full 
            hover:bg-[#3A4854] hover:text-white
             text-[#3A4854] border-2 border-[#3A4854]
            transition-all duration-300 text-sm md:text-[1rem]">Enroll Now</a>
      </div>
    </div>
  )
}

export default Money