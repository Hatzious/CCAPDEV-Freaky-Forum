import Navbar from "./Navbar";

export default function Mainlayout({ children }) {
    return(
        <div>
            <Navbar />
            {children}
        </div>
    );
}