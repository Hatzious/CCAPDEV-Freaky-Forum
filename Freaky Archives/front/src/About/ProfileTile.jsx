export default function ProfileTile({ name, pic="../../public/puppy.jpg" }) {
    return (
        <div className="flex flex-col gap-y-4 items-center">
            <img className="h-64 aspect-square" src={pic}></img>
            <span className="text-glow font-scary">{name}</span>
        </div>
    );
}