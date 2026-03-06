export default function CreatePost() {
    return (
        <div className="flex justify-center items-center ">
            <div className="w-[70%] flex flex-col gap-[22px] pb-[120px] ">
                <div className="flex flex-col gap-[6px] bg-olive border border-border p-4 text-center w-[40%] mx-auto">
                    <div className="font-['var(--font-french-canon)'] text-glow text-[28px]">Create Post</div>
                    <div className="font-['var(--font-varela)'] text-info text-xxxs">Make your statement. Face your fears.</div>
                </div>

                <form id="post-form" className="flex flex-col gap-5 bg-olive border border-border p-5">
                    <label className="flex flex-col gap-2.5">
                        <span className="font-['var(--font-varela)'] text-glow text-xs tracking-[1px]">Title</span>
                        <input id="post-title" className="bg-[#070800] border border-border text-glow font-['var(--font-french-canon)'] text-lg tracking-[0.6px] p-3 outline-none focus:border-info focus:ring-1 focus:ring-[rgba(117,120,73,0.4)]" type="text" name="title" placeholder="Give your post a title" maxLength="120" required />
                    </label>

                    <div className="flex flex-col gap-2.5">
                        <span className="font-['var(--font-varela)'] text-glow text-xs tracking-[1px]">Body</span>
                        <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Formatting">
                            <button type="button" className="bg-olive border border-border text-glow font-['var(--font-french-canon)'] text-xs tracking-[1px] px-2.5 py-1.5 cursor-pointer hover:bg-[var(--primary-2)] hover:text-[var(--primary-1)]" data-md="**">Bold</button>
                            <button type="button" className="bg-olive border border-border text-glow font-['var(--font-french-canon)'] text-xs tracking-[1px] px-2.5 py-1.5 cursor-pointer hover:bg-[var(--primary-2)] hover:text-[var(--primary-1)]" data-md="*">Italic</button>
                            <button type="button" className="bg-olive border border-border text-glow font-['var(--font-french-canon)'] text-xs tracking-[1px] px-2.5 py-1.5 cursor-pointer hover:bg-[var(--primary-2)] hover:text-[var(--primary-1)]" data-md="~~">Strike</button>
                            <button type="button" className="bg-olive border border-border text-glow font-['var(--font-french-canon)'] text-xs tracking-[1px] px-2.5 py-1.5 cursor-pointer hover:bg-[var(--primary-2)] hover:text-[var(--primary-1)]" data-md="`">Code</button>
                            <button type="button" className="bg-olive border border-border text-glow font-['var(--font-french-canon)'] text-xs tracking-[1px] px-2.5 py-1.5 cursor-pointer hover:bg-[var(--primary-2)] hover:text-[var(--primary-1)]" data-md="> ">Quote</button>
                            <button type="button" className="bg-olive border border-border text-glow font-['var(--font-french-canon)'] text-xs tracking-[1px] px-2.5 py-1.5 cursor-pointer hover:bg-[var(--primary-2)] hover:text-[var(--primary-1)]" data-md="- ">List</button>
                        </div>
                        <textarea id="post-body" className="bg-[#070800] border border-border text-glow font-['var(--font-french-canon)'] text-lg tracking-[0.6px] p-3 outline-none focus:border-info focus:ring-1 focus:ring-[rgba(117,120,73,0.4)] max-w-[97%]" name="body" rows="14" placeholder="Share your story..." required></textarea>
                    </div>

                    <div className="flex justify-between items-center">
                        <button className="min-w-[120px] px-3 py-2.5 bg-olive border border-border text-glow font-['var(--font-french-canon)'] text-sm tracking-[1px] cursor-pointer hover:bg-[var(--primary-2)] hover:text-[var(--primary-1)]" type="submit">Post</button>
                    </div>
                </form>

                {/* <div className="flex flex-col gap-2.5 bg-olive border border-border p-5">
                    <div className="font-['var(--font-varela)'] text-glow text-xs tracking-[1px]">Preview</div>
                    <div id="post-preview" className="font-['var(--font-french-canon)'] text-glow text-lg tracking-[0.6px] leading-[1.6]"></div>
                </div> */}
            </div>
        </div>
    );
// }{
//     width: 90%;
//     display: flex;
//     flex-direction: column;
//     gap: 22px;
//     padding-bottom: 120px;
// }

// .header {
//     display: flex;
//     flex-direction: column;
//     gap: 6px;
//     background-color: #0A0B01;
//     border: solid 1px #252618;
//     padding: 16px 20px;
// }

// .heading {
//     font-family: var(--font-french-canon);
//     color: #EBECDA;
//     font-size: 28px;
//     letter-spacing: 1px;
// }

// .subheading {
//     font-family: var(--font-varela);
//     color: #757849;
//     font-size: 12px;
//     letter-spacing: 0.8px;
// }

// .postform {
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
//     background-color: #0A0B01;
//     border: solid 1px #252618;
//     padding: 20px;
// }

// .field {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
// }

// .label {
//     font-family: var(--font-varela);
//     color: #EBECDA;
//     font-size: 12px;
//     letter-spacing: 1px;
// }

// .input,
// .textarea {
//     background-color: #070800;
//     border: 1px solid #252618;
//     color: #EBECDA;
//     font-family: var(--font-french-canon);
//     font-size: 18px;
//     letter-spacing: 0.6px;
//     padding: 12px;
//     outline: none;
// }

// .input:focus,
// .textarea:focus {
//     border-color: #757849;
//     box-shadow: 0 0 0 1px rgba(117, 120, 73, 0.4);
// }

// .toolbar {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 8px;
// }

// .tool {
//     background-color: #0A0B01;
//     border: solid 1px #252618;
//     color: #EBECDA;
//     font-family: var(--font-french-canon);
//     font-size: 12px;
//     letter-spacing: 1px;
//     padding: 6px 10px;
//     cursor: pointer;
// }

// .tool:hover {
//     background-color: var(--primary-2);
//     color: var(--primary-1);
// }

// .actions {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// }

// .submit {
//     min-width: 120px;
//     padding: 10px 12px;
//     background-color: #0A0B01;
//     border: solid 1px #252618;
//     color: #EBECDA;
//     font-family: var(--font-french-canon);
//     font-size: 14px;
//     letter-spacing: 1px;
//     cursor: pointer;
// }

// .submit:hover {
//     background-color: var(--primary-2);
//     color: var(--primary-1);
// }

// .previewwrap {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//     background-color: #0A0B01;
//     border: solid 1px #252618;
//     padding: 20px;
// }

// .previewtitle {
//     font-family: var(--font-varela);
//     color: #EBECDA;
//     font-size: 12px;
//     letter-spacing: 1px;
// }

// .preview {
//     font-family: var(--font-french-canon);
//     color: #EBECDA;
//     font-size: 18px;
//     letter-spacing: 0.6px;
//     line-height: 1.6;
// }

// .preview h1,
// .preview h2,
// .preview h3 {
//     margin: 0 0 10px 0;
//     font-weight: 400;
// }

// .preview h1 {
//     font-size: 28px;
// }

// .preview h2 {
//     font-size: 24px;
// }

// .preview h3 {
//     font-size: 20px;
// }

// .preview p {
//     margin: 0 0 12px 0;
// }

// .preview ul {
//     margin: 0 0 12px 20px;
//     padding: 0;
// }

// .preview blockquote {
//     margin: 0 0 12px 0;
//     padding: 8px 12px;
//     border-left: 2px solid #757849;
//     background-color: #070800;
// }

// .preview code {
//     background-color: #070800;
//     border: 1px solid #252618;
//     padding: 2px 6px;
//     font-size: 16px;
// }

// .preview a {
//     color: #EBECDA;
//     text-decoration: underline;
// }

// .preview .spacer {
//     height: 10px;
// }
}