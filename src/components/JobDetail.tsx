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
              <img className="logoImg" src={selectedJobDet?.logo} />
            </div>
            <div className="nameSite">
              <h2 className="companyH2"> {selectedJobDet?.company} </h2>
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
              <h2 className="positionH2"> {selectedJobDet.position}</h2>
              <h4>{selectedJobDet.location}</h4>
            </div>
            <a className="hrefTop" href={selectedJobDet.website}>
              Apply Now
            </a>
          </div>
          <div className="titleSpace">
            <p className="descP">{selectedJobDet.description}</p>

            <div className="titleDownside">
              <h2 className="subchapter">Requirements </h2>
              <div className="mainPDesc">
                <p className="descP">{selectedJobDet.requirements.content}</p>
                <div className="pDescDiv">
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
            </div>

            <div className="titleDownside">
              <h2 className="subchapter">What You Will Do </h2>
              <div className="mainPDesc">
                <p className="descP">{selectedJobDet.requirements.content}</p>
                <div className="pDescDiv">
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
      </div>
      <footer>
        <div className="footerDiv">
          <h2 className="subchapter">Senior Software Engineer </h2>
          <p className="descP"> So Digital Inc.</p>
        </div>
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
  @media (min-width: 1024px) {
    gap: 80px;
    margin-top: -40px;
  }
  .subchapter {
    color: ${(props) => (props.darkMode ? "#FFFFFF" : "#19202D")};
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (min-width: 768px) {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  .descP {
    color: #6e8098;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }

  .insideCont {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    gap: 24px;
    @media (min-width: 768px) {
      gap: 32px;
      padding: 0 40px;
    }
    @media (min-width: 1024px) {
      padding: 0;
    }

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
      @media (min-width: 768px) {
        width: 170px;
        padding: 16px 28px;
      }
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
      @media (min-width: 768px) {
        width: 689px;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 40px;
        padding-bottom: 45px;
        padding-top: 42px;
        position: relative;
      }

      @media (min-width: 1024px) {
        width: 730px;
        padding-right: 43px;
      }

      .logoSite {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        justify-content: center;
        align-items: center;
        @media (min-width: 768px) {
          flex-direction: row;
          gap: 40px;
        }

        .logoDiv {
          width: 50px;
          margin-top: -25px;
          border-radius: 15px;
          height: 50px;
          background-color: ${(props) => (props.bg ? props.bg : "")};
          display: flex;
          justify-content: center;
          align-items: center;

          @media (min-width: 768px) {
            width: 140px;
            height: 150px;
            position: absolute;
            left: 0;
            bottom: 0;
            margin-top: 0px;
            border-bottom-left-radius: 6px;
            border-top-left-radius: 6px;
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
          }

          @media (min-width: 1024px) {
            border-top-left-radius: 0px;
            height: 135px;
          }

          .logoImg {
            @media (min-width: 768px) {
              width: 80px;
              height: 25px;
            }

            @media (min-width: 1024px) {
              width: 90px;
              height: 40px;
            }
          }
        }

        .nameSite {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 13px;
          @media (min-width: 768px) {
            width: 78px;
            align-items: flex-start;
          }

          @media (min-width: 1024px) {
            width: 90px;
            height: 40px;
          }

          .companyH2 {
            color: ${(props) => (props.darkMode ? "#FFFFFF" : "#19202D")};
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            @media (min-width: 768px) {
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
            }
          }
        }
      }
      a {
        width: 153px;
        border-radius: 5px;

        background: ${(props) =>
          props.darkMode
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(89, 100, 224, 0.1)"};
        height: 48px;
        display: flex;
        justify-content: center;
        text-decoration: none;
        align-items: center;
        cursor: pointer;

        p {
          color: ${(props) => (props.darkMode ? "#fff" : "#5964E0")};
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
      @media (min-width: 768px) {
        width: 689px;
        padding: 48px;
        gap: 44px;
      }
      @media (min-width: 1024px) {
        width: 730px;
      }

      .jobPosition {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 54px;
        @media (min-width: 768px) {
          flex-direction: row;
          gap: 0;
          justify-content: space-between;
          align-items: center;
        }

        .PositionLoc {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 11px;
          justify-content: flex-start;
          align-items: flex-start;
          @media (min-width: 768px) {
            gap: 12px;
          }

          .dateDot {
            width: 4px;
            height: 4px;
            background-color: #6e8098;
            border-radius: 50%;
          }

          .positionH2 {
            color: ${(props) => (props.darkMode ? "#FFFFFF" : "#19202D")};
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            @media (min-width: 768px) {
              font-size: 28px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
            }
          }
        }
      }
      .titleSpace {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;

        .titleDownside {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 28px;

          .mainPDesc {
            display: flex;
            flex-direction: column;
            gap: 32px;
            @media (min-width: 768px) {
              gap: 24px;
            }

            .pDescDiv {
              display: flex;
              flex-direction: column;
              gap: 10px;

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
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.darkMode ? "#19202D" : "#FFFFFF")};
    padding: 25px 0 23px 0;
    @media (min-width: 768px) {
      padding: 23px 40px;
      justify-content: space-between;
    }

    @media (min-width: 1024px) {
      padding: 25px 0;
      justify-content: center;
      align-items: center;
      gap: 349px;
    }

    .footerDiv {
      display: none;

      @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 12px;
      }
    }

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

      @media (min-width: 768px) {
        width: 141px;
        height: 48px;
      }
    }
  }
`;
export default JobDetail;
