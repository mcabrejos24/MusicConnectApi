import { sha256 } from './sha256';
import { setCodeVerifier, getCodeVerifier } from './authValues';

function generateNonce() {
    const chars = 'abcdefghijklmnopqrstuvwxyz123456789_.-~';
    let nonce = '';
    for (let i=0; i<100; i++) {
        nonce += chars.charAt(Math.random() * (chars.length));
    }
    setCodeVerifier(nonce);
}

export function generateCodeChallenge() {
    generateNonce();
    return sha256(getCodeVerifier());
}
