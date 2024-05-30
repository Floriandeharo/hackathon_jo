import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];
const tiers = [
  {
    name: "Analyse et Visualisation des Données Olympiques",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "$15", annually: "$144" },
    description: "The essentials to provide your best work for clients.",
    features: [
      "Explorer un vaste ensemble de données couvrant les Jeux Olympiques de 1896 à 2022.",
      "Identifier les pays dominants sur la durée, par saison et par sport.",
      "Analyser les facteurs clés pour exceller dans chaque discipline olympique.",
      "Étudier la popularité des sports et la corrélation entre le nombre de médailles olympiques et le PIB des pays participants.",
    ],
    featured: false,
    cta: "Buy plan",
  },
  {
    name: "Prédiction des Performances Olympiques",
    id: "tier-startup",
    href: "#",
    price: { monthly: "$30", annually: "$288" },
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "Utiliser des techniques d'apprentissage automatique sur l'ensemble de données olympiques.",
      "Prédire le nombre de médailles que chaque pays pourrait remporter aux Jeux Olympiques de Paris 2024 à l'aide du modèle XXX.",
    ],
    featured: false,
    cta: "Buy plan",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function About() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Hackathon - MIA
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Nos Objectifs
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Découvrez les objectifs ambitieux de notre projet, visant à explorer
          les données olympiques et à prédire les performances futures grâce à
          l'apprentissage automatique.
        </p>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? "bg-gray-900 ring-gray-900" : "ring-gray-200",
                "rounded-3xl p-8 ring-1 xl:p-10"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-900",
                  "text-lg font-semibold leading-8"
                )}
              >
                {tier.name}
              </h3>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-3 text-sm leading-6 xl:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={classNames(
                        tier.featured ? "text-white" : "text-indigo-600",
                        "h-6 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-gray-900 ring-gray-900 rounded-3xl p-8 ring-1 xl:p-10">
            <h3 className="text-white text-lg font-semibold leading-8">
              Ressources
            </h3>
            <ul
              role="list"
              className="text-gray-300 mt-8 space-y-3 text-sm leading-6 xl:mt-10"
            >
              <li className="flex gap-x-3 gap-y-5 flex-col">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 bg-white/10 hover:bg-white/20 rounded-sm w-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <img
                    src="https://qph.cf2.quoracdn.net/main-qimg-729a22aba98d1235fdce4883accaf81e"
                    alt=""
                    className="-ml-0.5 h-5 w-5"
                  />
                  GitHub - Visualizations
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 bg-white/10 hover:bg-white/20 rounded-sm w-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <img
                    src="https://qph.cf2.quoracdn.net/main-qimg-729a22aba98d1235fdce4883accaf81e"
                    alt=""
                    className="-ml-0.5 h-5 w-5"
                  />
                  Presentaion - Visualizations
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 bg-white/10 hover:bg-white/20 rounded-sm w-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <img
                    src="https://qph.cf2.quoracdn.net/main-qimg-729a22aba98d1235fdce4883accaf81e"
                    alt=""
                    className="-ml-0.5 h-5 w-5"
                  />
                  Presentaion - Machine Learning
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 bg-white/10 hover:bg-white/20 rounded-sm w-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <img
                    src="https://qph.cf2.quoracdn.net/main-qimg-729a22aba98d1235fdce4883accaf81e"
                    alt=""
                    className="-ml-0.5 h-5 w-5"
                  />
                  GitHub - Visualizations
                </button>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}
