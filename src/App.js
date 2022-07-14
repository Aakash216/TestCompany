import Navbar from "./Navbar";
import UserCards from "./userCard";
import "./style.css";
import Footer from "./footer";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <Navbar />
          <div style={{ display: "flex" }}>
            <h5 className="h5">Suggested Candidate</h5>
            <button
              type="button"
              className="rounded-pill button"
              style={{
                backgroundColor: "#e56717",
                width: "180px",
                border: "none",
                height: "40px",
                marginLeft: "220px",
                color: "white",
              }}
            >
              Post a job >
            </button>
          </div>
          <UserCards />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
