


export default function containsPlaylistApple(playlistName) {
    // console.log('searching for playlist in apple music');
    let returnValue = false;
    let mk = window.MusicKit.getInstance();

    return mk.api.library.playlists().then(function(data) {
        data.forEach(playlist => {
          if (playlist.attributes.name.toLowerCase() === playlistName.toLowerCase()) {
              console.log("ding")
              returnValue = true
              return;
          }
        });
        return returnValue;
    });

    
}