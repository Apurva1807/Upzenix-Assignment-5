const TopPlay = ({ song }) => {
  if (!song) {
    return (
      <div className="p-4 bg-gray-100 rounded mb-4">
        <p>No song selected</p>
      </div>
    );
  }
  return (
    <div className="p-4 bg-gray-100 rounded mb-4">
      <p className="font-bold">Now Playing</p>
      <p>{song.title}</p>
      <p className="text-sm text-gray-600">{song.artist}</p>

      <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
        Play / Pause
      </button>
    </div>
  );
};
export default TopPlay;