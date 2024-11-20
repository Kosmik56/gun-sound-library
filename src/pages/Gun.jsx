import { useParams } from "react-router-dom";

export default function Home(){

  const {id} = useParams();

  return(
    <>
    <h1>Gun Page</h1>
    <p>{id}</p>
    </>
  )
}