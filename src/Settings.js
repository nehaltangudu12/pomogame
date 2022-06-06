import { useContext } from "react";
import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import './slider.css'

function Settings(props) {
    const settingsInfo = useContext(SettingsContext);
    return(
        <div style={{textAlign: "left"}}>Settings
            <label>work minutess: {settingsInfo.workMinutes}:00</label>
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
            
        </div>
    );
}

export default Settings;