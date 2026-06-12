"use server";

import { createHmac } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { del, put } from "@vercel/blob";
import { guardarNovidades, listarNovidades, type Novidade } from "../lib/novidades";

const COOKIE = "viabike_admin";

function tokenEsperado() {
  return createHmac("sha256", process.env.ADMIN_PASSWORD ?? "")
    .update("viabike-admin")
    .digest("hex");
}

export async function estaAutenticado() {
  if (!process.env.ADMIN_PASSWORD) return false;
  const jar = await cookies();
  return jar.get(COOKIE)?.value === tokenEsperado();
}

export async function entrar(dados: FormData) {
  const password = dados.get("password");
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    redirect("/admin?erro=1");
  }
  const jar = await cookies();
  jar.set(COOKIE, tokenEsperado(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/admin",
  });
  redirect("/admin");
}

export async function sair() {
  const jar = await cookies();
  jar.delete(COOKIE);
  redirect("/admin");
}

export async function criarNovidade(dados: FormData) {
  if (!(await estaAutenticado())) redirect("/admin");

  const nome = String(dados.get("nome") ?? "").trim();
  const preco = String(dados.get("preco") ?? "").trim();
  const descricao = String(dados.get("descricao") ?? "").trim();
  const etiqueta = String(dados.get("etiqueta") ?? "").trim();
  const imagem = dados.get("imagem");

  if (!nome || !(imagem instanceof File) || imagem.size === 0) {
    redirect("/admin?erro=2");
  }

  const blob = await put(`novidades/imagens/${crypto.randomUUID()}-${imagem.name}`, imagem, {
    access: "public",
  });

  const nova: Novidade = {
    id: crypto.randomUUID(),
    nome,
    preco,
    descricao,
    etiqueta,
    imagemUrl: blob.url,
    criadoEm: new Date().toISOString(),
  };

  const novidades = await listarNovidades();
  await guardarNovidades([nova, ...novidades]);

  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function apagarNovidade(dados: FormData) {
  if (!(await estaAutenticado())) redirect("/admin");

  const id = String(dados.get("id") ?? "");
  const novidades = await listarNovidades();
  const alvo = novidades.find((n) => n.id === id);
  if (alvo) {
    try {
      await del(alvo.imagemUrl);
    } catch {
      // a foto pode já não existir; a lista é a fonte de verdade
    }
    await guardarNovidades(novidades.filter((n) => n.id !== id));
  }

  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}
