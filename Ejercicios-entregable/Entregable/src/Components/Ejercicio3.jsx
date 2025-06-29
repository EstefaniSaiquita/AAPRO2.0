import React, { useState } from 'react';

export const CapturarTexto= () => {

  const [texto, setTexto] = useState(" ")
  const HandleCambio = (event) => setTexto(event.target.value)

  return (
    <div>
      <input type="text" onChange={HandleCambio} placeholder="escribi" />
      <p>ingresaste: {texto}</p>
    </div>
  )
}