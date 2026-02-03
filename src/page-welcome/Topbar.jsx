import Freakyname from "./Freakyname";
import Dual from "./Dual";
import Custombutton from "./Custombutton";

export default function Topbar() {
    return (
    <div className="text-l w-full z-50 absolute top-5 flex items-center border border-solid border-b-primary-2 px-6">
        <div className="flex justify-start mb-2">
        <Freakyname />
        </div>
        <Dual className="text-normal flex flex-5 justify-center space-x-10 text-secondary-1">
            <p>Forum</p>
            <p>Account</p>
        </Dual>
        <Dual className="text-normal flex flex-1 justify-end space-x-4 text-secondary-1">
            <Custombutton>Sign In</Custombutton>
            <Custombutton>Register</Custombutton>
        </Dual>
        </div>
    );
}