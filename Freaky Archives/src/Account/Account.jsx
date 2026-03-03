import Middlelayout from "../Contain/Middlelayout";
import Icon from "../Global/Icon";
import Mastercontainer from "./Mastercontainer";
import Prettytext from "./Prettytext";
import Resizebox from "./Resizebox";

export default function Account() {
    return (
        <Middlelayout>

            <Resizebox>
                <Icon  dimensions="w-40 h-38" />
                <Mastercontainer>
                </Mastercontainer>
            </Resizebox>

            <div className="bg-white h-px w-full my-2"></div>

            <Resizebox>
                <Icon dimensions="w-26 h-24" />
                <Mastercontainer>
                    <Prettytext>
                        Statement of Detective Alice "Daisy" Tonner, regarding a traffic stop...
                    </Prettytext>
                    <Prettytext>
                       Discuss anything and everything here.
                    </Prettytext>
                </Mastercontainer>
            </Resizebox>

            <Resizebox>
                <Icon dimensions="w-26 h-24" />
                <Mastercontainer>
                    <Prettytext>
                        Statement of Detective Alice "Daisy" Tonner, regarding a traffic stop...
                    </Prettytext>
                    <Prettytext>
                       Discuss anything and everything here.
                    </Prettytext>
                </Mastercontainer>
            </Resizebox>

        </Middlelayout>
    );
}