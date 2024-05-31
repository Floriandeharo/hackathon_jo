import React, { useEffect, useState } from "react";
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
import api from "../services/api";
import Expert from "./Expert";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Accordion() {
  const [chartsData, setChartsData] = useState([]);
  useEffect(() => {
    const fetchData = async (url) => {
      return await api.get(url);
    };

    const apiConfig = {
      GoldCountry: {
        columns: ["country_name", "gold_medals"],
        label: "🏅 Nombre de médailles d'or par pays",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
      TotalCountry: {
        columns: ["country_name", "total_medals"],
        label: "🏆 Nombre total de médailles par pays",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
      ByDiscipline: {
        columns: ["discipline_title", "total_medals"],
        label: "🥇 Nombre de médailles par discipline",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
      },
      ByAthlete: {
        columns: ["athlete_full_name", "total_medals"],
        label: "🏅 Nombre de médailles par athlète",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
      },
      ByYear: {
        columns: ["game_year", "total_medals"],
        label: "📈 Évolution du nombre de médailles au fil des années",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
      },
      BySeasonAndType: {
        columns: ["medal_type", "total_medals"],
        label: "🌞❄️ Répartition des médailles par saison (été/hiver)",
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
      },
      ByParticipantAndType: {
        columns: ["medal_type", "total_medals"],
        label: "♀️♂️ Distribution des médailles par genre",
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
      },
      ByGender: {
        columns: ["medal_type", "total_medals"],
        label:
          "👤👥 Nombre de médailles par type d'événement (individuel/équipe)",
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
      },
    };

    const loadAllData = async () => {
      const results = await Promise.all(
        Object.keys(apiConfig).map((url) =>
          fetchData("cleanMedals/medals/" + url + "?limit=20").then((data) => ({
            url,
            data,
          }))
        )
      );
      const transformedData = results.map(({ url, data }) => {
        const { columns, label, backgroundColor, borderColor } = apiConfig[url];
        return {
          labels: data.medals.map((element) => element[columns[0]]),
          datasets: [
            {
              label: label,
              data: data.medals.map((element) => element[columns[1]]),
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1,
            },
          ],
        };
      });
      setChartsData(transformedData);
    };
    loadAllData();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Tableau de Bord des Données des Jeux Olympiques
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {chartsData.map((question, index) => (
              <Disclosure as="div" className="pt-6" key={index}>
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {question.datasets[0].label}
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
                        <Bar data={question} />
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
      <Expert />
    </div>
  );
}
