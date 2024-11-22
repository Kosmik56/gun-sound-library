import { Link } from "react-router-dom";

export default function Navbar() {

  const baseUrl = "/gun-sound-library";

  return (
    <nav className="h-[80px] p-[20px] flex items-center gap-[90px] w-fit font-sans">
      <h1 className="text-2xl font-semibold">
        Gun Sound Library
      </h1>
      <ul className="flex text-xl gap-[20px] underline">
        <li>
          <Link to={baseUrl + "/"}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to={baseUrl + "/about"}>
            À propos
          </Link>
        </li>
      </ul>
    </nav>
  )
}