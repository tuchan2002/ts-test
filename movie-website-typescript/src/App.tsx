import React from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";
import Movies from "./components/Movies";
import NavbarMenu from "./components/NavbarMenu";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import TopMovies from "./components/TopMovies";
import AuthContextProvider from "./contexts/AuthContext";
import MovieContextProvider from "./contexts/MovieContext";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import TopMovieContextProvider from "./contexts/TopMovieContext";

function App() {
    return (
        <TopMovieContextProvider>
            <AuthContextProvider>
                <MovieContextProvider>
                    <ProgressContextProvider>
                        <ThemeContextProvider>
                            <NavbarMenu />
                            <Row>
                                <Col md={4}>
                                    <TopMovies />
                                </Col>
                                <Col md={8}>
                                    <Movies />
                                </Col>
                            </Row>
                            <ToggleThemeBtn />
                        </ThemeContextProvider>
                    </ProgressContextProvider>
                </MovieContextProvider>
            </AuthContextProvider>
        </TopMovieContextProvider>
    );
}

export default App;
