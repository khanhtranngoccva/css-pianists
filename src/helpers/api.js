// Server time in milliseconds.
let serverTimeResponse = await (await fetch("/api/getTime")).json();
let firstServerTimestamp = serverTimeResponse.time;
let firstClientTimestamp = performance.now();

export function getCurrentTime() {
    return firstServerTimestamp + performance.now() - firstClientTimestamp;
}

export function getTimeUntilServerNow(serverTimestamp) {
    return serverTimestamp - getCurrentTime();
}

async function getSessionID() {
    return (await (await fetch("/api/sessionID")).json())["sessionId"];
}

async function sendJSON(endpoint, data, init={}) {
    return (await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        ...init,
    })).json();
}

export async function sendNoteToServer(data) {
    data.timestamp = getCurrentTime();
    sendJSON("/api/sendNote", data);
}