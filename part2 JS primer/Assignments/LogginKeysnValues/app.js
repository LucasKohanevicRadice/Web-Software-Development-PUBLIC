const logMap = (map) => {

    map.forEach((value, key) => {
        console.log(`${key}: ${value}`)
    })
}

const kartta = new Map()

kartta.set("one","1")
kartta.set("two","2")
kartta.set("three","3")

logMap(kartta)