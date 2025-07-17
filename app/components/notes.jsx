"use client";
export default function Notes({ color }) {
    return (
        <div
            className={`flex aspect-square m-3 bg-red-800 rounded-lg
                        w-[15.5%] h-auto
                        xl:w-[22%]
                        lg:w-[30%]
                        md:w-[45%]
                        sm:w-[37vw] sm:m-2
                        max-w-[648px] max-h-[667px]
                        [@media(max-width:48rem)]:w-[90vw]
                        ${color || ''}`}
            style={{
                minWidth: '80px',
                maxWidth: '100%',
            }}
        >
            {/* Note content */}
        </div>
    );
}