/* META · Contacto */
export function Rodape() {
  return (
    <footer className="rodape" id="contacto">
      <div className="rodape__interior">
        <p className="marco revelar">
          <strong>META</strong> · Vem ver-nos
        </p>
        <h2 className="titulo revelar">
          A loja fica na <em>tua rota.</em>
        </h2>
        <div className="rodape__grelha">
          <div className="revelar">
            <h4>Morada</h4>
            <p>
              Rua das Flores, 177
              <br />
              Darque · 4935-125
              <br />
              Viana do Castelo
            </p>
          </div>
          <div className="revelar revelar--atraso-1">
            <h4>Horário</h4>
            <p>
              Seg–Sex · 9:00–12:30 / 14:00–19:00
              <br />
              Sáb · 9:00–13:00
            </p>
          </div>
          <div className="revelar revelar--atraso-2">
            <h4>Contacto</h4>
            <p>
              <a href="tel:+351258333174">+351 258 333 174</a>
              <br />
              <a href="mailto:vianabike@hotmail.com">vianabike@hotmail.com</a>
            </p>
          </div>
        </div>
        <div className="rodape__fim">
          <span>© ViaBike · Viana do Castelo</span>
          <span>N13 · KM 0 → ∞</span>
        </div>
      </div>
    </footer>
  );
}
