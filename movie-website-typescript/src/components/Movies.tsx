import { ChangeEvent, useContext, useState } from "react";
import { Badge, Button, Form } from "react-bootstrap";
import { MovieContext } from "../contexts/MovieContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Movies = () => {
    // context
    const { theme } = useContext(ThemeContext);
    const { movies, addMovie, deleteMovie } = useContext(MovieContext);

    const [movie, setMovie] = useState("");
    const onMovieInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMovie(event.target.value);
    };
    return (
        <>
            <div className="d-flex mx-auto my-5" style={{ maxWidth: "300px" }}>
                <Form.Control
                    type="text"
                    placeholder="Your favorite movie..."
                    onChange={onMovieInputChange}
                    value={movie}
                />
                <Button
                    variant={theme === "light" ? "dark" : theme}
                    onClick={() => {
                        addMovie(movie);
                        setMovie("");
                    }}
                >
                    Add
                </Button>
            </div>
            <div className="d-flex justify-content-center">
                {movies.map((movie) => (
                    <h3>
                        <Badge
                            bg={theme === "light" ? "dark" : theme}
                            className="mx-1"
                        >
                            {movie.title}{" "}
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={deleteMovie.bind(this, movie.id)}
                            >
                                &times;
                            </span>
                        </Badge>
                    </h3>
                ))}
            </div>
        </>
    );
};
export default Movies;
