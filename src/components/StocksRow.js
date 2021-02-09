import React from 'react'

function StocksRow({ name, openPrice, price }) {    
    return (
        <div className="stock">
            <div className="stock__intro">
                <p className="stock__name">{name}</p>
                <p className="stock__count">200 Shares</p>
            </div>
            <div className="stock__numbers">
                <p className="stock__price">${price}</p>
                <p className="stock__percentage">+86%</p>
            </div>
        </div>
    )
}

export default StocksRow
