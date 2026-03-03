import Prettytext from "./Prettytext";

export default function Infocontainer() {
    return (
        <div className="flex w-full gap-x-2">
            <Prettytext>Joined: 27/09/2006</Prettytext>
            <Prettytext>Followers: 0</Prettytext>
            <Prettytext>Last Active: 1 hour ago</Prettytext>
            <Prettytext>Following: </Prettytext>
        </div>
    );
}