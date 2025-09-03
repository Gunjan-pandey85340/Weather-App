import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons"; 


export default function WeatherApp () {
    const [weatherInfo , setWeatherInfo] = useState({
        city:"Mathura",
        feelslike: 24.84,
        temp: 25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign:"center" , color:"black" }}>
            
            <h2>
                <FontAwesomeIcon icon={faCloudSun} size="1x" style={{ marginRight: "10px", color: "orange"}}/>
                Weather App!</h2>
            <SearchBox updateInfo={ updateInfo }/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}