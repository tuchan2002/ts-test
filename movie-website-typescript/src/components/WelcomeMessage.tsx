import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

interface WelcomeMessageProps {
    position: string;
    country?: string;
}
const WelcomeMessage = ({
    position,
    country = "Vietnam",
}: WelcomeMessageProps) => {
    const {
        authInfo: { username },
    } = useContext(AuthContext);
    return (
        <p className="mb-0">
            Welcome {username} - {position} from {country}
        </p>
    );
};
export default WelcomeMessage;
