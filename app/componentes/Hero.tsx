"use client";

import { useRegistarMotor } from "./MotorDeScroll";

/* KM 0 · Hero */
export function Hero() {
  const refPrato = useRegistarMotor("prato");

  return (
    <section className="seccao hero" id="km0" data-km="0">
      {/* Prato pedaleiro que roda com o scroll */}
      <svg ref={refPrato} className="hero__prato" viewBox="0 0 200 200" aria-hidden="true">
        <g className="prato__aco" fill="none" stroke="currentColor" strokeWidth={3}>
          <circle cx={100} cy={100} r={92} strokeDasharray="8 6" />
          <circle cx={100} cy={100} r={64} />
          <circle cx={100} cy={100} r={10} fill="currentColor" />
          <path
            d="M100 36 L100 100 M100 100 L155 132 M100 100 L45 132 M100 100 L155 68 M100 100 L45 68"
            strokeWidth={5}
          />
        </g>
        {/* O raio que faltava, no vermelho do logo */}
        <path className="prato__raio-sinal" d="M100 100 L100 164" fill="none" strokeWidth={5} />
      </svg>

      <p className="marco revelar">
        <strong>KM 0</strong> · Darque · N13 · Viana do Castelo
      </p>
      <h1 className="titulo revelar revelar--atraso-1">
        Da N13 para <em>qualquer estrada.</em>
      </h1>
      <p className="texto revelar revelar--atraso-2">
        Venda, oficina e aluguer de bicicletas em Viana do Castelo. Estrada, gravel, BTT e
        e-bikes, com as marcas que correm o WorldTour e a oficina em que o Alto Minho confia.
      </p>
      <div className="hero__acoes revelar revelar--atraso-3">
        <a className="botao botao--cheio" href="#km12">Ver bicicletas</a>
        <a className="botao botao--linha" href="#km43">Alugar hoje</a>
      </div>
    </section>
  );
}
