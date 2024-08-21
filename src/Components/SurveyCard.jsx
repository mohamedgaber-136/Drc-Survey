import { RiArrowDropUpLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import img from "../assets/images/image-avatar.png";

export const SurveyCard = ({state}) => {
  return (
    <div className='SurveyCard border rounded-4 rounded  p-3'>
        <div className="title d-flex gap-2 justify-content-between align-items-center">
            <div className="titleContent d-flex  flex-column">
            <b>Survey Title</b>
            <small className='text-secondary'>Dalma grand mall</small>
            </div>
            <div className="state d-flex justify-content-center ">
                <div className={`border d-flex px-1 py-2 rounded-pill ${state=='On Going'?'bg-onGoing':'bg-Pending'}`}>
                <small>{state}</small>
                </div>
                <button className="px-3 bg-transparent border-0"><span className=" bg-body-tertiary rounded">
                <RiArrowDropUpLine size={24}/></span></button>
            </div>
        </div>
        <div className="description my-2 d-flex flex-column">
            <h6 className="text-secondary m-0">
                desription
            </h6>
            <small className="text-secondary fw-lighter">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, suscipit!</small>
            <div className="d-flex gap-2 align-items-center my-2">
                <FaRegUser/>
                <small className="text-secondary" >Taghreed Users</small>
            </div>
            <div className="percentage d-flex flex-column gap-2">
                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-secondary">Government Employess</small>
                    <small className="text-secondary">10%</small>
                    <small className="text-secondary">Males</small>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-secondary">Private Sector Employess</small>
                    <small className="text-secondary">80%</small>
                    <small className="text-secondary">females</small>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-secondary">55+  Sector  Employess</small>
                    <small className="text-secondary">20%</small>
                    <small className="text-secondary">both</small>
                </div>
            </div>
            <div className="SendTo d-flex gap-2 flex-column my-2">
                <b>Sent to</b>
                <div className="d-flex gap-2 align-items-center">
                    <img src={img} width={'35px'} alt="" />
                    <small className="text-secondary">
                        khaled saied
                    </small>
                </div>
                <div className="d-flex gap-2 align-items-center">
                    <img src={img} width={'35px'} alt="" />
                    <small className="text-secondary">
                        khaled saied
                    </small>
                </div>
            </div>
        </div>
        <div className="buttons w-100 d-flex gap-2 gap-md-0 justify-content-around">
            <button className="text-white p-2  rounded-4 rounded border-0" style={{backgroundColor:'#6ebbdb'}}>
                <small>Details</small>
            </button>
            <button className="text-white p-2 rounded-4 rounded  border-0" style={{backgroundColor:'#015095'}}>
                <small>Edit Survey Information</small>
            </button>
        </div>
    </div>
  )
}
