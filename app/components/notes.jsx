"use client";
import { motion } from "framer-motion";
import { useEffect,useState,useRef } from "react";
import { Trash2 } from "lucide-react";

export default function Notes({ color, onDelete }) {

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
        </motion.div>
    );
}