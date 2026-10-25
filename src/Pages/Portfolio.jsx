import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { fadeUp } from "../animations/gsap"

const filters = [
  "All",
  "Brand Films",
  "Events & Launches",
  "Places & Facilities",
  "Aerial & Drone",
  "Product & Social",
]

const projects = [
  {
    id: 1,
    title: "Corporate Brand Film",
    category: "Brand Films",
    year: "2025",
    format: "Film / Reels / Cutdowns",
    description:
      "A polished brand-facing production built for websites, presentations, and paid campaigns.",
    poster: "/thumbs/Corporate.jpg",
  },
  {
    id: 2,
    title: "Launch Aftermovie",
    category: "Events & Launches",
    year: "2025",
    format: "Event Film / Highlights",
    description:
      "A cinematic recap that captures crowd energy, important moments, and brand atmosphere.",
    poster: "",
  },
  {
    id: 3,
    title: "Showroom Walkthrough",
    category: "Places & Facilities",
    year: "2025",
    format: "Walkthrough / Promo",
    description:
      "A clean visual journey through a physical space, designed to make the location feel premium.",
    poster: "",
  },
  {
    id: 4,
    title: "Drone Location Film",
    category: "Aerial & Drone",
    year: "2024",
    format: "Aerial Film / Establishers",
    description:
      "High-impact aerial visuals for properties, events, factories, campuses, and outdoor stories.",
    poster: "",
  },
  {
    id: 5,
    title: "Product Campaign Pack",
    category: "Product & Social",
    year: "2024",
    format: "Ads / Reels / Shorts",
    description:
      "Short-form visual assets created for product promotion, social media, and performance ads.",
    poster: "",
  },
  {
    id: 6,
    title: "Industrial Process Film",
    category: "Places & Facilities",
    year: "2024",
    format: "Factory Film / Documentation",
    description:
      "Structured production for manufacturing units, facilities, teams, machines, and business processes.",
    poster: "",
  },
  {
    id: 7,
    title: "Public Program Coverage",
    category: "Events & Launches",
    year: "2024",
    format: "Multi-Cam / Recap",
    description:
      "Coverage for programs that need documentation, highlight edits, and shareable communication assets.",
    poster: "",
  },
  {
    id: 8,
    title: "Social Media Content Day",
    category: "Product & Social",
    year: "2024",
    format: "Vertical Content Pack",
    description:
      "A production day planned to create multiple reels, short edits, teasers, and campaign-ready clips.",
    poster: "",
  },
]

function ProjectVisual({ project, index }) {
  const hasPoster = Boolean(project.poster)

  return (
    <div className="relative mb-6 aspect-[4/5] overflow-hidden border border-zinc-800 bg-zinc-950">
      {hasPoster ? (
        <img
          src={project.poster}
          alt={project.title}
          className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,223,154,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))] transition-transform duration-700 group-hover:scale-105" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

      <div className="absolute left-5 top-5 flex items-center gap-3">
        <span className="text-[10px] font-black text-[#00df9a]">
          0{index + 1}
        </span>
        <span className="h-px w-8 bg-[#00df9a]/60" />
      </div>

      <div className="absolute bottom-5 left-5 right-5">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#00df9a]">
          {project.category}
        </p>

        <h3 className="text-2xl font-black uppercase italic leading-none tracking-tight">
          {project.title}
        </h3>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  useEffect(() => {
    gsap.from(".port-fade", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
    })

    const timer = setTimeout(() => {
      fadeUp(".fade-up")
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pb-24 pt-36 text-white md:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,223,154,0.12),transparent_34%),radial-gradient(circle_at_15%_30%,rgba(255,255,255,0.05),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <section className=" mb-20">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.5em] text-[#00df9a]">
            Selected Works
          </p>

          <h1 className="whitespace-nowrap text-5xl font-black uppercase italic leading-none tracking-tighter md:text-8xl">
            Visual <span className="text-[#00df9a]">Proof.</span>
          </h1>

          <div className="mt-8 h-[2px] w-24 bg-[#00df9a]" />

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            A curated collection of production styles, visual direction, and creative output from Lotus Production.
          </p>
        </section>

        <section className=" mb-12 border-y border-zinc-900 py-6">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
              Browse by production style
            </p>

            <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
              Not seeing your exact requirement? Choose{" "}
              <span className="text-[#00df9a]">Custom Requirement</span> and
              we’ll plan it.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`border px-5 py-3 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-[#00df9a] bg-[#00df9a] text-black"
                    : "border-zinc-800 text-zinc-500 hover:border-[#00df9a]/50 hover:text-[#00df9a]"
                }`}
              >
                {filter}
              </button>
            ))}

            <Link
              to="/contact"
              className="border border-[#00df9a]/40 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#00df9a] transition-all duration-300 hover:bg-[#00df9a] hover:text-black"
            >
              Custom Requirement
            </Link>
          </div>
        </section>

        <section className="fade-up mb-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <article key={project.id} className="group">
              <ProjectVisual project={project} index={index} />

              <div className="flex items-start justify-between gap-6 border-b border-zinc-800 pb-6">
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                    {project.format}
                  </p>

                  <p className="text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                </div>

                <span className="text-[10px] text-zinc-600">
                  {project.year}
                </span>
              </div>
            </article>
          ))}
        </section>

        <section className="fade-up grid gap-8 border border-[#00df9a]/30 bg-[#00df9a]/5 p-8 md:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-[#00df9a]">
              Do not see your exact event?
            </p>

            <h2 className="mb-5 text-3xl font-black uppercase italic tracking-tighter md:text-5xl">
              Portfolio shows examples, not limits.
            </h2>

            <p className="max-w-2xl text-sm leading-relaxed text-zinc-300">
              A portfolio can never list every possible requirement. If the shoot is different, Lotus can still plan the right format, crew, camera approach, and final deliverables around your purpose.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <Link to="/clients">
              <button className="border border-[#00df9a] px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df9a] transition-all duration-700 hover:bg-[#00df9a] hover:text-black">
                Plan a Shoot
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
