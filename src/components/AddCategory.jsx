
import { useState } from 'react';


/* ██  DEFINICION  ██

•1 La función recibe un prop que tiene una funct que recibe un evento.
•2 Se crea un hook useState para administrar el texto del input. 
•3 Se crea una función para cambiar el estado del hook(input) con el evento.
    en concreto, con el valor introducido en el target del evento
    Para guardar cada letra introducida.
•4 Se define onSumit, recibiendo el evento con todo el string.
    Primero se evita que se actualice la pág con preventDefault()
    Se comprueba que el string no esté vacio. Si lo esta escapa.
    Con trim se elimina espacios al inicio y al final.
    Ejecuta el prop onNewCat… enviando el valor del input.
    Esto permite no requerir de funciones externas a este componente.
    Se resetea de nuevo el valor del input ''.
•5 Se retorna (imprime) DOM con un form y un input.
    Este form dispara la funcion onSubmit con el valor input.
    El input tiene valor controlado por el useState •2
    Cada vez que cambia (nuevas letras), dispara onInputChange •3
*/

//•1 function AddCategory({setCategories}) ☑
export const AddCategory = ({onNewCategory}) => {
//•2
    const [inputValue, setinputValue] = useState('');

    //•3 Get all keywords.
    const onInputChange = (event) => {
        setinputValue( event.target.value );
    }

    //•4 get the total.
    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 0) return; 
        //setCategories(categories => [ inputValue, ...categories ] )
        onNewCategory( inputValue.trim() )
        setinputValue('');
    }
    //•5
    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
            type="text"
            placeholder="Search gifs"
            value={ inputValue }
            onChange={(event) => onInputChange(event)}
            />
        </form>
        
    )
}

