import { FaHouse } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export const SidBar = () => {
  return (
    <div className='sideBar py-4 d-flex flex-column justify-content-between'>
        <ul className='  gap-4 p-0 m-0 d-flex justify-content-start align-items-center flex-column'>
            <li><FaHouse className="Active"  size={24}  color="#999899"/>
            </li>
            <li><IoChatbubbleEllipses size={24} color="#999899"  />
            </li>
            <li><MdGroups size={24}  color="#999899" />
            </li>
            <li><FaClipboardList size={24}  color="#999899" />
            </li>
            <li><FaBell size={24}  color="#999899" />
            </li>
        
        </ul>
        <div className="d-flex justify-content-center leaveIcon">
        <FaLongArrowAltRight size={19}  color="#999899"/>
<div className="leaveIconCircle"></div>
        </div>
    </div>
  )
}
