import Song from "./Song";
import { createAxiosInstance } from "@/components/Axios";

async function getSong(trackId: string) {
  const res = await createAxiosInstance(`lookup?id=${trackId}`);
  const data = await res.data;

  return data.results[0];
}

export async function generateMetadata({ params: { trackId } }: { params: { trackId: string } }) {
  const res = await createAxiosInstance(`lookup?id=${trackId}`);
  const data = await res.data;
  const title = data.results[0].trackName;

  return {
    title: `${title}`
  }
}

const Songpage = async ({
  params: { trackId },
}: {
  params: { trackId: string };
}) => {
  const song = await getSong(trackId);

  return (
    <>
      <Song song={song} />
    </>
  );
};

export default Songpage;
