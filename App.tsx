
import React, { useState, useRef } from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskDocument } from './components/TaskDocument';
import { TaskData } from './types';
import { toPng } from 'html-to-image';
import { Download, Sparkles, Diamond, ShieldCheck, ChevronDown, MousePointer2 } from 'lucide-react';

const App: React.FC = () => {
  const [data, setData] = useState<TaskData | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const documentRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleFormSubmit = (formData: TaskData) => {
    setIsGenerating(true);
    // Simulating deployment protocol
    setTimeout(() => {
      setData(formData);
      setIsGenerating(false);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 1200);
  };

  const handleDownload = async () => {
    if (documentRef.current === null) return;
    
    try {
      const dataUrl = await toPng(documentRef.current, { 
        cacheBust: true,
        pixelRatio: 4, // Ultra high resolution
        backgroundColor: '#020617',
        filter: (node) => {
          if (node.tagName === 'LINK' && (node as HTMLLinkElement).rel === 'stylesheet') {
            return false;
          }
          return true;
        }
      });
      const link = document.createElement('a');
      link.download = `TASK-INTEL-${data?.idAkun || 'UNIDENTIFIED'}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export error:', err);
      alert('Gagal mengekspor dokumen. Silakan coba lagi.');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center">
      {/* Dynamic Background Light */}
      <div className="fixed top-0 left-1/4 w-full h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-full h-[500px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Elegant Header Area */}
      <header className="w-full max-w-7xl px-8 py-16 flex flex-col items-center z-20">
        <div className="flex flex-col items-center space-y-3 mb-12 animate-up">
           <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6 shadow-2xl">
             <Diamond size={14} className="text-blue-400" />
             <span className="text-[10px] font-black tracking-[0.5em] uppercase text-zinc-300">Secure Deployment Engine</span>
           </div>
           <h1 className="text-6xl md:text-8xl font-serif-armani italic font-bold tracking-tighter text-white leading-none text-center">
             Giorgio Armani
           </h1>
           <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent my-6"></div>
           <p className="text-zinc-500 text-xs font-black tracking-[0.4em] uppercase opacity-70">SYST. GENERATOR V8.4.2</p>
        </div>
      </header>

      {/* Input Section */}
      <main className="w-full max-w-xl px-6 pb-24 z-20 space-y-12 no-print">
        <div className="glass-panel p-1 rounded-[50px] overflow-hidden relative group transition-all duration-1000">
          <div className="bg-[#080808]/95 p-10 md:p-14 rounded-[49px]">
            <div className="flex items-center gap-5 mb-12 border-b border-white/5 pb-8">
               <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                 <Sparkles size={24} />
               </div>
               <div>
                 <h2 className="text-xl font-black uppercase tracking-tight text-white">System Input</h2>
                 <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold mt-1">Configure deployment parameters</p>
               </div>
            </div>
            <TaskForm onSubmit={handleFormSubmit} />
          </div>
        </div>

        {isGenerating && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[100] flex flex-col items-center justify-center">
            <div className="w-28 h-28 border border-white/10 rounded-full flex items-center justify-center relative">
               <div className="absolute inset-[-4px] border-t-2 border-blue-500 rounded-full animate-spin"></div>
               <Diamond size={36} className="text-white animate-pulse" />
            </div>
            <h3 className="mt-10 text-white font-black tracking-[0.6em] uppercase text-sm italic">Initializing Protocol...</h3>
            <p className="mt-3 text-zinc-500 text-xs tracking-widest uppercase font-bold">Syncing with Armani Intel Cluster</p>
          </div>
        )}
      </main>

      {/* Result Visualization */}
      {data && (
        <section 
          ref={resultRef}
          className="w-full max-w-6xl px-6 pb-32 z-20 flex flex-col items-center animate-up"
        >
          <div className="flex flex-col items-center mb-20 text-center">
             <div className="w-px h-32 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent mb-10"></div>
             <h3 className="text-white text-3xl font-serif-armani italic font-bold">Document Authentication</h3>
             <p className="text-zinc-600 text-[11px] tracking-[0.5em] uppercase mt-3 font-black">Output verified for transmission</p>
          </div>

          <div className="w-full glass-panel p-8 md:p-24 rounded-[70px] flex flex-col items-center relative overflow-hidden bg-white/5">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-scan"></div>

             <div className="relative group transition-transform duration-1000 hover:scale-[1.01]">
                <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="relative bg-[#020617] p-1.5 rounded-[40px] shadow-2xl overflow-hidden ring-1 ring-white/10">
                  <div className="origin-top scale-[0.4] sm:scale-[0.55] md:scale-[0.7] lg:scale-[0.9] xl:scale-100 transition-transform duration-1000">
                    <TaskDocument ref={documentRef} data={data} />
                  </div>
                </div>
             </div>

             <div className="mt-20 w-full max-w-md space-y-5">
                <button
                  onClick={handleDownload}
                  className="w-full group relative overflow-hidden bg-white text-black py-7 rounded-3xl font-black text-2xl flex items-center justify-center gap-5 transition-all hover:shadow-[0_20px_80px_rgba(255,255,255,0.2)] active:scale-95 shadow-xl"
                >
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
                  <Download size={28} />
                  <span className="uppercase tracking-tighter">Export Asset</span>
                </button>
                <div className="flex flex-col items-center gap-2 opacity-60">
                   <p className="text-zinc-500 text-[10px] font-black tracking-[0.4em] uppercase">
                     Ultra High Definition • 760 x 1074 PX
                   </p>
                   <div className="flex items-center gap-4">
                      <div className="h-px w-8 bg-zinc-800"></div>
                      <ShieldCheck size={14} className="text-emerald-500/50" />
                      <div className="h-px w-8 bg-zinc-800"></div>
                   </div>
                </div>
             </div>
          </div>
        </section>
      )}

      {!data && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 animate-pulse z-10">
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-zinc-400">Establish Link</span>
          <ChevronDown size={20} className="text-white" />
        </div>
      )}

      <footer className="w-full py-24 px-8 flex flex-col items-center border-t border-white/5 bg-black/40 z-10">
         <span className="font-serif-armani italic text-4xl text-zinc-300 tracking-[0.4em] mb-6">ARMANI</span>
         <div className="h-px w-20 bg-zinc-800 mb-6"></div>
         <p className="text-[10px] font-black tracking-[0.6em] uppercase text-zinc-600">Authorized Tooling S.p.A. Milan</p>
      </footer>
    </div>
  );
};

export default App;
