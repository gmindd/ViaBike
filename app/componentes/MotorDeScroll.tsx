"use client";

import { createContext, useCallback, useContext, useRef, type ReactNode } from "react";
import { useMotorDeScroll, type RegistoMotor } from "../hooks/useMotorDeScroll";
import { useRevelar } from "../hooks/useRevelar";

/* O provider guarda os refs dos elementos animados (rota, ciclista,
   telemetria, prato, fita, colinas) e alimenta-os ao motor de scroll.
   Cada componente regista o seu elemento com useRegistarMotor(chave). */

const MotorContexto = createContext<(chave: string, el: Element | null) => void>(() => {});

export function useRegistarMotor(chave: string) {
  const registar = useContext(MotorContexto);
  return useCallback((el: Element | null) => registar(chave, el), [registar, chave]);
}

export function MotorDeScroll({ children }: { children: ReactNode }) {
  const refs = useRef<RegistoMotor>({});
  const registar = useCallback((chave: string, el: Element | null) => {
    refs.current[chave] = el;
  }, []);

  useRevelar();
  useMotorDeScroll(refs);

  return <MotorContexto.Provider value={registar}>{children}</MotorContexto.Provider>;
}
