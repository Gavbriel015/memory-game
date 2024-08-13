export default function PlayerTurn({scorePlayer, numPlayer, activeTurn}) {
    return(
        <div className="w-full max-w-[400px] m-auto">
            <div className={`m-auto w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[20px] border-b-secondary ${activeTurn ? '!border-b-orange' : 'border-b-secondary'}  `}></div>
            <div className={`flex justify-between p-6 rounded-2xl ${activeTurn ? 'bg-orange' : 'bg-secondary'}`}>
                <p className={`text-primary font-bold text-xl ${activeTurn ? 'text-white' : ''} `}>Player {numPlayer}</p>
                <span className={`text-primary text-2xl font-bold ${activeTurn ? 'text-white' : ''} `}>{scorePlayer || 0}</span>
            </div>
           { activeTurn &&  <p className="text-black uppercase tracking-[10px] text-center font-bold text-[13px] pt-4">Current Turn</p>}
        </div>
    )
}