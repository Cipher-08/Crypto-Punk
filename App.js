import './App.css'
import Header from './components/Header';
import CollectionCard from './CollectionCard';
import { useState , useEffect } from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {

  const [punkListData , setPunkListData] = useState([]);
  const [selectedPunk , setSelectedPunk] = useState(1)

  useEffect(()=>{
     const getMyNfts = async ()=>{
     
     const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xE323F5EdBEEB59fa8fD05863879e0e81Da530e5e&order_direction=asc')
  console.log(openseaData.data.assets)
     setPunkListData(openseaData.data.assets)
    
    }
    return getMyNfts()

  },[])

  return (
    <div className="app">
      <Header/>
      {
        punkListData.length >0 && (
          <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/> 
          <PunkList PunkListData={punkListData} setSelectedPunk={setSelectedPunk}/>

          </>
        )
      }
     
    </div>
  );
}

export default App;
