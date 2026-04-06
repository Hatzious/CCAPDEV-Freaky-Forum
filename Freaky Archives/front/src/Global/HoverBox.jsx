import Click from "./Click";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Services/Auth";

export default function HoverBox({classes = "visible", type = "", onFilter}) {
    const { logout, user } = useAuth();
    const navigate = useNavigate();
    const loggingout = () => {
        logout();
        navigate("/");
    };

     if (!user) return null;
     
    const HoverStyles = `absolute -z-0 w-60 h-50 -mr-8 bg-olive border border-border
            flex flex-col items-center justify-center top-full right-0 blur-none
            before:content-[''] 
            before:absolute 
            before:-top-4 
            before:left-0 
            before:w-full 
            before:h-4
            `;

    const FilterSyles = `absolute -z-0 w-40 h-40 -mr-40 mt-[18vh] bg-olive border border-border gap-y-2
            flex flex-col items-center justify-center right-0 blur-none`

    if (type === "navbar") {
        return (
            <nav className={`${HoverStyles} ${classes}`}>
                <Click label="ACCOUNT" menu={true} to={`/account/${user.username}`}  /> <br></br>
                <Click label="SETTINGS" menu={true} to="/settings" /> <br></br>
                <Click label="LOGOUT" menu={true} onClick={loggingout} />
            </nav>
        );
    }

    if (type === "filter") {
        return (
            <nav className={`${FilterSyles} ${classes}`}>
                <Click label="Most Upvoted" onClick={() => onFilter('scorer', 'most')} size="xxxs"/>
                <Click label="Most Downvoted" onClick={() => onFilter('scorer', 'least')} size="xxxs"/>
                <Click label="Most Viewed" onClick={() => onFilter('viewer', 'most')} size="xxxs"/> 
                <Click label="Least Viewed" onClick={() => onFilter('viewer', 'least')} size="xxxs"/>
            </nav>
        );
    }
}