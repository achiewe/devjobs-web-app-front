import { styled } from "styled-components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Mode } from "../store/redux";
import { useDispatch } from "react-redux";
import { openFrame } from "../store/FiltFrameSlice";

interface FilterProps {
  setTitle(title: string): void;
  setTakeTitle(takeTitle: string): void;
  takeTitle: string;
}

const InputFilter = ({
  setTitle,
  setTakeTitle,
  takeTitle,
}: FilterProps): JSX.Element => {
  const darkMode = useSelector((dark: Mode) => dark.Mode.gloomy);
  const dispatch = useDispatch();

  return (
    <MainFilter
      darkMode={darkMode}
      onSubmit={(e) => {
        e.preventDefault();
        setTitle(takeTitle);
      }}
    >
      <input
        className="TitleFilt"
        type="text"
        placeholder="Filter by title…"
        onChange={(e) => {
          setTakeTitle(e.target.value);
        }}
      />
      <div>
        <svg
          className="filterSvg"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          onClick={() => {
            dispatch(openFrame());
          }}
        >
          <path
            d="M19.1076 1.50591e-06H0.860224C0.538187 -0.000593357 0.243138 0.175089 0.0960199 0.454871C-0.0531279 0.738422 -0.0269509 1.07987 0.163593 1.33883L6.84866 10.5411C6.85089 10.5443 6.85333 10.5473 6.85556 10.5504C7.09845 10.8709 7.22995 11.2591 7.23056 11.6579V19.1605C7.22914 19.3825 7.31842 19.5961 7.47853 19.7537C7.63884 19.9112 7.85677 20 8.08405 20C8.19951 19.9998 8.31396 19.9774 8.4207 19.934L12.1772 18.5345C12.5136 18.4339 12.7371 18.1236 12.7371 17.75V11.6579C12.7377 11.2591 12.8692 10.8709 13.1118 10.5504C13.1141 10.5473 13.1165 10.5443 13.1187 10.5411L19.804 1.33864C19.9946 1.07987 20.0207 0.73862 19.8716 0.45507C19.7247 0.175089 19.4294 -0.000593357 19.1076 1.50591e-06Z"
            fill={darkMode ? "#FFF" : "#6E8098"}
          />
        </svg>
        <button type="submit">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
              fill="white"
              fill-rule="nonzero"
            />
          </svg>
        </button>
      </div>
    </MainFilter>
  );
};

const MainFilter = styled.form<{ darkMode: boolean }>`
  width: 327px;
  display: flex;
  flex-direction: row;
  padding: 16px 16px 16px 24px;
  background-color: ${(props) => (props.darkMode ? "#19202D" : "#FFFFFF")};
  border-radius: 6px;
  @media (min-width: 768px) {
    display: none;
  }

  .TitleFilt {
    width: 100%;
    border: none;
    color: ${(props) => (props.darkMode ? "#FFFFFF" : "#19202D")};
    background-color: ${(props) => (props.darkMode ? "#19202D" : "#FFFFFF")};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;

    .filterSvg {
      cursor: pointer;
    }

    button {
      width: 48px;
      height: 48px;
      background-color: #5964e0;
      border: none;
      flex-shrink: 0;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
export default InputFilter;
