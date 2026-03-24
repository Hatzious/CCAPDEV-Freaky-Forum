import Row from "./Row";
import Middle from "./Middle";
import { useAuth } from "../Services/Auth";
import { useNavigate } from "react-router-dom";
import Explayout from "../Contain/Explayout";

const images = import.meta.glob('../../public/pic/*.{png,jpg,jpeg,SVG}', { eager: true });
const allImages = Object.values(images).map((mod) => mod.default);

export default function Dread() {
    const topRow= allImages.slice(0, 5);
    const botRow= allImages.slice(5, 11);
    const midRow1= allImages.slice(11, 13);
    const midRow2= allImages.slice(13, 16);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleAvatarSelect = async (imgUrl) => {

        const cleanUrl = imgUrl.split('public')[1] || imgUrl;

        try {
            const response = await fetch("http://localhost:5000/api/Auth/editPic", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ 
                    avatarUrl: cleanUrl 
                })
            });

            if (response.ok) {
                const data = await response.json();
                login(data.user); 
                navigate("/forum");
            }
            
            } catch (error) {
                console.error("Failed to update avatar", error);
            }
        };

    return (
        <Explayout classes="justify-center items-center -mt-10">
            <div className="flex flex-col gap-y-24">
                <div className="flex items-center flex-col gap-x-1">
                    <Row arr={topRow} onSelect={handleAvatarSelect}/>
                </div>
                <div className="flex items-center flex-col gap-x-1">
                    <Middle arr1={midRow1} arr2={midRow2} onSelect={handleAvatarSelect} />
                </div>
                <div className="flex items-center flex-col gap-x-1">
                    <Row arr={botRow} onSelect={handleAvatarSelect} />
                </div>
            </div>
        </Explayout>
    );
}