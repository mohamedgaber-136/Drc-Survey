import { Container } from "@mui/material";
import { FcSurvey } from "react-icons/fc";
import shapes from '../assets/images/shapes.png'
import { SurveyCard } from "./SurveyCard";
import TabsData from "./TabsData";
export const Header = () => {
  return (
    <div className="d-flex flex-column w-100">
    <div className="d-flex justify-content-between  w-100">
    <Container className="mainHeader">
      <h2 className="fw-bold mb-5">
        Check your daily <br /> feed today !{" "}
      </h2>
      <div className="border rounded rounded-4 d-flex justify-content-between align-items-center py-2 px-4">
        <div className="surveyContent">
          <h5>Click to Create</h5>
          <h3>
            <b>Add New Survey</b>
          </h3>
        </div>
        <div className="surveyLogo border d-flex justify-content-center align-items-center p-2 rounded">
          <FcSurvey size={35} />
        </div>
      </div>
    </Container>
    <div className="imgshape d-none d-md-block">
        <img src={shapes} width={'100%'} style={{objectFit:'cover !important'}}  alt="" />
    </div>
    </div>
    <Container>
        <TabsData/>
    </Container>
    </div>

  );
};
