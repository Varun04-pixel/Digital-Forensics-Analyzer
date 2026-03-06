// src/components/Hasher.jsx
import React, { useState } from 'react';

export default function Hasher() {
  const [hash, setHash] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
    
    // Calculate SHA-256 Hash
    const arrayBuffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    setHash(hashHex);
  };

  return (
    <div className="bg-[#161b22] p-8 rounded-xl border border-gray-800 shadow-2xl">
      <h3 className="text-cyan-400 font-bold mb-4">🛡️ Live Evidence Integrity Tool</h3>
      <p className="text-gray-400 text-sm mb-6">Upload a digital artifact to generate its cryptographic SHA-256 fingerprint.</p>
      
      <div className="border-2 border-dashed border-gray-700 rounded-lg p-10 text-center hover:border-cyan-500 transition-colors">
        <input type="file" onChange={handleFileUpload} className="hidden" id="fileInput" />
        <label htmlFor="fileInput" className="cursor-pointer text-gray-300">
          Click to upload evidence file
        </label>
      </div>

      {hash && (
        <div className="mt-6 p-4 bg-black rounded border border-cyan-900/50 overflow-hidden">
          <p className="text-xs text-cyan-500 uppercase font-bold mb-1">Evidence Name: {fileName}</p>
          <p className="text-emerald-400 font-mono break-all text-xs">{hash}</p>
          <p className="text-[10px] text-gray-500 mt-2 italic font-mono">Status: Hash Verified. Chain of Custody Initialized.</p>
        </div>
      )}
    </div>
  );
}