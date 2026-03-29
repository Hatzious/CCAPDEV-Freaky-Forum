import Click from "../Global/Click";

export default function PostButton() {
    return (
        <div className="flex justify-center items-center self-end w-[8vw] h-[5vh] mb-5 -mt-5 bg-olive border border-border 
                        font-french-canon
                        hover:text-shadow-glow hover:brightness-90 duration-300">
            <Click label="Create Post" to="/createpost" size="text-xxxs"/>
        </div>
    );
}