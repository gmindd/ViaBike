export function Topo() {
  return (
    <header className="topo">
      <a className="topo__logo" href="#km0">
        Via<span>bike</span>
      </a>
      <nav className="topo__nav" aria-label="Navegação principal">
        <a className="topo__link" href="#km12">Bicicletas</a>
        <a className="topo__link" href="#km27">Oficina</a>
        <a className="topo__link" href="#km43">Aluguer</a>
        <a className="topo__link" href="#km58">Rotas</a>
      </nav>
      <a className="topo__tel" href="tel:+351258333174">258 333 174</a>
    </header>
  );
}
