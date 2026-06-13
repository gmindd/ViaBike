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
          cena={
            <svg viewBox="0 0 280 220" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              {/* Asfalto: estrada em perspetiva */}
              <path d="M140 220 L90 120 L190 120 Z" fill="currentColor" strokeWidth="0" opacity=".25" />
              <line x1="140" y1="220" x2="140" y2="120" strokeWidth="1" strokeDasharray="10 7" />
              <line x1="90" y1="120" x2="10" y2="220" strokeWidth="1.5" />
              <line x1="190" y1="120" x2="270" y2="220" strokeWidth="1.5" />
              {/* Horizonte / montanhas suaves */}
              <path d="M0 120 Q70 95 140 108 T280 100" strokeWidth="1" opacity=".5" />
              <path d="M30 120 Q90 85 150 100 T280 90 L280 120 Z" fill="currentColor" strokeWidth="0" opacity=".06" />
              {/* Ciclista de estrada no horizonte */}
              <circle cx="140" cy="108" r="4" strokeWidth="1.5" />
              <circle cx="132" cy="113" r="3.5" strokeWidth="1.5" />
              <circle cx="148" cy="113" r="3.5" strokeWidth="1.5" />
              <path d="M132 113 L135 108 L139 108 M148 113 L145 108 M135 108 L134 105 H136.5" strokeWidth="1.5" />
              {/* Linha de velocidade */}
              <line x1="0" y1="140" x2="60" y2="140" strokeWidth="1" opacity=".3" />
              <line x1="0" y1="150" x2="45" y2="150" strokeWidth="1" opacity=".2" />
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
          cena={
            <svg viewBox="0 0 280 220" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              {/* Colinas ondulantes */}
              <path d="M0 220 Q40 160 80 170 T160 145 T240 160 T280 150 L280 220 Z" fill="currentColor" strokeWidth="0" opacity=".1" />
              <path d="M0 220 Q60 175 120 185 T240 170 T280 175 L280 220 Z" fill="currentColor" strokeWidth="0" opacity=".07" />
              {/* Caminho de gravilha (curva em S) */}
              <path d="M130 220 C120 200, 160 185, 150 165 S110 145, 120 125" strokeWidth="2" strokeDasharray="5 4" opacity=".6" />
              {/* Cristas das colinas */}
              <path d="M0 170 Q40 150 80 158 T160 140 T280 148" strokeWidth="1.5" opacity=".5" />
              {/* Pedras / texturas */}
              <circle cx="70" cy="195" r="3" fill="currentColor" strokeWidth="0" opacity=".2" />
              <circle cx="85" cy="200" r="2" fill="currentColor" strokeWidth="0" opacity=".2" />
              <circle cx="200" cy="185" r="3" fill="currentColor" strokeWidth="0" opacity=".2" />
              <circle cx="215" cy="192" r="2" fill="currentColor" strokeWidth="0" opacity=".2" />
              {/* Árvores esquemáticas */}
              <line x1="50" y1="165" x2="50" y2="145" strokeWidth="1.5" opacity=".4" />
              <path d="M42 152 Q50 140 58 152" strokeWidth="1.5" fill="none" opacity=".4" />
              <line x1="230" y1="155" x2="230" y2="135" strokeWidth="1.5" opacity=".4" />
              <path d="M222 142 Q230 130 238 142" strokeWidth="1.5" fill="none" opacity=".4" />
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
          texto="XC e trail da Focus, montadas e afinadas para o granito do norte."
          etiqueta="XC · Trail · Enduro"
          atraso={2}
          cena={
            <svg viewBox="0 0 280 220" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              {/* Montanhas rochosas — picos aguçados */}
              <path d="M0 220 L0 165 L40 105 L70 140 L110 70 L150 125 L185 55 L220 110 L250 75 L280 115 L280 220 Z" fill="currentColor" strokeWidth="0" opacity=".08" />
              <path d="M0 165 L40 105 L70 140 L110 70 L150 125 L185 55 L220 110 L250 75 L280 115" strokeWidth="1.5" opacity=".6" />
              {/* Segundo plano */}
              <path d="M0 190 L30 155 L60 170 L95 130 L125 160 L160 135 L195 150 L220 130 L250 145 L280 130 L280 220 L0 220 Z" fill="currentColor" strokeWidth="0" opacity=".06" />
              <path d="M0 190 L30 155 L60 170 L95 130 L125 160 L160 135 L195 150 L220 130 L250 145 L280 130" strokeWidth="1.2" opacity=".4" />
              {/* Rochas no primeiro plano */}
              <path d="M30 220 L45 205 L60 220 Z" fill="currentColor" strokeWidth="0" opacity=".15" />
              <path d="M200 220 L220 200 L240 220 Z" fill="currentColor" strokeWidth="0" opacity=".15" />
              <path d="M120 220 L135 208 L148 220 Z" fill="currentColor" strokeWidth="0" opacity=".1" />
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
          texto="Quilómetros a mais, desculpas a menos. Para todos os dias."
          etiqueta="Urbana · e-MTB"
          atraso={3}
          cena={
            <svg viewBox="0 0 280 220" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              {/* Skyline urbano */}
              <path d="M0 220 L0 170 L20 170 L20 155 L35 155 L35 160 L50 160 L50 145 L65 145 L65 160 L80 160 L80 150 L100 150 L100 165 L115 165 L115 140 L130 140 L130 155 L145 155 L145 145 L165 145 L165 165 L185 165 L185 155 L200 155 L200 160 L215 160 L215 148 L230 148 L230 160 L245 160 L245 170 L260 170 L260 155 L280 155 L280 220 Z" fill="currentColor" strokeWidth="0" opacity=".08" />
              <path d="M0 170 L20 170 L20 155 L35 155 L35 160 L50 160 L50 145 L65 145 L65 160 L80 160 L80 150 L100 150 L100 165 L115 165 L115 140 L130 140 L130 155 L145 155 L145 145 L165 145 L165 165 L185 165 L185 155 L200 155 L200 160 L215 160 L215 148 L230 148 L230 160 L245 160 L245 170 L260 170 L260 155 L280 155" strokeWidth="1.2" opacity=".45" />
              {/* Estrada */}
              <line x1="0" y1="200" x2="280" y2="200" strokeWidth="1" opacity=".3" />
              <line x1="60" y1="200" x2="90" y2="200" strokeWidth="2" strokeDasharray="5 5" opacity=".3" />
              <line x1="130" y1="200" x2="160" y2="200" strokeWidth="2" strokeDasharray="5 5" opacity=".3" />
              {/* Raio de energia (e-bike) */}
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
      </div>
    </section>
  );
}
