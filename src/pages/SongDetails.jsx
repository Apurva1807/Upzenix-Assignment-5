import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
const SongDetails = () => {
  const { id } = useParams();
  const { songs } = useSelector((state) => state.music);

  const song = songs.find(
    (s) => s.id.toString() === id
  );

  if (!song) {
    return <p>Song not found</p>;
  }
  return (
    <div>
      <Link
        to="/"
        className="text-blue-500 mb-4 inline-block"
      >
        ← Back to Songs
      </Link>

      <div className="bg-white p-5 rounded shadow">
        <h2 className="text-2xl font-bold mb-2">
          {song.title}
        </h2>
        <p className="text-gray-700">
          <strong>Artist:</strong> {song.artist}
        </p>
        <p className="text-gray-700">
          <strong>Genre:</strong> {song.genre}
        </p>
        {/* Playback UI (basic) */}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Play / Pause
        </button>
      </div>
    </div>
  );
};
export default SongDetails;