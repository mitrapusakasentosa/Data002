
import React, { forwardRef } from 'react';
import { TaskData, TASK_OPTIONS } from '../types';
import { Cpu, CircleDollarSign, Fingerprint, ShieldCheck, Zap, Activity, Lock } from 'lucide-react';

interface TaskDocumentProps {
  data: TaskData;
}

export const TaskDocument = forwardRef<HTMLDivElement, TaskDocumentProps>(({ data }, ref) => {
  const selectedTask = TASK_OPTIONS.find(t => t.id === data.pilihanTugas);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount).replace('Rp', 'Rp ');
  };

  return (
    <div
      ref={ref}
      className="relative w-[760px] h-[1074px] bg-[#020617] overflow-hidden flex flex-col p-14 text-white shadow-2xl"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background Subtle Tech Detail */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

      {/* Header Section - Identical to Reference */}
      <div className="relative z-10 flex justify-between items-start mb-12">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-4">
             <div className="p-2.5 border border-blue-500/30 rounded-xl bg-blue-500/5 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <Cpu size={28} className="text-blue-400" />
             </div>
             <div className="h-px w-24 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          </div>
          <h2 className="text-[24px] font-black tracking-[0.4em] uppercase leading-none mb-1 text-white/90">GIORGIO ARMANI</h2>
          <span className="text-[10px] font-mono tracking-widest text-blue-500/60 uppercase font-bold">SECURE PROTOCOL v8.4.2</span>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 text-[10px] font-black text-blue-400/80 mb-2">
            <Activity size={12} className="animate-pulse" />
            <span className="tracking-widest uppercase">SYSTEM ONLINE</span>
          </div>
          <h1 className="text-[68px] font-black italic leading-none tracking-tighter uppercase">
            TASK <span className="text-blue-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">INTEL</span>
          </h1>
        </div>
      </div>

      {/* Confirmation Protocol Card - Broad & Clean */}
      <div className="relative z-10 bg-[#0f172a]/40 border border-blue-500/10 rounded-[36px] p-10 mb-8 backdrop-blur-sm overflow-hidden">
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-blue-500" size={20} />
            <h3 className="text-[14px] font-black tracking-[0.3em] uppercase text-white/80">CONFIRMATION PROTOCOL</h3>
          </div>
          <span className="text-[10px] font-mono text-blue-500/20">HASH: 8f42a1...</span>
        </div>

        <div className="space-y-6">
          {[
            "Detail Tugas ini merupakan bagian yang tidak terpisahkan dari perjanjian antara Pengguna dan Pihak Giorge Armani Sistem.",
            "Setiap dana yang dikirim oleh Pengguna kepada Pihak Sistem akan secara otomatis dikonversi menjadi Saldo Akun Kerja milik Pengguna.",
            "Seluruh proses pelaksanaan tugas dilaksanakan sesuai dengan prosedur dan ketentuan yang berlaku pada Sistem Giorge Armani.",
            "Dokumen ini berlaku sebagai bukti sah persetujuan antara Pengguna dan Pihak Sistem Giorgio Armani tanpa memerlukan tanda tangan tertulis."
          ].map((text, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500/40"></div>
              <p className="text-[13.5px] text-zinc-400 leading-relaxed font-medium">{text}</p>
            </div>
          ))}
        </div>
        
        {/* Deco lines in corners */}
        <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-blue-500/10 rounded-tr-[36px]"></div>
        <div className="absolute left-[-20px] top-[25%] w-10 h-20 text-[10px] font-mono text-zinc-800 rotate-180 flex items-center justify-center tracking-tighter" style={{ writingMode: 'vertical-rl' }}>
           LAT 45.4642 N
        </div>
      </div>

      {/* 2-Column Main Info Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-8 mb-8">
        
        {/* Panel Left: Biometric Account */}
        <div className="bg-[#0b1120] border border-white/5 rounded-[36px] p-10 flex flex-col justify-between min-h-[280px] shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <Fingerprint className="text-blue-500" size={22} />
            <h3 className="text-[14px] font-black tracking-[0.25em] uppercase text-white/70">BIOMETRIC ACCOUNT</h3>
          </div>
          
          <div className="space-y-8">
            <div className="flex justify-between items-end border-b border-white/5 pb-5">
              <span className="text-zinc-500 text-[11px] font-black uppercase tracking-widest">ID AKUN</span>
              <span className="text-white font-mono text-[19px] font-black tracking-wider">{data.idAkun}</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/5 pb-5">
              <span className="text-zinc-500 text-[11px] font-black uppercase tracking-widest">VALUE</span>
              <span className="text-blue-400 font-black text-[24px] tracking-tight">{formatCurrency(data.hargaProduk)}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-zinc-500 text-[11px] font-black uppercase tracking-widest">YIELD</span>
              <div className="flex items-center gap-4">
                <span className="text-emerald-400 font-black text-[30px] leading-none drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">{data.komisi}%</span>
                <span className="text-emerald-500/40 text-[10px] font-black uppercase tracking-widest">PROFIT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Panel Right: Active Deployment */}
        <div className="bg-[#0b1120] border border-white/5 rounded-[36px] p-10 flex flex-col justify-between min-h-[280px] text-center shadow-xl">
          <div className="flex items-center gap-4 mb-8 text-left">
            <Zap className="text-yellow-500" size={22} />
            <h3 className="text-[14px] font-black tracking-[0.25em] uppercase text-white/70">ACTIVE DEPLOYMENT</h3>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-6 px-4">
             <div className="bg-[#0f172a] border border-blue-500/20 rounded-[24px] py-8 px-6 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
                <span className="text-zinc-500 text-[10px] font-black tracking-[0.3em] uppercase block mb-4">PROTOCOL ACTIVE</span>
                <h4 className="text-white text-[20px] font-black tracking-tighter uppercase leading-tight italic">
                   {selectedTask?.desc || "1 PESANAN"}
                </h4>
             </div>
             <p className="text-zinc-500 text-[11.5px] leading-relaxed font-medium">
                Sistem memproses unit tugas secara otomatis melalui jaringan pusat Giorgio Armani.
             </p>
          </div>

          <div className="pt-6 flex items-center justify-center gap-3">
             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)] animate-pulse"></div>
             <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase font-bold">LATENCY: 24MS</span>
          </div>
        </div>
      </div>

      {/* Bottom Information Row */}
      <div className="relative z-10 grid grid-cols-2 gap-8">
         {/* Time Limiter */}
         <div className="bg-[#0f172a]/30 border border-blue-500/10 rounded-[30px] p-8 text-center flex flex-col items-center justify-center gap-2">
            <span className="text-blue-500/50 text-[10px] font-black tracking-[0.4em] uppercase mb-1">TIME LIMITER</span>
            <p className="text-white text-[15px] font-black uppercase tracking-widest">60 MINUTE OPERATION WINDOW</p>
            <p className="text-zinc-600 text-[10.5px] italic font-medium">Failure to complete will trigger auto-lockout protocol.</p>
         </div>

         {/* Financial Advisory */}
         <div className="bg-[#0f172a]/30 border border-emerald-500/10 rounded-[30px] p-8 text-center flex flex-col items-center justify-center gap-2">
            <span className="text-emerald-500/50 text-[10px] font-black tracking-[0.4em] uppercase mb-1">FINANCIAL ADVISORY</span>
            <p className="text-zinc-300 text-[13.5px] font-bold leading-relaxed italic px-2">
               Verify transaction values with assigned mentor prior to initialization to ensure sync.
            </p>
         </div>
      </div>

      {/* Decorative location info */}
      <div className="absolute left-[-22px] bottom-[20%] w-10 h-24 text-[10px] font-mono text-zinc-800 rotate-180 flex items-center justify-center tracking-tighter opacity-50" style={{ writingMode: 'vertical-rl' }}>
         LON 9.1900 E
      </div>

      {/* Footer Branding - High Precision */}
      <div className="mt-auto relative z-10 w-full flex items-end justify-between border-t border-white/5 pt-12 pb-4 px-4">
        <div className="flex flex-col gap-2">
           <span className="text-zinc-600 text-[10px] font-mono tracking-widest uppercase font-bold">AUTHENTICATED DOCUMENTATION</span>
           <p className="text-white text-[20px] font-black tracking-[0.5em] italic uppercase opacity-70">ARMANI S.P.A.</p>
        </div>

        <div className="flex items-center gap-10">
           <div className="flex flex-col items-end gap-1.5">
              <span className="text-zinc-700 text-[9px] font-mono tracking-widest uppercase font-black">ENCRYPTION ENGINE</span>
              <span className="text-blue-500/80 text-[12px] font-mono font-bold tracking-tighter uppercase">AES-256 GCM PROTOCOL</span>
           </div>
           <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 shadow-inner">
              <CircleDollarSign size={28} className="text-blue-400" />
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .italic-glow {
          text-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
        }
      ` }} />
    </div>
  );
});

TaskDocument.displayName = 'TaskDocument';
