import Forum from "../assets/Forum.png"
import Lexus from "../assets/lexux.png"
import Muthoot from "../assets/Muthoot.png"
import Ashtamudi from "../assets/Ashtamudi.png"
import Sarathy from "../assets/Sarathy.png"
import Aswanimadom from "../assets/Aswanimadom.png"
import H from "../assets/h2o.png"
import finespace from "../assets/finespace.png"
import luxon from "../assets/Luxon.png"
import Jayabharatham from "../assets/Jayabharatham.png"
import MOUDLE from "../assets/MOUDLE5.png"
import Plantis from "../assets/Plantis.png"
import Kia from "../assets/IncheonKia.png"
import Tata from "../assets/MuthootTata.png"
import Ushas from "../assets/Ushas.png"
import Dheemahi from "../assets/Dheemahi.png"
import Goec from "../assets/goec.png"
import Supreme from "../assets/Supreme.png"
import Palathra from "../assets/Palathraa.png"
import Kinder from "../assets/Kinder.PNG"
import { Link } from "react-router-dom"

const brands = [
  { name: "Forum Mall",      src: Forum,         industry: "Retail & Hospitality", invert: true },
  { name: "Lexus Motors",    src: Lexus,         industry: "Automotive",           invert: true },
  { name: "Muthoot Finance", src: Muthoot,       industry: "Finance" },
  { name: "Ashtamudi",       src: Ashtamudi,     industry: "Tourism" },
  { name: "Sarathy",         src: Sarathy,       industry: "Events" },
  { name: "Aswanimadom",     src: Aswanimadom,   industry: "Lifestyle" },
  { name: "H2O",             src: H,             industry: "Technology" },
  { name: "Finespace",       src: finespace,     industry: "Events" },
  { name: "Luxon",           src: luxon,         industry: "Real Estate" },
  { name: "Jayabharatham",   src: Jayabharatham, industry: "Events",      scale: "scale-150" },
  { name: "Muthoot Tata",    src: Tata,          industry: "Automotive",  scale: "scale-125" },
  { name: "Kia",             src: Kia,           industry: "Automotive" },
  { name: "MOUDLE",          src: MOUDLE,        industry: "Real Estate" },
  { name: "Plantis",         src: Plantis,       industry: "Real Estate" },
  { name: "Ushas",           src: Ushas,         industry: "Education",   scale: "scale-125", invert: true },
  { name: "Dheemahi",        src: Dheemahi,      industry: "Education" },
  { name: "GOEC",            src: Goec,          industry: "Education" },
  { name: "Supreme",         src: Supreme,       industry: "FMCG" },
  { name: "Palathra",        src: Palathra,      industry: "FMCG" },
  { name: "Kinder",          src: Kinder,        industry: "FMCG" },
]

const testimonials = [
  {
    quote: "Lotus Pro captured our mall launch with a level of cinematic quality we hadn't seen from a local production house. Every frame looked like a feature film.",
    author: "Marketing Head",
    company: "Forum Mall, Kochi",
  },
  {
    quote: "The drone footage from our Lexus showroom event was outstanding. Clean, precise, and delivered on time. We've already booked them for the next campaign.",
    author: "Brand Manager",
    company: "Lexus Motors, Kerala",
  },
  {
    quote: "Professional team, premium output. The highlight reel from our gala event is something we proudly share with every new partner.",
    author: "PR Director",
    company: "Muthoot Finance",
  },
]

const stats = [
  { value: "50+",  label: "Projects Delivered" },
  { value: "30+",  label: "Brands Trusted Us" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "3+",   label: "Years in Kerala" },
]

export default function TrustedBy() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-32 md:pt-36 pb-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="mb-6">
          <p className="text-[#00df9a] text-xs uppercase tracking-[0.3em] font-bold mb-4">Our Partners</p>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black italic uppercase tracking-tight leading-none">Trusted <span className="text-[#00df9a]">By.</span></h1>
          <div className="h-[2px] w-20 bg-[#00df9a] mt-6" />
        </div>

        <p className="text-zinc-400 max-w-xl text-sm leading-relaxed mb-16">
          From established corporations to ambitious local startups — these are the brands that chose Lotus Pro to tell their story.
        </p>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-zinc-800">
          {stats.map((s) => (
            <div key={s.label}>
              <h3 className="text-4xl md:text-5xl font-black text-[#00df9a]">{s.value}</h3>
              <p className="text-[10px] uppercase text-zinc-500 tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>

       <div className="mb-12">
     <p className="text-[#00df9a] text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Brands We've Worked With</p>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-zinc-800">
            {brands.map((brand) => (
          <div key={brand.name} className="group bg-[#050505] flex flex-col items-center justify-center gap-2 py-5 px-3 hover:bg-zinc-900 transition-colors duration-300">
  <img
    src={brand.src}
    alt={brand.name}
    className={`h-8 md:h-14 max-w-[80px] md:max-w-[120px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ${brand.invert ? "invert" : ""} ${brand.scale || "scale-100"}`}
  />
                <p className="text-[9px] uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors text-center">{brand.industry}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <p className="text-[#00df9a] text-[10px] uppercase tracking-[0.4em] font-bold mb-10">What They Say</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-zinc-800 p-6 md:p-8 hover:border-[#00df9a]/30 transition-all duration-500 flex flex-col justify-between gap-6">
                <span className="text-[#00df9a] text-5xl font-serif leading-none select-none">"</span>
                <p className="text-zinc-300 text-sm leading-relaxed font-light -mt-4">{t.quote}</p>
                <div className="border-t border-zinc-800 pt-4">
                  <p className="text-white text-xs font-bold uppercase tracking-wide">{t.author}</p>
                  <p className="text-[#00df9a] text-[10px] uppercase tracking-widest mt-1">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 pb-16 border-b border-zinc-800">
          <p className="text-[#00df9a] text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Industries We Serve</p>
          <div className="flex flex-wrap gap-2">
            {["Automotive","Finance","Retail","Tourism","Real Estate","Technology","Healthcare","Events","Hospitality","Education","Manufacturing","FMCG"].map((ind) => (
              <span key={ind} className="px-4 py-2 border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-widest hover:border-[#00df9a]/40 hover:text-[#00df9a] transition-all duration-300 cursor-default">
                {ind}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-zinc-500 text-xs uppercase tracking-[0.4em] mb-4">Join the list</p>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-10">Your Brand, Next</h2>
          <Link to="/contact">
            <button className="px-12 py-4 border border-[#00df9a] text-[#00df9a] uppercase text-xs tracking-[0.3em] font-bold hover:bg-[#00df9a] hover:text-black transition-all duration-700">
              Work With Us
            </button>
          </Link>
        </div>

      </div>
    </main>
  )
}