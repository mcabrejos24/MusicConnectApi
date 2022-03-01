let authValue = {"apple": 0, "spotify": 0};
let spotifyCodeVerifier = '';

export function getAuthValue(service) {
    if (!service) { console.error('Error: no service specified!'); return; }
    if (service === 'spotify') {
        return authValue.spotify;
    } else if (service === 'apple') {
        return authValue.apple
    } else {
        console.error('Error: service does not exist!');
    }
}

export function setAuthValue(service, value) {
    if (!service || !value ) { console.error('Error: no service or value specified!'); return; }
    if (service === 'spotify') {
        authValue.spotify = value;
        return authValue.spotify === value ? true : false; // if successful return true, if not return false
    } else if (service === 'apple') {
        authValue.apple = value;
        return authValue.apple === value ? true : false;
    } else {
        console.error('Error: service does not exist!');
    }
}

export function getCodeVerifier() {
    return spotifyCodeVerifier;
}

export function setCodeVerifier(value) {
    spotifyCodeVerifier = value;
}
