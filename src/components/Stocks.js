import React, { useState, useEffect } from 'react'
import TOKEN from '../config.json'

const BASE_URL = "https://finnhub.io/api/v1/quote"

function Stocks() {
    const [stockData, setStockData] = useState([])

    useEffect(() => {
        


        return () => {
            // cleanup
        }
    }, [])

    return (
        <div className="stocks">
            <div className="stocks__header">
                <p>Stocks</p>
            </div>
            <div className="stocks__list">
                {/* current stocks */}
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
