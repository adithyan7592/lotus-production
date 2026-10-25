import { useState } from "react"
import VideoModal from "./VideoModel"

export default function PortfolioCard({ title, image, video }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative group cursor-pointer overflow-hidden rounded-xl bg-zinc-800 h-64"
      >
        {/* Thumbnail image */}
        {image ? (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900" />
        )}

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl">
            ▶
          </div>
        </div>

        {/* Title */}
        <h3 className="absolute bottom-4 left-4 z-10 font-serif text-lg italic tracking-tight">
          {title}
        </h3>
      </div>

      {open && (
        <VideoModal
          video={video}
          close={() => setOpen(false)}
        />
      )}
    </>
  )
}
