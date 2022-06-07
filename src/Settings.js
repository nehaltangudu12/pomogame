import { useContext } from "react";
import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import './slider.css'

function Settings(props) {
    const settingsInfo = useContext(SettingsContext);
    return(
        <div style={{textAlign: "center"}}><h1>Settings</h1>
            <label>work minutes: {settingsInfo.workMinutes}:00</label>
            <ReactSlider
                className={"slider"}
                thumbActiveClassName={"thumb"}
                trackClassName={"track"}
                value={settingsInfo.workMinutes}
                onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                min={1}
                max={128}
            />
            <label>break minutes: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider
                className={"slider green"}
                thumbActiveClassName={"thumb"}
                trackClassName={"track"}
                value={settingsInfo.breakMinutes}
                onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                min={1}
                max={128}
            />
            <button {...props} className={"with-text-back"} onClick={()=>settingsInfo.setShowSettings(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg>
                Back
            </button>
        </div>
    );
}

export default Settings;