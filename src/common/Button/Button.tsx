import "./Button.css"

interface Props {
    children: React.ReactNode;
    padding?: string;
    width?: string;
    styleButton: "outline" | "stuffed";
    onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, padding, width, styleButton, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`button ${styleButton}`}
            style={{
                padding,
                width
            }}
        >
            {children}
        </button>
    );
}

export default Button;
