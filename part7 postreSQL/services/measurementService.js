import { Client } from "https://deno.land/x/postgres@v0.13.0/mod.ts";


const client = new Client({
    hostname: "hattie.db.elephantsql.com",
    database: "rtspbeet",
    user: "rtspbeet",
    password: "rCzJH5y1ZwfEPr6rOZ_3dsJxbBnjVroB",
    port: 5432
})



const measurementSum = async () => {

    await client.connect()
    const measurements = await client.queryObject("SELECT measurement FROM measurements WHERE measurement > 0 AND measurement < 1000")
    await client.end()

    let sum = 0

    measurements.rows.forEach((measurement => {
        sum += measurement.measurement
    }))
        

    return sum
}

const measurementCount = async () => {

    await client.connect()
    const measurements = await client.queryObject("SELECT COUNT(measurement) FROM measurements WHERE measurement > 0 AND measurement < 1000")
    await client.end()

    let count = 0

    count = measurements.rows.length + 1

    return count
}

const measurementsAverage = async () => {

    const sum = await measurementSum()
    const count = await measurementCount()

    if (count < 2) {
        return null
    }

    else {
        const average = sum/count
        return average
    }
}

export {
    measurementSum,
    measurementCount,
    measurementsAverage
}

