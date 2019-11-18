var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: '13528ecc68b947d68d3337ec04664846',
  clientSecret: 'eda6ac313f8f4c6d97a1a622c8c36475',
  redirectUri: 'http://localhost:3000/'
});
