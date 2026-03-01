import Row from "./Row";
import Middle from "./Middle";

const images = import.meta.glob('./pic/*.{png,jpg,jpeg,SVG}', { eager: true });
const allImages = Object.values(images).map((mod) => mod.default);

export default function Dread() {
    const topRow= allImages.slice(0, 5);
    const botRow= allImages.slice(5, 11);
    const midRow1= allImages.slice(11, 13);
    const midRow2= allImages.slice(13, 16);
    return (
        <div className="flex flex-col gap-y-24">
        <div className="flex items-center flex-col gap-x-1">
            <Row arr={topRow}/>
        </div>
        <div className="flex items-center flex-col gap-x-1">
            <Middle arr1={midRow1} arr2={midRow2} />
        </div>
        <div className="flex items-center flex-col gap-x-1">
            <Row arr={botRow}/>
        </div>
        </div>
    );
}