import React, { useState } from 'react';

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  desc: string;
  highlight?: boolean;
  features: string[];
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Básico',
    price: 'R$ 29',
    period: '/mês',
    desc: 'Essencial para quem está começando.',
    features: ['1 usuário', '5 GB de espaço', 'Suporte por e-mail', 'Atualizações semanais']
  },
  {
    id: 'pro',
    name: 'Profissional',
    price: 'R$ 79',
    period: '/mês',
    desc: 'Perfeito para pequenas equipes em crescimento.',
    highlight: true,
    features: ['Até 5 usuários', '50 GB de espaço', 'Suporte prioritário', 'Acesso à API', 'Relatórios avançados']
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'R$ 149',
    period: '/mês',
    desc: 'Sem limites para operações de grande escala.',
    features: ['Usuários ilimitados', '500 GB de espaço', 'Gerente de conta 24/7', 'SLA 99.9%', 'Customização total']
  }
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSubscribe = (plan: Plan) => {
    setSelectedPlan(plan.name);
    // ponytail: alert substitui gateway de pagamento; trocar por checkout Stripe/MercadoPago quando backend pronto
    alert(`Plano selecionado: ${plan.name} (${plan.price}${plan.period}). Redirecionando para pagamento...`);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Planos e Preços</h1>
        <p className="mt-4 text-lg text-slate-400">Escolha o pacote ideal para turbinar seu fluxo de trabalho.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((p) => (
          <div
            key={p.id}
            className={`flex flex-col justify-between rounded-2xl p-8 border ${
              p.highlight
                ? 'bg-slate-800 border-indigo-500 shadow-2xl ring-2 ring-indigo-500 relative'
                : 'bg-slate-800/60 border-slate-700'
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-semibold uppercase tracking-wider py-1 px-3 rounded-full">
                Mais Popular
              </span>
            )}
            <div>
              <h2 className="text-2xl font-bold">{p.name}</h2>
              <p className="mt-2 text-sm text-slate-400 min-h-[40px]">{p.desc}</p>
              <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight">{p.price}</span>
                <span className="ml-1 text-slate-400 font-medium">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300 text-left">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              onClick={() => handleSubscribe(p)}
              className={`mt-8 w-full py-3 px-4 rounded-xl font-semibold transition-all ${
                p.highlight
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-100'
              }`}
            >
              Assinar {p.name}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
