import Click from "./Click";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Services/Auth";

export default function SearchBar({classes = "visible"}) {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const loggingout = () => {
        logout();
        navigate("/");
    };
    const HoverStyles = `absolute -z-0 w-60 h-50 -mr-8 bg-olive border-1 border-solid border-border
            flex flex-col items-center justify-center top-full right-0 blur-none
            before:content-[''] 
            before:absolute 
            before:-top-4 
            before:left-0 
            before:w-full 
            before:h-4
            `;

    return (
        <><div className="">
        </div>
        <nav className={`${HoverStyles} ${classes}`}>
            <Click label="ACCOUNT" menu={true} to="/account" /> <br></br>
            <Click label="SETTINGS" menu={true} to="/settings" /> <br></br>
            <Click label="LOGOUT" menu={true} onClick={loggingout} />
        </nav></>
    );
}