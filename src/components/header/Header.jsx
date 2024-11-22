import Navbar from "./Navbar";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {

  return (
    <header className="flex justify-between">
      <Navbar />
      <ThemeSwitcher />
    </header>
  )
}