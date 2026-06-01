import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";

export default function About() {
    return (
        <>
            <div className="min-h-screen bg-[#050505] text-slate-300 font-mono pb-20 selection:bg-cyan-500/30">
                <header className="flex items-center justify-between px-8 py-4 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-10" >
                    <div className="flex items-center gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                            <Terminal className="text-cyan-400" size={24} />
                        </div>
                        <div>
                            <h1 className="font-black text-xl tracking-tighter text-white uppercase italic">Digital Forensics</h1>
                            <p className="text-[10px] font-bold text-cyan-500/70 uppercase tracking-[0.3em]">Core Integrity Analyzer</p>
                        </div>
                    </div>
                    <div className='flex gap-16'>
                        <Link
                            to="/"
                            className='hover:text-sky-500 cursor-pointer hover:underline'
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className='hover:text-sky-500 cursor-pointer hover:underline'
                        >
                            About
                        </Link>

                        <Link
                            to="/contact"
                            className='hover:text-sky-500 cursor-pointer hover:underline'
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="flex items-center gap-6">

                        <div className="hidden md:block text-right">
                            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Digital Forensic</p>
                            <p className="text-sm font-bold text-white tracking-tight">Investigation</p>
                        </div>
                    </div>
                </header >
                <div className="max-w-5xl mx-auto px-8 py-20">
                    <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">
                        ABOUT THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PLATFORM</span>
                    </h1>

                    <div className="border-l-2 border-cyan-500 pl-6 mb-10">
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Digital_Forensics is a forensic evidence integrity platform designed
                            to assist investigators, analysts, and cybersecurity professionals in
                            preserving and validating digital artifacts through cryptographic
                            verification workflows.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6">
                            <h2 className="text-cyan-400 font-bold mb-3">
                                Evidence Integrity
                            </h2>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                SHA-256 hashing ensures uploaded evidence can be verified against
                                unauthorized modification or tampering.
                            </p>
                        </div>

                        <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6">
                            <h2 className="text-cyan-400 font-bold mb-3">
                                Chain of Custody
                            </h2>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Timestamped artifact logging helps maintain traceability and
                                accountability throughout an investigation lifecycle.
                            </p>
                        </div>

                        <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-6">
                            <h2 className="text-cyan-400 font-bold mb-3">
                                Secure Analysis
                            </h2>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Built with modern web technologies to provide reliable evidence
                                processing and secure digital investigation workflows.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 bg-black/40 border border-cyan-500/20 rounded-xl p-8">
                        <h2 className="text-white text-2xl font-bold mb-4">
                            Project Overview
                        </h2>

                        <p className="text-slate-400 leading-relaxed">
                            This project was developed as part of an internship and academic learning
                            initiative to demonstrate the practical application of digital forensics
                            concepts in a web-based environment. The system enables users to upload
                            digital artifacts, generate SHA-256 cryptographic hashes, and maintain
                            basic evidence records for integrity verification.
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
}