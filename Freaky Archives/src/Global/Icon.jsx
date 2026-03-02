export default function Icon({classes = ""}) {
    const iconStyles = `flex w-12 h-12 bg-olive border-1 border-solid border-border
            ${classes}
            `;

    return (
        <div className={iconStyles}></div>
    );
}