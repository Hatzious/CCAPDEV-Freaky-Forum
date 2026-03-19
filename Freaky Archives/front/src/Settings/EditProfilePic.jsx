import Click from "../Global/Click";

export default function EditProfilePic({idName, placeholder="Edit Profile Picture", description}) {
    return (
        <div className="flex justify-between align-center w-full">
            <div className="text-glow font-french-canon text-xxxs">{description}</div>
                <div className="self-end flex w-64 h-8 bg-olive justify-center border border-border text-glow font-french-canon
                            text-xxxs cursor-pointer 
                            hover:text-shadow-compact hover:brightness-80 transition-all duration-300 ease-in-out">
                <Click label={placeholder} to="/Dread" size="text-xxxs" bordered={true} post="true"/>
            </div>
        </div>
    );
}