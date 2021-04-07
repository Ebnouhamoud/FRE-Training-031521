import React from 'react'

export default function Card({album}) {
  return (
    <div className='card'>
      <img src={album.image} alt=""/>
      <div className="card-detail">
        <div>
          <h2> {album.artist} </h2>
          <h4> {album.album} </h4>
          <p> {album.ganra} </p>
        </div>
        <div className="play">
          <a href={album.linkToAlbum}> Play </a>
        </div>
      </div>
    </div>
  )
}


