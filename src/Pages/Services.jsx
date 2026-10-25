import { useEffect } from "react"
import gsap from "gsap"
import { fadeUp } from "../animations/gsap"
import { Link } from "react-router-dom"

const services = [
  {
    num: "01",
    title: "Drone Cinematography",
    description:
      "Breathtaking aerial footage captured with professional-grade drones. Perfect for real estate, events, industrial sites, and landscape documentaries. We are licensed drone operators in Kerala.",
    tags: ["Aerial", "Outdoor", "4K/8K"],
  },
  {
    num: "02",
    title: "Corporate Video Production",
    description:
      "From brand films to product launches, we handle end-to-end corporate video production — scripting, shooting, editing, and delivery. We've worked with Forum Mall, Lexus, and Muthoot Finance.",
    tags: ["Branding", "Events", "Interviews"],
  },
  {
    num: "03",
    title: "Event Coverage",
    description:
      "Multi-camera event documentation for weddings, product launches, galas, and concerts. We capture the energy of your event in a cinematic after-movie that you'll watch again and again.",
    tags: ["Multi-Cam", "Live Events", "After-Movie"],
  },
  {
    num: "04",
    title: "Post-Production & Color",
    description:
      "Professional color grading, sound design, motion graphics, and editing. We bring existing footage to life or take a raw shoot and transform it into a polished final product.",
    tags: ["Color Grading", "Motion Graphics", "Sound"],
  },
  {
    num: "05",
    title: "Photography",
    description:
      "Commercial and editorial photography for factories, showrooms, products, and events. Every image is composed with a filmmaker's eye — cinematic, intentional, impactful.",
    tags: ["Commercial", "Editorial", "Product"],
  },
  {
    num: "06",
    title: "Social Media Content",
    description:
      "Short-form vertical content for Instagram Reels, YouTube Shorts, and TikTok. Optimized for engagement, shot and edited to your brand's visual identity.",
    tags: ["Reels", "Shorts", "Vertical Format"],
  },
]

export default function Services() {
  useEffect(() => {
    gsap.from(".svc-fade", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    })

    const timer = setTimeout(() => {
      fadeUp(".fade-up")
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-[#050505] min-h-screen text-white pt-36 pb-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <p className="text-[#00df9a] text-[10px] uppercase tracking-[0.5em] font-bold mb-4">
            What We Do
          </p>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
            Services
          </h1>
          <div className="h-[2px] w-20 bg-[#00df9a] mt-6" />
        </div>

        {/* Services List */}
        <div className="space-y-0 fade-up">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className="group grid md:grid-cols-12 gap-8 items-start py-12 border-b border-zinc-800 hover:border-[#00df9a]/40 transition-all duration-500 cursor-default"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="text-[#00df9a] text-xs font-black uppercase">{svc.num}</span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="text-2xl md:text-3xl font-bold italic uppercase tracking-tight group-hover:text-[#00df9a] transition-colors duration-300">
                  {svc.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-zinc-400 leading-relaxed text-sm">{svc.description}</p>
              </div>

              {/* Tags */}
              <div className="md:col-span-2 flex flex-wrap gap-2 justify-end">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] uppercase tracking-widest border border-zinc-700 text-zinc-500 px-3 py-1 group-hover:border-[#00df9a]/30 group-hover:text-[#00df9a]/70 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center fade-up">
          <p className="text-zinc-500 text-xs uppercase tracking-[0.4em] mb-6">Ready to start?</p>
          <h2 className="text-4xl font-bold italic uppercase mb-10">Let's Make Something Great</h2>
          <Link to="/contact">
            <button className="px-12 py-4 border border-[#00df9a] text-[#00df9a] uppercase text-xs tracking-[0.3em] font-bold hover:bg-[#00df9a] hover:text-black transition-all duration-700">
              Contact Us
            </button>
          </Link>
        </div>

      </div>
    </main>
  )
}