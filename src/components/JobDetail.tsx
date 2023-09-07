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
              <h3> scoot.com</h3>
            </div>
          </div>
          <a>
            <p> Company Site</p>
          </a>
        </div>
        <div className="deescriptDiv">
          <div className="jobPosition">
            <div className="PositionLoc">
              <h3> 1w ago . Part Time</h3>
              <h2> Senior Software Engineer</h2>
              <h4> United Kingdrom</h4>
            </div>
            <button className="buttonTop"> Apply Now </button>
          </div>
          <div className="titleSpace">
            <p className="descP">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>

            <div className="titleDownside">
              <h2>Requirements </h2>
              <div className="pDescDiv">
                <p className="descP">
                  Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
                  magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
                  facilisis libero dolor a purus. Sed vel lacus. Mauris nibh
                  felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
                  Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc
                  tellus ante, mattis eget, gravida vitae, ultricies ac, leo.
                  Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
                </p>
                <div className="DotP">
                  <div className="dot"></div>
                  <p className="descP">Morbi interdum mollis sapien. Sed</p>
                </div>
              </div>
            </div>

            <div className="titleDownside">
              <h2>What You Will Do </h2>
              <div className="pDescDiv">
                <p className="descP">
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                  Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed,
                  urna.
                </p>
                <div className="numP">
                  <span> 1</span>
                  <p className="descP">Morbi interdum mollis sapien. Sed</p>
                </div>
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

    .buttonTop {
      width: 100%;
      height: 48px;
      background-color: #5964e0;
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
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
