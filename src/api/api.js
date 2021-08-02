// export function fetchNews(data) {
//     const news = []

//     var numOfArticlesArray = fetchNewsPreprocessing(data)

//     data.map( async (interest, index) => {
//         const url = `https://newsapi.org/v2/top-headlines?country=us&category=${interest}&apiKey=`

//         try {

//             const res = await fetch(url).then(res => res.json())
//             const articles = res.articles
//             console.log(articles)

//             for (let i = 0; i < numOfArticlesArray[index]; i++) {
//                 news.push(articles[i])
//             }

//         }catch (err) {
//             console.log(err)
//         }

        

//         // .then(res => res.json())
//         // .then(res => res.articles)
//         // .then(res => {
//         //     console.log(`${interest} news:`, res)
//             // console.log(index)
//             // console.log(`${interest} should have ${numOfArticlesArray[index]} articles`)
            
            
//         // })
//         // .catch(err => console.log(err))
//         // .finally(console.log('Finished'))
        
//     })

//     console.log('News Outside: ', news);

// }


export async function fetchNews(data) {
    const news               = [];
    const numOfArticlesArray = fetchNewsPreprocessing(data);

    for (const [index, interest] of data.entries()) {

        try {

            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${interest}&apiKey=`;

            const res = await fetch(url).then(res => {

                if(!res.ok) throw new Error(res.json().then(res => res.message)); 
                else return res.json();

            }).catch(err => console.log(err.message));
            const articles = res.articles;
            // console.log(articles)

            for ( let i = 0 ; i < numOfArticlesArray[index] ; i++ ) {
                news.push(articles[i]);
            }

        }catch (err) {
            console.log(err)
        }

        
        
    }
  
    return news;
  
}

function fetchNewsPreprocessing(rawData) {
    const numOfInterests = rawData.length
    // console.log(numOfInterests)


    var avg = 7 / numOfInterests;
    var avgDowncCeil = Math.floor(avg)
    var numOfArticlesArray = Array(numOfInterests).fill(avgDowncCeil)
    var indexesToAddOne = Math.round((avg-avgDowncCeil)*numOfInterests)

    for (let i = 0; i < indexesToAddOne; i++) {
        numOfArticlesArray[i] += 1;
        // console.log(`Index ${i} needs to add one.`)
    }

    return numOfArticlesArray;

    // console.log(numOfArticlesArray)
    // console.log(avg)
    // console.log(avgDowncCeil)
    // console.log(indexesToAddOne)
}


