import { useContext, useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton';
import SettingsContext from './SettingsContext';

const red = '#f54e4e'
const green = '#4aec8c'


function Timer() {
    const settingsInfo = useContext(SettingsContext)

    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('work'); // work - break - null
    const [secondsLeft, setSecondsLeft] = useState(settingsInfo.workMinutes * 60);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);
    let combo = 0;
    const comboRef = useRef(combo);

    function switchMode() {
        const nextMode = (modeRef.current === 'work') ? 'break' : 'work';

        setMode(nextMode);
        modeRef.current = nextMode;

        setSecondsLeft((nextMode === 'work') ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60);
        secondsLeftRef.current = (nextMode === 'work') ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
    }

    function tick() {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current)
    }
    
    function initTimer() {
        setSecondsLeft(settingsInfo.workMinutes * 60);
    }

    useEffect(() => {
        initTimer();

        const interval = setInterval(() => {
            if (isPausedRef.current){return;}
            if (secondsLeftRef.current === 0) {
                switchMode();
                if (modeRef.current === 'work') {  
                    comboRef.current += 1;
                }
            }
            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [settingsInfo]);

    const totalSeconds = (mode === 'work') 
        ? settingsInfo.workMinutes * 60 
        : settingsInfo.breakMinutes * 60;
    const percentage = Math.round(secondsLeft / totalSeconds  * 100)
    const minutes = Math.floor(secondsLeft / 60); // Want to round minutes

    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = '0' + seconds;
    return (
        <div>
            <div style={{textShadow: '2px 2px black'}}>
                <h2 className='comboMeter' style={{color : ((mode === 'work') ? green : red)}}>Combo:{Math.floor(comboRef.current)}</h2>
            </div>
            <div>
            <CircularProgressbar value={percentage} text={minutes + ":" + seconds} styles={buildStyles({
                textColor: '#fff',
                pathColor: (mode === 'work') ? green : red,
                trailColor: 'rgba(255,255,255,.2)',
                textSize: '75%'
            })} />
            </div>
            <div style={{marginTop: '20px'}}>
                {isPaused 
                ? <PlayButton onClick={() => {setIsPaused(false); isPausedRef.current = false}}/> 
                : <PauseButton onClick={() => {setIsPaused(true); isPausedRef.current = true}}/>}
            </div>
            <div style={{marginTop: '20px'}}>
                <SettingsButton onClick={()=>settingsInfo.setShowSettings(true)}/>
            </div>
        </div>
    );
}
export default Timer;