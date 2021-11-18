
import React, {useState, useEffect} from 'react';
import './Movies.css';
import axios from 'axios';

const Movies = () => {

    //Hooks
    const [peliculas, setPeliculas] = useState([]);

    //El componente se ha montado, entonces ejecuta el primer useEffect (con corchetes vacios).
    useEffect(()=>{
        //llamamos a la API y nos traemos las películas
        traePelis();
    },[]);

    useEffect(()=>{
        console.log("Las películas ahora valen....",peliculas);
    });

    const traePelis = async()=> {
        let resultado = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=51c1099989a6923f3d12154210fc2cf7&language=en-US&page=1");
        setPeliculas(resultado.data.results);
    }

    const escogePelicula = (escogida) => {
        console.log(escogida);
    }

    if(peliculas[1]?.title !== ''){
        return (
            <div>
                {peliculas.map((peli)=>{
                    return (
                        <div key={peli.id} className="movies">
                            {peli.title};
                            <img className="poster" alt={peli.id} 
                            src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`} 
                            onClick={()=>escogePelicula(peli)}/>
                            {peli.overview};
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div>estoy en home</div>
        )
    }

    
};

export default Movies;