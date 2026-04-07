import Logo from "../Global/Logo";
import HBar from "./HBar.jsx"
import ProfileTile from "./ProfileTile.jsx";
import Middlelayout from "../Contain/Middlelayout";

export default function About() {
    return (
        <Middlelayout>
            <div className="flex flex-col bg-olive h-auto w-[66vw] border-border border py-1 px-32">
                <div className="flex flex-col gap-y-4 justify-center items-center pt-12 pb-12">
                    <Logo size="text-ml" />

                    <HBar text="ABOUT" />
                    <p className="text-glow text-center font-french-canon">
                        This forum was developed with inspiration from Magnus Archives, a series of horror stories created by a group called <a target="_blank" rel="noreferrer noopener" href="https://rustyquill.com/show/the-magnus-archives/" className="text-secondary-1 hover:underline">Rusty Quill</a>. This forum website exists to provide a community around sharing and investigating horror stories. Most existing websites serve as non-persistent discussion boards even if the content revolves around horror fiction, but Freaky Archives provide a centralized venue for users to contribute to a repository of user-made horror stories (a.k.a creepy pasta) for everyone to access.
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

                    <HBar text="FRAMEWORKS & LIBRARIES" />
                    <div className="flex gap-x-32 font-french-canon">
                        <ul className="text-glow list-disc list-inside">
                            <li>Express.js <span className="text-secondary-1">by OpenJS Foundation</span></li>
                            <li>MongoDB <span className="text-secondary-1">by MongoDB Inc.</span></li>
                            <li>MongoDB Atlas <span className="text-secondary-1">by MongoDB Inc.</span></li>
                            <li>Node.js <span className="text-secondary-1">by OpenJS Foundation</span></li>
                            <li>Tailwind CSS <span className="text-secondary-1">by Tailwind Labs</span></li>
                            <li>Vite <span className="text-secondary-1">by Evan You</span></li>
                        </ul>

                        <ul className="text-glow list-disc list-inside">
                            <li>mongoose <span className="text-secondary-1">by Automattic</span></li>
                            <li>react <span className="text-secondary-1">by Meta</span></li>
                            <li>react-dom <span className="text-secondary-1">by Meta</span></li>
                            <li>react-markdown <span className="text-secondary-1">by remarkjs</span></li>
                            <li>react-router-dom <span className="text-secondary-1">by Remix Software</span></li>
                            <li>react-swipeable <span className="text-secondary-1">by FormidableLabs</span></li>
                        </ul>
                    </div>

                    <HBar text="PACKAGES" />
                    <div className="flex gap-x-64 font-french-canon justify-center">
                        <ul className="text-glow list-disc list-inside">
                            <li>bcrypt <span className="text-secondary-1">by kelektiv</span></li>
                            <li>canvas-confetti <span className="text-secondary-1">by catdad</span></li>
                            <li>connect-mongo <span className="text-secondary-1">by jdesboeufs</span></li>
                            <li>dotenv <span className="text-secondary-1">by motdotla</span></li>
                            <li>react-outside-click-handler <span className="text-secondary-1">by airbnb</span></li>
                            <li>nodemon <span className="text-secondary-1">by Remy Sharp</span></li>
                            <li>cors <span className="text-secondary-1">by Express.js</span></li>
                        </ul>
                    </div>

                    <HBar text="FAQ" />
                    <div className="text-glow font-french-canon">
                        <p className="text-center italic">
                            How do you delete posts?
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Hover over your profile picture {'>'} Account {'>'} Drag one of the existing posts to the left {'>'} Click the confirmation button</li>
                        </ul>
                        <br></br>

                        <p className="text-center italic">
                            How do you search specific topics?
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Click Search in the Navigation Bar {'>'} Type what you need to find</li>
                            <li>There are special conditions that you can include in your search:</li>
                            <ul className="pl-8">
                                <p>Default search (no tagging): Just searches titles of posts & users</p>
                                <p><span className="font-mono">author:{'<username>'}</span>: Searches posts made by a specific user; disables searching of users</p>
                                <p><span className="font-mono">#{'<tag>'}</span>: Searches posts with associated tag; can be multiple</p>
                                <p className="text-info">The possible tags are only the following: "TheEnd", "TheWeb", "TheEye", "TheCorruption", "TheBuried", "TheHunt", "TheDesolation", "TheSlaughter", "TheFlesh", "TheStranger", "TheSpiral", "TheLonely", "TheVast", and "TheDark". These are not case-sensitive.</p>
                            </ul> 
                        </ul>
                        <br></br>

                        <p className="text-center italic">
                            How do you filter and sort while searching?
                        </p>
                        <ul className="list-disc list-inside">
                            <li>In your search query, you can include one or both of the following:</li>
                            <ul className="pl-8">
                                <p><span className="font-mono">scorer:{'<"most"/"least">'}</span>: Sorts posts by most scored</p>
                                <p><span className="font-mono">viewer:{'<"most"/"least">'}</span>: Sorts posts by most viewed</p>
                            </ul> 
                        </ul>
                    </div>

                    <HBar pic="../public/eyecursor.png" />
                </div>
            </div>
        </Middlelayout>
    );
}