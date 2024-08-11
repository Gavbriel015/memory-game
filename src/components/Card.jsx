import { useState } from 'react';

export default function Card({ content, isFlipped, onClick }) {
    return (
        <div
            className={`cursor-pointer w-24 h-24 transition-all duration-300 ease-in-out rounded-full ${isFlipped ? 'bg-transparent' : 'bg-primary hover:bg-text'}`}
            onClick={onClick}
        >
            <div className={`w-24 h-24 bg-orange rounded-full flex items-center justify-center ${isFlipped ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}>
                {typeof content === 'string' && content.endsWith('.svg') ? (
                    <img className='w-10 h-10' src={content} alt="icon" />
                ) : (
                    <p className='text-4xl text-white font-bold'>{content}</p>
                )}
            </div>
        </div>
    )
}
