"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  numero: string;
  titulo: string;
  texto: string;
  etiqueta: string;
  icone: ReactNode;
  imagem?: string;
  cena?: ReactNode;
  atraso?: 1 | 2 | 3;
};

/* Cartão de bicicleta com tilt 3D (segue o rato) */
export function CartaBici({ numero, titulo, texto, etiqueta, icone, imagem, cena, atraso }: Props) {
  const refCarta = useRef<HTMLElement>(null);
  const [fotoErro, setFotoErro] = useState(false);
  const temFoto = !!imagem && !fotoErro;

  useEffect(() => {
    const carta = refCarta.current;
    if (!carta) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const aoMover = (e: MouseEvent) => {
      const caixa = carta.getBoundingClientRect();
      const x = (e.clientX - caixa.left) / caixa.width - 0.5;
      const y = (e.clientY - caixa.top) / caixa.height - 0.5;
      carta.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
    };
    const aoSair = () => { carta.style.transform = ""; };

    carta.addEventListener("mousemove", aoMover);
    carta.addEventListener("mouseleave", aoSair);
    return () => {
      carta.removeEventListener("mousemove", aoMover);
      carta.removeEventListener("mouseleave", aoSair);
    };
  }, []);

  return (
    <article
      ref={refCarta}
      className={`carta revelar${atraso ? ` revelar--atraso-${atraso}` : ""}${temFoto ? " carta--com-foto" : ""}`}
      data-tilt
    >
      {imagem && !fotoErro && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="carta__foto"
            src={imagem}
            alt=""
            aria-hidden="true"
            onError={() => setFotoErro(true)}
          />
          <div className="carta__foto-overlay" />
        </>
      )}
      {(!imagem || fotoErro) && cena && (
        <div className="carta__cena" aria-hidden="true">{cena}</div>
      )}
      <span className="carta__numero">{numero}</span>
      {icone}
      <h3 className="carta__titulo">{titulo}</h3>
      <p className="carta__texto">{texto}</p>
      <span className="carta__etiqueta">{etiqueta}</span>
    </article>
  );
}
