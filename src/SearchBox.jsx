
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    //?q={city name}&limit={limit}&appid={API key},{state code},{country code}
    //let API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    let API_URL = "http://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "5453c58138d813aa22d8e226c592228a";
    //let WEATHER_API="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                description: jsonResponse.weather[0].description,
                feelsLike: jsonResponse.main.feels_like,
                country: jsonResponse.sys.country,
            }
          //  console.log(result);
            setError(false);
            return result;
        } catch(err ){
            throw err
        }

    }

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let handleChange = (event) => {
        setCity(() => {
            return event.target.value;
        })
    }

    let handlSubmit = async (event) => {
        try{
            event.preventDefault();
            //console.log(city)
            let newInfo = await getWeatherInfo();
           // console.log("ok sunmit")
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        
    }

    return (
        <div className='searchBox'>
            <form action="" onSubmit={handlSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /> <br />
                <Button variant="contained" color="success" size="small" type="submit" >
                    Search
                </Button>
                {
                    error&&<p style={{color :"red"}}>No Data have in my API</p>
                }
            </form>
        </div>
    )
}