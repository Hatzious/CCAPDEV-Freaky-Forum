import EditProfilePic from "./EditProfilePic";
import DateOption from "./DateOption";
import PasswordOption from "./PasswordOption";
import FieldOption from "./FieldOption";
import Option from "./Option";
import Edit from "../Account/Edit";

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
        <div className="flex flex-row justify-center mb-8">
            <div className="flex flex-col bg-olive w-7/12 h-auto border-border border-post items-center pt-4 pb-8 px-6">
                <div className="flex flex-col items-center w-9/10 pb-8">
                    <p className="text-glow font-french-canon text-small pb-4">EDIT PROFILE</p>
                    <hr className="w-full border-t border-border" />
                </div>


                <div className="flex flex-col items-start w-9/10 gap-y-16">
                    <FieldOption idName="username" label="Edit Username" description="Change your username at any time."/>
                    <EditProfilePic idName="profile-pic" label="Edit Profile Picture" description="Update your profile picture." />
                    <DateOption idName="date-of-birth" label="Edit Date of Birth" description="Update your date of birth." />
                    <PasswordOption idName="password" label="Change Password" description="Update your password." />

                    <div className="content-end mt-4">
                        <div className="absolute self-end items-center w-36 h-8 pl-3 bg-accent-dark-1 border border-border text-glow font-french-canon
                            text-xxxs cursor-pointer 
                            hover:text-shadow-compact hover:brightness-80 transition-all duration-300 ease-in-out">
                            Save Changes
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-row justify-center mb-8">
            <div className="flex flex-col bg-olive w-7/12 h-auto border-border border-post items-center pt-4 pb-8 px-6">
                <div className="flex flex-col items-center w-9/10 pb-8">
                    <p className="text-glow font-french-canon text-small pb-4">DELETE ACCOUNT</p>
                    <hr className="w-full border-t border-border" />
                </div>

                <div className="flex flex-col items-start w-9/10 gap-y-16">
                    <Option idName="delete-account" label="ON" description="Clicking DELETE will permanently remove your account." />
                </div>
            </div>
        </div></>
    );
}