import React, {useState, useEffect} from 'react';
import LoadingMask from './components/LoadingMask'
import Hotel from './components/Hotel'
import Subscription from './components/Subscription'
import './App.css';

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [timer, setTimer] = useState(false)
  const [loader, setLoader] = useState(false)
  
  const fetchData = () => {
    fetch("https://api/hotels")
      .then((response) => response.json())
      .then((data) => {setData(data);setLoader(false)})
      
      .catch(function() {
        setError(true)
        setLoader(false)
    });
  }

  useEffect(() => {
    fetchData()
    
    setTimeout(() => {
      setTimer(true)
    }, 5000)

  }, [])
  
  

  return (
   <div>
    
    <h1>Hotels</h1>

    {data 
     && (
       <div>
         {data.map((hotel, i) => <Hotel hotel={hotel} key={i} />)}
       </div>
     ) 
     }
     
    { timer && <Subscription /> }

    { loader
      && <LoadingMask />
    }

    { error 
      && <p>Oops, something happened</p> 
    }

   </div>
  )
  
}

export default App;
