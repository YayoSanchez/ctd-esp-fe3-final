import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardList from '../Components/CardList'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentists, setDentists] = useState(null)
  const [selectedDentist, setSelectedDentist] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users/")
      const data = await response.json()
      setDentists(data);

      if(id){
        const dentist = data.find((dentist)=> dentist.id === parseInt(id));
        setSelectedDentist(dentist);
      }
      else{
        setSelectedDentist(null)
      }
    }catch(error){
      console.log("Error fetching data")
    }
  }
    fetchData();
  }, [id])
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  if (!dentists) return <p>Loading...</p>;
  //if (!dentists) return <p>No dentist found with ID {id}</p>;

  return (
    <div>
      <h1>{id ? "Detail Dentist" : "All Dentist"}</h1>
      {id && selectedDentist ? (
        <div className = "grid">
          <div>ID: {selectedDentist.id}</div>
          <div>Name: {selectedDentist.name}</div>
          <div>Username: {selectedDentist.username}</div>
        </div>
      ) : (
        <CardList dentists={dentists} />
      )}
    </div>
  );
};

export default Detail