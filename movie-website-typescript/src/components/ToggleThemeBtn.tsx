import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../contexts/ThemeContext";

const ToggleThemeBtn = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <Button
            variant={theme === "light" ? "dark" : theme}
            onClick={toggleTheme.bind(
                this,
                theme === "primary" ? "light" : "primary"
            )}
            style={{ position: "fixed", right: "30px", bottom: "30px" }}
        >
            Toggle Theme
        </Button>
    );
};

export default ToggleThemeBtn;
