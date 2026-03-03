export default function Prettytext({ children, textSize = "text-xxxxs", font }) {
    let styles = `text-glow ${textSize} font-french-canon`;

    return (
        <span className={styles}>
            { children }
        </span>
    );
}