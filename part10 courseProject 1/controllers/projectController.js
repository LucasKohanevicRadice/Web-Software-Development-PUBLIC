import {renderFile} from "https://deno.land/x/eta@v1.12.3/mod.ts"
import * as projectService from "../services/projectService.js"
import * as issueService from "../services/issueService.js"
import * as requestUtils from "../utils/requestUtil.js"

const responseDetails = {
    headers: {"Content-Type": "text/html;charset=UTF-8"}
}

const addProject = async (request) => {

    const formData = await request.formData()
    const name = formData.get("name")

    await projectService.create(name)

    return requestUtils.redirectTo("/")
}

const deleteProject = async (request) => {

    const url = new URL(request.url)
    const urlParts = url.pathname.split("/")
    const projectId = urlParts[2]


    await issueService.deleteAllIssuesByProjectId(projectId)
    await projectService.deleteProjectById(projectId)

    return await requestUtils.redirectTo("/")

}

const viewSingleProject = async (request) => {

    const url = new URL(request.url) // ok
    const urlParts = url.pathname.split("/") // ok
    const projectId = urlParts[2] // ok
    // console.log(typeof(urlParts[2]))
    // console.log(typeof(projectId))
    // console.log(projectId)


    const data = {
        project: await projectService.findById(projectId), // ok, löytää projektin id:n perusteella
        issues: await issueService.findAllIssuesById(projectId), // pitäs olla ok

    }

    return new Response(await renderFile("singleProject.eta", data), responseDetails) // ok
}
 
const viewAllProjects = async (request) => {

    const data = {
        projects: await projectService.findAllProjects(),
    }

    return new Response(await renderFile("allProjects.eta", data), responseDetails)
}


export { viewSingleProject, viewAllProjects, addProject, deleteProject }