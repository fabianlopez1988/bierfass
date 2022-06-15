import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const SendOrder = () => {
  const [address, setAddress] = useState([]);
  const user = !!localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  useEffect(() => {
    axios.get(`http://localhost:8000/api/address/${user.id}`)
    .then((res) => {setAddress(res.data)});
  }, []);

  return (
    <div className="container">
      <h2>Envia tu orden</h2>
      <div class="row">
        <div class="col">
          <p>Selecciona tu direccion de entrega</p>
          <p>direcciones de los usuarios...</p>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="exampleFormControlInput1">
              A donde quieres que te llegue tu email de confirmacion
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></input>
          </div>
        </div>
        <div class="col">
          <p> Escoje tu metodo de pago</p>
          <form>
            <div>
              <div class="d-flex flex-row pb-3">
                <div class="d-flex align-items-center pe-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel1"
                    value=""
                    aria-label="..."
                    checked
                  />
                </div>
                <div class="rounded border d-flex w-100 p-3 align-items-center">
                  <p class="mb-0">
                    <i class="fab fa-cc-visa fa-lg text-primary pe-2"></i>Visa
                    Debit Card
                  </p>
                  <div class="ms-auto">************3456</div>
                </div>
              </div>

              <div class="d-flex flex-row">
                <div class="d-flex align-items-center pe-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel2"
                    value=""
                    aria-label="..."
                  />
                </div>
                <div class="rounded border d-flex w-100 p-3 align-items-center">
                  <p class="mb-0">
                    <i class="fab fa-cc-mastercard fa-lg text-dark pe-2"></i>
                    Mastercard Office
                  </p>
                  <div class="ms-auto">************1038</div>
                </div>
              </div>

              <div class="d-flex flex-row pb-3">
                <div class="d-flex align-items-center pe-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel1"
                    value=""
                    aria-label="..."
                    checked
                  />
                </div>
                <div class="rounded border d-flex w-100 p-3 align-items-center">
                  <p class="mb-0">
                    <i class="fab fa-cc-visa fa-lg text-primary pe-2"></i>
                    Efectivo
                  </p>
                  <div class="ms-auto">
                    <i class="bi bi-cash"></i>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="row">
        <button type="button" class="btn btn-default cart">
          Envia tu orden
        </button>
      </div>
    </div>
  );
};

export default SendOrder;