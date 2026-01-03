import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePlayerStore = create(
  persist(
    (set) => ({
      // playback state
      isPlaying: false,
      currentSong: null,

      // user preferences
      lastPlayed: null,
      selectedGenre: "All",

      // theme
      theme: "light",

      // actions
     playSong: (song) =>
     set((state) => ({
     isPlaying: true,
     lastPlayed: state.currentSong, 
     currentSong: song,            
  })),

      togglePlay: () =>
        set((state) => ({
          isPlaying: !state.isPlaying,
        })),

      setGenre: (genre) =>
        set({
          selectedGenre: genre,
        }),

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "player-storage", // localStorage key
    }
  )
);

export default usePlayerStore;