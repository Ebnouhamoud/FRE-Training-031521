import React from 'react'
import Card from './card'

export default function Display({albums}) {
  
  return (
    <div className='cards-box'>
      {
        albums.map(ele => <Card 
          key={ele.artistName+ele.collectionName+ele.collectionViewUrl}
          album={new CardDeatail(
            ele.artworkUrl100,
            ele.artistName,
            ele.releseDate,
            ele.collectionName,
            ele.primaryGenreName,
            ele.collectionViewUrl,
            ele.collectionId)}/>)
      }
    </div>
  )
}

class CardDeatail {
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
}