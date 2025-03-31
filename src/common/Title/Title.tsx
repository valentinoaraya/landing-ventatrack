import "./Title.css"

interface Props {
    children: React.ReactNode;
    fontSize?: string;
    textAlign?: "start" | "center" | "end";
    fontWeight?: string;
    width?: string;
    padding?: string;
}

const Title: React.FC<Props> = ({ children, fontSize, fontWeight, textAlign }) => {
    return (
        <h1
            className="title"
            style={{
                fontSize,
                fontWeight,
                textAlign
            }}
        >
            {children}
        </h1>
    );
}

export default Title;
