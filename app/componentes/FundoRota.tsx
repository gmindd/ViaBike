"use client";

import { useRegistarMotor } from "./MotorDeScroll";

const TRACADO =
  "M -40 120 C 220 80, 300 260, 520 230 S 880 120, 1040 240 S 760 520, 540 500 S 160 420, 60 600 S 420 820, 700 760 S 1000 860, 1060 940";

/* Cristas das colinas (só a linha de topo, para as bicicletas seguirem) */
const CRISTA_TRAS = "M0 140 Q180 60 360 120 T720 90 T1080 130 T1440 80";
const CRISTA_FRENTE = "M0 100 Q240 30 480 90 T960 60 T1440 100";

function Bicicleta() {
  return (
    <svg viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx={4.5} cy={11.5} r={3.5} />
      <circle cx={19.5} cy={11.5} r={3.5} />
      <path d="M4.5 11.5 L9 5.5 L14.5 5.5 M19.5 11.5 L14.5 5.5 M9 5.5 L7.5 3.5 H10.5 M14.5 5.5 L16 3 H17.5" />
    </svg>
  );
}

/* Fundo interativo: rota + colinas + bicicletas + linhas de velocidade */
export function FundoRota() {
  const refTraco = useRegistarMotor("traco");
  const refCiclista = useRegistarMotor("ciclista");
  const refHalo = useRegistarMotor("halo");
  const refColinaTras = useRegistarMotor("colinaTras");
  const refColinaFrente = useRegistarMotor("colinaFrente");
  const refCristaTras = useRegistarMotor("cristaTras");
  const refCristaFrente = useRegistarMotor("cristaFrente");
  const refBiciTras = useRegistarMotor("biciTras");
  const refBiciFrente = useRegistarMotor("biciFrente");

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

      {/* Colinas do Minho, sempre fixas no fundo do ecrã */}
      <svg
        ref={refColinaTras}
        className="fundo__colina fundo__colina--tras"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        height={220}
      >
        <path fill="currentColor" d="M0 220 L0 140 Q180 60 360 120 T720 90 T1080 130 T1440 80 L1440 220 Z" />
        <path ref={refCristaTras} d={CRISTA_TRAS} fill="none" stroke="none" />
      </svg>
      <svg
        ref={refColinaFrente}
        className="fundo__colina fundo__colina--frente"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        height={160}
      >
        <path fill="currentColor" d="M0 160 L0 100 Q240 30 480 90 T960 60 T1440 100 L1440 160 Z" />
        <path ref={refCristaFrente} d={CRISTA_FRENTE} fill="none" stroke="none" />
      </svg>

      {/* Bicicletas que pedalam sobre as colinas conforme o scroll avança */}
      <div ref={refBiciTras} className="fundo__bici fundo__bici--tras">
        <Bicicleta />
      </div>
      <div ref={refBiciFrente} className="fundo__bici fundo__bici--frente">
        <Bicicleta />
      </div>

      <div className="fundo__velocidade" />
    </div>
  );
}
