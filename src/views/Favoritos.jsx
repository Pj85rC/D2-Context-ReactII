import "../assets/css/galeria.css";

import { useContext } from "react";

import context from "../context";

export default function Favoritos() {
  const { photos} = useContext(context);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {photos.filter((i) => i.liked === true)
          .map((i) => {
            return (
              <div className="foto" key={i.id}>
                <img src={i.src.tiny} alt={i.alt} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
