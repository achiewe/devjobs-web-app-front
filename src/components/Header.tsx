import { styled } from "styled-components";
import logoSvg from "../../public/assets/desktop/logo.svg";
import sunSvg from "../../public/assets/desktop/icon-sun.svg";
import moonSvg from "../../public/assets/desktop/icon-moon.svg";
import bgMobile from "../../public/assets/mobile/bg-pattern-header.svg";
import bgTab from "../../public/assets/tablet/bg-pattern-header.svg";
import bgDesk from "../../public/assets/desktop/bg-pattern-header.svg";
import { Mode } from "../store/redux";
import { useDispatch, useSelector } from "react-redux";
import { dark } from "../store/ModeSlice";

const Header = (): JSX.Element => {
  const darkMode = useSelector((dark: Mode) => dark.Mode.gloomy);
  const dispatch = useDispatch();
  const ClickOnMode = () => {
    dispatch(dark(!darkMode));
  };

  return (
    <MainHeader>
      <img
        className="logoSvg"
        src={logoSvg}
        alt="logo svg"
        onClick={() => {
          window.location.href = "http://localhost:5173/";
        }}
      />
      <div>
        <img src={sunSvg} alt="sun svg" />
        <label>
          <input type="checkbox" onChange={ClickOnMode} />
          <span className="slide"></span>
        </label>
        <img src={moonSvg} alt="moon svg" />
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
  padding: 32px 24px 72px 24px;

  @media (min-width: 768px) {
    background-image: url(${bgTab});
    border-radius: 0px 0px 0px 100px;
    padding: 42px 40px 86px 40px;
  }

  @media (min-width: 1024px) {
    background-image: url(${bgDesk});
    padding: 44px 165px 84px 165px;
  }

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
      display: inline-block;
      background-color: #ffffff;
      border-radius: 16px;
      position: relative;
      @media (min-width: 768px) {
        width: 50px;
      }

      :hover {
        opacity: 0.5;
      }

      .slide {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        -webkit-transition: 0.4s;
        transition: 0.5s;
        border-radius: 16px;
        cursor: pointer;
      }

      .slide::before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        background-color: #5964e0;
        -webkit-transition: 0.4s;
        transition: 0.5s;
        border-radius: 50%;
        left: 3px;
        bottom: 3px;
        @media (min-width: 768px) {
          height: 14px;
          width: 14px;
          bottom: 5px;
          left: 5px;
        }
      }

      input:checked + .slide:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(25px);
        transform: translateX(23px);
        background-color: #5964e0;
      }
    }

    label input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }
`;

export default Header;
