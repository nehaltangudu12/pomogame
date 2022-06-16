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
      <div className='container'>

        <div style={{flex: '1'}}>
          <h3 
          style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                  padding:'10px', 
                  borderRadius:'5px', 
                  width:'fit-content', 
                  margin:'auto'}}>
            <a href='https://github.com/nehaltangudu12'>Github Profile</a>
          </h3>
        </div>

        <div className='context'>
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
        </div>
        
        <div style={{flex:'1'}}>
          <h3>Gamify Productivity!</h3>
          <p>Welcome to Pomogame!</p>
        </div>
      </div>

    </main>
  );
}

export default App;
