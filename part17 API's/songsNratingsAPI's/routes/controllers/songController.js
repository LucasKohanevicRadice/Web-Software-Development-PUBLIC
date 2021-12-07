import * as songService from "../../services/songService.js"

const getSongs = async ({response}) => {

    const songs = await songService.findAllSongsAndRatings()

    const songsJson = { songs }

    console.log(typeof(songs))
    console.log(typeof(songsJson))

    response.body = songs

}

const getSingleSong = async ({params, response}) => {

    const songId = params.id

    const song = await songService.findSongWithId(songId)

    const constJson = { song }

    response.body = constJson
   
}


const postSong = async ({response}) => {

    await songService.addSong("APItest", 5)

    response.body = {"status": "success"}
}

const deleteSong = async ({response, params}) => {

    const songId = params.id

    await songService.deleteSong(songId)

    response.body = {"status": "success"}
}

export {
    getSongs,
    getSingleSong,
    postSong,
    deleteSong
}