import React from 'react';

const Result = props => {

    const { date, city, sunrise, day, sunset, temp, pressure, wind, err } = props.weather;
    let content = null;
    if (!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        content = (
            <div>
                <h3>Wyszukiwanie dla miasta {city}:</h3>
                <h4>Dzien  {day} </h4>
                <h4>Godzina {date} </h4>
                <h4>Temperatura: {temp} &#x2103;</h4>
                <h4>Wschód słońca {sunriseTime}</h4>
                <h4>Zachod słońca{sunsetTime}</h4>
                <h4>Cisnienie {pressure} hPa</h4>
                <h4>Wiatr {wind} km/h</h4>
            </div>
        )
    }
    return (
        <div className="result">
            {err ? "Takie miasto nie istnieje" : content}
        </div>

    );
}

export default Result;