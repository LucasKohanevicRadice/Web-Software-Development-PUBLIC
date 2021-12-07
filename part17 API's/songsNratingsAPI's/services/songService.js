import { executeQuery } from "../database/database.js"

const findAllSongsAndRatings = async () => {

    const songs = await executeQuery("SELECT * from songs")

    if (songs) {
        return songs.rows
    }

    return []
}

const findSongWithId = async (songId) => {

    const song = await executeQuery("SELECT * from songs WHERE id = $1",
    songId)

    if (song) {
        return song.rows
    }

    return []

}

const addSong = async (songName, songRating) => {

    await executeQuery("INSERT INTO songs (name,rating) VALUES ($1,$2)",
    songName,
    songRating)
    

}

const deleteSong = async (songId) => {

    await executeQuery("DELETE FROM songs WHERE id = $1",
    songId)
}


export { 
    findAllSongsAndRatings,
    findSongWithId,
    addSong,
    deleteSong,

}