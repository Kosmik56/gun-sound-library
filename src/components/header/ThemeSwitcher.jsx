import { useDispatch, useSelector } from "react-redux"
import { toggle } from "../../redux/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitcher() {

  const theme = useSelector((state) => state.theme.isLight);
  const dispatch = useDispatch()
  const icon_style = "h-[40px] w-[40px] p-[6px] rounded-full shadow-sm " + (theme ? "bg-button" : "bg-button-dark");

  return (
    <button className="px-[20px]" onClick={() => dispatch(toggle())}>
      {theme ? <FaSun className={icon_style} /> : <FaMoon className={icon_style} />}
    </button>
  )
}