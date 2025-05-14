import React, { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Jamui",
        feelsLike: 34.91,
        humidity: 26,
        temp: 35.75,
        tempMax: 35.75,
        tempMin: 35.75,
        weather: "broken clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by : Sadanand Kumar</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={WeatherInfo} />
        </div>
    );
}
