const log = async (context, next) => {

    console.log(`${context.request.method} ${context.request.url.pathname}`)

    await next()
     
}

export { log }

// eli ilmeisesti context muuttuja pitää aina olla saatavilla, vaikka sitä ei suoranaisesti käyttäiskään.