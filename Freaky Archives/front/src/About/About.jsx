import Logo from "../Global/Logo";
import HBar from "./HBar.jsx"
import ProfileTile from "./ProfileTile.jsx";
import Click from "../Global/Click";
import Middlelayout from "../Contain/Middlelayout";

export default function About() {
    return (
        <Middlelayout>
            <div className="flex flex-col bg-olive h-auto w-[66vw] border-border border py-1 px-12">
                <div className="flex flex-col gap-y-4 justify-center items-center pt-12 pb-12">
                    <Logo size="text-ml" />

                    <HBar text="ABOUT" />
                    <p className="text-glow text-center font-french-canon">
                        This forum was developed with inspiration from Magnus Archives, a series of horror stories created by a group called <a href="https://rustyquill.com/show/the-magnus-archives/" className="text-secondary-1 hover:underline">Rusty Quill</a>. This forum website exists to provide a community around sharing and investigating horror stories. Most existing websites serve as non-persistent discussion boards even if the content revolves around horror fiction, but Freaky Archives provide a centralized venue for users to contribute to a repository of user-made horror stories (a.k.a creepy pasta) for everyone to access.
                    </p>
                    <p className="text-glow text-center font-french-canon">
                        Link to website source code: <a target="_blank" rel="noreferrer noopener" href="https://github.com/Hatzious/CCAPDEV-Freaky-Forum" className="text-secondary-1 hover:underline">Freaky Archives</a>
                    </p>
                    <HBar text="CREATORS" />
                    <div className="flex gap-x-16 text-center">
                        <ProfileTile name="Aya-ay, Viktor Rafale" pic="/creators/Rafale_Photo.jpg" />
                        <ProfileTile name="Esguerra, Darryl Matthew" pic="/creators/Darryl_Photo.jpg" />
                        <ProfileTile name="Policarpio, Rozette Dominique" pic="/creators/Rozette_Photo.jpg" />
                        <ProfileTile name="Tiu, Avram Nathaniel" pic="/creators/Tiu.jpg" />
                    </div>

                    <HBar text="FRAMEWORKS & PACKAGES" />
                    <div className="flex gap-x-64 font-french-canon">
                        <ul className="text-glow list-disc list-inside">
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>MongoDB Atlas</li>
                            <li>Mongoose</li>
                            <li>Express</li>
                            <li>Nodemon</li>
                        </ul>

                        <ul className="text-glow list-disc list-inside">
                            <li>react-outside-click-handler by airbnb</li>
                            <li>canvas-confetti by catdad</li>
                        </ul>
                    </div>

                    <HBar pic="../public/eyecursor.png" />
                </div>
            </div>
        </Middlelayout>
    );
}