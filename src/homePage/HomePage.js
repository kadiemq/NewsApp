import { useState,useEffect } from 'react';
import './style.css'
import { FaCog } from 'react-icons/fa';
import {fetchNews} from '../api/api'

const HomePage = (props) => {

    const [news, setNews] = useState([])

    useEffect(async () => props.interests.length > 0 ? setNews(await fetchNews(props.interests.split(', '))) : [], [props.interests])
    // useEffect(() => console.log(props.interests.length), [props.interests])

    
    const linkClicked = (e) => {
        const link = e.target.getAttribute('url');
        window.open(link, "_blank")
    }

    return (

        news.length > 0 ? 

        <div className={'hp-container'}>
            
            <div className={'hp-header'}>
                <h1>Latest Updates</h1>

                <FaCog className='icons' />
            </div>


            <div className={'hp-news'}>

                <div className={'hp-news-item item-1'}>
                    <p onClick={linkClicked} url={news[0].url} className={'hp-news-item-title'}>{news[0].title}</p>
                    <p className={'hp-news-item-description'}>{news[0].description}</p>
                    <p className={'hp-news-item-source'}>{news[0].source.name}</p>
                    <p className={'hp-news-item-author'}>{news[0].author}</p>
                </div>


                <div className={'hp-news-item item-2'}>
                    <p onClick={linkClicked} url={news[1].url}  className={'hp-news-item-title'}>{news[1].title}</p>
                    <p className={'hp-news-item-description'}>{news[1].description}</p>
                    <p className={'hp-news-item-source'}>{news[1].source.name}</p>
                    <p className={'hp-news-item-author'}>{news[1].author}</p>
                </div>


                <div className={'hp-news-item item-3'}>
                    <img src={news[2].urlToImage}/>
                    <p onClick={linkClicked} url={news[2].url}  className={'hp-news-item-title'}>{news[2].title}</p>
                    <p className={'hp-news-item-description'}>{news[2].description}</p>
                    <p className={'hp-news-item-source'}>{news[2].source.name}</p>
                    <p className={'hp-news-item-author'}>{news[2].author}</p>
                </div>


                <div className={'item-4'}>
                    <img src={news[3].urlToImage}/>
                    <p onClick={linkClicked} url={news[3].url}  className={'hp-news-item-title'}>{news[3].title}</p>

                    <img src={news[4].urlToImage}/>
                    <p onClick={linkClicked} url={news[4].url}  className={'hp-news-item-title'}>{news[4].title}</p>
                </div>

                {/* <div className={'hp-news-item item-4'}>
                    <img src={'https://i.dailymail.co.uk/1s/2021/07/10/18/45259865-0-image-a-7_1625937523888.jpg'}/>
                    <p className={'hp-news-item-title'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum nisi nulla.</p>
                </div>


                <div className={'hp-news-item item-5'}>
                    <img src={'https://i.dailymail.co.uk/1s/2021/07/10/18/45259865-0-image-a-7_1625937523888.jpg'}/>
                    <p className={'hp-news-item-title'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum nisi nulla.</p>
                </div> */}


                <div className={'hp-news-item item-6'}>
                    <p onClick={linkClicked} url={news[5].url}  className={'hp-news-item-title'}>{news[5].title}</p>
                    <p className={'hp-news-item-description'}>{news[5].description}</p>
                    <p className={'hp-news-item-source'}>{news[5].source.name}</p>
                    <p className={'hp-news-item-author'}>{news[5].author}</p>
                </div>

                <div className={'hp-news-item item-7'}>
                    <p onClick={linkClicked} url={news[6].url}  className={'hp-news-item-title'}>{news[6].title}</p>
                    <p className={'hp-news-item-description'}>{news[6].description}</p>
                    <p className={'hp-news-item-source'}>{news[6].source.name}</p>
                    <p className={'hp-news-item-author'}>{news[6].author}</p>
                </div>

            </div>

        </div>



            : 'Loading')
}

export default HomePage;