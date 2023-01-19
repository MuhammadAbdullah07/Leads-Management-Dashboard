import {useState} from 'react'
import styles from '../../styles/Home.module.css';
import { FaChevronDown,FaBars} from "react-icons/fa";
import { BiHide,BiSearchAlt2 } from "react-icons/bi";
import { TbFilterOff} from "react-icons/tb";
import { FiFilter } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import Addform from "../components/Addform";
import Updateform from "../components/Updateform";

function Content() {
  const [show,setshow] = useState(false);
  const [open,setopen] = useState(false);
  return (
    <div className={styles.contentcontainer}>
      <div className={styles.row1}>
        <div className={styles.row1left}>
        <h1>Leads</h1>
        </div>
        <div className={styles.row1right}>
        <a href="#"><span>All</span><span className={styles.badge}>100</span></a>
        <a href="#"><span>New</span><span className={styles.badge}>22</span></a>
        <a href="#"><span>Scheduled</span><span className={styles.badge}>09</span></a>
        <a href="#"><span>Progress</span><span className={styles.badge}>16</span></a>
        <a href="#"><span>Estimated</span><span className={styles.badge}>40</span></a>
        <a href="#"><span>Approved</span><span className={styles.badge}>35</span></a>
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.row2left}>
        <button className={styles.leadbtn} onClick={()=> setshow(!show)}>New Lead      <FaChevronDown/></button>
        <button className={styles.button}><BiHide/>          Hide</button>
        <button className={styles.button}>Group</button>
        <button className={styles.button}><TbFilterOff style={{width:"20px", cursor:"pointer"}}/></button>
        </div>
        <div className={styles.row2right}>
        <button className={styles.button}><FaBars/>          Manage Column</button>
        <button className={styles.button}>Excel Export</button>
        </div>
      </div>
      {
        show && <Addform/>
      }
      {
        open && <Updateform/>
      }
    
      <div className={styles.row3}>
        <table className={styles.table}> 
          <thead>
          <tr>
            <th>LEAD NAME  <FiFilter/></th>
            <th>PHONE   <FiFilter/></th>
            <th>EMAIL   <FiFilter/></th>
            <th>ASSIGNED   <FiFilter/></th>
            <th>STATUS   <FiFilter/></th>
            <th>SOURCE   <FiFilter/></th>
            <th>LOCATION   <FiFilter/></th>
            <th><BiSearchAlt2/></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Sheldon Cooper</td>
            <td>2563478523</td>
            <td>sheldon@gmail.com</td>
            <td>Sydney Presscot</td>
            <td className={styles.accepted}>Accepted</td>
            <td>Website</td>
            <td>Pasadena,LA</td>
            <td><MdOutlineModeEditOutline onClick={()=> setopen(!open)} style={{cursor:"pointer"}}></MdOutlineModeEditOutline>   <RiDeleteBin5Line/></td>
          </tr>
          <br></br>
          <tr>
            <td>Howard Wolowitz</td>
            <td>7531684269</td>
            <td>howard@gmail.com</td>
            <td>Bella Porch</td>
            <td className={styles.denied}>Denied</td>
            <td>Facebook</td>
            <td>Pasadena,LA</td>
            <td><MdOutlineModeEditOutline/>   <RiDeleteBin5Line/></td>
          </tr>
          <br></br>
          <tr>
            <td>Rajesh Koothrapauli</td>
            <td>6531684265</td>
            <td>raj@gmail.com</td>
            <td>Sam Winchester</td>
            <td className={styles.accepted}>Accepted</td>
            <td>Yelp</td>
            <td>Pasadena,LA</td>
            <td><MdOutlineModeEditOutline/>   <RiDeleteBin5Line/></td>
          </tr>
          <br></br>
          <tr>
            <td>Penny Hofstader</td>
            <td>75345684269</td>
            <td>penny@gmail.com</td>
            <td>Lisa Schwapp</td>
            <td className={styles.connected}>Connected</td>
            <td>Voice Call</td>
            <td>Pasadena,LA</td>
            <td><MdOutlineModeEditOutline/>   <RiDeleteBin5Line/></td>
          </tr>
          <br></br>
          <tr>
            <td>Amy Schwartz</td>
            <td>3531684260</td>
            <td>amy@gmail.com</td>
            <td>Lisa Schwapp</td>
            <td className={styles.pending}>Pending</td>
            <td>Facebook</td>
            <td>Pasadena,LA</td>
            <td><MdOutlineModeEditOutline/>   <RiDeleteBin5Line/></td>
          </tr>
          <br></br>
          <tr>
            <td>Regina Falangi</td>
            <td>8531684266</td>
            <td>falagni@gmail.com</td>
            <td>Sam Winchester</td>
            <td className={styles.connected}>Connected</td>
            <td>Website</td>
            <td>Pasadena,LA</td>
            <td><MdOutlineModeEditOutline/>   <RiDeleteBin5Line/></td>
          </tr>
          <br></br>
          <tr>
          <td>Sheldon Cooper</td>
          <td>2563478523</td>
          <td>sheldon@gmail.com</td>
          <td>Sydney Presscot</td>
          <td className={styles.accepted}>Accepted</td>
          <td>Website</td>
          <td>Pasadena,LA</td>
          <td><MdOutlineModeEditOutline/>   <RiDeleteBin5Line/></td>
          </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Content
