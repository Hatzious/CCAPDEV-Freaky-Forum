import Click from "../Global/Click";

export default function Edit() {
    return (
        <button className=" absolute self-end flex w-32 h-8 bg-olive justify-center border border-border text-glow font-french-canon
                            text-xxxs cursor-pointer 
                            hover:text-shadow-compact hover:brightness-80 transition-all duration-300 ease-in-out">
            <Click label="Edit Profile" to="/settings" size="text-xxxs" bordered={true} post="true"/>
        </button>
    );
}