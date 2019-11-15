var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '76ca00bb73934b5280a8e71cc8e82365',
  clientSecret: 'a8d477d7778d4d82a4e78a69b073173d',
  redirectUri: 'https://accounts.spotify.com/authorize'
});
