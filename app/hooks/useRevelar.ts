"use client";

import { useEffect } from "react";

/* ------------------------------------------------------------
   Reveals: elementos .revelar ganham .visivel ao entrar no ecrã
   ------------------------------------------------------------ */
export function useRevelar() {
  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    document.querySelectorAll(".revelar").forEach((el) => observador.observe(el));

    return () => observador.disconnect();
  }, []);
}
