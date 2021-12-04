import { executeQuery } from "../database/database.js"

const create = async (name) => {

    await executeQuery("INSERT INTO projects (name) VALUES ($1)",
     name)
}

const findAllProjects = async () => {

    let result = await executeQuery(
        "SELECT * FROM projects"
    )
    
    console.log("Project service:   findAllProjects:")
    console.log(result.rows)

    return result.rows
}
 
const deleteProjectById = async (id) => {

    await executeQuery("DELETE FROM projects WHERE id = $1",
    id)

}
 
const findById = async (id) => {

    let result = await executeQuery("SELECT * FROM projects WHERE id = $1",
    id)

    if (result.rows && result.rows.length > 0) {
        return result.rows[0]
    }

    return { id: 0, name: "Unknown"}
}

export { findById, findAllProjects, create, deleteProjectById }