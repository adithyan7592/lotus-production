import { Link } from "react-router-dom"

export default function About() {
  return (
    <main className="bg-[#050505] min-h-screen text-white flex flex-col items-center pt-32 md:pt-32 pb-20 px-6">

      {/* Header */}
      <div className="max-w-4xl w-full text-center mb-8 md:mb-20">
        <h2 className="text-4xl md:text-7xl font-black italic tracking-tight md:tracking-tighter uppercase leading-none">
          About <span className="text-[#00df9a]">Us</span>
        </h2>
        <p className="mt-4 text-zinc-500 text-[10px] uppercase tracking-[0.4em] font-bold">
          Lotus Production / Cinematic Excellence / Since 2023
        </p>
      </div>

      {/* Main Grid */}
     <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 md:gap-20 items-start">
        <div className="space-y-10">
          <div>
            <label className="text-[#00df9a] text-[10px] font-black uppercase tracking-[0.2em] block mb-4">The Vision</label>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-300">
              We bring stories to life — <span className="text-[#00df9a]">stories that define brands.</span>
            </p>
          </div>
          <div>
            <label className="text-[#00df9a] text-[10px] font-black uppercase tracking-[0.2em] block mb-4">Our Expertise</label>
            <ul className="space-y-4 text-base md:text-lg">
              <li className="flex items-center gap-3 border-b border-zinc-800 pb-3"><span className="text-[#00df9a]">01.</span> Drone Cinematography</li>
              <li className="flex items-center gap-3 border-b border-zinc-800 pb-3"><span className="text-[#00df9a]">02.</span> Corporate Production</li>
              <li className="flex items-center gap-3 border-b border-zinc-800 pb-3"><span className="text-[#00df9a]">03.</span> Event Highlights</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col space-y-10">
          <div className="p-6 md:p-8 border border-zinc-800 bg-zinc-900/30 rounded-sm">
            <label className="text-[#00df9a] text-[10px] font-black uppercase tracking-[0.2em] mb-6 block">Production Stats</label>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-black text-white">50+</h4>
                <p className="text-[10px] uppercase text-zinc-500 tracking-widest mt-2">Projects</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white">100%</h4>
                <p className="text-[10px] uppercase text-zinc-500 tracking-widest mt-2">Quality</p>
              </div>
            </div>
          </div>
          <p className="text-zinc-500 text-sm leading-loose">
            Based in Kerala, Lotus Production was founded to bridge the gap between technical skill and creative vision. Our team uses state-of-the-art equipment to ensure every project meets international standards.
          </p>
        </div>
      </div>

      {/* Equipment Strip */}
      <div className="max-w-5xl w-full mt-8 md:mt-20 pt-6 md:pt-12 border-t border-zinc-800">
        <label className="text-[#00df9a] text-[10px] font-black uppercase tracking-[0.2em] block mb-8">Our Equipment</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "DJI Mavic 3 Pro", type: "Drone" },
            { name: "Sony FX3",        type: "Cinema Camera" },
            { name: "DaVinci Resolve", type: "Color Grading" },
            { name: "Adobe Premiere",  type: "Post Production" },
          ].map((e) => (
            <div key={e.name} className="border-t border-zinc-800 pt-4 group hover:border-[#00df9a] transition-all duration-300">
              <p className="text-white text-sm font-bold group-hover:text-[#00df9a] transition-colors duration-300">{e.name}</p>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">{e.type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl w-full mt-8 md:mt-16 pt-6 md:pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-400 text-sm max-w-md">
          Ready to bring your vision to life? Let's create something extraordinary together.
        </p>
        <Link to="/contact">
          <button className="px-10 py-4 border border-[#00df9a] text-[#00df9a] uppercase text-xs tracking-[0.3em] font-bold hover:bg-[#00df9a] hover:text-black transition-all duration-500 whitespace-nowrap">
            Work With Us
          </button>
        </Link>
      </div>

    </main>
  )
}