import { styled } from "styled-components";
import SearchSvg from "../../public/assets/desktop/icon-search.svg";

const JobFilterPanel = (): JSX.Element => {
  return (
    <MainFilter>
      <div className="titleDiv">
        <img src={SearchSvg} alt="search logo" />
        <input
          className="filtTitle"
          type="text"
          placeholder="Filter by title…"
        />
      </div>
      <hr />
      <div className="locDiv">
        <img src={SearchSvg} alt="search logo" />
        <input
          className="filtTitle"
          type="text"
          placeholder="Filter by title…"
        />
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
    gap: 24px;
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
  }
`;

export default JobFilterPanel;
