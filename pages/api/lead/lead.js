import nc from "next-connect"; 
import {getAllLeads,saveLeads} from "../../../controller/leads/leads"


const handler = nc();
handler.get(getAllLeads);
handler.post(saveLeads);


export default handler;