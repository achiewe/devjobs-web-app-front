import { styled } from "styled-components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Mode } from "../store/redux";

const JobDetail = (): JSX.Element => {
  const darkMode = useSelector((dark: Mode) => dark.Mode.gloomy);
  return (
    <MainContainer darkMode={darkMode}>
      <div className="companyInfo">
        <div className="logoSite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <rect width="50" height="50" rx="15" fill="#E99210" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M44.696 28.28V30.2H41.336C40.9733 30.2 40.6773 30.0827 40.448 29.848C40.2187 29.6133 40.104 29.3147 40.104 28.952V24.184H37.752V22.264H40.104V19H42.12V22.264H44.984V24.184H42.12V27.8C42.12 28.12 42.264 28.28 42.552 28.28H44.696ZM8.648 30.424C9.69333 30.424 10.504 30.1893 11.08 29.72C11.656 29.2507 11.944 28.6213 11.944 27.832V27.736C11.944 27.0213 11.688 26.464 11.176 26.064C10.664 25.664 10.0027 25.4213 9.192 25.336C8.488 25.2613 8.00267 25.168 7.736 25.056C7.46933 24.944 7.336 24.76 7.336 24.504C7.336 24.3227 7.42133 24.1707 7.592 24.048C7.76267 23.9253 8.01867 23.864 8.36 23.864C8.73333 23.864 9.03733 23.9467 9.272 24.112C9.50667 24.2773 9.672 24.504 9.768 24.792L11.592 24.056C11.5067 23.832 11.384 23.6 11.224 23.36C11.064 23.12 10.856 22.9013 10.6 22.704C10.344 22.5067 10.032 22.3467 9.664 22.224C9.296 22.1013 8.86133 22.04 8.36 22.04C7.976 22.04 7.60267 22.0933 7.24 22.2C6.87733 22.3067 6.55733 22.464 6.28 22.672C6.00267 22.88 5.77867 23.1333 5.608 23.432C5.43733 23.7307 5.352 24.0773 5.352 24.472V24.568C5.352 25.3253 5.616 25.8987 6.144 26.288C6.672 26.6773 7.384 26.9093 8.28 26.984C8.61067 27.016 8.88533 27.0587 9.104 27.112C9.32267 27.1653 9.496 27.232 9.624 27.312C9.752 27.392 9.84 27.4773 9.888 27.568C9.936 27.6587 9.96 27.7573 9.96 27.864C9.96 28.0453 9.86667 28.2133 9.68 28.368C9.49333 28.5227 9.14933 28.6 8.648 28.6C8.08267 28.6 7.664 28.472 7.392 28.216C7.12 27.96 6.94133 27.6613 6.856 27.32L5 27.928C5.05333 28.2053 5.15733 28.4907 5.312 28.784C5.46667 29.0773 5.688 29.344 5.976 29.584C6.264 29.824 6.62667 30.024 7.064 30.184C7.50133 30.344 8.02933 30.424 8.648 30.424ZM16.844 30.424C17.9747 30.424 18.8787 30.136 19.556 29.56C20.2333 28.984 20.6627 28.2267 20.844 27.288L18.86 26.792C18.764 27.3147 18.5533 27.7307 18.228 28.04C17.9027 28.3493 17.4307 28.504 16.812 28.504C16.524 28.504 16.252 28.4587 15.996 28.368C15.74 28.2773 15.516 28.1413 15.324 27.96C15.132 27.7787 14.98 27.552 14.868 27.28C14.756 27.008 14.7 26.696 14.7 26.344V26.248C14.7 25.896 14.756 25.5787 14.868 25.296C14.98 25.0133 15.132 24.7733 15.324 24.576C15.516 24.3787 15.74 24.2267 15.996 24.12C16.252 24.0133 16.524 23.96 16.812 23.96C17.4307 23.96 17.9107 24.1307 18.252 24.472C18.5933 24.8133 18.796 25.2187 18.86 25.688L20.844 25.176C20.6627 24.2373 20.228 23.48 19.54 22.904C18.852 22.328 17.9533 22.04 16.844 22.04C16.268 22.04 15.7267 22.136 15.22 22.328C14.7133 22.52 14.2707 22.7973 13.892 23.16C13.5133 23.5227 13.2173 23.96 13.004 24.472C12.7907 24.984 12.684 25.56 12.684 26.2V26.392C12.684 27.032 12.7907 27.6027 13.004 28.104C13.2173 28.6053 13.5107 29.0267 13.884 29.368C14.2573 29.7093 14.6973 29.9707 15.204 30.152C15.7107 30.3333 16.2573 30.424 16.844 30.424ZM26.6 30.152C26.104 30.3333 25.584 30.424 25.04 30.424C24.496 30.424 23.976 30.3333 23.48 30.152C22.984 29.9707 22.544 29.7067 22.16 29.36C21.776 29.0133 21.472 28.5867 21.248 28.08C21.024 27.5733 20.912 26.9893 20.912 26.328V26.136C20.912 25.4853 21.024 24.9067 21.248 24.4C21.472 23.8933 21.776 23.464 22.16 23.112C22.544 22.76 22.984 22.4933 23.48 22.312C23.976 22.1307 24.496 22.04 25.04 22.04C25.584 22.04 26.104 22.1307 26.6 22.312C27.096 22.4933 27.536 22.76 27.92 23.112C28.304 23.464 28.608 23.8933 28.832 24.4C29.056 24.9067 29.168 25.4853 29.168 26.136V26.328C29.168 26.9893 29.056 27.5733 28.832 28.08C28.608 28.5867 28.304 29.0133 27.92 29.36C27.536 29.7067 27.096 29.9707 26.6 30.152ZM25.04 28.504C24.752 28.504 24.48 28.456 24.224 28.36C23.968 28.264 23.744 28.1253 23.552 27.944C23.36 27.7627 23.208 27.5413 23.096 27.28C22.984 27.0187 22.928 26.7227 22.928 26.392V26.072C22.928 25.7413 22.984 25.4453 23.096 25.184C23.208 24.9227 23.36 24.7013 23.552 24.52C23.744 24.3387 23.968 24.2 24.224 24.104C24.48 24.008 24.752 23.96 25.04 23.96C25.328 23.96 25.6 24.008 25.856 24.104C26.112 24.2 26.336 24.3387 26.528 24.52C26.72 24.7013 26.872 24.9227 26.984 25.184C27.096 25.4453 27.152 25.7413 27.152 26.072V26.392C27.152 26.7227 27.096 27.0187 26.984 27.28C26.872 27.5413 26.72 27.7627 26.528 27.944C26.336 28.1253 26.112 28.264 25.856 28.36C25.6 28.456 25.328 28.504 25.04 28.504ZM34.892 30.152C34.396 30.3333 33.876 30.424 33.332 30.424C32.788 30.424 32.268 30.3333 31.772 30.152C31.276 29.9707 30.836 29.7067 30.452 29.36C30.068 29.0133 29.764 28.5867 29.54 28.08C29.316 27.5733 29.204 26.9893 29.204 26.328V26.136C29.204 25.4853 29.316 24.9067 29.54 24.4C29.764 23.8933 30.068 23.464 30.452 23.112C30.836 22.76 31.276 22.4933 31.772 22.312C32.268 22.1307 32.788 22.04 33.332 22.04C33.876 22.04 34.396 22.1307 34.892 22.312C35.388 22.4933 35.828 22.76 36.212 23.112C36.596 23.464 36.9 23.8933 37.124 24.4C37.348 24.9067 37.46 25.4853 37.46 26.136V26.328C37.46 26.9893 37.348 27.5733 37.124 28.08C36.9 28.5867 36.596 29.0133 36.212 29.36C35.828 29.7067 35.388 29.9707 34.892 30.152ZM33.332 28.504C33.044 28.504 32.772 28.456 32.516 28.36C32.26 28.264 32.036 28.1253 31.844 27.944C31.652 27.7627 31.5 27.5413 31.388 27.28C31.276 27.0187 31.22 26.7227 31.22 26.392V26.072C31.22 25.7413 31.276 25.4453 31.388 25.184C31.5 24.9227 31.652 24.7013 31.844 24.52C32.036 24.3387 32.26 24.2 32.516 24.104C32.772 24.008 33.044 23.96 33.332 23.96C33.62 23.96 33.892 24.008 34.148 24.104C34.404 24.2 34.628 24.3387 34.82 24.52C35.012 24.7013 35.164 24.9227 35.276 25.184C35.388 25.4453 35.444 25.7413 35.444 26.072V26.392C35.444 26.7227 35.388 27.0187 35.276 27.28C35.164 27.5413 35.012 27.7627 34.82 27.944C34.628 28.1253 34.404 28.264 34.148 28.36C33.892 28.456 33.62 28.504 33.332 28.504Z"
              fill="white"
            />
          </svg>
          <div className="nameSite">
            <h2> Scoot</h2>
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
          <button> Apply Now </button>
        </div>
        <div className="titleSpace">
          <p className="descP">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti. Sed egestas, ante et vulputate volutpat, eros pede semper
            est, vitae luctus metus libero eu augue. Morbi purus libero,
            faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
            Praesent elementum hendrerit tortor. Sed semper lorem at felis.
            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
            dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
            dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          <div className="titleDownside"></div>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div<{ darkMode: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  margin-top: -15px;
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

  button {
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

      svg {
        margin-top: -25px;
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
    background-color: #ffffff;
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
    }
  }
`;

export default JobDetail;