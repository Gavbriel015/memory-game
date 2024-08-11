import Button from "./Button";
import { useState } from "react";

export default function GameMenu({setSettingsGame}) {

    const settingTheme = ['Numbers', 'Icons'];
    const settingPlayers = [1, 2, 3, 4];
    const settingGridSize = ['4x4', '6x6']; 
    
    const [theme, setTheme] = useState(settingTheme[0]);
    const [players, setPlayers] = useState(settingPlayers[0]);
    const [gridSize, setGridSize] = useState(settingGridSize[0]);
    
    const handleTheme = (setting) => {
        setTheme(setting);
    }

    const handlePlayers = (player) => {
        setPlayers(player);
    }

    const handleGridSize = (size) => {
        setGridSize(size);
    }

    const handleSubmit = () => {
        setSettingsGame({
            theme,
            players,
            gridSize
        });
    }

    return (
        <div className="bg-primary h-screen w-screen">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-white font-bold text-4xl mb-12">Memory Game</h1>
                <div className="w-full bg-white max-w-[700px] px-14 py-10 rounded-3xl">
                    <div className="">
                        <h2 className="text-text font-bold text-xl pb-4">Select Theme</h2>
                        <div className="flex gap-12">
                            {
                                settingTheme.map(setting => (
                                    <Button 
                                        onClick={() => handleTheme(setting)} 
                                        isSelected={theme === setting}  
                                        key={setting} 
                                        name={setting} 
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="pt-4">
                        <h2 className="text-text font-bold text-xl pb-4">Number of Players</h2>
                        <div className="flex gap-12">
                            {
                                settingPlayers.map(player => (
                                    <Button 
                                        onClick={() => handlePlayers(player)} 
                                        isSelected={players === player}  
                                        key={player} 
                                        name={player} 
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="pt-4">
                        <h2 className="text-text font-bold text-xl pb-4">Grid Size</h2>
                        <div className="flex gap-12">
                            {
                                settingGridSize.map(grid => (
                                    <Button 
                                        onClick={() => handleGridSize(grid)} 
                                        isSelected={gridSize === grid}  
                                        key={grid} 
                                        name={grid} 
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="bg-orange text-white py-4 mt-8 w-full rounded-full font-bold text-4xl">Start Game</button>
                </div>
            </div>
        </div>
    )
}
