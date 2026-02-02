export default function Background() {
    return (
        <div 
            className="fixed inset-0 -z-10"
            style={{
                background: 'radial-gradient(circle, rgba(3, 12, 2, 1) 20%, rgba(0, 0, 0, 1) 100%)'
            }}
        />
    );
}