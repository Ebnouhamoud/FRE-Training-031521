import React,{useState,useEffect,useCallback} from 'react'
import APIService from './api'
import {useHistory} from "react-router-dom"

import './style/main.css';
import Dispaly from './display'
import Search from './search'

function App() {
  const [albums,setAlbums] = useState({albums:[],artist:''})
  const api = new APIService()
  let history = useHistory();


  useEffect(()=> {
    let search = undefined
    if(window) {
      search = getSearchPer(window.location.search)
    }
    if(search) handleSearch(search)
  },[])


  const handleSearch = (str)=> {
    if(albums.artist === str || !str.length) return
    api.getArtist(str).then(res => setAlbums({artist:str,albums:res}))
    history.push(`/?search=${str}`)
  }


  const myfunc = useCallback(
    (str) => {
      handleSearch(str)
    },
    [],
  )

  
  return (
    <div className="App">
      <Search handleSearch={myfunc}/>
      <Dispaly albums={albums.albums}/>
    </div>
  );
}

const getSearchPer = (str) => {
  let temp = ''
  let run  = false
  for(let i=0;i<str.length;i++){
    if(run) temp+=str[i]
    if(str[i]=== '=') run = true
  }
  return temp
}



export default App;
