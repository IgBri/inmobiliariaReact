import './App.css'
//import Button from "./components/Button"
import Navbar from './components/Navbar'
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <>
      <Navbar 
      display = "flex"
      flexDirection = "row"
      justifyContent = "space-between"
      padding = "10px"
      />
      <ItemListContainer
      texto = "Aqui iran los productos"
      comoQuiero = " 2px outset gray"
      width = "100%"
      height = "800px"
      />
    </>
  )
}

export default App


/*<Button 
color="orange" 
fontSize="20px"
borderRadius="15px"
label="Click" 
callback= {()=> console.log("click")}
/>*/

/*      <Navbar 
      border="2px solid white"
      />*/ 