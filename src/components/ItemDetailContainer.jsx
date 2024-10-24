import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { propiedades } from "../data/propiedades";

function ItemDetailContainer () {
    const [detail, setDetail] = useState("")
    const {id} = useParams()

    /* useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => setDetail(res));
    },[id])*/

    const url = propiedades
    const urlId = propiedades.find(propiedad=> propiedad.id == id)
    console.log(propiedades)
    console.log(urlId)

    const getPropiedades = (inmuebles) => new Promise((res, rej)=> {
        setTimeout(()=>{
            res(inmuebles)
        },500)
    })

    useEffect(()=>{
        getPropiedades(id ? urlId : url).then(data => setDetail(data))
    },[id])

    console.log(detail)

    return(
        <ItemDetail detail={detail} />
    )
}
export default ItemDetailContainer 