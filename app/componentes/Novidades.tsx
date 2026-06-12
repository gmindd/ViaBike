import Image from "next/image";
import { listarNovidades } from "../lib/novidades";

/* KM 18 · Novidades — produtos publicados pelo administrador em /admin.
   Sem novidades publicadas, a secção não aparece. */
export async function Novidades() {
  const novidades = await listarNovidades();
  if (novidades.length === 0) return null;

  return (
    <section className="seccao" id="novidades" data-km="18">
      <p className="marco revelar">
        <strong>KM 18</strong> · Novidades
      </p>
      <h2 className="titulo revelar">
        Acabadas de <em>chegar.</em>
      </h2>
      <div className="grelha-novidades">
        {novidades.map((n, i) => (
          <article
            className={`novidade revelar${i % 3 ? ` revelar--atraso-${i % 3}` : ""}`}
            key={n.id}
          >
            <div className="novidade__foto">
              <Image src={n.imagemUrl} alt={n.nome} fill sizes="(max-width: 880px) 100vw, 33vw" />
            </div>
            <div className="novidade__corpo">
              <h3 className="novidade__nome">{n.nome}</h3>
              {n.preco && <p className="novidade__preco">{n.preco}</p>}
              {n.descricao && <p className="novidade__texto">{n.descricao}</p>}
              {n.etiqueta && <span className="novidade__etiqueta">{n.etiqueta}</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
