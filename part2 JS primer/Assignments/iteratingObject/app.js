const logObject = (object) => {

    for (const [key, value] of Object.entries(object)) {
        console.log(`${key} -> ${value}`)
    }
}

const obi = {
    name: "Obi wan kenobi",
    star: "jupiter",

}

logObject(obi)