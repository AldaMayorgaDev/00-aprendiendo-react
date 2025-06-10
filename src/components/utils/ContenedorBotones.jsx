import { BotonCrearCuenta } from "./BotonCrearCuenta";
import { BotonInicioSesion } from "./BotonInicioSesion";

export const ContenedorBotones = () => {
  return (
    <div className="row mt-5 bg-info">
      <div className="col-12 d-flex flex-column flex-md-row gap-2 justify-content-around">
        <BotonCrearCuenta />
        <BotonInicioSesion />
      </div>
    </div>
  );
};
