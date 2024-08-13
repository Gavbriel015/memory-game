export default function GameOverModal({scores, players, elapsedTime, moves}) {

    const minutes = Math.floor(elapsedTime / 60);
    const remainingSeconds = elapsedTime % 60;
    const formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;

    return(
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
        ) : ( <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">You did it!</h2>
            <p>Game over! Here's how you got on...</p>
            <div className="mb-4">
                <div>
                    <h2>Time Elapsed</h2>
                    {/* <span>TIEMPO </span> */}
                </div>

                <h3 className="text-xl font-semibold">Scores:</h3>
                {scores.map((score, index) => (
                    <p key={index} className="text-lg">Player {index + 1}: {score}</p>
                ))}
            </div>
            <button
                
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
                Close
            </button>
        </div>
    </div>) } 
       </>
    )
}