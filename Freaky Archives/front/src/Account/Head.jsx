import Resizebox from "./Resizebox";
import Icon from "../Global/Icon";
import Mastercontainer from "./Mastercontainer";
import Infocontainer from "./Infocontainer";
import Prettytext from "./Prettytext";

export default function Account() {
    return (
        <Resizebox>
            <Icon dimensions="w-40 h-38" />
            <Mastercontainer>
                <Prettytext fontSize="text-medium">
                    John Oliver
                </Prettytext>
                <Prettytext>
                    I shall be the last, and when the universe is silent and still forever, I shall, perhaps, in that impossible moment, before I vanish, finally be satisfied.
                </Prettytext>
                <Infocontainer />
            </Mastercontainer>
        </Resizebox>
    );
}