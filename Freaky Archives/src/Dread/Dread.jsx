import Row from "./Row";

const images = import.meta.glob('./pic/*.{png,jpg,jpeg,SVG}', { eager: true });
const allImages = Object.values(images).map((mod) => mod.default);

export default function Dread() {
    const topRow= allImages.slice(0, 5);
    const botRow= allImages.slice(5, 11);
    return (
        <div className="flex items-center flex-col gap-x-1">
            <Row arr={topRow}/>
        </div>
    );
}