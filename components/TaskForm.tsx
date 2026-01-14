
import React, { useState } from 'react';
import { TaskData, TASK_OPTIONS } from '../types';
import { Hash, Banknote, Percent, Target, Check, ChevronRight } from 'lucide-react';

interface TaskFormProps {
  onSubmit: (data: TaskData) => void;
  initialData?: TaskData | null;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<TaskData>(
    initialData || {
      idAkun: '',
      hargaProduk: 0,
      komisi: 20,
      pilihanTugas: 1,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'idAkun' ? value : Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.idAkun || formData.hargaProduk <= 0) {
      alert('Mohon lengkapi parameter.');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ID AKUN */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">
            <Hash size={12} /> Account ID
          </label>
          <div className="relative">
            <input
              type="text"
              name="idAkun"
              value={formData.idAkun}
              onChange={handleChange}
              placeholder="Ex: 08585898544"
              className="input-premium w-full rounded-2xl px-6 py-5 text-white focus:outline-none placeholder:text-zinc-700 font-mono text-sm tracking-widest"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-700">
               <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
            </div>
          </div>
        </div>

        {/* HARGA PRODUK */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">
            <Banknote size={12} /> Product Value
          </label>
          <div className="relative">
             <input
              type="number"
              name="hargaProduk"
              value={formData.hargaProduk || ''}
              onChange={handleChange}
              placeholder="0.00"
              className="input-premium w-full rounded-2xl px-6 py-5 text-white focus:outline-none placeholder:text-zinc-700 font-bold text-lg"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-zinc-500 tracking-widest">IDR</span>
          </div>
        </div>
      </div>

      {/* KOMISI */}
      <div className="space-y-3">
        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">
          <Percent size={12} /> Commission Tier
        </label>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
           {[20, 25, 30, 32, 35, 40, 45, 50].map((val) => (
             <button
               key={val}
               type="button"
               onClick={() => setFormData(p => ({...p, komisi: val}))}
               className={`py-3 rounded-xl border text-xs font-black transition-all ${
                 formData.komisi === val 
                 ? 'bg-white text-black border-white shadow-lg shadow-white/10 scale-105' 
                 : 'bg-zinc-900/50 text-zinc-500 border-white/5 hover:border-white/20'
               }`}
             >
               {val}%
             </button>
           ))}
        </div>
      </div>

      {/* TUGAS OPTIONS */}
      <div className="space-y-4">
        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">
          <Target size={12} /> Task Protocol
        </label>
        <div className="space-y-2">
          {TASK_OPTIONS.map((opt) => (
            <label
              key={opt.id}
              className={`group flex items-center justify-between p-5 rounded-2xl cursor-pointer transition-all border ${
                formData.pilihanTugas === opt.id
                  ? 'bg-white border-white scale-[1.01] shadow-2xl'
                  : 'bg-zinc-900/30 border-white/5 hover:bg-zinc-900/50 hover:border-white/10'
              }`}
            >
              <div className="flex items-center gap-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black transition-colors ${
                  formData.pilihanTugas === opt.id ? 'bg-black text-white' : 'bg-zinc-800 text-zinc-500'
                }`}>
                  0{opt.id}
                </div>
                <div>
                  <h4 className={`text-xs font-black uppercase tracking-widest transition-colors ${
                    formData.pilihanTugas === opt.id ? 'text-black' : 'text-zinc-200'
                  }`}>{opt.label}</h4>
                  <p className={`text-[10px] italic transition-colors mt-0.5 ${
                    formData.pilihanTugas === opt.id ? 'text-zinc-500' : 'text-zinc-600'
                  }`}>{opt.desc}</p>
                </div>
              </div>
              <input
                type="radio"
                name="pilihanTugas"
                value={opt.id}
                checked={formData.pilihanTugas === opt.id}
                onChange={handleChange}
                className="hidden"
              />
              <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                formData.pilihanTugas === opt.id ? 'bg-black border-black text-white' : 'border-zinc-800 text-transparent'
              }`}>
                <Check size={14} />
              </div>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-white text-black py-7 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-[0_20px_50px_rgba(255,255,255,0.1)] active:scale-95 group uppercase tracking-tighter"
      >
        <span>Initialize Deployment</span>
        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
};
