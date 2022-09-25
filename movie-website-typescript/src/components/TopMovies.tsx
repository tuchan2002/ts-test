import { useContext, useEffect } from "react";
import { Card, Form, ListGroup } from "react-bootstrap";
import { TopMovieContext } from "../contexts/TopMovieContext";

const TopMovies = () => {
    // context
    const { topMovies, getTopMovies, toggleWatched } =
        useContext(TopMovieContext);

    useEffect(() => {
        getTopMovies();
    }, []);
    return (
        <Card className="shadow mx-3 my-3">
            <Card.Header>Top 10 movies of all time</Card.Header>
            <Card.Body>
                <ListGroup className="list-group-flush">
                    {topMovies.map((movie) => {
                        return (
                            <ListGroup.Item key={movie.imdbID}>
                                <Form.Check
                                    type="checkbox"
                                    label={movie.Title}
                                    checked={movie.Watched}
                                    onClick={() => {
                                        toggleWatched(movie.imdbID);
                                    }}
                                />
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};
export default TopMovies;
