import React from 'react';
import { useEffect, useState } from 'react';
import { getLeagues } from '../services/api';
import { useTranslation } from 'react-i18next';


export default function LeagueList() {
  const { t } = useTranslation();
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLeagues().then(data => {
      setLeagues(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>{t("loading")}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {leagues.map((item) => (
        <div key={item.league.id} className="p-4 border rounded-xl shadow">
          <img src={item.league.logo} alt={item.league.name} className="h-10 mx-auto mb-2" />
          <p className="text-center font-semibold">{item.league.name}</p>
        </div>
      ))}
    </div>
  );
}