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
    <main style={{margin:'100$'}}>
      <h1 style={{fontSize: '200%'}}>Pomogame</h1>
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
      <div style={{position: 'absolute', top:'40%',right:'15%'}}>
        <h3 style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', padding:'10px', borderRadius:'5px'}}>
          <a href='https://github.com/nehaltangudu12'>Github Profile</a>
        </h3>
      </div>
      <div style={{position: 'fixed', top:'40%',left:'10%'}}>
        <h3>Gamify Productivity!</h3>
        <p>Welcome to Pomogame!</p>
      </div>
    </main>
  );
}

export default App;
