import Click from "./Click";

export default function HoverBox({classes = "visible"}) {
    const HoverStyles = `absolute -z-0 w-60 h-50 -ml-55 mt-[7vh] bg-olive border-1 border-solid border-border
            flex flex-col items-center justify-center
            `;

    return (
        <nav className={`${HoverStyles} ${classes}`}>
            <Click label="ACCOUNT" /> <br></br>
            <Click label="SETTINGS" /> <br></br>
            <Click label="LOGOUT" />
        </nav>
        
    );
}