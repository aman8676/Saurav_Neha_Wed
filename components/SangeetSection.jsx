export default function SangeetSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-4 md:px-10 bg-gradient-to-b from-[#FFE3D3] to-[#F6BFA4] overflow-hidden">
      {/* Soft Glow Backgrounds */}
      <div className="absolute top-[-80px] left-[-60px] w-[350px] h-[350px] bg-[#ffdfba] opacity-40 rounded-full blur-[130px]"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-[380px] h-[380px] bg-[#ffccaa] opacity-40 rounded-full blur-[150px]"></div>

      {/* Layout Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        {/* IMAGE LEFT */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-slideLeft">
          <img
            src="/sangeet_night.png"
            alt="Sangeet Night"
            className="rounded-3xl border-4 border-white/80 shadow-[0_0_45px_rgba(255,150,120,0.6)] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transition duration-500 hover:scale-[1.03] hover:shadow-[0_0_70px_rgba(255,140,110,0.9)]"
          />
        </div>

        {/* TEXT RIGHT */}
        <div className="w-full md:w-1/2 text-center md:text-left animate-slideRight px-1 md:px-4">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#7A0038] drop-shadow-xl leading-tight mb-3">
            Sangeet Night
          </h2>

          <p className="text-lg md:text-2xl text-[#6b2a2a] mt-1 mb-8 font-medium">
            Saturday,{" "}
            <strong className="text-[#7A0038]">23 November 2025</strong>
          </p>

          <div className="bg-gradient-to-br from-white/85 to-[#ffe9d8]/95 backdrop-blur-xl shadow-[0_0_40px_rgba(255,180,150,0.55)] rounded-3xl p-6 md:p-10 border border-[#f3c7aa]">
            <p className="text-base md:text-lg text-[#5A453D] leading-relaxed mb-6">
              A glamorous night of music, rhythm, beautiful performances and
              joyful celebrations with friends & family.
            </p>

            <p className="text-lg md:text-xl text-[#7A0038] font-semibold">
              Time:{" "}
              <span className="font-normal text-[#4a3b35]">
                7:00 PM onwards
              </span>
            </p>

            <p className="text-lg md:text-xl text-[#7A0038] font-semibold mt-2">
              Venue:{" "}
              <span className="font-normal text-[#4a3b35]">
                Mangal Upvan (Utsav Upvan), Giridih, Jharkhand
              </span>
            </p>

            <p className="text-base md:text-lg text-[#5A453D] leading-relaxed mt-6">
              Be a part of this magical evening filled with dance, music, fun
              and unforgettable memories.
            </p>
          </div>

          <div className="mt-8 text-lg md:text-2xl text-[#7A0038] font-semibold animate-fadeInSlow">
            Dress Code:{" "}
            <span className="text-[#b54f4f] font-bold">Bollywood Glam ✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}
