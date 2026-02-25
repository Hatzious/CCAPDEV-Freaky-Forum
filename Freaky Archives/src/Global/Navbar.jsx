import Logo from "./Logo";
import Click from "./Click";
import Icon from "./Icon";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-olive border-b border-border 
                        flex items-center px-8 h-8 z-50">
                  
            <div className="flex-1 flex justify-start">
                <Logo />
            </div>
           
            <div className="flex-none flex justify-center gap-24">
                <Click label="FORUM" />
                <Click label="SEARCH" />
            </div>

            <div className="flex-1 flex justify-end">
                <Icon />
            </div>
        </nav>
    );
}