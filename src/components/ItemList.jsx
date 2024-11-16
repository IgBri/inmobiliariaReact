import Item from "./Item"

function ItemList ({properties}) {
    //Array con las propiedades filtradas
    return(
        <>
            <div className="cardPropiedad">
                {properties.map(propiedad=>
                    <Item item={propiedad} key={propiedad.id}/>
                )}
            </div>
        </>
    )
}

export default ItemList