import React from 'react'
import './style.css'

const Temp = () => {
    return (
        <>
            {/* search input field */}
            <div className="wrap">
                <div className="search">
                    <input 
                        type="search"
                        placeholder="search..."
                        autoFocus
                        id="search"
                        className="searchTerm"
                    />
                    <button 
                        className="searchButton" 
                        type="button">
                        Search
                        </button>
                </div>
            </div>

            {/* temp card */}
            <article className="widget">
                <div className="weatherIcon">
                    <i className={"wi wi-day-sunny"}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span style={{fontSize:30}}>25.5&#176;deg</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">sunny</div>
                        <div className="place">Delhi, India</div>
                    </div>
                </div>

                <div className="date">{new Date().toLocaleString()}</div>
                
                {/* 4 column section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                19:19 PM <br/>
                                Sunset
                            </p>
                        </div>
                        
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                19:19 PM <br/>
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                19:19 PM <br/>
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                19:19 PM <br/>
                                Sunset
                            </p>
                        </div>

                    </div>
                </div>
            </article>
        </>
    )
}

export default Temp

// api.openweathermap.org/data/2.5/weather?q=delhi&appid=751b74da5d70959c37a08c2677bb0a94