import { useEffect, useState } from "react";

export default function ImageLoader({ id }) {

  const [image, setImage] = useState(null);

  useEffect(() => {
    const url = "https://en.wikipedia.org/w/api.php";

    const paramsSearch = new URLSearchParams({
      action: "query",
      list: "search",
      srsearch: id,
      format: "json",
      origin: "*",
    });

    fetch(`${url}?${paramsSearch}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.query.search.length > 0) {
          const pageTitle = response.query.search[0].title;

          const paramsImage = new URLSearchParams({
            action: "query",
            format: "json",
            origin: "*",
            prop: "pageimages",
            titles: pageTitle,
            pithumbsize: "500",
          });

          return fetch(`${url}?${paramsImage}`);
        } else {
          throw new Error("Aucun résultat trouvé.");
        }
      })
      .then((response) => response.json())
      .then((response) => {
        const page = Object.values(response.query.pages)[0];
        if (page && page.thumbnail) {
          setImage(page.thumbnail.source);
        } else {
          console.log("Aucune image trouvée pour cette page.");
        }
      })
      .catch((error) => console.error("Erreur :", error));
  }, []);

  return (
    <img className="w-full aspect-video object-center object-cover" src={image ? image : "/placeholder.png"} alt={id} />
  )
}