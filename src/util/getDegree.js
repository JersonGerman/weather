const getDegree = (kelvin) =>{

    const celcius = kelvin - 273.15;

    const rounded =  Math.round((celcius + Number.EPSILON) * 100) / 100;
    
    return (rounded);
}

export default getDegree; 