import { SongProps } from "./Interfaces";
import Link from "next/link";

const ShowSong = ({ song }: { song: SongProps }) => {
  return (
    <Link
      href={`/search/${song.trackName}/${song.trackId}`}
      className="flex items-center my-4 pr-5 rounded bg-gradient-to-r from-cardBackgroundFirst to-cardBackgroundSecond transition-all duration-500 hover:w-full text-white hover:text-amber-300 hover:font-bold hover:bg-gradient-to-b active:opacity-60 sm:my-0 sm:w-4/5"
    >
      <div title={song.trackName}>
        <img src={song.artworkUrl100} className="rounded-l" />
      </div>
      <div className="ml-5 mb-4">
        <h1 className="text-lg">{song.trackName.length > 40 ? `${song.trackName.slice(0, 40)} ...` : song.trackName}</h1>
        <h3 className="opacity-50 text-white text-sm font-normal">
          {song.artistName.length > 50 ? `${song.artistName.slice(0, 50)} ...` : song.artistName}
        </h3>
      </div>
    </Link>
  );
};

export default ShowSong;
