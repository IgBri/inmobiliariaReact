function ItemListContainer (props) {
    return (
        <div style={{border: props.comoQuiero, width: props.width, height: props.height}}>
            {props.texto}
        </div>
    )
}

export default ItemListContainer