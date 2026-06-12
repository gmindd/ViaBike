export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-dados text-sm tracking-[0.3em] text-sinal uppercase">
        KM 0 · Darque, Viana do Castelo
      </p>
      <h1 className="font-display text-6xl font-extrabold italic uppercase leading-[0.92]">
        ViaBike
      </h1>
      <p className="max-w-md font-corpo text-tinta/70">
        Migração em curso — a aguardar os ficheiros do protótipo em{" "}
        <code className="font-dados">/prototipo</code> para construir as
        secções e o motor de scroll.
      </p>
    </main>
  );
}
