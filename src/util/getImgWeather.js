import {
    nube,sol,solnube,nubedark,nubefrezze,nubelluvia,lluvias,neblina,lluviastorm,noche,noches
}  from "../assets";


export const getImgWeather = (type) => {
    switch(type){
        case '01d':
            return sol;
        case '01n':
            return noche;
        case '02d':
            return solnube;
        case '02n':
            return noches;
        case '03d':
            return nube;
        case '03n':
            return nube;
        case '04d':
            return nubedark;
        case '04n':
            return nubedark;
        case '09d':
            return nubelluvia;
        case '09n':
            return nubelluvia;
        case '10d':
            return lluvias;
        case '10n':
            return lluvias;
        case '11d': 
            return lluviastorm;
        case '11n':
            return lluviastorm;
        case '13d':
            return nubefrezze;
        case '13n':
            return nubefrezze;
        case '50d':
            return neblina;
        case '50n':
            return neblina;
        default:
            return sol;
    }
}