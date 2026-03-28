import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE } from "../Services/api";
import { useAuth } from '../Services/Auth';

export default function Option({ idName, label="button", description="does something useful" }) {
    const [showConfirm, setShowConfirm] = useState(false);
    const navigate = useNavigate();
    const { logout } = useAuth();

    const userDeletion = async () => {
                try {
                    const response = await fetch(`${API_BASE}/Auth/delete`, {
                        method: "DELETE",
                        credentials: "include"
                    });
                    
                    if (response.ok) {
                        const data = await response.json();
                        console.log(data.message);
                        setShowConfirm(false)
                        logout();
                        navigate('/');
                    }
        
        
                } catch (error) {
                    console.error("User deletion failed at front:", error);
                }
            };

    if (idName === "delete-account") {
        if (showConfirm) {
            return (
                <div className="flex flex-col items-center w-full">
                    <div className="text-glow font-french-canon text-xxxs mb-2">Are you sure?</div>
                    <div className="flex gap-2">
                        <div className="items-center w-16 h-8 text-center bg-accent-dark-1 border border-border text-glow font-french-canon
                            text-xxxs cursor-pointer 
                            hover:text-shadow-compact hover:brightness-80 transition-all duration-300 ease-in-out"
                            onClick={() => setShowConfirm(false)}>
                            No
                        </div>
                        <div className="items-center w-16 h-8 text-center bg-accent-dark-1 border border-border text-glow font-french-canon
                            text-xxxs cursor-pointer 
                            hover:text-shadow-compact hover:brightness-80 transition-all duration-300 ease-in-out"
                            onClick={userDeletion}>
                            Yes
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="flex justify-between items-center w-full">
                <div className="text-glow font-french-canon text-xxxs">{description}</div>
                <div className="self-end items-center w-36 h-8 text-center bg-accent-dark-1 border border-border text-glow font-french-canon
                    text-xxxs cursor-pointer 
                    hover:text-shadow-compact hover:brightness-80 transition-all duration-300 ease-in-out"
                    onClick={() => setShowConfirm(true)}>
                    DELETE
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-between items-center w-full">
            <div className="text-glow font-french-canon text-xxxs">{description}</div>
            <div className="bg-border rounded-1/2 w-24 h-8 relative cursor-pointer flex items-center justify-center text-center">
                <input type="button" className="sr-only" id={idName} />
                <label htmlFor={idName} className="absolute inset-0"></label>
                <span className="text-auto font-bold text-secondary-1">{label}</span>
            </div>
        </div>
    );
}