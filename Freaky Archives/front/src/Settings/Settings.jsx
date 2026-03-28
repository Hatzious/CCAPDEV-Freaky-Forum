import EditProfilePic from "./EditProfilePic";
import DateOption from "./DateOption";
import PasswordOption from "./PasswordOption";
import FieldOption from "./FieldOption";
import Option from "./Option";
import Edit from "../Account/Edit";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Services/Auth";
import { useState } from "react";
import { API_BASE } from "../Services/api";
import { useEffect } from "react";

export default function Settings() {
    const { user, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    if (!user) return null;

    const [formData, setFormData] = useState({
        username: user?.username || "",
        dob: user?.dob ? new Date(user.dob).toISOString().split('T')[0] : "",
        password: "",
        bio: user?.profile?.bio || ""
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleEdits = async () => {
        try {
            const response = await fetch(`${API_BASE}/Auth/updateProfile`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(formData) 
            });

            if (response.ok) {
                const data = await response.json();
                login(data.user);      
                if (formData.username !== user.username) {
                    navigate(`/account/${data.user.username}`);
                }
            }
        } catch (error) {
            console.error("Failed to update profile", error);
        }
    };
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
                    <FieldOption value={formData.username} onChange={(val) => handleChange("username", val)} idName="username" label="Edit Username" description="Change your username at any time."/>
                    <EditProfilePic idName="profile-pic" label="Edit Profile Picture" description="Update your profile picture." />
                    <DateOption value={formData.dob} onChange={(val) => handleChange("dob", val)} idName="date-of-birth" label="Edit Date of Birth" description="Update your date of birth." />
                    <PasswordOption value={formData.password} onChange={(val) => handleChange("password", val)} idName="password" label="Change Password" description="Update your password." />

                    <div className="content-end mt-4 mb-6">
                        <button onClick={handleEdits} className="self-end items-center w-36 h-8 pl-3 bg-accent-dark-1 border border-border text-glow font-french-canon
                            text-xxxs cursor-pointer 
                            hover:text-shadow-compact hover:brightness-80 transition-all duration-300 ease-in-out">
                            Save Changes
                        </button>
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