export default function Icon({classes = "", dimensions = "w-12 h-12"}) {
    const iconStyles = `flex ${dimensions} bg-olive border-1 border-solid border-info
            ${classes}
            `;

    return (
        <div className={iconStyles}></div>
    );
}