import SearchDox from "./SearchDox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({ 
        city: "Wonderland",     
    feelslike: 17.56,
    temp: 18.05,
    tempMin: 18.05,
    tempMax: 18.05,
    humidity: 63,
    weather: "haze" 
});

let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
}
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App </h2>
            <SearchDox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}