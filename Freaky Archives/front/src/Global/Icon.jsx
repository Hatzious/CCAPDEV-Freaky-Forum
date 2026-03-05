export default function Icon({classes = "", dimensions = "w-12 h-12", source = ""}) {
    const iconStyles = `flex ${dimensions} object-cover border-1 border-solid border-info mb-3 mt-3
            ${classes} 
            `;
    const defaultAvatar = "../../public/puppy.jpg";

    return (
        <img src={source || defaultAvatar} alt="User Icon" className={iconStyles}></img>
    );
}