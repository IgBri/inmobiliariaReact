import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import Loader from "./Loader";
//import { cartContext } from "../context/cartContext";
import {getProperties, getTypeProperties} from "../firebase/db.js"

function ItemListContainer () {
    const [propiedad, setPropiedad] = useState([]) //estado donde almacenamos las propiedades recibidas de la db
    const {tipo} = useParams() //parametro tipo obtenido desde la propiedad de cada producto recibido de la db
    //const {getPropiedades} = useContext(cartContext)

    useEffect(()=>{
        if(!tipo){
            getProperties().then(res => setPropiedad(res))
        } else {
            getTypeProperties(tipo).then(res => setPropiedad(res))
        }
    },[tipo])

    return(
        <>
            {propiedad.length > 0 ? <ItemList properties={propiedad}/> : <Loader />}
        </>
    )
}

export default ItemListContainer