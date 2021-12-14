import { executeQuery } from "../database/database.js";

const lastUploadedId = async () => {
  const res = await executeQuery(
    "SELECT MAX(id) as max_id FROM miniupload_files;",
  );
  if (res && res.rows && res.rows.length == 1) {
    return res.rows[0].max_id;
  } else {
    return -1;
  }
};

const uploadFile = async (name, type, password, data) => {

  await executeQuery("INSERT INTO miniupload_files (name, type, password, data) VALUES ($1, $2, $3, $4)",
  name, type, password, data)

}

const getFileData = async (id) => {

  const fileData = await executeQuery("SELECT * FROM miniupload_files WHERE id = $1",
  id)

  return fileData.rows
}
 
export { 
  lastUploadedId,
  uploadFile,
  getFileData

 };
