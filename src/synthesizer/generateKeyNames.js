export let WHITE_KEYS = [];
for (let i = 0; i <= 8; i++) {
    for (let baseNote of "CDEFGAB") {
        WHITE_KEYS.push(baseNote + i);
    }
}
WHITE_KEYS = WHITE_KEYS.slice(5, -6);

export const middleWhiteKeyIndex = WHITE_KEYS.indexOf("E4");

export let BLACK_KEYS = [];
for (let i = 0; i <= 7; i++) {
    for (let baseNote of "CD FGA ") {
        if (baseNote === " ") BLACK_KEYS.push(undefined); else BLACK_KEYS.push(baseNote + "#" + i);
    }
}
BLACK_KEYS = BLACK_KEYS.slice(5);

export const middleBlackKeyIndex = BLACK_KEYS.indexOf("D#4");