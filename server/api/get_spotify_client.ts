import { SpotifyApi } from '@spotify/web-api-ts-sdk';


export default defineEventHandler((event) => {
const sdk = SpotifyApi.withClientCredentials("client-id", "secret", ["scope1", "scope2"]);
    return {
      hello: 'world'
    }
  })


  