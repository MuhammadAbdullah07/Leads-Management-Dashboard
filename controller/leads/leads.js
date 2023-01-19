import {executeQuery} from "../../config/db";

const getAllLeads = async (req,res) => {
   try {
    let leaddata=await executeQuery("SELECT * FROM leads",[]);
    res.send("leaddata");
   } catch (err) {
    res.status(500).json(err);
   }
};
const getLeadsBYId = async (req,res) => {
    let id=req.query.id;
    try {
        let leaddata=await executeQuery("SELECT * FROM leads where PersonID=$[Id]",[]);
        res.send("leaddata");
    } catch (err) {
     res.status(500).json(err);
    }
 };
const deleteLeadsBYId = async (req,res) => {
    let id=req.query.id;
    try {
        let leaddata=await executeQuery("DELETE FROM leads where PersonID=?",[id]);
        res.status.json(leaddata);
    } catch (err) {
     res.status(500).json(err);
    }
 };
 const saveLeads = async (req,res) =>{
    let PersonId = req.query,id;
    let LeadName = req.body.LeadName;
    let Phone = req.body.Phone;
    let Email = req.body.Email;
    let Assigned = req.body.Assigned;
    let Statuss = req.body.Statuss;
    let Sourcess = req.body.Sourcess;
    let Locations = req.body.Locations;
    try {
        let leaddata=await executeQuery("INSERT INTO Leads(LeadName, Phone, Email, Assigned,Statuss,Sources,Locations) values(?,?,?,?)",[PersonID,LeadName,Phone,Email,Assigned,Statuss,Sourcess,Locations]);
        res.status.json(leaddata);
    } catch (err) {
     res.status(500).json(err);
    }
 }
 const updateLeads = async (req,res) =>{
    let PersonId = req.query,id;
    let LeadName = req.body.LeadName;
    let Phone = req.body.Phone;
    let Email = req.body.Email;
    let Assigned = req.body.Assigned;
    let Statuss = req.body.Statuss;
    let Sourcess = req.body.Sourcess;
    let Locations = req.body.Locations;
    try {
        let leaddata=await executeQuery("SELECT * FROM leads where PersonID=$[Id]",[LeadName,Phone,Email,Assigned,Statuss,Sourcess,Locations]);
        console.log(leaddata.length);
        if(leaddata>0){
            leaddata = await executeQuery("update leads set LeadName=?,Phone=?,Email=?,Assigned=?,Statuss=?,Sourcess=?,Locations=? where PersonID=?",[id]);
            res.status.json(leaddata);
        }else {
            res.status.json('lead not found')
        }
    } catch (err) {
     res.status(500).json(err);
    }
 }
export {getAllLeads,getLeadsBYId,deleteLeadsBYId,saveLeads,updateLeads};
