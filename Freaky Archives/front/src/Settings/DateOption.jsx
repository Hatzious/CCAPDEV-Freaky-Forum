export default function DateOption({ idName, placeholder="Edit Date of Birth", description="Update your date of birth." }) {
    return (
        <div className="flex justify-between align-center w-full">
            <div className="text-glow font-french-canon text-xxxs">{description}</div>
            <input
                type="date"
                id={idName}
                className="w-64 h-8 px-4 border border-primary-2 bg-primary-1 text-primary-2 font-french-canon
                           placeholder-primary-2 placeholder-opacity-25 focus:outline-none 
                           focus:border-secondary-1 focus:border-upvote focus:shadow-lg focus:shadow-upvote"
                placeholder={placeholder} />
        </div>
    );
}