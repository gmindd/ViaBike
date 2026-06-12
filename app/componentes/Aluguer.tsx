/* KM 43 · Aluguer */
export function Aluguer() {
  return (
    <section className="seccao" id="km43" data-km="43">
      <div className="aluguer">
        <div>
          <p className="marco revelar">
            <strong>KM 43</strong> · Aluguer
          </p>
          <h2 className="titulo revelar">
            Chega a pé, <em>parte a pedalar.</em>
          </h2>
          <p className="texto revelar">
            A 1,5 km da Ponte Eiffel e a dois passos da Ecovia do Litoral Norte. Bicicletas
            revistas antes de cada saída, capacete e kit de furo incluídos. Entrega e recolha
            em Viana sob marcação.
          </p>
        </div>
        <aside className="aluguer__painel revelar revelar--atraso-1">
          <h3>Tabela de aluguer</h3>
          <ul className="aluguer__linhas">
            <li>
              <span>Cidade / passeio</span>
              <span>½ dia · dia</span>
            </li>
            <li>
              <span>Gravel / estrada</span>
              <span>dia · fim-de-semana</span>
            </li>
            <li>
              <span>e-Bike</span>
              <span>dia · semana</span>
            </li>
            <li>
              <span>Grupos &amp; Caminho de Santiago</span>
              <span>sob consulta</span>
            </li>
          </ul>
          <p className="aluguer__nota">
            EN · Bike rental on the Camino Português &amp; EuroVelo 1 — same-day support
            included.
          </p>
        </aside>
      </div>
    </section>
  );
}
