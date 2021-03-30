const apiService = new APIService()
const controler = new Controler()


controler.addEventListerner('click','.search-icon',controler.getAlbums)
controler.addEventListerner('click','.search-bar-box',controler.addWidth)
controler.addEventListerner('keyup','input',controler.handleKeyUp)


