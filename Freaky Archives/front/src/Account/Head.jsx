import Resizebox from "./Resizebox";
import Icon from "../Global/Icon";
import Mastercontainer from "./Mastercontainer";
import Infocontainer from "./Infocontainer";
import Prettytext from "./Prettytext";
import { useAuth } from "../Services/Auth";

export default function Account() {
    const { user } = useAuth();
    return (
        <Resizebox>
            <Icon dimensions="w-40 h-38" source={user.profile.avatarUrl} />
            <Mastercontainer>
                <Prettytext fontSize="text-medium">
                    {user.username}
                </Prettytext>
                <Prettytext>
                    I shall be the last, and when the universe is silent and still forever, I shall, perhaps, in that impossible moment, before I vanish, finally be satisfied.
                </Prettytext>
                <Infocontainer />
            </Mastercontainer>
        </Resizebox>
    );
}