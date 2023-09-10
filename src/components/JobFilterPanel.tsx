import { styled } from "styled-components";
import SearchSvg from "../../public/assets/desktop/icon-search.svg";
import LocSvg from "../../public/assets/desktop/icon-location.svg";
import { useSelector } from "react-redux";
import { Mode } from "../store/redux";

interface PanelProps {
  setTitle(title: string): void;
  setFullTime(fullTime: boolean): void;
  setLocation(location: string): void;
  setTakeTitle(takeTitle: string): void;
  takeTitle: string;
  setgetFullTime(getFullTime: boolean): void;
  getFullTime: boolean;
  setInputLocation(InputLocation: string): void;
  InputLocation: string;
}

const JobFilterPanel = ({
  setTitle,
  setFullTime,
  setLocation,
  setTakeTitle,
  takeTitle,
  setgetFullTime,
  getFullTime,
  setInputLocation,
  InputLocation,
}: PanelProps): JSX.Element => {
  const darkMode = useSelector((mode: Mode) => mode.Mode.gloomy);

  return (
    <MainFilter
      darkMode={darkMode}
      getFullTime={getFullTime}
      onSubmit={(e) => {
        e.preventDefault();
        setTitle(takeTitle);
        setFullTime(getFullTime);
        setLocation(InputLocation);
      }}
    >
      <div className="titleDiv">
        <img src={SearchSvg} alt="search logo" />
        <input
          onChange={(e) => {
            setTakeTitle(e.target.value);
          }}
          className="filtTitle"
          type="text"
          placeholder="Filter by title…"
        />
      </div>
      <hr />
      <div className="locDiv">
        <img src={LocSvg} alt="location logo" />
        <input
          className="filtLoc"
          type="text"
          placeholder="Filter by location…"
          onChange={(e) => {
            setInputLocation(e.target.value);
          }}
        />
      </div>
      <hr />
      <div className="fullDiv">
        <div className="checkFull">
          <input
            type="checkbox"
            className="checkInp"
            onClick={() => {
              setgetFullTime(!getFullTime);
            }}
          />
          <h3>
            Full Time <span> only </span>
          </h3>
        </div>
        <button className="searchBut" type="submit">
          Search
        </button>
      </div>
    </MainFilter>
  );
};

const MainFilter = styled.form<{ darkMode: boolean; getFullTime: boolean }>`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    background-color: ${(props) => (props.darkMode ? "#19202D" : "#FFFFFF")};
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 23px;
    width: 87.2%;
    min-width: 689px;
    padding-left: 24px;
    padding-right: 16px;
    height: 80px;
    border-radius: 6px;
  }

  @media (min-width: 1024px) {
    min-width: 880px;
    max-width: 1110px;
  }

  hr {
    width: 1px;
    height: 80px;
    flex-shrink: 0;
    background-color: #6e8098;
    opacity: 0.2;
  }

  .titleDiv {
    width: 174px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    @media (min-width: 1024px) {
      width: 463px;
    }

    .filtTitle {
      border: none;
      background-color: ${(props) => (props.darkMode ? "#19202D" : "#FFFFFF")};
      outline: none;
      color: ${(props) => (props.darkMode ? "#FFFFFF" : "#19202D")};
      font-size: 16px;
      width: 105px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      cursor: pointer;

      @media (min-width: 1024px) {
        width: 271px;
      }
    }
  }

  .locDiv {
    width: 169px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    @media (min-width: 1024px) {
      width: 300px;
    }

    .filtLoc {
      border: none;
      background-color: ${(props) => (props.darkMode ? "#19202D" : "#FFFFFF")};
      outline: none;
      color: ${(props) => (props.darkMode ? "#FFFFFF" : "#19202D")};
      font-size: 16px;
      width: 135px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      cursor: pointer;
    }
  }

  .fullDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1024px) {
      width: 345px;
    }

    .checkFull {
      width: 110px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;
      @media (min-width: 1024px) {
        width: 148px;
      }

      .checkInp {
        width: 24px;
        height: 24px;
        border: none;
        background: ${(props) => (props.darkMode ? "white" : "#19202d")};
        opacity: ${(props) => (props.getFullTime ? "" : "0.1")};
        border-radius: 3px;
        outline: none;
        cursor: pointer;
      }

      h3 {
        color: ${(props) => (props.darkMode ? "#FFFFFF" : "#19202D")};
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        display: flex;
        flex-direction: row;
        gap: 3px;

        span {
          @media (min-width: 768px) {
            display: none;
          }
          @media (min-width: 1024px) {
            display: block;
          }
        }
      }
    }
    .searchBut {
      min-width: 80px;
      height: 48px;
      border-radius: 5px;
      background: #5964e0;
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      border: none;
      cursor: pointer;

      @media (min-width: 1024px) {
        width: 123px;
      }
    }
    .searchBut:hover {
      background-color: #939bf4;
    }
  }
`;

export default JobFilterPanel;
