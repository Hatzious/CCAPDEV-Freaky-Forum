export default function Prettytext({ children, fontSize = "text-xxxxs", fontStyle="font-french-canon" }) {
    let styles = `text-glow ${fontSize} ${fontStyle}`;

    return (
        <span className={styles}>
            { children }
        </span>
    );
}