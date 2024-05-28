import { useEffect, useState } from "react";
import Ipssi from "../assets/ipssi.png";
import api from "../services/api";

export default function LogoClouds() {
  const [athletes, setAthletes] = useState([]);
  useEffect(() => {
    const fetchData = async () => { 
      const res = await api.get(`athletes`)
      setAthletes(res);
    }
    fetchData()
  })
  console.log(athletes);
  return (
    <div className="bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Reconnu par les équipes les plus innovantes au monde
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Ipssi}
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://cdn-ukwest.onetrust.com/logos/d467003c-a2fe-4518-aa7a-02b5b6c63777/7a58de24-8e68-49f6-b740-580dd4e496ee/4b8266cc-66a6-49c5-8da7-48f0d4dadb8d/Unibet-logo.png"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://societeamission.com/wp-content/uploads/2020/06/1200px-Logo_de_la_Fran%C3%A7aise_des_jeux.svg.png"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://bsbstore.fr/cdn/shop/files/BSB_3D_LOGO11_1200x1200.png?v=1633361578"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
