import './App.css';
import Navbar from './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import HomeProduct from "./Pages/HomeProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCompany from "./service/Companies/AddCompany";
import EditCompany from "./service/Companies/EditCompany";
import ViewCompany from "./service/Companies/ViewCompany";
import AddProduct from "./service/Products/AddProduct";
import EditProduct from "./service/Products/EditProduct";
import ViewProduct from "./service/Products/ViewProduct";
import HomeStock from './Pages/HomeStock';
import AddStock from "./service/Stock/AddStock";


function App() {
  return(
    <div className='App'>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addcompany" element={<AddCompany />} />
          <Route exact path="/editcompany/:id" element={<EditCompany />} />
          <Route exact path="/viewcompany/:id" element={<ViewCompany />} />

          <Route exact path="/HomeProduct" element={<HomeProduct />} />
          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route exact path="/editproduct/:id" element={<EditProduct />} />
          <Route exact path="/viewproduct/:id" element={<ViewProduct />} />

          <Route exact path="/HomeStock" element={<HomeStock />} />
          <Route exact path="/addstock" element={<AddStock />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;