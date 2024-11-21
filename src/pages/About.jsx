import { useSelector } from "react-redux";

export default function About() {

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
      <h1>About</h1>
    </>
  )
}