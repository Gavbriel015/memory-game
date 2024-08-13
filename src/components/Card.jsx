export default function Card({ content, isFlipped, onClick, grid}) {


    const getSizeClasses = () => {
        switch (grid) {
            case '4x4':
                return 'w-20 h-20 ss:w-24 ss:h-24 md:w-32 md:h-32';
            case '6x6':
                return 'w-12 h-12 ss:w-20 ss:h-20 lg:w-24 md:h-24';
            default:
                return 'w-16 h-16 md:w-24 md:h-24';
        }
    };

    return (
        <div
            className={`cursor-pointer ${getSizeClasses()} transition-all duration-300 ease-in-out rounded-full ${isFlipped ? 'bg-transparent' : 'bg-primary hover:bg-text'}`}
            onClick={onClick}
        >
            <div className={`${getSizeClasses()} bg-orange rounded-full flex items-center justify-center ${isFlipped ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}>
                {typeof content === 'string' && content.endsWith('.svg') ? (
                    <img className='w-10 h-10' src={content} alt="icon" />
                ) : (
                    <p className='text-4xl md:text-5xl text-white font-bold'>{content}</p>
                )}
            </div>
        </div>
    );
}
