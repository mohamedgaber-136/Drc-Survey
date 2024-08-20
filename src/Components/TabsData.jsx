import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { SurveyCard } from "./SurveyCard";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsData() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className="border-bottom" label="All" {...a11yProps(0)} />
          <Tab className="border-bottom" label="On Going " {...a11yProps(1)} />
          <Tab className="border-bottom" label="Pending" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="row justify-content-center gap-3 gap-md-0  p-0">
          <div className="col-12 col-lg-4 col-md-6">
            {" "}
            <SurveyCard state={'On Going'} />
          </div>
          <div className="col-12 col-lg-4 col-md-6">
            {" "}
            <SurveyCard state={'Pending'} />
          </div>
          <div className="col-12 col-lg-4 col-md-6">
            {" "}
            <SurveyCard  state={'Pending'}/>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="row justify-content-between p-0">
          <div className="col-12 col-lg-4 col-md-6">
            <SurveyCard state={'On Going'}  />
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="row justify-content-start p-0">
          <div className="col-12 col-lg-4 col-md-6">
            <SurveyCard state={'Pending'} />
          </div>
          <div className="col-12 col-lg-4 col-md-6">
            <SurveyCard  state={'Pending'}/>
          </div>
        </div>{" "}
      </CustomTabPanel>
    </Box>
  );
}
