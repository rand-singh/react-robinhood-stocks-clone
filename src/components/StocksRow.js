import React from 'react'
import { db } from '../firebase'

function StocksRow({ name, openPrice, shares, price }) {
    const percentage = ((price - openPrice) / openPrice) * 100

    const buyStock = () => {
        db.collection('myStocks')
        .where("ticker", "==", name)
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                // update stock record
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data())
                    
                    db.collection('myStocks')
                    .doc(doc.id)
                    .update({
                        shares: doc.data().shares += 1                        
                    })
                })
            } else {
                console.log('you dont own this stock yet')
                db.collection('myStocks')
                .add({
                    ticker: name,
                    shares: 1
                })
            }

        })
    }

    return (
        <div className="stock" onClick={buyStock}>
            <div className="stock__intro">
                <p className="stock__name">{name}</p>
                <p className="stock__count">{shares ? (shares + " Shares") : '' }</p>
            </div>
            <div className="stock__numbers">
                <p className="stock__price">${price.toFixed(2)}</p>
                <p className={`stock__percentage ${Math.sign(percentage) < 0 ? 'red' : ''}`}>  {Number(percentage).toFixed(2)}%</p>
            </div>
        </div>
    )
}

export default StocksRow
