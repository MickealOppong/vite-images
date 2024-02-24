import { BsFillBrightnessHighFill } from "react-icons/bs";
import { FaMoon } from 'react-icons/fa';
import { useAppContext } from "./AppContextProvider";

const ThemeToggle = () => {
  const { darkTheme, toggleDarkTheme } = useAppContext();
  return <section className="toggle-container">

    <button className="toggle-btn" onClick={toggleDarkTheme} style={{ color: darkTheme ? "white" : "black" }}>
      {
        darkTheme ? <FaMoon /> : <BsFillBrightnessHighFill />
      }
    </button>

  </section>
}

export default ThemeToggle;