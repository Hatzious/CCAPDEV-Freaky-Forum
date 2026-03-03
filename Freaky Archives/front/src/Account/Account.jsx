import Middlelayout from "../Contain/Middlelayout";
import Head from "./Head";
import Post from "./Post";

export default function Account() {
    return (
        <Middlelayout>

            <Head />

            <div className="bg-white h-px w-full my-2"></div>

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

            <Post 
                title='Statement of Detective Alice "Daisy" Tonner, regarding a traffic stop...' 
                content='Discuss anything and everything here.' 
            />

            <Post 
                title='Statement of Detective Alice "Daisy" Tonner, regarding a traffic stop...' 
                content='Discuss anything and everything here.' 
            />

        </Middlelayout>
    );
}