import { MotorDeScroll } from "./componentes/MotorDeScroll";
import { FundoRota } from "./componentes/FundoRota";
import { Telemetria } from "./componentes/Telemetria";
import { Topo } from "./componentes/Topo";
import { Hero } from "./componentes/Hero";
import { FitaMarcas } from "./componentes/FitaMarcas";
import { GrelhaBicicletas } from "./componentes/GrelhaBicicletas";
import { Novidades } from "./componentes/Novidades";
import { Oficina } from "./componentes/Oficina";
import { Aluguer } from "./componentes/Aluguer";
import { RotasDaCasa } from "./componentes/RotasDaCasa";
import { Rodape } from "./componentes/Rodape";

// As novidades entram via revalidatePath quando o admin publica
export const revalidate = 3600;

export default function Home() {
  return (
    <MotorDeScroll>
      <FundoRota />
      <Telemetria />
      <Topo />
      <main>
        <Hero />
        <FitaMarcas />
        <GrelhaBicicletas />
        <Novidades />
        <Oficina />
        <Aluguer />
        <RotasDaCasa />
      </main>
      <Rodape />
    </MotorDeScroll>
  );
}
