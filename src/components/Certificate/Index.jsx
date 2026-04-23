
const Certificate = () => {
  return (
    <div className="bg-[#f5f3ef] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - IMAGE */}
        <div className="flex justify-center">
          <img
          src="https://lwfiles.mycourse.app/686f7ba4ddeafe981e783e8d-public/ec9e3cb84a9e72e1acc6a2308813fcdd.png"
            alt="certificate"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div>
          <h2 className="text-[2rem] font-bold text-slate-700 leading-[1.3] mb-6">
            Earn <br /> Completion Certificate
          </h2>

          <p className="text-[#3A4854] text-[1.1rem] mb-6 leading-[1.2] opacity-[0.8] w-[90%]">
            Complete the course and receive a shareable certificate that validates your crypto knowledge. 
            Add it to your LinkedIn profile, showcase it in your resume, and highlight your expertise 
            to employers, clients, and peers.
          </p>

          <button className="bg-[#3A4854] hover:bg-[#FFFBF6] hover:text-[#3A4854] font-normal text-white px-8 py-3 rounded-full text-[1rem]  transition">
            Explore courses
          </button>
        </div>

      </div>
    </div>
  );
};

export default Certificate;