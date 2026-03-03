import Middlelayout from "../Contain/Middlelayout";
import Icon from "../Global/Icon";
import Mastercontainer from "./Mastercontainer";
import Prettytext from "./Prettytext";
import Resizebox from "./Resizebox";
import Post from "./Post";

export default function Account() {
    return (
        <Middlelayout>

            <Resizebox>
                <Icon  dimensions="w-40 h-38" />
                <Mastercontainer>
                    <Prettytext>
                        I shall be the last, and when the universe is silent and still forever, I shall, perhaps, in that impossible moment, before I vanish, finally be satisfied.
                    </Prettytext>
                </Mastercontainer>
            </Resizebox>

            <div className="bg-white h-px w-full my-2"></div>

            <Post 
                title='Statement of Detective Alice "Daisy" Tonner, regarding a traffic stop...' 
                content='Discuss anything and everything here.' 
            />

            <Post 
                title='Statement of Detective Alice "Daisy" Tonner, regarding a traffic stop...' 
                content='Discuss anything and everything here.' 
            />

            {/* <Resizebox>
                <Icon dimensions="w-26 h-24" />
                <Mastercontainer>
                    <Prettytext>
                        Statement of Detective Alice "Daisy" Tonner, regarding a traffic stop...
                    </Prettytext>
                    <Prettytext>
                       Discuss anything and everything here.
                    </Prettytext>
                </Mastercontainer>
            </Resizebox> */}

        </Middlelayout>
    );
}