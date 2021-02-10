import React, { useState, useEffect } from 'react'
import { API_KEY_TOKEN } from '../config.json'
import axios from 'axios'
import StocksRow from './StocksRow'
import { db } from '../firebase'

const BASE_URL = "https://finnhub.io/api/v1/quote"

function Stocks() {
    const [stockData, setStockData] = useState([])
    const [myStocks, setMyStocks] = useState([])

    const getMyStocks = () => {
        db.collection('myStocks')
        .onSnapshot(snapshot => {
            let promises = []
            let tempData = []

            snapshot.docs.map((doc) => {
                promises.push(getStockData(doc.data().ticker)
                .then(res => {
                    tempData.push({
                        id: doc.id,
                        data: doc.data(),
                        info: res.data
                    })
                }))
            })

            Promise.all(promises).then(() => {
                setMyStocks(tempData)
            })
        })
    }


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
        getMyStocks();
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
                {myStocks.map((stock) => (
                    <StocksRow
                        key={stock.data.ticker}
                        name={stock.data.ticker}
                        openPrice={stock.info.o}
                        shares={stock.data.shares}
                        price={stock.info.c}
                    />
                ))}
            </div>

            <div className="stocks__header">
                <p>Lists</p>
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
        </div>
    )
}

export default Stocks
