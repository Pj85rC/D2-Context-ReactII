import "../assets/css/galeria.css";
import Heart from "./Heart";

import { useContext,useState } from "react";

import context from "../context";

export default function Home() {
  const { photos, setPhotos } = useContext(context);

  const captureClick =(id)=>{
      const indexLiked = photos.findIndex(par => par.id === id) 
      photos[indexLiked].liked = photos[indexLiked].liked ? false : true ; 
      setPhotos([...photos]);
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {photos.map((i) => {
        return (
          <div className="foto" key={i.id}>
            <a  href="#" onClick= {() => captureClick(i.id)} ><Heart filled={i.liked}/></a>
            <img src={i.src.tiny} alt={i.alt} />
          </div>
        );
      })}
    </div>
  );
}
