"use client";

import { useRegistarMotor } from "./MotorDeScroll";

/* Fita de marcas — skew proporcional à velocidade do scroll */
export function FitaMarcas() {
  const refFaixa = useRegistarMotor("fita");

  const marcas = (
    <span>
      Focus <b>·</b> Cervélo <b>·</b> Pinarello <b>·</b> Orbea <b>·</b> 3T <b>·</b> Shimano <b>·</b> Mavic <b>·</b> Sidi{" "}
      <b>·</b> Giro <b>·</b> Endura <b>·</b>
    </span>
  );

  return (
    <div className="fita" aria-hidden="true">
      <div ref={refFaixa} className="fita__faixa">
        {marcas}
        {marcas}
      </div>
    </div>
  );
}
