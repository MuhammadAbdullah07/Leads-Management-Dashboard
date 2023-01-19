import nc from "next-connect"; 
import {getLeadsBYId,deleteLeadsBYId,updateLeads} from "../../../controller/leads/leads"


const handler = nc();
handler.get(getLeadsBYId);
handler.delete(deleteLeadsBYId);
handler.put(updateLeads);

export default handler;