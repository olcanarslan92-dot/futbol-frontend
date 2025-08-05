import React, { useEffect, useState } from "react";
import { getLeagues } from "../services/api";
import PlayerList from "./PlayerList";
import TeamList from "./TeamList";
import { useTranslation } from "react-i18next";

function LeagueList() {
  const [leagues, setLeagues] = useState([]);
  const [selectedLeagueId, setSelectedLeagueId] = useState(null);
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLeagues();
      setLeagues(res.response);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{t("Leagues")}</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {leagues.map((league) => (
          <li
            key={league.league.id}
            onClick={() => {
              setSelectedLeagueId(league.league.id);
              setSelectedTeamId(null); // Reset player view
            }}
            className="cursor-pointer bg-white p-4 rounded shadow hover:bg-gray-100"
          >
            <img src={league.league.logo} alt={league.league.name} className="h-10 mx-auto mb-2" />
            <p className="text-center font-semibold">{league.league.name}</p>
          </li>
        ))}
      </ul>

      {/* Takımlar */}
      {selectedLeagueId && (
        <TeamList leagueId={selectedLeagueId} onSelectTeam={setSelectedTeamId} />
      )}

      {/* Oyuncular */}
      {selectedTeamId && <PlayerList teamId={selectedTeamId} />}
    </div>
  );
}

export default LeagueList;
