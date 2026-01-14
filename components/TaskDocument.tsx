
import React, { forwardRef } from 'react';
import { TaskData, TASK_OPTIONS } from '../types';
import { Cpu, ShieldAlert, User, Zap, CircleDollarSign, Fingerprint, Activity } from 'lucide-react';

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
      className="relative w-[760px] h-[1074px] bg-[#020617] overflow-hidden shadow-2xl flex flex-col"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      {/* Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-emerald-600/10 blur-[120px] rounded-full"></div>

      {/* Header Area - Futuristic HUD Style */}
      <div className="relative z-10 w-full pt-16 px-12 flex justify-between items-end">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <Cpu className="text-blue-400" size={32} />
            </div>
            <div className="h-px w-24 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          </div>
          <span className="text-white text-[12px] font-black tracking-[0.8em] uppercase italic opacity-80">GIORGIO ARMANI</span>
          <span className="text-blue-500 text-[9px] font-mono tracking-widest mt-1">SECURE PROTOCOL v8.4.2</span>
        </div>

        <div className="text-right">
          <div className="flex items-center justify-end gap-2 text-blue-400 mb-1">
             <Activity size={14} className="animate-pulse" />
             <span className="text-[10px] font-mono tracking-tighter uppercase">System Online</span>
          </div>
          <h1 className="text-white text-[56px] font-black tracking-tighter leading-none uppercase italic italic-glow">
            TASK <span className="text-blue-500">INTEL</span>
          </h1>
        </div>
      </div>

      {/* Vertical Side Markers */}
      <div className="absolute left-6 top-1/4 bottom-1/4 flex flex-col justify-between items-center opacity-40">
        <span className="text-white text-[9px] font-mono vertical-text transform -rotate-180">LAT 45.4642 N</span>
        <div className="w-px flex-1 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent my-4"></div>
        <span className="text-white text-[9px] font-mono vertical-text transform -rotate-180">LON 9.1900 E</span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-16 mt-12 flex flex-col flex-1 pb-16">
        
        {/* Central Confirmation Card - Glassmorphism */}
        <div className="relative group mb-10">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-[32px] blur opacity-50"></div>
          <div className="relative bg-[#0f172a]/80 backdrop-blur-xl border border-white/5 rounded-[30px] p-8 overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <ShieldAlert className="text-blue-400" size={20} />
                <h2 className="text-white font-black text-xs uppercase tracking-[0.3em]">CONFIRMATION PROTOCOL</h2>
              </div>
              <div className="text-blue-500/40 font-mono text-[9px]">HASH: 8f42a1...</div>
            </div>

            <div className="space-y-4">
              {[
                "Detail Tugas ini merupakan bagian yang tidak terpisahkan dari perjanjian antara Pengguna dan Pihak Giorge Armani Sistem.",
                "Setiap dana yang dikirim oleh Pengguna kepada Pihak Sistem akan secara otomatis dikonversi menjadi Saldo Akun Kerja milik Pengguna.",
                "Seluruh proses pelaksanaan tugas dilaksanakan sesuai dengan prosedur dan ketentuan yang berlaku pada Sistem Giorge Armani.",
                "Dokumen ini berlaku sebagai bukti sah persetujuan antara Pengguna dan Pihak Sistem Giorgio Armani tanpa memerlukan tanda tangan tertulis."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                  <p className="text-zinc-400 text-[12px] leading-relaxed font-medium transition-colors group-hover:text-white">{text}</p>
                </div>
              ))}
            </div>
            
            {/* Corner Decorative Elements */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-blue-500/30 rounded-tr-[30px]"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-blue-500/30 rounded-bl-[30px]"></div>
          </div>
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-2 gap-8">
          
          {/* Account Panel */}
          <div className="bg-[#0f172a]/60 border border-white/5 rounded-[24px] p-6 relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-6">
              <Fingerprint className="text-blue-500" size={18} />
              <span className="text-white font-black text-[10px] uppercase tracking-[0.2em] opacity-80">BIOMETRIC ACCOUNT</span>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">ID AKUN</span>
                <span className="text-white font-mono text-[15px] font-black tracking-widest">{data.idAkun}</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">VALUE</span>
                <span className="text-blue-400 text-[18px] font-black">{formatCurrency(data.hargaProduk)}</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">YIELD</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-emerald-400 text-[24px] font-black">{data.komisi}%</span>
                  <span className="text-[10px] text-emerald-500/50 font-bold">PROFIT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Operation Log */}
          <div className="bg-[#0f172a]/60 border border-white/5 rounded-[24px] p-6 relative overflow-hidden flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-yellow-500" size={18} />
              <span className="text-white font-black text-[10px] uppercase tracking-[0.2em] opacity-80">ACTIVE DEPLOYMENT</span>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center text-center space-y-3">
              <div className="w-full bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
                <span className="block text-zinc-500 text-[9px] font-black uppercase mb-1 tracking-widest">PROTOCOL ACTIVE</span>
                <h4 className="text-white text-md font-black uppercase tracking-tighter">
                  {selectedTask?.label.toUpperCase() || "UNIT-01"}
                </h4>
              </div>
              <p className="text-zinc-500 text-[11px] font-medium leading-tight">
                Sistem memproses unit tugas secara otomatis melalui jaringan pusat.
              </p>
            </div>
            
            <div className="mt-4 flex items-center justify-center gap-1.5">
               <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
               <span className="text-[8px] font-mono text-zinc-600 uppercase">Latency: 24ms</span>
            </div>
          </div>

          {/* Warning Panels - High Visibility */}
          <div className="bg-gradient-to-br from-blue-900/20 to-black/40 border border-blue-500/20 rounded-[24px] p-6 flex flex-col justify-center text-center group transition-all hover:border-blue-500/40">
            <span className="text-blue-400 text-[9px] font-black uppercase tracking-[0.3em] mb-2">TIME LIMITER</span>
            <p className="text-white text-sm font-bold tracking-tight mb-1">60 MINUTE OPERATION WINDOW</p>
            <p className="text-zinc-500 text-[10px] italic">Failure to complete will trigger auto-lockout protocol.</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/10 to-black/40 border border-emerald-500/10 rounded-[24px] p-6 flex flex-col justify-center text-center group transition-all hover:border-emerald-500/30">
            <span className="text-emerald-500 text-[9px] font-black uppercase tracking-[0.3em] mb-2">FINANCIAL ADVISORY</span>
            <p className="text-white text-[11px] font-medium opacity-80 italic">
              Verify transaction values with assigned mentor prior to initialization to ensure sync.
            </p>
          </div>

        </div>
      </div>

      {/* Footer bar - Advanced HUD bar */}
      <div className="relative z-10 w-full h-[80px] bg-black/40 backdrop-blur-md border-t border-white/5 mt-auto flex items-center justify-between px-16">
        <div className="flex flex-col">
          <span className="text-zinc-600 text-[8px] font-mono tracking-widest uppercase mb-1">Authenticated Documentation</span>
          <p className="text-white text-[12px] font-black tracking-[0.5em] uppercase italic opacity-60">ARMANI S.P.A.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-zinc-600 text-[8px] font-mono tracking-widest uppercase">ENCRYPTION</span>
            <span className="text-blue-500 text-[10px] font-mono font-bold">AES-256 GCM</span>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-blue-500/5 animate-pulse"></div>
             <CircleDollarSign size={18} className="text-blue-400" />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .italic-glow {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
      ` }} />
    </div>
  );
});

TaskDocument.displayName = 'TaskDocument';
