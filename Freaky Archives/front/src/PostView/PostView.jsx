import Head from "./Head";
import Body from "./Body";
import Comments from "./Comments";

export default function PostView() {
    return (
        <div className="flex flex-row justify-center">
            <div className="w-7/12 h-screen flex flex-col justify-start">
                <Head title="title" author="author" date="00/00/0000" tags={["tag1","tag2"]} />
                <Body />
                <Comments />
            </div>
        </div>
    );
}