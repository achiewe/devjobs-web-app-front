import InputFilter from "./InputFilter";
import { styled } from "styled-components";
import FiltFrame from "./FilterFrame";

const HomePage = (): JSX.Element => {
  return (
    <MainContainer>
      <InputFilter />
      <FiltFrame />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: -40px;
`;
export default HomePage;
