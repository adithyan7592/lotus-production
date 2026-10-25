import { useEffect } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { fadeUp } from "../animations/gsap"

const productionGoals = [
  {
    num: "01",
    title: "Brand Presence",
    description:
      "For businesses that need a premium brand film, homepage video, company introduction, or campaign story.",
    outputs: ["Brand film", "Hero video", "Ad cuts"],
  },
  {
    num: "02",
    title: "Event Coverage",
    description:
      "For launches, openings, award nights, exhibitions, public programs, showroom events, and live brand moments.",
    outputs: ["Aftermovie", "Highlights", "Reels"],
  },
  {
    num: "03",
    title: "Space Showcase",
    description:
      "For showrooms, malls, offices, resorts, factories, facilities, campuses, and real estate spaces.",
    outputs: ["Walkthrough", "Drone visuals", "Photo set"],
  },
  {
    num: "04",
    title: "Product Promotion",
    description:
      "For product launches, demo videos, commercial visuals, short ads, social campaigns, and sales content.",
    outputs: ["Product film", "Demo video", "Short ads"],
  },
  {
    num: "05",
    title: "Social Content",
    description:
      "For brands that need reels, shorts, vertical videos, campaign edits, motion graphics, and monthly content.",
    outputs: ["Reels", "Shorts", "Motion edits"],
  },
  {
    num: "06",
    title: "Custom Requirement",
    description:
      "For ideas that do not fit into a normal category. We shape the shoot around your exact goal and audience.",
    outputs: ["Shoot plan", "Custom crew", "Final assets"],
  },
]

const briefQuestions = [
  "What should the audience feel, understand, or do after watching?",
  "Where will the final video be used — website, social media, ads, presentation, or event screen?",
  "Is there a date, location, product, person, or program involved?",
  "Do you need one main film or multiple short edits from the same shoot?",
]

const process = [
  {
    step: "01",
    title: "Share the goal",
    text: "You do not need to know the technical production name. Just tell us what you want the video to achieve.",
  },
  {
    step: "02",
    title: "We plan the format",
    text: "We suggest the shoot style, crew size, camera approach, duration, and final deliverables.",
  },
  {
    step: "03",
    title: "Production day",
    text: "We capture the required footage with a clean, cinematic, and brand-safe workflow.",
  },
  {
    step: "04",
    title: "Edit and deliver",
    text: "You receive polished videos, reels, photos, or campaign assets based on the agreed plan.",
  },
]

export default function Clients() {
  useEffect(() => {
    gsap.from(".planner-fade", {
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
            Production Guide
          </p>

          <h1 className="whitespace-nowrap text-5xl font-black uppercase italic leading-none tracking-tighter md:text-8xl">
            Plan <span className="text-[#00df9a]">a Shoot.</span>
          </h1>

          <div className="mt-8 h-[2px] w-24 bg-[#00df9a]" />

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            Not sure what type of video you need? Start with the purpose. Lotus Production will shape the right shoot plan, crew, format, and final output around your requirement.
          </p>
        </section>

        <section className=" mb-12 border-y border-zinc-900 py-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
              Start with your goal
            </p>

            <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
              This is not a package list. These are starting points to help us understand what your content should do.
            </p>
          </div>
        </section>

        <section className="fade-up mb-20 grid gap-px bg-zinc-800 md:grid-cols-2 xl:grid-cols-3">
          {productionGoals.map((goal) => (
            <article
              key={goal.title}
              className="group min-h-[330px] bg-[#050505] p-8 transition-colors duration-500 hover:bg-zinc-950"
            >
              <div className="mb-10 flex items-start justify-between">
                <span className="text-xs font-black text-[#00df9a]">
                  {goal.num}
                </span>

                <span className="h-10 w-10 rounded-full border border-zinc-800 transition-all duration-500 group-hover:border-[#00df9a]/50 group-hover:shadow-[0_0_30px_rgba(0,223,154,0.18)]" />
              </div>

              <h2 className="mb-5 text-2xl font-black uppercase italic tracking-tight transition-colors duration-300 group-hover:text-[#00df9a]">
                {goal.title}
              </h2>

              <p className="mb-8 text-sm leading-relaxed text-zinc-400">
                {goal.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {goal.outputs.map((output) => (
                  <span
                    key={output}
                    className="border border-zinc-800 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-zinc-500 transition-all duration-300 group-hover:border-[#00df9a]/30 group-hover:text-[#00df9a]/70"
                  >
                    {output}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="fade-up mb-20 grid gap-8 lg:grid-cols-12">
          <div className="border border-[#00df9a]/30 bg-[#00df9a]/5 p-8 md:p-10 lg:col-span-5">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-[#00df9a]">
              Not listed?
            </p>

            <h2 className="mb-6 text-3xl font-black uppercase italic tracking-tighter md:text-5xl">
              We still can plan it.
            </h2>

            <p className="mb-8 text-sm leading-relaxed text-zinc-300">
              Your requirement does not need to match a fixed category. If the idea is different, we will convert it into a practical production plan.
            </p>

            <Link to="/contact">
              <button className="border border-[#00df9a] px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df9a] transition-all duration-700 hover:bg-[#00df9a] hover:text-black">
                Send Requirement
              </button>
            </Link>
          </div>

          <div className="border border-zinc-800 p-8 md:p-10 lg:col-span-7">
            <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              Before contacting us
            </p>

            <div className="grid gap-px bg-zinc-800 md:grid-cols-2">
              {briefQuestions.map((question, index) => (
                <div key={question} className="bg-[#050505] p-6">
                  <span className="mb-6 block text-[10px] font-black text-[#00df9a]">
                    0{index + 1}
                  </span>

                  <p className="text-sm leading-relaxed text-zinc-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="fade-up mb-20 border-y border-zinc-900 py-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
              From idea to output
            </p>

            <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
              A simple production flow so every shoot has clarity before camera day.
            </p>
          </div>

          <div className="grid gap-px bg-zinc-800 md:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="bg-[#050505] p-7">
                <span className="mb-8 block text-xs font-black text-[#00df9a]">
                  {item.step}
                </span>

                <h3 className="mb-4 text-lg font-black uppercase italic tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="fade-up text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-zinc-500">
            Have a shoot in mind?
          </p>

          <h2 className="mx-auto mb-10 max-w-4xl text-4xl font-black uppercase italic tracking-tighter md:text-6xl">
            Tell us the purpose. We will suggest the production.
          </h2>

          <Link to="/contact">
            <button className="border border-[#00df9a] px-12 py-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df9a] transition-all duration-700 hover:bg-[#00df9a] hover:text-black">
              Plan My Shoot
            </button>
          </Link>
        </section>
      </div>
    </main>
  )
}

