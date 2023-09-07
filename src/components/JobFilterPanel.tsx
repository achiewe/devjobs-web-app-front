import { styled } from "styled-components";
import SearchSvg from "../../public/assets/desktop/icon-search.svg";
import LocSvg from "../../public/assets/desktop/icon-location.svg";

interface PanelProps {
  setTitle(title: string): void;
  setFullTime(fullTime: boolean): void;
  fullTime: boolean;
  setLocation(location: string): void;
}

const JobFilterPanel = ({
  setTitle,
  setFullTime,
  fullTime,
  setLocation,
}: PanelProps): JSX.Element => {
  return (
    <MainFilter>
      <div className="titleDiv">
        <img src={SearchSvg} alt="search logo" />
        <input
          onChange={(e) => {
            setTitle(e.target.value);
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
            setLocation(e.target.value);
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
              setFullTime(!fullTime);
            }}
          />
          <h3> Full Time</h3>
        </div>
        <button className="searchBut" type="submit">
          Search
        </button>
      </div>
    </MainFilter>
  );
};

const MainFilter = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    background-color: #ffffff;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 23px;
    width: 689px;
    padding-left: 24px;
    padding-right: 16px;
    height: 80px;
    border-radius: 6px;
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

    .filtTitle {
      border: none;
      background-color: #ffffff;
      outline: none;
      color: #19202d;
      font-size: 16px;
      width: 105px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .locDiv {
    width: 169px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;

    .filtLoc {
      border: none;
      background-color: #ffffff;
      outline: none;
      color: #19202d;
      font-size: 16px;
      width: 135px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .fullDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .checkFull {
      width: 110px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;

      .checkInp {
        width: 24px;
        height: 24px;
        border: none;
        background: #19202d;
        opacity: 0.1035;
        border-radius: 3px;
        outline: none;
        cursor: pointer;
      }

      h3 {
        color: #19202d;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    .searchBut {
      width: 80px;
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
    }
  }
`;

export default JobFilterPanel;
