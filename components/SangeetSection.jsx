export default function SangeetSection() {
  return (
    <section
      className="relative w-full py-32 md:py-40 px-4 md:px-10 
                        bg-gradient-to-b from-[#FFE3D3] to-[#F6BFA4] overflow-hidden"
    >
      {/* Expanded Desktop Glow */}
      <div className="absolute top-0 left-[-100px] w-[500px] h-[500px] bg-[#ffdfba] opacity-50 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 right-[-150px] w-[550px] h-[550px] bg-[#ffc7a2] opacity-50 rounded-full blur-[180px]"></div>

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-[#fff6e2] rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2.8 + Math.random() * 3}s`,
            }}
          ></span>
        ))}
      </div>

      {/* IMAGE FIRST */}
      <div className="flex justify-center mb-14 animate-slideDown">
        <img
          src="/sangeet_night.png"
          alt="Sangeet Night"
          className="rounded-3xl border-4 border-white/80 shadow-[0_0_55px_rgba(255,150,120,0.8)]
                     w-full max-w-sm md:max-w-lg lg:max-w-3xl  
                     hover:scale-[1.04] hover:shadow-[0_0_80px_rgba(255,140,110,1)]
                     transition duration-500"
        />
      </div>

      {/* TEXT SECTION CENTERED */}
      <div className="relative max-w-5xl mx-auto text-center animate-fadeIn px-2 md:px-8">
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#7A0038] drop-shadow-xl leading-tight">
          ✨ Sangeet Night ✨
        </h2>

        <p className="text-xl md:text-3xl text-[#6b2a2a] tracking-wide mt-4 mb-12 font-medium">
          Saturday, <strong className="text-[#7A0038]">23 November 2025</strong>
        </p>

        {/* Elegant Box */}
        <div
          className="bg-gradient-to-br from-white/85 to-[#ffe9d8]/90 backdrop-blur-2xl 
                        shadow-[0_0_50px_rgba(255,180,150,0.65)]
                        rounded-3xl p-8 md:p-14 border border-[#f3c7aa] animate-slideUp"
        >
          <p className="text-lg md:text-xl text-[#5A453D] leading-relaxed mb-8 md:mb-10">
            A night of rhythm, charm, joyful dances and warm laughter as we
            begin our celebrations with music and magic in the air.
          </p>

          <p className="text-xl md:text-2xl text-[#7A0038] font-semibold">
            Time:{" "}
            <span className="font-normal text-[#4a3b35]">7:00 PM onwards</span>
          </p>

          <p className="text-xl mt-3 md:text-2xl text-[#7A0038] font-semibold">
            Venue:{" "}
            <span className="font-normal text-[#4a3b35]">
              Mangal Upvan (Utsav Upvan), Giridih, Jharkhand
            </span>
          </p>

          <p className="text-lg md:text-xl text-[#5A453D] leading-relaxed mt-8">
            Join us for a sparkling evening of sangeet, performances and
            beautiful celebrations with family & friends.
          </p>
        </div>

        <div className="mt-12 text-xl md:text-3xl text-[#7A0038] font-semibold animate-fadeInSlow">
          Dress Code:{" "}
          <span className="text-[#b54f4f] font-bold">Bollywood Glam ✨</span>
        </div>
      </div>
    </section>
  );
}
