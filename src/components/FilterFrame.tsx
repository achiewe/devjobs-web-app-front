import { styled } from "styled-components";
import iconLoc from "../assets/desktop/icon-location.svg";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Mode } from "../store/redux";

const FiltFrame = (): JSX.Element => {
  const darkMode = useSelector((dark: Mode) => dark.Mode.gloomy);
  return (
    <MainTab darkMode={darkMode}>
      <div className="filtLocation">
        <img src={iconLoc} alt="icon location" />
        <input
          className="filterLoc"
          type="text"
          placeholder="Filter by location…"
        />
      </div>
      <hr />
      <div className="fullTime">
        <input className="checkbox" type="checkbox" />
        <p> Full Time Only</p>
      </div>
      <button className="searchBut" type="submit">
        Search
      </button>
    </MainTab>
  );
};

const MainTab = styled.div<{ darkMode: boolean }>`
  width: 327px;
  position: absolute;
  background-color: white;
  display: none;
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
      color: #19202d;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .filterLoc::placeholder {
      opacity: 0.5;
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
      background: #19202d;
      border-radius: 3px;
    }

    p {
      color: #19202d;
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