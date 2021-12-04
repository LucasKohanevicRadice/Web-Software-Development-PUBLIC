import { executeQuery } from "../database/database.js";

const add = async (content) => {
  await executeQuery("INSERT INTO tickets (content, reported_on) VALUES ($1, NOW());",
   content);
}

const findAll = async () => {
   const result = await executeQuery("SELECT * FROM tickets ORDER BY id ASC;");
    if (result) {
        return result.rows;
    }

    return [];
};

const resolve = async (id) => {

    await executeQuery("UPDATE tickets SET resolved_on = NOW() WHERE id = $1",
    id)

}

const deleteTicket = async (id) => {

    await executeQuery("DELETE FROM tickets WHERE id = $1",
     id)
}

export { add, findAll, resolve, deleteTicket }; 
