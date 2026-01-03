import usePlayerStore from "../store/usePlayerStore";

const TopPlay = () => {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    lastPlayed,
  } = usePlayerStore();

  return (
    <div
      style={{
        padding: "10px",
        borderBottom: "1px solid #ccc",
        marginBottom: "10px",
      }}
    >
      {/* Now Playing */}
      {currentSong ? (
        <>
          <strong>Now Playing:</strong> {currentSong.title}
          <br />
          <button onClick={togglePlay}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </>
      ) : (
        <p>No song playing</p>
      )}

      {/* Last Played */}
      {lastPlayed && (
        <p style={{ fontSize: "12px", marginTop: "6px" }}>
          Last Played: <strong>{lastPlayed.title}</strong>
        </p>
      )}
    </div>
  );
};

export default TopPlay;