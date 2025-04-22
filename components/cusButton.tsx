'use client';
import React from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

const CusButton = ({ text, onClick, className }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`bg-[#C44156] text-white px-5 py-3 rounded-full hover:bg-[#5c2932] transition ${className || ''}`}
        >
            {text}
        </button>
    );
};

export default CusButton;
