import { styled } from "styled-components";
import logoSvg from "../assets/desktop/logo.svg";
import bgMobile from "../assets/mobile/bg-pattern-header.svg";

const Header = (): JSX.Element => {
  return (
    <MainHeader>
      <img className="logoSvg" src={logoSvg} alt="logo svg" />
      <div>
        <label></label>
      </div>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-image: url(${bgMobile});
  background-size: cover;
  background-repeat: no-repeat;
  gap: 100px;
  padding: 32px 24px 72px 24px;

  .logoSvg {
    cursor: pointer;
  }

  div {
    display: flex;
    width: 112px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    label {
      appearance: none;
      width: 48px;
      height: 24px;
      background-color: #ffffff;
      border-radius: 16px;
      position: relative;
    }
  }
`;

export default Header;
