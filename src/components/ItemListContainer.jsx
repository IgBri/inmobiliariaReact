import { useEffect, useState } from "react"
//import ItemListPractica from "./ItemListPractica";
import "../css/ItemListContainer.css"
import { useParams } from "react-router-dom";
import { propiedades } from "../data/propiedades";
import ItemList from './ItemList';

function ItemListContainer () {
    /*//Variable de estado items
    const [items, setItems] = useState([])
    const {categoria} = useParams()

    //Llamada a la API con el hook useEffect
    useEffect(()=> {
        const url = 'https://dummyjson.com/products'
        const urlCategorias = `https://dummyjson.com/products/category/${categoria}`

        fetch(categoria ? urlCategorias : url)
        .then(res => res.json())
        .then(res => setItems(res.products))
    },[categoria])

    return(
        <div className="container">
            <ItemListPractica productos={items}/>
        </div>
    )*/

    const [propiedad, setPropiedad] = useState([])
    const {tipo} = useParams()

    //console.log(tipo)

    const url = propiedades
    const urlTipos = propiedades.filter(propi=> propi.tipo === tipo)
    console.log(propiedades)
    //console.log(urlTipos)

    const getPropiedades = (inmuebles) => new Promise((res, rej)=> {
        setTimeout(()=>{
            res(inmuebles)
        },500)
    })

    useEffect(()=>{
        getPropiedades(tipo ? urlTipos : url).then(data => setPropiedad(data))
    },[tipo])

    return(
        <ItemList propiedades={propiedad}/>
    )
}


export default ItemListContainer