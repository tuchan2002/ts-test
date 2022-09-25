import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import WelcomeMessage from "./WelcomeMessage";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ProgressContext } from "../contexts/ProgressContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Login from "./Login";
import { AuthContext } from "../contexts/AuthContext";

const NavbarMenu = () => {
    // context
    const {
        authInfo: { isAuthenticated },
        toggleAuth,
    } = useContext(AuthContext);
    const { lastTime, status } = useContext(ProgressContext);
    const { theme } = useContext(ThemeContext);
    const [position, setPosition] = useState<string>("Full-stack Developer");
    const [time, setTime] = useState<Date>(() => new Date(Date.now()));

    const [loginOpen, setLoginOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date(Date.now()));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const onPositionChange = (event: ChangeEvent<{ value: string }>) => {
        setPosition(event.target.value);
    };

    return (
        <Navbar bg={theme} variant="light">
            <Container>
                <Navbar.Brand href="#home">My movies</Navbar.Brand>
                <div className="d-flex flex-column align-items-center">
                    <WelcomeMessage position={position} />
                    <p className="mb-0">{`Last time working on this project: ${lastTime} - Status: ${status}`}</p>
                    <Form>
                        <Form.Control
                            as="select"
                            className="form-select mt-1"
                            value={position}
                            onChange={onPositionChange}
                        >
                            <option value="Full-stack Developer">
                                Full-stack Developer
                            </option>
                            <option value="Front-end Developer">
                                Front-end Developer
                            </option>
                            <option value="Back-end Developer">
                                Back-end Developer
                            </option>
                        </Form.Control>
                    </Form>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <h5 className="mb-1">{time.toUTCString()}</h5>
                    <Button
                        variant="dark"
                        onClick={
                            isAuthenticated
                                ? () => {
                                      toggleAuth("");
                                  }
                                : () => {
                                      setLoginOpen(true);
                                  }
                        }
                    >
                        {isAuthenticated ? "Logout" : "Login"}
                    </Button>
                </div>
            </Container>
            <Login isOpen={loginOpen} setIsOpen={setLoginOpen} />
        </Navbar>
    );
};

export default NavbarMenu;
