import classes from "./PianoScreen.module.css";
import Piano from "../Piano/Piano";
import React from "react";

export default function PianoScreen() {
    const [pianoMode, setPianoMode] = React.useState("play");
    const changeModeRef = React.useRef(function (e) {
        if (e.key === ".") {
            setPianoMode("play");
        } else if (e.key === "/") {
            setPianoMode("watch");
        }
    });

    React.useEffect(() => {
        window.addEventListener("keypress", changeModeRef.current);
    }, []);

    console.log(pianoMode);
    return <div className={classes.pianoScreen}>
        <Piano mode={pianoMode}></Piano>
    </div>;
}