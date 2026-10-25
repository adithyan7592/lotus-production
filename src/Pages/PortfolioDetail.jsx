import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import gsap from "gsap"

// Dummy data — replace with your real projects or Sanity CMS fetch
const projects = {
  1: {
    title: "Factory Shoots",
    category: "Industrial",
    year: "2025",
    client: "Confidential",
    role: "Full Production",
    location: "Kochi Industrial Zone",
    description:
      "A comprehensive visual documentation of a state-of-the-art manufacturing facility. We used a combination of drone aerials, tracking shots, and macro close-ups to show the precision and scale of modern industrial production.",
    video: "/videos/factory.mp4",
  },
  // Add more as needed
}

export default function PortfolioDetail() {
  const { id } = useParams()
  const project = projects[id]

  useEffect(() => {
    gsap.from(".detail-fade", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    })
  }, [])

  if (!project) {
    return (
      <main className="bg-[#050505] min-h-screen text-white flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold italic uppercase mb-6">Project Not Found</h2>
        <Link to="/portfolio" className="text-[#00df9a] uppercase text-xs tracking-widest hover:underline">
          ← Back to Portfolio
        </Link>
      </main>
    )
  }

  return (
    <main className="bg-[#050505] min-h-screen text-white pt-36 pb-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Back link */}
        <Link to="/portfolio" className="detail-fade text-zinc-500 text-xs uppercase tracking-widest hover:text-[#00df9a] transition-colors flex items-center gap-2 mb-16">
          ← Portfolio
        </Link>

        {/* Title block — TANK style */}
        <div className="detail-fade mb-16">
          <p className="text-[#00df9a] text-[10px] uppercase tracking-[0.5em] font-bold mb-4">
            {project.category}
          </p>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
            {project.title}
          </h1>
        </div>

        {/* Meta row */}
        <div className="detail-fade flex flex-wrap gap-0 mb-20 pb-12 border-b border-zinc-800">
          {[
            { label: "Client", value: project.client },
            { label: "Year", value: project.year },
            { label: "Role", value: project.role },
            { label: "Location", value: project.location },
          ].map((m, i, arr) => (
            <div
              key={m.label}
              className={`pr-10 ${i < arr.length - 1 ? "border-r border-zinc-800 mr-10" : ""}`}
            >
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">{m.label}</p>
              <p className="text-white font-medium text-sm">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Video player */}
        <div className="detail-fade aspect-video bg-zinc-900 rounded-sm overflow-hidden mb-20 border border-white/5">
          {project.video ? (
            <video
              src={project.video}
              controls
              className="w-full h-full object-cover"
              poster="/thumbs/placeholder.jpg"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-600 italic uppercase tracking-widest text-sm">
              Video Coming Soon
            </div>
          )}
        </div>

        {/* Description */}
        <div className="detail-fade max-w-3xl">
          <label className="text-[#00df9a] text-[10px] font-black uppercase tracking-[0.2em] block mb-6">
            About This Project
          </label>
          <p className="text-zinc-300 text-xl leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Next Project CTA */}
        <div className="detail-fade mt-32 pt-12 border-t border-zinc-800 flex items-center justify-between">
          <span className="text-zinc-600 text-xs uppercase tracking-widest">Next Project</span>
          <Link to="/portfolio" className="text-2xl font-bold italic uppercase hover:text-[#00df9a] transition-colors">
            View All Works →
          </Link>
        </div>

      </div>
    </main>
  )
}