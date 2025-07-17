'use client';
import { Plus } from 'lucide-react';
import Notes from './notes';
import { useState } from 'react';

export default function Homepage() {
  const [showColorPicker, setShowColorPicker] = useState(false);
   const [selectedColor, setSelectedColor] = useState(null)
  
  const colors = [
    { name: 'red', class: 'bg-red-500' },
    { name: 'orange', class: 'bg-orange-500' },
    { name: 'green', class: 'bg-green-500' },
    { name: 'yellow', class: 'bg-yellow-500' },
    { name: 'purple', class: 'bg-purple-500' },
    { name: 'blue', class: 'bg-blue-500' }
  ];
  
  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };
  
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex h-screen w-screen bg-white overflow-hidden">
      <div className="w-[110px] border-r border-gray-400 p-4 flex flex-col">
        <div className="relative mt-4 self-center">
          <button 
            onClick={toggleColorPicker}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-10 h-10 cursor-pointer rounded-full flex items-center justify-center text-white transition-colors"
            style={{ backgroundColor: isHovered ? '#2C3440' : '#222831' }}
          >
            <Plus size={20} />
          </button>
          
          {showColorPicker && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-8 z-10">
              <div className="flex flex-col gap-2  items-center">
                {colors.map((color, index) => (
                  <button 
                    key={color.name}
                    className={`w-8 h-8 ${color.class} rounded-full cursor-pointer transform transition-all duration-300 hover:scale-110 animate-fadeIn`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: 'forwards'
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex h-[100px] p-8 flex-shrink-0">
          <h1 className="text-3xl font-bold mb-6 text-gray-600">Notive</h1>
        </div>
        <div className="flex-1 overflow-y-auto flex flex-wrap gap-[2%] p-8 content-start
                        md:gap-4 md:p-4
                        sm:gap-2 sm:p-2
                        ">
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
        </div>
      </div>
      
      
    </div>
    
  );
}