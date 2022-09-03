import classes from "./PianoScreen.module.css";
import Piano from "../Piano/Piano";

export default function PianoScreen() {
    return <div className={classes.pianoScreen}>
        <Piano></Piano>
    </div>
}