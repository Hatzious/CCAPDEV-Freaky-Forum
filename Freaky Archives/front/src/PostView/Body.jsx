export default function Body({text = "oops body issue"}) {
    return (
        <div className="flex flex-col bg-olive h-auto w-full border-border border-post items-start py-6 px-6 gap-y-4">
            <div 
                className="text-glow font-french-canon text-xxxs break-words"
                dangerouslySetInnerHTML={{ __html: text }} // WARNING: THIS WILL BE VULNERABLE TO XSS ATTACKS (make smth soon to prevent these attacks from occurring)
            />
        </div>
    );
}