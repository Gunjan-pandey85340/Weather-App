import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useState } from 'react';


export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"; // direct image link
    
    const HOT_URL = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1671127303910-754ac2224c7a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1509635022432-0220ac12960b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return (
       
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={
                    typeof info.humidity === "number" && typeof info.temp === "number"
                     ? (info.humidity > 80 
                    ? RAIN_URL
                    : (info.temp > 15 ) 
                    ? HOT_URL 
                    : COLD_URL)
                    :INIT_URL
                }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {
                    info.humidity > 80
                    ? <ThunderstormIcon />
                    : info.temp > 15
                    ? <WbSunnyIcon />
                    : <AcUnitIcon />
                }
                
                
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp ={info.tempMin}</p>
                <p>Max Temp = {info.tempMax}</p>
                <p>The wather is described as <i>{info.weather}</i>  feels like {info.feelslike}&deg;C</p>
                </Typography>
            </CardContent>
            
            </Card>
            </div>
        </div>
    )
}