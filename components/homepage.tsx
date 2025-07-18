'use client';
import { Plus } from 'lucide-react';
import Notes from './notes';
import { ModeToggle } from './mode-toggle';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

interface NoteItem {
  id: string;
  color: string;
  content: string;
}

export default function Homepage() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [notes, setNotes] = useState<NoteItem[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [noteIdToDelete, setNoteIdToDelete] = useState<string | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const colors = [
    { name: 'red', class: 'bg-red-500' },
    { name: 'orange', class: 'bg-orange-500' },
    { name: 'green', class: 'bg-green-500' },
    { name: 'yellow', class: 'bg-yellow-500' },
    { name: 'purple', class: 'bg-purple-500' },
    { name: 'blue', class: 'bg-blue-500' }
  ];

  const toggleColorPicker = () => setShowColorPicker(!showColorPicker);

  const addNote = (colorClass: string) => {
    const newNote: NoteItem = {
      id: uuidv4(),
      color: colorClass,
      content: ''
    };
    setNotes(prev => [...prev, newNote]);
    setShowColorPicker(false);
  };

  const handleDeleteNote = () => {
    if (noteIdToDelete !== null) {
      setNotes(prevNotes => prevNotes.filter(note => note.id !== noteIdToDelete));
      setShowDeleteDialog(false);
      setNoteIdToDelete(null);
    }
  };

  const handleSaveNote = useCallback((id: string, newContent: string) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, content: newContent } : note
      )
    );
  }, []);

  return (
    <div className="flex h-screen w-screen bg-white dark:bg-gray-900/40 overflow-hidden transition-colors duration-300">
      {/* Sidebar */}
      <div className="w-[110px] border-r border-gray-400 dark:border-gray-700 p-4 flex flex-col justify-between items-center">
        {/* Add Button */}
        <div className="relative mt-4">
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
              <div className="flex flex-col gap-2 items-center">
                {colors.map((color, index) => (
                  <button
                    key={color.name}
                    className={`w-8 h-8 ${color.class} rounded-full cursor-pointer transform transition-all duration-300 hover:scale-110 animate-fadeIn`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: 'forwards'
                    }}
                    onClick={() => addNote(color.class)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Theme Toggle Button */}
        <div className="mt-auto mb-2">
          <div
            className="w-10 h-10  flex items-center justify-center cursor-pointer text-white transition-colors"
            
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Notes area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex h-[100px] p-8 flex-shrink-0 justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-600 dark:text-gray-200">Notive</h1>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-wrap gap-[2%] p-8 content-start
                        md:gap-4 md:p-4
                        sm:gap-2 sm:p-2">
          <AnimatePresence>
            {notes.map((note) => (
              <Notes
                key={note.id}
                color={note.color}
                initialContent={note.content}
                onDelete={() => {
                  setNoteIdToDelete(note.id);
                  setShowDeleteDialog(true);
                }}
                onSave={(newContent) => handleSaveNote(note.id, newContent)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Delete Dialog */}
      <AnimatePresence>
        {showDeleteDialog && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
              scale: { type: 'spring', duration: 0.6, bounce: 0.2 },
            }}
            className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50"
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 min-w-[260px]"
            >
              <div className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
                Delete this note?
              </div>
              <div className="flex justify-end gap-8">
                <button
                  className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-100"
                  onClick={() => {
                    setShowDeleteDialog(false);
                    setNoteIdToDelete(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded cursor-pointer bg-gray-800 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 text-white"
                  onClick={handleDeleteNote}
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
