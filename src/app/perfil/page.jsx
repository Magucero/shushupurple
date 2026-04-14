import Link from "next/link";

export default function Perfil() {
  return (
    <>
      <main className="min-h-screen pt-24 pb-20 px-6 max-w-[1920px] mx-auto">
        {/* Profile Header Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8 bg-[var(--surface-container-high)] p-8 flex flex-col md:flex-row gap-8 items-center md:items-end glass-panel relative overflow-hidden">
            {/* Decorative background text */}
            <div className="absolute -top-10 -right-10 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none font-headline">PROTOCOL</div>
            {/* Avatar */}
            <div className="relative w-48 h-48 flex-shrink-0 neon-glow-purple border-2 border-[#BD00FF]">
              <img alt="VAULT_HUNTER_99 Avatar" className="w-full h-full object-cover" data-alt="Cyberpunk character portrait with neon purple lighting, sharp features, and high-tech visor accessory in a dark studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-EEJmwO6iucyCBqoWu6fauuDL_ysrj6-6GY6o8WFw_DyMsFr0uDqTGDj0Z_RGNJXFuFPuG5BH0hHdU8VI8lv-XNr6SPIbVwWh7_AqY6Fo2MnqpyfznCZlFN1q2zAwldnQMXeUY2l82dDYlMopEjiJbChsPFBuTiuHzNwTl-jiuGOdhdN0-F9J43XalDLVPK5FqEIPgecHZAOgQ9CvlS2aunmZsaotdNDAilg9TX9HguVMFYWQUwK-W4vtxI6xpsmd17qfCPlrnsQ"/>
              <div className="absolute -bottom-2 -right-2 bg-[var(--primary)] text-[var(--on-primary)] px-3 py-1 text-[10px] font-bold tracking-widest uppercase">RANK: OMEGA</div>
            </div>
            {/* Identity Info */}
            <div className="flex-grow space-y-4">
              <div className="flex items-center gap-4">
                <span className="bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/30 px-2 py-0.5 text-[10px] tracking-widest font-bold uppercase">AUTHORIZED_USER</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                  <span className="text-[10px] text-[var(--primary)] tracking-widest uppercase">Status: Online</span>
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter uppercase leading-none text-white">NOOBMASTER69</h1>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-[var(--surface-container-highest)] px-4 py-2 flex flex-col">
                  <span className="text-[8px] text-[var(--on-surface-variant)] tracking-[0.3em] uppercase">Level</span>
                  <span className="text-xl font-headline font-bold text-white">99.4</span>
                </div>
                <div className="bg-[var(--surface-container-highest)] px-4 py-2 flex flex-col">
                  <span className="text-[8px] text-[var(--on-surface-variant)] tracking-[0.3em] uppercase">Credits</span>
                  <span className="text-xl font-headline font-bold text-[var(--tertiary)]">42,000 NC</span>
                </div>
                <div className="bg-[var(--surface-container-highest)] px-4 py-2 flex flex-col">
                  <span className="text-[8px] text-[var(--on-surface-variant)] tracking-[0.3em] uppercase">Archive Rank</span>
                  <span className="text-xl font-headline font-bold text-[var(--primary)]">#0042</span>
                </div>
              </div>
            </div>
          </div>
          {/* Mini HUD / Stats */}
          <div className="lg:col-span-4 bg-[var(--surface-container-high)] p-8 glass-panel border-l border-[#BD00FF]/30">
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-[var(--tertiary)] mb-6 flex items-center">
              <span className="w-8 h-px bg-[var(--tertiary)] mr-3"></span> SYSTEM_TELEMETRY
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] tracking-widest uppercase">
                  <span className="text-[var(--on-surface-variant)]">Synapse Integration</span>
                  <span className="text-white">88%</span>
                </div>
                <div className="h-1 bg-[var(--surface-container-highest)] w-full">
                  <div className="h-full bg-[var(--tertiary)] w-[88%] shadow-[0_0_10px_#BD00FF]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] tracking-widest uppercase">
                  <span className="text-[var(--on-surface-variant)]">Neural Bandwidth</span>
                  <span className="text-white">4.2 TB/S</span>
                </div>
                <div className="h-1 bg-[var(--surface-container-highest)] w-full">
                  <div className="h-full bg-[var(--primary)] w-[65%] shadow-[0_0_10px_var(--primary)]"></div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] leading-relaxed text-[var(--on-surface-variant)] tracking-wider uppercase">
                  Current session duration: 04:22:18<br/>
                  Uplink location: Neo-Tokyo Sector 7<br/>
                  Encryption level: AES-512 Quantum
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Activity Feed (Left) */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl font-headline font-bold tracking-tighter uppercase text-white flex items-center gap-3">
              <span className="material-symbols-outlined text-[var(--primary)]">analytics</span>
              ACTIVITY_LOG
            </h2>
            <div className="space-y-4">
              {/* Activity Item 1 */}
              <div className="bg-[var(--surface-container)] p-4 border-l-2 border-[var(--primary)] hover:bg-[var(--surface-container-highest)] transition-colors group">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] text-[var(--primary)] font-bold tracking-widest uppercase">VIEWED_ARTIFACT</span>
                  <span className="text-[9px] text-[var(--on-surface-variant)] font-mono uppercase">12m AGO</span>
                </div>
                <p className="text-sm font-headline tracking-wide uppercase text-white group-hover:text-[var(--primary)] transition-colors">ARCH-TYPE ZERO [LIMITED EDITION]</p>
              </div>
              {/* Activity Item 2 */}
              <div className="bg-[var(--surface-container)] p-4 border-l-2 border-[var(--tertiary)] hover:bg-[var(--surface-container-highest)] transition-colors group">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] text-[var(--tertiary)] font-bold tracking-widest uppercase">WISHLIST_ADD</span>
                  <span className="text-[9px] text-[var(--on-surface-variant)] font-mono uppercase">2h AGO</span>
                </div>
                <p className="text-sm font-headline tracking-wide uppercase text-white group-hover:text-[var(--tertiary)] transition-colors">NEON_STRIKE TKL MECHANICAL DECK</p>
              </div>
              {/* Activity Item 3 */}
              <div className="bg-[var(--surface-container)] p-4 border-l-2 border-white/20 hover:bg-[var(--surface-container-highest)] transition-colors group">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] text-[var(--on-surface-variant)] font-bold tracking-widest uppercase">COMMUNITY_POST</span>
                  <span className="text-[9px] text-[var(--on-surface-variant)] font-mono uppercase">04.12.24</span>
                </div>
                <p className="text-sm font-headline tracking-wide uppercase text-white">Replied to 'BEST_LOADOUT' thread in THE_VOID</p>
              </div>
              {/* Activity Item 4 */}
              <div className="bg-[var(--surface-container)] p-4 border-l-2 border-[var(--primary)] hover:bg-[var(--surface-container-highest)] transition-colors group">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] text-[var(--primary)] font-bold tracking-widest uppercase">ACHIEVEMENT_UNLOCKED</span>
                  <span className="text-[9px] text-[var(--on-surface-variant)] font-mono uppercase">04.10.24</span>
                </div>
                <p className="text-sm font-headline tracking-wide uppercase text-white">EARLY_ADOPTER_PULSE_TAG obtained</p>
              </div>
            </div>
            <button className="w-full py-3 border border-[var(--outline-variant)] text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--on-surface-variant)] hover:text-white hover:border-white transition-all">
              LOAD_FULL_ARCHIVE
            </button>
          </div>
          
          {/* Purchase History (Right) */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl font-headline font-bold tracking-tighter uppercase text-white flex items-center gap-3">
              <span className="material-symbols-outlined text-[var(--tertiary)]">inventory_2</span>
              TRANSACTION_HISTORY
            </h2>
            <div className="overflow-hidden bg-[var(--surface-container)]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[var(--surface-container-highest)] border-b border-[var(--outline-variant)]">
                    <th className="px-6 py-4 text-[10px] tracking-widest uppercase text-[var(--on-surface-variant)] font-bold">Product</th>
                    <th className="px-6 py-4 text-[10px] tracking-widest uppercase text-[var(--on-surface-variant)] font-bold">Date</th>
                    <th className="px-6 py-4 text-[10px] tracking-widest uppercase text-[var(--on-surface-variant)] font-bold">Status</th>
                    <th className="px-6 py-4 text-[10px] tracking-widest uppercase text-[var(--on-surface-variant)] font-bold text-right">Credits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--outline-variant)]/30">
                  {/* Order 1 */}
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[var(--surface-container-lowest)] border border-white/5 p-1">
                          <img alt="Hardware" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="Modern mechanical keyboard with glowing RGB backlit keys, dark aluminum chassis, and futuristic industrial design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXpNdarrn7B3ACKH08iN7olak2tgGFxj61NYBLMSKGXYwvSschTXC_eJj-Uv6QvIoJUCEplu4FREd1UY93wNFELDSxYnYUDKewjJK1V30vtXRMCQ2KTerPUy9Sf0L6rnNFrtjQjKX4PLS032MqLMIWprWTvAMfAajNUAh46di3D7tJAvpsIyWUxVCWk6bsYenh6ns4jbLpw5mleyz7CKPYpJ-XyzC4PCb1IKYJLTOAgrxoQ1k82suhN__YvGYI14_gQYxh7TlHfqU"/>
                        </div>
                        <div>
                          <div className="text-sm font-headline font-bold text-white uppercase tracking-wider">CYBER_DECK_PRO</div>
                          <div className="text-[9px] text-[var(--on-surface-variant)] uppercase font-mono tracking-tighter">ORD_#99281-A</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 font-mono text-xs text-[var(--on-surface-variant)]">2024.04.01</td>
                    <td className="px-6 py-6">
                      <span className="inline-flex items-center px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-[9px] font-bold tracking-[0.2em] uppercase border border-[var(--primary)]/20">
                        DELIVERED
                      </span>
                    </td>
                    <td className="px-6 py-6 text-right font-headline font-bold text-white tracking-widest">14,500</td>
                  </tr>
                  {/* Order 2 */}
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[var(--surface-container-lowest)] border border-white/5 p-1">
                          <img alt="Accessory" className="w-full h-full object-cover grayscale" data-alt="Digital watch with a transparent holographic interface displaying complex data maps and blue glowing light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNzh0IiEkuyQ9ieQcFDw0E_odAr94sX5tSx5Kr8laXXFWudD0VUVXM7G3D7Wpbfl50igpa5MmzHKoh3q5lwd57x2raltDZQkuX_xA-nbwuyPHZgr3Tto7AjDGw_Z-SqBziQHe8bBaR8fVCvuC9pdHu4uDRwwFXBiCChx0XNvW0PjZqpIvVdaMXsR56fMY39UGm2iVmrEDGmlT04odkJv_bsCYwm3htriCerF7G1Vbhqib-wc1Xfhzt2R6gjm6BgpGsbCPy8F41ueg"/>
                        </div>
                        <div>
                          <div className="text-sm font-headline font-bold text-white uppercase tracking-wider">HOLO_INTERFACE_V2</div>
                          <div className="text-[9px] text-[var(--on-surface-variant)] uppercase font-mono tracking-tighter">ORD_#88421-B</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 font-mono text-xs text-[var(--on-surface-variant)]">2024.03.15</td>
                    <td className="px-6 py-6">
                      <span className="inline-flex items-center px-2 py-1 bg-[var(--tertiary)]/10 text-[var(--tertiary)] text-[9px] font-bold tracking-[0.2em] uppercase border border-[var(--tertiary)]/20">
                        IN_TRANSIT
                      </span>
                    </td>
                    <td className="px-6 py-6 text-right font-headline font-bold text-white tracking-widest">8,200</td>
                  </tr>
                  {/* Order 3 */}
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[var(--surface-container-lowest)] border border-white/5 p-1">
                          <img alt="Digital Asset" className="w-full h-full object-cover grayscale" data-alt="Electronic circuit board with vibrant neon pathways and macro details of futuristic technology components" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzdgfgDsZI82lpXj_FqKYjnc9nbnxukertwVhERKnHMuAqyZvWPaC-1eRwLKJM01RtiIO6Pvwsmf8hK9AW7wOHel6rxe7hiVHDLSYt0N0-e21JNmaUBwyBvTR3NBrGPrq5k0wVmrppk28ZJeY-4ywgSG86WZSy9cA9CdrAjCYy3mkVdTNJmcYoKayY4hNL1AUOs5pu9efPYIMjC5nlxzLXfYsfhDJUhFHbG5pVEnj-m0_spzonnku3KySzmBVnv_8rQrgcG5EpGwM"/>
                        </div>
                        <div>
                          <div className="text-sm font-headline font-bold text-white uppercase tracking-wider">PROTOCOL_ENCRYPTION_KEY</div>
                          <div className="text-[9px] text-[var(--on-surface-variant)] uppercase font-mono tracking-tighter">ORD_#77109-C</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 font-mono text-xs text-[var(--on-surface-variant)]">2024.02.28</td>
                    <td className="px-6 py-6">
                      <span className="inline-flex items-center px-2 py-1 bg-[var(--surface-container-highest)] text-[var(--on-surface-variant)] text-[9px] font-bold tracking-[0.2em] uppercase border border-[var(--outline-variant)]">
                        ARCHIVED
                      </span>
                    </td>
                    <td className="px-6 py-6 text-right font-headline font-bold text-white tracking-widest">2,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination/Control */}
            <div className="flex justify-between items-center bg-[var(--surface-container)] p-6">
              <div className="text-[10px] tracking-widest uppercase text-[var(--on-surface-variant)]">
                Showing <span className="text-white">1 - 3</span> of <span className="text-white">12</span> entries
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 flex items-center justify-center border border-[var(--outline-variant)] text-[var(--on-surface-variant)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
                  
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-[var(--outline-variant)] text-[var(--on-surface-variant)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-[var(--outline-variant)] text-[var(--on-surface-variant)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}