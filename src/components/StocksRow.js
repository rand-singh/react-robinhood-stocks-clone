import React from 'react'

function StocksRow({ name, openPrice, price, shares }) {
    const percentage = ((price - openPrice) / openPrice) * 100

    return (
        <div className="stock">
            <div className="stock__intro">
                <p className="stock__name">{name}</p>
                <p className="stock__count">{shares ? (shares + " Shares") : '0 Shares' }</p>
            </div>
            <div className="stock__numbers">
                <p className="stock__price">${price}</p>
                <p className={`stock__percentage ${Math.sign(percentage) < 0 ? 'red' : ''}`}>  {Number(percentage).toFixed(2)}%</p>
            </div>
        </div>
    )
}

export default StocksRow
