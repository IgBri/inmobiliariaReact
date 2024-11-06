import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
//import { propiedades } from "../data/propiedades";
import { cartContext } from "../context/cartContext";
import { getDetailPropertie } from "../firebase/db";

function ItemDetailContainer () {
    const [detail, setDetail] = useState([])
    const {id} = useParams()
    //const {getPropiedades} = useContext(cartContext)

    console.log(detail)

    useEffect(()=>{
        getDetailPropertie(id).then(res => setDetail(res))
    },[id])

    //Detail es un objeto
    //console.log(detail)

    return(
        <ItemDetail detail={detail} />
    )
}
export default ItemDetailContainer 