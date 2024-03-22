import React from "react";
import '../styles/Testimonio.css';

function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio"
      src={require(`../img/testimonio-${props.imagen}.png`)}
      alt="Foto de Emma"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <b>{props.nombre}</b> in {props.pais}
        </p>
        <p className="cargo-testimonio">
          Software Engineer at <b>{props.empresa}</b>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;