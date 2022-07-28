import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({ category }) => {

    /* ██  DEFINICION  ██

•1 Guarda el valor ed images y loading del resultado recibido por 
    useFetchGifs. El cual se encarga de crear un array de objetos imagen,
    con la petición de fetch, en base al valor recibido (category).
    Además cambia el valor de loading según si está o no cargando imagenes.
•2 Comprueba si el valor de loadin es verdadero, si es así,
    imprime un mensaje para definir que todavía está cargando.
•3 Imprime el DOM con un título y una list, en donde usa .map
    para recorrer el array images. A cada ciclo ejecuta el componente
    GifItem, al que le pasa una destructuración de imagen {title y url}
    Este componente se limita a recoger esos datos y mostrar una ficha
    donde se muestre la imagen y un pequeño texto con el title debajo.
*/

//•1 
     const { images, loading } = useFetchGifs( category );

    // const [images, setImages] = useState([]);
    // const [loading, setLoading] = useState(false);

    // const getImages = async() => {
    //     setLoading(true);
    //     const newImages = await getGifs( category );
    //     setImages(newImages);
    //     setLoading(false);
    // }

    //  useEffect(() => {
    //     getImages();
    //    }, [])
    
       //getGifs: objec with: title, id, url.
  
//•2
    if (loading) {
        return <h3>Gifs is loading...</h3>;
    }
    // if (!Array.isArray(images)) {
    //     return <p>There was an error loading your data!</p>;
    // }

//•3
    return (
        <>
            <h3 className="title-grid">{ category }</h3>
            <ul className="card-grid">
                {   
                    images.map( image => (
                        // <li key={ image.id}> {image.title} </li>
                        <GifItem 
                            key= { image.id } 
                            { ...image } //Envia las props como url, title, id.
                        />
                    ))
                }

            </ul>

        </>
    )
}

