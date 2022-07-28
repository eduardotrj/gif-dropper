import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';


/* ██  DEFINICION  ██

•1 Se crea un hook que recibe category.
    Se establece un useState para generar un array con las imáenes
    y otro para definir cuando se está realizando la carga.
    Se crea una funct, async, que coge cada imagen para añadirla al array
    Y cuando temrina, desactiva Loading.
•2 Usa useEffect para coger las imagenes una unica vez cada vez que esta
    completo el array.

Devuelve imagenes(array) y el valor de loading(bool)

*/

//•1
export const useFetchGifs = ( category) => {


    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setLoading(false);
    }
   // •2
     useEffect(() => {
        getImages();
       }, [])


    return {
        images,                 // → images: images,
        loading
    }
  
}
