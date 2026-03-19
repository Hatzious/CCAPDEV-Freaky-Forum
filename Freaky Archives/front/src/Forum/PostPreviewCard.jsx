export default function PostPreviewCard({
  title = "Untitled Post",
  author = "Unknown",
  date = "Unknown date",
  views = 0,
  upvotes = 0,
  content = "No preview available.",
}) {
  return (
    <div className="absolute left-20 top-full mt-2 w-[min(25rem,92vw)] border border-white/20 bg-black/70 p-4 shadow-xl backdrop-blur-md text-white z-50">
      <div className="flex flex-col gap-2">
        <h1 className="text-xxxs font-french-canon leading-tight text-white">
          {title}
        </h1>

        <div className="flex flex-row gap-4 text-xxxxxs text-info font-varela">
          <span >{author}</span>
          <span >{date}</span>
          <span>Views: {views}</span>
          <span>Upvotes: {upvotes}</span>
        </div>

        <hr className="border-border my-2" />

        <p className="text-xxxxxs leading-relaxed line-clamp-10 text-white font-french-canon">
          {content}
        </p>
      </div>
    </div>
  );
}
