import Option from "./Option";

export default function Settings() {
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col bg-olive w-7/12 h-auto border-border border-post items-center pt-4 pb-8 px-6">
                <div className="flex flex-col items-center w-9/10 pb-8">
                    <p className="text-glow font-french-canon text-small pb-4">SETTINGS</p>
                    <hr className="w-full border-t border-border" />
                </div>

                {/* Options */}
                <div className="flex flex-col items-start w-9/10 gap-y-16">
                    <Option idName="music-toggle" label="ON" description="Turn Off MUSIC of this website by clicking the toggle button." />
                    <Option idName="surprise-button" description="Click The BUTTON for a suprise!!" />
                </div>
            </div>
        </div>
    );
}