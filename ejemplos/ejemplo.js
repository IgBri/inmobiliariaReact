/*const getProduct = (x) => {
    return new Promise ((resolve, reject)=>{
        if (x) {
            resolve("se envio el parametro correctamente")
        }
        reject("falto el parametro")
    })
}


getProduct()
.then(response => console.log(response))
.catch(err => console.log(err))*/


const conteiner = document.getElementById("conteiner")

/*const autos = [
    { marca: "Toyota", modelo: "Corolla", año: 2020, precio: 18000 },
    { marca: "Honda", modelo: "Civic", año: 2019, precio: 17000 },
    { marca: "Ford", modelo: "Mustang", año: 2021, precio: 35000 },
    { marca: "Chevrolet", modelo: "Camaro", año: 2018, precio: 32000 },
    { marca: "Nissan", modelo: "Altima", año: 2022, precio: 25000 },
    { marca: "BMW", modelo: "Serie 3", año: 2020, precio: 40000 },
    { marca: "Mercedes-Benz", modelo: "Clase C", año: 2019, precio: 45000 },
    { marca: "Audi", modelo: "A4", año: 2021, precio: 42000 },
    { marca: "Volkswagen", modelo: "Jetta", año: 2018, precio: 15000 },
    { marca: "Kia", modelo: "Optima", año: 2022, precio: 24000 }
];*/

const autos = []

const getCars = () => new Promise ((res, rej) => {
    if (autos.length === 0){
        console.log(rej("El array esta vacio"))
    } else {
        setTimeout(()=> {
            res(console.log(autos))
        } , 3000)
    }

})

getCars()