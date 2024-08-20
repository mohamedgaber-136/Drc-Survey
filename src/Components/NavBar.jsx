import { Avatar, TextField } from "@mui/material";
import logo from "../assets/images/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import img from "../assets/images/image-avatar.png";
import ProfileDropDown from "./ProfileDropDown";
export const NavBar = () => {
  return (
    <div className="ProfileData  d-flex justify-content-between px-5 align-items-center">
      <div className="logo">
        <img
          src={logo}
          alt="logo"
          width={"130px"}
          style={{ objectFit: "cover !important" }}
        />
      </div>
      <div className="profileData d-flex gap-4 align-items-center">
        <div className="Langs d-flex  ">
          <div className="tel pe-3 me-3 d-flex gap-2 align-items-center justify-content-center ">
            <FaPhoneAlt size={18} />
          </div>
          <div className="lang  d-flex gap-2 justify-content-center align-items-center">
            <TfiWorld size={18} />
            <span>EN</span>
          </div>
        </div>
        <TextField
          id="outlined-basic"
          label="Search a Survey"
          variant="outlined"
        />
        <div className="avatars d-none    gap-2 d-md-flex align-items-center ">
          <div className="AvatarImg shadow rounded-circle">
            <img src={img} width={"50px"} height={"50px"} alt="" />
          </div>
          <div className="data d-flex flex-column ">
            <b>M.KHALED SAIED</b>
            <small>show profile</small>
          </div>
        </div>
        <div className="d-flex d-md-none">
          <ProfileDropDown/>
        </div>
      </div>
    </div>
  );
};
