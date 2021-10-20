import React, { useState, useEffect } from "react";
import "./App.css";
import { calcServiceUrl } from "./config/servicesUrl";
import axios from "axios";

function App() {
  const [a, setA] = useState(5);
  const [b, setB] = useState(3);
  const [resultado, setResultado] = useState();

  const calcularSoma = () => {
    setTimeout(() => {
      axios.post(`${calcServiceUrl}/sum`, { a, b }).then(({ data }) => setResultado(data));
    }, 5000);
  };

  useEffect(calcularSoma, [a, b]);

  return (
    <>
      {resultado ? (
        <div>
          Valor A: <input type="text" value={a} onChange={(event) => setA(event.target.value)} />
          Valor B: <input type="text" value={b} onChange={(event) => setB(event.target.value)} />
          Resultado: <input type="text" value={resultado} readOnly />
          <button onClick={calcularSoma}>Calcular</button>
        </div>
      ) : (
        <div>img carregando.... aguarde</div>
      )}
    </>
  );
}

/*
const fetchJson = (...args) => fetch(...args).then((response) => response.json());


function DataHoraAtual() {
  const [horaAtual, setHoraAtual] = useState(`clique no botão para puxar a data hora atual.`);

  const pegarDoBackendDataHoraAtual = () =>
    fetchJson(currentDateTimeServiceUrl).then(setHoraAtual);

  return (
    <div>
      A hora atual é '{horaAtual}', <button onClick={pegarDoBackendDataHoraAtual}>atualizar hora</button>
    </div>
  );
}

function App() {
  return (
    <>
      <DataHoraAtual />
      <DataHoraAtual />
      <DataHoraAtual />
      <DataHoraAtual />
      <DataHoraAtual />
    </>
  );
}

*/

export default App;
