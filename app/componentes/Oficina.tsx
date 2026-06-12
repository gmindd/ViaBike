const SERVICOS = [
  { codigo: "SRV-01", nome: "Revisão completa" },
  { codigo: "SRV-02", nome: "Travões e transmissão" },
  { codigo: "SRV-03", nome: "Suspensões" },
  { codigo: "SRV-04", nome: "Rodas e raiagem" },
  { codigo: "SRV-05", nome: "SOS cicloturista — no próprio dia" },
];

/* KM 27 · Oficina — banda escura diagonal */
export function Oficina() {
  return (
    <section className="seccao seccao--escura" id="km27" data-km="27">
      <div className="seccao__interior">
        <p className="marco revelar">
          <strong>KM 27</strong> · A oficina
        </p>
        <h2 className="titulo revelar">
          Entra a coxear, <em>sai a voar.</em>
        </h2>
        <p className="texto revelar">
          Reparações no próprio dia sempre que possível — peregrinos do Caminho e cicloturistas
          da EuroVelo passam aqui à frente. Quem está em viagem não pode esperar.
        </p>
        <ul className="servicos">
          {SERVICOS.map((servico) => (
            <li className="servico revelar" key={servico.codigo}>
              <span className="servico__codigo">{servico.codigo}</span>
              <span className="servico__nome">{servico.nome}</span>
              <span className="servico__seta">-&gt;</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
