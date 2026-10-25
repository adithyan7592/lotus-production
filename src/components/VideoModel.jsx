import { createPortal } from "react-dom"

export default function VideoModal({ video, close }) {
  if (!video) return null

  return createPortal(
    <div 
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-8"
      onClick={close}
    >
      {/* Modal Container */}
      <div 
        className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-lg text-white transition hover:bg-white hover:text-black"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Video Player */}
        <video
          src={video}
          autoPlay
          controls
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    </div>,
    document.body
  )
}
