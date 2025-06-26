import React from "react";
import { games } from "../data/games";
import Link from "next/link.js";

const GamesPage = () => {
  return (
    <div>
      <h1>Explore Games</h1>
      <div>
        {games.map((game) => (
          <Link
            key={game.id}
            href={`/games/${game.category}/${game.slug}`}
            className="text-3xl p-4"
          >
            {game.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
