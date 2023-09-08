import { styled } from "styled-components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Mode } from "../store/redux";
import JobsType from "../../type";

const JobDetail = (): JSX.Element => {
  const darkMode = useSelector((dark: Mode) => dark.Mode.gloomy);

  // Retrieve the list of saved job information from local storage
  const savedJobs: JobsType[] = JSON.parse(
    localStorage.getItem("devJobsData") || "[]"
  );

  // Retrieve the ID of the clicked job from local storage
  const keepId = parseInt(localStorage.getItem("clickedJobId") || "0");

  // Find the job with the matching ID from the saved jobs list
  const selectedJob = savedJobs.filter((job) => job.id === keepId);

  // Store the selected job details
  const selectedJobDet = selectedJob[0];

  return (
    <MainContainer darkMode={darkMode} bg={selectedJobDet?.logoBackground}>
      <div className="insideCont">
        <div className="companyInfo">
          <div className="logoSite">
            <div className="logoDiv">
              <img src={selectedJobDet?.logo} />
            </div>
            <div className="nameSite">
              <h2> {selectedJobDet?.company} </h2>
              <h3>{selectedJobDet.company.toLowerCase() + ".com"}</h3>
            </div>
          </div>
          <a href={selectedJobDet.website}>
            <p> Company Site</p>
          </a>
        </div>
        <div className="deescriptDiv">
          <div className="jobPosition">
            <div className="PositionLoc">
              <h3>
                {selectedJobDet.postedAt} <div className="dateDot"> </div>
                <h3> {selectedJobDet.contract}</h3>
              </h3>
              <h2> {selectedJobDet.position}</h2>
              <h4>{selectedJobDet.location}</h4>
            </div>
            <a className="hrefTop" href={selectedJobDet.website}>
              Apply Now
            </a>
          </div>
          <div className="titleSpace">
            <p className="descP">{selectedJobDet.description}</p>

            <div className="titleDownside">
              <h2>Requirements </h2>
              <div className="pDescDiv">
                <p className="descP">{selectedJobDet.requirements.content}</p>

                {selectedJobDet.requirements.items.map((aspect, index) => {
                  return (
                    <div className="DotP" key={index}>
                      <div className="dot"></div>
                      <p className="descP">{aspect}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="titleDownside">
              <h2>What You Will Do </h2>
              <div className="pDescDiv">
                <p className="descP">{selectedJobDet.requirements.content}</p>
                {selectedJobDet.requirements.items.map((aspect, index) => {
                  return (
                    <div className="numP" key={index}>
                      <span> {index}</span>
                      <p className="descP">{aspect}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <button className="buttonBot">Apply Now </button>
      </footer>
    </MainContainer>
  );
};

const MainContainer = styled.div<{ darkMode: boolean; bg?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -15px;
  gap: 64px;
  @media (min-width: 768px) {
    gap: 53px;
    margin-top: -25px;
  }

  .insideCont {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    gap: 24px;

    h3 {
      color: #6e8098;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 12px;
    }

    h2 {
      color: ${(props) => (props.darkMode ? "#FFFFFF" : "#19202D")};
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    h4 {
      color: #5964e0;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .hrefTop {
      width: 100%;
      height: 48px;
      background-color: #5964e0;
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      display: flex;
      justify-content: center;
      text-decoration: none;
      align-items: center;
      cursor: pointer;
      border: none;
      border-radius: 5px;
    }

    .companyInfo {
      width: 327px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 27px;
      background-color: ${(props) => (props.darkMode ? "#19202D" : "#FFFFFF")};
      border-radius: 6px;
      padding-bottom: 32px;

      .logoSite {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        justify-content: center;
        align-items: center;

        .logoDiv {
          width: 50px;
          margin-top: -25px;
          border-radius: 15px;
          height: 50px;
          background-color: ${(props) => (props.bg ? props.bg : "")};
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nameSite {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 13px;
        }
      }
      a {
        width: 147px;
        border-radius: 5px;
        background-color: rgba(89, 100, 224, 0.1);
        height: 48px;
        display: flex;
        justify-content: center;
        text-decoration: none;
        align-items: center;
        cursor: pointer;

        p {
          color: #5964e0;
          text-align: center;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }
    }

    .deescriptDiv {
      width: 100%;
      display: flex;
      flex-direction: column;
      width: 327px;
      background-color: ${(props) => (props.darkMode ? "#19202D" : "#FFFFFF")};
      border-radius: 6px;
      padding: 40px 24px;
      gap: 32px;

      .jobPosition {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 54px;

        .PositionLoc {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 11px;
          justify-content: flex-start;
          align-items: flex-start;

          .dateDot {
            width: 4px;
            height: 4px;
            background-color: #6e8098;
            border-radius: 50%;
          }
        }
      }
      .titleSpace {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;

        .descP {
          color: #6e8098;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 26px;
        }

        .titleDownside {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 28px;

          .pDescDiv {
            display: flex;
            flex-direction: column;
            gap: 32px;

            .DotP {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: flex-start;
              gap: 32px;

              .dot {
                min-width: 4px;
                height: 4px;
                background-color: #5964e0;
                border-radius: 50%;
                margin-top: 10px;
              }
            }

            .numP {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: flex-start;
              gap: 24px;

              span {
                color: #5964e0;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 26px;
              }
            }
          }
        }
      }
    }
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.darkMode ? "#19202D" : "#FFFFFF")};
    padding: 25px 0 23px 0;

    .buttonBot {
      width: 327px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      border: none;
      border-radius: 5px;
      background-color: #5964e0;
    }
  }
`;
export default JobDetail;
