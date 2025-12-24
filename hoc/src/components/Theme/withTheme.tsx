import React from "react";

export type ThemeType = "dark" | "light";

interface WithThemeProps {
  theme: ThemeType;
  children?: any; 
}

const withTheme = <P extends object>(
  WrappedComponent: React.ComponentType<P & { children?: any }>
) => {
  const ComponentWithTheme: React.FC<P & WithThemeProps> = ({ theme, children, ...props }) => {
    const themeClasses =
      theme === "dark" ? "bg-black text-white" : "bg-white text-black";

    return (
      <div className={`${themeClasses} min-h-screen p-6 transition-colors duration-300`}>
        <WrappedComponent {...(props as P)}>{children}</WrappedComponent>
      </div>
    );
  };

  return ComponentWithTheme;
};

export default withTheme;
