"use client";

/* eslint-disable react-hooks/immutability -- o motor anima o DOM
   diretamente via refs (textContent, style, atributos SVG) */

import { useEffect, type RefObject } from "react";

/* ------------------------------------------------------------
   Motor de scroll: um único requestAnimationFrame alimenta
   rota, ciclista, telemetria, parallax, prato e fita.
   Porte direto de prototipo/script.js — comportamento exato.
   ------------------------------------------------------------ */

export type RegistoMotor = Record<string, Element | null>;

export function useMotorDeScroll(refs: RefObject<RegistoMotor>) {
  useEffect(() => {
    const r = refs.current ?? {};
    const km = r.telKm as HTMLElement | null;
    const vel = r.telVel as HTMLElement | null;
    const barra = r.telBarra as HTMLElement | null;

    // Telemetria: km percorridos (0 → 58) e velocidade em "km/h"
    // derivada da velocidade real do scroll.
    function atualizarTelemetria(progresso: number, velocidadePx: number) {
      if (!km || !vel || !barra) return;
      km.textContent = (progresso * 58).toFixed(1);
      vel.textContent = String(Math.min(99, Math.round(Math.abs(velocidadePx) * 1.4)));

      // No desktop a barra cresce em altura; no mobile em largura
      if (window.matchMedia("(max-width: 880px)").matches) {
        barra.style.width = `${progresso * 100}%`;
        barra.style.height = "100%";
      } else {
        barra.style.height = `${progresso * 100}%`;
        barra.style.width = "100%";
      }
    }

    const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduzMovimento) {
      // Com movimento reduzido, fixa a telemetria num estado estático legível
      atualizarTelemetria(0, 0);
      return;
    }

    const traco = r.traco as SVGPathElement | null;
    const ciclista = r.ciclista as SVGCircleElement | null;
    const halo = r.halo as SVGCircleElement | null;
    const prato = r.prato as SVGElement | null;
    const fita = r.fita as HTMLElement | null;
    const colinaTras = r.colinaTras as SVGElement | null;
    const colinaFrente = r.colinaFrente as SVGElement | null;
    const paineisParallax = document.querySelectorAll<HTMLElement>("[data-parallax]");

    if (!traco || !ciclista || !halo) return;

    const comprimentoRota = traco.getTotalLength();

    let scrollAlvo = window.scrollY; // posição real
    let scrollSuave = scrollAlvo;   // posição interpolada (lerp)
    let scrollAnterior = scrollAlvo;
    let velocidade = 0;             // px/frame, suavizada
    let idRaf = 0;

    // Regista a posição real do scroll (o trabalho pesado fica no rAF)
    const aoScroll = () => { scrollAlvo = window.scrollY; };
    window.addEventListener("scroll", aoScroll, { passive: true });

    // Desenha o traço da rota e posiciona o ciclista no ponto certo
    function desenharRota(progresso: number) {
      traco!.style.strokeDashoffset = String(1000 - progresso * 1000); // pathLength=1000
      const ponto = traco!.getPointAtLength(progresso * comprimentoRota);
      ciclista!.setAttribute("cx", String(ponto.x));
      ciclista!.setAttribute("cy", String(ponto.y));
      halo!.setAttribute("cx", String(ponto.x));
      halo!.setAttribute("cy", String(ponto.y));
    }

    // Parallax: colinas de fundo e perfis dos painéis de rotas
    function aplicarParallax(s: number) {
      if (colinaTras) colinaTras.style.transform = `translateY(${s * 0.03}px)`;
      if (colinaFrente) colinaFrente.style.transform = `translateY(${s * 0.06}px)`;
      paineisParallax.forEach((el) => {
        const fator = parseFloat(el.dataset.parallax ?? "0");
        const caixa = (el.closest(".rota-painel") ?? el).getBoundingClientRect();
        const desvio = (caixa.top - window.innerHeight / 2) * fator;
        el.style.transform = `translateY(${desvio}px)`;
      });
    }

    // O prato pedaleiro do hero roda em função do scroll
    function rodarPrato(s: number) {
      if (prato) prato.style.transform = `rotate(${s * 0.12}deg)`;
    }

    // A fita de marcas inclina-se ligeiramente com a velocidade do scroll
    function inclinarFita(v: number) {
      if (fita) fita.style.transform = `skewX(${Math.max(-8, Math.min(8, -v * 0.18))}deg)`;
    }

    // Acima de um certo ritmo, ativa as linhas de velocidade no fundo
    function marcarAceleracao(v: number) {
      document.body.classList.toggle("a-acelerar", Math.abs(v) > 14);
    }

    // Ciclo principal de animação
    function ciclo() {
      const alturaMax = document.documentElement.scrollHeight - window.innerHeight;
      const progresso = alturaMax > 0 ? Math.min(scrollAlvo / alturaMax, 1) : 0;

      // Interpolação suave + velocidade instantânea
      scrollSuave += (scrollAlvo - scrollSuave) * 0.08;
      velocidade += ((scrollAlvo - scrollAnterior) - velocidade) * 0.12;
      scrollAnterior = scrollAlvo;

      desenharRota(progresso);
      atualizarTelemetria(progresso, velocidade);
      aplicarParallax(scrollSuave);
      rodarPrato(scrollSuave);
      inclinarFita(velocidade);
      marcarAceleracao(velocidade);

      idRaf = requestAnimationFrame(ciclo);
    }

    idRaf = requestAnimationFrame(ciclo);

    return () => {
      cancelAnimationFrame(idRaf);
      window.removeEventListener("scroll", aoScroll);
      document.body.classList.remove("a-acelerar");
    };
  }, [refs]);
}
