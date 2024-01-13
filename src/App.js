import './App.css';
import Navbar from './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCompany from "./service/Companies/AddCompany";
import EditCompany from "./service/Companies/EditCompany";
import ViewCompany from "./service/Companies/ViewCompany";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;