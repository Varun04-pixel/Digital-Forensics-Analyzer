// src/components/Sidebar.jsx
import { Shield, FileSearch, HardDrive, Lock, User } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: <Shield size={20} /> },
    { name: 'Evidence ID', icon: <FileSearch size={20} /> },
    { name: 'Preservation', icon: <HardDrive size={20} /> },
    { name: 'Integrity', icon: <Lock size={20} /> },
  ];

  return (
    <div className="h-screen w-64 bg-[#0d1117] border-r border-gray-800 flex flex-col p-6 fixed">
      <h1 className="text-cyan-500 font-bold text-2xl mb-10 tracking-tighter">SENTINEL.</h1>
      <nav className="flex-1">
        {menuItems.map((item) => (
          <div key={item.name} className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 py-4 cursor-pointer transition-all">
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </nav>
      <div className="mt-auto border-t border-gray-800 pt-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold">VS</div>
        <div>
          <p className="text-white text-sm font-bold">Varun Shinde</p>
          <p className="text-gray-500 text-xs">Lead Investigator</p>
        </div>
      </div>
    </div>
  );
}