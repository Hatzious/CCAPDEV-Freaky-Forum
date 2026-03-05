import Prettytext from "./Prettytext";
import { useAuth } from "../Services/Auth";
import { prettyDate, prettyTime } from "../Services/function";

export default function Infocontainer() {
    const { user } = useAuth();
    const formattedDate = prettyDate(user.createdAt);
    const formattedTime = prettyTime(user.status.lastActive);

    return (
        <div className="flex w-full justify-between gap-x-2 pr-[30%]">
            <div className="flex flex-col gap-y-1">
                <Prettytext fontStyle="font-varela">Joined: { formattedDate }</Prettytext>
                <Prettytext fontStyle="font-varela">Followers: { user.stats.followerCount }</Prettytext>
            </div>
            <div className="flex flex-col gap-y-1">
                <Prettytext fontStyle="font-varela">Last Active: { formattedTime } hours ago</Prettytext>
                <Prettytext fontStyle="font-varela">Following: { user.stats.followingCount }</Prettytext>
            </div>
        </div>
    );
}