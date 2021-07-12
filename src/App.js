import {useState, useEffect} from 'react'
import './App.css';
import FirstTimeComing from './firstTimeComing/firstTimeComing';

function App() {

  const [firstTime, setFirstTime] = useState()
  const [interests, setInterests] = useState([])

  const firstTimeComing = () => {
    const haveInterests = localStorage.getItem('interests');
    
    return haveInterests == null ? setFirstTime(true) : setInterests(haveInterests);
  }

  const addedInterest = () => {
    setFirstTime(false)
    setInterests(localStorage.getItem('interests'))
  }

  useEffect(() => {
    firstTimeComing();
  })

  return (
    firstTime? <FirstTimeComing addedInterest={addedInterest}/> : <h1>{interests.length}</h1>
  );
}

export default App;
