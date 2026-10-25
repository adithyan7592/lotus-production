import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-32 md:pt-40 pb-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20">

        <div className="space-y-10 md:space-y-12">
          <h2 className="text-5xl md:text-8xl font-serif italic tracking-tight md:tracking-tighter leading-[0.95]">
            Stay <br /><span className="text-[#00df9a]">Updated</span>
          </h2>
          <div className="space-y-6 text-zinc-400 font-light tracking-wide text-sm">
            <p className="flex flex-col">
              <span className="text-white text-xs uppercase tracking-widest mb-2 font-bold">Location</span>
              Lotus Production,<br />39/2475-B1, Suite i92,<br />LR Towers, SJRRA 104,<br />South Janatha Road, Palarivattom,<br />Kochi, Kerala 682025
            </p>
            <p className="flex flex-col">
              <span className="text-white text-xs uppercase tracking-widest mb-2 font-bold">Direct Line</span>
              +91 94960 57855
            </p>
            <p className="flex flex-col">
              <span className="text-white text-xs uppercase tracking-widest mb-2 font-bold">Email</span>
              <span className="underline decoration-[#00df9a]/30">lotuspro.in@gmail.com</span>
            </p>
          </div>
          <div>
            <label className="text-white text-[10px] font-black uppercase tracking-[0.2em] block mb-5">Follow Us</label>
            <div className="flex gap-6">
              {[
                { icon: <FaFacebookF />, link: "https://facebook.com/yourprofile" },
                { icon: <FaYoutube />,   link: "https://www.youtube.com/channel/UCPgpIrCnSM_wYQYtj6rY95A" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/lotuspro.in?igsh=MW54NHM4ajRiZ2EyYw%3D%3D&utm_source=qr" },
                { icon: <FaWhatsapp />,  link: "https://wa.me/+919496057855" },
              ].map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-[#00df9a] hover:-translate-y-1 transition-all duration-300 text-xl">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Name *</label>
              <input type="text" name="name" required className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-[#00df9a] transition-all text-white" />
            </div>
            <div>
              <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Email *</label>
              <input type="email" name="email" required className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-[#00df9a] transition-all text-white" />
            </div>
          </div>
          <div>
            <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Subject *</label>
            <input type="text" name="subject" required className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-[#00df9a] transition-all text-white" />
          </div>
          <div>
            <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Message *</label>
            <textarea name="message" rows="4" required className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-[#00df9a] transition-all resize-none text-white" />
          </div>
          <button type="submit" className="self-start px-10 md:px-12 py-4 border border-white rounded-full text-white font-bold uppercase tracking-widest text-[10px] hover:bg-[#00df9a] hover:border-[#00df9a] hover:text-black transition-all duration-500">
            Send Message
          </button>
        </form>

      </div>
      
    </main>
  )
}