export default class APIService {
  constructor(){
    this.url1 = 'https://itunes.apple.com/search?term=${';
    this.url2 = '}&media=music&entity=album&attribute=artistTerm&limit=500';
    this.cache = {}
  }
  async getArtist (artist) {
    try {
      let data = await fetch(this.url1 + artist + this.url2)
      data = await data.json()
      this.cache[artist] = data.results
      return data.results
    } catch (err){
      console.log(err)
    }
  }
}