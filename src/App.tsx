import { styled } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Mode } from "./store/redux";
function App() {
  // const darkMode = useSelector((dark: Mode) => dark.Mode.gloomy);
  return (
    <Router>
      <MainContainer>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MainContainer>
    </Router>
  );
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  align-items: center;
`;

export default App;
