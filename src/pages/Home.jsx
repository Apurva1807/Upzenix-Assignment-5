import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
} from "../redux/musicSlice";
import { fetchSongsApi } from "../services/musicApi";
import SongCard from "../components/SongCard";
import GenreFilter from "../components/GenreFilter";

const Home = () => {
  const dispatch = useDispatch();
  const { songs, loading, error, selectedGenre } = useSelector(
    (state) => state.music
  );

  useEffect(() => {
    const loadSongs = async () => {
      dispatch(fetchSongsStart());
      try {
        const data = await fetchSongsApi();
        dispatch(fetchSongsSuccess(data));
      } catch (err) {
        dispatch(fetchSongsFailure("Failed to load songs"));
      }
    };

    loadSongs();
  }, [dispatch]);

  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter((song) => song.genre === selectedGenre);

  if (loading) return <p>Loading songs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Songs</h2>

      <GenreFilter />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Home;