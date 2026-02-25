import { Outlet } from "react-router-dom";
import Navbar from "../Global/Navbar";
import Explayout from "./Explayout";

export default function Mainlayout() {
    return (
        <Explayout>
            <Navbar />
            <main className="flex-1 w-full pt-10"> 
                <Outlet /> 
            </main>
        </Explayout>
    );
}