import Resizebox from "../Account/Resizebox";
import Icon from "../Global/Icon";
import Mastercontainer from "../Account/Mastercontainer";
import Prettytext from "../Account/Prettytext";

export default function UserCard({ data }) {
    const { username, profile } = data || {};

    return (
        <Resizebox>
            <Icon dimensions="w-40 h-38" source={profile.avatarUrl} />
            <Mastercontainer>
                <Prettytext fontSize="text-medium">
                    {username}
                </Prettytext>
            </Mastercontainer>
        </Resizebox>
    );
}