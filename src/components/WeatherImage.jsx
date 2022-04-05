import { getImgWeather } from "../util/getImgWeather";
const WeatherImage = ({data}) => {

    const {name, weather} = data;
    return(
        <div>
            <img src={weather?.[0].icon !== undefined && getImgWeather(weather?.[0].icon)} alt={name}/>
        </div>
    )
}
export default WeatherImage;