import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

export default function SearchResults({ songs }) {
  const { searchItem } = useContext(SearchContext);

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="search-results">
      {searchItem && filteredSongs.length > 0 ? (
        filteredSongs.map(song => <div key={song.id}>{song.title}</div>)
      ) : searchItem ? (
        <p>No results found</p>
      ) : null}
    </div>
  );
}
