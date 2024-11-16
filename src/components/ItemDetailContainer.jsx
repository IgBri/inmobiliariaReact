import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
//import { cartContext } from "../context/cartContext";
import { getDetailPropertie } from "../firebase/db";

function ItemDetailContainer () {
    const [detail, setDetail] = useState([]) //estado donde almacenamos el detalle de cada propiedad, o sea, sus valores
    const {id} = useParams()
    //const {getPropiedades} = useContext(cartContext)

    useEffect(()=>{
        getDetailPropertie(id).then(res => setDetail(res))
    },[id])

    //Detail es un objeto

    return(
        <ItemDetail detail={detail} />
    )
}
export default ItemDetailContainer 