import Logo from "./Logo";
import Click from "./Click";
import Icon from "./Icon";
import HoverBox from "./HoverBox";
import { useState } from "react";
import { useAuth } from "../Services/Auth";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const [showHoverBox, setShowHoverBox] = useState(false);
    const { user, login } = useAuth();
    const navigate = useNavigate();
    const signingUp = () => {
        login();
        navigate("/");
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-olive border-b border-border 
                        flex items-center px-8 h-[10vh] z-10 justify-between">
                  
            <div className="flex justify-start">
                <Logo size="text-normal" />
            </div>
           
            <div className="flex-none flex justify-center gap-24">
                <Click label="FORUM" to="/forum" />
                <Click label="SEARCH" />
            </div>

            <div className="flex justify-end relative gap-x-4">
                {user ? (
                        <div onMouseEnter={() => setShowHoverBox(true)} onMouseLeave={() => setShowHoverBox(false)}>
                            <Icon 
                            classes="cursor-pointer transition-all ease-in-out
                                    hover:bg-glow hover:animate-none hover:border-white"/>
                            {showHoverBox && (
                                <div>
                                    <HoverBox />
                                </div>
                )}
                        </div>
                        ) : (
                            <>
                                <Click label="Sign in" to="/login" size="text-xxs" bordered={true}/>
                                <Click label="Sign up" onClick={signingUp} size="text-xxs" bordered={true}/>
                            </>)
                }
            </div>
        </nav>
    );
}