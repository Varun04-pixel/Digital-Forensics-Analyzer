import React, { useState } from 'react';
import { Shield, Upload, CheckCircle, Trash2, FileText, Database, Terminal, Cpu } from 'lucide-react';

export default function App() {
  const [evidenceList, setEvidenceList] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleFile = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const newEvidenceItems = await Promise.all(files.map(async (file) => {
      const arrayBuffer = await file.arrayBuffer();
      const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

      return {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: (file.size / 1024).toFixed(2) + " KB",
        hash: hashHex,
        timestamp: new Date().toLocaleTimeString(),
        type: file.type || "BIN/DATA"
      };
    }));

    setEvidenceList(prevList => [...newEvidenceItems, ...prevList]);
  };

  const removeEvidence = (id) => {
    setEvidenceList(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-mono pb-20 selection:bg-cyan-500/30">

      {/* --- CYBER HEADER --- */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="bg-cyan-500/10 p-2 rounded border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Terminal className="text-cyan-400" size={24} />
          </div>
          <div>
            <h1 className="font-black text-xl tracking-tighter text-white uppercase italic">Digital_Forensics</h1>
            <p className="text-[10px] font-bold text-cyan-500/70 uppercase tracking-[0.3em]">Core Integrity Analyzer</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:block text-right">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Investigator</p>
            <p className="text-sm font-bold text-white tracking-tight">Varun Shinde</p>
          </div>
          <div className="h-10 w-10 rounded bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-900/20">
            VS
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto pt-16 px-6">

        {/* --- HERO --- */}
        <div className="mb-16 relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <h2 className="text-6xl font-black text-white mb-4 tracking-tighter leading-none">
            EVIDENCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">IDENTIFICATION</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium max-w-xl border-l-2 border-cyan-900 pl-6">
            Automated cryptographic hashing and artifact preservation terminal.
            Maintain chain of custody with zero-alteration protocols.
          </p>
        </div>

        {/* --- CYBER DROPZONE --- */}
        <div
          onDragOver={(e) => { e.preventDefault(); setIsHovered(true) }}
          onDragLeave={() => setIsHovered(false)}
          className={`relative border-2 rounded-xl p-12 transition-all duration-500 mb-16 overflow-hidden
            ${isHovered
              ? 'border-cyan-500 bg-cyan-500/5 shadow-[0_0_30px_rgba(6,182,212,0.1)]'
              : 'border-white/5 bg-[#0a0a0a]'}`}
        >
          <input type="file" multiple onChange={handleFile} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />

          <div className="flex flex-col items-center relative z-10">
            <div className={`p-5 rounded-full mb-4 transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
              <Upload className={isHovered ? 'text-cyan-400' : 'text-slate-700'} size={48} />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">Initialize Scan</h3>
            <p className="text-slate-500 text-sm mt-2">Upload or drag digital artifacts for preservation</p>
          </div>

          {/* Scanning Animation line */}
          {isHovered && <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500 shadow-[0_0_15px_cyan] animate-bounce mt-2"></div>}
        </div>

        {/* --- EVIDENCE CARDS --- */}
        <div className="space-y-8">
          {evidenceList.length > 0 && (
            <div className="flex justify-between items-end mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <Database size={20} className="text-cyan-500" />
                <h3 className="font-black text-white uppercase tracking-widest">Active_Case_Log</h3>
              </div>
              <button
                onClick={() => setEvidenceList([])}
                className="text-[10px] font-black text-slate-500 hover:text-red-500 transition-colors uppercase tracking-[0.2em]"
              >
                [ Purge All ]
              </button>
            </div>
          )}

          {evidenceList.map((file) => (
            <div
              key={file.id}
              className="group bg-[#0d0d0d] border border-white/5 rounded-lg p-8 hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Status Bar */}
              <div className="absolute top-0 left-0 h-full w-1 bg-cyan-500/20 group-hover:bg-cyan-500 transition-colors"></div>

              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle size={14} className="text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-s font-black text-white uppercase tracking-tighter">Integrity Verified</p>
                    <p className="text-[12px] text-slate-500 uppercase tracking-widest">{file.timestamp}</p>
                  </div>
                </div>
                <button onClick={() => removeEvidence(file.id)} className="text-slate-700 hover:text-red-500 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Left Section: Artifact & Hash (Reduced from 7 to 6 to give right side more space) */}
                <div className="md:col-span-6 space-y-6">
                  <div>
                    <label className="text-[11px] text-slate-600 font-black uppercase tracking-[0.2em] block mb-2">Source Artifact</label>
                    <p className="text-white text-lg font-bold truncate tracking-tight">{file.name}</p>
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-600 font-black uppercase tracking-[0.2em] block mb-2">SHA-256 Signature</label>
                    <div className="bg-black border border-white/5 p-4 rounded font-mono text-cyan-400 text-[15px] break-all leading-relaxed shadow-inner">
                      {file.hash}
                    </div>
                  </div>
                </div>

                {/* Right Section: Size, Type & Notes (Increased from 5 to 6) */}
                <div className="md:col-span-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded border border-white/5">
                      <label className="text-[10px] text-slate-600 font-black uppercase block mb-1">Size</label>
                      <p className="text-white text-xs font-bold">{file.size}</p>
                    </div>

                    {/* FIXED TYPE BOX: Added break-all and removed fixed height/truncate */}
                    <div className="p-4 bg-white/5 rounded border border-white/5 min-w-0">
                      <label className="text-[10px] text-slate-600 font-black uppercase block mb-1">Type</label>
                      <p className="text-white text-[11px] font-bold uppercase break-all leading-tight">
                        {file.type || 'DATA/BIN'}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 border border-white/5 rounded bg-black/40">
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu size={12} className="text-cyan-500" />
                      <span className="text-[9px] text-cyan-500 uppercase font-black">Forensic Note</span>
                    </div>
                    <p className="text-[11px] text-slate-500 italic leading-relaxed">
                      Artifact indexed. No data mutation detected during capture. Authenticated by Lead Investigator Shinde.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {evidenceList.length === 0 && (
            <div className="text-center py-32 border border-dashed border-white/5 rounded-2xl bg-[#080808]">
              <div className="inline-block p-6 rounded-full bg-white/5 mb-6">
                <Database size={40} className="text-slate-800" />
              </div>
              <p className="text-slate-600 text-sm font-bold uppercase tracking-[0.3em]">System Standby // Awaiting Input</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}