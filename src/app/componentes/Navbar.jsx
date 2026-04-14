import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#0e0e13]/80 backdrop-blur-xl flex justify-between items-center px-8 py-4 w-full fixed top-0 z-50 border-b border-[#1f1f26]">

      {/* Logo */}
      <div className="text-2xl font-black tracking-widest text-[#BD00FF] font-headline uppercase">
        MONOLITH_PURPLE
      </div>

      {/* Nav */}
      <nav className="hidden md:flex items-center space-x-10 font-label tracking-tighter uppercase">
        <Link href="/" className="text-slate-400 font-medium hover:text-[#BD00FF] transition-colors duration-300 focus:border-b-2 border-[#BD00FF] focus:text-[#BD00FF]">
          HOME
        </Link>
        <Link href="/catalogo" className="text-slate-400 font-medium hover:text-[#BD00FF] transition-colors duration-300 focus:border-b-2 border-[#BD00FF] focus:text-[#BD00FF]">
          CATALOGO
        </Link>
        <Link href="/newdrops" className="text-slate-400 font-medium hover:text-[#BD00FF] transition-colors duration-300 focus:border-b-2 border-[#BD00FF] focus:text-[#BD00FF]">
          NEW_DROPS
        </Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-[#BD00FF]">
        <button className="hover:text-white transition-colors">
          <span className="material-symbols-outlined">search</span>
        </button>

        <button className="hover:text-white transition-colors relative">
          <span className="material-symbols-outlined">car</span>
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 flex items-center justify-center font-bold">
            3
          </span>
        </button>
        <Link href="/perfil">
        <div className="w-10 h-10 bg-zinc-800 border border-zinc-700 flex items-center justify-center">
          <img
            alt="User"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-EEJmwO6iucyCBqoWu6fauuDL_ysrj6-6GY6o8WFw_DyMsFr0uDqTGDj0Z_RGNJXFuFPuG5BH0hHdU8VI8lv-XNr6SPIbVwWh7_AqY6Fo2MnqpyfznCZlFN1q2zAwldnQMXeUY2l82dDYlMopEjiJbChsPFBuTiuHzNwTl-jiuGOdhdN0-F9J43XalDLVPK5FqEIPgecHZAOgQ9CvlS2aunmZsaotdNDAilg9TX9HguVMFYWQUwK-W4vtxI6xpsmd17qfCPlrnsQ"
          />
        </div>
        </Link>
      </div>

    </header>
  );
}