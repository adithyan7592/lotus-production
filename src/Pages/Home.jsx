import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import PortfolioCard from "../components/PortfolioCard"
import blacky from "../blackbackground.gif"
import VideoModal from "../components/VideoModel"
import amruthikaVideo from "../assets/showcase/Amruthika.mp4"
import anantaVideo from "../assets/showcase/Ananta.mp4"
import ashokaVideo from "../assets/showcase/Ashoka.mp4"
import aswanimadomVideo from "../assets/showcase/Aswanimadom.mp4"
import goecVideo from "../assets/showcase/Goec.MP4"
import jayalekshmiVideo from "../assets/showcase/Jayalekshmi silks.mp4"

export default function Home() {
  const [featuredOpen, setFeaturedOpen] = useState(false)
  const featuredVideoRef = useRef(null)
  const ctaRef = useRef(null)
  const ctaGlowRef = useRef(null)

  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll(".works-jump, .featured-reveal, .service-reveal, .cta-reveal")
    )
    if (!items.length) return

    const reveal = () => {
      items.forEach((el) => {
        if (el.classList.contains("is-in")) return
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 40) {
          el.classList.add("is-in")
        }
      })
    }

    reveal()
    window.addEventListener("scroll", reveal, { passive: true })
    window.addEventListener("lenis-scroll", reveal)
    window.addEventListener("resize", reveal)
    const timer = window.setInterval(reveal, 350)

    return () => {
      window.removeEventListener("scroll", reveal)
      window.removeEventListener("lenis-scroll", reveal)
      window.removeEventListener("resize", reveal)
      window.clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    const video = featuredVideoRef.current
    if (!video) return

    const syncPlayback = () => {
      if (featuredOpen) {
        video.pause()
        return
      }

      const rect = video.getBoundingClientRect()
      const visible =
        rect.top < window.innerHeight * 0.85 &&
        rect.bottom > window.innerHeight * 0.15

      if (visible) {
        const playPromise = video.play()
        if (playPromise?.catch) playPromise.catch(() => {})
      } else {
        video.pause()
      }
    }

    syncPlayback()
    window.addEventListener("scroll", syncPlayback, { passive: true })
    window.addEventListener("lenis-scroll", syncPlayback)
    window.addEventListener("resize", syncPlayback)

    return () => {
      window.removeEventListener("scroll", syncPlayback)
      window.removeEventListener("lenis-scroll", syncPlayback)
      window.removeEventListener("resize", syncPlayback)
    }
  }, [featuredOpen])

  useEffect(() => {
    const section = ctaRef.current
    const glow = ctaGlowRef.current
    if (!section || !glow) return

    const onMove = (e) => {
      const rect = section.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      glow.style.setProperty("--cta-x", `${x}%`)
      glow.style.setProperty("--cta-y", `${y}%`)
    }

    section.addEventListener("pointermove", onMove)
    return () => section.removeEventListener("pointermove", onMove)
  }, [])

  return (
    <main className="bg-[#050505] text-white">

      <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            className="hero-motion absolute inset-0 h-[112%] w-[112%] -left-[6%] -top-[6%] max-w-none object-cover"
            src={blacky}
            alt="Lotus Production cinematic reel"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_60%_40%,transparent_0%,transparent_55%,rgba(0,0,0,0.28)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-10 h-[26%] bg-gradient-to-b from-black/45 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[36%] bg-gradient-to-t from-[#050505] via-[#050505]/55 to-transparent" />
        <div className="pointer-events-none absolute right-[8%] top-[28%] z-[11] h-40 w-40 rounded-full bg-[#00df9a]/10 blur-[80px]" />

        <div className="relative z-20 w-full px-6 pb-14 pt-28 md:px-20 md:pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="hero-fade hero-delay-1 mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[#00df9a]">
                The <span className="text-white">Liminal</span>
              </p>

              <h1 className="hero-fade hero-delay-2 text-[clamp(2.4rem,6vw,4.75rem)] font-serif italic leading-[0.94] tracking-tight text-white drop-shadow-[0_8px_40px_rgba(0,0,0,0.55)]">
                <span className="block">LOTUS</span>
                <span className="block text-[#00df9a]">PRODUCTION</span>
              </h1>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/portfolio"
                  className="hero-jump hero-delay-3 inline-flex items-center justify-center bg-[#00df9a] px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] text-black shadow-[0_0_28px_rgba(0,223,154,0.28)] transition-all duration-500 hover:scale-[1.05] hover:bg-white hover:shadow-[0_0_36px_rgba(255,255,255,0.25)]"
                >
                  Watch Selected Works
                </Link>
                <Link
                  to="/contact"
                  className="hero-jump hero-delay-4 inline-flex items-center justify-center border border-white/50 bg-black/35 px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-all duration-500 hover:scale-[1.05] hover:border-[#00df9a] hover:text-[#00df9a]"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pt-10 pb-16 md:pt-14 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="works-jump works-delay-1 mb-10 flex flex-col items-center text-center md:mb-12">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.45em] text-[#00df9a]">
              Portfolio
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-serif italic leading-none tracking-tight text-white">
              The  <span className="text-[#00df9a]">Showcase</span>
            </h2>
            <div className="mt-5 h-[2px] w-20 bg-[#00df9a]" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            <div className="works-jump works-delay-2">
              <PortfolioCard
                title="Goec"
                image="/thumbs/Factory.jpg"
                video={goecVideo}
              />
            </div>
            <div className="works-jump works-delay-3">
              <PortfolioCard
                title="Ananta"
                image="/thumbs/Corporate.jpg"
                video={anantaVideo}
              />
            </div>
            <div className="works-jump works-delay-4">
              <PortfolioCard
                title="Ashoka"
                image="/thumbs/Droneshots.jpg"
                video={ashokaVideo}
              />
            </div>
            <div className="works-jump works-delay-5">
              <PortfolioCard
                title="Aswanimadom"
                image="/thumbs/Showroom.jpg"
                video={aswanimadomVideo}
              />
            </div>
            <div className="works-jump works-delay-6">
              <PortfolioCard
                title="Amruthika Wellness"
                image="/thumbs/Amruthika.jpg"
                video={amruthikaVideo}
              />
            </div>
            <div className="works-jump works-delay-7">
              <PortfolioCard
                title="Jayalekshmi Silks"
                image="/thumbs/Restaurant.jpg"
                video={jayalekshmiVideo}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-[#050505] pt-14 pb-8 md:pt-24 md:pb-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,223,154,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <div className="featured-reveal featured-delay-1 mb-8 flex items-end justify-between gap-6 md:mb-12">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.45em] text-[#00df9a]">
                Featured Reel
              </p>
              <h2 className="text-[clamp(1.8rem,4.5vw,3.25rem)] font-serif italic leading-none tracking-tight text-white">
                Now <span className="text-[#00df9a]">Playing</span>
              </h2>
            </div>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.35em] text-white/35 md:block">
              01 / Highlight
            </span>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="featured-reveal featured-delay-2 group relative lg:col-span-7">
              <div
                className="featured-frame relative aspect-[16/10] cursor-pointer overflow-hidden border border-white/10 bg-zinc-900"
                onClick={() => setFeaturedOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setFeaturedOpen(true)
                }}
                aria-label="Open featured reel"
              >
                <video
                  ref={featuredVideoRef}
                  src="/videos/featured.mp4"
                  className="featured-media h-full w-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-5">
              <div className="featured-reveal featured-delay-3 mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#00df9a]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#00df9a]">
                  Latest Drop
                </p>
              </div>

              <h3 className="featured-reveal featured-delay-4 text-[clamp(2rem,4vw,3.4rem)] font-serif italic leading-[0.95] tracking-tight text-white">
                Jayalekshmi Silks
                <span className="mt-1 block text-[#00df9a]">Cochin</span>
              </h3>

              <p className="featured-reveal featured-delay-5 mt-5 max-w-sm text-sm leading-relaxed text-white/55">
                A cinematic cut of festivities — drone and high-speed moments in one reel.
              </p>

              <Link
                to="/portfolio"
                className="featured-reveal featured-delay-6 mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#00df9a] transition hover:gap-4 hover:text-white"
              >
                View Work
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/5 bg-black pt-10 pb-12 md:pt-12 md:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(0,223,154,0.07),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="service-reveal service-delay-1 mb-3 text-[10px] font-bold uppercase tracking-[0.45em] text-[#00df9a]">
                What We Do
              </p>
              <h2 className="service-reveal service-delay-2 text-[clamp(1.8rem,4.5vw,3.25rem)] font-serif italic leading-none tracking-tight text-white">
                Our <span className="text-[#00df9a]">Services</span>
              </h2>
            </div>
            <p className="service-reveal service-delay-3 max-w-sm text-sm leading-relaxed text-white/45 md:text-right">
              End-to-end production — from the first frame in the sky to the final grade.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "01", title: "Drone Cinematography", desc: "Aerial perspectives that tell stories from above." },
              { num: "02", title: "Corporate Production", desc: "Professional brand films and event documentation." },
              { num: "03", title: "Event Highlights", desc: "Capturing moments that last a lifetime." },
              { num: "04", title: "Post Production", desc: "Color grading and editing to cinematic standards." },
            ].map((s, i) => (
              <div
                key={s.num}
                className={`service-reveal service-card group relative border-t border-white/10 py-8 pr-6 sm:px-5 sm:py-10 lg:border-t-0 lg:border-l lg:border-white/10 lg:first:border-l-0 lg:pl-6 ${
                  i === 0
                    ? "service-delay-4"
                    : i === 1
                      ? "service-delay-5"
                      : i === 2
                        ? "service-delay-6"
                        : "service-delay-7"
                }`}
              >
                <span className="service-rule absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-[#00df9a] transition-transform duration-500 group-hover:scale-x-100 lg:left-0 lg:top-0 lg:h-full lg:w-px lg:origin-top lg:scale-x-100 lg:scale-y-0 lg:group-hover:scale-y-100" />
                <p className="mb-5 font-mono text-xs tracking-[0.2em] text-[#00df9a]">{s.num}</p>
                <h3 className="mb-4 font-serif text-2xl italic leading-tight text-white transition duration-300 group-hover:translate-x-1 group-hover:text-[#00df9a] md:text-[1.65rem]">
                  {s.title}
                </h3>
                <p className="max-w-[16rem] text-sm leading-relaxed text-white/45 transition group-hover:text-white/65">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="service-reveal service-delay-8 mt-12 text-center md:mt-14">
            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-[#00df9a] px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#00df9a] transition-all duration-500 hover:bg-[#00df9a] hover:text-black md:px-10"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        className="cta-stage relative flex min-h-[58vh] items-center justify-center overflow-hidden border-t border-white/5 pt-12 pb-20 text-center md:min-h-[62vh] md:pt-14 md:pb-24"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={blacky}
            alt=""
            aria-hidden
            className="cta-bg absolute inset-0 h-[115%] w-[115%] -left-[7.5%] -top-[7.5%] max-w-none object-cover opacity-40"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#050505]/75" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div
          ref={ctaGlowRef}
          className="cta-glow pointer-events-none absolute inset-0 z-[2]"
          aria-hidden
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00df9a]/10 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8">
          <p className="cta-reveal cta-delay-1 mb-4 text-[10px] font-bold uppercase tracking-[0.45em] text-[#00df9a]">
            Hire Our Studio
          </p>

          <div className="cta-reveal cta-delay-2 mx-auto mb-6 h-px w-16 origin-center bg-[#00df9a]/cta-line" />

          <h2 className="cta-reveal cta-delay-3 mx-auto max-w-4xl font-serif text-[clamp(2.1rem,5.5vw,4.25rem)] italic leading-[1.05] tracking-tight text-white">
            Always ready to take a{" "}
            <span className="cta-accent text-[#00df9a]">perfect shot</span>
          </h2>

          <p className="cta-reveal cta-delay-4 mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/50">
            From first frame to final grade — let’s build something cinematic together.
          </p>

          <div className="cta-reveal cta-delay-5 mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-12">
            <Link
              to="/contact"
              className="cta-btn inline-flex items-center justify-center bg-[#00df9a] px-10 py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] text-black shadow-[0_0_28px_rgba(0,223,154,0.28)] transition-all duration-500 hover:scale-[1.05] hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.28)]"
            >
              Get In Touch
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center border border-white/40 bg-black/30 px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-all duration-500 hover:scale-[1.05] hover:border-[#00df9a] hover:text-[#00df9a]"
            >
              View Work
            </Link>
          </div>
        </div>
      </section>

      {featuredOpen && (
        <VideoModal
          video="/videos/featured.mp4"
          close={() => setFeaturedOpen(false)}
        />
      )}

    </main>
  )
}