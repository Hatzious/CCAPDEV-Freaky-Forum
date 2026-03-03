import Resizebox from "./Resizebox";
import Icon from "../Global/Icon";
import Mastercontainer from "./Mastercontainer";
import Prettytext from "./Prettytext";

export default function Post({ title = "Title", content = "Content" }) {
    return (
        <Resizebox>
            <Icon dimensions="w-26 h-24" />
            <Mastercontainer>
                <Prettytext textSize="text-xxxs">
                    {title}
                </Prettytext>
                <Prettytext>
                    {content}
                </Prettytext>
            </Mastercontainer>
        </Resizebox>
    );
}