import React,{useState} from 'react';
import styles from '../../styles/Home.module.css';
import Popup from '../components/Popup';
import { FaAlignJustify,FaUserAlt,FaWaveSquare,FaChartBar,FaBullhorn,
    FaRegLightbulb,FaUsers,FaWrench,FaToggleOff,FaRegPaperPlane }from "react-icons/fa";

    
function LeftNavbar() {
    const [show,setshow] = useState(false);
  return (
<div>    
<div className={styles.navcontainer}>
<div className={styles.wrapper}>
      <div className={styles.headericon}>
      <ul>
      <li><a href='#'onClick={()=> setshow(!show)}><FaAlignJustify 
      style={{width:"100px",cursor:"pointer"}}/></a></li>
      </ul>
      </div>

      <div className={styles.containericons}>
      <ul>
      <li><a href='#' onClick={()=> setshow(!show)}><FaUserAlt 
      style={{width:"100px",cursor:"pointer"}}/></a></li>
      <li><a href='#' onClick={()=> setshow(!show)}><FaWaveSquare
      style={{width:"100px",cursor:"pointer"}}/></a></li>
      <li><a href='#' onClick={()=> setshow(!show)}><FaChartBar 
      style={{width:"100px",cursor:"pointer"}}/></a></li>
      <li><a href='#'onClick={()=> setshow(!show)}><FaBullhorn
      style={{width:"100px",cursor:"pointer"}}/></a></li>
      <li><a href='#'onClick={()=> setshow(!show)}><FaRegPaperPlane
      style={{width:"100px",cursor:"pointer"}}/></a></li>
      <li><a href='#' onClick={()=> setshow(!show)}><FaUsers
      style={{width:"100px",cursor:"pointer"}}/></a></li>
      <li><a href='#'onClick={()=> setshow(!show)}><FaWrench
      style={{width:"100px",cursor:"pointer"}}/></a></li>
      </ul>
      </div>
      
      <div className={styles.modeicons}>
      <ul>
      <li><a href='#'><FaRegLightbulb
      style={{width:"100px",cursor:"pointer"}}/></a></li>
      <li><a href='#'><FaToggleOff
      style={{width:"100px",cursor:"pointer"}}/></a></li>
      </ul>                
      </div>
</div>
{/*-------------------------POPUP--------------------------------*/}
{
    show && <Popup/>
}
</div>
</div>
  )
}

export default LeftNavbar
