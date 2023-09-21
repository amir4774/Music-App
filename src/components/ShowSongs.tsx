import ShowSong from "./ShowSong";
import { SongProps } from "./Interfaces";

const ShowSongs = ({ songs }: { songs: SongProps[] }) => {
  return (
    <div className="mt-10 mb-5 mx-2 sm:grid sm:grid-cols-2 sm:place-items-center sm:gap-3 sm:mx-20">
      {songs.map((song, index) => (
        <ShowSong song={song} key={index.toString()} />
      ))}
    </div>
  );
};

export default ShowSongs;
