import React from 'react'
import LineGraph from './LineGraph'

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
                </div>
            </div>
        </div>
    )
}

export default Feed
