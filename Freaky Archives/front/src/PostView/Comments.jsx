import Click from "../Global/Click";
import Reply from "./Reply";

export default function Comments({ coming }) {
    return (
        <div className="flex flex-col h-auto w-full items-center gap-y-4 mt-5 mb-25">
            {/* Buttons */}
            <div className="flex w-full justify-end gap-x-10">
                <Click label="Lock" size="text-xxxs" />
                <Click label="Reply" size="text-xxxs" />
            </div>

            {/* Replies */}
            {coming.length > 0 ? (
                            coming.map((entry) => (
                                <Reply
                                    key={entry._id}
                                    data={entry} 
                                />
                            ))
                        ) : (
                            <div className="text-info p-10">No Commento</div>
                        )}
            
        </div>
    );
}