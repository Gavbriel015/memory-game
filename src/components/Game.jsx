import Card from "./Card";
import { useState } from "react";
import PlayerTurn from "./PlayerTurn";
import { iconPaths } from "../utils/icons";
import GameOverModal from "./GameOverModal";
import Timer from "./Timer";

export default function Game({ settings }) {
    const { gridSize, players, theme } = settings;

    

    const generatePlayers = () => {
        const numPlayers = [];
        for (let i = 1; i <= players; i++) {
            numPlayers.push(i);
        }
        return numPlayers;
    }

    const generateBoard = () => {
        if (theme === 'Numbers') {
            const numbers = [];
            if (settings.gridSize === '4x4') {
                for (let i = 1; i <= 8; i++) {
                    numbers.push(i, i);
                }
            } else {
                for (let i = 1; i <= 18; i++) {
                    numbers.push(i, i);
                }
            }
            return numbers.sort(() => Math.random() - 0.5);
        } else {
            const images = [];
            if (settings.gridSize === '4x4') {
                for (let i = 0; i < 8; i++) {
                    images.push(iconPaths[i], iconPaths[i]);
                }
            } else {
                for (let i = 0; i < 18; i++) {
                    images.push(iconPaths[i], iconPaths[i]);
                }
            }
            return images.sort(() => Math.random() - 0.5);
        }
    };

    const initializeGame = () => {
        setBoard(generateBoard());
        setNumberOfPlayers(generatePlayers());
        setScores(Array(players).fill(0));
        setCurrentPlayer(0);
        setFlippedCards([]);
        setMatchedCards([]);
        setCountMoves(0);
        setResetTimer(true);
        setTimeout(() => setResetTimer(false), 0);
        setGameOver(false);
        setElapsedTime(0); 
    };

    const [board, setBoard] = useState(generateBoard());
    const [numberOfPlayers, setNumberOfPlayers] = useState(generatePlayers());
    const [scores, setScores] = useState(Array(players).fill(0));
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [countMoves, setCountMoves] = useState(0);
    const [resetTimer, setResetTimer] = useState(false);
    const [gameOver, setGameOver] = useState(false); 
    const [elapsedTime, setElapsedTime] = useState(0);

    const changeTurn = () => {
        setCurrentPlayer((prevPlayer) => (prevPlayer + 1) % numberOfPlayers.length);
    };

    const handleCardClick = (index) => {
        if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) return;

        const newFlippedCards = [...flippedCards, index];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
            setCountMoves(prevCountMoves => prevCountMoves + 1);

            const [firstIndex, secondIndex] = newFlippedCards;
            if (board[firstIndex] === board[secondIndex]) {
                setMatchedCards(prevMatchedCards => [...prevMatchedCards, firstIndex, secondIndex]);

                setScores(prevScores => {
                    const newScores = [...prevScores];
                    newScores[currentPlayer] += 1;
                    return newScores;
                });

                setFlippedCards([]);
                
                if (matchedCards.length + 2 === board.length) {
                    setGameOver(true);
                }
            } else {
                setTimeout(() => {
                    setFlippedCards([]);
                    changeTurn();
                }, 1000);
            }
        }
    };

    return (
        <div className="w-screen h-screen">
            <div className="max-w-[1280px] m-auto flex flex-col py-6 md:py-12 md:px-10 justify-between items-center h-full w-full">
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <h1 className="text-primary font-bold text-3xl mb-1 md:text-4xl ">Memory Game</h1>
                    <div className="flex gap-3 ss:gap-4 ss:mt-4">
                        <button
                            onClick={initializeGame}
                            className="bg-orange font-bold text-white py-3 px-5 text-2xl rounded-full"
                        >
                            Restart
                        </button>
                        <button
                            onClick={() => window.location.reload(true)}
                            className="bg-background font-bold text-primary py-3 px-5 text-2xl rounded-full bg-secondary"
                        >
                            New Game
                        </button>
                    </div>
                </div>

                <div className={`grid gap-2 ${gridSize === '4x4' ? 'grid-cols-4' : 'grid-cols-6 grid-rows-6'}`}>
                    {
                        board.map((content, index) => (
                            <Card
                                key={index}
                                content={content}
                                onClick={() => handleCardClick(index)}
                                isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
                                grid={gridSize}
                            />
                        ))
                    }
                </div>

                {players !== 1 ? (
                <div className="flex w-full gap-6">
                    {
                        numberOfPlayers.map((player, index) => (
                            <PlayerTurn
                                key={index}
                                numPlayer={player}
                                activeTurn={index === currentPlayer}
                                scorePlayer={scores[player - 1]}
                            />
                        ))
                    }
                </div>) : (
                    <div className="flex flex-col justify-center items-center md:flex-row w-full gap-4 mt-4 px-8">
                        <div className="rounded-2xl bg-secondary text-primary flex gap-4 items-center p-4 px-10 justify-between w-full max-w-[500px]">
                            <h2 className="font-bold text-xl">Time</h2>
                            <Timer isGameOver={gameOver} reset={resetTimer} onTimeUpdate={setElapsedTime} />
                        </div>
                        <div className="rounded-2xl bg-secondary text-primary flex gap-4 items-center p-5 px-10 justify-between w-full max-w-[500px]">
                            <h2 className="font-bold text-xl">Moves</h2>
                            <h2 className="font-bold text-xl">{countMoves}</h2>
                        </div>
                    </div>
                )}

                {/* GAME OVER MODAL HERE */}
                {gameOver && (
                    <GameOverModal restart={initializeGame} scores={scores} players={players} elapsedTime={elapsedTime} moves={countMoves}/>
                )}
            </div>
        </div>
    );
}
