import { FaDownload } from "react-icons/fa";
import BackButton from "@/components/BackButton";
import Music from "@/components/Music";
import { SongProps } from "@/components/Interfaces";

const Song = ({ song }: { song: SongProps }) => {
  return (
    <div className="mb-10">
      <BackButton text={"Back To Search"} prePage={"/search"} />

      <div className="mt-6">
        <div className="w-3/4 mx-auto sm:w-1/4">
          <div className="hover:cursor-pointer" title={song.trackName}>
            <a target="_blank" href={song.trackViewUrl}>
              <img src={song.artworkUrl100} className="rounded w-full h-1/2" />
            </a>
          </div>

          <div className="flex justify-between items-center text-white my-4">
            <div>
              <h1 className="text-lg sm:text-2xl">
                {song.trackName.length > 30
                  ? `${song.trackName.slice(0, 30)} ...`
                  : song.trackName}
              </h1>
              <h3 className="opacity-50 underline">
                <a
                  target="_blank"
                  className="hover:text-sky-300"
                  href={song.artistViewUrl}
                >
                  {song.artistName.length > 30
                    ? `${song.artistName.slice(0, 30)} ...`
                    : song.artistName}
                </a>
              </h3>
            </div>

            <a href={song.previewUrl}>
              <button className="bg-backColor p-3 flex items-center rounded hover:opacity-90">
                <span className="hidden sm:block">Download</span>
                <FaDownload className="ml-0 sm:ml-2" />
              </button>
            </a>
          </div>
        </div>

        <Music src={song.previewUrl} />
      </div>
    </div>
  );
};

export default Song;
