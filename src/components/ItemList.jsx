import Item from "./Item"
import "../css/ItemList.css"
function ItemList ({propiedades}) {
    return(
        <>
            <div className="cardPropiedad">
                {propiedades.map(propiedad=>
                    <Item item={propiedad} key={propiedad.id}/>
                )}
            </div>
        </>
    )
}

export default ItemList