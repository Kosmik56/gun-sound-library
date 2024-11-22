import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageLoader from "../components/ImageLoader";

export default function Gun() {

  const { id } = useParams();
  const theme = useSelector((state) => state.theme.isLight);
  const data = {
    title: id,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt, libero aperiam ex architecto cumque modi blanditiis accusantium excepturi veniam. Repellat, perferendis ab. Porro quidem vel repellat doloribus praesentium eligendi incidunt commodi non. Natus facere ullam nostrum vel unde dolor odit quam explicabo exercitationem ducimus magnam eligendi tenetur, id dicta!",
    audioSrc: "/placeholder.mp3"
  }

  if (!theme) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

  return (
    <main className="min-h-screen p-[40px] flex gap-[100px]">
      <section>
        <h2 className="text-2xl font-sans">Nom de l'arme : {data.title}</h2>
        <h3 className="text-2xl mt-[30px] font-sans">Description de l'arme :</h3>
        <p>{data.description}</p>
      </section>
      <section className="flex flex-col gap-[30px]">
        <ImageLoader id={id} />
        <audio controls>
          <source src={data.audioSrc} type="audio/mpeg" />
        </audio>
      </section>
    </main>
  )
}