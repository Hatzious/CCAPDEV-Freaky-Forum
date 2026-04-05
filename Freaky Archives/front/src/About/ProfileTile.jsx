export default function ProfileTile({ name, pic="../../public/puppy.jpg" }) {
    return (
        <div className="flex flex-col gap-y-4 items-center w-40">
            <img className="h-40 aspect-square hover:scale-110 transition-transform duration-200" src={pic}></img>
            <span className="text-glow font-scary">{name}</span>
        </div>
    );
}