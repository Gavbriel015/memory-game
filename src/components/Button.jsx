export default function Button({ name, isSelected, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`transition-colors ease-in duration-100 py-2 rounded-full w-full text-white font-bold text-2xl ${isSelected ? 'bg-[#152937] hover:bg-[#152937]' : 'bg-secondary hover:bg-text'}`}
        >
            {name}
        </button>
    );
}
