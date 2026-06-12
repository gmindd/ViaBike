"use client";

import { useRegistarMotor } from "./MotorDeScroll";

/* Régua de telemetria: odómetro 0.0→58.0 km + velocímetro do scroll */
export function Telemetria() {
  const refKm = useRegistarMotor("telKm");
  const refVel = useRegistarMotor("telVel");
  const refBarra = useRegistarMotor("telBarra");

  return (
    <aside className="telemetria" aria-label="Progresso da página">
      <div className="telemetria__bloco">
        <div className="telemetria__rotulo">km</div>
        <div ref={refKm} className="telemetria__valor">0.0</div>
      </div>
      <div className="telemetria__barra">
        <div ref={refBarra} className="telemetria__barra-progresso" />
      </div>
      <div className="telemetria__bloco">
        <div className="telemetria__rotulo">vel</div>
        <div ref={refVel} className="telemetria__valor telemetria__valor--vel">0</div>
      </div>
    </aside>
  );
}
