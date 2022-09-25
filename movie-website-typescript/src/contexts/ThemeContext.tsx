import { createContext, ReactNode, useState } from "react";

interface ThemeContextProps {
    children: ReactNode;
}
interface ThemeContextDefault {
    theme: string;
    toggleTheme: (theme: string) => void;
}
const themeContextDefaultData: ThemeContextDefault = {
    theme: "primary",
    toggleTheme: () => {},
};
export const ThemeContext = createContext(themeContextDefaultData);

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
    const [theme, setTheme] = useState(themeContextDefaultData.theme);

    const toggleTheme = (theme: string) => {
        setTheme(theme);
    };
    const themeContextDynamicData = { theme, toggleTheme };
    return (
        <ThemeContext.Provider value={themeContextDynamicData}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
