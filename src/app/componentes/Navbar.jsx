import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#0e0e13]/80 backdrop-blur-xl flex justify-between items-center px-8 py-4 w-full fixed top-0 z-50 border-b border-[#1f1f26]">

      {/* Logo */}
      <div className="text-2xl font-black tracking-widest text-[#BD00FF] font-headline uppercase">
        SHUSHU PURPLE
      </div>

      {/* Nav */}
      <nav className="hidden md:flex items-center space-x-10 font-label tracking-tighter uppercase">
        <Link href="#" className="text-[#BD00FF] border-b-2 border-[#BD00FF] pb-1">
          CATALOG
        </Link>
        <Link href="#" className="text-slate-400 font-medium hover:text-[#BD00FF] transition-colors duration-300">
          CATEGORIES
        </Link>
        <Link href="#" className="text-slate-400 font-medium hover:text-[#BD00FF] transition-colors duration-300">
          NEW_DROPS
        </Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-[#BD00FF]">
        <button className="hover:text-white transition-colors">
          <span className="material-symbols-outlined">search</span>
        </button>

        <button className="hover:text-white transition-colors relative">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] w-4 h-4 flex items-center justify-center font-bold">
            3
          </span>
        </button>

        <div className="w-10 h-10 bg-zinc-800 border border-zinc-700 flex items-center justify-center">
          <img
            alt="User"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5kqhFOeUA8mlFRiHms8kPe5b1VTFBwa6yQ0y7EmuMl_I2Pd1z1usijGNOxSb_vN_wKHfU7XKBPqiwwDsoj9QpT03IiXeZ489UTmzbjERjyFq88h6QgiG6vaBKQrk3AfCVpnYqQ5Tv0260NeumxzeZzZ7mRXDBTOzgFRzgZV4blMRY108woy43MoAa4RMDi-4XCdASsiPP58mPy-hgDV09L8AMWLOQUoiEoA91kjAeLjqFfm_R8iKZbt2-Q6izH5xUW7Z0A5voEgo"
          />
        </div>
      </div>

    </header>
  );
}