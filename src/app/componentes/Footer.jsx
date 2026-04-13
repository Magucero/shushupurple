import Link from "next/link";

export default function Footer() {
  return (

    <footer className="bg-[#000000] border-t border-[#1f1f26] full-width py-12 mt-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 w-full max-w-7xl mx-auto">
        <div className="space-y-6">
            <div className="text-lg font-bold text-white font-black tracking-widest uppercase">PURPLE MONOLITH</div>
            <p className="text-slate-500 font-black text-xs tracking-widest max-w-xs leading-loose">
                            THE PREMIER ARCHIVE FOR DIGITAL ARTIFACTS AND GAMING HARDWARE. BUILT FOR THE TRAVERSERS OF THE VOID.
            </p>
            <div className="flex space-x-6 text-[#BD00FF]">
                <a className="opacity-80 hover:opacity-100 transition-all uppercase text-[10px] tracking-widest     font-bold" href="#">INSTAGRAM</a>
                <a className="opacity-80 hover:opacity-100 transition-all uppercase text-[10px] tracking-widest font-bold" href="#">DISCORD</a>
                <a className="opacity-80 hover:opacity-100 transition-all uppercase text-[10px] tracking-widest font-bold" href="#">TWITTER</a>
            </div>
        </div>
            <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
                    <h5 className="text-white font-headline text-xs tracking-[0.3em] font-black">LEGAL</h5>
                <div className="flex flex-col space-y-2 text-slate-500 font-black text-[10px] tracking-widest">
                    <a className="hover:text-white transition-all uppercase" href="#">TERMS</a>
                    <a className="hover:text-white transition-all uppercase" href="#">PRIVACY</a>
                </div>
            </div>
            <div className="flex flex-col justify-end text-right">
                <p className="text-slate-500 font-black text-xs tracking-widest uppercase">© 2026 PURPLE MONOLITH. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    </div>
</footer>



);
}