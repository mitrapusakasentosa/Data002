
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
    // Simulasi pemrosesan "canggih"
    setTimeout(() => {
      setData(formData);
      setIsGenerating(false);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 800);
  };

  const handleDownload = async () => {
    if (documentRef.current === null) return;
    
    try {
      const dataUrl = await toPng(documentRef.current, { 
        cacheBust: true,
        pixelRatio: 4, // Kualitas ultra-sharp
        // Filter untuk mencegah html-to-image mencoba membaca stylesheet eksternal yang melanggar CORS
        filter: (node) => {
          if (node.tagName === 'LINK' && (node as HTMLLinkElement).rel === 'stylesheet') {
            return false;
          }
          return true;
        }
      });
      const link = document.createElement('a');
      link.download = `GA-DOCUMENT-${data?.idAkun || 'SYSTEM'}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Download error:', err);
      alert('Gagal mengekspor dokumen. Pastikan koneksi internet stabil.');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center">
      {/* Decorative Light Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Luxury Navigation / Header Area */}
      <header className="w-full max-w-7xl px-8 py-12 flex flex-col items-center z-20">
        <div className="flex flex-col items-center space-y-2 mb-12 animate-up">
           <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 shadow-xl">
             <Diamond size={14} className="text-zinc-400" />
             <span className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-300">Official Production Tool</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-serif-armani italic font-bold tracking-tight text-white leading-none">
             Giorgio Armani
           </h1>
           <div className="h-px w-32 bg-gradient-to-r from-transparent via-zinc-600 to-transparent my-4"></div>
           <p className="text-zinc-500 text-sm font-light tracking-[0.3em] uppercase">SYSTEM GENERATOR V4.0</p>
        </div>

        {/* Info Banner */}
        {!data && (
          <div className="flex items-center gap-6 text-zinc-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-16 animate-up [animation-delay:200ms]">
            <span className="flex items-center gap-2"><ShieldCheck size={14} /> Secure Protocol</span>
            <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
            <span className="flex items-center gap-2"><Sparkles size={14} /> Luxury Design</span>
            <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
            <span className="flex items-center gap-2"><MousePointer2 size={14} /> Interactive UI</span>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-xl px-6 pb-24 z-20 space-y-12 no-print">
        {/* Input Card */}
        <div className="glass-panel p-1 rounded-[45px] overflow-hidden relative group transition-all duration-700 hover:shadow-[0_0_80px_rgba(255,255,255,0.05)]">
          <div className="bg-[#080808]/90 p-8 md:p-12 rounded-[44px]">
            <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-6">
               <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black shadow-lg">
                 <Sparkles size={20} />
               </div>
               <div>
                 <h2 className="text-lg font-black uppercase tracking-tight text-white">Console Entry</h2>
                 <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Lengkapi parameter untuk generate dokumen</p>
               </div>
            </div>
            <TaskForm onSubmit={handleFormSubmit} />
          </div>
        </div>

        {/* Loading Overlay State */}
        {isGenerating && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex flex-col items-center justify-center">
            <div className="w-24 h-24 border-2 border-white/10 rounded-full flex items-center justify-center relative">
               <div className="absolute inset-0 border-t-2 border-white rounded-full animate-spin"></div>
               <Diamond size={32} className="text-white animate-pulse" />
            </div>
            <h3 className="mt-8 text-white font-black tracking-[0.5em] uppercase text-sm">Processing...</h3>
            <p className="mt-2 text-zinc-500 text-xs italic">Syncing with Armani Design System</p>
          </div>
        )}
      </main>

      {/* Result Section (Modern Box Reveal) */}
      {data && (
        <section 
          ref={resultRef}
          className="w-full max-w-5xl px-6 pb-32 z-20 flex flex-col items-center animate-up"
        >
          <div className="flex flex-col items-center mb-16 text-center">
             <div className="w-px h-24 bg-gradient-to-b from-transparent to-white/20 mb-8"></div>
             <h3 className="text-white text-2xl font-serif-armani italic font-bold">Generated Output</h3>
             <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase mt-2">Ready for deployment</p>
          </div>

          <div className="w-full glass-panel p-6 md:p-16 rounded-[60px] flex flex-col items-center relative overflow-hidden">
             {/* Subtle scan line decoration */}
             <div className="absolute top-0 left-0 w-full h-1 bg-white/10 animate-scan pointer-events-none"></div>

             <div className="relative group transition-transform duration-700 hover:scale-[1.02]">
                <div className="absolute -inset-2 bg-white/5 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white p-1 rounded shadow-2xl overflow-hidden ring-4 ring-zinc-900/50">
                  <div className="origin-top scale-[0.4] sm:scale-[0.55] md:scale-[0.7] lg:scale-[0.85] xl:scale-100">
                    <TaskDocument ref={documentRef} data={data} />
                  </div>
                </div>
             </div>

             <div className="mt-16 w-full max-w-md space-y-4">
                <button
                  onClick={handleDownload}
                  className="w-full group relative overflow-hidden bg-white text-black py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-4 transition-all hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] active:scale-95"
                >
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
                  <Download size={24} />
                  <span className="uppercase tracking-tighter">Download Document</span>
                </button>
                <p className="text-center text-zinc-500 text-[9px] font-bold tracking-[0.3em] uppercase opacity-60">
                  High Resolution Asset • PNG Format • 760 x 1074 px
                </p>
             </div>
          </div>
        </section>
      )}

      {/* Futuristic Scroll Indicator */}
      {!data && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-pulse z-10">
          <span className="text-[9px] font-black tracking-widest uppercase">Begin Protocol</span>
          <ChevronDown size={16} />
        </div>
      )}

      <footer className="w-full py-20 px-8 flex flex-col items-center border-t border-white/5 bg-black/20 z-10">
         <span className="font-serif-armani italic text-3xl text-zinc-300 tracking-[0.3em]">ARMANI</span>
         <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-zinc-600 mt-4">Authorized Tooling S.p.A.</p>
      </footer>
    </div>
  );
};

export default App;
