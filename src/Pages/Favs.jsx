import React from "react";
import Card from "../Components/Card";
import {useState, useEffect} from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if(storedFavs){
      setFavorites(JSON.parse(storedFavs));
    }
  }, [])

  if(favorites.length === 0){
    return <p>Hasta ahora no hay ningún favorito</p>
  }

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favorites.map((fav)=>(
          <Card key = {fav.id} id = {fav.id} name = {fav.name} username = {fav.username}/>
        ))}
      </div>
    </>
  );
};

export default Favs;
