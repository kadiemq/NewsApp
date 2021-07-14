import {useState, useEffect} from 'react'
import './App.css';
import FirstTimeComing from './firstTimeComing/firstTimeComing';
import HomePage from './homePage/HomePage';

function App() {

  const [firstTime, setFirstTime] = useState()
  const [interests, setInterests] = useState([])

  const addedInterest = () => {
    setFirstTime(false)
    setInterests(localStorage.getItem('interests'))
  }

  useEffect(() => {
    const haveInterests = localStorage.getItem('interests');
    
    haveInterests == null ? setFirstTime(true) : setInterests(haveInterests);
  })

  return (
    firstTime? <FirstTimeComing addedInterest={addedInterest}/> : <HomePage interests={interests}/>
  );
}

export default App;
