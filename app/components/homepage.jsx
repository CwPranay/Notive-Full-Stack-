'use client';
import { Plus } from 'lucide-react';

export default function Homepage() {
  return (
    <div className="flex h-screen bg-white">
      <div className="w-[120px] border-r border-gray-400 p-4 flex flex-col">
        <button className="w-10 h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center text-white transition-colors mt-4 self-center">
          <Plus size={20} />
        </button>
      </div>
      
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Notive</h1>
      </div>
    </div>
  );
}