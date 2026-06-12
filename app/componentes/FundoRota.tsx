"use client";

import { useRegistarMotor } from "./MotorDeScroll";

const TRACADO =
  "M -40 120 C 220 80, 300 260, 520 230 S 880 120, 1040 240 S 760 520, 540 500 S 160 420, 60 600 S 420 820, 700 760 S 1000 860, 1060 940";

/* Fundo interativo: rota + colinas + linhas de velocidade */
export function FundoRota() {
  const refTraco = useRegistarMotor("traco");
  const refCiclista = useRegistarMotor("ciclista");
  const refHalo = useRegistarMotor("halo");
  const refColinaTras = useRegistarMotor("colinaTras");
  const refColinaFrente = useRegistarMotor("colinaFrente");

  return (
    <div className="fundo" aria-hidden="true">
      <svg className="fundo__rota" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        {/* Traço base (estrada por percorrer) e traço ativo (desenhado pelo scroll) */}
        <path className="rota__traco-base" d={TRACADO} pathLength={1000} />
        <path ref={refTraco} className="rota__traco" d={TRACADO} pathLength={1000} />
        {/* O "ciclista" que viaja ao longo da rota */}
        <circle ref={refHalo} className="rota__ciclista-halo" r={14} cx={-40} cy={120} />
        <circle ref={refCiclista} className="rota__ciclista" r={6} cx={-40} cy={120} />
      </svg>

      {/* Colinas do Minho em parallax */}
      <svg
        ref={refColinaTras}
        className="fundo__colina fundo__colina--tras"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        height={220}
      >
        <path fill="currentColor" d="M0 220 L0 140 Q180 60 360 120 T720 90 T1080 130 T1440 80 L1440 220 Z" />
      </svg>
      <svg
        ref={refColinaFrente}
        className="fundo__colina fundo__colina--frente"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        height={160}
      >
        <path fill="currentColor" d="M0 160 L0 100 Q240 30 480 90 T960 60 T1440 100 L1440 160 Z" />
      </svg>

      <div className="fundo__velocidade" />
    </div>
  );
}
