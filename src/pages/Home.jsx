import { useSelector } from "react-redux";
import GunCard from "../components/home/GunCard.jsx"

export default function Home() {

  const theme = useSelector((state) => state.theme.isLight);

  if (!theme) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

  return (
    <main>
      <GunCard />
    </main>
  )
}