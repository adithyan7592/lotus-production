import Lenis from "@studio-freight/lenis"

export function initLenis() {
  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
  })

  lenis.on("scroll", () => {
    window.dispatchEvent(new Event("lenis-scroll"))
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}
