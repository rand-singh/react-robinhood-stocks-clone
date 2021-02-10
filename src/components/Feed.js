import React from 'react'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'

function Feed() {
    return (
        <div className="feed">
            <div className="feed__chartSection">
                <div className="feed__portfolio">
                    <h1>£114,657.89</h1>
                    <p>+£138 (+0.7%) Today</p>
                </div>
                <div className="feed__chart">
                    <LineGraph />
                    <TimeLine />
                </div>
            </div>
            <div className="feed__buying__section">
                <h2>Buying Power</h2>
                <h2>$427.11</h2>
            </div>
        </div>
    )
}

export default Feed
