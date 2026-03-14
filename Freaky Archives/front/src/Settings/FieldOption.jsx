export default function FieldOption({ idName, placeholder="Change Username", description="does something useful" }) {
    return (
        <div className="flex justify-between align-center w-full">
            <div className="text-glow font-french-canon text-xxxs">{description}</div>
            <input
                type="text"
                id={idName}
                className="w-64 h-8 px-4 py-3 border border-primary-2 bg-primary-1 font-french-canon
                        text-french-canon placeholder-primary-2 placeholder-opacity-25 focus:outline-none 
                        focus:border-upvote focus:shadow-lg focus:shadow-upvote"
                placeholder={placeholder} />
        </div>
    );
}