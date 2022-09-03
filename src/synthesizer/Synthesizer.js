import * as Piano from "@tonejs/piano";

export default class SynthesizerPiano extends Piano.Piano {
    constructor(opts) {
        super(opts).toDestination();
        this.load();
    }

    triggerAttack({note, midi, time, velocity}) {
        return super.keyDown({note, midi, time, velocity});
    }

    triggerRelease({note, midi, time, velocity}) {
        return super.keyUp({note, midi, time, velocity});
    }

    stopAll() {
        return super.stopAll();
    }
}