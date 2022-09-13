import React from "react";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = (props) => {
  const favoriteCtx = useContext(FavoritesContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>No Favorites Found</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites}></MeetupList>;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
