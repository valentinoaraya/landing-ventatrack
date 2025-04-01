import "./Feature.css"
import Title from "../../../common/Title/Title";

interface ImageData {
    path: string;
    alt: string;
    title: string;
    subtitle: string;
}

interface Props {
    title: string;
    subtitle: string;
    imagesAndData: ImageData[];
}

const Feature: React.FC<Props> = ({ title, subtitle, imagesAndData }) => {
    return (
        <div className="featureContainer">
            <h3 className="subtitleFeature">{subtitle}</h3>
            <Title
                fontWeight="450"
            >
                {title}
            </Title>
            <div className="imagesFeatures">
                {
                    imagesAndData.map((image, index) => {
                        return <div key={index} className="imageFeatureContainer">
                            <img className={imagesAndData.length > 1 ? "imageFeature" : "oneImageFeature"} src={image.path} alt={image.alt} />
                            <div className="titlesImage">
                                <p className="mainTitle">{image.title}</p>
                                <p className="subtitle">{image.subtitle}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Feature;
