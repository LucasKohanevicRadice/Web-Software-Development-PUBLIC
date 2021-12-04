import { listenAndServe } from "https://deno.land/std@0.113.0/http/server.ts";
import { configure } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as requestUtils from "./utils/requestUtil.js"
import * as projectController from "./controllers/projectController.js"
import * as issueController from "./controllers/issueController.js"



// deno run --allow-all --watch --unstable app.js

configure({
    views: `${Deno.cwd()}/views/`,
})


const handleRequest = async (request) => {

    const url = new URL(request.url)

    if (url.pathname === "/" && request.method === "GET") {

        return requestUtils.redirectTo("/projects") // toimii
    }

    else if (url.pathname === "/projects" && request.method === "POST") {

        return await projectController.addProject(request) 

    }

    else if (url.pathname === "/projects" && request.method === "GET") {

        return await projectController.viewAllProjects(request) // toimii

    }

    else if (url.pathname.match("projects/[0-9]+") && request.method === "GET") {
        return await projectController.viewSingleProject(request)
    }

    else if (url.pathname.match("projects/[0-9]+/issues/[0-9]+") && request.method === "POST") {
        return await issueController.deleteIssue(request)
    }

    else if (url.pathname.match("projects/[0-9]+/issues") && request.method === "POST") {
        return await issueController.addIssue(request)
    }

    else if (url.pathname.match("projects/[0-9]+") && request.method === "POST") {
        return await projectController.deleteProject(request)
    }

    else {
        return requestUtils.redirectTo("/") // toimii
    }


}

listenAndServe(":7777", handleRequest) // pakko olla ok, localhost avautuu kuitenki



