import {Link} from 'react-router-dom'

const Card = ({ name, username, id }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const storedFavs = localStorage.getItem("favorites");
    const arrayFavs = storedFavs ? JSON.parse(storedFavs) : []

    const newFav = {name, username, id}
    const alreadyAFav = arrayFavs.some((fav)=> fav.id === id);
    if(alreadyAFav){
      alert("Este elemeto ya es un Favorito");
      return;
    }

    arrayFavs.push(newFav);

    localStorage.setItem("favorites", JSON.stringify(arrayFavs));
    console.log("Fav agregado")
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <div>
        <Link to = {`/dentist/${id}`}>
        <h3>{name}</h3>
        </Link>
        <h3>UserName: {username}</h3>
        <p>ID: {id}</p>
      </div>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button className = "favButton" onClick={addFav}>Add fav</button>
    </div>
  );
};

export default Card;

