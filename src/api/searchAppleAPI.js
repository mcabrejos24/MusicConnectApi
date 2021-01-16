export default function containsPlaylistApple(playlistName) {
    let returnValue = false;
    let mk = window.MusicKit.getInstance();

    return mk.api.library.playlists().then(function(data) {
        data.forEach(playlist => {
          if (playlist.attributes.name.toLowerCase() === playlistName.toLowerCase()) {
              returnValue = true
              return;
          }
        });
        return returnValue;
    });
}
