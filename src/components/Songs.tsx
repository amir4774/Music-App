"use client";
import { useState } from "react";
import { SongProps } from "./Interfaces";
import SearchSongs from "./SearchSongs";
import ShowSongs from "./ShowSongs";
import BackButton from "./BackButton";

const Songs = () => {
  const [songs, setSongs] = useState<SongProps[]>([]);

  return (
    <>
      <BackButton text={"Back To Home"} prePage={"/"} />
      <SearchSongs
        getSong={(result: SongProps[]) => setSongs(result)}
        setSongs={setSongs}
      />
      <ShowSongs songs={songs} />
    </>
  );
};

export default Songs;
