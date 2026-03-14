import Option from "./Option";

export default function Settings() {
    return (
        <><div className="flex flex-row justify-center mb-8">
            <div className="flex flex-col bg-olive w-7/12 h-auto border-border border-post items-center pt-4 pb-8 px-6">
                <div className="flex flex-col items-center w-9/10 pb-8">
                    <p className="text-glow font-french-canon text-small pb-4">MAIN SETTINGS</p>
                    <hr className="w-full border-t border-border" />
                </div>

                {/* Options */}
                <div className="flex flex-col items-start w-9/10 gap-y-16">
                    <Option idName="music-toggle" label="ON" description="Turn Off MUSIC of this website by clicking the toggle button." />
                    <Option idName="surprise-button" description="Click The BUTTON for a suprise!!" />
                </div>
            </div>
        </div>
        <div className="flex flex-row justify-center">
            <div className="flex flex-col bg-olive w-7/12 h-auto border-border border-post items-center pt-4 pb-8 px-6">
                <div className="flex flex-col items-center w-9/10 pb-8">
                    <p className="text-glow font-french-canon text-small pb-4">EDIT PROFILE</p>
                    <hr className="w-full border-t border-border" />
                </div>

                {/* Edit details for username, editing profile picture, date of birth, password (IN TEXT FIELDS) */}
                <div className="flex flex-col items-start w-9/10 gap-y-16">
                    <Option idName="username" label="Edit Username" description="Change your username at any time." />
                    <Option idName="profile-picture" label="Edit Profile Picture" description="Upload a new profile picture." />
                    <Option idName="date-of-birth" label="Edit Date of Birth" description="Update your date of birth." />
                    <Option idName="password" label="Change Password" description="Update your password." />

                    <div className="absolute self-end flex w-32 h-8 bg-olive justify-center border border-border text-glow font-french-canon
                        text-xxxs cursor-pointer 
                        hover:text-shadow-compact hover:brightness-80 transition-all duration-300 ease-in-out">
                    </div>
                </div>
            </div>
        </div></>
    );
}