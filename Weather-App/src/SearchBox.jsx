import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "71a4d66a45dca00eb7eba1c448d68dd2";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error("City not found");
        }

        let jsonResponse = await response.json();

        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };

        return result;
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            setError(false);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch (err) {
            console.error("Error fetching weather:", err);
            setError(true);
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange} 
                />
                <br /> <br />
                <Button variant="contained" type="submit">Search</Button>
                <br /> <br />
                {error && <p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    );
}
