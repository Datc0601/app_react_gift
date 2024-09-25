//hacemos las debidas importaciones

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header'
import Card from './components/Card'
import './App.css'


//en esta constante almacenamos nuestra key de la API
const API_KEY = 'iVR9fjWOS8kAalSYPLpHKdINjr15Y3tQ';


const App = () =>{

  //Inicializamos nuestros estados, ambos vacios
  const [gifs, setGifs] = useState([]);
  const [busqueda, setBusqueda] = useState('');


  //este se ejecuta cuando hay un cambio en la busqueda
  useEffect(()=>{
    if(busqueda){ //si busqueda existe, es decir que no este vacio
      fetchGifs(busqueda); //llama a la funcion para traer los terminos conforme a la busqueda
    }
  },[busqueda])//el efecto debe ejecutarse cada vez que haya un cambio en la busqueda


  const fetchGifs = async (query) =>{
    try {
      // Hace una petición GET a la API  con el término de búsqueda (`query`) y la API Key. `limit=10` establece que se obtendrán 10 GIFs.
      const response = await axios.get(`/.netlify/functions/giphy?q=${query}`);
      setGifs(response.data.data);  // Si la petición es exitosa, almacena los datos de los GIFs en el estado `gifs`.
    } catch (error) {
      console.error('Error al obtener los datos de la API', error);// Si ocurre un error durante la petición, lo imprime en la consola.
    }
  };

  return(
    <div>
       {/* se le pasa la función `setBusqueda` como prop. 
      Esta función será llamada cuando el usuario escriba en el campo de búsqueda.  */}
        <Header onSearch={setBusqueda}/>
        <div className="gif-container">
         {gifs.map(gif => (   // Para cada GIF en el estado `gifs`, renderiza un componente `Card` pasándole el GIF como prop.
          <Card key={gif.id} gif={gif}/> // `key={gif.id}` es necesario para que React pueda identificar cada componente de la lista de forma única.
         ))}
        </div>
    </div>
  );
};
export default App;