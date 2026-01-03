import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-56 min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">Music App</h1>

      <nav className="flex flex-col gap-3">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;