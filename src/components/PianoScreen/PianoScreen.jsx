import classes from "./PianoScreen.module.css";
import Camera from "../../../react-dimension-css/Camera/Camera";
import ReusableBox from "../../../react-dimension-css/ReusableBox/ReusableBox";
import Canvas from "../../../react-dimension-css/Canvas/Canvas";

export default function PianoScreen() {
    return <div className={classes.pianoScreen}>
        <Canvas>
            <ReusableBox width="20px" height="50px" length="30px" frontBackground="black"></ReusableBox>
        </Canvas>
    </div>
}