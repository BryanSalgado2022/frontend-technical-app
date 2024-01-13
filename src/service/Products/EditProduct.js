import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
    const baseUrl = "http://localhost:8080/api/v1/";
  let navigate = useNavigate();

  const { id } = useParams();

  const [product, setProduct] = useState({
    Codigo: 0,
    Nombre: "",
    Caracteristicas: "",
    Valor: "",
    Divisa: "",
    Empresa: "",
  });

  const { codigo ,nombre, caracteristicas, valor, divisa, empresa } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(baseUrl + `producto/${id}`, product);
    navigate("/HomeProduct");
  };

  const loadProduct = async () => {
    const result = await axios.get(baseUrl +  `producto/${id}`);
    setProduct(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar empresa</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
              <label htmlFor="Codigo" className="form-label">
                Código
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="El codigo es automatico"
                defaultValue={0}
                name="codigo"
                value={codigo}
                onChange={(e) => onInputChange(e)}
              />
          </div>
            <div className="mb-3">
              <label htmlFor="Nombre" className="form-label">
                Nombre
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingresa el nombre del producto"
                name="nombre"
                value={nombre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Caracteristicas" className="form-label">
                Caracteristicas
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingresa las caracteristicas del producto"
                name="caracteristicas"
                value={caracteristicas}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Valor" className="form-label">
                Valor
              </label>
              <input
                type={"int"}
                className="form-control"
                placeholder="Ingresa el valor del producto"
                name="valor"
                value={valor}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Divisa" className="form-label">
                Divisa 
              </label>
              <input
                type={"int"}
                className="form-control"
                placeholder="Ingresa el codigo de la divisa"
                name="divisa"
                value={divisa}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Empresa" className="form-label">
                Empresa
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingresa el nit de la empresa"
                name="empresa"
                value={empresa }
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Actualizar
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}