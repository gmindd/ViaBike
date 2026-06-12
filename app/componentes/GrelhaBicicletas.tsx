import { CartaBici } from "./CartaBici";

/* KM 12 · Bicicletas */
export function GrelhaBicicletas() {
  return (
    <section className="seccao" id="km12" data-km="12">
      <p className="marco revelar">
        <strong>KM 12</strong> · A loja
      </p>
      <h2 className="titulo revelar">
        Média e alta gama. <em>Sem atalhos.</em>
      </h2>
      <div className="grelha-bicis">
        <CartaBici
          numero="EST"
          titulo="Estrada"
          texto="Cervélo e Pinarello para quem mede o Minho em watts."
          etiqueta="Race · Endurance · Aero"
          icone={
            <svg className="carta__icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <circle cx={6} cy={17} r={4} />
              <circle cx={18} cy={17} r={4} />
              <path d="M6 17 L10 9 L15 9 M18 17 L14 9 M10 9 L8 6 H11" />
            </svg>
          }
        />
        <CartaBici
          numero="GRV"
          titulo="Gravel"
          texto="Da Ecovia aos trilhos da Serra d'Arga sem trocar de bicicleta."
          etiqueta="Aventura · Bikepacking"
          atraso={1}
          icone={
            <svg className="carta__icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <circle cx={6} cy={17} r={4} />
              <circle cx={18} cy={17} r={4} />
              <path d="M6 17 L10 9 L15 9 M18 17 L14 9 M10 9 L8 6 H11" strokeDasharray="2 1.5" />
            </svg>
          }
        />
        <CartaBici
          numero="BTT"
          titulo="BTT"
          texto="XC e trail da Focus, montadas e afinadas para o granito do norte."
          etiqueta="XC · Trail · Enduro"
          atraso={2}
          icone={
            <svg className="carta__icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <circle cx={6} cy={17} r={4} />
              <circle cx={18} cy={17} r={4} />
              <path d="M6 17 L10 10 L15 10 M18 17 L14 10 M10 10 L7 7 H10 M3 8 L6 5 M21 8 L18 5" />
            </svg>
          }
        />
        <CartaBici
          numero="E-B"
          titulo="E-bikes"
          texto="Quilómetros a mais, desculpas a menos. Para todos os dias."
          etiqueta="Urbana · e-MTB"
          atraso={3}
          icone={
            <svg className="carta__icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <circle cx={6} cy={17} r={4} />
              <circle cx={18} cy={17} r={4} />
              <path d="M6 17 L10 9 L15 9 M18 17 L14 9" />
              <path d="M12 3 L10 7 H13 L11 11" strokeWidth={1.8} />
            </svg>
          }
        />
      </div>
    </section>
  );
}
