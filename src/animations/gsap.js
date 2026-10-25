import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const fadeUp = (selector, trigger) => {
  gsap.from(selector, {
    y: 40,
    opacity: 0,
    duration: 1.1,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: trigger || selector,
      start: "top 88%",
      toggleActions: "play none none none",
    },
  })
}
