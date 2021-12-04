const between = (value, lowerLimit, upperLimit) => {

    if (value >= lowerLimit && value <= upperLimit)
    {return true}

    else 
    {return false}
}

console.log(between(-1,1,10))