const logKeys = (map) => {

    map.forEach((value, key) => {
        console.log(key)
        
    });

}

const kartta = new Map()

kartta.set("one","1")
kartta.set("two","2")
kartta.set("three","3")

logKeys(kartta)
export default logKeys