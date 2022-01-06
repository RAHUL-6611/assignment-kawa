
// imports
import {useState,useEffect} from "react"
import './App.css';
import Navbar from './component/Navbar';
import Baner from './component/Baner';
import Lists from './component/List';
import axios from 'axios'

function App() {


    const [details,setDetails] = useState();
    const [selectedCard,setSelectedCard] = useState();
 
    useEffect(() => {
    axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
    .then(function (response) {
      setDetails(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
     })
    },[])

  return (
    <div className="App">
      <Navbar/> 
      { details && 
      <div>
        <Baner details={details} selectedCard={selectedCard}/>
      <Lists details={details} setSelectedCard={setSelectedCard}/>
      </div>
      }
    </div>
  );
}

export default App;
