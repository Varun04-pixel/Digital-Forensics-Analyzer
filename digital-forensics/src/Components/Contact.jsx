import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";

export default function Contact() {
    return (
        <>
            <div className="min-h-screen bg-[#050505] text-slate-300 font-mono pb-20 selection:bg-cyan-500/30">
                <header className="flex items-center justify-between px-8 py-4 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-10">
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
                </header>
                <div className="max-w-4xl mx-auto px-8 py-20">
                    <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">
                        CONTACT
                    </h1>

                    <p className="text-slate-400 text-lg mb-12">
                        Reach out for collaboration, projects,
                        cybersecurity discussions, or platform feedback.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-8">
                            <h2 className="text-cyan-400 font-bold mb-4">
                                My Profile
                            </h2>

                            <div className="space-y-3 text-slate-400">
                                <p>
                                    <span className="text-white">Name:</span> Varun Shinde
                                </p>

                                <p>
                                    <span className="text-white">Role:</span> Software Developer &
                                    Digital Forensics Enthusiast
                                </p>

                                <p>
                                    <span className="text-white">Specialization:</span> MERN Stack, Prompt Engineer, Cybersecurity,
                                    Evidence Analysis
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-8">
                            <h2 className="text-cyan-400 font-bold mb-4">
                                Communication Channels
                            </h2>

                            <div className="space-y-3 text-slate-400">
                                <p>Email: <a className="text-cyan-400 hover:text-cyan-600" href="mailto:varunshinde04vrn@gmail.com">varunshinde04vrn@gmail.com</a></p>
                                <p>LinkedIn: <a className="text-cyan-400 hover:text-cyan-600" target="_blank" href="https://www.linkedin.com/in/varun-shinde-7340783aa/">Varun Shinde</a></p>
                                <p>Github: <a className="text-cyan-400 hover:text-cyan-600" target="_blank" href="https://github.com/Varun04-pixel">Varun async</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 border border-cyan-500/20 bg-black/40 rounded-xl p-8">
                        <p className="text-cyan-400 font-bold mb-2">
                            THANK YOU !!
                        </p>
                        {/* <p className="text-slate-500 text-sm">
                            Messages related to cybersecurity, digital forensics, software
                            engineering, and research collaborations are prioritized.
                        </p> */}
                    </div>
                </div>
            </div>
        </>
    );
}