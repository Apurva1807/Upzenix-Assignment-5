import usePlayerStore from "../store/usePlayerStore";

const ThemeToggle = () => {
  const { theme, toggleTheme } = usePlayerStore();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;