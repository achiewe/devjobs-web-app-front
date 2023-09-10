import InputFilter from "./InputFilter";
import { styled } from "styled-components";
import FiltFrame from "./FilterFrame";
import JobFilterPanel from "./JobFilterPanel";
import { useDispatch, useSelector } from "react-redux";
import { Mode } from "../store/redux";
import { setList } from "../store/ListSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = (): JSX.Element => {
  const darkMode = useSelector((dark: Mode) => dark.Mode.gloomy);

  const presentList = useSelector((list: Mode) => list.List.list);

  const everyJob = useSelector((everyJob: Mode) => everyJob.EveryJob.everyJob);

  const dispatch = useDispatch();

  const [title, setTitle] = useState(" ");
  const [fullTime, setFullTime] = useState(false);
  const [location, setLocation] = useState(" ");

  // save states below this usestates
  const [takeTitle, setTakeTitle] = useState(" ");
  const [getFullTime, setgetFullTime] = useState(false);
  const [InputLocation, setInputLocation] = useState(" ");

  const updateJob = () => {
    dispatch(setList(1));
  };

  const clickJob = (jobId: number) => {
    localStorage.setItem("clickedJobId", jobId.toString());
  };

  const visibleJob = 6 * presentList;

  const filtJob = (title: string, fullTime: boolean, location: string) => {
    let filteredJob = everyJob; // Assuming 'everyJob' is an array of jobs
    if (title) {
      filteredJob = filteredJob.filter((job) =>
        job.position.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (fullTime) {
      filteredJob = filteredJob.filter((job) => job.contract === "Full Time");
    }

    if (location) {
      filteredJob = filteredJob.filter((job) =>
        job.location.toLocaleLowerCase().includes(location.toLowerCase())
      );
    }

    return filteredJob; // Return the filtered result
  };

  const filteredJob = filtJob(title, fullTime, location);
  const visibleFilterJob = filteredJob.slice(0, visibleJob);
  return (
    <MainContainer>
      <InputFilter
        setTitle={setTitle}
        setTakeTitle={setTakeTitle}
        takeTitle={takeTitle}
      />
      <FiltFrame
        setFullTime={setFullTime}
        setLocation={setLocation}
        getFullTime={getFullTime}
        setgetFullTime={setgetFullTime}
        setInputLocation={setInputLocation}
        InputLocation={InputLocation}
      />
      <JobFilterPanel
        setTitle={setTitle}
        setFullTime={setFullTime}
        setLocation={setLocation}
        setTakeTitle={setTakeTitle}
        takeTitle={takeTitle}
        setgetFullTime={setgetFullTime}
        getFullTime={getFullTime}
        setInputLocation={setInputLocation}
        InputLocation={InputLocation}
      />
      <ListOfJobs>
        {visibleFilterJob.map((job, index) => (
          <Link to="/info" className="linkInf" key={index}>
            <Job
              darkMode={darkMode}
              backgrou={job.logoBackground}
              onClick={() => {
                clickJob(job.id);
              }}
            >
              <div className="companLog">
                <img src={job.logo} alt="job" />
              </div>
              <div className="mainInfo">
                <h3>
                  {job.postedAt} <div className="dot"></div> {job.contract}
                </h3>
                <h2> {job.position}</h2>
                <h3> {job.company}</h3>
              </div>
              <h4> {job.location} </h4>
            </Job>
          </Link>
        ))}
      </ListOfJobs>
      <button
        className="loadMore"
        onClick={(e) => {
          e.preventDefault();
          updateJob();
        }}
      >
        Load More
      </button>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: -36px;
  margin-bottom: 62px;
  @media (min-width: 768px) {
    margin-top: -46px;
  }
  @media (min-width: 1024px) {
    margin-top: -44px;
  }

  .loadMore {
    width: 141px;
    height: 48px;
    background-color: #5964e0;
    border: none;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    margin-top: 32px;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;

    @media (min-width: 768px) {
      margin-top: 56px;
    }
  }

  .loadMore:hover {
    background-color: #939bf4;
  }
`;

const ListOfJobs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 49px;
  margin-top: 57px;
  @media (min-width: 768px) {
    margin-top: 70px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 65px 11px;
  }

  @media (min-width: 1024px) {
    gap: 65px 30px;
    margin-top: 105px;
    max-width: 1110px;
  }

  .linkInf {
    width: 327px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      min-width: 339px;
    }

    @media (min-width: 1024px) {
      width: 350px;
    }
  }
`;

const Job = styled.div<{ darkMode: boolean; backgrou: string }>`
  display: flex;
  flex-direction: column;
  width: 327px;
  background-color: ${(props) => (props.darkMode ? "#19202D" : "#FFFFFF")};
  padding-left: 32px;
  padding-bottom: 36px;
  border-radius: 6px;
  @media (min-width: 768px) {
    width: 339px;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }

  .companLog {
    width: 50px;
    height: 50px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    margin-top: -25px;
    margin-bottom: 24px;
    background-color: ${(props) => (props.backgrou ? props.backgrou : "")};
    align-items: center;
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
      width: 100%;
      color: #6e8098;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 15px;
      align-items: flex-end;

      @media (min-width: 1024px) {
        gap: 12px;
      }

      .dot {
        width: 4px;
        height: 4px;
        background-color: #6e8098;
        border-radius: 50%;
      }
    }

    h2 {
      color: ${(props) => (props.darkMode ? "#FFFFFF" : "#19202D")};
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    h2:hover {
      color: #6e8098;
    }
  }
  h4 {
    color: #5964e0;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export default HomePage;
