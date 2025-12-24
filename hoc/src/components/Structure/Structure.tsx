import { useState } from "react";
import Users from "../User/User";      
import Products from "../Products/Products"; 

const Structure: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [loading, setLoading] = useState(true);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const bgClass = theme === "dark" ? "bg-black text-white" : "bg-white text-black";

  return (
    <div className={`${bgClass} min-h-screen p-6 transition-colors duration-300`}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Current Theme: {theme.toUpperCase()}</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-indigo-600 text-white"
        >
          Toggle Theme
        </button>
      </div>

      <div className="mt-10 space-y-4">
        <Users loading={loading} />
        <Products loading={loading} />

        <button
          onClick={() => setLoading(false)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Stop Loading
        </button>
      </div>
    </div>
  );
};

export { Structure };
