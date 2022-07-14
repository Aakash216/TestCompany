import React from "react";
import "./styles.css";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ExploreIcon from "@mui/icons-material/Explore";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import IconButton from "@mui/material/IconButton";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="row justify-content-between text-center">
          <div className="col-md-4 text-md-left"></div>
          <div className="col-md-4 text-md-right">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <HomeIcon
                style={{
                  color: "#808081",
                  fontSize: "50px",
                  textAlign: "center",
                  marginRight: "0%",
                }}
              />
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <PeopleAltIcon
                style={{
                  color: "#808081",
                  fontSize: "50px",
                  textAlign: "center",
                  marginRight: "0%",
                }}
              />
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <ExploreIcon
                style={{
                  color: "#808081",
                  fontSize: "50px",
                  textAlign: "center",
                  marginRight: "0%",
                }}
              />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <BusinessCenterIcon
                style={{
                  color: "#808081",
                  fontSize: "50px",
                  textAlign: "center",
                  marginRight: "0%",
                }}
              />
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <AccountBoxIcon
                style={{
                  color: "#808081",
                  fontSize: "50px",
                  textAlign: "center",
                  marginRight: "0%",
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
