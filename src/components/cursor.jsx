import { useEffect } from "react"
import gsap from "gsap"

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor")

    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
      })
    })

    document.querySelectorAll(".magnetic").forEach((el) => {
      el.addEventListener("mouseenter", () =>
        gsap.to(cursor, { scale: 2 })
      )
      el.addEventListener("mouseleave", () =>
        gsap.to(cursor, { scale: 1 })
      )
    })
  }, [])

  return <div className="cursor"></div>
}
