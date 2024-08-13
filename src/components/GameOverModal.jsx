export default function GameOverModal({ scores, players, elapsedTime, moves, restart }) {

    const minutes = Math.floor(elapsedTime / 60);
    const remainingSeconds = elapsedTime % 60;
    const formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;

    const winner = Math.max(...scores);
    const indexWinner = scores.indexOf(winner);




    return (
        <>
            {players === 1 ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-12 rounded-lg max-w-2xl w-full">
                        <h2 className="font-bold mb-4 text-center text-primary text-5xl">You did it!</h2>
                        <p className="text-center text-xl text-[#7392A5] font-bold">Game over! Here's how you got on...</p>
                        <div className="mb-4 mt-8">
                            <div className="bg-secondary mb-4 bg-opacity-50 p-5 w-full flex items-center justify-between">
                                <h2 className="text-[#7392A5] font-bold">Time Elapsed</h2>
                                <span className="text-primary font-bold text-4xl" >{formattedTime}</span>
                            </div>
                            <div className="bg-secondary bg-opacity-50 p-5 w-full flex items-center justify-between mb-4">
                                <h2 className="text-[#7392A5] font-bold">Moves Taken</h2>
                                <span className="text-primary font-bold text-4xl" >{moves} Moves </span>
                            </div>
                            <div className="flex gap-5 pt-4">
                                <button
                                    onClick={restart}
                                    className="bg-orange w-full font-bold text-white py-3 px-5 text-2xl rounded-full"
                                >
                                    Restart
                                </button>
                                <button
                                    onClick={() => window.location.reload(true)}
                                    className="bg-opacity-50 w-full bg-background font-bold text-primary py-3 px-5 text-2xl rounded-full bg-secondary"
                                >
                                    Setup New Game
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            ) : (<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-12 rounded-lg max-w-2xl w-full">
                    <h2 className="font-bold mb-4 text-center text-primary text-5xl">Player {indexWinner + 1} Wins!</h2>
                    <p className="text-center text-xl text-[#7392A5] font-bold mb-8">Game over! Here's how you got on...</p>
                    {scores.map((score, index) => (
                        <div key={index} className={`bg-secondary mb-4 bg-opacity-50 p-5 w-full flex items-center justify-between ${indexWinner === index ? '!bg-[#152937] text-white' : ''} `}>
                            <p className={`font-bold ${indexWinner === index ? 'text-white' : 'text-[#7392A5]'}`}>
                                Player {index + 1} {indexWinner === index ? '(Winner!)' : ''}
                            </p>
                            <span className={`text-primary font-bold text-3xl ${indexWinner === index ? 'text-white' : 'text-primary'}`}>{score} Pairs</span>
                        </div>
                    ))}

                    <div className="flex gap-5 pt-4">
                        <button
                            onClick={restart}
                            className="bg-orange w-full font-bold text-white py-3 px-5 text-2xl rounded-full"
                        >
                            Restart
                        </button>
                        <button
                            onClick={() => window.location.reload(true)}
                            className="bg-opacity-50 w-full bg-background font-bold text-primary py-3 px-5 text-2xl rounded-full bg-secondary"
                        >
                            Setup New Game
                        </button>
                    </div>
                </div>
            </div>)}
        </>
    )
}