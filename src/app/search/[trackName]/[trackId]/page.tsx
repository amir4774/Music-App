import axios from "axios";
import Song from "./Song";

async function getSong(trackId: number) {
  const res = await axios.get(`https://itunes.apple.com/lookup?id=${trackId}`);
  const data = await res.data;

  return data.results[0];
}

export async function generateMetadata({ params: { trackId } }: { params: { trackId: number } }) {
  const res = await axios.get(`https://itunes.apple.com/lookup?id=${trackId}`);
  const data = await res.data;
  const title = data.results[0].trackName;

  return {
    title: `${title}`
  }
}

const Songpage = async ({
  params: { trackId },
}: {
  params: { trackId: number };
}) => {
  const song = await getSong(trackId);

  return (
    <>
      <Song song={song} />
    </>
  );
};

export default Songpage;
