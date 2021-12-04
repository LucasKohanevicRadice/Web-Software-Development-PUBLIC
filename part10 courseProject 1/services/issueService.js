import { executeQuery } from "../database/database.js"

const createIssue = async (project_id, description) => {


    await executeQuery("INSERT INTO project_issues (project_id, description) VALUES ($1, $2)",
        project_id,
        description)

}

const findAllIssuesById = async (projectId) => {

    let result = await executeQuery("SELECT * FROM project_issues WHERE project_id = $1",
     projectId)

     if (result.rows && result.rows.length > 0) {
        //  console.log(result.rows[0])
        //  console.log(result.rows)
         return result.rows
     }

     return false
}

const findAllIssues = async () => {

    let result = await executeQuery(
        "SELECT * from project_issues"
    )

    return result.rows
}

const deleteIssueById = async (id) => {

    await executeQuery("DELETE FROM project_issues WHERE id = $1",
    id)

}

const deleteAllIssuesByProjectId = async (projectId) => {

    await executeQuery("DELETE FROM project_issues WHERE project_id = $1",
    projectId)

}





export { createIssue, findAllIssuesById, findAllIssues, deleteIssueById, deleteAllIssuesByProjectId }
