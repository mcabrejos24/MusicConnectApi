
function randomize(length, mask) {
    let result = "";
    let randomIndices = new Int8Array(length);
    window.crypto.getRandomValues(randomIndices);
    const byteLength = 256;
    const maskLength = Math.min(mask.length, byteLength);
    const scalingFactor = byteLength / maskLength;

    for (var i = 0; i < length; i++) {
        result += mask[Math.floor(Math.abs(randomIndices[i]) / scalingFactor)];
    }
    return result;
}

function generateVerifier(length) {
    const mask = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";
    return randomize(length, mask);
}

function base64UrlEncode(array) {
    return window.btoa(String.fromCharCode.apply(null, new Uint8Array(array)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

export function generateChallenge(length = 43) {
    let verifier = generateVerifier(length);

    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    return window.crypto.subtle.digest('SHA-256', data).then(array => { return { code_challenge: base64UrlEncode(array), code_verifier: verifier }; });
}
