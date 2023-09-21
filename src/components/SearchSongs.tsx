"use client";
import { FormEvent, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Loading from "./Loading";

const SearchSongs = ({
  getSong,
  setSongs,
}: {
  getSong: Function;
  setSongs: Function;
}) => {
  const [songName, setSongName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (songName == "") {
      alert("Please enter a song name");
      return;
    }

    try {
      // Reset the value of songs
      setSongs([]);
      // Loading
      setLoading(true);
      // Get Data
      const res = await axios.get(
        `https://itunes.apple.com/search?entity=song&limit=10&term=${songName}`
      );
      const data = await res.data;

      if (data.resultCount <= 0) {
        alert(`No music was found with the name ${songName}`);
      } else {
        setSongName("");
        getSong(data.results);
      }
    } catch (error) {
      alert("Something went wrong. Please try again!");
    }

    setSongName("");
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-5">
          <form className="text-center" onSubmit={(e) => handleSubmit(e)}>
            <div className="relative">
              <button
                type="submit"
                className="absolute ml-4 mt-3.5 hover:scale-90"
              >
                <FaSearch className="text-white text-xl" />
              </button>
              <input
                type="text"
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
                className="bg-inputBackground text-white rounded-2xl w-3/4 p-3 pl-12 sm:text-xl sm:pl-14 focus:shadow-md focus:shadow-white"
                placeholder="seacrh song"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SearchSongs;
