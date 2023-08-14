import { styled } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Mode } from "./store/redux";
function App() {
  const darkMode = useSelector((dark: Mode) => dark.Mode.gloomy);
  return (
    <MainContainer>
      <GlobalStyles />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default App;
