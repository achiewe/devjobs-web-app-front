import { styled } from "styled-components";
import iconLoc from "../../public/assets/desktop/icon-location.svg";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Mode } from "../store/redux";
import { useDispatch } from "react-redux";
import { CloseFrame } from "../store/FiltFrameSlice";

interface filtFrame {
  setFullTime(fullTime: boolean): void;
  setLocation(location: string): void;
  getFullTime: boolean;
  setgetFullTime(getFullTime: boolean): void;
  setInputLocation(InputLocation: string): void;
  InputLocation: string;
}

const FiltFrame = ({
  setFullTime,
  setLocation,
  getFullTime,
  setgetFullTime,
  setInputLocation,
  InputLocation,
}: filtFrame): JSX.Element => {
  const darkMode = useSelector((dark: Mode) => dark.Mode.gloomy);
  const ShowFrame = useSelector((filter: Mode) => filter.FiltFrame.filter);
  const dispatch = useDispatch();
  return (
    <MainTab
      darkMode={darkMode}
      ShowFrame={ShowFrame}
      getFullTime={getFullTime}
      onSubmit={(e) => {
        e.preventDefault();
        setLocation(InputLocation);
        setFullTime(getFullTime);
      }}
    >
      <div className="filtLocation">
        <img src={iconLoc} alt="icon location" />
        <input
          className="filterLoc"
          type="text"
          placeholder="Filter by location…"
          onChange={(e) => {
            setInputLocation(e.target.value);
          }}
        />
      </div>
      <hr />
      <div className="fullTime">
        <input
          className="checkbox"
          type="checkbox"
          onChange={() => {
            setgetFullTime(!getFullTime);
          }}
        />
        <p> Full Time Only</p>
      </div>
      <button
        className="searchBut"
        type="submit"
        onClick={() => {
          dispatch(CloseFrame());
        }}
      >
        Search
      </button>
    </MainTab>
  );
};

const MainTab = styled.form<{
  darkMode: boolean;
  ShowFrame: boolean;
  getFullTime: boolean;
}>`
  width: 327px;
  position: absolute;
  background-color: ${(props) => (props.darkMode ? "#19202D" : "#FFFFFF")};
  display: ${(props) => (props.ShowFrame ? "flex" : "none")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  top: 225px;
  gap: 29px;
  padding: 24px 0;
  border-radius: 6px;

  .filtLocation {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 24px;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;

    .filterLoc {
      border: none;
      width: 100%;
      outline: none;
      color: ${(props) => (props.darkMode ? "#FFFFFF" : "#19202D")};
      background-color: ${(props) => (props.darkMode ? "#19202D" : "#FFFFFF")};
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .filterLoc::placeholder {
      opacity: ${(props) => (props.darkMode ? "" : "0.5")};
    }
  }

  hr {
    width: 100%;
    height: 1px;
    border-style: #6e8098;
    opacity: 0.2;
  }

  .fullTime {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    padding: 0 24px;

    .checkbox {
      border: 1px solid red;
      width: 24px;
      height: 24px;
      background: ${(props) => (props.darkMode ? "white" : "#19202d")};
      opacity: ${(props) => (props.getFullTime ? "" : "0.1")};
      border-radius: 3px;
    }

    p {
      color: ${(props) => (props.darkMode ? "#FFFFFF" : "#19202D")};
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  .searchBut {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 279px;
    border: none;
    border-radius: 5px;
    background-color: #5964e0;
    padding: 16px 0;
    cursor: pointer;
  }
`;
export default FiltFrame;
