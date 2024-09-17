import "./App.css";
import Navbar from "./component/Navbar";
// import ParticlesBackground from "./component/ParticlesBackground";
import News from "./component/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <div style={{}}>
          <div style={{ position: "relative", height: "100vh" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            >
              <Navbar />
              <LoadingBar
                height={3}
                color="#f11946"
                progress={progress}
              />
              {/* <ParticlesBackground /> */}

              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    < News  setProgress={setProgress}
                      key="general"
                      pageSize={20}
                      q={"general"}
                      country={"us"}
                      newsType={"top-headlines"}
                    />
                  }
                />
                <Route
                  exact
                  path="/technology"
                  element={
                    < News  setProgress={setProgress}
                      key="technology"
                      pageSize={20}
                      q={"technology"}
                      country={"us"}
                      newsType={"top-headlines"}
                    />
                  }
                />
                <Route
                  exact
                  path="/science"
                  element={
                    < News  setProgress={setProgress}
                      key="science"
                      pageSize={20}
                      q={"science"}
                      country={"us"}
                      newsType={"top-headlines"}
                    />
                  }
                />
                <Route
                  exact
                  path="/sports"
                  element={
                    < News  setProgress={setProgress}
                      key="sports"
                      pageSize={20}
                      q={"sports"}
                      country={"us"}
                      newsType={"top-headlines"}
                    />
                  }
                />
                <Route
                  exact
                  path="/business"
                  element={
                    < News  setProgress={setProgress}
                      key="business"
                      pageSize={20}
                      q={"business"}
                      country={"us"}
                      newsType={"top-headlines"}
                    />
                  }
                />
                <Route
                  exact
                  path="/health"
                  element={
                    < News  setProgress={setProgress}
                      key="health"
                      pageSize={20}
                      q={"health"}
                      country={"us"}
                      newsType={"top-headlines"}
                    />
                  }
                />
                <Route
                  exact
                  path="/entertainment"
                  element={
                    < News  setProgress={setProgress}
                      key="entertainment"
                      pageSize={20}
                      q={"entertainment"}
                      country={"us"}
                      newsType={"top-headlines"}
                    />
                  }
                />
              </Routes>
            </div>
            {/* <News
        pageSize={20}
        q={"entertainment"}
        country={"us"}
        newsType={"top-headlines"}
      /> */}
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
