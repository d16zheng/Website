import Card from "../components/card";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { Mail} from "lucide-react";

function Contact(){
    return (
        <section id="contact">
            <Card>
                <h2>Contact</h2>

                <div className="contact-links">
                    <a href="d16zheng@gmail.com">
                        <Mail size={20}/>
                        Email
                    </a>

                    <a
                        href="https://github.com/d16zheng"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub size={20} />
                        Github
                    </a>

                    <a
                        href="https://www.linkedin.com/in/d16zheng/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin size={20} />
                        LinkedIn
                    </a>
                </div>
            </Card>
        </section>
    );
}

export default Contact;
