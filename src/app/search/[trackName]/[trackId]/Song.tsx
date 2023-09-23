import { FaDownload } from "react-icons/fa";
import BackButton from "@/components/BackButton";
import Music from "@/components/Music";
import { SongProps } from "@/components/Interfaces";

const Song = ({ song }: { song: SongProps }) => {
  return (
    <>
      <BackButton text={"Back To Search"} prePage={"/search"} />

      <div className="mt-6 mb-10">

        <div className="w-3/4 mx-auto sm:w-1/4">
          <div className="hover:cursor-pointer" title={song.trackName}>
            <a target="_blank" href={song.trackViewUrl}>
              <img src={song.artworkUrl100} className="rounded w-full h-1/2" />
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center text-white my-4 w-3/4 mx-auto sm:w-1/2">
          <div>
            <h1 className="text-lg sm:text-2xl">
              {song.trackName.length > 40
                ? `${song.trackName.slice(0, 40)} ...`
                : song.trackName}
            </h1>
            <h3 className="opacity-50 underline">
              <a
                target="_blank"
                className="hover:text-sky-300"
                href={song.artistViewUrl}
              >
                {song.artistName.length > 45
                  ? `${song.artistName.slice(0, 45)} ...`
                  : song.artistName}
              </a>
            </h3>
          </div>

          <a href={song.previewUrl}>
            <button className="bg-backColor p-3 flex items-center rounded hover:opacity-90">
              <span className="hidden sm:block">Download</span>
              <FaDownload className="ml-0 animate-bounce sm:ml-2" />
            </button>
          </a>
        </div>

        <Music src={song.previewUrl} />
      </div>
    </>
  );
};

export default Song;
