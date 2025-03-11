import SearchBox from "./SearchBox";
import InfoResult from './InfoResult';
import { useState } from "react";
function Weather() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Jaipur",
        country: "IN",
        description: "mist",
        feelsLike: 16.35,
        humidity: 77,
        temp: 16.62,
        weather: "haze",
        tempMax: 16.62,
        tempMin: 16.62,
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h2>Weather App by Ashish</h2>
                <SearchBox updateInfo={updateInfo} />
                <InfoResult info={weatherInfo} />
            </div>
        </>
    );
}

export default Weather;