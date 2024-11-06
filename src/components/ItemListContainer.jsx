import { useEffect, useState, useContext } from "react"
import "../css/ItemListContainer.css"
import { useParams } from "react-router-dom";
//import { propiedades } from "../data/propiedades";
import ItemList from './ItemList';
import Loader from "./Loader";
//import { cartContext } from "../context/cartContext";
import {getProperties, getTypeProperties} from "../firebase/db.js"

function ItemListContainer () {
    const [propiedad, setPropiedad] = useState([])
    const {tipo} = useParams()
    //const {getPropiedades} = useContext(cartContext)

    //const urlTipos = propiedades.filter(propi=> propi.tipo === tipo)

    /*const getPropiedades = (inmuebles) => new Promise((res, rej)=> {
        if (inmuebles.length !== 0) {
            setTimeout(()=>{
                res(inmuebles)
            },500)
        } else {
            rej(console.log("error"))
        }
    })*/

    useEffect(()=>{
        if(!tipo){
            getProperties().then(res => setPropiedad(res))
        } else {
            getTypeProperties(tipo).then(res => setPropiedad(res))
        }
    },[tipo])

    console.log(propiedad)

    return(
        //<ItemList propiedades={propiedad}/>
        <>
            {propiedad.length > 0 ? <ItemList properties={propiedad}/> : <Loader />}
        </>
    )
}

export default ItemListContainer