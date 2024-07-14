import './App.css'
import { Routes, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar"
import Home from './Pages/Home'
import Footers from './Pages/Footers';
import Properties from './Pages/Properties';
import ListingPage from './Pages/ListingPage';
import PropertyDetails from './component/HomeStays/PropertyDetails';
const App = () => {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* Listing form */}
        <Route path='/list' element={<ListingPage />}></Route>
        {/* Get all properties */}
        <Route path='/properties' element={<Properties />}></Route>
        {/* get single property */}
        <Route path='/property/:id' element={<PropertyDetails />}></Route> //add :id to send property id
      </Routes>
      <Footers />
    </div>
  )
}

export default App;