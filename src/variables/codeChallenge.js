import { sha256 } from './sha256';

function generateNonce() {
    const chars = 'abcdefghijklmnopqrstuvwxyz123456789_.-~';
    let nonce = '';
    for (let i=0; i<100; i++) {
        nonce += chars.charAt(Math.random() * (chars.length));
    }
    return nonce;
}

export function generateCodeChallenge() {
    let nonce = generateNonce();
    return sha256(nonce);
}
