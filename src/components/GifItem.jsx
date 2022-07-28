
// Recibe los elementos de image y los aplica en un DOM.

export const GifItem = ({ title, url }) => {

  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>


    </div>
    
  )
}
