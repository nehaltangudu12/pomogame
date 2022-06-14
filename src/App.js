import { useState } from 'react';
import './App.css';
import Settings from './Settings';
import SettingsContext from './SettingsContext';
import Timer from "./Timer";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(30);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <h1>Pomogame</h1>
      <SettingsContext.Provider value={{
        workMinutes : workMinutes,
        breakMinutes : breakMinutes,
        showSettings : showSettings,
        setWorkMinutes: setWorkMinutes,
        setBreakMinutes : setBreakMinutes,
        setShowSettings : setShowSettings,
      }}>
        {showSettings ? <Settings/> : <Timer/>}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
