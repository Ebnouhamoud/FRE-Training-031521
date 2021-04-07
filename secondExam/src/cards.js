class Card {
  constructor(image, artist, date, album, ganra, linkToAlbum,collectionId) {
    this.image = image;
    this.artist = artist;
    this.date = date;
    this.album = album;
    this.ganra = ganra;
    this.linkToAlbum = linkToAlbum
    this.id = collectionId
    this.ele = null
  }
  
  generatCard () {
    let el = document.createElement('div')
      el.classList.add('card')
      el.innerHTML = `<img src="${this.image}" alt="">
      <div class="card-detail">
        <div>
          <h2> ${this.artist} </h2>
          <h4> ${this.album} </h4>
          <p> ${this.ganra} </p>
        </div>
        <div class="play">
          <a href="${this.linkToAlbum}"> Play </a>
        </div>
      </div>`
      this.el = el
    return el 
  }
  getElement () {
    return this.ele
  }
  render (parent) {
    let card = this.generatCard()
    parent.appendChild(card)
  }
}