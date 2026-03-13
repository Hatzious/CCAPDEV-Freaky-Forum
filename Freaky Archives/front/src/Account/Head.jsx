import Resizebox from "./Resizebox";
import Icon from "../Global/Icon";
import Mastercontainer from "./Mastercontainer";
import Infocontainer from "./Infocontainer";
import Prettytext from "./Prettytext";
import Edit from "./Edit";
import { useAuth } from "../Services/Auth";

export default function Account() {
    const { user } = useAuth();
    return (
        <Resizebox>
            <Icon dimensions="w-40 h-38" source={user.profile.avatarUrl} />
            <Mastercontainer>
                <Edit></Edit>
                <Prettytext fontSize="text-medium">
                    {user.username}
                </Prettytext>
                <Prettytext>
                    {user.profile.bio}
                </Prettytext>
                <Infocontainer />
            </Mastercontainer>
        </Resizebox>
    );
}