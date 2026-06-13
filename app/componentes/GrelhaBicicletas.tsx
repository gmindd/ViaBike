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
      <p className="texto revelar">
        Em Darque tens a melhor seleção do Alto Minho: agentes Focus, Cervélo, Pinarello,
        Orbea e 3T, com bicicletas de estrada, gravel, BTT, e-bike e junior expostas e
        disponíveis para test&#8209;ride. A nossa equipa conhece cada componente de cor
        — e a oficina ao lado garante que sais a pedalar no próprio dia.
      </p>
      <div className="grelha-bicis">
        <CartaBici
          numero="EST"
          titulo="Estrada"
          texto="Cervélo e Pinarello para quem mede o Minho em watts."
          etiqueta="Race · Endurance · Aero"
          imagem="/loja/estrada.jpg"
          cena={
            <svg viewBox="0 0 280 220" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M140 220 L90 120 L190 120 Z" fill="currentColor" strokeWidth="0" opacity=".25" />
              <line x1="140" y1="220" x2="140" y2="120" strokeWidth="1" strokeDasharray="10 7" />
              <line x1="90" y1="120" x2="10" y2="220" strokeWidth="1.5" />
              <line x1="190" y1="120" x2="270" y2="220" strokeWidth="1.5" />
              <path d="M0 120 Q70 95 140 108 T280 100" strokeWidth="1" opacity=".5" />
              <path d="M30 120 Q90 85 150 100 T280 90 L280 120 Z" fill="currentColor" strokeWidth="0" opacity=".06" />
            </svg>
          }
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
          imagem="/loja/gravel.jpg"
          cena={
            <svg viewBox="0 0 280 220" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 220 Q40 160 80 170 T160 145 T240 160 T280 150 L280 220 Z" fill="currentColor" strokeWidth="0" opacity=".1" />
              <path d="M130 220 C120 200, 160 185, 150 165 S110 145, 120 125" strokeWidth="2" strokeDasharray="5 4" opacity=".6" />
              <path d="M0 170 Q40 150 80 158 T160 140 T280 148" strokeWidth="1.5" opacity=".5" />
            </svg>
          }
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
          texto="XC e trail da Orbea, montadas e afinadas para o granito do norte."
          etiqueta="XC · Trail · Enduro"
          atraso={2}
          imagem="/loja/btt.jpg"
          cena={
            <svg viewBox="0 0 280 220" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 220 L0 165 L40 105 L70 140 L110 70 L150 125 L185 55 L220 110 L250 75 L280 115 L280 220 Z" fill="currentColor" strokeWidth="0" opacity=".08" />
              <path d="M0 165 L40 105 L70 140 L110 70 L150 125 L185 55 L220 110 L250 75 L280 115" strokeWidth="1.5" opacity=".6" />
            </svg>
          }
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
          texto="Quilómetros a mais, desculpas a menos. Orbea para todos os dias."
          etiqueta="Urbana · e-MTB"
          atraso={3}
          imagem="/loja/ebike.jpg"
          cena={
            <svg viewBox="0 0 280 220" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 220 L0 170 L20 170 L20 155 L50 155 L50 145 L80 145 L80 165 L115 165 L115 140 L145 140 L145 155 L165 155 L165 165 L200 165 L200 155 L230 155 L230 170 L260 170 L260 155 L280 155 L280 220 Z" fill="currentColor" strokeWidth="0" opacity=".08" />
              <path d="M148 100 L140 118 L149 118 L141 136" strokeWidth="2.5" opacity=".5" strokeLinecap="round" />
            </svg>
          }
          icone={
            <svg className="carta__icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <circle cx={6} cy={17} r={4} />
              <circle cx={18} cy={17} r={4} />
              <path d="M6 17 L10 9 L15 9 M18 17 L14 9" />
              <path d="M12 3 L10 7 H13 L11 11" strokeWidth={1.8} />
            </svg>
          }
        />
        <CartaBici
          numero="JNR"
          titulo="Junior"
          texto="Deed e Focus para os mais novos aprenderem a pedalar com equipamento a sério."
          etiqueta="4–16 anos · MTB · Urbana"
          atraso={1}
          imagem="/loja/junior.jpg"
          cena={
            <svg viewBox="0 0 280 220" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 220 Q70 180 140 190 T280 180 L280 220 Z" fill="currentColor" strokeWidth="0" opacity=".08" />
              <path d="M0 180 Q70 155 140 165 T280 155" strokeWidth="1.5" opacity=".4" />
              {/* Bicicleta pequena centrada */}
              <circle cx="105" cy="130" r="22" strokeWidth="2" opacity=".5" />
              <circle cx="175" cy="130" r="22" strokeWidth="2" opacity=".5" />
              <path d="M105 130 L120 105 L148 105 M175 130 L155 105 M120 105 L115 95 H125" strokeWidth="2" opacity=".5" />
              <circle cx="140" cy="85" r="10" strokeWidth="1.5" opacity=".35" />
            </svg>
          }
          icone={
            <svg className="carta__icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <circle cx={12} cy={5} r={2.5} />
              <circle cx={6} cy={17} r={3.5} />
              <circle cx={18} cy={17} r={3.5} />
              <path d="M6 17 L9.5 10 L13.5 10 M18 17 L14.5 10 M9.5 10 L8 7.5" />
            </svg>
          }
        />
        <CartaBici
          numero="EQP"
          titulo="Equipamento"
          texto="Capacetes, roupa, sapatilhas e acessórios das marcas que usam os profissionais."
          etiqueta="Vestuário · Proteção · Acessórios"
          atraso={2}
          imagem="/loja/equipamento.jpg"
          cena={
            <svg viewBox="0 0 280 220" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              {/* Capacete */}
              <path d="M90 110 Q90 75 140 72 Q190 75 190 110 L185 118 L95 118 Z" strokeWidth="2" opacity=".5" />
              <line x1="95" y1="118" x2="185" y2="118" strokeWidth="2" opacity=".5" />
              <path d="M110 118 L108 128 M170 118 L172 128" strokeWidth="2" opacity=".4" />
              {/* Sapatilha */}
              <path d="M60 165 Q65 150 85 150 L135 150 Q150 150 152 158 L152 168 Q130 175 60 170 Z" strokeWidth="1.5" opacity=".4" />
              <line x1="85" y1="150" x2="85" y2="168" strokeWidth="1.2" opacity=".3" strokeDasharray="3 3" />
              {/* Luva */}
              <path d="M170 165 L170 145 Q170 138 178 138 L200 138 Q205 138 205 143 L205 148 L210 148 Q214 148 214 152 L214 165 Q214 170 205 170 L175 170 Q170 170 170 165 Z" strokeWidth="1.5" opacity=".4" />
            </svg>
          }
          icone={
            <svg className="carta__icone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M12 3 Q5 3 4 9 L4 12 Q4 13 5 13 L19 13 Q20 13 20 12 L20 9 Q19 3 12 3 Z" />
              <path d="M5 13 L4 18 Q4 19 5 19 L19 19 Q20 19 19 18 L18 13" />
              <line x1="12" y1="13" x2="12" y2="19" strokeWidth="1" />
            </svg>
          }
        />
      </div>
    </section>
  );
}
