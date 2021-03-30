class Controler {
   addEventListerner = (type,element,func) => {
     let ele = document.querySelector(element)
     if(ele)    ele.addEventListener(type,func)
   }
  
   handleKeyUp = (e) => {
   let input = document.querySelector('.search-bar-box')
     const searchBtn = document.querySelector('.search-icon')
     if(e.keyCode === 13) {
     e.preventDefault()
     searchBtn.click()
     input.classList.remove('width')
   }
  }
  
   addWidth = () => {
   let input = document.querySelector('.search-bar-box')
   input.classList.add('width')
  }
  getAlbums = () => {
    const artist = document.querySelector('input').value
    let parent = document.querySelector('.cards-box')
    while(parent.firstChild){
      parent.removeChild(parent.firstChild)
    }
    apiService.getArtist(artist).then(({results})=> {
      console.log(results)
      results.forEach(ele => {
        let htmlEle = new Card(ele.artworkUrl100,ele.artistName,ele.releseDate,ele.collectionName,ele.primaryGenreName,ele.collectionViewUrl,ele.collectionId)
        htmlEle.render(parent)
      });
    })
  }
}
  
