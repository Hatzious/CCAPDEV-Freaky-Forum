import Resizebox from "../Account/Resizebox";
import Click from "../Global/Click";
import Icon from "../Global/Icon";
import Mastercontainer from "../Account/Mastercontainer";

export default function UserCard({ data }) {
    const { username, profile } = data || {};

    return (
        <Resizebox>
            <Icon dimensions="w-40 h-38" source={profile?.avatarUrl || "/puppy.jpg"} />
            <Mastercontainer>
                <Click 
                label={username}
                size="text-medium"
                to={`/account/${username}`}
                />
            </Mastercontainer>
        </Resizebox>
    );
}