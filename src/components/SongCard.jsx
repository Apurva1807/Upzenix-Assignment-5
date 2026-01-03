import { Link } from "react-router-dom";

const SongCard = ({ song }) => {
  return (
    <div className="border rounded p-4 bg-white shadow hover:shadow-md transition">
      <h3 className="font-bold text-lg">{song.title}</h3>

      <p className="text-sm text-gray-600">{song.artist}</p>

      <p className="text-xs text-gray-500 mb-3">{song.genre}</p>

      <Link
        to={`/song/${song.id}`}
        className="text-blue-600 text-sm font-medium"
      >
        View Details
      </Link>
    </div>
  );
};

export default SongCard;