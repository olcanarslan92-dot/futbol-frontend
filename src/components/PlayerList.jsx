import React, { useEffect, useState } from "react";

function PlayerList({ teamId }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (!teamId) return;

    const fetchPlayers = async () => {
      try {
        const res = await fetch(`https://futbol-api-backend.onrender.com/api/players?team=${teamId}&season=2023`);
        const data = await res.json();
        setPlayers(data.response);
      } catch (err) {
        console.error("Oyuncular alınamadı:", err);
      }
    };

    fetchPlayers();
  }, [teamId]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Oyuncular</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {players.map((item) => {
          const player = item.player;
          const stats = item.statistics[0];
          return (
            <li key={player.id} className="bg-white p-4 shadow rounded">
              <h3 className="text-lg font-semibold">{player.name}</h3>
              <p>Mevkii: {stats.games.position}</p>
              <p>Forma No: {player.number || "?"}</p>
              <p>Goller: {stats.goals.total ?? 0}</p>
              <p>Asistler: {stats.goals.assists ?? 0}</p>
              <p>Kartlar: Sarı {stats.cards.yellow ?? 0}, Kırmızı {stats.cards.red ?? 0}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PlayerList;