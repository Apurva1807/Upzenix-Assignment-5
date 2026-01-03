import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "../redux/musicSlice";
const GenreFilter = () => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector(
    (state) => state.music.selectedGenre
  );
  return (
    <select
      value={selectedGenre}
      onChange={(e) => dispatch(setGenre(e.target.value))}
      className="border p-2 mb-4"
    >
      <option value="All">All</option>
      <option value="Pop">Pop</option>
      <option value="Rock">Rock</option>
      <option value="Hip-Hop">Hip-Hop</option>
    </select>
  );
};
export default GenreFilter;