export default function CreateAccountClick({ handleCreateAccount, loading }) {
    const styles = `inline-flex text-glow font-french-canon cursor-pointer
            text-shadow-faint
            transition-all duration-300 ease-in-out
            hover:text-shadow-glow hover:brightness-100 hover:animate-none
            text-sm
            `;
    const loadingStyle = loading ? 'opacity-50 cursor-not-allowed' : '';

    const label = loading ? "Creating..." : "Create Account";

    return (
        <button 
            onClick = {handleCreateAccount}
            disabled = {loading}
            className = {`${styles} ${loadingStyle}`}
        >
            {label}
        </button>
    );
}