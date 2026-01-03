import { Link } from "react-router-dom";
import usePlayerStore from "../store/usePlayerStore";

const SongCard = ({ song }) => {
  const playSong = usePlayerStore((state) => state.playSong);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        marginBottom: "16px",
        borderRadius: "6px",
        backgroundColor: "#fff",
      }}
    >
      <h3 style={{ fontWeight: "bold" }}>{song.title}</h3>
      <p>{song.artist}</p>
      <p style={{ fontSize: "12px", color: "#666" }}>{song.genre}</p>

      <button onClick={() => playSong(song)}>
        Play
      </button>

      <br />
      <Link to={`/song/${song.id}`}>View Details</Link>
    </div>
  );
};

export default SongCard;