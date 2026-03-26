import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function Iban() {
  const [copied, setCopied] = useState(false);
  const iban = "IT00X0000000000000000000000";

  const copy = () => {
    navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 text-white p-12 text-center rounded-3xl mx-4 mb-20">
      <h3 className="text-2xl mb-6">Regalo di Nozze</h3>
      <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
        <code className="text-blue-400 font-mono text-lg">{iban}</code>
        <button onClick={copy} className="bg-blue-600 hover:bg-blue-500 p-2 px-6 rounded-lg transition-all flex items-center gap-2">
          {copied ? <Check size={18}/> : <Copy size={18}/>} {copied ? "Copiato" : "Copia"}
        </button>
      </div>
    </div>
  );
}