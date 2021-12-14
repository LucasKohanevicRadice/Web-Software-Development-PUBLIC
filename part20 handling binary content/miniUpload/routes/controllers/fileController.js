import * as fileService from "../../services/fileService.js"
import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.4/mod.ts";


const uploadFile = async ({request, response}) => {

    const body = request.body({type: "form-data"})
    
    const reader = await body.value 
 
    const data = await reader.read()

    const fileData = data.files[0] 
    // console.log(fileData)
    // console.log(fileData.filename)
    // console.log(fileData.contentType) 

    const fileName = fileData.filename
    const fileType = fileData.contentType

    const pw = `${Math.floor(100000 * Math.random())}`
    const hashedPw = await bcrypt.hash(pw)

    await fileService.uploadFile(fileName,fileType,hashedPw,fileData)

    response.body = pw 
}

const getFileData = async ({request, response}) => {

    const body = request.body({type: "form"})
    const params = await body.value

    const givenId = params.get("id")
    const givenPassword = params.get("password")

    const fileData = await fileService.getFileData(givenId)
    const filePassword = fileData[0].password

    if (await bcrypt.compare(givenPassword, filePassword) === true) { 
        response.body = fileData[0]
    }

    else {
        response.status = 401 
    }

}

export {
    uploadFile,
    getFileData 
}