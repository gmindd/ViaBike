/* KM 58 · As rotas da casa — painéis com parallax interno */
export function RotasDaCasa() {
  return (
    <section className="seccao" id="km58" data-km="58">
      <p className="marco revelar">
        <strong>KM 58</strong> · As rotas da casa
      </p>
      <h2 className="titulo revelar">
        O melhor terreno de treino <em>do país.</em>
      </h2>
      <div className="rotas">
        <article className="rota-painel revelar" data-parallax="0.10">
          <svg className="rota-painel__perfil" viewBox="0 0 400 140" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 140 L0 110 Q60 100 120 105 T240 95 T400 105 L400 140 Z" />
          </svg>
          <h3 className="rota-painel__nome">Ecovia do Litoral Norte</h3>
          <p className="rota-painel__dados">±35 km · plano · mar sempre à direita</p>
        </article>
        <article className="rota-painel revelar revelar--atraso-1" data-parallax="0.16">
          <svg className="rota-painel__perfil" viewBox="0 0 400 140" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 140 L0 120 Q80 110 140 70 T260 40 T400 90 L400 140 Z" />
          </svg>
          <h3 className="rota-painel__nome">Serra d&apos;Arga</h3>
          <p className="rota-painel__dados">±60 km · 1400 m D+ · garrafas cheias</p>
        </article>
        <article className="rota-painel revelar revelar--atraso-2" data-parallax="0.22">
          <svg className="rota-painel__perfil" viewBox="0 0 400 140" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 140 L0 100 Q100 90 180 95 T320 80 T400 95 L400 140 Z" />
          </svg>
          <h3 className="rota-painel__nome">Caminho Português</h3>
          <p className="rota-painel__dados">Viana → Santiago · apoio de oficina</p>
        </article>
      </div>
    </section>
  );
}
