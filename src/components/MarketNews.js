import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_KEY_TOKEN } from '../config.json'

const BASE_URL = "https://finnhub.io/api/v1/news?category=general"

function MarketNews() {
    const [news, setNews] = useState([])
    
    const getNews = () => {
        return axios
            .get(`${BASE_URL}&token=${API_KEY_TOKEN}`)
            .catch((error) => {
                console.error("Error", error.message)
            })
    }

    useEffect(() => {
        let tempNews = []
        let promises = []

        promises.push(getNews()
        .then((res) => {
            res.data.map(article => {
                tempNews.push({
                    ...article
                })
            })
        }))        

        Promise.all(promises).then(() => {
            setNews(tempNews)
        })
    }, [])

    console.log(news.length)

    return (
        <div className="marketnews__container">
            <h2>Latest Market News</h2>
            {news.map(item => (
                <div key={item.id} className="article__container">
                    <h4>{item.headline}</h4>
                    <img src={item.image} alt="" width="100"/>
                    <p>{item.summary}</p>
                    <a href={item.url}>Read More</a>
                    <br/>
                    <small>Source: {item.source}</small>
                    <br/>
                    <time>{new Date(1612991492 * 1000).toUTCString()}</time>
                </div>
            ))}
        </div>
    )
}

export default MarketNews
