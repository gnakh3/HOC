import { useState } from "react";

import ThemedPage from "../Theme/ThemedPage";
import Users from "../User/User";
import Products from "../Products/Products";
import type { ThemeType } from "../Theme/withTheme";

export const Structure: React.FC = () => {
  const [theme, setTheme] = useState<ThemeType>("dark");
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemedPage theme={theme} toggleTheme={toggleTheme}>
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
    </ThemedPage>
  );
};
