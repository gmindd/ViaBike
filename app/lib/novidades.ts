import { list, put } from "@vercel/blob";

export type Novidade = {
  id: string;
  nome: string;
  preco: string;
  descricao: string;
  etiqueta: string;
  imagemUrl: string;
  criadoEm: string;
};

const FICHEIRO_LISTA = "novidades/lista.json";

/* A lista de novidades vive num JSON no Vercel Blob, ao lado das fotos.
   Sem BLOB_READ_WRITE_TOKEN (ex.: build local) devolve lista vazia. */
export async function listarNovidades(): Promise<Novidade[]> {
  try {
    const { blobs } = await list({ prefix: FICHEIRO_LISTA, limit: 1 });
    if (blobs.length === 0) return [];
    const resposta = await fetch(blobs[0].url, { cache: "no-store" });
    if (!resposta.ok) return [];
    return (await resposta.json()) as Novidade[];
  } catch {
    return [];
  }
}

export async function guardarNovidades(novidades: Novidade[]) {
  await put(FICHEIRO_LISTA, JSON.stringify(novidades), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}
