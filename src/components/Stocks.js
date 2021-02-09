import React, { useState, useEffect } from 'react'
import { API_KEY_TOKEN } from '../config.json'
import axios from 'axios'
import StocksRow from './StocksRow'

const BASE_URL = "https://finnhub.io/api/v1/quote"

function Stocks() {
    const [stockData, setStockData] = useState([])

    const getStockData = (stock) => {
        return axios
            .get(`${BASE_URL}?symbol=${stock}&token=${API_KEY_TOKEN}`)
            .catch((error) => {
                console.error("Error", error.message)
            })
    }

    useEffect(() => {
        let tempStockData = []
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"]

        let promises = [];
        stocksList.map((stock) => {
            promises.push(
                getStockData(stock)
                .then((res) => {
                    tempStockData.push({
                        name: stock,
                        ...res.data
                    })
                })
            )
        })

        Promise.all(promises).then(() => {
            setStockData(tempStockData)
        })
    }, [])

    return (
        <div className="stocks">
            <div className="stocks__header">
                <p>Stocks</p>
            </div>
            <div className="stocks__list">
                {stockData.map((stock) => (
                    <StocksRow
                        key={stock.name}
                        name={stock.name}
                        openPrice={stock.o}
                        price={stock.c}
                    />
                ))}
            </div>

            <div className="stocks__header">
                <p>Lists</p>
            </div>
            <div className="stocks__list">
                {/* stocks to buy */}
            </div>
        </div>
    )
}

export default Stocks
