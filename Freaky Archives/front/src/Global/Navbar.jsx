import Logo from "./Logo";
import Click from "./Click";
import Icon from "./Icon";
import HoverBox from "./HoverBox";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useAuth } from "../Services/Auth";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const [showHoverBox, setShowHoverBox] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
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
           
            <div className="flex items-center justify-center gap-24 -ml-[15vh]">
                <Click label="FORUM" to="/forum" />
                <div className="flex items-center gap-4">
                    {!showSearchBar ? (
                        <Click label="SEARCH" onClick={() => setShowSearchBar(true)} />
                    ) : (<SearchBar onClose={() => setShowSearchBar(false)} />
                    )}
                </div>
            </div>

            <div className="flex justify-end relative gap-x-4">
                {user ? (
                    <div onMouseEnter={() => setShowHoverBox(true)} onMouseLeave={() => setShowHoverBox(false)}>
                        <Icon 
                        classes="cursor-pointer transition-all ease-in-out
                                hover:bg-glow hover:animate-none hover:border-white" source={user.profile.avatarUrl}/>
                        {showHoverBox && (
                            <div>
                                <HoverBox />
                            </div>
                        )}
                    </div>
                    ) : (
                    <>
                        <Click label="Sign in" to="/login" size="text-xxs"/>
                        <Click label="Sign up" to="/register" size="text-xxs"/>
                    </>)
                }
            </div>
        </nav>
    );
}