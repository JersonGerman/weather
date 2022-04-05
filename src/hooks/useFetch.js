import { useEffect, useState } from "react"
import axios from 'axios';
// import getDegree from '../util/getDegree';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/weather';

const useFetch = () =>{

    const [weather, setWeather] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [changeDegree, setChangeDegree] = useState(0);
    const [isDegree, setIsDegree] = useState(true);
    const [permitted, setPermitted] = useState(true);


    useEffect(() => {
        const success = (position) => {
            // axios.get(`?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=2871661da6c8e2815b72d9f49da7f1f6&lang=en`)
            axios.get(`?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=2871661da6c8e2815b72d9f49da7f1f6&lang=en&units=metric`)
                .then(res => {
                    setWeather(res.data);
                    // setChangeDegree(getDegree(res.data.main?.temp));
                    setChangeDegree(res.data.main?.temp);
                    // setPermitted(true)
                    setIsLoading(false);

                })
                .catch(err => console.log(err)); 
        }

        const error = (err) => { setPermitted(false)}
        navigator.geolocation.getCurrentPosition(success,error);

    },[]);
  
    return{
        weather,
        isLoading,
        setIsLoading,
        changeDegree,
        setChangeDegree,
        isDegree,
        setIsDegree,
        permitted
    }
}
export default useFetch;