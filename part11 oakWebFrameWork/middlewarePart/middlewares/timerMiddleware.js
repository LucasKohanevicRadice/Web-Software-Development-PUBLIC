const time = async ({response}, next) => {

    const start = Date.now()
    await next()
    const ms = Date.now() - start

    response.body = response.body + ` ${ms}ms`

    console.log(response.body)

}

export { time }