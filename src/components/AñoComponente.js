import React, { useState } from "react";
import PropTypes from "prop-types";

export const AñoComponente = ({ year }) => {
  const [actualYear, setYear] = useState(year);
  const nextYear = (e, actualYear) => {
    let nextYear = actualYear + 1;
    setYear(nextYear);
  };
  const lastYear = (e, actualYear) => {
    let lastYear = actualYear - 1;
    setYear(lastYear);
  };
  const changeYear = (e, newYear) => {
    setYear(parseInt(newYear));
  };
  return (
    <div>
      <h2>Componente para el año</h2>
      <p>
        Año actual: <strong>{actualYear}</strong>
      </p>
      <hr />
      <button onClick={(e) => nextYear(e, actualYear)}>Próximo año</button>
      <button onClick={(e) => lastYear(e, actualYear)}>Año anterior</button>
      <hr />
      <input
        type="number"
        onChange={(e) => changeYear(e, e.target.value)}
        placeholder="Ingresa el año"
      />
    </div>
  );
};

AñoComponente.prototype = {
  actualYear: PropTypes.number.isRequired,
};
