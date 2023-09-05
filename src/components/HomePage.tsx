import InputFilter from "./InputFilter";
import { styled } from "styled-components";
import FiltFrame from "./FilterFrame";
import { useSelector } from "react-redux";
import { Mode } from "../store/redux";

const HomePage = (): JSX.Element => {
  const darkMode = useSelector((dark: Mode) => dark.Mode.gloomy);
  const everyJob = useSelector((everyJob: Mode) => everyJob.EveryJob.everyJob);
  return (
    <MainContainer>
      <InputFilter />
      <FiltFrame />
      <ListOfJobs darkMode={darkMode}>
        {everyJob.map((job, index) => (
          <div className="jobsDiv" key={index}>
            <img src={job.logo} alt="job logo" />
            <div className="mainInfo">
              <h3> 5h ago . Full Time</h3>
              <h2> Senior Software Engineer</h2>
              <h3> Scoot</h3>
            </div>
            <h4> United Kingdom </h4>
          </div>
        ))}
      </ListOfJobs>
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

const ListOfJobs = styled.div<{ darkMode: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 57px;

  .jobsDiv {
    display: flex;
    flex-direction: column;
    width: 327px;
    background-color: ${(props) => (props.darkMode ? "#19202D" : "#FFFFFF")};
    padding-left: 32px;
    padding-bottom: 36px;
    border-radius: 6px;

    img {
      margin-top: -25px;
      margin-bottom: 24px;
    }

    .mainInfo {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 16px;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 44px;

      h3 {
        color: #6e8098;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      h2 {
        color: ${(props) => (props.darkMode ? "#FFFFFF" : "#19202D")};
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    h4 {
      color: #5964e0;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
export default HomePage;
