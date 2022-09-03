import ReusableBox from "../../../react-dimension-css/ReusableBox/ReusableBox";
import Canvas from "../../../react-dimension-css/Canvas/Canvas";
import classes from "./Piano.module.css"
import React from "react";
import SynthesizerPiano from "../../synthesizer/Synthesizer";
import {KEYMAP, STATE} from "../../synthesizer/KeyboardPlayer";
import {BLACK_KEYS, WHITE_KEYS, middleWhiteKeyIndex, middleBlackKeyIndex} from "../../synthesizer/generateKeyNames";
import * as apiHelpers from "../../helpers/api";

const pianoSynth = new SynthesizerPiano({
    velocities: 10,
});

// TODO: Set active to true or false based on keypress events and live data from Hop.
function PianoKey(props) {
    if (props.active) {
        pianoSynth.triggerAttack({note: props.keyValue});
    } else {
        pianoSynth.triggerRelease({note: props.keyValue});
    }

    return <div className={`${classes.pianoKey} ${props.className || ""}`} style={props.style} onClick={props.onClick}>
        <ReusableBox className={`${classes.pianoKeyInner} ${props.active ? classes.keyActive : ""}`}></ReusableBox>
    </div>
}

export default function Piano(props) {
    const [keyStateData, changeKeyStateData] = React.useState(() => {
        const keyState = [].concat(WHITE_KEYS, BLACK_KEYS).filter(Boolean).reduce((acc, item) => {
            acc[item] = false;
            return acc;
        }, {});
        return {keyState};
    });

    function activateKey(key) {
        keyStateData.keyState[key] = true;
        changeKeyStateData({keyState: keyStateData.keyState});
    }

    function deactivateKey(key) {
        keyStateData.keyState[key] = false;
        changeKeyStateData({keyState: keyStateData.keyState});
    }

    const keyupHandlerRef = React.useRef(function keyupHandler(e) {
        const mappedKey = KEYMAP[e.key];
        if (!mappedKey) return;
        const currentKey = mappedKey[0] + (STATE.manualInputOctave + mappedKey[1]);
        if (keyStateData.keyState[currentKey]) {
            deactivateKey(currentKey);
            apiHelpers.sendNoteToServer({
                op: "keyup", key: currentKey,
            });
        }
    });

    const keydownHandlerRef = React.useRef(function keydownHandler(e) {
        const mappedKey = KEYMAP[e.key];
        if (!mappedKey) return;
        const currentKey = mappedKey[0] + (STATE.manualInputOctave + mappedKey[1]);
        if (!keyStateData.keyState[currentKey]) {
            activateKey(currentKey);
            apiHelpers.sendNoteToServer({
                op: "keydown",
                key: currentKey,
            });
        }
    });

    React.useEffect(() => {
        if (props.mode === "watch") {
            window.removeEventListener("keydown", keydownHandlerRef.current);
            window.removeEventListener("keyup", keyupHandlerRef.current);
        } else {
            window.addEventListener("keydown", keydownHandlerRef.current);
            window.addEventListener("keyup", keyupHandlerRef.current);
        }
        return () => {
            window.removeEventListener("keydown", keydownHandlerRef.current);
            window.removeEventListener("keyup", keyupHandlerRef.current);
        }
    }, [props.mode]);

    const whiteKeyButtons = WHITE_KEYS.map((key, index) => {
        const indexGap = index - middleWhiteKeyIndex;
        return <PianoKey style={{
            transform: `translateX(calc(var(--bigKeyLength) * ${indexGap}))`,
        }} key={key} keyValue={key} active={keyStateData.keyState[key]}></PianoKey>
    });
    const blackKeyButtons = BLACK_KEYS.map((key, index) => {
        const indexGap = index - middleBlackKeyIndex;
        if (key) {
            return <PianoKey className={classes.blackKey} style={{
                transform: `translateX(calc(var(--bigKeyLength) * ${indexGap} - var(--bigKeyLength) / 2)) translateY(calc(var(--height) / -2)) translateZ(calc((var(--bigKeyWidth) - var(--width)) / -2))`,
            }} key={key} keyValue={key} active={keyStateData.keyState[key]}></PianoKey>
        }
    });

    return <Canvas perspectiveY={"-50vw"} perspective={"30vw"} allowRotate={true} minRotX={-2} maxRotX={2} minRotY={-2}
                   maxRotY={2} className={classes.pianoCanvas}>
        <div className={classes.piano}>
            {whiteKeyButtons}
            {blackKeyButtons}
        </div>
    </Canvas>;
}