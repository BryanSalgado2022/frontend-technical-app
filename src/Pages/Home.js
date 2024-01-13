import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  
    const baseUrl = "http://localhost:8080/api/v1/";
    const [companies, setCompanies] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    const result = await axios.get(baseUrl + "empresas");
    setCompanies(result.data);
  };

  const deleteCompany = async (nit) => {
    await axios.delete(baseUrl + `empresa/${nit}`);
    loadCompanies();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">NIT</th>
                <th scope="col">Nombre</th>
                <th scope="col">Direccion</th>
                <th scope="col">Telefono</th>
            </tr>
          </thead>
          <tbody>
            
            {companies.map((company, index) => (
              <tr>
                <th key={index}>{index + 1}</th>
                <td>{company.nit}</td>
                <td>{company.nombre}</td>
                <td>{company.direccion}</td>
                <td>{company.telefono}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewcompany/${company.nit}`}
                  >
                    Ver
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editcompany/${company.nit}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteCompany(company.nit)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}