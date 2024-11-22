import { useSelector } from "react-redux";
import GunCard from "../components/home/GunCard.jsx"

export default function Home() {

  const theme = useSelector((state) => state.theme.isLight);
  const guns = useSelector((state) => state.guns.list);

  if (!theme) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

  console.log(guns);

  return (
    <main className="min-h-screen">
      <section className="flex flex-wrap">
        {guns && guns.map(id => <GunCard key={id} id={id} />)}
      </section>
    </main>
  )
}