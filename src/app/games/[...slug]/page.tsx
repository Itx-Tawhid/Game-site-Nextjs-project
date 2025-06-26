import { games } from "@/app/data/games";
import React from "react";

const MainGamePage = ({ params }: { params: { slug: string[] } }) => {
  const { slug } = params;
  const [categories, GameSlug] = slug;
  const game = games.find(
    (game) => game.category === categories && game.slug === GameSlug
  );
  console.log("-----------", params);
  return <div></div>;
};

export default MainGamePage;
