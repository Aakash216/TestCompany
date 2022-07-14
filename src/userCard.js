import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MonochromePhotosIcon from "@mui/icons-material/MonochromePhotos";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

class UserCards extends Component {
  render() {
    return (
      <div className="clearfix">
        <div
          className="row"
          style={{
            display: "inline",
            margin: "auto",
          }}
        >
          <div className="col-md-4 animated fadeIn">
            <div className="card">
              <div className="card-body">
                <div className="avatar">
                  <img
                    src="data:image/jpeg;base64,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"
                    style={{
                      margin: "auto",
                      width: "100px",
                      height: "100px",
                      display: "inline",
                    }}
                  />
                </div>
                <h5 className="card-title">Rahul Kumar</h5>
                <p
                  className="card-text"
                  style={{ marginRight: "auto", display: "inline" }}
                >
                  <MonochromePhotosIcon />
                  Connection@Media - Singer
                  <br />
                  Feb 2019 - Aug 2020
                  <br />
                  <br />
                  <CameraAltIcon />
                  Connection@Media - Singer <br />
                  Oct 2020 - May 2022
                  <br />
                  <br />
                  <LocationOnIcon />
                  Delhi, India
                </p>
              </div>
              <p className="card-text" style={{ margin: "auto" }}>
                Rahul is one of the aspiring singer looking for{" "}
                <a href="#">...see more</a>
                <BookmarkBorderIcon style={{ marginLeft: "10px" }} />
              </p>
              <div class="text-left">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ width: "20%", borderRadius: "4%" }}
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="avatar">
                  <img
                    src="https://images.unsplash.com/photo-1553984658-d17e19aa281a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=331&q=80"
                    style={{
                      margin: "auto",
                      width: "100px",
                      height: "100px",
                      display: "inline",
                    }}
                  />
                </div>
                <h5 className="card-title">Rahul Kumar</h5>
                <p
                  className="card-text"
                  style={{ marginRight: "auto", display: "inline" }}
                >
                  <MonochromePhotosIcon />
                  Connection@Media - Singer
                  <br />
                  Feb 2019 - Aug 2020
                  <br />
                  <br />
                  <CameraAltIcon />
                  Connection@Media - Singer <br />
                  Oct 2020 - May 2022
                  <br />
                  <br />
                  <LocationOnIcon />
                  Delhi, India
                </p>
              </div>
              <p className="card-text" style={{ margin: "auto" }}>
                Sandy is one of the aspiring singer looking for{" "}
                <a href="#">...see more</a>
                <BookmarkBorderIcon style={{ marginLeft: "10px" }} />
              </p>
              <div class="text-left">
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ width: "20%", borderRadius: "4%" }}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCards;
