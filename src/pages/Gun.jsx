import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Home() {

  const { id } = useParams();
  const theme = useSelector((state) => state.theme.isLight);

  if (!theme) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

  return (
    <>
      <h1>Gun Page</h1>
      <p>{id}</p>
    </>
  )
}