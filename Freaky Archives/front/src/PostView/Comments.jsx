import Click from "../Global/Click";
import Reply from "./Reply";

export default function Comments() {
    return (
        <div className="flex flex-col h-auto w-full items-center gap-y-4 mt-5 mb-25">
            {/* Buttons */}
            <div className="flex w-full justify-end gap-x-10">
                <Click label="Lock" size="text-xxxs" />
                <Click label="Reply" size="text-xxxs" />
            </div>

            {/* Replies */}
            <Reply author="Chase" hasQuote={false}
                   content="House, we need to cure this patient. He is very sick. 
                            Lorem ipsum testing if the paragraph being long can extend 
                            below the reply, extending the container and keeping the 
                            vote element in the top right side and the profile icon on 
                            the top left side." />
            <Reply author="House" date="04/21/2067" hasQuote={true} 
                   content="Did you try the medicine drug?"
                   quoteAuthor="Chase"
                   quote="House, we need to cure this patient. He is very sick. 
                          Lorem ipsum testing if the paragraph being long can extend 
                          below the reply, extending the container and keeping the 
                          vote element in the top right side and the profile icon on 
                          the top left side." />
        </div>
    );
}