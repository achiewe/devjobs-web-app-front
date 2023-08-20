import { styled } from "styled-components";
import logoSvg from "../assets/desktop/logo.svg";
import sunSvg from "../assets/desktop/icon-sun.svg";
import moonSvg from "../assets/desktop/icon-moon.svg";
import bgMobile from "../assets/mobile/bg-pattern-header.svg";
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
          window.location.reload();
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
      display: inline-block;
      background-color: #ffffff;
      border-radius: 16px;
      position: relative;

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
