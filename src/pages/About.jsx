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

  const header_style = "text-[32px] font-sans";
  const paragraph_style = "my-[30px] text-[20px] tracking-wide text-pretty";

  return (
    <main className="px-[40px] my-[40px]">
      <h2 className={header_style}>👉 Qui sommes-nous ?</h2>
      <p className={paragraph_style}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quod dolores illum odio rerum est sint harum dignissimos dolorem maxime unde, quibusdam porro tenetur eveniet cum aspernatur commodi iusto neque corrupti corporis eius officiis. Reprehenderit soluta iure doloribus natus eaque maxime? Itaque praesentium similique laudantium.</p>
      <h2 className={header_style}>😎 Notre mission</h2>
      <p className={paragraph_style}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quod dolores illum odio rerum est sint harum dignissimos dolorem maxime unde, quibusdam porro tenetur eveniet cum aspernatur commodi iusto neque corrupti corporis eius officiis. Reprehenderit soluta iure doloribus natus eaque maxime? Itaque praesentium similique laudantium.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio quibusdam ab fugiat deleniti architecto atque voluptatibus voluptas maxime corrupti.
      </p>
      <h2 className={header_style}>🌟 Pourquoi nous sommes génials ?</h2>
      <p className={paragraph_style}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quod dolores illum odio rerum est sint harum dignissimos dolorem maxime unde, quibusdam porro tenetur eveniet cum aspernatur commodi iusto neque corrupti corporis eius officiis. Reprehenderit soluta iure doloribus natus eaque maxime? Itaque praesentium similique laudantium.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </main>
  )
}