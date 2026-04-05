import Logo from "../Global/Logo";
import HBar from "./HBar.jsx"
import Click from "../Global/Click";
import Icon from "../Global/Icon";
import Middlelayout from "../Contain/Middlelayout";

export default function About() {
    return (
        <Middlelayout>
            <div className="flex flex-col bg-olive h-auto w-[66vw] border-border border py-1 px-6">
                <div className="flex flex-col gap-y-4 justify-center items-center pt-12 pb-12">
                    <Logo size="text-ml" />

                    <HBar text="ABOUT" />

                    <HBar text="CREATORS" />

                    <HBar text="FRAMEWORKS & PACKAGES" />

                    <HBar pic="../public/eyecursor.png" />
                </div>
            </div>
        </Middlelayout>
    );
}