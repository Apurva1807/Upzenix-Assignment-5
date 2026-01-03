import axios from "axios";
// mock API function
export const fetchSongsApi = async () => {
  // using static data to simulate API response
  return [
    {
      id: 1,
      title: "Believer",
      artist: "Imagine Dragons",
      genre: "Rock",
    },
    {
      id: 2,
      title: "Shape of You",
      artist: "Ed Sheeran",
      genre: "Pop",
    },
    {
      id: 3,
      title: "Blinding Lights",
      artist: "The Weeknd",
      genre: "Pop",
    },
    {
      id: 4,
      title: "Lose Yourself",
      artist: "Eminem",
      genre: "Hip-Hop",
    },
  ];
};