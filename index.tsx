import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ShieldCheck, Zap, Lock, Check, X, TrendingUp, Search, Target, BadgeDollarSign, Repeat,
  PlayCircle, FileSpreadsheet, FileLock2, Headphones, ChevronDown, Star,
} from "lucide-react";

const TITLE = "Método Alavancagem de Consórcio — Patrimônio de R$ 500 mil sem juros";
const DESC =
  "Aprenda a investir em cartas de consórcio, vender as contempladas com ágio e usar o lucro para pagar suas parcelas. De R$ 197 por R$ 37.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CHECKOUT = "#oferta";
const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

function Cta({ children = "Quero Acesso ao Método Imediato", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <a href={CHECKOUT} className={`btn-cta animate-pulse-glow flex w-full items-center justify-center rounded-2xl px-6 py-4 text-center text-base font-extrabold uppercase tracking-wide transition-transform active:scale-95 sm:w-auto ${className}`}>
      {children}
    </a>
  );
}

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-16">
      <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden pb-24">
      <Hero />
      <Comparison />
      <Simulator />
      <Steps />
      <Included />
      <Offer />
      <Faq />
      <footer className="px-5 py-10 text-center text-xs text-muted-foreground">
        © 2026 Método Alavancagem de Consórcio. Conteúdo educacional — não constitui recomendação de investimento.
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border p-3 glass sm:hidden">
        <a href={CHECKOUT} className="btn-cta flex items-center justify-between rounded-xl px-5 py-3 font-extrabold">
          <span>Acessar por R$ 37</span><span className="text-xs font-bold opacity-80 line-through">R$ 197</span>
        </a>
      </div>
    </main>
  );
}

function Hero() {
  return (
    <header className="bg-hero relative px-5 pb-16 pt-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold">
          <span className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-warning text-warning" />)}</span>
          +3.200 alunos alavancando patrimônio
        </div>
        <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.1] sm:text-5xl">
          A Estratégia dos Grandes Investidores para Criar <span className="text-gradient">Patrimônio de R$ 500 Mil</span> no Consórcio Sem Pagar Juros Abusivos
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          Compre cartas de consórcio estratégicas, venda as contempladas com ágio e use o lucro para pagar as próximas parcelas — sem tirar dinheiro do bolso.
        </p>
        <div className="mt-8 flex justify-center"><Cta /></div>
        <div className="mt-6 grid grid-cols-3 gap-2 text-[11px] font-semibold sm:text-sm">
          {[[ShieldCheck, "Garantia de 7 dias"], [Zap, "Acesso Imediato"], [Lock, "100% Seguro"]].map(([I, t]) => {
            const Icon = I as typeof Zap;
            return <div key={t as string} className="glass flex flex-col items-center gap-1 rounded-xl p-3"><Icon className="h-5 w-5 text-primary" />{t as string}</div>;
          })}
        </div>
      </div>
    </header>
  );
}

function Comparison() {
  const cols = [
    { name: "Financiamento", tone: "bad", items: [["Juros de até 12% a.a.", false], ["Paga ~3 imóveis, leva 1", false], ["Banco lucra com você", false], ["Endividamento de 30 anos", false]] },
    { name: "Consórcio tradicional", tone: "mid", items: [["Sem juros", true], ["Espera anos pela contemplação", false], ["Parcelas sempre do seu bolso", false], ["Sem estratégia de lucro", false]] },
    { name: "Alavancagem", tone: "good", items: [["Sem juros", true], ["Lance estratégico acelera a carta", true], ["Lucro com ágio na venda", true], ["Rendimentos pagam as parcelas", true]] },
  ] as const;
  return (
    <Section eyebrow="Comparativo" title={<>Pare de pagar <span className="text-destructive">3 imóveis</span> para ter 1</>}>
      <div className="grid gap-4 md:grid-cols-3">
        {cols.map((c) => (
          <div key={c.name} className={`glass rounded-2xl p-6 ${c.tone === "good" ? "border-primary ring-1 ring-primary shadow-[var(--shadow-glow)] md:-translate-y-2" : ""}`}>
            {c.tone === "good" && <span className="btn-cta mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-extrabold uppercase">O Método</span>}
            <h3 className="text-xl font-bold">{c.name}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {c.items.map(([t, ok]) => (
                <li key={t} className="flex items-start gap-2">
                  {ok ? <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> : <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />}
                  <span className={ok ? "" : "text-muted-foreground"}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

const COTAS = [100_000, 200_000, 300_000, 500_000];

function Simulator() {
  const [cota, setCota] = useState(200_000);
  const minP = Math.round(cota / 200), maxP = Math.round(cota / 80);
  const [parcelaPct, setParcelaPct] = useState(40);
  const parcela = Math.round(minP + ((maxP - minP) * parcelaPct) / 100);
  const r = useMemo(() => {
    const agio = cota * (0.12 + parcelaPct * 0.0013); // 12%–25% ilustrativo
    const renda = agio * 0.009; // ~0,9% a.m.
    return { agio, renda, cobre: Math.min(100, (renda / parcela) * 100) };
  }, [cota, parcela, parcelaPct]);
  return (
    <Section eyebrow="Simulador" title={<>Simule sua <span className="text-gradient">alavancagem</span></>}>
      <div className="glass mx-auto max-w-2xl rounded-3xl p-6 sm:p-8">
        <p className="text-sm font-semibold text-muted-foreground">Valor da carta</p>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {COTAS.map((v) => (
            <button key={v} onClick={() => setCota(v)} className={`rounded-xl py-3 text-sm font-bold transition ${cota === v ? "btn-cta" : "bg-secondary text-secondary-foreground"}`}>
              {v / 1000}k
            </button>
          ))}
        </div>
        <div className="mt-6 flex items-baseline justify-between">
          <p className="text-sm font-semibold text-muted-foreground">Parcela mensal estimada</p>
          <p className="text-lg font-bold">{brl(parcela)}</p>
        </div>
        <input type="range" min={0} max={100} value={parcelaPct} onChange={(e) => setParcelaPct(+e.target.value)} className="mt-3 w-full accent-primary" aria-label="Parcela mensal" />
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-accent p-5">
            <p className="text-xs font-semibold uppercase text-accent-foreground">Lucro projetado com ágio</p>
            <p className="text-gradient mt-1 font-display text-3xl font-extrabold">{brl(r.agio)}</p>
          </div>
          <div className="rounded-2xl bg-accent p-5">
            <p className="text-xs font-semibold uppercase text-accent-foreground">Rendimento passivo / mês</p>
            <p className="text-gradient mt-1 font-display text-3xl font-extrabold">{brl(r.renda)}</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-between text-xs text-muted-foreground"><span>Parcela coberta pelos rendimentos</span><span className="font-bold text-primary">{r.cobre.toFixed(0)}%</span></div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary"><div className="btn-cta h-full rounded-full transition-all" style={{ width: `${r.cobre}%` }} /></div>
        </div>
        <p className="mt-5 text-[11px] text-muted-foreground">*Simulação ilustrativa. Ágio e rendimentos variam conforme mercado, administradora e momento da contemplação.</p>
        <div className="mt-6"><Cta className="sm:w-full">Quero aplicar essa estratégia</Cta></div>
      </div>
    </Section>
  );
}

function Steps() {
  const steps = [
    [Search, "Escolha as cotas certas", "Como selecionar cotas no Inter e em outros bancos com a menor taxa de administração."],
    [Target, "Acelere a contemplação", "Estratégia de lance embutido + sorteio para sair contemplado muito antes."],
    [BadgeDollarSign, "Venda com ágio", "Como vender a carta contemplada legalmente, pelo próprio banco, com lucro."],
    [Repeat, "Piloto automático", "Reinvista o lucro para que os rendimentos paguem as próximas cotas."],
  ] as const;
  return (
    <Section eyebrow="O Método" title="4 passos para construir patrimônio">
      <div className="grid gap-4 sm:grid-cols-2">
        {steps.map(([Icon, t, d], i) => (
          <div key={t} className="glass relative rounded-2xl p-6">
            <span className="absolute right-5 top-4 font-display text-5xl font-extrabold text-primary/15">0{i + 1}</span>
            <div className="btn-cta flex h-11 w-11 items-center justify-center rounded-xl"><Icon className="h-5 w-5" /></div>
            <h3 className="mt-4 text-lg font-bold">Passo {i + 1}: {t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Included() {
  const items = [
    [PlayCircle, "Método completo passo a passo", "Vídeos e roteiro do zero até a primeira venda com ágio."],
    [FileSpreadsheet, "Planilha de Viabilidade de Cotas", "Calcule taxa, lance e lucro antes de entrar."],
    [FileLock2, "Roteiro blindado de transferência", "Transfira cartas com segurança jurídica."],
    [Headphones, "Suporte e atualizações", "Tire dúvidas e receba novas estratégias."],
  ] as const;
  return (
    <Section eyebrow="Pacote completo" title="Tudo o que você recebe">
      <div className="mx-auto max-w-2xl space-y-3">
        {items.map(([Icon, t, d]) => (
          <div key={t} className="glass flex items-center gap-4 rounded-2xl p-5">
            <Icon className="h-7 w-7 shrink-0 text-primary" />
            <div><h3 className="font-bold">{t}</h3><p className="text-sm text-muted-foreground">{d}</p></div>
            <Check className="ml-auto h-5 w-5 shrink-0 text-primary" />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Offer() {
  return (
    <section id="oferta" className="px-5 py-16">
      <div className="glass mx-auto max-w-md rounded-3xl border-primary p-8 text-center ring-1 ring-primary shadow-[var(--shadow-glow)]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Oferta por tempo limitado</p>
        <p className="mt-4 text-muted-foreground">De <span className="line-through">R$ 197</span> por apenas</p>
        <p className="mt-1 font-display text-6xl font-extrabold"><span className="text-2xl align-top">R$</span>37</p>
        <p className="text-sm text-muted-foreground">no Pix ou cartão • pagamento único</p>
        <div className="mt-6"><Cta className="sm:w-full">Garantir meu acesso agora</Cta></div>
        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-accent p-4 text-left">
          <ShieldCheck className="h-10 w-10 shrink-0 text-primary" />
          <p className="text-sm"><strong>Garantia incondicional de 7 dias.</strong> Não gostou? Devolvemos 100% do seu dinheiro, sem perguntas.</p>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Lock className="h-3 w-3" />Compra segura</span>
          <span className="flex items-center gap-1"><Zap className="h-3 w-3" />Acesso imediato</span>
          <span className="flex items-center gap-1"><TrendingUp className="h-3 w-3" />Vitalício</span>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    ["Preciso ter muito dinheiro para começar?", "Não. Existem cotas com parcelas acessíveis e o método mostra como começar pequeno e escalar usando o próprio lucro das vendas."],
    ["É legal e permitido pelo Banco Central?", "Sim. O consórcio é regulamentado pelo Banco Central (Lei 11.795/08) e a transferência de cotas é prevista em contrato e feita pela própria administradora."],
    ["Funciona no Banco Inter e outros bancos?", "Sim. O método funciona no Inter e em qualquer administradora autorizada; você aprende a comparar taxas e escolher a melhor."],
    ["E se demorar para ser contemplado?", "Você aprende estratégias de lance embutido e escolha de grupos para aumentar muito as chances de contemplação rápida — e mesmo cotas não contempladas podem ser negociadas."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="FAQ" title="Perguntas frequentes">
      <div className="mx-auto max-w-2xl space-y-3">
        {faqs.map(([q, a], i) => (
          <div key={q} className="glass rounded-2xl">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold">
              {q}<ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>}
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center"><Cta /></div>
    </Section>
  );
}
