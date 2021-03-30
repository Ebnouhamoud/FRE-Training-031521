const apiService = new APIService()
// apiService.getArtist('akon').then(data => console.log(data))

const searchBtn = document.querySelector('.search-icon')
let input = document.querySelector('.search-bar-box')
input.addEventListener('click', () => {
  input.classList.add('width')
})
document.querySelector('input').addEventListener('keyup',(e) => {
  if(e.keyCode === 13) {
    e.preventDefault()
    searchBtn.click()
    input.classList.remove('width')
  }
})


const getAlbums = () => {
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

searchBtn.addEventListener('click', getAlbums)