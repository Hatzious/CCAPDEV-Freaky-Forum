import Resizebox from "./Resizebox";
import Icon from "../Global/Icon";
import Mastercontainer from "./Mastercontainer";
import Infocontainer from "./Infocontainer";
import Prettytext from "./Prettytext";
import Edit from "./Edit";
import { API_BASE } from "../Services/api";
import { useState, useEffect } from "react";

export default function Head({ username, isOwnProfile = false }) {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);

            try {
                const response = await fetch(`${API_BASE}/Auth/user/${username}`);
                const data = await response.json();

                if (response.ok) {
                    setProfileData(data);
                } else {
                    console.error(data.message);
                }
            } catch (err) {
                console.error("Failed to fetch user profile:", error);
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchUser();
        }
    }, [username]);

    if (loading) {
        return <p>Loading profile...</p>;
    }

    if (!profileData) {
        return <p>User not found in archives.</p>;
    }
    
    return (
        <Resizebox>
            <Icon dimensions="w-40 h-38" source={profileData.profile.avatarUrl} />
            <Mastercontainer>
                {isOwnProfile && <Edit></Edit>}
                <Prettytext fontSize="text-medium">
                    {profileData.username}
                </Prettytext>
                <Prettytext>
                    {profileData.profile.bio}
                </Prettytext>
                <Infocontainer />
            </Mastercontainer>
        </Resizebox>
    );
}