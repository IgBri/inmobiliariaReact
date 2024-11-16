import ItemListContainer from "./components/ItemListContainer"
import Navbar from './components/Navbar'
import ItemDetailContainer from "./components/ItemDetailContainer"
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import Corretaje from "./components/Corretaje"
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/propiedades" element={<ItemListContainer/>}/>
        <Route path="/propiedadesCorretaje" element={<Corretaje/>}/>
        <Route path="/propiedades/tipo/:tipo" element={<ItemListContainer/>} />
        <Route path="/propiedades/detalle/:id" element={<ItemDetailContainer/>} />
        <Route path="/carrito" element={<Cart/>}/>
        <Route path="*" element={<div>La pagina no existe</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App