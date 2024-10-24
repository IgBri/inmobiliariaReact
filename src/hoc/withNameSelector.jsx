import { useEffect } from "react";


//Parte 1: HOC propiamente dicho, que es una funcion
export const withNameSelector = (Component) => {
    //Parte 2: Componente que se crea dentro del HOC
    function ComponentWithNameSelector () {
        //Funcionalidades agregadas al componente
        useEffect(()=>{console.log("Selector de nombre")},[])
        return(
            <Component/>
        )
    }

    return ComponentWithNameSelector
}