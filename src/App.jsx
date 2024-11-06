import ItemListContainer from "./components/ItemListContainer"
import Navbar from './components/Navbar'
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer"
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/propiedades" element={<ItemListContainer/>}/>
        <Route path="/propiedades/:tipo" element={<ItemListContainer/>} />
        <Route path="/propiedades/:modalidad" element={<ItemListContainer/>} />
        <Route path="/propiedades/:id" element={<ItemDetailContainer/>} />
        <Route path="*" element={<div>La pagina no existe</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App