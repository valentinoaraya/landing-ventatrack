import "./Button.css"

interface Props {
    children: React.ReactNode;
    padding?: string;
    width?: string;
    fontSize?: string;
    styleButton: "outline" | "stuffed";
    onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, padding, width, styleButton, onClick, fontSize }) => {
    return (
        <button
            onClick={onClick}
            className={`button ${styleButton}`}
            style={{
                padding,
                width,
                fontSize
            }}
        >
            {children}
        </button>
    );
}

export default Button;
