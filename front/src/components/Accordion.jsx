import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const goldMedalsData = {
  labels: [
    "United States of America",
    "Soviet Union",
    "Germany",
    "People's Republic of China",
    "Great Britain",
    "France",
    "Italy",
    "Sweden",
    "Norway",
    "Russian Federation",
    "German Democratic Republic",
    "Hungary",
    "Australia",
    "Japan",
    "Canada",
    "Netherlands",
    "Finland",
    "Republic of Korea",
    "Switzerland",
    "Romania",
  ],
  datasets: [
    {
      label: "Nombre de médailles d'or par pays",
      data: [
        1222, 510, 385, 333, 332, 282, 274, 219, 217, 214, 210, 192, 190, 188,
        163, 152, 148, 136, 123, 106,
      ],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const totalMedalsData = {
  labels: [
    "United States of America",
    "Soviet Union",
    "Germany",
    "Great Britain",
    "France",
    "People's Republic of China",
    "Italy",
    "Sweden",
    "Australia",
    "Canada",
    "Russian Federation",
    "Norway",
    "Japan",
    "German Democratic Republic",
    "Hungary",
    "Netherlands",
    "Finland",
    "Switzerland",
    "Republic of Korea",
    "Austria",
  ],
  datasets: [
    {
      label: "Nombre total de médailles par pays",
      data: [
        3094, 1272, 1167, 1045, 952, 807, 805, 709, 627, 602, 599, 589, 587,
        562, 559, 501, 490, 402, 393, 371,
      ],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const disciplineMedalsData = {
  labels: [
    "Athletics",
    "Swimming",
    "Wrestling",
    "Rowing",
    "Boxing",
    "Gymnastics Artistic",
    "Shooting",
    "Canoe Sprint",
    "Sailing",
    "Weightlifting",
    "Fencing",
    "Speed skating",
    "Judo",
    "Cycling Track",
    "Cross Country Skiing",
    "Alpine Skiing",
    "Diving",
    "Figure skating",
    "Tennis",
    "Biathlon",
  ],
  datasets: [
    {
      label: "Nombre de médailles par discipline",
      data: [
        3080, 1763, 1356, 1072, 996, 979, 871, 799, 771, 679, 668, 611, 607,
        578, 574, 494, 460, 405, 346, 286,
      ],
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
  ],
};

const athleteMedalsData = {
  labels: [
    "Michael PHELPS",
    "Larisa LATYNINA",
    "Marit BJOERGEN",
    "Nikolay ANDRIANOV",
    "Boris SHAKHLIN",
    "Takashi ONO",
    "Ireen WÜST",
    "Alexei NEMOV",
    "Ole Einar BJØRNDALEN",
    "Vitaly SCHERBO",
    "Sawao KATO",
    "Paavo NURMI",
    "Viktor Ivanovich CHUKARIN",
    "Björn DAEHLIE",
    "Aleksandr DITYATIN",
    "Dmitry SAUTIN",
    "Claudia PECHSTEIN",
    "Karin ENKE",
    "Gunda NIEMANN-STIRNEMANN",
  ],
  datasets: [
    {
      label: "Nombre de médailles par athlète",
      data: [16, 14, 12, 12, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8],
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderColor: "rgba(255, 159, 64, 1)",
      borderWidth: 1,
    },
  ],
};

const evolutionMedalsData = {
  labels: [
    1896, 1900, 1904, 1908, 1912, 1920, 1924, 1928, 1932, 1936, 1948, 1952,
    1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984,
  ],
  datasets: [
    {
      label: "Évolution du nombre de médailles au fil des années",
      data: [
        126, 292, 290, 343, 323, 457, 447, 377, 406, 445, 512, 538, 556, 568,
        642, 666, 744, 775, 797, 859,
      ],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

const genderMedalsData = {
  labels: [
    "Men - BRONZE",
    "Men - GOLD",
    "Men - SILVER",
    "Mixed - BRONZE",
    "Mixed - GOLD",
    "Mixed - SILVER",
    "Open - BRONZE",
    "Open - GOLD",
    "Open - SILVER",
    "Women - BRONZE",
    "Women - GOLD",
    "Women - SILVER",
  ],
  datasets: [
    {
      label: "Distribution des médailles par genre",
      data: [4874, 4541, 4518, 149, 149, 146, 322, 346, 330, 2186, 2076, 2066],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const seasonMedalsData = {
  labels: [
    "Summer - BRONZE",
    "Summer - GOLD",
    "Summer - SILVER",
    "Winter - BRONZE",
    "Winter - GOLD",
    "Winter - SILVER",
  ],
  datasets: [
    {
      label: "Répartition des médailles par saison (été/hiver)",
      data: [6277, 5840, 5802, 1252, 1269, 1257],
      backgroundColor: [
        "rgba(255, 206, 86, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 99, 132, 0.2)",
      ],
      borderColor: [
        "rgba(255, 206, 86, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const eventTypeMedalsData = {
  labels: [
    "Athlete - BRONZE",
    "Athlete - GOLD",
    "Athlete - SILVER",
    "GameTeam - BRONZE",
    "GameTeam - GOLD",
    "GameTeam - SILVER",
  ],
  datasets: [
    {
      label: "Nombre de médailles par type d'événement (individuel/équipe)",
      data: [5339, 4897, 4877, 2190, 2212, 2182],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const chartOptions = (title) => ({
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: title,
    },
  },
});

export default function Accordion() {
  const questions = [
    {
      title: "🏅 Nombre de médailles d'or par pays",
      data: goldMedalsData,
      options: chartOptions("Nombre de médailles d'or par pays"),
    },
    {
      title: "🏆 Nombre total de médailles par pays",
      data: totalMedalsData,
      options: chartOptions("Nombre total de médailles par pays"),
    },
    {
      title: "🥇 Nombre de médailles par discipline",
      data: disciplineMedalsData,
      options: chartOptions("Nombre de médailles par discipline"),
    },
    {
      title: "🏅 Nombre de médailles par athlète",
      data: athleteMedalsData,
      options: chartOptions("Nombre de médailles par athlète"),
    },
    {
      title: "📈 Évolution du nombre de médailles au fil des années",
      data: evolutionMedalsData,
      options: chartOptions(
        "Évolution du nombre de médailles au fil des années"
      ),
    },
    {
      title: "♀️♂️ Distribution des médailles par genre",
      data: genderMedalsData,
      options: chartOptions("Distribution des médailles par genre"),
    },
    {
      title: "🌞❄️ Répartition des médailles par saison (été/hiver)",
      data: seasonMedalsData,
      options: chartOptions("Répartition des médailles par saison (été/hiver)"),
    },
    {
      title:
        "👤👥 Nombre de médailles par type d'événement (individuel/équipe)",
      data: eventTypeMedalsData,
      options: chartOptions(
        "Nombre de médailles par type d'événement (individuel/équipe)"
      ),
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Tableau de Bord des Données des Jeux Olympiques
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {questions.map((question, index) => (
              <Disclosure as="div" className="pt-6" key={index}>
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {question.title}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <div className="px-4 sm:px-6 lg:px-8">
                        <Bar data={question.data} options={question.options} />
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
