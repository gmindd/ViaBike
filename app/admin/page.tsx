import type { Metadata } from "next";
import Image from "next/image";
import { listarNovidades } from "../lib/novidades";
import { apagarNovidade, criarNovidade, entrar, estaAutenticado, sair } from "./acoes";

export const metadata: Metadata = {
  title: "ViaBike · Administração",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type Props = { searchParams: Promise<{ erro?: string }> };

export default async function Admin({ searchParams }: Props) {
  const { erro } = await searchParams;
  const autenticado = await estaAutenticado();

  if (!autenticado) {
    return (
      <main className="admin">
        <section className="seccao">
          <p className="marco">
            <strong>ADMIN</strong> · Acesso reservado
          </p>
          <h1 className="titulo">Entrar</h1>
          {erro === "1" && <p className="admin__erro">Password errada. Tenta outra vez.</p>}
          {!process.env.ADMIN_PASSWORD && (
            <p className="admin__erro">
              Falta definir a variável ADMIN_PASSWORD no projeto Vercel.
            </p>
          )}
          <form action={entrar} className="admin__form">
            <label>
              Password
              <input type="password" name="password" required autoFocus />
            </label>
            <button className="botao botao--cheio" type="submit">Entrar</button>
          </form>
        </section>
      </main>
    );
  }

  const novidades = await listarNovidades();

  return (
    <main className="admin">
      <section className="seccao">
        <p className="marco">
          <strong>ADMIN</strong> · Novidades
        </p>
        <h1 className="titulo">Gerir novidades</h1>
        {erro === "2" && (
          <p className="admin__erro">Preenche pelo menos o nome e escolhe uma foto.</p>
        )}

        <form action={criarNovidade} className="admin__form">
          <label>
            Nome *
            <input type="text" name="nome" required placeholder="Focus Izalco Max 9.7" />
          </label>
          <label>
            Preço
            <input type="text" name="preco" placeholder="4 999 € ou sob consulta" />
          </label>
          <label>
            Descrição
            <textarea name="descricao" rows={3} placeholder="Duas frases chegam." />
          </label>
          <label>
            Etiqueta
            <input type="text" name="etiqueta" placeholder="Estrada · Carbono · 2026" />
          </label>
          <label>
            Foto *
            <input type="file" name="imagem" accept="image/*" required />
          </label>
          <button className="botao botao--cheio" type="submit">Publicar novidade</button>
        </form>

        <h2 className="admin__subtitulo">Publicadas ({novidades.length})</h2>
        <ul className="admin__lista">
          {novidades.map((n) => (
            <li key={n.id} className="admin__item">
              <Image src={n.imagemUrl} alt={n.nome} width={96} height={72} />
              <div>
                <strong>{n.nome}</strong>
                {n.preco && <span> · {n.preco}</span>}
                <p>{n.descricao}</p>
              </div>
              <form action={apagarNovidade}>
                <input type="hidden" name="id" value={n.id} />
                <button className="botao botao--linha" type="submit">Apagar</button>
              </form>
            </li>
          ))}
          {novidades.length === 0 && <li>Ainda não há novidades publicadas.</li>}
        </ul>

        <form action={sair}>
          <button className="admin__sair" type="submit">Sair</button>
        </form>
      </section>
    </main>
  );
}
