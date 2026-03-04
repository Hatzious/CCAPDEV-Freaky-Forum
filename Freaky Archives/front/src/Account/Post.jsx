import Resizebox from "./Resizebox";
import Icon from "../Global/Icon";
import Mastercontainer from "./Mastercontainer";
import Prettytext from "./Prettytext";
import { useAuth } from "../Services/Auth";

export default function Post({ title = "Title", content = "Content" }) {
    const { user } = useAuth();

    return (
        <Resizebox>
            <Icon dimensions="w-26 h-24"  source={user.profile.avatarUrl} />
            <Mastercontainer>
                <Prettytext fontSize="text-xxxs">
                    {title}
                </Prettytext>
                <Prettytext>
                    {content}
                </Prettytext>
            </Mastercontainer>
        </Resizebox>
    );
}