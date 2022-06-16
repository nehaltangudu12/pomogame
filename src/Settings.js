import { useContext } from "react";
import ReactSlider from "react-slider";
import BackButton from "./BackButton";
import SettingsContext from "./SettingsContext";
import './slider.css'

function Settings(props) {
    const settingsInfo = useContext(SettingsContext);
    return(
        <div style={{textAlign: "center", margin:'auto'}}><h1>Settings</h1>
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
            <div style={{textAlign:'center', marginTop:'20px'}}>
                <BackButton onClick={()=>settingsInfo.setShowSettings(false)}/>
            </div>
        </div>
    );
}

export default Settings;