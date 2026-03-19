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
            <Reply author="Chase" hasQuote={false}
                   content="House, we need to cure this patient. He is very sick. 
                            Lorem ipsum testing if the paragraph being long can extend 
                            below the reply, extending the container and keeping the 
                            vote element in the top right side and the profile icon on 
                            the top left side." />
            
        </div>
    );
}