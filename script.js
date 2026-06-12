/* ============================================================
   VIABIKE — "A Volta"
   Toda a lógica de scroll/animção. Sem dependências externas.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  iniciarReveals();
  if (!reduzMovimento) {
    iniciarMotorDeScroll();
    iniciarTilt();
  } else {
    // Com movimento reduzido, fixa a telemetria num estado estático legível
    atualizarTelemetria(0, 0);
  }
});

/* ------------------------------------------------------------
   Motor de scroll: um único requestAnimationFrame alimenta
   rota, ciclista, telemetria, parallax, prato e fita.
   ------------------------------------------------------------ */
function iniciarMotorDeScroll() {
  const traco = document.getElementById('rotaTraco');
  const ciclista = document.getElementById('rotaCiclista');
  const halo = document.getElementById('rotaCiclistaHalo');
  const prato = document.getElementById('heroPrato');
  const fita = document.getElementById('fitaFaixa');
  const colinaTras = document.getElementById('colinaTras');
  const colinaFrente = document.getElementById('colinaFrente');
  const paineisParallax = document.querySelectorAll('[data-parallax]');

  const comprimentoRota = traco.getTotalLength();

  let scrollAlvo = window.scrollY; // posição real
  let scrollSuave = scrollAlvo;   // posição interpolada (lerp)
  let scrollAnterior = scrollAlvo;
  let velocidade = 0;             // px/frame, suavizada

  // Regista a posição real do scroll (o trabalho pesado fica no rAF)
  window.addEventListener('scroll', () => { scrollAlvo = window.scrollY; }, { passive: true });

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

    requestAnimationFrame(ciclo);
  }

  // Desenha o traço da rota e posiciona o ciclista no ponto certo
  function desenharRota(progresso) {
    traco.style.strokeDashoffset = 1000 - progresso * 1000; // pathLength=1000
    const ponto = traco.getPointAtLength(progresso * comprimentoRota);
    ciclista.setAttribute('cx', ponto.x);
    ciclista.setAttribute('cy', ponto.y);
    halo.setAttribute('cx', ponto.x);
    halo.setAttribute('cy', ponto.y);
  }

  // Parallax: colinas de fundo e perfis dos painéis de rotas
  function aplicarParallax(s) {
    colinaTras.style.transform = `translateY(${s * 0.03}px)`;
    colinaFrente.style.transform = `translateY(${s * 0.06}px)`;
    paineisParallax.forEach((el) => {
      const fator = parseFloat(el.dataset.parallax);
      const caixa = el.closest('.rota-painel').getBoundingClientRect();
      const desvio = (caixa.top - window.innerHeight / 2) * fator;
      el.style.transform = `translateY(${desvio}px)`;
    });
  }

  // O prato pedaleiro do hero roda em função do scroll
  function rodarPrato(s) {
    if (prato) prato.style.transform = `rotate(${s * 0.12}deg)`;
  }

  // A fita de marcas inclina-se ligeiramente com a velocidade do scroll
  function inclinarFita(v) {
    if (fita) fita.style.transform = `skewX(${Math.max(-8, Math.min(8, -v * 0.18))}deg)`;
  }

  // Acima de um certo ritmo, ativa as linhas de velocidade no fundo
  function marcarAceleracao(v) {
    document.body.classList.toggle('a-acelerar', Math.abs(v) > 14);
  }

  requestAnimationFrame(ciclo);
}

/* ------------------------------------------------------------
   Telemetria: km percorridos (0 → 58) e velocidade em "km/h"
   derivada da velocidade real do scroll.
   ------------------------------------------------------------ */
function atualizarTelemetria(progresso, velocidadePx) {
  const km = document.getElementById('telKm');
  const vel = document.getElementById('telVel');
  const barra = document.getElementById('telBarra');

  km.textContent = (progresso * 58).toFixed(1);
  vel.textContent = Math.min(99, Math.round(Math.abs(velocidadePx) * 1.4));

  // No desktop a barra cresce em altura; no mobile em largura
  if (window.matchMedia('(max-width: 880px)').matches) {
    barra.style.width = `${progresso * 100}%`;
    barra.style.height = '100%';
  } else {
    barra.style.height = `${progresso * 100}%`;
    barra.style.width = '100%';
  }
}

/* ------------------------------------------------------------
   Reveals: elementos .revelar ganham .visivel ao entrar no ecrã
   ------------------------------------------------------------ */
function iniciarReveals() {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll('.revelar').forEach((el) => observador.observe(el));
}

/* ------------------------------------------------------------
   Tilt 3D nos cartões de bicicletas (segue o rato)
   ------------------------------------------------------------ */
function iniciarTilt() {
  document.querySelectorAll('[data-tilt]').forEach((carta) => {
    // Inclina o cartão consoante a posição do cursor dentro dele
    carta.addEventListener('mousemove', (e) => {
      const caixa = carta.getBoundingClientRect();
      const x = (e.clientX - caixa.left) / caixa.width - 0.5;
      const y = (e.clientY - caixa.top) / caixa.height - 0.5;
      carta.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
    });
    // Repõe a posição original ao sair
    carta.addEventListener('mouseleave', () => {
      carta.style.transform = '';
    });
  });
}
