import { ChangeEvent, useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContext";

interface LoginProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ isOpen, setIsOpen }: LoginProps) => {
    // context
    const { toggleAuth } = useContext(AuthContext);

    const [username, setUsername] = useState("");

    const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const onLoginSubmit = () => {
        toggleAuth(username);
        setUsername("");
        handleClose();
    };

    const handleClose = () => {
        setIsOpen(false);
        setUsername("");
    };
    return (
        <Modal show={isOpen} onHide={handleClose}>
            <Form.Control
                type="text"
                placeholder="Username"
                required
                onChange={onUsernameChange}
                value={username}
                style={{ maxWidth: "300px" }}
                className="mx-auto my-3"
            />
            <Modal.Footer>
                <Button
                    variant="primary"
                    onClick={onLoginSubmit}
                    disabled={username === ""}
                >
                    LOGIN
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Login;
