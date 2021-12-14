import * as fileService from "../../services/fileService.js"
import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.4/mod.ts";
import * as base64 from "https://deno.land/x/base64@v0.2.1/mod.ts";


const uploadFile = async ({request, response}) => {

    const body = request.body({type: "form-data"})
    
    const reader = await body.value 
 
    const data = await reader.read()

    const fileData = data.files[0] 
    const fileContents = await Deno.readAll(await Deno.open(fileData.filename))

    const base64Encoded = base64.fromUint8Array(fileContents)
    const fileName = fileData.filename
    const fileType = fileData.contentType

    const pw = `${Math.floor(100000 * Math.random())}`
    const hashedPw = await bcrypt.hash(pw)

    await fileService.uploadFile(fileName,fileType,hashedPw,base64Encoded)

    response.body = pw 
}

const getFileData = async ({request, response}) => {

    const body = request.body({type: "form"})
    const params = await body.value

    const givenId = params.get("id")
    const givenPassword = params.get("password")

    const fileData = await fileService.getFileData(givenId)

    if (fileData.length === 0) {
        response.status = 401
    }

    const fileObj = fileData[0]
    const fileHash = fileData[0].password
 
    const passwordVerification = (await bcrypt.compare(givenPassword, fileHash))
    console.log(passwordVerification)


    if (passwordVerification === true) { 

        const fileArr = base64.toUint8Array(fileObj.data)
        response.headers.set('Content-Type', fileObj.type)
        response.headers.set('Content-length', fileArr.length)
        response.body = fileArr
    }

    else {
        response.status = 401 
    }

}

export {
    uploadFile,
    getFileData 
}