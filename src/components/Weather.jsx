import useFetch from "../hooks/useFetch";
import WeatherImage from "./WeatherImage";
const Weather = ()=>{
    const {
        weather,
        isLoading,
        changeDegree,
        setChangeDegree,
        isDegree,
        setIsDegree,
    } = useFetch();
    const handleDegree = () =>{
        if(isDegree){
            setIsDegree(!isDegree);
            setChangeDegree(((changeDegree*1.8)+32).toFixed(2));
        }else{
            setIsDegree(!isDegree);
            setChangeDegree(((changeDegree-32)/1.8).toFixed(2));
        }
    }
    return(
        <>
            {   
            isLoading ?
                <div className="loader"></div>

            : (
                <div className="card">
                    <h2 className="disableBlur">Weather App</h2>
                    <h5>{weather.name}, {weather.sys?.country}</h5>
                    <div className="description">
                        <div className="img">
                            <WeatherImage data={weather} />
                            <span>{changeDegree} {isDegree?'°C':'°F'}</span>
                        </div>
                        <div className="details">
                            <h4>{weather.weather?.[0].description}</h4>
                            <ul>
                                <li>
                                    <i className="fas fa-wind"></i>
                                    Wind speed {weather.wind?.speed}<span> m/s</span> 
                                </li>
                                <li>
                                    <img src={`https://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="imagen" />
                                    Clouds: {weather.clouds?.all}<span>%</span>
                                </li>
                                <li>
                                    <i className="fas fa-thermometer-half"></i>
                                    Pressure: {weather.main?.pressure}<span>hPa</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="btn">
                        <button onClick={handleDegree}>Degrees °F / °C </button>    
                    </div>
                </div>
            )
        }
        
        </>
    )
}
export default Weather;