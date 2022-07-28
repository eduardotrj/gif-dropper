
/*
Recoge los elementos de la api, con un limite ajustable.
Espera a recibir la respuesta a esta peticion.
Cuando lo recibe, lo convierte en json.
lo encaupsula en un objeto guardando solo id, title y url.

*/



export const getGifs = async( category ) => {

    const apiKey = 'm3FxJ4VvA3bfr8mWw8M9rJtCkX46jy9D';
    const limitGifs = 10
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=${ limitGifs }`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))


    return gifs

    // console.log(gifs)
}