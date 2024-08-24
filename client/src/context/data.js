export const PLAIN_MSG = "Welcome to NEAR Talkbot app";
export const RECIPIENT = "ai.near";

export function generateNonce() {
    const nonce = Date.now().toString();
    return nonce.padStart(32, "0");
}

export function getCallbackUrl() {
    const fullUrl = window.location.href;
    const urlObj = new URL(fullUrl);
    const callbackUrl = `${urlObj.origin}${urlObj.pathname}`;

    return callbackUrl;
}

export function parseHashParams(hash) {
    const hashParams = new URLSearchParams(hash.substring(1));
    const params = {};
    hashParams.forEach((value, key) => {
        params[key] = value;
    });
    return params;
}

export function stringToUint8Array (str) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(str);
    return new Uint8Array(bytes);
}
