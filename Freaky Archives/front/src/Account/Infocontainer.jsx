import Prettytext from "./Prettytext";

export default function Infocontainer() {
    return (
        <div className="flex w-full justify-between gap-x-2 pr-[30%]">
            <div className="flex flex-col gap-y-1">
                <Prettytext fontStyle="font-varela">Joined: 27/09/2006</Prettytext>
                <Prettytext fontStyle="font-varela">Followers: 0</Prettytext>
            </div>
            <div className="flex flex-col gap-y-1">
                <Prettytext fontStyle="font-varela">Last Active: 1 hour ago</Prettytext>
                <Prettytext fontStyle="font-varela">Following: 0</Prettytext>
            </div>
        </div>
    );
}