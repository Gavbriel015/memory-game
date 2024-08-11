import './App.css'
import Game from './components/Game';
import GameMenu from './components/GameMenu'
import { useSettingsGame } from './utils/settingsGame'

function App() {

  const [settings, setSettingsGame] = useSettingsGame();

  console.log(settings)

  return (
    <>
      <main>

        {settings === undefined ? <GameMenu setSettingsGame={setSettingsGame}/> : <Game settings={settings}/>}
        


      </main>
    </>
  )
}

export default App
