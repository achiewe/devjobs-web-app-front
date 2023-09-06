import { styled } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import JobDetail from "./components/JobDetail";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Mode } from "./store/redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setEveryJob } from "./store/EveryJobSlice";
import { useEffect } from "react";
import JobsType from "../type";
import { setJob } from "./store/DevJobsSlice";
export const MONGO_URL = `http://localhost:3000/api/devjobs/`;
function App() {
  const darkMode = useSelector((dark: Mode) => dark.Mode.gloomy);
  const ShowFrame = useSelector((filter: Mode) => filter.FiltFrame.filter);
  const presentList = useSelector((list: Mode) => list.List.list);
  const size = 6;
  const dispatch = useDispatch();

  const pickJob = async () => {
    const url = `${MONGO_URL}?size=${size}&page=${presentList}`;
    try {
      const response = await axios.get<JobsType[]>(url);
      dispatch(setJob(response.data));
    } catch (error) {
      console.log("catch error");
    }

    try {
      const response = await axios.get("http://localhost:3000/api/devjobs");
      dispatch(setEveryJob(response.data));
      localStorage.setItem("myArray", JSON.stringify(response.data));
    } catch (error) {
      console.error("Cannot get info:", error);
    }
  };

  useEffect(() => {
    pickJob();
  }, [presentList]);

  return (
    <Router>
      <MainContainer darkMode={darkMode}>
        <GlobalStyles />
        <Header />
        <BlackCover showFrame={ShowFrame} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<JobDetail />} />
        </Routes>
      </MainContainer>
    </Router>
  );
}

const MainContainer = styled.div<{ darkMode: boolean }>`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => (props.darkMode ? "#121721" : "#F4F6F8")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  align-items: center;
`;

const BlackCover = styled.div<{ showFrame: boolean }>`
  position: absolute;
  opacity: 0.4965;
  background: #000;
  width: 100%;
  min-height: 100vh;
  display: ${(props) => (props.showFrame ? "flex" : "none")};
`;

export default App;
