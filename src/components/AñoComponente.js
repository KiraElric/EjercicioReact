import React, { useState } from "react";
import PropTypes from "prop-types";

export const AñoComponente = ({ actualYear }) => {
  const [year, setYear] = useState(actualYear);
  const nextYear = (e) => {
    let nextYear = year + 1;
    setYear(nextYear);
  };
  const lastYear = (e) => {
    let lastYear = year - 1;
    setYear(lastYear);
  };
  const changeYear = (e) => {
    let newYear = parseInt(e.target.value);
    setYear(newYear);
  };
  return (
    <div>
      <h2>Componente para el año</h2>
      <p>
        Año actual: <strong>{year}</strong>
      </p>
      <hr />
      <button onClick={lastYear}>Año anterior</button>
      <button onClick={nextYear}>Próximo año</button>
      <hr />
      <input type="number" onChange={changeYear} placeholder="Ingresa el año" />
    </div>
  );
};

AñoComponente.prototype = {
  actualYear: PropTypes.number.isRequired,
};
