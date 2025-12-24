import type { ThemeType } from "./withTheme";

interface ThemeProps {
  theme: ThemeType;
  toggleTheme: () => void;
  children?: any; 
}

const Theme: React.FC<ThemeProps> = ({ theme, toggleTheme, children }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">
          Current Theme: {theme.toUpperCase()}
        </h1>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-indigo-600 text-white"
        >
          Toggle Theme
        </button>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Theme;
