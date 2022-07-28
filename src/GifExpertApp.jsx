
import { useState } from "react"
import React from 'react'
import {AddCategory, GifGrid} from './components';


/* ██  DEFINICION  ██

•1 Se declara useState para controlar el array de elementos.
•2 Se define OnAddCategory, para añadir al useState •1
    los elementos recibidos por parámetro.
    Se comprueba que la categoria buscada no haya sido escrita antes.
•3 Se retorna elementos DOM, con un h1. Un componente que:
    tiene una propiedad con una función que permite pasar el
    evento a la función onAddC… •2
    siempre que se actualiza la func del comp, se recibe el evento
    y se actualiza el estado del •2. El evento tiene el valor final del input.
•4 Un list que imprime como li cada elemento del array categories.
    Se le asigna un valor key que debe ser único, para evitar errores.

*/


console.log("ok")
function GifExpertApp() {
   // •1
  console.log("ok")
  const [categories, setCategories] = useState(['cat']);
   // •2
  const onAddCategory = ( newCategory ) => {
    

    if(!categories.findIndex(category => category.toLowerCase() === newCategory.toLowerCase())) return;

    setCategories( [newCategory, ...categories] ); 
    //setCategories( [...Category, 'kiwi'] ); Funciona 
    //setCategories( cat => [ ...cat, 'kiwi' ]); Opcional.
    // setCategories( categories.push('Kiwi') ); No funciona porque no sustituye el valor, solo modf.
  }
   // •3
  return (
    <>
        {/* Titulo */}
        <h1>Gif Dropper</h1>

        {/* Input */}
        <AddCategory 
            onNewCategory={ event => onAddCategory(event) } 
        />

        {/* •4 */}
        {/* Listado resultados */}
        { categories.map( (category) => (
            <GifGrid key={ category} category={ category }/>
        ) ) }
    </>
  )
}

export default GifExpertApp