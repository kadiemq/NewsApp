import {useState, useEffect} from 'react';
import './style.css';

const FirstTimeComing = (props) => {

    const [interests, setInterests] = useState([])
    const [buttonText, setButtonText] = useState('')


    const updateInterest = (e) => {
        const interest = e.target.value;

        interests.find(i => i===interest)? setInterests(interests.filter( i => i!==interest)) : setInterests([...interests, interest])
        
    }

    const addInterestToLocalStorage = () => {
        localStorage.setItem('interests', buttonText);
    }

    useEffect(() => {
        const len = interests.length
        

        len > 0 ? setButtonText(interests.join(", ")) : setButtonText('Your selected interests Will be displayed here')
    })

    return (

        <div className='ftc-container'>

            <div className='ftc-greetings'>
                <p>It's Likely Your First Time Visiting Our Website</p>
                <p>Welcome!</p>
                <p>Before You Start Please Choose The Topics That Interest You The Most And Click The Bottom Button</p>
            </div>
            
            

            <div className='ftc-selections-wrapper'>
                <button value={'Business'} onClick={updateInterest}>Business</button>
                <button value={'Entertainment'} onClick={updateInterest}>Entertainment</button>
                <button value={'Science'} onClick={updateInterest}>Science</button>
                <button value={'Health'} onClick={updateInterest}>Health</button>
                <button value={'Sports'} onClick={updateInterest}>Sports</button>
                <button value={'Technology'} onClick={updateInterest}>Technology</button>
              
            </div>


            <button className={'submitButton'} onClick={() => {addInterestToLocalStorage(); props.addedInterest();}}>{buttonText}</button>

        </div>

    )
}

export default FirstTimeComing;