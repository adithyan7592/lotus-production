import { useState } from "react"
import { Link } from "react-router-dom"
import LotusLogo from "../assets/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Trusted By", path: "/trusted-by" },  // ← correct path
    { name: "Clients", path: "/clients" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-5 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src={LotusLogo}
            alt="Lotus Production Logo"
            className="h-20 w-40 object-contain hover:scale-110 transition-transform duration-300 brightness-110 drop-shadow-[0_0_15px_rgba(0,223,154,0.3)]"
          />
        </Link>

        {/* HAMBURGER BUTTON */}
        <button
          className="md:hidden z-[110] p-2 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between items-end">
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? "w-full rotate-45 translate-y-2 bg-[#00df9a]" : "w-full"}`} />
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "w-4/5"}`} />
            <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? "w-full -rotate-45 -translate-y-2 bg-[#00df9a]" : "w-3/5"}`} />
          </div>
        </button>

        {/* FULL SCREEN MOBILE MENU */}
        <div className={`fixed inset-0 h-screen w-full bg-[#050505] z-[105] transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden flex flex-col items-center justify-center`}>
          <ul className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-3xl md:text-5xl uppercase tracking-[0.1em] font-black italic text-white hover:text-[#00df9a] transition-all block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-16 flex flex-col items-center gap-4">
            <div className="h-[1px] w-12 bg-[#00df9a] mb-2" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">
              Lotus Production 2026
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-bold italic">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="text-white hover:text-[#00df9a] transition-all">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
