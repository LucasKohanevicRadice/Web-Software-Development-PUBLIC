import * as issueService from "../services/issueService.js"
import * as requestUtils from "../utils/requestUtil.js"

const responseDetails = {
   headers: {"Content-Type": "text/html;charset=UTF-8"}
}

 const addIssue = async (request) => {

    const url = new URL(request.url)
    const urlParts = url.pathname.split("/")

    const formData = await request.formData()

    const description = formData.get("description")
    const projectId = urlParts[2]


    await issueService.createIssue(projectId, description)

    return requestUtils.redirectTo(`/projects/${projectId}`)
 }

 const viewAllIssues = async (request) => {

   const data = {

      issues: await issueService.findAllIssues()

   }

   return new Response(await renderFile("singleProject.eta", data), responseDetails)

 }

 const deleteIssue = async (request) => {

   const url = new URL(request.url)
   const urlParts = url.pathname.split("/")
   const projectId = urlParts[2]
   const issueId = urlParts[4]

   await issueService.deleteIssueById(issueId)

   return requestUtils.redirectTo(`/projects/${projectId}`)
 }


 export { addIssue, viewAllIssues, deleteIssue }