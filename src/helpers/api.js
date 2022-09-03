// Server time in milliseconds.
// let serverTimeResponse = await (await fetch("/api/getTime")).json();
// let serverTimestamp = serverTimeResponse.timestamp;
let firstServerTimestamp = +new Date();
let firstClientTimestamp = performance.now();

function getCurrentTime() {
    return firstServerTimestamp + performance.now() - firstClientTimestamp;
}

function getSession() {

}

export async function sendNoteToServer(data) {
    data.timestamp = getCurrentTime();
}

export function getNotesFromServer() {

}