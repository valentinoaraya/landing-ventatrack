import "./Footer.css"
import { MailIcon, PhoneIcon, InstagramIcon } from "../../common/Icons/Icons";

const Footer = () => {
    return (
        <footer>
            <div className="dataFooter">
                <h3>VentaTrack by Aedes</h3>
                <p>© 2025 VentaTrack. Todos los derechos reservados.</p>
            </div>
            <div className="contacts">
                <div className="contact">
                    <MailIcon
                        width="24px"
                        height="24px"
                        fill="#252323"
                    />
                    <p>valentinoaraya04@gmail.com</p>
                </div>
                <div className="contact">
                    <InstagramIcon
                        width="24px"
                        height="24px"
                        fill="#252323"
                    />
                    <p>@tinoaraya</p>
                </div>
                <div className="contact">
                    <PhoneIcon
                        width="24px"
                        height="24px"
                        fill="#252323"
                    />
                    <p>(+54) 2625660880</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
