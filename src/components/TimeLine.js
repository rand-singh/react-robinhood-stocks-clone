import React from 'react'

function TimeLine() {
    return (
        <div className="timeline__container">
            <div className="timeline__buttons__container">
                <div className="timeline__button">Live</div>
                <div className="timeline__button">1D</div>
                <div className="timeline__button active">1W</div>
                <div className="timeline__button">3M</div>
                <div className="timeline__button">1Y</div>
                <div className="timeline__button">ALL</div>
            </div>
        </div>
    )
}

export default TimeLine
