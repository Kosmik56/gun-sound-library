import { useSelector } from "react-redux";

export default function Footer() {

  const theme = useSelector((state) => state.theme.isLight);

  return (
    <footer className={"mt-[30px] border-t border-solid " + (theme ? "border-black/50" : "border-white/50")}>
      <p className="p-[20px]">
        Made with blood, sweat and tears by Maxence L and Lewis K. &copy;2024 
      </p>
    </footer>
  )
}