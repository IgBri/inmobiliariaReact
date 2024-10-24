import ItemListContainer from "./components/ItemListContainer"
import Navbar from './components/Navbar'
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/tipo/:tipo" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="*" element={<div>La pagina no existe</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App