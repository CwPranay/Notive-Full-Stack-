"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Trash2 } from "lucide-react";

interface NotesProps {
    color?: string;
    onDelete: () => void;
    initialContent?: string;
    onSave: (content: string) => void;
}

export default function Notes({ color, onDelete, initialContent = "", onSave }: NotesProps) {
    const [content, setContent] = useState(initialContent);
    const [isEditing, setIsEditing] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const saveTimerRef = useRef<NodeJS.Timeout | null>(null);

    // This ref helps prevent calling onSave when initialContent updates
    // if the content hasn't truly been edited by the user yet.
    const hasUserEditedRef = useRef(false);

    // 1. Initialize local content from prop and reset edit flag
    useEffect(() => {
        setContent(initialContent);
        // Reset hasUserEditedRef when initialContent changes to avoid
        // saving unchanged content if the prop updates (e.g., from other sources)
        hasUserEditedRef.current = false;
    }, [initialContent]);

    // 2. Focus the textarea when entering edit mode
    useEffect(() => {
        if (isEditing && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [isEditing]);

    // 3. Debounce Effect for Auto-Saving while typing
    useEffect(() => {
        // Clear any existing timer
        if (saveTimerRef.current) {
            clearTimeout(saveTimerRef.current);
        }

        // Only schedule a save if actively editing AND the user has actually typed something
        if (isEditing && hasUserEditedRef.current) {
            saveTimerRef.current = setTimeout(() => {
                // Call onSave with the current content
                onSave(content);
                // After saving, reset hasUserEditedRef as the content is now "saved"
                hasUserEditedRef.current = false;
            }, 500);
        }

        // Cleanup function for the debounced timer
        // Important: We do NOT call onSave here. The onBlur handler handles the final save.
        return () => {
            if (saveTimerRef.current) {
                clearTimeout(saveTimerRef.current);
            }
        };
    }, [content, isEditing, onSave]); // Dependencies

    const handleNoteClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
        hasUserEditedRef.current = true; // Mark as edited by user
    };

    const handleBlur = () => {
        setIsEditing(false);
        // When blurring, if the user has made changes, force an immediate save.
        // This ensures the last state is saved reliably when editing stops.
        if (hasUserEditedRef.current) {
            onSave(content);
            hasUserEditedRef.current = false; // Reset after saving
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
                opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                scale: { type: "spring", duration: 0.6, bounce: 0.2 },
            }}
            className={`relative flex aspect-square m-3 rounded-lg
                        w-[15.5%] h-auto
                        xl:w-[22%]
                        lg:w-[30%]
                        md:w-[45%]
                        sm:w-[37vw] sm:m-2
                        max-w-[648px] max-h-[667px]
                        [@media(max-width:640px)]:w-[80vw] [@media(max-width:640px)]:m-1
                        ${color || ''}`}
            style={{
                minWidth: '60px',
                maxWidth: '100%',
            }}
            onClick={handleNoteClick}
        >
            {/* Delete Icon */}
            <button
                className="absolute cursor-pointer top-2 right-2 z-10 text-white rounded-full p-1 "
                onClick={e => {
                    e.stopPropagation();
                    onDelete && onDelete();
                }}
                aria-label="Delete note"
                type="button"
            >
                <Trash2 size={18} />
            </button>
            {/* Note content */}
            {isEditing ? (
                <textarea
                    ref={textareaRef}
                    value={content}
                    onChange={handleChange}
                    onBlur={handleBlur} // The primary trigger for final save on exit
                    className="w-full h-full p-3 bg-transparent resize-none outline-none text-white overflow-auto scrollbar-hide"
                    placeholder="Write your note here..."
                />
            ) : (
                <div
                    className="w-full h-full p-3 text-white overflow-auto break-words whitespace-pre-wrap cursor-text"
                >
                    {content || "Click to add a note..."}
                </div>
            )}
        </motion.div>
    );
}